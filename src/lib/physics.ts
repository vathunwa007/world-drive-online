type CarProfile = {
  maxSpeed: number;
  maxReverseSpeed: number;
  acceleration: number;
  braking: number;
  friction: number;
  drag: number;
  maxSteeringAngle: number;
  turnMultiplier: number;
  steeringResponse: number;
  pitchEffect: number;
  rollEffect: number;
};

const CAR_PROFILES: Record<string, CarProfile> = {
  car: {
    maxSpeed: 0.00001,
    maxReverseSpeed: 0.000003,
    acceleration: 0.0000002,
    braking: 0.0000005,
    friction: 0.992,
    drag: 0.995,
    maxSteeringAngle: 40,
    turnMultiplier: 12.0,
    steeringResponse: 0.15,
    pitchEffect: 1.0,
    rollEffect: 0.4,
  },
  suv: {
    maxSpeed: 0.000008,
    maxReverseSpeed: 0.0000025,
    acceleration: 0.00000018,
    braking: 0.0000004,
    friction: 0.991,
    drag: 0.994,
    maxSteeringAngle: 38,
    turnMultiplier: 10.0,
    steeringResponse: 0.12,
    pitchEffect: 1.2,
    rollEffect: 0.5,
  },
  bus: {
    maxSpeed: 0.000006,
    maxReverseSpeed: 0.0000015,
    acceleration: 0.00000012,
    braking: 0.0000003,
    friction: 0.990,
    drag: 0.992,
    maxSteeringAngle: 30,
    turnMultiplier: 5.0,
    steeringResponse: 0.08,
    pitchEffect: 0.6,
    rollEffect: 0.6,
  },
  compact: {
    maxSpeed: 0.000009,
    maxReverseSpeed: 0.0000028,
    acceleration: 0.00000022,
    braking: 0.0000005,
    friction: 0.993,
    drag: 0.996,
    maxSteeringAngle: 42,
    turnMultiplier: 13.0,
    steeringResponse: 0.18,
    pitchEffect: 1.0,
    rollEffect: 0.35,
  },
};

const DEFAULT_PROFILE = CAR_PROFILES.car;

export class CarPhysics {
  public lat: number;
  public lng: number;
  public heading: number; // degrees, 0 is North
  public speed: number = 0;
  public steeringAngle: number = 0;
  public pitch: number = 0; // radians
  public roll: number = 0; // radians
  public onRoad: boolean = true;

  private profile: CarProfile;

  // Off-road modifiers
  private readonly OFFROAD_SPEED_FACTOR = 0.4;
  private readonly OFFROAD_ACCEL_FACTOR = 0.5;
  private readonly OFFROAD_FRICTION = 0.975;
  private readonly OFFROAD_DRAG = 0.980;

  constructor(lat: number, lng: number, heading: number = 0, carType?: string) {
    this.lat = lat;
    this.lng = lng;
    this.heading = heading;
    this.profile = (carType && CAR_PROFILES[carType]) || DEFAULT_PROFILE;
  }

  public setCarType(carType: string) {
    this.profile = CAR_PROFILES[carType] || DEFAULT_PROFILE;
  }

  public update(keys: { [key: string]: boolean }) {
    const p = this.profile;

    // Steering input
    let targetSteering = 0;
    if (keys['ArrowLeft'] || keys['a']) {
      targetSteering = -p.maxSteeringAngle;
    } else if (keys['ArrowRight'] || keys['d']) {
      targetSteering = p.maxSteeringAngle;
    }

    // Smooth steering — heavier vehicles respond slower
    this.steeringAngle += (targetSteering - this.steeringAngle) * p.steeringResponse;

    // Terrain-aware physics
    const terrainAccelFactor = this.onRoad ? 1.0 : this.OFFROAD_ACCEL_FACTOR;
    const terrainSpeedFactor = this.onRoad ? 1.0 : this.OFFROAD_SPEED_FACTOR;
    const terrainFriction = this.onRoad ? p.friction : this.OFFROAD_FRICTION;
    const terrainDrag = this.onRoad ? p.drag : this.OFFROAD_DRAG;
    const effectiveMaxSpeed = p.maxSpeed * terrainSpeedFactor;
    const effectiveMaxReverse = p.maxReverseSpeed * terrainSpeedFactor;

    // Acceleration decreases as speed increases (power curve)
    const speedRatio = Math.abs(this.speed) / p.maxSpeed;
    const currentAcceleration = p.acceleration * (1 - speedRatio * 0.5) * terrainAccelFactor;

    let isAccelerating = false;
    let isBraking = false;

    if (keys['ArrowUp'] || keys['w']) {
      if (this.speed < 0) {
        this.speed += p.braking;
        isBraking = true;
      } else {
        this.speed += currentAcceleration;
        isAccelerating = true;
      }
    } else if (keys['ArrowDown'] || keys['s']) {
      if (this.speed > 0) {
        this.speed -= p.braking;
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

    // Turn speed — bus turns much wider than sports car
    const gripFactor = Math.max(0.3, 1 - speedRatio * 0.7);
    const turnSpeed = (this.steeringAngle / p.maxSteeringAngle) * gripFactor * (this.speed / p.maxSpeed) * p.turnMultiplier;

    this.heading += turnSpeed;

    // Speed bleeds off when turning sharply
    const scrubFriction = 1 - (Math.abs(this.steeringAngle) / p.maxSteeringAngle) * 0.01;
    this.speed *= scrubFriction;

    // Normalize heading
    this.heading = (this.heading + 360) % 360;

    // Suspension effects
    let targetPitch = 0;
    const speedSign = this.speed > 0.0000001 ? 1 : (this.speed < -0.0000001 ? -1 : 0);

    if (isBraking && speedSign !== 0) {
      targetPitch = speedSign * -2.5 * p.pitchEffect;
    } else if (isAccelerating) {
      targetPitch = (speedSign !== 0 ? speedSign : 1) * 1.5 * p.pitchEffect;
    }
    this.pitch += (targetPitch - this.pitch) * 0.1;

    // Roll
    const targetRoll = turnSpeed * speedRatio * p.rollEffect;
    this.roll += (targetRoll - this.roll) * 0.15;

    // Update position
    const headingRad = (90 - this.heading) * (Math.PI / 180);
    this.lng += Math.cos(headingRad) * this.speed;
    this.lat += Math.sin(headingRad) * this.speed;
  }
}
