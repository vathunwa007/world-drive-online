export class CarPhysics {
  public lat: number;
  public lng: number;
  public heading: number; // degrees, 0 is North
  public speed: number = 0;
  public steeringAngle: number = 0;
  public pitch: number = 0; // radians
  public roll: number = 0; // radians
  public onRoad: boolean = true; // Whether the car is currently on a road

  // On-road constants
  private readonly MAX_SPEED = 0.00001; // Approx 240 km/h
  private readonly MAX_REVERSE_SPEED = 0.000003; // Approx 72 km/h
  private readonly BASE_ACCELERATION = 0.0000002;
  private readonly BASE_BRAKING = 0.0000005;
  private readonly FRICTION = 0.992;
  private readonly DRAG = 0.995; // Air resistance
  private readonly MAX_STEERING_ANGLE = 40; // degrees

  // Off-road modifiers
  private readonly OFFROAD_SPEED_FACTOR = 0.4; // Max speed is 40% of on-road
  private readonly OFFROAD_ACCEL_FACTOR = 0.5; // Acceleration is 50% of on-road
  private readonly OFFROAD_FRICTION = 0.975; // Much more friction off-road
  private readonly OFFROAD_DRAG = 0.980; // More drag off-road

  constructor(lat: number, lng: number, heading: number = 0) {
    this.lat = lat;
    this.lng = lng;
    this.heading = heading;
  }

  public update(keys: { [key: string]: boolean }) {
    // Steering input
    let targetSteering = 0;
    if (keys['ArrowLeft'] || keys['a']) {
      targetSteering = -this.MAX_STEERING_ANGLE;
    } else if (keys['ArrowRight'] || keys['d']) {
      targetSteering = this.MAX_STEERING_ANGLE;
    }
    
    // Smooth steering
    this.steeringAngle += (targetSteering - this.steeringAngle) * 0.15;

    // Terrain-aware physics: on-road vs off-road
    const terrainAccelFactor = this.onRoad ? 1.0 : this.OFFROAD_ACCEL_FACTOR;
    const terrainSpeedFactor = this.onRoad ? 1.0 : this.OFFROAD_SPEED_FACTOR;
    const terrainFriction = this.onRoad ? this.FRICTION : this.OFFROAD_FRICTION;
    const terrainDrag = this.onRoad ? this.DRAG : this.OFFROAD_DRAG;
    const effectiveMaxSpeed = this.MAX_SPEED * terrainSpeedFactor;
    const effectiveMaxReverse = this.MAX_REVERSE_SPEED * terrainSpeedFactor;

    // Acceleration & Braking with nuanced curves
    // Acceleration decreases as speed increases (power curve)
    const speedRatio = Math.abs(this.speed) / this.MAX_SPEED;
    const currentAcceleration = this.BASE_ACCELERATION * (1 - speedRatio * 0.5) * terrainAccelFactor;

    let isAccelerating = false;
    let isBraking = false;

    if (keys['ArrowUp'] || keys['w']) {
      if (this.speed < 0) {
        // Braking while reversing
        this.speed += this.BASE_BRAKING;
        isBraking = true;
      } else {
        this.speed += currentAcceleration;
        isAccelerating = true;
      }
    } else if (keys['ArrowDown'] || keys['s']) {
      if (this.speed > 0) {
        // Braking while moving forward
        this.speed -= this.BASE_BRAKING;
        isBraking = true;
      } else {
        this.speed -= currentAcceleration;
        isAccelerating = true;
      }
    }

    // Apply terrain-aware friction and drag
    this.speed *= terrainFriction;
    this.speed *= terrainDrag;

    // Cap speed based on terrain
    if (this.speed > effectiveMaxSpeed) this.speed = effectiveMaxSpeed;
    if (this.speed < -effectiveMaxReverse) this.speed = -effectiveMaxReverse;

    // Stop completely if very slow and no input
    if (Math.abs(this.speed) < 0.00000001 && !isAccelerating && !isBraking) {
      this.speed = 0;
    }

    // Turn speed depends on forward speed and steering angle
    // Realistic tire friction: less grip at high speeds
    const gripFactor = Math.max(0.3, 1 - speedRatio * 0.7);
    // Increased multiplier to 12.0 to make the turning radius extremely tight
    const turnSpeed = (this.steeringAngle / this.MAX_STEERING_ANGLE) * gripFactor * (this.speed / this.MAX_SPEED) * 12.0;
    
    this.heading += turnSpeed;

    // Speed bleeds off when turning sharply (scrub radius/friction)
    const scrubFriction = 1 - (Math.abs(this.steeringAngle) / this.MAX_STEERING_ANGLE) * 0.01;
    this.speed *= scrubFriction;

    // Normalize heading
    this.heading = (this.heading + 360) % 360;

    // Suspension effects (Pitch and Roll)
    // Pitch: dives when braking, squats when accelerating
    let targetPitch = 0;
    const speedSign = this.speed > 0.0000001 ? 1 : (this.speed < -0.0000001 ? -1 : 0);
    
    if (isBraking && speedSign !== 0) {
      targetPitch = speedSign * -2.5; // Dive (negative pitch)
    } else if (isAccelerating) {
      targetPitch = (speedSign !== 0 ? speedSign : 1) * 1.5; // Squat (positive pitch)
    }
    this.pitch += (targetPitch - this.pitch) * 0.1;

    // Roll: leans outward during turns based on speed and steering
    // turnSpeed is negative when turning left, we want to lean right (outward).
    // Positive roll leans left, so we want negative roll to lean right.
    // If turnSpeed is negative (left), we want negative roll. So targetRoll = turnSpeed.
    const targetRoll = turnSpeed * speedRatio * 0.4;
    this.roll += (targetRoll - this.roll) * 0.15;

    // Update position
    const headingRad = (90 - this.heading) * (Math.PI / 180);
    this.lng += Math.cos(headingRad) * this.speed;
    this.lat += Math.sin(headingRad) * this.speed;
  }
}
