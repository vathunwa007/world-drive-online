(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var gf={exports:{}},ca={},_f={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function nx(){if(Wm)return vt;Wm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(N,J,Re){this.props=N,this.context=J,this.refs=E,this.updater=Re||v}y.prototype.isReactComponent={},y.prototype.setState=function(N,J){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,J,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(N,J,Re){this.props=N,this.context=J,this.refs=E,this.updater=Re||v}var L=R.prototype=new S;L.constructor=R,M(L,y.prototype),L.isPureReactComponent=!0;var C=Array.isArray,O=Object.prototype.hasOwnProperty,D={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(N,J,Re){var _e,De={},ee=null,he=null;if(J!=null)for(_e in J.ref!==void 0&&(he=J.ref),J.key!==void 0&&(ee=""+J.key),J)O.call(J,_e)&&!k.hasOwnProperty(_e)&&(De[_e]=J[_e]);var ce=arguments.length-2;if(ce===1)De.children=Re;else if(1<ce){for(var Ce=Array(ce),Le=0;Le<ce;Le++)Ce[Le]=arguments[Le+2];De.children=Ce}if(N&&N.defaultProps)for(_e in ce=N.defaultProps,ce)De[_e]===void 0&&(De[_e]=ce[_e]);return{$$typeof:o,type:N,key:ee,ref:he,props:De,_owner:D.current}}function P(N,J){return{$$typeof:o,type:N.type,key:J,ref:N.ref,props:N.props,_owner:N._owner}}function ae(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function F(N){var J={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Re){return J[Re]})}var W=/\/+/g;function X(N,J){return typeof N=="object"&&N!==null&&N.key!=null?F(""+N.key):J.toString(36)}function ne(N,J,Re,_e,De){var ee=typeof N;(ee==="undefined"||ee==="boolean")&&(N=null);var he=!1;if(N===null)he=!0;else switch(ee){case"string":case"number":he=!0;break;case"object":switch(N.$$typeof){case o:case e:he=!0}}if(he)return he=N,De=De(he),N=_e===""?"."+X(he,0):_e,C(De)?(Re="",N!=null&&(Re=N.replace(W,"$&/")+"/"),ne(De,J,Re,"",function(Le){return Le})):De!=null&&(ae(De)&&(De=P(De,Re+(!De.key||he&&he.key===De.key?"":(""+De.key).replace(W,"$&/")+"/")+N)),J.push(De)),1;if(he=0,_e=_e===""?".":_e+":",C(N))for(var ce=0;ce<N.length;ce++){ee=N[ce];var Ce=_e+X(ee,ce);he+=ne(ee,J,Re,Ce,De)}else if(Ce=g(N),typeof Ce=="function")for(N=Ce.call(N),ce=0;!(ee=N.next()).done;)ee=ee.value,Ce=_e+X(ee,ce++),he+=ne(ee,J,Re,Ce,De);else if(ee==="object")throw J=String(N),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return he}function q(N,J,Re){if(N==null)return N;var _e=[],De=0;return ne(N,_e,"","",function(ee){return J.call(Re,ee,De++)}),_e}function $(N){if(N._status===-1){var J=N._result;J=J(),J.then(function(Re){(N._status===0||N._status===-1)&&(N._status=1,N._result=Re)},function(Re){(N._status===0||N._status===-1)&&(N._status=2,N._result=Re)}),N._status===-1&&(N._status=0,N._result=J)}if(N._status===1)return N._result.default;throw N._result}var B={current:null},Y={transition:null},Z={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:Y,ReactCurrentOwner:D};function se(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:q,forEach:function(N,J,Re){q(N,function(){J.apply(this,arguments)},Re)},count:function(N){var J=0;return q(N,function(){J++}),J},toArray:function(N){return q(N,function(J){return J})||[]},only:function(N){if(!ae(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},vt.Component=y,vt.Fragment=t,vt.Profiler=s,vt.PureComponent=R,vt.StrictMode=i,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,vt.act=se,vt.cloneElement=function(N,J,Re){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var _e=M({},N.props),De=N.key,ee=N.ref,he=N._owner;if(J!=null){if(J.ref!==void 0&&(ee=J.ref,he=D.current),J.key!==void 0&&(De=""+J.key),N.type&&N.type.defaultProps)var ce=N.type.defaultProps;for(Ce in J)O.call(J,Ce)&&!k.hasOwnProperty(Ce)&&(_e[Ce]=J[Ce]===void 0&&ce!==void 0?ce[Ce]:J[Ce])}var Ce=arguments.length-2;if(Ce===1)_e.children=Re;else if(1<Ce){ce=Array(Ce);for(var Le=0;Le<Ce;Le++)ce[Le]=arguments[Le+2];_e.children=ce}return{$$typeof:o,type:N.type,key:De,ref:ee,props:_e,_owner:he}},vt.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:a,_context:N},N.Consumer=N},vt.createElement=w,vt.createFactory=function(N){var J=w.bind(null,N);return J.type=N,J},vt.createRef=function(){return{current:null}},vt.forwardRef=function(N){return{$$typeof:f,render:N}},vt.isValidElement=ae,vt.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:$}},vt.memo=function(N,J){return{$$typeof:h,type:N,compare:J===void 0?null:J}},vt.startTransition=function(N){var J=Y.transition;Y.transition={};try{N()}finally{Y.transition=J}},vt.unstable_act=se,vt.useCallback=function(N,J){return B.current.useCallback(N,J)},vt.useContext=function(N){return B.current.useContext(N)},vt.useDebugValue=function(){},vt.useDeferredValue=function(N){return B.current.useDeferredValue(N)},vt.useEffect=function(N,J){return B.current.useEffect(N,J)},vt.useId=function(){return B.current.useId()},vt.useImperativeHandle=function(N,J,Re){return B.current.useImperativeHandle(N,J,Re)},vt.useInsertionEffect=function(N,J){return B.current.useInsertionEffect(N,J)},vt.useLayoutEffect=function(N,J){return B.current.useLayoutEffect(N,J)},vt.useMemo=function(N,J){return B.current.useMemo(N,J)},vt.useReducer=function(N,J,Re){return B.current.useReducer(N,J,Re)},vt.useRef=function(N){return B.current.useRef(N)},vt.useState=function(N){return B.current.useState(N)},vt.useSyncExternalStore=function(N,J,Re){return B.current.useSyncExternalStore(N,J,Re)},vt.useTransition=function(){return B.current.useTransition()},vt.version="18.3.1",vt}var Xm;function rh(){return Xm||(Xm=1,_f.exports=nx()),_f.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jm;function ix(){if(jm)return ca;jm=1;var o=rh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var m,_={},g=null,v=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(v=d.ref);for(m in d)i.call(d,m)&&!a.hasOwnProperty(m)&&(_[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)_[m]===void 0&&(_[m]=d[m]);return{$$typeof:e,type:f,key:g,ref:v,props:_,_owner:s.current}}return ca.Fragment=t,ca.jsx=c,ca.jsxs=c,ca}var qm;function rx(){return qm||(qm=1,gf.exports=ix()),gf.exports}var me=rx(),Qe=rh(),Hl={},vf={exports:{}},Hn={},xf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function sx(){return Ym||(Ym=1,(function(o){function e(Y,Z){var se=Y.length;Y.push(Z);e:for(;0<se;){var N=se-1>>>1,J=Y[N];if(0<s(J,Z))Y[N]=Z,Y[se]=J,se=N;else break e}}function t(Y){return Y.length===0?null:Y[0]}function i(Y){if(Y.length===0)return null;var Z=Y[0],se=Y.pop();if(se!==Z){Y[0]=se;e:for(var N=0,J=Y.length,Re=J>>>1;N<Re;){var _e=2*(N+1)-1,De=Y[_e],ee=_e+1,he=Y[ee];if(0>s(De,se))ee<J&&0>s(he,De)?(Y[N]=he,Y[ee]=se,N=ee):(Y[N]=De,Y[_e]=se,N=_e);else if(ee<J&&0>s(he,se))Y[N]=he,Y[ee]=se,N=ee;else break e}}return Z}function s(Y,Z){var se=Y.sortIndex-Z.sortIndex;return se!==0?se:Y.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,_=null,g=3,v=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(Y){for(var Z=t(h);Z!==null;){if(Z.callback===null)i(h);else if(Z.startTime<=Y)i(h),Z.sortIndex=Z.expirationTime,e(d,Z);else break;Z=t(h)}}function C(Y){if(E=!1,L(Y),!M)if(t(d)!==null)M=!0,$(O);else{var Z=t(h);Z!==null&&B(C,Z.startTime-Y)}}function O(Y,Z){M=!1,E&&(E=!1,S(w),w=-1),v=!0;var se=g;try{for(L(Z),_=t(d);_!==null&&(!(_.expirationTime>Z)||Y&&!F());){var N=_.callback;if(typeof N=="function"){_.callback=null,g=_.priorityLevel;var J=N(_.expirationTime<=Z);Z=o.unstable_now(),typeof J=="function"?_.callback=J:_===t(d)&&i(d),L(Z)}else i(d);_=t(d)}if(_!==null)var Re=!0;else{var _e=t(h);_e!==null&&B(C,_e.startTime-Z),Re=!1}return Re}finally{_=null,g=se,v=!1}}var D=!1,k=null,w=-1,P=5,ae=-1;function F(){return!(o.unstable_now()-ae<P)}function W(){if(k!==null){var Y=o.unstable_now();ae=Y;var Z=!0;try{Z=k(!0,Y)}finally{Z?X():(D=!1,k=null)}}else D=!1}var X;if(typeof R=="function")X=function(){R(W)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,q=ne.port2;ne.port1.onmessage=W,X=function(){q.postMessage(null)}}else X=function(){y(W,0)};function $(Y){k=Y,D||(D=!0,X())}function B(Y,Z){w=y(function(){Y(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_continueExecution=function(){M||v||(M=!0,$(O))},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var se=g;g=Z;try{return Y()}finally{g=se}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(Y,Z){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var se=g;g=Y;try{return Z()}finally{g=se}},o.unstable_scheduleCallback=function(Y,Z,se){var N=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?N+se:N):se=N,Y){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=se+J,Y={id:m++,callback:Z,priorityLevel:Y,startTime:se,expirationTime:J,sortIndex:-1},se>N?(Y.sortIndex=se,e(h,Y),t(d)===null&&Y===t(h)&&(E?(S(w),w=-1):E=!0,B(C,se-N))):(Y.sortIndex=J,e(d,Y),M||v||(M=!0,$(O))),Y},o.unstable_shouldYield=F,o.unstable_wrapCallback=function(Y){var Z=g;return function(){var se=g;g=Z;try{return Y.apply(this,arguments)}finally{g=se}}}})(yf)),yf}var Km;function ox(){return Km||(Km=1,xf.exports=sx()),xf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function ax(){if($m)return Hn;$m=1;var o=rh(),e=ox();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function g(n){return d.call(_,n)?!0:d.call(m,n)?!1:h.test(n)?_[n]=!0:(m[n]=!0,!1)}function v(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,u){if(r===null||typeof r>"u"||v(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,u,p,x,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=x,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,R);y[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,R);y[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,R);y[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,u)&&(l=null),u||p===null?g(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var C=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),D=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),F=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),B=Symbol.for("react.offscreen"),Y=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,N;function J(n){if(N===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Re=!1;function _e(n,r){if(!n||Re)return"";Re=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(le){var u=le}Reflect.construct(n,[],r)}else{try{r.call()}catch(le){u=le}n.call(r.prototype)}else{try{throw Error()}catch(le){u=le}n()}}catch(le){if(le&&u&&typeof le.stack=="string"){for(var p=le.stack.split(`
`),x=u.stack.split(`
`),A=p.length-1,U=x.length-1;1<=A&&0<=U&&p[A]!==x[U];)U--;for(;1<=A&&0<=U;A--,U--)if(p[A]!==x[U]){if(A!==1||U!==1)do if(A--,U--,0>U||p[A]!==x[U]){var z=`
`+p[A].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=A&&0<=U);break}}}finally{Re=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?J(n):""}function De(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=_e(n.type,!1),n;case 11:return n=_e(n.type.render,!1),n;case 1:return n=_e(n.type,!0),n;default:return""}}function ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case D:return"Portal";case P:return"Profiler";case w:return"StrictMode";case X:return"Suspense";case ne:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case ae:return(n._context.displayName||"Context")+".Provider";case W:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case q:return r=n.displayName||null,r!==null?r:ee(n.type)||"Memo";case $:r=n._payload,n=n._init;try{return ee(n(r))}catch{}}return null}function he(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ce(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ce(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Le(n){var r=Ce(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,x=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(A){u=""+A,x.call(this,A)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ye(n){n._valueTracker||(n._valueTracker=Le(n))}function Zt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=Ce(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function _t(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,r){var l=r.checked;return se({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function It(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=ce(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function dt(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function Vt(n,r){dt(n,r);var l=ce(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Xt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Xt(n,r.type,ce(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function V(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Xt(n,r,l){(r!=="number"||_t(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var St=Array.isArray;function bt(n,r,l,u){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+ce(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function Xe(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function I(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(St(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:ce(l)}}function T(n,r){var l=ce(r.value),u=ce(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function j(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,Ve=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ae(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var $e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];Object.keys($e).forEach(function(n){st.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),$e[r]=$e[n]})});function Se(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||$e.hasOwnProperty(n)&&$e[n]?(""+r).trim():r+"px"}function we(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=Se(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var je=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function He(n,r){if(r){if(je[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ue(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,Ee=null,Fe=null;function Me(n){if(n=Yo(n)){if(typeof be!="function")throw Error(t(280));var r=n.stateNode;r&&(r=il(r),be(n.stateNode,n.type,r))}}function de(n){Ee?Fe?Fe.push(n):Fe=[n]:Ee=n}function Ge(){if(Ee){var n=Ee,r=Fe;if(Fe=Ee=null,Me(n),r)for(n=0;n<r.length;n++)Me(r[n])}}function at(n,r){return n(r)}function Dt(){}var Rt=!1;function ei(n,r,l){if(Rt)return n(r,l);Rt=!0;try{return at(n,r,l)}finally{Rt=!1,(Ee!==null||Fe!==null)&&(Dt(),Ge())}}function An(n,r){var l=n.stateNode;if(l===null)return null;var u=il(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ts=!1;if(f)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{Ts=!1}function Oc(n,r,l,u,p,x,A,U,z){var le=Array.prototype.slice.call(arguments,3);try{r.apply(l,le)}catch(xe){this.onError(xe)}}var xr=!1,$r=null,ti=!1,Zr=null,Ua={onError:function(n){xr=!0,$r=n}};function Fa(n,r,l,u,p,x,A,U,z){xr=!1,$r=null,Oc.apply(Ua,arguments)}function ws(n,r,l,u,p,x,A,U,z){if(Fa.apply(this,arguments),xr){if(xr){var le=$r;xr=!1,$r=null}else throw Error(t(198));ti||(ti=!0,Zr=le)}}function Ri(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Jr(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Po(n){if(Ri(n)!==n)throw Error(t(188))}function Oa(n){var r=n.alternate;if(!r){if(r=Ri(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var p=l.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===l)return Po(p),n;if(x===u)return Po(p),r;x=x.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=x;else{for(var A=!1,U=p.child;U;){if(U===l){A=!0,l=p,u=x;break}if(U===u){A=!0,u=p,l=x;break}U=U.sibling}if(!A){for(U=x.child;U;){if(U===l){A=!0,l=x,u=p;break}if(U===u){A=!0,u=x,l=p;break}U=U.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function ka(n){return n=Oa(n),n!==null?Ba(n):null}function Ba(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ba(n);if(r!==null)return r;n=n.sibling}return null}var za=e.unstable_scheduleCallback,Va=e.unstable_cancelCallback,kc=e.unstable_shouldYield,Bc=e.unstable_requestPaint,b=e.unstable_now,K=e.unstable_getCurrentPriorityLevel,ue=e.unstable_ImmediatePriority,oe=e.unstable_UserBlockingPriority,ie=e.unstable_NormalPriority,Ie=e.unstable_LowPriority,Be=e.unstable_IdlePriority,Pe=null,Oe=null;function Je(n){if(Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(Pe,n,void 0,(n.current.flags&128)===128)}catch{}}var nt=Math.clz32?Math.clz32:Nt,ht=Math.log,et=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(ht(n)/et|0)|0}var Bt=64,kt=4194304;function wt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Jt(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,x=n.pingedLanes,A=l&268435455;if(A!==0){var U=A&~p;U!==0?u=wt(U):(x&=A,x!==0&&(u=wt(x)))}else A=l&~p,A!==0?u=wt(A):x!==0&&(u=wt(x));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,x=r&-r,p>=x||p===16&&(x&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-nt(r),p=1<<l,u|=n[l],r&=~p;return u}function Ke(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bn(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var A=31-nt(x),U=1<<A,z=p[A];z===-1?((U&l)===0||(U&u)!==0)&&(p[A]=Ke(U,r)):z<=r&&(n.expiredLanes|=U),x&=~U}}function Mt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Un(){var n=Bt;return Bt<<=1,(Bt&4194240)===0&&(Bt=64),n}function Fn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Xn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-nt(r),n[r]=l}function yr(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-nt(l),x=1<<p;r[p]=0,u[p]=-1,n[p]=-1,l&=~x}}function Lt(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-nt(l),p=1<<u;p&r|n[u]&r&&(n[u]|=r),l&=~p}}var lt=0;function hi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Qt,ni,$i,Lo,Ah,zc=!1,Ha=[],Sr=null,Mr=null,Er=null,Io=new Map,No=new Map,Tr=[],T_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(n,r){switch(n){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Io.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(r.pointerId)}}function Do(n,r,l,u,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},r!==null&&(r=Yo(r),r!==null&&ni(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function w_(n,r,l,u,p){switch(r){case"focusin":return Sr=Do(Sr,n,r,l,u,p),!0;case"dragenter":return Mr=Do(Mr,n,r,l,u,p),!0;case"mouseover":return Er=Do(Er,n,r,l,u,p),!0;case"pointerover":var x=p.pointerId;return Io.set(x,Do(Io.get(x)||null,n,r,l,u,p)),!0;case"gotpointercapture":return x=p.pointerId,No.set(x,Do(No.get(x)||null,n,r,l,u,p)),!0}return!1}function Rh(n){var r=Qr(n.target);if(r!==null){var l=Ri(r);if(l!==null){if(r=l.tag,r===13){if(r=Jr(l),r!==null){n.blockedOn=r,Ah(n.priority,function(){$i(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ga(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Hc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);ft=u,l.target.dispatchEvent(u),ft=null}else return r=Yo(l),r!==null&&ni(r),n.blockedOn=l,!1;r.shift()}return!0}function Ch(n,r,l){Ga(n)&&l.delete(r)}function A_(){zc=!1,Sr!==null&&Ga(Sr)&&(Sr=null),Mr!==null&&Ga(Mr)&&(Mr=null),Er!==null&&Ga(Er)&&(Er=null),Io.forEach(Ch),No.forEach(Ch)}function Uo(n,r){n.blockedOn===r&&(n.blockedOn=null,zc||(zc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,A_)))}function Fo(n){function r(p){return Uo(p,n)}if(0<Ha.length){Uo(Ha[0],n);for(var l=1;l<Ha.length;l++){var u=Ha[l];u.blockedOn===n&&(u.blockedOn=null)}}for(Sr!==null&&Uo(Sr,n),Mr!==null&&Uo(Mr,n),Er!==null&&Uo(Er,n),Io.forEach(r),No.forEach(r),l=0;l<Tr.length;l++)u=Tr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<Tr.length&&(l=Tr[0],l.blockedOn===null);)Rh(l),l.blockedOn===null&&Tr.shift()}var As=C.ReactCurrentBatchConfig,Wa=!0;function b_(n,r,l,u){var p=lt,x=As.transition;As.transition=null;try{lt=1,Vc(n,r,l,u)}finally{lt=p,As.transition=x}}function R_(n,r,l,u){var p=lt,x=As.transition;As.transition=null;try{lt=4,Vc(n,r,l,u)}finally{lt=p,As.transition=x}}function Vc(n,r,l,u){if(Wa){var p=Hc(n,r,l,u);if(p===null)su(n,r,u,Xa,l),bh(n,u);else if(w_(p,n,r,l,u))u.stopPropagation();else if(bh(n,u),r&4&&-1<T_.indexOf(n)){for(;p!==null;){var x=Yo(p);if(x!==null&&Qt(x),x=Hc(n,r,l,u),x===null&&su(n,r,u,Xa,l),x===p)break;p=x}p!==null&&u.stopPropagation()}else su(n,r,u,null,l)}}var Xa=null;function Hc(n,r,l,u){if(Xa=null,n=H(u),n=Qr(n),n!==null)if(r=Ri(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Jr(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Xa=n,null}function Ph(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(K()){case ue:return 1;case oe:return 4;case ie:case Ie:return 16;case Be:return 536870912;default:return 16}default:return 16}}var wr=null,Gc=null,ja=null;function Lh(){if(ja)return ja;var n,r=Gc,l=r.length,u,p="value"in wr?wr.value:wr.textContent,x=p.length;for(n=0;n<l&&r[n]===p[n];n++);var A=l-n;for(u=1;u<=A&&r[l-u]===p[x-u];u++);return ja=p.slice(n,1<u?1-u:void 0)}function qa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ya(){return!0}function Ih(){return!1}function jn(n){function r(l,u,p,x,A){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var U in n)n.hasOwnProperty(U)&&(l=n[U],this[U]=l?l(x):x[U]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Ya:Ih,this.isPropagationStopped=Ih,this}return se(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),r}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=jn(bs),Oo=se({},bs,{view:0,detail:0}),C_=jn(Oo),Xc,jc,ko,Ka=se({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ko&&(ko&&n.type==="mousemove"?(Xc=n.screenX-ko.screenX,jc=n.screenY-ko.screenY):jc=Xc=0,ko=n),Xc)},movementY:function(n){return"movementY"in n?n.movementY:jc}}),Nh=jn(Ka),P_=se({},Ka,{dataTransfer:0}),L_=jn(P_),I_=se({},Oo,{relatedTarget:0}),qc=jn(I_),N_=se({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),D_=jn(N_),U_=se({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),F_=jn(U_),O_=se({},bs,{data:0}),Dh=jn(O_),k_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function V_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=z_[n])?!!r[n]:!1}function Yc(){return V_}var H_=se({},Oo,{key:function(n){if(n.key){var r=k_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=qa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?B_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(n){return n.type==="keypress"?qa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),G_=jn(H_),W_=se({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=jn(W_),X_=se({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),j_=jn(X_),q_=se({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y_=jn(q_),K_=se({},Ka,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$_=jn(K_),Z_=[9,13,27,32],Kc=f&&"CompositionEvent"in window,Bo=null;f&&"documentMode"in document&&(Bo=document.documentMode);var J_=f&&"TextEvent"in window&&!Bo,Fh=f&&(!Kc||Bo&&8<Bo&&11>=Bo),Oh=" ",kh=!1;function Bh(n,r){switch(n){case"keyup":return Z_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function Q_(n,r){switch(n){case"compositionend":return zh(r);case"keypress":return r.which!==32?null:(kh=!0,Oh);case"textInput":return n=r.data,n===Oh&&kh?null:n;default:return null}}function ev(n,r){if(Rs)return n==="compositionend"||!Kc&&Bh(n,r)?(n=Lh(),ja=Gc=wr=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Fh&&r.locale!=="ko"?null:r.data;default:return null}}var tv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!tv[n.type]:r==="textarea"}function Hh(n,r,l,u){de(u),r=el(r,"onChange"),0<r.length&&(l=new Wc("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var zo=null,Vo=null;function nv(n){op(n,0)}function $a(n){var r=Ns(n);if(Zt(r))return n}function iv(n,r){if(n==="change")return r}var Gh=!1;if(f){var $c;if(f){var Zc="oninput"in document;if(!Zc){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),Zc=typeof Wh.oninput=="function"}$c=Zc}else $c=!1;Gh=$c&&(!document.documentMode||9<document.documentMode)}function Xh(){zo&&(zo.detachEvent("onpropertychange",jh),Vo=zo=null)}function jh(n){if(n.propertyName==="value"&&$a(Vo)){var r=[];Hh(r,Vo,n,H(n)),ei(nv,r)}}function rv(n,r,l){n==="focusin"?(Xh(),zo=r,Vo=l,zo.attachEvent("onpropertychange",jh)):n==="focusout"&&Xh()}function sv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $a(Vo)}function ov(n,r){if(n==="click")return $a(r)}function av(n,r){if(n==="input"||n==="change")return $a(r)}function lv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var pi=typeof Object.is=="function"?Object.is:lv;function Ho(n,r){if(pi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!d.call(r,p)||!pi(n[p],r[p]))return!1}return!0}function qh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Yh(n,r){var l=qh(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qh(l)}}function Kh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Kh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function $h(){for(var n=window,r=_t();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=_t(n.document)}return r}function Jc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function cv(n){var r=$h(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Kh(l.ownerDocument.documentElement,l)){if(u!==null&&Jc(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!n.extend&&x>u&&(p=u,u=x,x=p),p=Yh(l,x);var A=Yh(l,u);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),x>u?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var uv=f&&"documentMode"in document&&11>=document.documentMode,Cs=null,Qc=null,Go=null,eu=!1;function Zh(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;eu||Cs==null||Cs!==_t(u)||(u=Cs,"selectionStart"in u&&Jc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Go&&Ho(Go,u)||(Go=u,u=el(Qc,"onSelect"),0<u.length&&(r=new Wc("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=Cs)))}function Za(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ps={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},tu={},Jh={};f&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Ja(n){if(tu[n])return tu[n];if(!Ps[n])return n;var r=Ps[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Jh)return tu[n]=r[l];return n}var Qh=Ja("animationend"),ep=Ja("animationiteration"),tp=Ja("animationstart"),np=Ja("transitionend"),ip=new Map,rp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(n,r){ip.set(n,r),a(r,[n])}for(var nu=0;nu<rp.length;nu++){var iu=rp[nu],fv=iu.toLowerCase(),dv=iu[0].toUpperCase()+iu.slice(1);Ar(fv,"on"+dv)}Ar(Qh,"onAnimationEnd"),Ar(ep,"onAnimationIteration"),Ar(tp,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(np,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function sp(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,ws(u,r,void 0,n),n.currentTarget=null}function op(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var x=void 0;if(r)for(var A=u.length-1;0<=A;A--){var U=u[A],z=U.instance,le=U.currentTarget;if(U=U.listener,z!==x&&p.isPropagationStopped())break e;sp(p,U,le),x=z}else for(A=0;A<u.length;A++){if(U=u[A],z=U.instance,le=U.currentTarget,U=U.listener,z!==x&&p.isPropagationStopped())break e;sp(p,U,le),x=z}}}if(ti)throw n=Zr,ti=!1,Zr=null,n}function Ht(n,r){var l=r[fu];l===void 0&&(l=r[fu]=new Set);var u=n+"__bubble";l.has(u)||(ap(r,n,2,!1),l.add(u))}function ru(n,r,l){var u=0;r&&(u|=4),ap(l,n,u,r)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Xo(n){if(!n[Qa]){n[Qa]=!0,i.forEach(function(l){l!=="selectionchange"&&(hv.has(l)||ru(l,!1,n),ru(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Qa]||(r[Qa]=!0,ru("selectionchange",!1,r))}}function ap(n,r,l,u){switch(Ph(r)){case 1:var p=b_;break;case 4:p=R_;break;default:p=Vc}l=p.bind(null,r,l,n),p=void 0,!Ts||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function su(n,r,l,u,p){var x=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var U=u.stateNode.containerInfo;if(U===p||U.nodeType===8&&U.parentNode===p)break;if(A===4)for(A=u.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;A=A.return}for(;U!==null;){if(A=Qr(U),A===null)return;if(z=A.tag,z===5||z===6){u=x=A;continue e}U=U.parentNode}}u=u.return}ei(function(){var le=x,xe=H(l),ye=[];e:{var ve=ip.get(n);if(ve!==void 0){var ke=Wc,We=n;switch(n){case"keypress":if(qa(l)===0)break e;case"keydown":case"keyup":ke=G_;break;case"focusin":We="focus",ke=qc;break;case"focusout":We="blur",ke=qc;break;case"beforeblur":case"afterblur":ke=qc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=L_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=j_;break;case Qh:case ep:case tp:ke=D_;break;case np:ke=Y_;break;case"scroll":ke=C_;break;case"wheel":ke=$_;break;case"copy":case"cut":case"paste":ke=F_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Uh}var qe=(r&4)!==0,en=!qe&&n==="scroll",te=qe?ve!==null?ve+"Capture":null:ve;qe=[];for(var G=le,re;G!==null;){re=G;var Te=re.stateNode;if(re.tag===5&&Te!==null&&(re=Te,te!==null&&(Te=An(G,te),Te!=null&&qe.push(jo(G,Te,re)))),en)break;G=G.return}0<qe.length&&(ve=new ke(ve,We,null,l,xe),ye.push({event:ve,listeners:qe}))}}if((r&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",ke=n==="mouseout"||n==="pointerout",ve&&l!==ft&&(We=l.relatedTarget||l.fromElement)&&(Qr(We)||We[Zi]))break e;if((ke||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,ke?(We=l.relatedTarget||l.toElement,ke=le,We=We?Qr(We):null,We!==null&&(en=Ri(We),We!==en||We.tag!==5&&We.tag!==6)&&(We=null)):(ke=null,We=le),ke!==We)){if(qe=Nh,Te="onMouseLeave",te="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Uh,Te="onPointerLeave",te="onPointerEnter",G="pointer"),en=ke==null?ve:Ns(ke),re=We==null?ve:Ns(We),ve=new qe(Te,G+"leave",ke,l,xe),ve.target=en,ve.relatedTarget=re,Te=null,Qr(xe)===le&&(qe=new qe(te,G+"enter",We,l,xe),qe.target=re,qe.relatedTarget=en,Te=qe),en=Te,ke&&We)t:{for(qe=ke,te=We,G=0,re=qe;re;re=Ls(re))G++;for(re=0,Te=te;Te;Te=Ls(Te))re++;for(;0<G-re;)qe=Ls(qe),G--;for(;0<re-G;)te=Ls(te),re--;for(;G--;){if(qe===te||te!==null&&qe===te.alternate)break t;qe=Ls(qe),te=Ls(te)}qe=null}else qe=null;ke!==null&&lp(ye,ve,ke,qe,!1),We!==null&&en!==null&&lp(ye,en,We,qe,!0)}}e:{if(ve=le?Ns(le):window,ke=ve.nodeName&&ve.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ve.type==="file")var Ze=iv;else if(Vh(ve))if(Gh)Ze=av;else{Ze=sv;var it=rv}else(ke=ve.nodeName)&&ke.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Ze=ov);if(Ze&&(Ze=Ze(n,le))){Hh(ye,Ze,l,xe);break e}it&&it(n,ve,le),n==="focusout"&&(it=ve._wrapperState)&&it.controlled&&ve.type==="number"&&Xt(ve,"number",ve.value)}switch(it=le?Ns(le):window,n){case"focusin":(Vh(it)||it.contentEditable==="true")&&(Cs=it,Qc=le,Go=null);break;case"focusout":Go=Qc=Cs=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,Zh(ye,l,xe);break;case"selectionchange":if(uv)break;case"keydown":case"keyup":Zh(ye,l,xe)}var rt;if(Kc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Rs?Bh(n,l)&&(ct="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Fh&&l.locale!=="ko"&&(Rs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Rs&&(rt=Lh()):(wr=xe,Gc="value"in wr?wr.value:wr.textContent,Rs=!0)),it=el(le,ct),0<it.length&&(ct=new Dh(ct,n,null,l,xe),ye.push({event:ct,listeners:it}),rt?ct.data=rt:(rt=zh(l),rt!==null&&(ct.data=rt)))),(rt=J_?Q_(n,l):ev(n,l))&&(le=el(le,"onBeforeInput"),0<le.length&&(xe=new Dh("onBeforeInput","beforeinput",null,l,xe),ye.push({event:xe,listeners:le}),xe.data=rt))}op(ye,r)})}function jo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function el(n,r){for(var l=r+"Capture",u=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=An(n,l),x!=null&&u.unshift(jo(n,x,p)),x=An(n,r),x!=null&&u.push(jo(n,x,p))),n=n.return}return u}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lp(n,r,l,u,p){for(var x=r._reactName,A=[];l!==null&&l!==u;){var U=l,z=U.alternate,le=U.stateNode;if(z!==null&&z===u)break;U.tag===5&&le!==null&&(U=le,p?(z=An(l,x),z!=null&&A.unshift(jo(l,z,U))):p||(z=An(l,x),z!=null&&A.push(jo(l,z,U)))),l=l.return}A.length!==0&&n.push({event:r,listeners:A})}var pv=/\r\n?/g,mv=/\u0000|\uFFFD/g;function cp(n){return(typeof n=="string"?n:""+n).replace(pv,`
`).replace(mv,"")}function tl(n,r,l){if(r=cp(r),cp(n)!==r&&l)throw Error(t(425))}function nl(){}var ou=null,au=null;function lu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,up=typeof Promise=="function"?Promise:void 0,_v=typeof queueMicrotask=="function"?queueMicrotask:typeof up<"u"?function(n){return up.resolve(null).then(n).catch(vv)}:cu;function vv(n){setTimeout(function(){throw n})}function uu(n,r){var l=r,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),Fo(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);Fo(r)}function br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function fp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Is,qo="__reactProps$"+Is,Zi="__reactContainer$"+Is,fu="__reactEvents$"+Is,xv="__reactListeners$"+Is,yv="__reactHandles$"+Is;function Qr(n){var r=n[Ci];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Zi]||l[Ci]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=fp(n);n!==null;){if(l=n[Ci])return l;n=fp(n)}return r}n=l,l=n.parentNode}return null}function Yo(n){return n=n[Ci]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function il(n){return n[qo]||null}var du=[],Ds=-1;function Rr(n){return{current:n}}function Gt(n){0>Ds||(n.current=du[Ds],du[Ds]=null,Ds--)}function zt(n,r){Ds++,du[Ds]=n.current,n.current=r}var Cr={},xn=Rr(Cr),On=Rr(!1),es=Cr;function Us(n,r){var l=n.type.contextTypes;if(!l)return Cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in l)p[x]=r[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function kn(n){return n=n.childContextTypes,n!=null}function rl(){Gt(On),Gt(xn)}function dp(n,r,l){if(xn.current!==Cr)throw Error(t(168));zt(xn,r),zt(On,l)}function hp(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,he(n)||"Unknown",p));return se({},l,u)}function sl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,es=xn.current,zt(xn,n),zt(On,On.current),!0}function pp(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=hp(n,r,es),u.__reactInternalMemoizedMergedChildContext=n,Gt(On),Gt(xn),zt(xn,n)):Gt(On),zt(On,l)}var Ji=null,ol=!1,hu=!1;function mp(n){Ji===null?Ji=[n]:Ji.push(n)}function Sv(n){ol=!0,mp(n)}function Pr(){if(!hu&&Ji!==null){hu=!0;var n=0,r=lt;try{var l=Ji;for(lt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}Ji=null,ol=!1}catch(p){throw Ji!==null&&(Ji=Ji.slice(n+1)),za(ue,Pr),p}finally{lt=r,hu=!1}}return null}var Fs=[],Os=0,al=null,ll=0,ii=[],ri=0,ts=null,Qi=1,er="";function ns(n,r){Fs[Os++]=ll,Fs[Os++]=al,al=n,ll=r}function gp(n,r,l){ii[ri++]=Qi,ii[ri++]=er,ii[ri++]=ts,ts=n;var u=Qi;n=er;var p=32-nt(u)-1;u&=~(1<<p),l+=1;var x=32-nt(r)+p;if(30<x){var A=p-p%5;x=(u&(1<<A)-1).toString(32),u>>=A,p-=A,Qi=1<<32-nt(r)+p|l<<p|u,er=x+n}else Qi=1<<x|l<<p|u,er=n}function pu(n){n.return!==null&&(ns(n,1),gp(n,1,0))}function mu(n){for(;n===al;)al=Fs[--Os],Fs[Os]=null,ll=Fs[--Os],Fs[Os]=null;for(;n===ts;)ts=ii[--ri],ii[ri]=null,er=ii[--ri],ii[ri]=null,Qi=ii[--ri],ii[ri]=null}var qn=null,Yn=null,jt=!1,mi=null;function _p(n,r){var l=li(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function vp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,qn=n,Yn=br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,qn=n,Yn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ts!==null?{id:Qi,overflow:er}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=li(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,qn=n,Yn=null,!0):!1;default:return!1}}function gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function _u(n){if(jt){var r=Yn;if(r){var l=r;if(!vp(n,r)){if(gu(n))throw Error(t(418));r=br(l.nextSibling);var u=qn;r&&vp(n,r)?_p(u,l):(n.flags=n.flags&-4097|2,jt=!1,qn=n)}}else{if(gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,qn=n}}}function xp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;qn=n}function cl(n){if(n!==qn)return!1;if(!jt)return xp(n),jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!lu(n.type,n.memoizedProps)),r&&(r=Yn)){if(gu(n))throw yp(),Error(t(418));for(;r;)_p(n,r),r=br(r.nextSibling)}if(xp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Yn=br(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Yn=null}}else Yn=qn?br(n.stateNode.nextSibling):null;return!0}function yp(){for(var n=Yn;n;)n=br(n.nextSibling)}function ks(){Yn=qn=null,jt=!1}function vu(n){mi===null?mi=[n]:mi.push(n)}var Mv=C.ReactCurrentBatchConfig;function Ko(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,x=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===x?r.ref:(r=function(A){var U=p.refs;A===null?delete U[x]:U[x]=A},r._stringRef=x,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function ul(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Sp(n){var r=n._init;return r(n._payload)}function Mp(n){function r(te,G){if(n){var re=te.deletions;re===null?(te.deletions=[G],te.flags|=16):re.push(G)}}function l(te,G){if(!n)return null;for(;G!==null;)r(te,G),G=G.sibling;return null}function u(te,G){for(te=new Map;G!==null;)G.key!==null?te.set(G.key,G):te.set(G.index,G),G=G.sibling;return te}function p(te,G){return te=kr(te,G),te.index=0,te.sibling=null,te}function x(te,G,re){return te.index=re,n?(re=te.alternate,re!==null?(re=re.index,re<G?(te.flags|=2,G):re):(te.flags|=2,G)):(te.flags|=1048576,G)}function A(te){return n&&te.alternate===null&&(te.flags|=2),te}function U(te,G,re,Te){return G===null||G.tag!==6?(G=uf(re,te.mode,Te),G.return=te,G):(G=p(G,re),G.return=te,G)}function z(te,G,re,Te){var Ze=re.type;return Ze===k?xe(te,G,re.props.children,Te,re.key):G!==null&&(G.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===$&&Sp(Ze)===G.type)?(Te=p(G,re.props),Te.ref=Ko(te,G,re),Te.return=te,Te):(Te=Dl(re.type,re.key,re.props,null,te.mode,Te),Te.ref=Ko(te,G,re),Te.return=te,Te)}function le(te,G,re,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==re.containerInfo||G.stateNode.implementation!==re.implementation?(G=ff(re,te.mode,Te),G.return=te,G):(G=p(G,re.children||[]),G.return=te,G)}function xe(te,G,re,Te,Ze){return G===null||G.tag!==7?(G=us(re,te.mode,Te,Ze),G.return=te,G):(G=p(G,re),G.return=te,G)}function ye(te,G,re){if(typeof G=="string"&&G!==""||typeof G=="number")return G=uf(""+G,te.mode,re),G.return=te,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case O:return re=Dl(G.type,G.key,G.props,null,te.mode,re),re.ref=Ko(te,null,G),re.return=te,re;case D:return G=ff(G,te.mode,re),G.return=te,G;case $:var Te=G._init;return ye(te,Te(G._payload),re)}if(St(G)||Z(G))return G=us(G,te.mode,re,null),G.return=te,G;ul(te,G)}return null}function ve(te,G,re,Te){var Ze=G!==null?G.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Ze!==null?null:U(te,G,""+re,Te);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case O:return re.key===Ze?z(te,G,re,Te):null;case D:return re.key===Ze?le(te,G,re,Te):null;case $:return Ze=re._init,ve(te,G,Ze(re._payload),Te)}if(St(re)||Z(re))return Ze!==null?null:xe(te,G,re,Te,null);ul(te,re)}return null}function ke(te,G,re,Te,Ze){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return te=te.get(re)||null,U(G,te,""+Te,Ze);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case O:return te=te.get(Te.key===null?re:Te.key)||null,z(G,te,Te,Ze);case D:return te=te.get(Te.key===null?re:Te.key)||null,le(G,te,Te,Ze);case $:var it=Te._init;return ke(te,G,re,it(Te._payload),Ze)}if(St(Te)||Z(Te))return te=te.get(re)||null,xe(G,te,Te,Ze,null);ul(G,Te)}return null}function We(te,G,re,Te){for(var Ze=null,it=null,rt=G,ct=G=0,pn=null;rt!==null&&ct<re.length;ct++){rt.index>ct?(pn=rt,rt=null):pn=rt.sibling;var Pt=ve(te,rt,re[ct],Te);if(Pt===null){rt===null&&(rt=pn);break}n&&rt&&Pt.alternate===null&&r(te,rt),G=x(Pt,G,ct),it===null?Ze=Pt:it.sibling=Pt,it=Pt,rt=pn}if(ct===re.length)return l(te,rt),jt&&ns(te,ct),Ze;if(rt===null){for(;ct<re.length;ct++)rt=ye(te,re[ct],Te),rt!==null&&(G=x(rt,G,ct),it===null?Ze=rt:it.sibling=rt,it=rt);return jt&&ns(te,ct),Ze}for(rt=u(te,rt);ct<re.length;ct++)pn=ke(rt,te,ct,re[ct],Te),pn!==null&&(n&&pn.alternate!==null&&rt.delete(pn.key===null?ct:pn.key),G=x(pn,G,ct),it===null?Ze=pn:it.sibling=pn,it=pn);return n&&rt.forEach(function(Br){return r(te,Br)}),jt&&ns(te,ct),Ze}function qe(te,G,re,Te){var Ze=Z(re);if(typeof Ze!="function")throw Error(t(150));if(re=Ze.call(re),re==null)throw Error(t(151));for(var it=Ze=null,rt=G,ct=G=0,pn=null,Pt=re.next();rt!==null&&!Pt.done;ct++,Pt=re.next()){rt.index>ct?(pn=rt,rt=null):pn=rt.sibling;var Br=ve(te,rt,Pt.value,Te);if(Br===null){rt===null&&(rt=pn);break}n&&rt&&Br.alternate===null&&r(te,rt),G=x(Br,G,ct),it===null?Ze=Br:it.sibling=Br,it=Br,rt=pn}if(Pt.done)return l(te,rt),jt&&ns(te,ct),Ze;if(rt===null){for(;!Pt.done;ct++,Pt=re.next())Pt=ye(te,Pt.value,Te),Pt!==null&&(G=x(Pt,G,ct),it===null?Ze=Pt:it.sibling=Pt,it=Pt);return jt&&ns(te,ct),Ze}for(rt=u(te,rt);!Pt.done;ct++,Pt=re.next())Pt=ke(rt,te,ct,Pt.value,Te),Pt!==null&&(n&&Pt.alternate!==null&&rt.delete(Pt.key===null?ct:Pt.key),G=x(Pt,G,ct),it===null?Ze=Pt:it.sibling=Pt,it=Pt);return n&&rt.forEach(function(tx){return r(te,tx)}),jt&&ns(te,ct),Ze}function en(te,G,re,Te){if(typeof re=="object"&&re!==null&&re.type===k&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case O:e:{for(var Ze=re.key,it=G;it!==null;){if(it.key===Ze){if(Ze=re.type,Ze===k){if(it.tag===7){l(te,it.sibling),G=p(it,re.props.children),G.return=te,te=G;break e}}else if(it.elementType===Ze||typeof Ze=="object"&&Ze!==null&&Ze.$$typeof===$&&Sp(Ze)===it.type){l(te,it.sibling),G=p(it,re.props),G.ref=Ko(te,it,re),G.return=te,te=G;break e}l(te,it);break}else r(te,it);it=it.sibling}re.type===k?(G=us(re.props.children,te.mode,Te,re.key),G.return=te,te=G):(Te=Dl(re.type,re.key,re.props,null,te.mode,Te),Te.ref=Ko(te,G,re),Te.return=te,te=Te)}return A(te);case D:e:{for(it=re.key;G!==null;){if(G.key===it)if(G.tag===4&&G.stateNode.containerInfo===re.containerInfo&&G.stateNode.implementation===re.implementation){l(te,G.sibling),G=p(G,re.children||[]),G.return=te,te=G;break e}else{l(te,G);break}else r(te,G);G=G.sibling}G=ff(re,te.mode,Te),G.return=te,te=G}return A(te);case $:return it=re._init,en(te,G,it(re._payload),Te)}if(St(re))return We(te,G,re,Te);if(Z(re))return qe(te,G,re,Te);ul(te,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,G!==null&&G.tag===6?(l(te,G.sibling),G=p(G,re),G.return=te,te=G):(l(te,G),G=uf(re,te.mode,Te),G.return=te,te=G),A(te)):l(te,G)}return en}var Bs=Mp(!0),Ep=Mp(!1),fl=Rr(null),dl=null,zs=null,xu=null;function yu(){xu=zs=dl=null}function Su(n){var r=fl.current;Gt(fl),n._currentValue=r}function Mu(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function Vs(n,r){dl=n,xu=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function si(n){var r=n._currentValue;if(xu!==n)if(n={context:n,memoizedValue:r,next:null},zs===null){if(dl===null)throw Error(t(308));zs=n,dl.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return r}var is=null;function Eu(n){is===null?is=[n]:is.push(n)}function Tp(n,r,l,u){var p=r.interleaved;return p===null?(l.next=l,Eu(r)):(l.next=p.next,p.next=l),r.interleaved=l,tr(n,u)}function tr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Lr=!1;function Tu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function nr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Ir(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ct&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,tr(n,l)}return p=u.interleaved,p===null?(r.next=r,Eu(u)):(r.next=p.next,p.next=r),u.interleaved=r,tr(n,l)}function hl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Lt(n,l)}}function Ap(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?p=x=A:x=x.next=A,l=l.next}while(l!==null);x===null?p=x=r:x=x.next=r}else p=x=r;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function pl(n,r,l,u){var p=n.updateQueue;Lr=!1;var x=p.firstBaseUpdate,A=p.lastBaseUpdate,U=p.shared.pending;if(U!==null){p.shared.pending=null;var z=U,le=z.next;z.next=null,A===null?x=le:A.next=le,A=z;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==A&&(U===null?xe.firstBaseUpdate=le:U.next=le,xe.lastBaseUpdate=z))}if(x!==null){var ye=p.baseState;A=0,xe=le=z=null,U=x;do{var ve=U.lane,ke=U.eventTime;if((u&ve)===ve){xe!==null&&(xe=xe.next={eventTime:ke,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var We=n,qe=U;switch(ve=r,ke=l,qe.tag){case 1:if(We=qe.payload,typeof We=="function"){ye=We.call(ke,ye,ve);break e}ye=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=qe.payload,ve=typeof We=="function"?We.call(ke,ye,ve):We,ve==null)break e;ye=se({},ye,ve);break e;case 2:Lr=!0}}U.callback!==null&&U.lane!==0&&(n.flags|=64,ve=p.effects,ve===null?p.effects=[U]:ve.push(U))}else ke={eventTime:ke,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(le=xe=ke,z=ye):xe=xe.next=ke,A|=ve;if(U=U.next,U===null){if(U=p.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,p.lastBaseUpdate=ve,p.shared.pending=null}}while(!0);if(xe===null&&(z=ye),p.baseState=z,p.firstBaseUpdate=le,p.lastBaseUpdate=xe,r=p.shared.interleaved,r!==null){p=r;do A|=p.lane,p=p.next;while(p!==r)}else x===null&&(p.shared.lanes=0);os|=A,n.lanes=A,n.memoizedState=ye}}function bp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var $o={},Pi=Rr($o),Zo=Rr($o),Jo=Rr($o);function rs(n){if(n===$o)throw Error(t(174));return n}function wu(n,r){switch(zt(Jo,r),zt(Zo,n),zt(Pi,$o),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ge(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ge(r,n)}Gt(Pi),zt(Pi,r)}function Hs(){Gt(Pi),Gt(Zo),Gt(Jo)}function Rp(n){rs(Jo.current);var r=rs(Pi.current),l=ge(r,n.type);r!==l&&(zt(Zo,n),zt(Pi,l))}function Au(n){Zo.current===n&&(Gt(Pi),Gt(Zo))}var qt=Rr(0);function ml(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var bu=[];function Ru(){for(var n=0;n<bu.length;n++)bu[n]._workInProgressVersionPrimary=null;bu.length=0}var gl=C.ReactCurrentDispatcher,Cu=C.ReactCurrentBatchConfig,ss=0,Yt=null,on=null,dn=null,_l=!1,Qo=!1,ea=0,Ev=0;function yn(){throw Error(t(321))}function Pu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!pi(n[l],r[l]))return!1;return!0}function Lu(n,r,l,u,p,x){if(ss=x,Yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,gl.current=n===null||n.memoizedState===null?bv:Rv,n=l(u,p),Qo){x=0;do{if(Qo=!1,ea=0,25<=x)throw Error(t(301));x+=1,dn=on=null,r.updateQueue=null,gl.current=Cv,n=l(u,p)}while(Qo)}if(gl.current=yl,r=on!==null&&on.next!==null,ss=0,dn=on=Yt=null,_l=!1,r)throw Error(t(300));return n}function Iu(){var n=ea!==0;return ea=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Yt.memoizedState=dn=n:dn=dn.next=n,dn}function oi(){if(on===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var r=dn===null?Yt.memoizedState:dn.next;if(r!==null)dn=r,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?Yt.memoizedState=dn=n:dn=dn.next=n}return dn}function ta(n,r){return typeof r=="function"?r(n):r}function Nu(n){var r=oi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=on,p=u.baseQueue,x=l.pending;if(x!==null){if(p!==null){var A=p.next;p.next=x.next,x.next=A}u.baseQueue=p=x,l.pending=null}if(p!==null){x=p.next,u=u.baseState;var U=A=null,z=null,le=x;do{var xe=le.lane;if((ss&xe)===xe)z!==null&&(z=z.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),u=le.hasEagerState?le.eagerState:n(u,le.action);else{var ye={lane:xe,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};z===null?(U=z=ye,A=u):z=z.next=ye,Yt.lanes|=xe,os|=xe}le=le.next}while(le!==null&&le!==x);z===null?A=u:z.next=U,pi(u,r.memoizedState)||(Bn=!0),r.memoizedState=u,r.baseState=A,r.baseQueue=z,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do x=p.lane,Yt.lanes|=x,os|=x,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Du(n){var r=oi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,x=r.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do x=n(x,A.action),A=A.next;while(A!==p);pi(x,r.memoizedState)||(Bn=!0),r.memoizedState=x,r.baseQueue===null&&(r.baseState=x),l.lastRenderedState=x}return[x,u]}function Cp(){}function Pp(n,r){var l=Yt,u=oi(),p=r(),x=!pi(u.memoizedState,p);if(x&&(u.memoizedState=p,Bn=!0),u=u.queue,Uu(Np.bind(null,l,u,n),[n]),u.getSnapshot!==r||x||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,na(9,Ip.bind(null,l,u,p,r),void 0,null),hn===null)throw Error(t(349));(ss&30)!==0||Lp(l,r,p)}return p}function Lp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Ip(n,r,l,u){r.value=l,r.getSnapshot=u,Dp(r)&&Up(n)}function Np(n,r,l){return l(function(){Dp(r)&&Up(n)})}function Dp(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!pi(n,l)}catch{return!0}}function Up(n){var r=tr(n,1);r!==null&&xi(r,n,1,-1)}function Fp(n){var r=Li();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},r.queue=n,n=n.dispatch=Av.bind(null,Yt,n),[r.memoizedState,n]}function na(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function Op(){return oi().memoizedState}function vl(n,r,l,u){var p=Li();Yt.flags|=n,p.memoizedState=na(1|r,l,void 0,u===void 0?null:u)}function xl(n,r,l,u){var p=oi();u=u===void 0?null:u;var x=void 0;if(on!==null){var A=on.memoizedState;if(x=A.destroy,u!==null&&Pu(u,A.deps)){p.memoizedState=na(r,l,x,u);return}}Yt.flags|=n,p.memoizedState=na(1|r,l,x,u)}function kp(n,r){return vl(8390656,8,n,r)}function Uu(n,r){return xl(2048,8,n,r)}function Bp(n,r){return xl(4,2,n,r)}function zp(n,r){return xl(4,4,n,r)}function Vp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Hp(n,r,l){return l=l!=null?l.concat([n]):null,xl(4,4,Vp.bind(null,r,n),l)}function Fu(){}function Gp(n,r){var l=oi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Pu(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function Wp(n,r){var l=oi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Pu(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function Xp(n,r,l){return(ss&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=l):(pi(l,r)||(l=Un(),Yt.lanes|=l,os|=l,n.baseState=!0),r)}function Tv(n,r){var l=lt;lt=l!==0&&4>l?l:4,n(!0);var u=Cu.transition;Cu.transition={};try{n(!1),r()}finally{lt=l,Cu.transition=u}}function jp(){return oi().memoizedState}function wv(n,r,l){var u=Fr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},qp(n))Yp(r,l);else if(l=Tp(n,r,l,u),l!==null){var p=Cn();xi(l,n,u,p),Kp(l,r,u)}}function Av(n,r,l){var u=Fr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(qp(n))Yp(r,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=r.lastRenderedReducer,x!==null))try{var A=r.lastRenderedState,U=x(A,l);if(p.hasEagerState=!0,p.eagerState=U,pi(U,A)){var z=r.interleaved;z===null?(p.next=p,Eu(r)):(p.next=z.next,z.next=p),r.interleaved=p;return}}catch{}finally{}l=Tp(n,r,p,u),l!==null&&(p=Cn(),xi(l,n,u,p),Kp(l,r,u))}}function qp(n){var r=n.alternate;return n===Yt||r!==null&&r===Yt}function Yp(n,r){Qo=_l=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Kp(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Lt(n,l)}}var yl={readContext:si,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},bv={readContext:si,useCallback:function(n,r){return Li().memoizedState=[n,r===void 0?null:r],n},useContext:si,useEffect:kp,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,vl(4194308,4,Vp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return vl(4194308,4,n,r)},useInsertionEffect:function(n,r){return vl(4,2,n,r)},useMemo:function(n,r){var l=Li();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=Li();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=wv.bind(null,Yt,n),[u.memoizedState,n]},useRef:function(n){var r=Li();return n={current:n},r.memoizedState=n},useState:Fp,useDebugValue:Fu,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=Fp(!1),r=n[0];return n=Tv.bind(null,n[1]),Li().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=Yt,p=Li();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),hn===null)throw Error(t(349));(ss&30)!==0||Lp(u,r,l)}p.memoizedState=l;var x={value:l,getSnapshot:r};return p.queue=x,kp(Np.bind(null,u,x,n),[n]),u.flags|=2048,na(9,Ip.bind(null,u,x,l,r),void 0,null),l},useId:function(){var n=Li(),r=hn.identifierPrefix;if(jt){var l=er,u=Qi;l=(u&~(1<<32-nt(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=ea++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Ev++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Rv={readContext:si,useCallback:Gp,useContext:si,useEffect:Uu,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Wp,useReducer:Nu,useRef:Op,useState:function(){return Nu(ta)},useDebugValue:Fu,useDeferredValue:function(n){var r=oi();return Xp(r,on.memoizedState,n)},useTransition:function(){var n=Nu(ta)[0],r=oi().memoizedState;return[n,r]},useMutableSource:Cp,useSyncExternalStore:Pp,useId:jp,unstable_isNewReconciler:!1},Cv={readContext:si,useCallback:Gp,useContext:si,useEffect:Uu,useImperativeHandle:Hp,useInsertionEffect:Bp,useLayoutEffect:zp,useMemo:Wp,useReducer:Du,useRef:Op,useState:function(){return Du(ta)},useDebugValue:Fu,useDeferredValue:function(n){var r=oi();return on===null?r.memoizedState=n:Xp(r,on.memoizedState,n)},useTransition:function(){var n=Du(ta)[0],r=oi().memoizedState;return[n,r]},useMutableSource:Cp,useSyncExternalStore:Pp,useId:jp,unstable_isNewReconciler:!1};function gi(n,r){if(n&&n.defaultProps){r=se({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ou(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:se({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Sl={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=Cn(),p=Fr(n),x=nr(u,p);x.payload=r,l!=null&&(x.callback=l),r=Ir(n,x,p),r!==null&&(xi(r,n,p,u),hl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=Cn(),p=Fr(n),x=nr(u,p);x.tag=1,x.payload=r,l!=null&&(x.callback=l),r=Ir(n,x,p),r!==null&&(xi(r,n,p,u),hl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Cn(),u=Fr(n),p=nr(l,u);p.tag=2,r!=null&&(p.callback=r),r=Ir(n,p,u),r!==null&&(xi(r,n,u,l),hl(r,n,u))}};function $p(n,r,l,u,p,x,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,A):r.prototype&&r.prototype.isPureReactComponent?!Ho(l,u)||!Ho(p,x):!0}function Zp(n,r,l){var u=!1,p=Cr,x=r.contextType;return typeof x=="object"&&x!==null?x=si(x):(p=kn(r)?es:xn.current,u=r.contextTypes,x=(u=u!=null)?Us(n,p):Cr),r=new r(l,x),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),r}function Jp(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&Sl.enqueueReplaceState(r,r.state,null)}function ku(n,r,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Tu(n);var x=r.contextType;typeof x=="object"&&x!==null?p.context=si(x):(x=kn(r)?es:xn.current,p.context=Us(n,x)),p.state=n.memoizedState,x=r.getDerivedStateFromProps,typeof x=="function"&&(Ou(n,r,x,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Sl.enqueueReplaceState(p,p.state,null),pl(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,r){try{var l="",u=r;do l+=De(u),u=u.return;while(u);var p=l}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:r,stack:p,digest:null}}function Bu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Pv=typeof WeakMap=="function"?WeakMap:Map;function Qp(n,r,l){l=nr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){Rl||(Rl=!0,tf=u),zu(n,r)},l}function em(n,r,l){l=nr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;l.payload=function(){return u(p)},l.callback=function(){zu(n,r)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){zu(n,r),typeof u!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),l}function tm(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new Pv;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(l)||(p.add(l),n=Wv.bind(null,n,r,l),r.then(n,n))}function nm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function im(n,r,l,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=nr(-1,1),r.tag=2,Ir(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Lv=C.ReactCurrentOwner,Bn=!1;function Rn(n,r,l,u){r.child=n===null?Ep(r,null,l,u):Bs(r,n.child,l,u)}function rm(n,r,l,u,p){l=l.render;var x=r.ref;return Vs(r,p),u=Lu(n,r,l,u,x,p),l=Iu(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ir(n,r,p)):(jt&&l&&pu(r),r.flags|=1,Rn(n,r,u,p),r.child)}function sm(n,r,l,u,p){if(n===null){var x=l.type;return typeof x=="function"&&!cf(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=x,om(n,r,x,u,p)):(n=Dl(l.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(x=n.child,(n.lanes&p)===0){var A=x.memoizedProps;if(l=l.compare,l=l!==null?l:Ho,l(A,u)&&n.ref===r.ref)return ir(n,r,p)}return r.flags|=1,n=kr(x,u),n.ref=r.ref,n.return=r,r.child=n}function om(n,r,l,u,p){if(n!==null){var x=n.memoizedProps;if(Ho(x,u)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=u=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,ir(n,r,p)}return Vu(n,r,l,u,p)}function am(n,r,l){var u=r.pendingProps,p=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Xs,Kn),Kn|=l;else{if((l&1073741824)===0)return n=x!==null?x.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,zt(Xs,Kn),Kn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:l,zt(Xs,Kn),Kn|=u}else x!==null?(u=x.baseLanes|l,r.memoizedState=null):u=l,zt(Xs,Kn),Kn|=u;return Rn(n,r,p,l),r.child}function lm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Vu(n,r,l,u,p){var x=kn(l)?es:xn.current;return x=Us(r,x),Vs(r,p),l=Lu(n,r,l,u,x,p),u=Iu(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ir(n,r,p)):(jt&&u&&pu(r),r.flags|=1,Rn(n,r,l,p),r.child)}function cm(n,r,l,u,p){if(kn(l)){var x=!0;sl(r)}else x=!1;if(Vs(r,p),r.stateNode===null)El(n,r),Zp(r,l,u),ku(r,l,u,p),u=!0;else if(n===null){var A=r.stateNode,U=r.memoizedProps;A.props=U;var z=A.context,le=l.contextType;typeof le=="object"&&le!==null?le=si(le):(le=kn(l)?es:xn.current,le=Us(r,le));var xe=l.getDerivedStateFromProps,ye=typeof xe=="function"||typeof A.getSnapshotBeforeUpdate=="function";ye||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==u||z!==le)&&Jp(r,A,u,le),Lr=!1;var ve=r.memoizedState;A.state=ve,pl(r,u,A,p),z=r.memoizedState,U!==u||ve!==z||On.current||Lr?(typeof xe=="function"&&(Ou(r,l,xe,u),z=r.memoizedState),(U=Lr||$p(r,l,U,u,ve,z,le))?(ye||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),A.props=u,A.state=z,A.context=le,u=U):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{A=r.stateNode,wp(n,r),U=r.memoizedProps,le=r.type===r.elementType?U:gi(r.type,U),A.props=le,ye=r.pendingProps,ve=A.context,z=l.contextType,typeof z=="object"&&z!==null?z=si(z):(z=kn(l)?es:xn.current,z=Us(r,z));var ke=l.getDerivedStateFromProps;(xe=typeof ke=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(U!==ye||ve!==z)&&Jp(r,A,u,z),Lr=!1,ve=r.memoizedState,A.state=ve,pl(r,u,A,p);var We=r.memoizedState;U!==ye||ve!==We||On.current||Lr?(typeof ke=="function"&&(Ou(r,l,ke,u),We=r.memoizedState),(le=Lr||$p(r,l,le,u,ve,We,z)||!1)?(xe||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,We,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,We,z)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=We),A.props=u,A.state=We,A.context=z,u=le):(typeof A.componentDidUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||U===n.memoizedProps&&ve===n.memoizedState||(r.flags|=1024),u=!1)}return Hu(n,r,l,u,x,p)}function Hu(n,r,l,u,p,x){lm(n,r);var A=(r.flags&128)!==0;if(!u&&!A)return p&&pp(r,l,!1),ir(n,r,x);u=r.stateNode,Lv.current=r;var U=A&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&A?(r.child=Bs(r,n.child,null,x),r.child=Bs(r,null,U,x)):Rn(n,r,U,x),r.memoizedState=u.state,p&&pp(r,l,!0),r.child}function um(n){var r=n.stateNode;r.pendingContext?dp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&dp(n,r.context,!1),wu(n,r.containerInfo)}function fm(n,r,l,u,p){return ks(),vu(p),r.flags|=256,Rn(n,r,l,u),r.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Wu(n){return{baseLanes:n,cachePool:null,transitions:null}}function dm(n,r,l){var u=r.pendingProps,p=qt.current,x=!1,A=(r.flags&128)!==0,U;if((U=A)||(U=n!==null&&n.memoizedState===null?!1:(p&2)!==0),U?(x=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),zt(qt,p&1),n===null)return _u(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=u.children,n=u.fallback,x?(u=r.mode,x=r.child,A={mode:"hidden",children:A},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=Ul(A,u,0,null),n=us(n,u,l,null),x.return=r,n.return=r,x.sibling=n,r.child=x,r.child.memoizedState=Wu(l),r.memoizedState=Gu,n):Xu(r,A));if(p=n.memoizedState,p!==null&&(U=p.dehydrated,U!==null))return Iv(n,r,A,u,U,p,l);if(x){x=u.fallback,A=r.mode,p=n.child,U=p.sibling;var z={mode:"hidden",children:u.children};return(A&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=z,r.deletions=null):(u=kr(p,z),u.subtreeFlags=p.subtreeFlags&14680064),U!==null?x=kr(U,x):(x=us(x,A,l,null),x.flags|=2),x.return=r,u.return=r,u.sibling=x,r.child=u,u=x,x=r.child,A=n.child.memoizedState,A=A===null?Wu(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=n.childLanes&~l,r.memoizedState=Gu,u}return x=n.child,n=x.sibling,u=kr(x,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function Xu(n,r){return r=Ul({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ml(n,r,l,u){return u!==null&&vu(u),Bs(r,n.child,null,l),n=Xu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Iv(n,r,l,u,p,x,A){if(l)return r.flags&256?(r.flags&=-257,u=Bu(Error(t(422))),Ml(n,r,A,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(x=u.fallback,p=r.mode,u=Ul({mode:"visible",children:u.children},p,0,null),x=us(x,p,A,null),x.flags|=2,u.return=r,x.return=r,u.sibling=x,r.child=u,(r.mode&1)!==0&&Bs(r,n.child,null,A),r.child.memoizedState=Wu(A),r.memoizedState=Gu,x);if((r.mode&1)===0)return Ml(n,r,A,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var U=u.dgst;return u=U,x=Error(t(419)),u=Bu(x,u,void 0),Ml(n,r,A,u)}if(U=(A&n.childLanes)!==0,Bn||U){if(u=hn,u!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|A))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,tr(n,p),xi(u,n,p,-1))}return lf(),u=Bu(Error(t(421))),Ml(n,r,A,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Xv.bind(null,n),p._reactRetry=r,null):(n=x.treeContext,Yn=br(p.nextSibling),qn=r,jt=!0,mi=null,n!==null&&(ii[ri++]=Qi,ii[ri++]=er,ii[ri++]=ts,Qi=n.id,er=n.overflow,ts=r),r=Xu(r,u.children),r.flags|=4096,r)}function hm(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Mu(n.return,r,l)}function ju(n,r,l,u,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(x.isBackwards=r,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=l,x.tailMode=p)}function pm(n,r,l){var u=r.pendingProps,p=u.revealOrder,x=u.tail;if(Rn(n,r,u.children,l),u=qt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&hm(n,l,r);else if(n.tag===19)hm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(zt(qt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&ml(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),ju(r,!1,p,l,x);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&ml(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}ju(r,!0,l,null,x);break;case"together":ju(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function El(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ir(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),os|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=kr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=kr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Nv(n,r,l){switch(r.tag){case 3:um(r),ks();break;case 5:Rp(r);break;case 1:kn(r.type)&&sl(r);break;case 4:wu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;zt(fl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(zt(qt,qt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?dm(n,r,l):(zt(qt,qt.current&1),n=ir(n,r,l),n!==null?n.sibling:null);zt(qt,qt.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return pm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),zt(qt,qt.current),u)break;return null;case 22:case 23:return r.lanes=0,am(n,r,l)}return ir(n,r,l)}var mm,qu,gm,_m;mm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},qu=function(){},gm=function(n,r,l,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,rs(Pi.current);var x=null;switch(l){case"input":p=At(n,p),u=At(n,u),x=[];break;case"select":p=se({},p,{value:void 0}),u=se({},u,{value:void 0}),x=[];break;case"textarea":p=Xe(n,p),u=Xe(n,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=nl)}He(l,u);var A;l=null;for(le in p)if(!u.hasOwnProperty(le)&&p.hasOwnProperty(le)&&p[le]!=null)if(le==="style"){var U=p[le];for(A in U)U.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(s.hasOwnProperty(le)?x||(x=[]):(x=x||[]).push(le,null));for(le in u){var z=u[le];if(U=p!=null?p[le]:void 0,u.hasOwnProperty(le)&&z!==U&&(z!=null||U!=null))if(le==="style")if(U){for(A in U)!U.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in z)z.hasOwnProperty(A)&&U[A]!==z[A]&&(l||(l={}),l[A]=z[A])}else l||(x||(x=[]),x.push(le,l)),l=z;else le==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(x=x||[]).push(le,z)):le==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(le,""+z):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(s.hasOwnProperty(le)?(z!=null&&le==="onScroll"&&Ht("scroll",n),x||U===z||(x=[])):(x=x||[]).push(le,z))}l&&(x=x||[]).push("style",l);var le=x;(r.updateQueue=le)&&(r.flags|=4)}},_m=function(n,r,l,u){l!==u&&(r.flags|=4)};function ia(n,r){if(!jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Sn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function Dv(n,r,l){var u=r.pendingProps;switch(mu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(r),null;case 1:return kn(r.type)&&rl(),Sn(r),null;case 3:return u=r.stateNode,Hs(),Gt(On),Gt(xn),Ru(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(cl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,mi!==null&&(sf(mi),mi=null))),qu(n,r),Sn(r),null;case 5:Au(r);var p=rs(Jo.current);if(l=r.type,n!==null&&r.stateNode!=null)gm(n,r,l,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Sn(r),null}if(n=rs(Pi.current),cl(r)){u=r.stateNode,l=r.type;var x=r.memoizedProps;switch(u[Ci]=r,u[qo]=x,n=(r.mode&1)!==0,l){case"dialog":Ht("cancel",u),Ht("close",u);break;case"iframe":case"object":case"embed":Ht("load",u);break;case"video":case"audio":for(p=0;p<Wo.length;p++)Ht(Wo[p],u);break;case"source":Ht("error",u);break;case"img":case"image":case"link":Ht("error",u),Ht("load",u);break;case"details":Ht("toggle",u);break;case"input":It(u,x),Ht("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},Ht("invalid",u);break;case"textarea":I(u,x),Ht("invalid",u)}He(l,x),p=null;for(var A in x)if(x.hasOwnProperty(A)){var U=x[A];A==="children"?typeof U=="string"?u.textContent!==U&&(x.suppressHydrationWarning!==!0&&tl(u.textContent,U,n),p=["children",U]):typeof U=="number"&&u.textContent!==""+U&&(x.suppressHydrationWarning!==!0&&tl(u.textContent,U,n),p=["children",""+U]):s.hasOwnProperty(A)&&U!=null&&A==="onScroll"&&Ht("scroll",u)}switch(l){case"input":Ye(u),V(u,x,!0);break;case"textarea":Ye(u),j(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=nl)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(l,{is:u.is}):(n=A.createElement(l),l==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,l),n[Ci]=r,n[qo]=u,mm(n,r,!1,!1),r.stateNode=n;e:{switch(A=Ue(l,u),l){case"dialog":Ht("cancel",n),Ht("close",n),p=u;break;case"iframe":case"object":case"embed":Ht("load",n),p=u;break;case"video":case"audio":for(p=0;p<Wo.length;p++)Ht(Wo[p],n);p=u;break;case"source":Ht("error",n),p=u;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),p=u;break;case"details":Ht("toggle",n),p=u;break;case"input":It(n,u),p=At(n,u),Ht("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=se({},u,{value:void 0}),Ht("invalid",n);break;case"textarea":I(n,u),p=Xe(n,u),Ht("invalid",n);break;default:p=u}He(l,p),U=p;for(x in U)if(U.hasOwnProperty(x)){var z=U[x];x==="style"?we(n,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ve(n,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&Ae(n,z):typeof z=="number"&&Ae(n,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(s.hasOwnProperty(x)?z!=null&&x==="onScroll"&&Ht("scroll",n):z!=null&&L(n,x,z,A))}switch(l){case"input":Ye(n),V(n,u,!1);break;case"textarea":Ye(n),j(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ce(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?bt(n,!!u.multiple,x,!1):u.defaultValue!=null&&bt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=nl)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Sn(r),null;case 6:if(n&&r.stateNode!=null)_m(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=rs(Jo.current),rs(Pi.current),cl(r)){if(u=r.stateNode,l=r.memoizedProps,u[Ci]=r,(x=u.nodeValue!==l)&&(n=qn,n!==null))switch(n.tag){case 3:tl(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tl(u.nodeValue,l,(n.mode&1)!==0)}x&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Ci]=r,r.stateNode=u}return Sn(r),null;case 13:if(Gt(qt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Yn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)yp(),ks(),r.flags|=98560,x=!1;else if(x=cl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=r.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Ci]=r}else ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Sn(r),x=!1}else mi!==null&&(sf(mi),mi=null),x=!0;if(!x)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(qt.current&1)!==0?an===0&&(an=3):lf())),r.updateQueue!==null&&(r.flags|=4),Sn(r),null);case 4:return Hs(),qu(n,r),n===null&&Xo(r.stateNode.containerInfo),Sn(r),null;case 10:return Su(r.type._context),Sn(r),null;case 17:return kn(r.type)&&rl(),Sn(r),null;case 19:if(Gt(qt),x=r.memoizedState,x===null)return Sn(r),null;if(u=(r.flags&128)!==0,A=x.rendering,A===null)if(u)ia(x,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=ml(n),A!==null){for(r.flags|=128,ia(x,!1),u=A.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)x=l,n=u,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,n=A.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return zt(qt,qt.current&1|2),r.child}n=n.sibling}x.tail!==null&&b()>js&&(r.flags|=128,u=!0,ia(x,!1),r.lanes=4194304)}else{if(!u)if(n=ml(A),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ia(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!jt)return Sn(r),null}else 2*b()-x.renderingStartTime>js&&l!==1073741824&&(r.flags|=128,u=!0,ia(x,!1),r.lanes=4194304);x.isBackwards?(A.sibling=r.child,r.child=A):(l=x.last,l!==null?l.sibling=A:r.child=A,x.last=A)}return x.tail!==null?(r=x.tail,x.rendering=r,x.tail=r.sibling,x.renderingStartTime=b(),r.sibling=null,l=qt.current,zt(qt,u?l&1|2:l&1),r):(Sn(r),null);case 22:case 23:return af(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Kn&1073741824)!==0&&(Sn(r),r.subtreeFlags&6&&(r.flags|=8192)):Sn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Uv(n,r){switch(mu(r),r.tag){case 1:return kn(r.type)&&rl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Hs(),Gt(On),Gt(xn),Ru(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Au(r),null;case 13:if(Gt(qt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Gt(qt),null;case 4:return Hs(),null;case 10:return Su(r.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Tl=!1,Mn=!1,Fv=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Ws(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){$t(n,r,u)}else l.current=null}function Yu(n,r,l){try{l()}catch(u){$t(n,r,u)}}var vm=!1;function Ov(n,r){if(ou=Wa,n=$h(),Jc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var A=0,U=-1,z=-1,le=0,xe=0,ye=n,ve=null;t:for(;;){for(var ke;ye!==l||p!==0&&ye.nodeType!==3||(U=A+p),ye!==x||u!==0&&ye.nodeType!==3||(z=A+u),ye.nodeType===3&&(A+=ye.nodeValue.length),(ke=ye.firstChild)!==null;)ve=ye,ye=ke;for(;;){if(ye===n)break t;if(ve===l&&++le===p&&(U=A),ve===x&&++xe===u&&(z=A),(ke=ye.nextSibling)!==null)break;ye=ve,ve=ye.parentNode}ye=ke}l=U===-1||z===-1?null:{start:U,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(au={focusedElem:n,selectionRange:l},Wa=!1,ze=r;ze!==null;)if(r=ze,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,ze=n;else for(;ze!==null;){r=ze;try{var We=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var qe=We.memoizedProps,en=We.memoizedState,te=r.stateNode,G=te.getSnapshotBeforeUpdate(r.elementType===r.type?qe:gi(r.type,qe),en);te.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var re=r.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){$t(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,ze=n;break}ze=r.return}return We=vm,vm=!1,We}function ra(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&Yu(r,l,x)}p=p.next}while(p!==u)}}function wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function Ku(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function xm(n){var r=n.alternate;r!==null&&(n.alternate=null,xm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ci],delete r[qo],delete r[fu],delete r[xv],delete r[yv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ym(n){return n.tag===5||n.tag===3||n.tag===4}function Sm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $u(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=nl));else if(u!==4&&(n=n.child,n!==null))for($u(n,r,l),n=n.sibling;n!==null;)$u(n,r,l),n=n.sibling}function Zu(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Zu(n,r,l),n=n.sibling;n!==null;)Zu(n,r,l),n=n.sibling}var _n=null,_i=!1;function Nr(n,r,l){for(l=l.child;l!==null;)Mm(n,r,l),l=l.sibling}function Mm(n,r,l){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(Pe,l)}catch{}switch(l.tag){case 5:Mn||Ws(l,r);case 6:var u=_n,p=_i;_n=null,Nr(n,r,l),_n=u,_i=p,_n!==null&&(_i?(n=_n,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):_n.removeChild(l.stateNode));break;case 18:_n!==null&&(_i?(n=_n,l=l.stateNode,n.nodeType===8?uu(n.parentNode,l):n.nodeType===1&&uu(n,l),Fo(n)):uu(_n,l.stateNode));break;case 4:u=_n,p=_i,_n=l.stateNode.containerInfo,_i=!0,Nr(n,r,l),_n=u,_i=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&Yu(l,r,A),p=p.next}while(p!==u)}Nr(n,r,l);break;case 1:if(!Mn&&(Ws(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(U){$t(l,r,U)}Nr(n,r,l);break;case 21:Nr(n,r,l);break;case 22:l.mode&1?(Mn=(u=Mn)||l.memoizedState!==null,Nr(n,r,l),Mn=u):Nr(n,r,l);break;default:Nr(n,r,l)}}function Em(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Fv),r.forEach(function(u){var p=jv.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function vi(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var x=n,A=r,U=A;e:for(;U!==null;){switch(U.tag){case 5:_n=U.stateNode,_i=!1;break e;case 3:_n=U.stateNode.containerInfo,_i=!0;break e;case 4:_n=U.stateNode.containerInfo,_i=!0;break e}U=U.return}if(_n===null)throw Error(t(160));Mm(x,A,p),_n=null,_i=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(le){$t(p,r,le)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Tm(r,n),r=r.sibling}function Tm(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(r,n),Ii(n),u&4){try{ra(3,n,n.return),wl(3,n)}catch(qe){$t(n,n.return,qe)}try{ra(5,n,n.return)}catch(qe){$t(n,n.return,qe)}}break;case 1:vi(r,n),Ii(n),u&512&&l!==null&&Ws(l,l.return);break;case 5:if(vi(r,n),Ii(n),u&512&&l!==null&&Ws(l,l.return),n.flags&32){var p=n.stateNode;try{Ae(p,"")}catch(qe){$t(n,n.return,qe)}}if(u&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,A=l!==null?l.memoizedProps:x,U=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{U==="input"&&x.type==="radio"&&x.name!=null&&dt(p,x),Ue(U,A);var le=Ue(U,x);for(A=0;A<z.length;A+=2){var xe=z[A],ye=z[A+1];xe==="style"?we(p,ye):xe==="dangerouslySetInnerHTML"?Ve(p,ye):xe==="children"?Ae(p,ye):L(p,xe,ye,le)}switch(U){case"input":Vt(p,x);break;case"textarea":T(p,x);break;case"select":var ve=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var ke=x.value;ke!=null?bt(p,!!x.multiple,ke,!1):ve!==!!x.multiple&&(x.defaultValue!=null?bt(p,!!x.multiple,x.defaultValue,!0):bt(p,!!x.multiple,x.multiple?[]:"",!1))}p[qo]=x}catch(qe){$t(n,n.return,qe)}}break;case 6:if(vi(r,n),Ii(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(qe){$t(n,n.return,qe)}}break;case 3:if(vi(r,n),Ii(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Fo(r.containerInfo)}catch(qe){$t(n,n.return,qe)}break;case 4:vi(r,n),Ii(n);break;case 13:vi(r,n),Ii(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(ef=b())),u&4&&Em(n);break;case 22:if(xe=l!==null&&l.memoizedState!==null,n.mode&1?(Mn=(le=Mn)||xe,vi(r,n),Mn=le):vi(r,n),Ii(n),u&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!xe&&(n.mode&1)!==0)for(ze=n,xe=n.child;xe!==null;){for(ye=ze=xe;ze!==null;){switch(ve=ze,ke=ve.child,ve.tag){case 0:case 11:case 14:case 15:ra(4,ve,ve.return);break;case 1:Ws(ve,ve.return);var We=ve.stateNode;if(typeof We.componentWillUnmount=="function"){u=ve,l=ve.return;try{r=u,We.props=r.memoizedProps,We.state=r.memoizedState,We.componentWillUnmount()}catch(qe){$t(u,l,qe)}}break;case 5:Ws(ve,ve.return);break;case 22:if(ve.memoizedState!==null){bm(ye);continue}}ke!==null?(ke.return=ve,ze=ke):bm(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{p=ye.stateNode,le?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(U=ye.stateNode,z=ye.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=Se("display",A))}catch(qe){$t(n,n.return,qe)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=le?"":ye.memoizedProps}catch(qe){$t(n,n.return,qe)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:vi(r,n),Ii(n),u&4&&Em(n);break;case 21:break;default:vi(r,n),Ii(n)}}function Ii(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(ym(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Ae(p,""),u.flags&=-33);var x=Sm(n);Zu(n,x,p);break;case 3:case 4:var A=u.stateNode.containerInfo,U=Sm(n);$u(n,U,A);break;default:throw Error(t(161))}}catch(z){$t(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function kv(n,r,l){ze=n,wm(n)}function wm(n,r,l){for(var u=(n.mode&1)!==0;ze!==null;){var p=ze,x=p.child;if(p.tag===22&&u){var A=p.memoizedState!==null||Tl;if(!A){var U=p.alternate,z=U!==null&&U.memoizedState!==null||Mn;U=Tl;var le=Mn;if(Tl=A,(Mn=z)&&!le)for(ze=p;ze!==null;)A=ze,z=A.child,A.tag===22&&A.memoizedState!==null?Rm(p):z!==null?(z.return=A,ze=z):Rm(p);for(;x!==null;)ze=x,wm(x),x=x.sibling;ze=p,Tl=U,Mn=le}Am(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,ze=x):Am(n)}}function Am(n){for(;ze!==null;){var r=ze;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mn||wl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Mn)if(l===null)u.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:gi(r.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=r.updateQueue;x!==null&&bp(r,x,u);break;case 3:var A=r.updateQueue;if(A!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}bp(r,A,l)}break;case 5:var U=r.stateNode;if(l===null&&r.flags&4){l=U;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var le=r.alternate;if(le!==null){var xe=le.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&Fo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||r.flags&512&&Ku(r)}catch(ve){$t(r,r.return,ve)}}if(r===n){ze=null;break}if(l=r.sibling,l!==null){l.return=r.return,ze=l;break}ze=r.return}}function bm(n){for(;ze!==null;){var r=ze;if(r===n){ze=null;break}var l=r.sibling;if(l!==null){l.return=r.return,ze=l;break}ze=r.return}}function Rm(n){for(;ze!==null;){var r=ze;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{wl(4,r)}catch(z){$t(r,l,z)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(z){$t(r,p,z)}}var x=r.return;try{Ku(r)}catch(z){$t(r,x,z)}break;case 5:var A=r.return;try{Ku(r)}catch(z){$t(r,A,z)}}}catch(z){$t(r,r.return,z)}if(r===n){ze=null;break}var U=r.sibling;if(U!==null){U.return=r.return,ze=U;break}ze=r.return}}var Bv=Math.ceil,Al=C.ReactCurrentDispatcher,Ju=C.ReactCurrentOwner,ai=C.ReactCurrentBatchConfig,Ct=0,hn=null,nn=null,vn=0,Kn=0,Xs=Rr(0),an=0,sa=null,os=0,bl=0,Qu=0,oa=null,zn=null,ef=0,js=1/0,rr=null,Rl=!1,tf=null,Dr=null,Cl=!1,Ur=null,Pl=0,aa=0,nf=null,Ll=-1,Il=0;function Cn(){return(Ct&6)!==0?b():Ll!==-1?Ll:Ll=b()}function Fr(n){return(n.mode&1)===0?1:(Ct&2)!==0&&vn!==0?vn&-vn:Mv.transition!==null?(Il===0&&(Il=Un()),Il):(n=lt,n!==0||(n=window.event,n=n===void 0?16:Ph(n.type)),n)}function xi(n,r,l,u){if(50<aa)throw aa=0,nf=null,Error(t(185));Xn(n,l,u),((Ct&2)===0||n!==hn)&&(n===hn&&((Ct&2)===0&&(bl|=l),an===4&&Or(n,vn)),Vn(n,u),l===1&&Ct===0&&(r.mode&1)===0&&(js=b()+500,ol&&Pr()))}function Vn(n,r){var l=n.callbackNode;bn(n,r);var u=Jt(n,n===hn?vn:0);if(u===0)l!==null&&Va(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&Va(l),r===1)n.tag===0?Sv(Pm.bind(null,n)):mp(Pm.bind(null,n)),_v(function(){(Ct&6)===0&&Pr()}),l=null;else{switch(hi(u)){case 1:l=ue;break;case 4:l=oe;break;case 16:l=ie;break;case 536870912:l=Be;break;default:l=ie}l=km(l,Cm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Cm(n,r){if(Ll=-1,Il=0,(Ct&6)!==0)throw Error(t(327));var l=n.callbackNode;if(qs()&&n.callbackNode!==l)return null;var u=Jt(n,n===hn?vn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Nl(n,u);else{r=u;var p=Ct;Ct|=2;var x=Im();(hn!==n||vn!==r)&&(rr=null,js=b()+500,ls(n,r));do try{Hv();break}catch(U){Lm(n,U)}while(!0);yu(),Al.current=x,Ct=p,nn!==null?r=0:(hn=null,vn=0,r=an)}if(r!==0){if(r===2&&(p=Mt(n),p!==0&&(u=p,r=rf(n,p))),r===1)throw l=sa,ls(n,0),Or(n,u),Vn(n,b()),l;if(r===6)Or(n,u);else{if(p=n.current.alternate,(u&30)===0&&!zv(p)&&(r=Nl(n,u),r===2&&(x=Mt(n),x!==0&&(u=x,r=rf(n,x))),r===1))throw l=sa,ls(n,0),Or(n,u),Vn(n,b()),l;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:cs(n,zn,rr);break;case 3:if(Or(n,u),(u&130023424)===u&&(r=ef+500-b(),10<r)){if(Jt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Cn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=cu(cs.bind(null,n,zn,rr),r);break}cs(n,zn,rr);break;case 4:if(Or(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var A=31-nt(u);x=1<<A,A=r[A],A>p&&(p=A),u&=~x}if(u=p,u=b()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Bv(u/1960))-u,10<u){n.timeoutHandle=cu(cs.bind(null,n,zn,rr),u);break}cs(n,zn,rr);break;case 5:cs(n,zn,rr);break;default:throw Error(t(329))}}}return Vn(n,b()),n.callbackNode===l?Cm.bind(null,n):null}function rf(n,r){var l=oa;return n.current.memoizedState.isDehydrated&&(ls(n,r).flags|=256),n=Nl(n,r),n!==2&&(r=zn,zn=l,r!==null&&sf(r)),n}function sf(n){zn===null?zn=n:zn.push.apply(zn,n)}function zv(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],x=p.getSnapshot;p=p.value;try{if(!pi(x(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Or(n,r){for(r&=~Qu,r&=~bl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-nt(r),u=1<<l;n[l]=-1,r&=~u}}function Pm(n){if((Ct&6)!==0)throw Error(t(327));qs();var r=Jt(n,0);if((r&1)===0)return Vn(n,b()),null;var l=Nl(n,r);if(n.tag!==0&&l===2){var u=Mt(n);u!==0&&(r=u,l=rf(n,u))}if(l===1)throw l=sa,ls(n,0),Or(n,r),Vn(n,b()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,cs(n,zn,rr),Vn(n,b()),null}function of(n,r){var l=Ct;Ct|=1;try{return n(r)}finally{Ct=l,Ct===0&&(js=b()+500,ol&&Pr())}}function as(n){Ur!==null&&Ur.tag===0&&(Ct&6)===0&&qs();var r=Ct;Ct|=1;var l=ai.transition,u=lt;try{if(ai.transition=null,lt=1,n)return n()}finally{lt=u,ai.transition=l,Ct=r,(Ct&6)===0&&Pr()}}function af(){Kn=Xs.current,Gt(Xs)}function ls(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,gv(l)),nn!==null)for(l=nn.return;l!==null;){var u=l;switch(mu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&rl();break;case 3:Hs(),Gt(On),Gt(xn),Ru();break;case 5:Au(u);break;case 4:Hs();break;case 13:Gt(qt);break;case 19:Gt(qt);break;case 10:Su(u.type._context);break;case 22:case 23:af()}l=l.return}if(hn=n,nn=n=kr(n.current,null),vn=Kn=r,an=0,sa=null,Qu=bl=os=0,zn=oa=null,is!==null){for(r=0;r<is.length;r++)if(l=is[r],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,x=l.pending;if(x!==null){var A=x.next;x.next=p,u.next=A}l.pending=u}is=null}return n}function Lm(n,r){do{var l=nn;try{if(yu(),gl.current=yl,_l){for(var u=Yt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}_l=!1}if(ss=0,dn=on=Yt=null,Qo=!1,ea=0,Ju.current=null,l===null||l.return===null){an=1,sa=r,nn=null;break}e:{var x=n,A=l.return,U=l,z=r;if(r=vn,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var le=z,xe=U,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ke=nm(A);if(ke!==null){ke.flags&=-257,im(ke,A,U,x,r),ke.mode&1&&tm(x,le,r),r=ke,z=le;var We=r.updateQueue;if(We===null){var qe=new Set;qe.add(z),r.updateQueue=qe}else We.add(z);break e}else{if((r&1)===0){tm(x,le,r),lf();break e}z=Error(t(426))}}else if(jt&&U.mode&1){var en=nm(A);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),im(en,A,U,x,r),vu(Gs(z,U));break e}}x=z=Gs(z,U),an!==4&&(an=2),oa===null?oa=[x]:oa.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,r&=-r,x.lanes|=r;var te=Qp(x,z,r);Ap(x,te);break e;case 1:U=z;var G=x.type,re=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Dr===null||!Dr.has(re)))){x.flags|=65536,r&=-r,x.lanes|=r;var Te=em(x,U,r);Ap(x,Te);break e}}x=x.return}while(x!==null)}Dm(l)}catch(Ze){r=Ze,nn===l&&l!==null&&(nn=l=l.return);continue}break}while(!0)}function Im(){var n=Al.current;return Al.current=yl,n===null?yl:n}function lf(){(an===0||an===3||an===2)&&(an=4),hn===null||(os&268435455)===0&&(bl&268435455)===0||Or(hn,vn)}function Nl(n,r){var l=Ct;Ct|=2;var u=Im();(hn!==n||vn!==r)&&(rr=null,ls(n,r));do try{Vv();break}catch(p){Lm(n,p)}while(!0);if(yu(),Ct=l,Al.current=u,nn!==null)throw Error(t(261));return hn=null,vn=0,an}function Vv(){for(;nn!==null;)Nm(nn)}function Hv(){for(;nn!==null&&!kc();)Nm(nn)}function Nm(n){var r=Om(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,r===null?Dm(n):nn=r,Ju.current=null}function Dm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Dv(l,r,Kn),l!==null){nn=l;return}}else{if(l=Uv(l,r),l!==null){l.flags&=32767,nn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,nn=null;return}}if(r=r.sibling,r!==null){nn=r;return}nn=r=n}while(r!==null);an===0&&(an=5)}function cs(n,r,l){var u=lt,p=ai.transition;try{ai.transition=null,lt=1,Gv(n,r,l,u)}finally{ai.transition=p,lt=u}return null}function Gv(n,r,l,u){do qs();while(Ur!==null);if((Ct&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=l.lanes|l.childLanes;if(yr(n,x),n===hn&&(nn=hn=null,vn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Cl||(Cl=!0,km(ie,function(){return qs(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=ai.transition,ai.transition=null;var A=lt;lt=1;var U=Ct;Ct|=4,Ju.current=null,Ov(n,l),Tm(l,n),cv(au),Wa=!!ou,au=ou=null,n.current=l,kv(l),Bc(),Ct=U,lt=A,ai.transition=x}else n.current=l;if(Cl&&(Cl=!1,Ur=n,Pl=p),x=n.pendingLanes,x===0&&(Dr=null),Je(l.stateNode),Vn(n,b()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Rl)throw Rl=!1,n=tf,tf=null,n;return(Pl&1)!==0&&n.tag!==0&&qs(),x=n.pendingLanes,(x&1)!==0?n===nf?aa++:(aa=0,nf=n):aa=0,Pr(),null}function qs(){if(Ur!==null){var n=hi(Pl),r=ai.transition,l=lt;try{if(ai.transition=null,lt=16>n?16:n,Ur===null)var u=!1;else{if(n=Ur,Ur=null,Pl=0,(Ct&6)!==0)throw Error(t(331));var p=Ct;for(Ct|=4,ze=n.current;ze!==null;){var x=ze,A=x.child;if((ze.flags&16)!==0){var U=x.deletions;if(U!==null){for(var z=0;z<U.length;z++){var le=U[z];for(ze=le;ze!==null;){var xe=ze;switch(xe.tag){case 0:case 11:case 15:ra(8,xe,x)}var ye=xe.child;if(ye!==null)ye.return=xe,ze=ye;else for(;ze!==null;){xe=ze;var ve=xe.sibling,ke=xe.return;if(xm(xe),xe===le){ze=null;break}if(ve!==null){ve.return=ke,ze=ve;break}ze=ke}}}var We=x.alternate;if(We!==null){var qe=We.child;if(qe!==null){We.child=null;do{var en=qe.sibling;qe.sibling=null,qe=en}while(qe!==null)}}ze=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,ze=A;else e:for(;ze!==null;){if(x=ze,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ra(9,x,x.return)}var te=x.sibling;if(te!==null){te.return=x.return,ze=te;break e}ze=x.return}}var G=n.current;for(ze=G;ze!==null;){A=ze;var re=A.child;if((A.subtreeFlags&2064)!==0&&re!==null)re.return=A,ze=re;else e:for(A=G;ze!==null;){if(U=ze,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:wl(9,U)}}catch(Ze){$t(U,U.return,Ze)}if(U===A){ze=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,ze=Te;break e}ze=U.return}}if(Ct=p,Pr(),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(Pe,n)}catch{}u=!0}return u}finally{lt=l,ai.transition=r}}return!1}function Um(n,r,l){r=Gs(l,r),r=Qp(n,r,1),n=Ir(n,r,1),r=Cn(),n!==null&&(Xn(n,1,r),Vn(n,r))}function $t(n,r,l){if(n.tag===3)Um(n,n,l);else for(;r!==null;){if(r.tag===3){Um(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Dr===null||!Dr.has(u))){n=Gs(l,n),n=em(r,n,1),r=Ir(r,n,1),n=Cn(),r!==null&&(Xn(r,1,n),Vn(r,n));break}}r=r.return}}function Wv(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=Cn(),n.pingedLanes|=n.suspendedLanes&l,hn===n&&(vn&l)===l&&(an===4||an===3&&(vn&130023424)===vn&&500>b()-ef?ls(n,0):Qu|=l),Vn(n,r)}function Fm(n,r){r===0&&((n.mode&1)===0?r=1:(r=kt,kt<<=1,(kt&130023424)===0&&(kt=4194304)));var l=Cn();n=tr(n,r),n!==null&&(Xn(n,r,l),Vn(n,l))}function Xv(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Fm(n,l)}function jv(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Fm(n,l)}var Om;Om=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||On.current)Bn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Bn=!1,Nv(n,r,l);Bn=(n.flags&131072)!==0}else Bn=!1,jt&&(r.flags&1048576)!==0&&gp(r,ll,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;El(n,r),n=r.pendingProps;var p=Us(r,xn.current);Vs(r,l),p=Lu(null,r,u,n,p,l);var x=Iu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,kn(u)?(x=!0,sl(r)):x=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Tu(r),p.updater=Sl,r.stateNode=p,p._reactInternals=r,ku(r,u,n,l),r=Hu(null,r,u,!0,x,l)):(r.tag=0,jt&&x&&pu(r),Rn(null,r,p,l),r=r.child),r;case 16:u=r.elementType;e:{switch(El(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=Yv(u),n=gi(u,n),p){case 0:r=Vu(null,r,u,n,l);break e;case 1:r=cm(null,r,u,n,l);break e;case 11:r=rm(null,r,u,n,l);break e;case 14:r=sm(null,r,u,gi(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:gi(u,p),Vu(n,r,u,p,l);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:gi(u,p),cm(n,r,u,p,l);case 3:e:{if(um(r),n===null)throw Error(t(387));u=r.pendingProps,x=r.memoizedState,p=x.element,wp(n,r),pl(r,u,null,l);var A=r.memoizedState;if(u=A.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=x,r.memoizedState=x,r.flags&256){p=Gs(Error(t(423)),r),r=fm(n,r,u,l,p);break e}else if(u!==p){p=Gs(Error(t(424)),r),r=fm(n,r,u,l,p);break e}else for(Yn=br(r.stateNode.containerInfo.firstChild),qn=r,jt=!0,mi=null,l=Ep(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ks(),u===p){r=ir(n,r,l);break e}Rn(n,r,u,l)}r=r.child}return r;case 5:return Rp(r),n===null&&_u(r),u=r.type,p=r.pendingProps,x=n!==null?n.memoizedProps:null,A=p.children,lu(u,p)?A=null:x!==null&&lu(u,x)&&(r.flags|=32),lm(n,r),Rn(n,r,A,l),r.child;case 6:return n===null&&_u(r),null;case 13:return dm(n,r,l);case 4:return wu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Bs(r,null,u,l):Rn(n,r,u,l),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:gi(u,p),rm(n,r,u,p,l);case 7:return Rn(n,r,r.pendingProps,l),r.child;case 8:return Rn(n,r,r.pendingProps.children,l),r.child;case 12:return Rn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,x=r.memoizedProps,A=p.value,zt(fl,u._currentValue),u._currentValue=A,x!==null)if(pi(x.value,A)){if(x.children===p.children&&!On.current){r=ir(n,r,l);break e}}else for(x=r.child,x!==null&&(x.return=r);x!==null;){var U=x.dependencies;if(U!==null){A=x.child;for(var z=U.firstContext;z!==null;){if(z.context===u){if(x.tag===1){z=nr(-1,l&-l),z.tag=2;var le=x.updateQueue;if(le!==null){le=le.shared;var xe=le.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),le.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),Mu(x.return,l,r),U.lanes|=l;break}z=z.next}}else if(x.tag===10)A=x.type===r.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=l,U=A.alternate,U!==null&&(U.lanes|=l),Mu(A,l,r),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===r){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Rn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Vs(r,l),p=si(p),u=u(p),r.flags|=1,Rn(n,r,u,l),r.child;case 14:return u=r.type,p=gi(u,r.pendingProps),p=gi(u.type,p),sm(n,r,u,p,l);case 15:return om(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:gi(u,p),El(n,r),r.tag=1,kn(u)?(n=!0,sl(r)):n=!1,Vs(r,l),Zp(r,u,p),ku(r,u,p,l),Hu(null,r,u,!0,n,l);case 19:return pm(n,r,l);case 22:return am(n,r,l)}throw Error(t(156,r.tag))};function km(n,r){return za(n,r)}function qv(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,r,l,u){return new qv(n,r,l,u)}function cf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yv(n){if(typeof n=="function")return cf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===q)return 14}return 2}function kr(n,r){var l=n.alternate;return l===null?(l=li(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Dl(n,r,l,u,p,x){var A=2;if(u=n,typeof n=="function")cf(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case k:return us(l.children,p,x,r);case w:A=8,p|=8;break;case P:return n=li(12,l,r,p|2),n.elementType=P,n.lanes=x,n;case X:return n=li(13,l,r,p),n.elementType=X,n.lanes=x,n;case ne:return n=li(19,l,r,p),n.elementType=ne,n.lanes=x,n;case B:return Ul(l,p,x,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ae:A=10;break e;case F:A=9;break e;case W:A=11;break e;case q:A=14;break e;case $:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=li(A,l,r,p),r.elementType=n,r.type=u,r.lanes=x,r}function us(n,r,l,u){return n=li(7,n,u,r),n.lanes=l,n}function Ul(n,r,l,u){return n=li(22,n,u,r),n.elementType=B,n.lanes=l,n.stateNode={isHidden:!1},n}function uf(n,r,l){return n=li(6,n,null,r),n.lanes=l,n}function ff(n,r,l){return r=li(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Kv(n,r,l,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fn(0),this.expirationTimes=Fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function df(n,r,l,u,p,x,A,U,z){return n=new Kv(n,r,l,U,z),r===1?(r=1,x===!0&&(r|=8)):r=0,x=li(3,null,null,r),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(x),n}function $v(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function Bm(n){if(!n)return Cr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(kn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(kn(l))return hp(n,l,r)}return r}function zm(n,r,l,u,p,x,A,U,z){return n=df(l,u,!0,n,p,x,A,U,z),n.context=Bm(null),l=n.current,u=Cn(),p=Fr(l),x=nr(u,p),x.callback=r??null,Ir(l,x,p),n.current.lanes=p,Xn(n,p,u),Vn(n,u),n}function Fl(n,r,l,u){var p=r.current,x=Cn(),A=Fr(p);return l=Bm(l),r.context===null?r.context=l:r.pendingContext=l,r=nr(x,A),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Ir(p,r,A),n!==null&&(xi(n,p,A,x),hl(n,p,A)),A}function Ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Vm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function hf(n,r){Vm(n,r),(n=n.alternate)&&Vm(n,r)}function Zv(){return null}var Hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function pf(n){this._internalRoot=n}kl.prototype.render=pf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Fl(n,r,null,null)},kl.prototype.unmount=pf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;as(function(){Fl(null,n,null,null)}),r[Zi]=null}};function kl(n){this._internalRoot=n}kl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Lo();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Tr.length&&r!==0&&r<Tr[l].priority;l++);Tr.splice(l,0,n),l===0&&Rh(n)}};function mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function Jv(n,r,l,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var le=Ol(A);x.call(le)}}var A=zm(r,u,n,0,null,!1,!1,"",Gm);return n._reactRootContainer=A,n[Zi]=A.current,Xo(n.nodeType===8?n.parentNode:n),as(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var U=u;u=function(){var le=Ol(z);U.call(le)}}var z=df(n,0,!1,null,null,!1,!1,"",Gm);return n._reactRootContainer=z,n[Zi]=z.current,Xo(n.nodeType===8?n.parentNode:n),as(function(){Fl(r,z,l,u)}),z}function zl(n,r,l,u,p){var x=l._reactRootContainer;if(x){var A=x;if(typeof p=="function"){var U=p;p=function(){var z=Ol(A);U.call(z)}}Fl(r,A,n,p)}else A=Jv(l,r,n,p,u);return Ol(A)}Qt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=wt(r.pendingLanes);l!==0&&(Lt(r,l|1),Vn(r,b()),(Ct&6)===0&&(js=b()+500,Pr()))}break;case 13:as(function(){var u=tr(n,1);if(u!==null){var p=Cn();xi(u,n,1,p)}}),hf(n,1)}},ni=function(n){if(n.tag===13){var r=tr(n,134217728);if(r!==null){var l=Cn();xi(r,n,134217728,l)}hf(n,134217728)}},$i=function(n){if(n.tag===13){var r=Fr(n),l=tr(n,r);if(l!==null){var u=Cn();xi(l,n,r,u)}hf(n,r)}},Lo=function(){return lt},Ah=function(n,r){var l=lt;try{return lt=n,r()}finally{lt=l}},be=function(n,r,l){switch(r){case"input":if(Vt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var p=il(u);if(!p)throw Error(t(90));Zt(u),Vt(u,p)}}}break;case"textarea":T(n,l);break;case"select":r=l.value,r!=null&&bt(n,!!l.multiple,r,!1)}},at=of,Dt=as;var Qv={usingClientEntryPoint:!1,Events:[Yo,Ns,il,de,Ge,of]},la={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ex={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ka(n),n===null?null:n.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||Zv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Pe=Vl.inject(ex),Oe=Vl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qv,Hn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(r))throw Error(t(200));return $v(n,r,null,l)},Hn.createRoot=function(n,r){if(!mf(n))throw Error(t(299));var l=!1,u="",p=Hm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=df(n,1,!1,null,null,l,!1,u,p),n[Zi]=r.current,Xo(n.nodeType===8?n.parentNode:n),new pf(r)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ka(r),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return as(n)},Hn.hydrate=function(n,r,l){if(!Bl(r))throw Error(t(200));return zl(null,n,r,!0,l)},Hn.hydrateRoot=function(n,r,l){if(!mf(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,x="",A=Hm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),r=zm(r,null,n,1,l??null,p,!1,x,A),n[Zi]=r.current,Xo(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new kl(r)},Hn.render=function(n,r,l){if(!Bl(r))throw Error(t(200));return zl(null,n,r,!1,l)},Hn.unmountComponentAtNode=function(n){if(!Bl(n))throw Error(t(40));return n._reactRootContainer?(as(function(){zl(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1},Hn.unstable_batchedUpdates=of,Hn.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!Bl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return zl(n,r,l,!1,u)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Zm;function lx(){if(Zm)return vf.exports;Zm=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vf.exports=ax(),vf.exports}var Jm;function cx(){if(Jm)return Hl;Jm=1;var o=lx();return Hl.createRoot=o.createRoot,Hl.hydrateRoot=o.hydrateRoot,Hl}var ux=cx();function fx(o,e){o.src=e}const dx=o=>{var e,t,i,s="The Google Maps JavaScript API",a="google",c="importLibrary",f="__ib__",d=document,h=window,m=h[a]||(h[a]={}),_=m.maps||(m.maps={}),g=new Set,v=new URLSearchParams,M=()=>e||(e=new Promise(async(E,y)=>{var S;await(t=d.createElement("script")),v.set("libraries",[...g]+"");for(i in o)v.set(i.replace(/[A-Z]/g,R=>"_"+R[0].toLowerCase()),o[i]);v.set("callback",a+".maps."+f),fx(t,"https://maps.googleapis.com/maps/api/js?"+v),_[f]=E,t.onerror=()=>e=y(Error(s+" could not load.")),t.nonce=((S=d.querySelector("script[nonce]"))==null?void 0:S.nonce)||"",d.head.append(t)}));_[c]?console.warn(s+" only loads once. Ignoring:",o):_[c]=(E,...y)=>g.add(E)&&M().then(()=>_[c](E,...y))},hx=o=>`The setOptions() function should only be called once. The options passed to the additional call (${JSON.stringify(o)}) will be ignored.`,px=o=>`The google.maps.importLibrary() function is already defined, and @googlemaps/js-api-loader will use the existing function instead of overwriting it. The options passed to setOptions (${JSON.stringify(o)}) will be ignored.`,mx=()=>{},gx=()=>{};let Qm=!1;function _x(o){if(Qm){mx(hx(o));return}vx(o),Qm=!0}async function eg(o){var e,t;if(!((t=(e=window==null?void 0:window.google)==null?void 0:e.maps)!=null&&t.importLibrary))throw new Error("google.maps.importLibrary is not installed.");return await google.maps.importLibrary(o)}function vx(o){var t,i;const e=!!((i=(t=window.google)==null?void 0:t.maps)!=null&&i.importLibrary);e&&gx(px(o)),e||dx(o)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sh="183",xx=0,tg=1,yx=2,_c=1,Sx=2,ya=3,pr=0,Gn=1,Ei=2,dr=0,uo=1,ng=2,ig=3,rg=4,Mx=5,xs=100,Ex=101,Tx=102,wx=103,Ax=104,bx=200,Rx=201,Cx=202,Px=203,ad=204,ld=205,Lx=206,Ix=207,Nx=208,Dx=209,Ux=210,Fx=211,Ox=212,kx=213,Bx=214,cd=0,ud=1,fd=2,po=3,dd=4,hd=5,pd=6,md=7,I0=0,zx=1,Vx=2,Vi=0,N0=1,D0=2,U0=3,F0=4,O0=5,k0=6,B0=7,sg="attached",Hx="detached",z0=300,Ms=301,mo=302,Sf=303,Mf=304,Lc=306,go=1e3,Oi=1001,wc=1002,ln=1003,V0=1004,Sa=1005,sn=1006,vc=1007,ki=1008,Jn=1009,H0=1010,G0=1011,Aa=1012,oh=1013,Wi=1014,fi=1015,mr=1016,ah=1017,lh=1018,ba=1020,W0=35902,X0=35899,j0=1021,q0=1022,di=1023,gr=1026,Ss=1027,ch=1028,uh=1029,_o=1030,fh=1031,dh=1033,xc=33776,yc=33777,Sc=33778,Mc=33779,gd=35840,_d=35841,vd=35842,xd=35843,yd=36196,Sd=37492,Md=37496,Ed=37488,Td=37489,wd=37490,Ad=37491,bd=37808,Rd=37809,Cd=37810,Pd=37811,Ld=37812,Id=37813,Nd=37814,Dd=37815,Ud=37816,Fd=37817,Od=37818,kd=37819,Bd=37820,zd=37821,Vd=36492,Hd=36494,Gd=36495,Wd=36283,Xd=36284,jd=36285,qd=36286,Ra=2300,Ca=2301,Ef=2302,og=2303,ag=2400,lg=2401,cg=2402,Gx=2500,Wx=0,Y0=1,Yd=2,Xx=3200,K0=0,jx=1,qr="",gn="srgb",Dn="srgb-linear",Ac="linear",Ut="srgb",Ys=7680,ug=519,qx=512,Yx=513,Kx=514,hh=515,$x=516,Zx=517,ph=518,Jx=519,Kd=35044,fg="300 es",Bi=2e3,Pa=2001;function Qx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function ey(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function La(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function ty(){const o=La("canvas");return o.style.display="block",o}const dg={};function bc(...o){const e="THREE."+o.shift();console.log(e,...o)}function $0(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=o[1];t&&t.isStackTrace?o[0]+=" "+t.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function tt(...o){o=$0(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...o)}}function ot(...o){o=$0(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...o)}}function Rc(...o){const e=o.join(" ");e in dg||(dg[e]=!0,tt(...o))}function ny(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const iy={[cd]:ud,[fd]:pd,[dd]:md,[po]:hd,[ud]:cd,[pd]:fd,[md]:dd,[hd]:po};class Eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hg=1234567;const Ea=Math.PI/180,vo=180/Math.PI;function Ai(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function yt(o,e,t){return Math.max(e,Math.min(t,o))}function mh(o,e){return(o%e+e)%e}function ry(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function sy(o,e,t){return o!==e?(t-o)/(e-o):0}function Ta(o,e,t){return(1-t)*o+t*e}function oy(o,e,t,i){return Ta(o,e,1-Math.exp(-t*i))}function ay(o,e=1){return e-Math.abs(mh(o,e*2)-e)}function ly(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function cy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function uy(o,e){return o+Math.floor(Math.random()*(e-o+1))}function fy(o,e){return o+Math.random()*(e-o)}function dy(o){return o*(.5-Math.random())}function hy(o){o!==void 0&&(hg=o);let e=hg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function py(o){return o*Ea}function my(o){return o*vo}function gy(o){return(o&o-1)===0&&o!==0}function _y(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function vy(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function xy(o,e,t,i,s){const a=Math.cos,c=Math.sin,f=a(t/2),d=c(t/2),h=a((e+i)/2),m=c((e+i)/2),_=a((e-i)/2),g=c((e-i)/2),v=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(f*m,d*_,d*g,f*h);break;case"YZY":o.set(d*g,f*m,d*_,f*h);break;case"ZXZ":o.set(d*_,d*g,f*m,f*h);break;case"XZX":o.set(f*m,d*M,d*v,f*h);break;case"YXY":o.set(d*v,f*m,d*M,f*h);break;case"ZYZ":o.set(d*M,d*v,f*m,f*h);break;default:tt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ft(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const yy={DEG2RAD:Ea,RAD2DEG:vo,generateUUID:Ai,clamp:yt,euclideanModulo:mh,mapLinear:ry,inverseLerp:sy,lerp:Ta,damp:oy,pingpong:ay,smoothstep:ly,smootherstep:cy,randInt:uy,randFloat:fy,randFloatSpread:dy,seededRandom:hy,degToRad:py,radToDeg:my,isPowerOfTwo:gy,ceilPowerOfTwo:_y,floorPowerOfTwo:vy,setQuaternionFromProperEuler:xy,normalize:Ft,denormalize:Ti};class Tt{constructor(e=0,t=0){Tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _r{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,f){let d=i[s+0],h=i[s+1],m=i[s+2],_=i[s+3],g=a[c+0],v=a[c+1],M=a[c+2],E=a[c+3];if(_!==E||d!==g||h!==v||m!==M){let y=d*g+h*v+m*M+_*E;y<0&&(g=-g,v=-v,M=-M,E=-E,y=-y);let S=1-f;if(y<.9995){const R=Math.acos(y),L=Math.sin(R);S=Math.sin(S*R)/L,f=Math.sin(f*R)/L,d=d*S+g*f,h=h*S+v*f,m=m*S+M*f,_=_*S+E*f}else{d=d*S+g*f,h=h*S+v*f,m=m*S+M*f,_=_*S+E*f;const R=1/Math.sqrt(d*d+h*h+m*m+_*_);d*=R,h*=R,m*=R,_*=R}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,a,c){const f=i[s],d=i[s+1],h=i[s+2],m=i[s+3],_=a[c],g=a[c+1],v=a[c+2],M=a[c+3];return e[t]=f*M+m*_+d*v-h*g,e[t+1]=d*M+m*g+h*_-f*v,e[t+2]=h*M+m*v+f*g-d*_,e[t+3]=m*M-f*_-d*g-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(i/2),m=f(s/2),_=f(a/2),g=d(i/2),v=d(s/2),M=d(a/2);switch(c){case"XYZ":this._x=g*m*_+h*v*M,this._y=h*v*_-g*m*M,this._z=h*m*M+g*v*_,this._w=h*m*_-g*v*M;break;case"YXZ":this._x=g*m*_+h*v*M,this._y=h*v*_-g*m*M,this._z=h*m*M-g*v*_,this._w=h*m*_+g*v*M;break;case"ZXY":this._x=g*m*_-h*v*M,this._y=h*v*_+g*m*M,this._z=h*m*M+g*v*_,this._w=h*m*_-g*v*M;break;case"ZYX":this._x=g*m*_-h*v*M,this._y=h*v*_+g*m*M,this._z=h*m*M-g*v*_,this._w=h*m*_+g*v*M;break;case"YZX":this._x=g*m*_+h*v*M,this._y=h*v*_+g*m*M,this._z=h*m*M-g*v*_,this._w=h*m*_-g*v*M;break;case"XZY":this._x=g*m*_-h*v*M,this._y=h*v*_-g*m*M,this._z=h*m*M+g*v*_,this._w=h*m*_+g*v*M;break;default:tt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],f=t[5],d=t[9],h=t[2],m=t[6],_=t[10],g=i+f+_;if(g>0){const v=.5/Math.sqrt(g+1);this._w=.25/v,this._x=(m-d)*v,this._y=(a-h)*v,this._z=(c-s)*v}else if(i>f&&i>_){const v=2*Math.sqrt(1+i-f-_);this._w=(m-d)/v,this._x=.25*v,this._y=(s+c)/v,this._z=(a+h)/v}else if(f>_){const v=2*Math.sqrt(1+f-i-_);this._w=(a-h)/v,this._x=(s+c)/v,this._y=.25*v,this._z=(d+m)/v}else{const v=2*Math.sqrt(1+_-i-f);this._w=(c-s)/v,this._x=(a+h)/v,this._y=(d+m)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=i*m+c*f+s*h-a*d,this._y=s*m+c*d+a*f-i*h,this._z=a*m+c*h+i*d-s*f,this._w=c*m-i*f-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,c=e._w,f=this.dot(e);f<0&&(i=-i,s=-s,a=-a,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,i=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*s-f*i),m=2*(f*t-a*s),_=2*(a*i-c*t);return this.x=t+d*h+c*_-f*m,this.y=i+d*m+f*h-a*_,this.z=s+d*_+a*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,f=t.y,d=t.z;return this.x=s*d-a*f,this.y=a*c-i*d,this.z=i*f-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tf.copy(this).projectOnVector(e),this.sub(Tf)}reflect(e){return this.sub(Tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tf=new Q,pg=new _r;class pt{constructor(e,t,i,s,a,c,f,d,h){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,f,d,h)}set(e,t,i,s,a,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=s,m[2]=f,m[3]=t,m[4]=a,m[5]=d,m[6]=i,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],f=i[3],d=i[6],h=i[1],m=i[4],_=i[7],g=i[2],v=i[5],M=i[8],E=s[0],y=s[3],S=s[6],R=s[1],L=s[4],C=s[7],O=s[2],D=s[5],k=s[8];return a[0]=c*E+f*R+d*O,a[3]=c*y+f*L+d*D,a[6]=c*S+f*C+d*k,a[1]=h*E+m*R+_*O,a[4]=h*y+m*L+_*D,a[7]=h*S+m*C+_*k,a[2]=g*E+v*R+M*O,a[5]=g*y+v*L+M*D,a[8]=g*S+v*C+M*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-i*a*m+i*f*d+s*a*h-s*c*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],_=m*c-f*h,g=f*d-m*a,v=h*a-c*d,M=t*_+i*g+s*v;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(s*h-m*i)*E,e[2]=(f*i-s*c)*E,e[3]=g*E,e[4]=(m*t-s*d)*E,e[5]=(s*a-f*t)*E,e[6]=v*E,e[7]=(i*d-h*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,f){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*c+h*f)+c+e,-s*h,s*d,-s*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(wf.makeScale(e,t)),this}rotate(e){return this.premultiply(wf.makeRotation(-e)),this}translate(e,t){return this.premultiply(wf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wf=new pt,mg=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gg=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sy(){const o={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ut&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(s.r=fo(s.r),s.g=fo(s.g),s.b=fo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qr?Ac:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Rc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Rc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Dn]:{primaries:e,whitePoint:i,transfer:Ac,toXYZ:mg,fromXYZ:gg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:mg,fromXYZ:gg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),o}const Et=Sy();function hr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ks;class My{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=La("canvas")),Ks.width=e.width,Ks.height=e.height;const s=Ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=La("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=hr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return tt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ey=0;class gh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?a.push(Af(s[c].image)):a.push(Af(s[c]))}else a=Af(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Af(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?My.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(tt("Texture: Unable to serialize Texture."),{})}let Ty=0;const bf=new Q;class cn extends Eo{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Oi,s=Oi,a=sn,c=ki,f=di,d=Jn,h=cn.DEFAULT_ANISOTROPY,m=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=Ai(),this.name="",this.source=new gh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bf).x}get height(){return this.source.getSize(bf).y}get depth(){return this.source.getSize(bf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){tt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=z0;cn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,s=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],m=d[4],_=d[8],g=d[1],v=d[5],M=d[9],E=d[2],y=d[6],S=d[10];if(Math.abs(m-g)<.01&&Math.abs(_-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(m+g)<.1&&Math.abs(_+E)<.1&&Math.abs(M+y)<.1&&Math.abs(h+v+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,C=(v+1)/2,O=(S+1)/2,D=(m+g)/4,k=(_+E)/4,w=(M+y)/4;return L>C&&L>O?L<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(L),s=D/i,a=k/i):C>O?C<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(C),i=D/s,a=w/s):O<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(O),i=k/a,s=w/a),this.set(i,s,a,t),this}let R=Math.sqrt((y-M)*(y-M)+(_-E)*(_-E)+(g-m)*(g-m));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(_-E)/R,this.z=(g-m)/R,this.w=Math.acos((h+v+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wy extends Eo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},a=new cn(s),c=i.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new gh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends wy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Z0 extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ay extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gt{constructor(e,t,i,s,a,c,f,d,h,m,_,g,v,M,E,y){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,f,d,h,m,_,g,v,M,E,y)}set(e,t,i,s,a,c,f,d,h,m,_,g,v,M,E,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=a,S[5]=c,S[9]=f,S[13]=d,S[2]=h,S[6]=m,S[10]=_,S[14]=g,S[3]=v,S[7]=M,S[11]=E,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),a=1/$s.setFromMatrixColumn(e,1).length(),c=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),f=Math.sin(i),d=Math.cos(s),h=Math.sin(s),m=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const g=c*m,v=c*_,M=f*m,E=f*_;t[0]=d*m,t[4]=-d*_,t[8]=h,t[1]=v+M*h,t[5]=g-E*h,t[9]=-f*d,t[2]=E-g*h,t[6]=M+v*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*m,v=d*_,M=h*m,E=h*_;t[0]=g+E*f,t[4]=M*f-v,t[8]=c*h,t[1]=c*_,t[5]=c*m,t[9]=-f,t[2]=v*f-M,t[6]=E+g*f,t[10]=c*d}else if(e.order==="ZXY"){const g=d*m,v=d*_,M=h*m,E=h*_;t[0]=g-E*f,t[4]=-c*_,t[8]=M+v*f,t[1]=v+M*f,t[5]=c*m,t[9]=E-g*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const g=c*m,v=c*_,M=f*m,E=f*_;t[0]=d*m,t[4]=M*h-v,t[8]=g*h+E,t[1]=d*_,t[5]=E*h+g,t[9]=v*h-M,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,v=c*h,M=f*d,E=f*h;t[0]=d*m,t[4]=E-g*_,t[8]=M*_+v,t[1]=_,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=v*_+M,t[10]=g-E*_}else if(e.order==="XZY"){const g=c*d,v=c*h,M=f*d,E=f*h;t[0]=d*m,t[4]=-_,t[8]=h*m,t[1]=g*_+E,t[5]=c*m,t[9]=v*_-M,t[2]=M*_-v,t[6]=f*m,t[10]=E*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(by,e,Ry)}lookAt(e,t,i){const s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),zr.crossVectors(i,$n),zr.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),zr.crossVectors(i,$n)),zr.normalize(),Gl.crossVectors($n,zr),s[0]=zr.x,s[4]=Gl.x,s[8]=$n.x,s[1]=zr.y,s[5]=Gl.y,s[9]=$n.y,s[2]=zr.z,s[6]=Gl.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],f=i[4],d=i[8],h=i[12],m=i[1],_=i[5],g=i[9],v=i[13],M=i[2],E=i[6],y=i[10],S=i[14],R=i[3],L=i[7],C=i[11],O=i[15],D=s[0],k=s[4],w=s[8],P=s[12],ae=s[1],F=s[5],W=s[9],X=s[13],ne=s[2],q=s[6],$=s[10],B=s[14],Y=s[3],Z=s[7],se=s[11],N=s[15];return a[0]=c*D+f*ae+d*ne+h*Y,a[4]=c*k+f*F+d*q+h*Z,a[8]=c*w+f*W+d*$+h*se,a[12]=c*P+f*X+d*B+h*N,a[1]=m*D+_*ae+g*ne+v*Y,a[5]=m*k+_*F+g*q+v*Z,a[9]=m*w+_*W+g*$+v*se,a[13]=m*P+_*X+g*B+v*N,a[2]=M*D+E*ae+y*ne+S*Y,a[6]=M*k+E*F+y*q+S*Z,a[10]=M*w+E*W+y*$+S*se,a[14]=M*P+E*X+y*B+S*N,a[3]=R*D+L*ae+C*ne+O*Y,a[7]=R*k+L*F+C*q+O*Z,a[11]=R*w+L*W+C*$+O*se,a[15]=R*P+L*X+C*B+O*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],_=e[6],g=e[10],v=e[14],M=e[3],E=e[7],y=e[11],S=e[15],R=d*v-h*g,L=f*v-h*_,C=f*g-d*_,O=c*v-h*m,D=c*g-d*m,k=c*_-f*m;return t*(E*R-y*L+S*C)-i*(M*R-y*O+S*D)+s*(M*L-E*O+S*k)-a*(M*C-E*D+y*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],_=e[9],g=e[10],v=e[11],M=e[12],E=e[13],y=e[14],S=e[15],R=t*f-i*c,L=t*d-s*c,C=t*h-a*c,O=i*d-s*f,D=i*h-a*f,k=s*h-a*d,w=m*E-_*M,P=m*y-g*M,ae=m*S-v*M,F=_*y-g*E,W=_*S-v*E,X=g*S-v*y,ne=R*X-L*W+C*F+O*ae-D*P+k*w;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ne;return e[0]=(f*X-d*W+h*F)*q,e[1]=(s*W-i*X-a*F)*q,e[2]=(E*k-y*D+S*O)*q,e[3]=(g*D-_*k-v*O)*q,e[4]=(d*ae-c*X-h*P)*q,e[5]=(t*X-s*ae+a*P)*q,e[6]=(y*C-M*k-S*L)*q,e[7]=(m*k-g*C+v*L)*q,e[8]=(c*W-f*ae+h*w)*q,e[9]=(i*ae-t*W-a*w)*q,e[10]=(M*D-E*C+S*R)*q,e[11]=(_*C-m*D-v*R)*q,e[12]=(f*P-c*F-d*w)*q,e[13]=(t*F-i*P+s*w)*q,e[14]=(E*L-M*O-y*R)*q,e[15]=(m*O-_*L+g*R)*q,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,f=e.y,d=e.z,h=a*c,m=a*f;return this.set(h*c+i,h*f-s*d,h*d+s*f,0,h*f+s*d,m*f+i,m*d-s*c,0,h*d-s*f,m*d+s*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,f=t._z,d=t._w,h=a+a,m=c+c,_=f+f,g=a*h,v=a*m,M=a*_,E=c*m,y=c*_,S=f*_,R=d*h,L=d*m,C=d*_,O=i.x,D=i.y,k=i.z;return s[0]=(1-(E+S))*O,s[1]=(v+C)*O,s[2]=(M-L)*O,s[3]=0,s[4]=(v-C)*D,s[5]=(1-(g+S))*D,s[6]=(y+R)*D,s[7]=0,s[8]=(M+L)*k,s[9]=(y-R)*k,s[10]=(1-(g+E))*k,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let c=$s.set(s[0],s[1],s[2]).length();const f=$s.set(s[4],s[5],s[6]).length(),d=$s.set(s[8],s[9],s[10]).length();a<0&&(c=-c),yi.copy(this);const h=1/c,m=1/f,_=1/d;return yi.elements[0]*=h,yi.elements[1]*=h,yi.elements[2]*=h,yi.elements[4]*=m,yi.elements[5]*=m,yi.elements[6]*=m,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,t.setFromRotationMatrix(yi),i.x=c,i.y=f,i.z=d,this}makePerspective(e,t,i,s,a,c,f=Bi,d=!1){const h=this.elements,m=2*a/(t-e),_=2*a/(i-s),g=(t+e)/(t-e),v=(i+s)/(i-s);let M,E;if(d)M=a/(c-a),E=c*a/(c-a);else if(f===Bi)M=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(f===Pa)M=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=_,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,a,c,f=Bi,d=!1){const h=this.elements,m=2/(t-e),_=2/(i-s),g=-(t+e)/(t-e),v=-(i+s)/(i-s);let M,E;if(d)M=1/(c-a),E=c/(c-a);else if(f===Bi)M=-2/(c-a),E=-(c+a)/(c-a);else if(f===Pa)M=-1/(c-a),E=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=_,h[9]=0,h[13]=v,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $s=new Q,yi=new gt,by=new Q(0,0,0),Ry=new Q(1,1,1),zr=new Q,Gl=new Q,$n=new Q,_g=new gt,vg=new _r;class Xi{constructor(e=0,t=0,i=0,s=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],f=s[8],d=s[1],h=s[5],m=s[9],_=s[2],g=s[6],v=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,v),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,v),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,v),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,v),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(f,v));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-m,v),this._y=0);break;default:tt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _g.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_g,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vg.setFromEuler(this),this.setFromQuaternion(vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class J0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cy=0;const xg=new Q,Zs=new _r,sr=new gt,Wl=new Q,ua=new Q,Py=new Q,Ly=new _r,yg=new Q(1,0,0),Sg=new Q(0,1,0),Mg=new Q(0,0,1),Eg={type:"added"},Iy={type:"removed"},Js={type:"childadded",child:null},Rf={type:"childremoved",child:null};class Kt extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new Q,t=new Xi,i=new _r,s=new Q(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new pt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new J0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(yg,e)}rotateY(e){return this.rotateOnAxis(Sg,e)}rotateZ(e){return this.rotateOnAxis(Mg,e)}translateOnAxis(e,t){return xg.copy(e).applyQuaternion(this.quaternion),this.position.add(xg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yg,e)}translateY(e){return this.translateOnAxis(Sg,e)}translateZ(e){return this.translateOnAxis(Mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wl.copy(e):Wl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(ua,Wl,this.up):sr.lookAt(Wl,ua,this.up),this.quaternion.setFromRotationMatrix(sr),s&&(sr.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(sr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eg),Js.child=e,this.dispatchEvent(Js),Js.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Iy),Rf.child=e,this.dispatchEvent(Rf),Rf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eg),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,Py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,Ly,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const _=d[h];a(e.shapes,_)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(a(e.materials,this.material[d]));s.material=f}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(a(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),_=c(e.shapes),g=c(e.skeletons),v=c(e.animations),M=c(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),g.length>0&&(i.skeletons=g),v.length>0&&(i.animations=v),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new Q(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zi extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ny={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,i),S=this._getHandJoint(h,E);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const m=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],g=m.position.distanceTo(_.position),v=.02,M=.005;h.inputState.pinching&&g>v+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=v-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Ny)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function Pf(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=mh(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Pf(c,a,e+1/3),this.g=Pf(c,a,e),this.b=Pf(c,a,e-1/3)}return Et.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function i(a){a!==void 0&&parseFloat(a)<1&&tt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:tt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);tt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const i=Q0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):tt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Et.workingToColorSpace(Tn.copy(this),e),Math.round(yt(Tn.r*255,0,255))*65536+Math.round(yt(Tn.g*255,0,255))*256+Math.round(yt(Tn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Tn.copy(this),t);const i=Tn.r,s=Tn.g,a=Tn.b,c=Math.max(i,s,a),f=Math.min(i,s,a);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const _=c-f;switch(h=m<=.5?_/(c+f):_/(2-c-f),c){case i:d=(s-a)/_+(s<a?6:0);break;case s:d=(a-i)/_+2;break;case a:d=(i-s)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=gn){Et.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,s=Tn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Xl);const i=Ta(Vr.h,Xl.h,t),s=Ta(Vr.s,Xl.s,t),a=Ta(Vr.l,Xl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new ut;ut.NAMES=Q0;class Dy extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Si=new Q,or=new Q,Lf=new Q,ar=new Q,Qs=new Q,eo=new Q,Tg=new Q,If=new Q,Nf=new Q,Df=new Q,Uf=new Wt,Ff=new Wt,Of=new Wt;class wi{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Si.subVectors(e,t),s.cross(Si);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Si.subVectors(s,t),or.subVectors(i,t),Lf.subVectors(e,t);const c=Si.dot(Si),f=Si.dot(or),d=Si.dot(Lf),h=or.dot(or),m=or.dot(Lf),_=c*h-f*f;if(_===0)return a.set(0,0,0),null;const g=1/_,v=(h*d-f*m)*g,M=(c*m-f*d)*g;return a.set(1-v-M,M,v)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,i,s,a,c,f,d){return this.getBarycoord(e,t,i,s,ar)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,ar.x),d.addScaledVector(c,ar.y),d.addScaledVector(f,ar.z),d)}static getInterpolatedAttribute(e,t,i,s,a,c){return Uf.setScalar(0),Ff.setScalar(0),Of.setScalar(0),Uf.fromBufferAttribute(e,t),Ff.fromBufferAttribute(e,i),Of.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Uf,a.x),c.addScaledVector(Ff,a.y),c.addScaledVector(Of,a.z),c}static isFrontFacing(e,t,i,s){return Si.subVectors(i,t),or.subVectors(e,t),Si.cross(or).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Si.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,f;Qs.subVectors(s,i),eo.subVectors(a,i),If.subVectors(e,i);const d=Qs.dot(If),h=eo.dot(If);if(d<=0&&h<=0)return t.copy(i);Nf.subVectors(e,s);const m=Qs.dot(Nf),_=eo.dot(Nf);if(m>=0&&_<=m)return t.copy(s);const g=d*_-m*h;if(g<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(i).addScaledVector(Qs,c);Df.subVectors(e,a);const v=Qs.dot(Df),M=eo.dot(Df);if(M>=0&&v<=M)return t.copy(a);const E=v*h-d*M;if(E<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(i).addScaledVector(eo,f);const y=m*M-v*_;if(y<=0&&_-m>=0&&v-M>=0)return Tg.subVectors(a,s),f=(_-m)/(_-m+(v-M)),t.copy(s).addScaledVector(Tg,f);const S=1/(y+E+g);return c=E*S,f=g*S,t.copy(i).addScaledVector(Qs,c).addScaledVector(eo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vr{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Mi):Mi.fromBufferAttribute(a,c),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jl.copy(i.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),ql.subVectors(this.max,fa),to.subVectors(e.a,fa),no.subVectors(e.b,fa),io.subVectors(e.c,fa),Hr.subVectors(no,to),Gr.subVectors(io,no),fs.subVectors(to,io);let t=[0,-Hr.z,Hr.y,0,-Gr.z,Gr.y,0,-fs.z,fs.y,Hr.z,0,-Hr.x,Gr.z,0,-Gr.x,fs.z,0,-fs.x,-Hr.y,Hr.x,0,-Gr.y,Gr.x,0,-fs.y,fs.x,0];return!kf(t,to,no,io,ql)||(t=[1,0,0,0,1,0,0,0,1],!kf(t,to,no,io,ql))?!1:(Yl.crossVectors(Hr,Gr),t=[Yl.x,Yl.y,Yl.z],kf(t,to,no,io,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const lr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Mi=new Q,jl=new vr,to=new Q,no=new Q,io=new Q,Hr=new Q,Gr=new Q,fs=new Q,fa=new Q,ql=new Q,Yl=new Q,ds=new Q;function kf(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){ds.fromArray(o,a);const f=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),d=e.dot(ds),h=t.dot(ds),m=i.dot(ds);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const rn=new Q,Kl=new Tt;let Uy=0;class Nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kd,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kl.fromBufferAttribute(this,t),Kl.applyMatrix3(e),this.setXY(t,Kl.x,Kl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kd&&(e.usage=this.usage),e}}class e_ extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class t_ extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wn extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Fy=new vr,da=new Q,Bf=new Q;class qi{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Fy.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(da,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Bf)),this.expandByPoint(da.copy(e.center).sub(Bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Oy=0;const ci=new gt,zf=new Kt,ro=new Q,Zn=new vr,ha=new vr,mn=new Q;class Qn extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qx(e)?t_:e_)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new pt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Wn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&tt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const f=t[a];ha.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(Zn.min,ha.min),Zn.expandByPoint(mn),mn.addVectors(Zn.max,ha.max),Zn.expandByPoint(mn)):(Zn.expandByPoint(ha.min),Zn.expandByPoint(ha.max))}Zn.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)mn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(mn));if(t)for(let a=0,c=t.length;a<c;a++){const f=t[a],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)mn.fromBufferAttribute(f,h),d&&(ro.fromBufferAttribute(e,h),mn.add(ro)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let w=0;w<i.count;w++)f[w]=new Q,d[w]=new Q;const h=new Q,m=new Q,_=new Q,g=new Tt,v=new Tt,M=new Tt,E=new Q,y=new Q;function S(w,P,ae){h.fromBufferAttribute(i,w),m.fromBufferAttribute(i,P),_.fromBufferAttribute(i,ae),g.fromBufferAttribute(a,w),v.fromBufferAttribute(a,P),M.fromBufferAttribute(a,ae),m.sub(h),_.sub(h),v.sub(g),M.sub(g);const F=1/(v.x*M.y-M.x*v.y);isFinite(F)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(_,-v.y).multiplyScalar(F),y.copy(_).multiplyScalar(v.x).addScaledVector(m,-M.x).multiplyScalar(F),f[w].add(E),f[P].add(E),f[ae].add(E),d[w].add(y),d[P].add(y),d[ae].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,P=R.length;w<P;++w){const ae=R[w],F=ae.start,W=ae.count;for(let X=F,ne=F+W;X<ne;X+=3)S(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const L=new Q,C=new Q,O=new Q,D=new Q;function k(w){O.fromBufferAttribute(s,w),D.copy(O);const P=f[w];L.copy(P),L.sub(O.multiplyScalar(O.dot(P))).normalize(),C.crossVectors(D,P);const F=C.dot(d[w])<0?-1:1;c.setXYZW(w,L.x,L.y,L.z,F)}for(let w=0,P=R.length;w<P;++w){const ae=R[w],F=ae.start,W=ae.count;for(let X=F,ne=F+W;X<ne;X+=3)k(e.getX(X+0)),k(e.getX(X+1)),k(e.getX(X+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let g=0,v=i.count;g<v;g++)i.setXYZ(g,0,0,0);const s=new Q,a=new Q,c=new Q,f=new Q,d=new Q,h=new Q,m=new Q,_=new Q;if(e)for(let g=0,v=e.count;g<v;g+=3){const M=e.getX(g+0),E=e.getX(g+1),y=e.getX(g+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),m.subVectors(c,a),_.subVectors(s,a),m.cross(_),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),f.add(m),d.add(m),h.add(m),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,v=t.count;g<v;g+=3)s.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,a),_.subVectors(s,a),m.cross(_),i.setXYZ(g+0,m.x,m.y,m.z),i.setXYZ(g+1,m.x,m.y,m.z),i.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,_=f.normalized,g=new h.constructor(d.length*m);let v=0,M=0;for(let E=0,y=d.length;E<y;E++){f.isInterleavedBufferAttribute?v=d[E]*f.data.stride+f.offset:v=d[E]*m;for(let S=0;S<m;S++)g[M++]=h[v++]}return new Nn(g,m,_)}if(this.index===null)return tt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,i=this.index.array,s=this.attributes;for(const f in s){const d=s[f],h=e(d,i);t.setAttribute(f,h)}const a=this.morphAttributes;for(const f in a){const d=[],h=a[f];for(let m=0,_=h.length;m<_;m++){const g=h[m],v=e(g,i);d.push(v)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let _=0,g=h.length;_<g;_++){const v=h[_];m.push(v.toJSON(e.data))}m.length>0&&(s[d]=m,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const m=s[h];this.setAttribute(h,m.clone(t))}const a=e.morphAttributes;for(const h in a){const m=[],_=a[h];for(let g=0,v=_.length;g<v;g++)m.push(_[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ky{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kd,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new Q;class _h{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){bc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _h(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let By=0;class Gi extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=uo,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=ld,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ug,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){tt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){tt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ad&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ug&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const f in a){const d=a[f];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const cr=new Q,Vf=new Q,$l=new Q,Wr=new Q,Hf=new Q,Zl=new Q,Gf=new Q;class Ic{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Vf.copy(e).add(t).multiplyScalar(.5),$l.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(Vf);const a=e.distanceTo(t)*.5,c=-this.direction.dot($l),f=Wr.dot(this.direction),d=-Wr.dot($l),h=Wr.lengthSq(),m=Math.abs(1-c*c);let _,g,v,M;if(m>0)if(_=c*d-f,g=c*f-d,M=a*m,_>=0)if(g>=-M)if(g<=M){const E=1/m;_*=E,g*=E,v=_*(_+c*g+2*f)+g*(c*_+g+2*d)+h}else g=a,_=Math.max(0,-(c*g+f)),v=-_*_+g*(g+2*d)+h;else g=-a,_=Math.max(0,-(c*g+f)),v=-_*_+g*(g+2*d)+h;else g<=-M?(_=Math.max(0,-(-c*a+f)),g=_>0?-a:Math.min(Math.max(-a,-d),a),v=-_*_+g*(g+2*d)+h):g<=M?(_=0,g=Math.min(Math.max(-a,-d),a),v=g*(g+2*d)+h):(_=Math.max(0,-(c*a+f)),g=_>0?a:Math.min(Math.max(-a,-d),a),v=-_*_+g*(g+2*d)+h);else g=c>0?-a:a,_=Math.max(0,-(c*g+f)),v=-_*_+g*(g+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(Vf).addScaledVector($l,g),v}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const i=cr.dot(this.direction),s=cr.dot(cr)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),f=i-c,d=i+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,g=this.origin;return h>=0?(i=(e.min.x-g.x)*h,s=(e.max.x-g.x)*h):(i=(e.max.x-g.x)*h,s=(e.min.x-g.x)*h),m>=0?(a=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(a=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),_>=0?(f=(e.min.z-g.z)*_,d=(e.max.z-g.z)*_):(f=(e.max.z-g.z)*_,d=(e.min.z-g.z)*_),i>d||f>s)||((f>i||i!==i)&&(i=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,i,s,a){Hf.subVectors(t,e),Zl.subVectors(i,e),Gf.crossVectors(Hf,Zl);let c=this.direction.dot(Gf),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Wr.subVectors(this.origin,e);const d=f*this.direction.dot(Zl.crossVectors(Wr,Zl));if(d<0)return null;const h=f*this.direction.dot(Hf.cross(Wr));if(h<0||d+h>c)return null;const m=-f*Wr.dot(Gf);return m<0?null:this.at(m/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yr extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wg=new gt,hs=new Ic,Jl=new qi,Ag=new Q,Ql=new Q,ec=new Q,tc=new Q,Wf=new Q,nc=new Q,bg=new Q,ic=new Q;class wn extends Kt{constructor(e=new Qn,t=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(a&&f){nc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const m=f[d],_=a[d];m!==0&&(Wf.fromBufferAttribute(_,e),c?nc.addScaledVector(Wf,m):nc.addScaledVector(Wf.sub(t),m))}t.add(nc)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(a),hs.copy(e.ray).recast(e.near),!(Jl.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Jl,Ag)===null||hs.origin.distanceToSquared(Ag)>(e.far-e.near)**2))&&(wg.copy(a).invert(),hs.copy(e.ray).applyMatrix4(wg),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,f=a.index,d=a.attributes.position,h=a.attributes.uv,m=a.attributes.uv1,_=a.attributes.normal,g=a.groups,v=a.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const y=g[M],S=c[y.materialIndex],R=Math.max(y.start,v.start),L=Math.min(f.count,Math.min(y.start+y.count,v.start+v.count));for(let C=R,O=L;C<O;C+=3){const D=f.getX(C),k=f.getX(C+1),w=f.getX(C+2);s=rc(this,S,e,i,h,m,_,D,k,w),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,v.start),E=Math.min(f.count,v.start+v.count);for(let y=M,S=E;y<S;y+=3){const R=f.getX(y),L=f.getX(y+1),C=f.getX(y+2);s=rc(this,c,e,i,h,m,_,R,L,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const y=g[M],S=c[y.materialIndex],R=Math.max(y.start,v.start),L=Math.min(d.count,Math.min(y.start+y.count,v.start+v.count));for(let C=R,O=L;C<O;C+=3){const D=C,k=C+1,w=C+2;s=rc(this,S,e,i,h,m,_,D,k,w),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,v.start),E=Math.min(d.count,v.start+v.count);for(let y=M,S=E;y<S;y+=3){const R=y,L=y+1,C=y+2;s=rc(this,c,e,i,h,m,_,R,L,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function zy(o,e,t,i,s,a,c,f){let d;if(e.side===Gn?d=i.intersectTriangle(c,a,s,!0,f):d=i.intersectTriangle(s,a,c,e.side===pr,f),d===null)return null;ic.copy(f),ic.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(ic);return h<t.near||h>t.far?null:{distance:h,point:ic.clone(),object:o}}function rc(o,e,t,i,s,a,c,f,d,h){o.getVertexPosition(f,Ql),o.getVertexPosition(d,ec),o.getVertexPosition(h,tc);const m=zy(o,e,t,i,Ql,ec,tc,bg);if(m){const _=new Q;wi.getBarycoord(bg,Ql,ec,tc,_),s&&(m.uv=wi.getInterpolatedAttribute(s,f,d,h,_,new Tt)),a&&(m.uv1=wi.getInterpolatedAttribute(a,f,d,h,_,new Tt)),c&&(m.normal=wi.getInterpolatedAttribute(c,f,d,h,_,new Q),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:h,normal:new Q,materialIndex:0};wi.getNormal(Ql,ec,tc,g.normal),m.face=g,m.barycoord=_}return m}const Rg=new Q,Cg=new Wt,Pg=new Wt,Vy=new Q,Lg=new gt,sc=new Q,Xf=new qi,Ig=new gt,jf=new Ic;class Hy extends wn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=sg,this.bindMatrix=new gt,this.bindMatrixInverse=new gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sc),this.boundingBox.expandByPoint(sc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sc),this.boundingSphere.expandByPoint(sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xf.copy(this.boundingSphere),Xf.applyMatrix4(s),e.ray.intersectsSphere(Xf)!==!1&&(Ig.copy(s).invert(),jf.copy(e.ray).applyMatrix4(Ig),!(this.boundingBox!==null&&jf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Wt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===sg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Hx?this.bindMatrixInverse.copy(this.bindMatrix).invert():tt("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Cg.fromBufferAttribute(s.attributes.skinIndex,e),Pg.fromBufferAttribute(s.attributes.skinWeight,e),Rg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Pg.getComponent(a);if(c!==0){const f=Cg.getComponent(a);Lg.multiplyMatrices(i.bones[f].matrixWorld,i.boneInverses[f]),t.addScaledVector(Vy.copy(Rg).applyMatrix4(Lg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class n_ extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class vh extends cn{constructor(e=null,t=1,i=1,s,a,c,f,d,h=ln,m=ln,_,g){super(null,c,f,d,h,m,s,a,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ng=new gt,Gy=new gt;class xh{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){tt("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new gt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new gt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const f=e[a]?e[a].matrixWorld:Gy;Ng.multiplyMatrices(f,t[a]),Ng.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new xh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new vh(t,e,e,di,fi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(tt("Skeleton: No bone found with UUID:",a),c=new n_),this.bones.push(c),this.boneInverses.push(new gt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const f=i[s];e.boneInverses.push(f.toArray())}return e}}class $d extends Nn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new gt,Dg=new gt,oc=[],Ug=new vr,Wy=new gt,pa=new wn,ma=new qi;class Xy extends wn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $d(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Wy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),Ug.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Ug)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),ma.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let f=0;f<i.length;f++)i[f]=s[c+f]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),e.ray.intersectsSphere(ma)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,so),Dg.multiplyMatrices(i,so),pa.matrixWorld=Dg,pa.raycast(e,oc);for(let c=0,f=oc.length;c<f;c++){const d=oc[c];d.instanceId=a,d.object=this,t.push(d)}oc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $d(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new vh(new Float32Array(s*this.count),s,this.count,ch,fi));const a=this.morphTexture.source.data.data;let c=0;for(let h=0;h<i.length;h++)c+=i[h];const f=this.geometry.morphTargetsRelative?1:1-c,d=s*e;a[d]=f,a.set(i,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qf=new Q,jy=new Q,qy=new pt;class vs{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=qf.subVectors(i,t).cross(jy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||qy.getNormalMatrix(e),s=this.coplanarPoint(qf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new qi,Yy=new Tt(.5,.5),ac=new Q;class yh{constructor(e=new vs,t=new vs,i=new vs,s=new vs,a=new vs,c=new vs){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(s),f[4].copy(a),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bi,i=!1){const s=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],h=a[3],m=a[4],_=a[5],g=a[6],v=a[7],M=a[8],E=a[9],y=a[10],S=a[11],R=a[12],L=a[13],C=a[14],O=a[15];if(s[0].setComponents(h-c,v-m,S-M,O-R).normalize(),s[1].setComponents(h+c,v+m,S+M,O+R).normalize(),s[2].setComponents(h+f,v+_,S+E,O+L).normalize(),s[3].setComponents(h-f,v-_,S-E,O-L).normalize(),i)s[4].setComponents(d,g,y,C).normalize(),s[5].setComponents(h-d,v-g,S-y,O-C).normalize();else if(s[4].setComponents(h-d,v-g,S-y,O-C).normalize(),t===Bi)s[5].setComponents(h+d,v+g,S+y,O+C).normalize();else if(t===Pa)s[5].setComponents(d,g,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=Yy.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ac.x=s.normal.x>0?e.max.x:e.min.x,ac.y=s.normal.y>0?e.max.y:e.min.y,ac.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class i_ extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new Q,Pc=new Q,Fg=new gt,ga=new Ic,lc=new qi,Yf=new Q,Og=new Q;class Sh extends Kt{constructor(e=new Qn,t=new i_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Cc.fromBufferAttribute(t,s-1),Pc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Cc.distanceTo(Pc);e.setAttribute("lineDistance",new Wn(i,1))}else tt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),lc.radius+=a,e.ray.intersectsSphere(lc)===!1)return;Fg.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Fg);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=i.index,g=i.attributes.position;if(m!==null){const v=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=v,y=M-1;E<y;E+=h){const S=m.getX(E),R=m.getX(E+1),L=cc(this,e,ga,d,S,R,E);L&&t.push(L)}if(this.isLineLoop){const E=m.getX(M-1),y=m.getX(v),S=cc(this,e,ga,d,E,y,M-1);S&&t.push(S)}}else{const v=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let E=v,y=M-1;E<y;E+=h){const S=cc(this,e,ga,d,E,E+1,E);S&&t.push(S)}if(this.isLineLoop){const E=cc(this,e,ga,d,M-1,v,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function cc(o,e,t,i,s,a,c){const f=o.geometry.attributes.position;if(Cc.fromBufferAttribute(f,s),Pc.fromBufferAttribute(f,a),t.distanceSqToSegment(Cc,Pc,Yf,Og)>i)return;Yf.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Yf);if(!(h<e.near||h>e.far))return{distance:h,point:Og.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const kg=new Q,Bg=new Q;class Ky extends Sh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)kg.fromBufferAttribute(t,s),Bg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+kg.distanceTo(Bg);e.setAttribute("lineDistance",new Wn(i,1))}else tt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $y extends Sh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class r_ extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zg=new gt,Zd=new Ic,uc=new qi,fc=new Q;class Zy extends Kt{constructor(e=new Qn,t=new r_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(s),uc.radius+=a,e.ray.intersectsSphere(uc)===!1)return;zg.copy(s).invert(),Zd.copy(e.ray).applyMatrix4(zg);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=i.index,_=i.attributes.position;if(h!==null){const g=Math.max(0,c.start),v=Math.min(h.count,c.start+c.count);for(let M=g,E=v;M<E;M++){const y=h.getX(M);fc.fromBufferAttribute(_,y),Vg(fc,y,d,s,e,t,this)}}else{const g=Math.max(0,c.start),v=Math.min(_.count,c.start+c.count);for(let M=g,E=v;M<E;M++)fc.fromBufferAttribute(_,M),Vg(fc,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function Vg(o,e,t,i,s,a,c){const f=Zd.distanceSqToPoint(o);if(f<t){const d=new Q;Zd.closestPointToPoint(o,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class s_ extends cn{constructor(e=[],t=Ms,i,s,a,c,f,d,h,m){super(e,t,i,s,a,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jy extends cn{constructor(e,t,i,s,a,c,f,d,h){super(e,t,i,s,a,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ia extends cn{constructor(e,t,i=Wi,s,a,c,f=ln,d=ln,h,m=gr,_=1){if(m!==gr&&m!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,s,a,c,f,d,m,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Qy extends Ia{constructor(e,t=Wi,i=Ms,s,a,c=ln,f=ln,d,h=gr){const m={width:e,height:e,depth:1},_=[m,m,m,m,m,m];super(e,e,t,i,s,a,c,f,d,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class o_ extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class To extends Qn{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const f=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],m=[],_=[];let g=0,v=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new Wn(h,3)),this.setAttribute("normal",new Wn(m,3)),this.setAttribute("uv",new Wn(_,2));function M(E,y,S,R,L,C,O,D,k,w,P){const ae=C/k,F=O/w,W=C/2,X=O/2,ne=D/2,q=k+1,$=w+1;let B=0,Y=0;const Z=new Q;for(let se=0;se<$;se++){const N=se*F-X;for(let J=0;J<q;J++){const Re=J*ae-W;Z[E]=Re*R,Z[y]=N*L,Z[S]=ne,h.push(Z.x,Z.y,Z.z),Z[E]=0,Z[y]=0,Z[S]=D>0?1:-1,m.push(Z.x,Z.y,Z.z),_.push(J/k),_.push(1-se/w),B+=1}}for(let se=0;se<w;se++)for(let N=0;N<k;N++){const J=g+N+q*se,Re=g+N+q*(se+1),_e=g+(N+1)+q*(se+1),De=g+(N+1)+q*se;d.push(J,Re,De),d.push(Re,_e,De),Y+=6}f.addGroup(v,Y,P),v+=Y,g+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Mh extends Qn{constructor(e=1,t=1,i=1,s=32,a=1,c=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:f,thetaLength:d};const h=this;s=Math.floor(s),a=Math.floor(a);const m=[],_=[],g=[],v=[];let M=0;const E=[],y=i/2;let S=0;R(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(m),this.setAttribute("position",new Wn(_,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(v,2));function R(){const C=new Q,O=new Q;let D=0;const k=(t-e)/i;for(let w=0;w<=a;w++){const P=[],ae=w/a,F=ae*(t-e)+e;for(let W=0;W<=s;W++){const X=W/s,ne=X*d+f,q=Math.sin(ne),$=Math.cos(ne);O.x=F*q,O.y=-ae*i+y,O.z=F*$,_.push(O.x,O.y,O.z),C.set(q,k,$).normalize(),g.push(C.x,C.y,C.z),v.push(X,1-ae),P.push(M++)}E.push(P)}for(let w=0;w<s;w++)for(let P=0;P<a;P++){const ae=E[P][w],F=E[P+1][w],W=E[P+1][w+1],X=E[P][w+1];(e>0||P!==0)&&(m.push(ae,F,X),D+=3),(t>0||P!==a-1)&&(m.push(F,W,X),D+=3)}h.addGroup(S,D,0),S+=D}function L(C){const O=M,D=new Tt,k=new Q;let w=0;const P=C===!0?e:t,ae=C===!0?1:-1;for(let W=1;W<=s;W++)_.push(0,y*ae,0),g.push(0,ae,0),v.push(.5,.5),M++;const F=M;for(let W=0;W<=s;W++){const ne=W/s*d+f,q=Math.cos(ne),$=Math.sin(ne);k.x=P*$,k.y=y*ae,k.z=P*q,_.push(k.x,k.y,k.z),g.push(0,ae,0),D.x=q*.5+.5,D.y=$*.5*ae+.5,v.push(D.x,D.y),M++}for(let W=0;W<s;W++){const X=O+W,ne=F+W;C===!0?m.push(ne,ne+1,X):m.push(ne+1,ne,X),w+=3}h.addGroup(S,w,C===!0?1:2),S+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Da extends Qn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,f=Math.floor(i),d=Math.floor(s),h=f+1,m=d+1,_=e/f,g=t/d,v=[],M=[],E=[],y=[];for(let S=0;S<m;S++){const R=S*g-c;for(let L=0;L<h;L++){const C=L*_-a;M.push(C,-R,0),E.push(0,0,1),y.push(L/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let R=0;R<f;R++){const L=R+h*S,C=R+h*(S+1),O=R+1+h*(S+1),D=R+1+h*S;v.push(L,C,D),v.push(C,O,D)}this.setIndex(v),this.setAttribute("position",new Wn(M,3)),this.setAttribute("normal",new Wn(E,3)),this.setAttribute("uv",new Wn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}function xo(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(tt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ln(o){const e={};for(let t=0;t<o.length;t++){const i=xo(o[t]);for(const s in i)e[s]=i[s]}return e}function eS(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function a_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const tS={clone:xo,merge:Ln};var nS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nS,this.fragmentShader=iS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=eS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class rS extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Na extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yi extends Na{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class sS extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oS extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function dc(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function aS(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Hg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const f=t[a]*e;for(let d=0;d!==e;++d)s[c++]=o[f+d]}return s}function l_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push(...c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class wo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let f=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===f)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const f=t[1];e<f&&(i=2,a=f);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const f=i+c>>>1;e<t[f]?c=f:i=f+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class lS extends wo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ag,endingEnd:ag}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,f=s[a],d=s[c];if(f===void 0)switch(this.getSettings_().endingStart){case lg:a=e,f=2*t-i;break;case cg:a=s.length-2,f=t+s[a]-s[a+1];break;default:a=e,f=i}if(d===void 0)switch(this.getSettings_().endingEnd){case lg:c=e,d=2*i-t;break;case cg:c=1,d=i+s[1]-s[0];break;default:c=e-1,d=t}const h=(i-t)*.5,m=this.valueSize;this._weightPrev=h/(t-f),this._weightNext=h/(d-i),this._offsetPrev=a*m,this._offsetNext=c*m}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,m=this._offsetPrev,_=this._offsetNext,g=this._weightPrev,v=this._weightNext,M=(i-t)/(s-t),E=M*M,y=E*M,S=-g*y+2*g*E-g*M,R=(1+g)*y+(-1.5-2*g)*E+(-.5+g)*M+1,L=(-1-v)*y+(1.5+v)*E+.5*M,C=v*y-v*E;for(let O=0;O!==f;++O)a[O]=S*c[m+O]+R*c[h+O]+L*c[d+O]+C*c[_+O];return a}}class cS extends wo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,m=(i-t)/(s-t),_=1-m;for(let g=0;g!==f;++g)a[g]=c[h+g]*_+c[d+g]*m;return a}}class uS extends wo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class fS extends wo{interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,m=this.settings||this.DefaultSettings_,_=m.inTangents,g=m.outTangents;if(!_||!g){const E=(i-t)/(s-t),y=1-E;for(let S=0;S!==f;++S)a[S]=c[h+S]*y+c[d+S]*E;return a}const v=f*2,M=e-1;for(let E=0;E!==f;++E){const y=c[h+E],S=c[d+E],R=M*v+E*2,L=g[R],C=g[R+1],O=e*v+E*2,D=_[O],k=_[O+1];let w=(i-t)/(s-t),P,ae,F,W,X;for(let ne=0;ne<8;ne++){P=w*w,ae=P*w,F=1-w,W=F*F,X=W*F;const $=X*t+3*W*w*L+3*F*P*D+ae*s-i;if(Math.abs($)<1e-10)break;const B=3*W*(L-t)+6*F*w*(D-L)+3*P*(s-D);if(Math.abs(B)<1e-10)break;w=w-$/B,w=Math.max(0,Math.min(1,w))}a[E]=X*y+3*W*w*C+3*F*P*k+ae*S}return a}}class bi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dc(t,this.TimeBufferType),this.values=dc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:dc(e.times,Array),values:dc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new cS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new lS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new fS(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ra:t=this.InterpolantFactoryMethodDiscrete;break;case Ca:t=this.InterpolantFactoryMethodLinear;break;case Ef:t=this.InterpolantFactoryMethodSmooth;break;case og:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return tt("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return Ef;case this.InterpolantFactoryMethodBezier:return og}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const f=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*f,c*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let f=0;f!==a;f++){const d=i[f];if(typeof d=="number"&&isNaN(d)){ot("KeyframeTrack: Time is not a valid number.",this,f,d),e=!1;break}if(c!==null&&c>d){ot("KeyframeTrack: Out of order keys.",this,f,d,c),e=!1;break}c=d}if(s!==void 0&&ey(s))for(let f=0,d=s.length;f!==d;++f){const h=s[f];if(isNaN(h)){ot("KeyframeTrack: Value is not a valid number.",this,f,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ef,a=e.length-1;let c=1;for(let f=1;f<a;++f){let d=!1;const h=e[f],m=e[f+1];if(h!==m&&(f!==1||h!==e[0]))if(s)d=!0;else{const _=f*i,g=_-i,v=_+i;for(let M=0;M!==i;++M){const E=t[_+M];if(E!==t[g+M]||E!==t[v+M]){d=!0;break}}}if(d){if(f!==c){e[c]=e[f];const _=f*i,g=c*i;for(let v=0;v!==i;++v)t[g+v]=t[_+v]}++c}}if(a>0){e[c]=e[a];for(let f=a*i,d=c*i,h=0;h!==i;++h)t[d+h]=t[f+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Ca;class Ao extends bi{constructor(e,t,i){super(e,t,i)}}Ao.prototype.ValueTypeName="bool";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=Ra;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class c_ extends bi{constructor(e,t,i,s){super(e,t,i,s)}}c_.prototype.ValueTypeName="color";class yo extends bi{constructor(e,t,i,s){super(e,t,i,s)}}yo.prototype.ValueTypeName="number";class dS extends wo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,d=(i-t)/(s-t);let h=e*f;for(let m=h+f;h!==m;h+=4)_r.slerpFlat(a,0,c,h-f,c,h,d);return a}}class So extends bi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new dS(this.times,this.values,this.getValueSize(),e)}}So.prototype.ValueTypeName="quaternion";So.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends bi{constructor(e,t,i){super(e,t,i)}}bo.prototype.ValueTypeName="string";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=Ra;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends bi{constructor(e,t,i,s){super(e,t,i,s)}}Mo.prototype.ValueTypeName="vector";class hS{constructor(e="",t=-1,i=[],s=Gx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,f=i.length;c!==f;++c)t.push(mS(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,c=i.length;a!==c;++a)t.push(bi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let f=0;f<a;f++){let d=[],h=[];d.push((f+a-1)%a,f,(f+1)%a),h.push(0,1,0);const m=aS(d);d=Hg(d,1,m),h=Hg(h,1,m),!s&&d[0]===0&&(d.push(a),h.push(h[0])),c.push(new yo(".morphTargetInfluences["+t[f].name+"]",d,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let f=0,d=e.length;f<d;f++){const h=e[f],m=h.name.match(a);if(m&&m.length>1){const _=m[1];let g=s[_];g||(s[_]=g=[]),g.push(h)}}const c=[];for(const f in s)c.push(this.CreateFromMorphTargetSequence(f,s[f],t,i));return c}static parseAnimation(e,t){if(tt("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ot("AnimationClip: No animation in JSONLoader data."),null;const i=function(_,g,v,M,E){if(v.length!==0){const y=[],S=[];l_(v,y,S,M),y.length!==0&&E.push(new _(g,y,S))}},s=[],a=e.name||"default",c=e.fps||30,f=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let _=0;_<h.length;_++){const g=h[_].keys;if(!(!g||g.length===0))if(g[0].morphTargets){const v={};let M;for(M=0;M<g.length;M++)if(g[M].morphTargets)for(let E=0;E<g[M].morphTargets.length;E++)v[g[M].morphTargets[E]]=-1;for(const E in v){const y=[],S=[];for(let R=0;R!==g[M].morphTargets.length;++R){const L=g[M];y.push(L.time),S.push(L.morphTarget===E?1:0)}s.push(new yo(".morphTargetInfluence["+E+"]",y,S))}d=v.length*c}else{const v=".bones["+t[_].name+"]";i(Mo,v+".position",g,"pos",s),i(So,v+".quaternion",g,"rot",s),i(Mo,v+".scale",g,"scl",s)}}return s.length===0?null:new this(a,d,s,f)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function pS(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yo;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return c_;case"quaternion":return So;case"bool":case"boolean":return Ao;case"string":return bo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function mS(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=pS(o.type);if(o.times===void 0){const t=[],i=[];l_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const fr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(Gg(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!Gg(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Gg(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class gS{constructor(e,t,i){const s=this;let a=!1,c=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(m){f++,a===!1&&s.onStart!==void 0&&s.onStart(m,c,f),a=!0},this.itemEnd=function(m){c++,s.onProgress!==void 0&&s.onProgress(m,c,f),c===f&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(m){s.onError!==void 0&&s.onError(m)},this.resolveURL=function(m){return d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,_){return h.push(m,_),this},this.removeHandler=function(m){const _=h.indexOf(m);return _!==-1&&h.splice(_,2),this},this.getHandler=function(m){for(let _=0,g=h.length;_<g;_+=2){const v=h[_],M=h[_+1];if(v.global&&(v.lastIndex=0),v.test(m))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const _S=new gS;class Ro{constructor(e){this.manager=e!==void 0?e:_S,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const ur={};class vS extends Error{constructor(e,t){super(e),this.response=t}}class u_ extends Ro{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=fr.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ur[e]!==void 0){ur[e].push({onLoad:t,onProgress:i,onError:s});return}ur[e]=[],ur[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,d=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&tt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=ur[e],_=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),v=g?parseInt(g):0,M=v!==0;let E=0;const y=new ReadableStream({start(S){R();function R(){_.read().then(({done:L,value:C})=>{if(L)S.close();else{E+=C.byteLength;const O=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:v});for(let D=0,k=m.length;D<k;D++){const w=m[D];w.onProgress&&w.onProgress(O)}S.enqueue(C),R()}},L=>{S.error(L)})}}});return new Response(y)}else throw new vS(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,f));case"json":return h.json();default:if(f==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),g=_&&_[1]?_[1].toLowerCase():void 0,v=new TextDecoder(g);return h.arrayBuffer().then(M=>v.decode(M))}}}).then(h=>{fr.add(`file:${e}`,h);const m=ur[e];delete ur[e];for(let _=0,g=m.length;_<g;_++){const v=m[_];v.onLoad&&v.onLoad(h)}}).catch(h=>{const m=ur[e];if(m===void 0)throw this.manager.itemError(e),h;delete ur[e];for(let _=0,g=m.length;_<g;_++){const v=m[_];v.onError&&v.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const oo=new WeakMap;class xS extends Ro{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=fr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let _=oo.get(c);_===void 0&&(_=[],oo.set(c,_)),_.push({onLoad:t,onError:s})}return c}const f=La("img");function d(){m(),t&&t(this);const _=oo.get(this)||[];for(let g=0;g<_.length;g++){const v=_[g];v.onLoad&&v.onLoad(this)}oo.delete(this),a.manager.itemEnd(e)}function h(_){m(),s&&s(_),fr.remove(`image:${e}`);const g=oo.get(this)||[];for(let v=0;v<g.length;v++){const M=g[v];M.onError&&M.onError(_)}oo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function m(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),fr.add(`image:${e}`,f),a.manager.itemStart(e),f.src=e,f}}class yS extends Ro{constructor(e){super(e)}load(e,t,i,s){const a=new cn,c=new xS(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){a.image=f,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Nc extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Kf=new gt,Wg=new Q,Xg=new Q;class Eh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yh,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Wg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wg),Xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xg),t.updateMatrixWorld(),Kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hc=new Q,pc=new _r,Ni=new Q;class f_ extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hc,pc,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hc,pc,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(hc,pc,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hc,pc,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new Q,jg=new Tt,qg=new Tt;class In extends f_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,jg,qg),t.subVectors(qg,jg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*i/h,s*=c.width/d,i*=c.height/h}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class SS extends Eh{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=vo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class MS extends Nc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new SS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class ES extends Eh{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0}}class TS extends Nc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ES}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Dc extends f_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,f=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wS extends Eh{constructor(){super(new Dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class d_ extends Nc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new wS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class AS extends Nc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const $f=new WeakMap;class bS extends Ro{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&tt("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&tt("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=fr.get(`image-bitmap:${e}`);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{if($f.has(c)===!0)s&&s($f.get(c)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(h),a.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const d=fetch(e,f).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return fr.add(`image-bitmap:${e}`,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),$f.set(d,h),fr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});fr.add(`image-bitmap:${e}`,d),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ao=-90,lo=1;class RS extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(ao,lo,e,t);s.layers=this.layers,this.add(s);const a=new In(ao,lo,e,t);a.layers=this.layers,this.add(a);const c=new In(ao,lo,e,t);c.layers=this.layers,this.add(c);const f=new In(ao,lo,e,t);f.layers=this.layers,this.add(f);const d=new In(ao,lo,e,t);d.layers=this.layers,this.add(d);const h=new In(ao,lo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,f,d]=t;for(const h of t)this.remove(h);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,d,h,m]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(_,g,v),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class CS extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Th="\\[\\]\\.:\\/",PS=new RegExp("["+Th+"]","g"),wh="[^"+Th+"]",LS="[^"+Th.replace("\\.","")+"]",IS=/((?:WC+[\/:])*)/.source.replace("WC",wh),NS=/(WCOD+)?/.source.replace("WCOD",LS),DS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wh),US=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wh),FS=new RegExp("^"+IS+NS+DS+US+"$"),OS=["material","materials","bones","map"];class kS{constructor(e,t,i){const s=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ot{constructor(e,t,i){this.path=t,this.parsedPath=i||Ot.parseTrackName(t),this.node=Ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ot.Composite(e,t,i):new Ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(PS,"")}static parseTrackName(e){const t=FS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);OS.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const f=a[c];if(f.name===t||f.uuid===t)return f;const d=i(f.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){tt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let m=0;m<e.length;m++)if(e[m].name===h){h=m;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[s];if(c===void 0){const h=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ot.Composite=kS;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function Yg(o,e,t,i){const s=BS(i);switch(t){case j0:return o*e;case ch:return o*e/s.components*s.byteLength;case uh:return o*e/s.components*s.byteLength;case _o:return o*e*2/s.components*s.byteLength;case fh:return o*e*2/s.components*s.byteLength;case q0:return o*e*3/s.components*s.byteLength;case di:return o*e*4/s.components*s.byteLength;case dh:return o*e*4/s.components*s.byteLength;case xc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _d:case xd:return Math.max(o,16)*Math.max(e,8)/4;case gd:case vd:return Math.max(o,8)*Math.max(e,8)/2;case yd:case Sd:case Ed:case Td:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Md:case wd:case Ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Id:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Vd:case Hd:case Gd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Wd:case Xd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case jd:case qd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BS(o){switch(o){case Jn:case H0:return{byteLength:1,components:1};case Aa:case G0:case mr:return{byteLength:2,components:1};case ah:case lh:return{byteLength:2,components:4};case Wi:case oh:case fi:return{byteLength:4,components:1};case W0:case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sh}}));typeof window<"u"&&(window.__THREE__?tt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function h_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function zS(o){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,_=h.byteLength,g=o.createBuffer();o.bindBuffer(d,g),o.bufferData(d,h,m),f.onUploadCallback();let v;if(h instanceof Float32Array)v=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)v=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?v=o.HALF_FLOAT:v=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=o.SHORT;else if(h instanceof Uint32Array)v=o.UNSIGNED_INT;else if(h instanceof Int32Array)v=o.INT;else if(h instanceof Int8Array)v=o.BYTE;else if(h instanceof Uint8Array)v=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,d,h){const m=d.array,_=d.updateRanges;if(o.bindBuffer(h,f),_.length===0)o.bufferSubData(h,0,m);else{_.sort((v,M)=>v.start-M.start);let g=0;for(let v=1;v<_.length;v++){const M=_[g],E=_[v];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,_[g]=E)}_.length=g+1;for(let v=0,M=_.length;v<M;v++){const E=_[v];o.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(o.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:s,remove:a,update:c}}var VS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,KS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,uM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,CM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,NM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,OM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$M=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,QM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_E=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,xE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,RE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,CE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,YE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ZE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mt={alphahash_fragment:VS,alphahash_pars_fragment:HS,alphamap_fragment:GS,alphamap_pars_fragment:WS,alphatest_fragment:XS,alphatest_pars_fragment:jS,aomap_fragment:qS,aomap_pars_fragment:YS,batching_pars_vertex:KS,batching_vertex:$S,begin_vertex:ZS,beginnormal_vertex:JS,bsdfs:QS,iridescence_fragment:eM,bumpmap_pars_fragment:tM,clipping_planes_fragment:nM,clipping_planes_pars_fragment:iM,clipping_planes_pars_vertex:rM,clipping_planes_vertex:sM,color_fragment:oM,color_pars_fragment:aM,color_pars_vertex:lM,color_vertex:cM,common:uM,cube_uv_reflection_fragment:fM,defaultnormal_vertex:dM,displacementmap_pars_vertex:hM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:_M,colorspace_pars_fragment:vM,envmap_fragment:xM,envmap_common_pars_fragment:yM,envmap_pars_fragment:SM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:NM,envmap_vertex:EM,fog_vertex:TM,fog_pars_vertex:wM,fog_fragment:AM,fog_pars_fragment:bM,gradientmap_pars_fragment:RM,lightmap_pars_fragment:CM,lights_lambert_fragment:PM,lights_lambert_pars_fragment:LM,lights_pars_begin:IM,lights_toon_fragment:DM,lights_toon_pars_fragment:UM,lights_phong_fragment:FM,lights_phong_pars_fragment:OM,lights_physical_fragment:kM,lights_physical_pars_fragment:BM,lights_fragment_begin:zM,lights_fragment_maps:VM,lights_fragment_end:HM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:XM,logdepthbuf_vertex:jM,map_fragment:qM,map_pars_fragment:YM,map_particle_fragment:KM,map_particle_pars_fragment:$M,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:JM,morphinstance_vertex:QM,morphcolor_vertex:eE,morphnormal_vertex:tE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:oE,normal_pars_vertex:aE,normal_vertex:lE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:uE,clearcoat_normal_fragment_maps:fE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:hE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:_E,dithering_fragment:vE,dithering_pars_fragment:xE,roughnessmap_fragment:yE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:wE,skinbase_vertex:AE,skinning_pars_vertex:bE,skinning_vertex:RE,skinnormal_vertex:CE,specularmap_fragment:PE,specularmap_pars_fragment:LE,tonemapping_fragment:IE,tonemapping_pars_fragment:NE,transmission_fragment:DE,transmission_pars_fragment:UE,uv_pars_fragment:FE,uv_pars_vertex:OE,uv_vertex:kE,worldpos_vertex:BE,background_vert:zE,background_frag:VE,backgroundCube_vert:HE,backgroundCube_frag:GE,cube_vert:WE,cube_frag:XE,depth_vert:jE,depth_frag:qE,distance_vert:YE,distance_frag:KE,equirect_vert:$E,equirect_frag:ZE,linedashed_vert:JE,linedashed_frag:QE,meshbasic_vert:eT,meshbasic_frag:tT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:oT,meshnormal_frag:aT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:uT,meshphysical_frag:fT,meshtoon_vert:dT,meshtoon_frag:hT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:_T,sprite_vert:vT,sprite_frag:xT},Ne={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Fi={basic:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Ln([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Ln([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Ln([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new ut(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Ln([Ne.points,Ne.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Ln([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Ln([Ne.common,Ne.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Ln([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Ln([Ne.sprite,Ne.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Ln([Ne.common,Ne.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Ln([Ne.lights,Ne.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Fi.physical={uniforms:Ln([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const mc={r:0,b:0,g:0},ms=new Xi,yT=new gt;function ST(o,e,t,i,s,a){const c=new ut(0);let f=s===!0?0:1,d,h,m=null,_=0,g=null;function v(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const C=R.backgroundBlurriness>0;L=e.get(L,C)}return L}function M(R){let L=!1;const C=v(R);C===null?y(c,f):C&&C.isColor&&(y(C,1),L=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,a):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(o.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(R,L){const C=v(L);C&&(C.isCubeTexture||C.mapping===Lc)?(h===void 0&&(h=new wn(new To(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:xo(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ms.copy(L.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(ms)),h.material.toneMapped=Et.getTransfer(C.colorSpace)!==Ut,(m!==C||_!==C.version||g!==o.toneMapping)&&(h.material.needsUpdate=!0,m=C,_=C.version,g=o.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new wn(new Da(2,2),new ji({name:"BackgroundMaterial",uniforms:xo(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=Et.getTransfer(C.colorSpace)!==Ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(m!==C||_!==C.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,m=C,_=C.version,g=o.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,L){R.getRGB(mc,a_(o)),t.buffers.color.setClear(mc.r,mc.g,mc.b,L,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,L=1){c.set(R),f=L,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,y(c,f)},render:M,addToRenderList:E,dispose:S}}function MT(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=g(null);let a=s,c=!1;function f(F,W,X,ne,q){let $=!1;const B=_(F,ne,X,W);a!==B&&(a=B,h(a.object)),$=v(F,ne,X,q),$&&M(F,ne,X,q),q!==null&&e.update(q,o.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,C(F,W,X,ne),q!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return o.createVertexArray()}function h(F){return o.bindVertexArray(F)}function m(F){return o.deleteVertexArray(F)}function _(F,W,X,ne){const q=ne.wireframe===!0;let $=i[W.id];$===void 0&&($={},i[W.id]=$);const B=F.isInstancedMesh===!0?F.id:0;let Y=$[B];Y===void 0&&(Y={},$[B]=Y);let Z=Y[X.id];Z===void 0&&(Z={},Y[X.id]=Z);let se=Z[q];return se===void 0&&(se=g(d()),Z[q]=se),se}function g(F){const W=[],X=[],ne=[];for(let q=0;q<t;q++)W[q]=0,X[q]=0,ne[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:X,attributeDivisors:ne,object:F,attributes:{},index:null}}function v(F,W,X,ne){const q=a.attributes,$=W.attributes;let B=0;const Y=X.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const N=q[Z];let J=$[Z];if(J===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(J=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(J=F.instanceColor)),N===void 0||N.attribute!==J||J&&N.data!==J.data)return!0;B++}return a.attributesNum!==B||a.index!==ne}function M(F,W,X,ne){const q={},$=W.attributes;let B=0;const Y=X.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let N=$[Z];N===void 0&&(Z==="instanceMatrix"&&F.instanceMatrix&&(N=F.instanceMatrix),Z==="instanceColor"&&F.instanceColor&&(N=F.instanceColor));const J={};J.attribute=N,N&&N.data&&(J.data=N.data),q[Z]=J,B++}a.attributes=q,a.attributesNum=B,a.index=ne}function E(){const F=a.newAttributes;for(let W=0,X=F.length;W<X;W++)F[W]=0}function y(F){S(F,0)}function S(F,W){const X=a.newAttributes,ne=a.enabledAttributes,q=a.attributeDivisors;X[F]=1,ne[F]===0&&(o.enableVertexAttribArray(F),ne[F]=1),q[F]!==W&&(o.vertexAttribDivisor(F,W),q[F]=W)}function R(){const F=a.newAttributes,W=a.enabledAttributes;for(let X=0,ne=W.length;X<ne;X++)W[X]!==F[X]&&(o.disableVertexAttribArray(X),W[X]=0)}function L(F,W,X,ne,q,$,B){B===!0?o.vertexAttribIPointer(F,W,X,q,$):o.vertexAttribPointer(F,W,X,ne,q,$)}function C(F,W,X,ne){E();const q=ne.attributes,$=X.getAttributes(),B=W.defaultAttributeValues;for(const Y in $){const Z=$[Y];if(Z.location>=0){let se=q[Y];if(se===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),se!==void 0){const N=se.normalized,J=se.itemSize,Re=e.get(se);if(Re===void 0)continue;const _e=Re.buffer,De=Re.type,ee=Re.bytesPerElement,he=De===o.INT||De===o.UNSIGNED_INT||se.gpuType===oh;if(se.isInterleavedBufferAttribute){const ce=se.data,Ce=ce.stride,Le=se.offset;if(ce.isInstancedInterleavedBuffer){for(let Ye=0;Ye<Z.locationSize;Ye++)S(Z.location+Ye,ce.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ye=0;Ye<Z.locationSize;Ye++)y(Z.location+Ye);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let Ye=0;Ye<Z.locationSize;Ye++)L(Z.location+Ye,J/Z.locationSize,De,N,Ce*ee,(Le+J/Z.locationSize*Ye)*ee,he)}else{if(se.isInstancedBufferAttribute){for(let ce=0;ce<Z.locationSize;ce++)S(Z.location+ce,se.meshPerAttribute);F.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ce=0;ce<Z.locationSize;ce++)y(Z.location+ce);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let ce=0;ce<Z.locationSize;ce++)L(Z.location+ce,J/Z.locationSize,De,N,J*ee,J/Z.locationSize*ce*ee,he)}}else if(B!==void 0){const N=B[Y];if(N!==void 0)switch(N.length){case 2:o.vertexAttrib2fv(Z.location,N);break;case 3:o.vertexAttrib3fv(Z.location,N);break;case 4:o.vertexAttrib4fv(Z.location,N);break;default:o.vertexAttrib1fv(Z.location,N)}}}}R()}function O(){P();for(const F in i){const W=i[F];for(const X in W){const ne=W[X];for(const q in ne){const $=ne[q];for(const B in $)m($[B].object),delete $[B];delete ne[q]}}delete i[F]}}function D(F){if(i[F.id]===void 0)return;const W=i[F.id];for(const X in W){const ne=W[X];for(const q in ne){const $=ne[q];for(const B in $)m($[B].object),delete $[B];delete ne[q]}}delete i[F.id]}function k(F){for(const W in i){const X=i[W];for(const ne in X){const q=X[ne];if(q[F.id]===void 0)continue;const $=q[F.id];for(const B in $)m($[B].object),delete $[B];delete q[F.id]}}}function w(F){for(const W in i){const X=i[W],ne=F.isInstancedMesh===!0?F.id:0,q=X[ne];if(q!==void 0){for(const $ in q){const B=q[$];for(const Y in B)m(B[Y].object),delete B[Y];delete q[$]}delete X[ne],Object.keys(X).length===0&&delete i[W]}}}function P(){ae(),c=!0,a!==s&&(a=s,h(a.object))}function ae(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:P,resetDefaultState:ae,dispose:O,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:E,enableAttribute:y,disableUnusedAttributes:R}}function ET(o,e,t){let i;function s(h){i=h}function a(h,m){o.drawArrays(i,h,m),t.update(m,i,1)}function c(h,m,_){_!==0&&(o.drawArraysInstanced(i,h,m,_),t.update(m,i,_))}function f(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,m,0,_);let v=0;for(let M=0;M<_;M++)v+=m[M];t.update(v,i,1)}function d(h,m,_,g){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let M=0;M<h.length;M++)c(h[M],m[M],g[M]);else{v.multiDrawArraysInstancedWEBGL(i,h,0,m,0,g,0,_);let M=0;for(let E=0;E<_;E++)M+=m[E]*g[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function TT(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(k){return!(k!==di&&i.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const w=k===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Jn&&i.convert(k)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==fi&&!w)}function d(k){if(k==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(tt("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=o.getParameter(o.MAX_SAMPLES),D=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:v,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:C,maxSamples:O,samples:D}}function wT(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new vs,f=new pt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const v=_.length!==0||g||i!==0||s;return s=g,i=_.length,v},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,g){t=m(_,g,0)},this.setState=function(_,g,v){const M=_.clippingPlanes,E=_.clipIntersection,y=_.clipShadows,S=o.get(_);if(!s||M===null||M.length===0||a&&!y)a?m(null):h();else{const R=a?0:i,L=R*4;let C=S.clippingState||null;d.value=C,C=m(M,g,L,v);for(let O=0;O!==L;++O)C[O]=t[O];S.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,g,v,M){const E=_!==null?_.length:0;let y=null;if(E!==0){if(y=d.value,M!==!0||y===null){const S=v+E*4,R=g.matrixWorldInverse;f.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,C=v;L!==E;++L,C+=4)c.copy(_[L]).applyMatrix4(R,f),c.normal.toArray(y,C),y[C+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}const Kr=4,Kg=[.125,.215,.35,.446,.526,.582],ys=20,AT=256,_a=new Dc,$g=new ut;let Zf=null,Jf=0,Qf=0,ed=!1;const bT=new Q;class Zg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){const{size:c=256,position:f=bT}=a;Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,s,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=e0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zf,Jf,Qf),this._renderer.xr.enabled=ed,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:mr,format:di,colorSpace:Dn,depthBuffer:!1},s=Jg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jg(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RT(a)),this._blurMaterial=PT(a,e,t),this._ggxMaterial=CT(a,e,t)}return s}_compileMaterial(e){const t=new wn(new Qn,e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,i,s,a){const d=new In(90,1,t,i),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,v=_.toneMapping;_.getClearColor($g),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new To,new Yr({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,y=E.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy($g),S=!0);for(let L=0;L<6;L++){const C=L%3;C===0?(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+m[L],a.y,a.z)):C===1?(d.up.set(0,0,h[L]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+m[L],a.z)):(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+m[L]));const O=this._cubeSize;co(s,C*O,L>2?O:0,O,O),_.setRenderTarget(s),S&&_.render(E,d),_.render(e,d)}_.toneMapping=v,_.autoClear=g,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ms||e.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=e0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qg());const a=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const f=a.uniforms;f.envMap.value=e;const d=this._cubeSize;co(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,_a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[i];f.material=c;const d=c.uniforms,h=i/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-m*m),g=0+h*1.25,v=_*g,{_lodMax:M}=this,E=this._sizeLods[i],y=3*E*(i>M-Kr?i-M+Kr:0),S=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=v,d.mipInt.value=M-t,co(a,y,S,3*E,2*E),s.setRenderTarget(a),s.render(f,_a),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-i,co(e,y,S,3*E,2*E),s.setRenderTarget(e),s.render(f,_a)}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const m=3,_=this._lodMeshes[s];_.material=h;const g=h.uniforms,v=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*v):2*Math.PI/(2*ys-1),E=a/M,y=isFinite(a)?1+Math.floor(m*E):ys;y>ys&&tt(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const S=[];let R=0;for(let k=0;k<ys;++k){const w=k/E,P=Math.exp(-w*w/2);S.push(P),k===0?R+=P:k<y&&(R+=2*P)}for(let k=0;k<S.length;k++)S[k]=S[k]/R;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=M,g.mipInt.value=L-i;const C=this._sizeLods[s],O=3*C*(s>L-Kr?s-L+Kr:0),D=4*(this._cubeSize-C);co(t,O,D,3*C,2*C),d.setRenderTarget(t),d.render(_,_a)}}function RT(o){const e=[],t=[],i=[];let s=o;const a=o-Kr+1+Kg.length;for(let c=0;c<a;c++){const f=Math.pow(2,s);e.push(f);let d=1/f;c>o-Kr?d=Kg[c-o+Kr-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),m=-h,_=1+h,g=[m,m,_,m,_,_,m,m,_,_,m,_],v=6,M=6,E=3,y=2,S=1,R=new Float32Array(E*M*v),L=new Float32Array(y*M*v),C=new Float32Array(S*M*v);for(let D=0;D<v;D++){const k=D%3*2/3-1,w=D>2?0:-1,P=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];R.set(P,E*M*D),L.set(g,y*M*D);const ae=[D,D,D,D,D,D];C.set(ae,S*M*D)}const O=new Qn;O.setAttribute("position",new Nn(R,E)),O.setAttribute("uv",new Nn(L,y)),O.setAttribute("faceIndex",new Nn(C,S)),i.push(new wn(O,null)),s>Kr&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Jg(o,e,t){const i=new Hi(o,e,t);return i.texture.mapping=Lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function CT(o,e,t){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function PT(o,e,t){const i=new Float32Array(ys),s=new Q(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Qg(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function e0(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class p_ extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new s_(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new To(5,5,5),a=new ji({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:dr});a.uniforms.tEquirect.value=t;const c=new wn(s,a),f=t.minFilter;return t.minFilter===ki&&(t.minFilter=sn),new RS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}function LT(o){let e=new WeakMap,t=new WeakMap,i=null;function s(g,v=!1){return g==null?null:v?c(g):a(g)}function a(g){if(g&&g.isTexture){const v=g.mapping;if(v===Sf||v===Mf)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const E=new p_(M.height);return E.fromEquirectangularTexture(o,g),e.set(g,E),g.addEventListener("dispose",h),f(E.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const v=g.mapping,M=v===Sf||v===Mf,E=v===Ms||v===mo;if(M||E){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return i===null&&(i=new Zg(o)),y=M?i.fromEquirectangular(g,y):i.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const R=g.image;return M&&R&&R.height>0||E&&R&&d(R)?(i===null&&(i=new Zg(o)),y=M?i.fromEquirectangular(g):i.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",m),y.texture):null}}}return g}function f(g,v){return v===Sf?g.mapping=Ms:v===Mf&&(g.mapping=mo),g}function d(g){let v=0;const M=6;for(let E=0;E<M;E++)g[E]!==void 0&&v++;return v===M}function h(g){const v=g.target;v.removeEventListener("dispose",h);const M=e.get(v);M!==void 0&&(e.delete(v),M.dispose())}function m(g){const v=g.target;v.removeEventListener("dispose",m);const M=t.get(v);M!==void 0&&(t.delete(v),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:_}}function IT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=o.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Rc("WebGLRenderer: "+i+" extension not supported."),s}}}function NT(o,e,t,i){const s={},a=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete s[g.id];const v=a.get(g);v&&(e.remove(v),a.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(_,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,t.memory.geometries++),g}function d(_){const g=_.attributes;for(const v in g)e.update(g[v],o.ARRAY_BUFFER)}function h(_){const g=[],v=_.index,M=_.attributes.position;let E=0;if(M===void 0)return;if(v!==null){const R=v.array;E=v.version;for(let L=0,C=R.length;L<C;L+=3){const O=R[L+0],D=R[L+1],k=R[L+2];g.push(O,D,D,k,k,O)}}else{const R=M.array;E=M.version;for(let L=0,C=R.length/3-1;L<C;L+=3){const O=L+0,D=L+1,k=L+2;g.push(O,D,D,k,k,O)}}const y=new(M.count>=65535?t_:e_)(g,1);y.version=E;const S=a.get(_);S&&e.remove(S),a.set(_,y)}function m(_){const g=a.get(_);if(g){const v=_.index;v!==null&&g.version<v.version&&h(_)}else h(_);return a.get(_)}return{get:f,update:d,getWireframeAttribute:m}}function DT(o,e,t){let i;function s(g){i=g}let a,c;function f(g){a=g.type,c=g.bytesPerElement}function d(g,v){o.drawElements(i,v,a,g*c),t.update(v,i,1)}function h(g,v,M){M!==0&&(o.drawElementsInstanced(i,v,a,g*c,M),t.update(v,i,M))}function m(g,v,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,v,0,a,g,0,M);let y=0;for(let S=0;S<M;S++)y+=v[S];t.update(y,i,1)}function _(g,v,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<g.length;S++)h(g[S]/c,v[S],E[S]);else{y.multiDrawElementsInstancedWEBGL(i,v,0,a,g,0,E,0,M);let S=0;for(let R=0;R<M;R++)S+=v[R]*E[R];t.update(S,i,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function UT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,f){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=f*(a/3);break;case o.LINES:t.lines+=f*(a/2);break;case o.LINE_STRIP:t.lines+=f*(a-1);break;case o.LINE_LOOP:t.lines+=f*a;break;case o.POINTS:t.points+=f*a;break;default:ot("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function FT(o,e,t){const i=new WeakMap,s=new Wt;function a(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=m!==void 0?m.length:0;let g=i.get(f);if(g===void 0||g.count!==_){let ae=function(){w.dispose(),i.delete(f),f.removeEventListener("dispose",ae)};var v=ae;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let C=0;M===!0&&(C=1),E===!0&&(C=2),y===!0&&(C=3);let O=f.attributes.position.count*C,D=1;O>e.maxTextureSize&&(D=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const k=new Float32Array(O*D*4*_),w=new Z0(k,O,D,_);w.type=fi,w.needsUpdate=!0;const P=C*4;for(let F=0;F<_;F++){const W=S[F],X=R[F],ne=L[F],q=O*D*4*F;for(let $=0;$<W.count;$++){const B=$*P;M===!0&&(s.fromBufferAttribute(W,$),k[q+B+0]=s.x,k[q+B+1]=s.y,k[q+B+2]=s.z,k[q+B+3]=0),E===!0&&(s.fromBufferAttribute(X,$),k[q+B+4]=s.x,k[q+B+5]=s.y,k[q+B+6]=s.z,k[q+B+7]=0),y===!0&&(s.fromBufferAttribute(ne,$),k[q+B+8]=s.x,k[q+B+9]=s.y,k[q+B+10]=s.z,k[q+B+11]=ne.itemSize===4?s.w:1)}}g={count:_,texture:w,size:new Tt(O,D)},i.set(f,g),f.addEventListener("dispose",ae)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const E=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:a}}function OT(o,e,t,i,s){let a=new WeakMap;function c(h){const m=s.render.frame,_=h.geometry,g=e.get(h,_);if(a.get(g)!==m&&(e.update(g),a.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==m&&(t.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,o.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const v=h.skeleton;a.get(v)!==m&&(v.update(),a.set(v,m))}return g}function f(){a=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),i.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:f}}const kT={[N0]:"LINEAR_TONE_MAPPING",[D0]:"REINHARD_TONE_MAPPING",[U0]:"CINEON_TONE_MAPPING",[F0]:"ACES_FILMIC_TONE_MAPPING",[k0]:"AGX_TONE_MAPPING",[B0]:"NEUTRAL_TONE_MAPPING",[O0]:"CUSTOM_TONE_MAPPING"};function BT(o,e,t,i,s){const a=new Hi(e,t,{type:o,depthBuffer:i,stencilBuffer:s}),c=new Hi(e,t,{type:mr,depthBuffer:!1,stencilBuffer:!1}),f=new Qn;f.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Wn([0,2,0,0,2,0],2));const d=new rS({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new wn(f,d),m=new Dc(-1,1,1,-1,0,1);let _=null,g=null,v=!1,M,E=null,y=[],S=!1;this.setSize=function(R,L){a.setSize(R,L),c.setSize(R,L);for(let C=0;C<y.length;C++){const O=y[C];O.setSize&&O.setSize(R,L)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const L=a.width,C=a.height;for(let O=0;O<y.length;O++){const D=y[O];D.setSize&&D.setSize(L,C)}},this.begin=function(R,L){if(v||R.toneMapping===Vi&&y.length===0)return!1;if(E=L,L!==null){const C=L.width,O=L.height;(a.width!==C||a.height!==O)&&this.setSize(C,O)}return S===!1&&R.setRenderTarget(a),M=R.toneMapping,R.toneMapping=Vi,!0},this.hasRenderPass=function(){return S},this.end=function(R,L){R.toneMapping=M,v=!0;let C=a,O=c;for(let D=0;D<y.length;D++){const k=y[D];if(k.enabled!==!1&&(k.render(R,O,C,L),k.needsSwap!==!1)){const w=C;C=O,O=w}}if(_!==R.outputColorSpace||g!==R.toneMapping){_=R.outputColorSpace,g=R.toneMapping,d.defines={},Et.getTransfer(_)===Ut&&(d.defines.SRGB_TRANSFER="");const D=kT[g];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=C.texture,R.setRenderTarget(E),R.render(h,m),E=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),c.dispose(),f.dispose(),d.dispose()}}const m_=new cn,Jd=new Ia(1,1),g_=new Z0,__=new Ay,v_=new s_,t0=[],n0=[],i0=new Float32Array(16),r0=new Float32Array(9),s0=new Float32Array(4);function Co(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=t0[s];if(a===void 0&&(a=new Float32Array(s),t0[s]=a),e!==0){i.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=t,o[c].toArray(a,f)}return a}function un(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function fn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Fc(o,e){let t=n0[e];t===void 0&&(t=new Int32Array(e),n0[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function zT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function VT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2fv(this.addr,e),fn(t,e)}}function HT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;o.uniform3fv(this.addr,e),fn(t,e)}}function GT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4fv(this.addr,e),fn(t,e)}}function WT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;s0.set(i),o.uniformMatrix2fv(this.addr,!1,s0),fn(t,i)}}function XT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;r0.set(i),o.uniformMatrix3fv(this.addr,!1,r0),fn(t,i)}}function jT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;i0.set(i),o.uniformMatrix4fv(this.addr,!1,i0),fn(t,i)}}function qT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function YT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2iv(this.addr,e),fn(t,e)}}function KT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;o.uniform3iv(this.addr,e),fn(t,e)}}function $T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4iv(this.addr,e),fn(t,e)}}function ZT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function JT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2uiv(this.addr,e),fn(t,e)}}function QT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;o.uniform3uiv(this.addr,e),fn(t,e)}}function ew(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4uiv(this.addr,e),fn(t,e)}}function tw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Jd.compareFunction=t.isReversedDepthBuffer()?ph:hh,a=Jd):a=m_,t.setTexture2D(e||a,s)}function nw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||__,s)}function iw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||v_,s)}function rw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||g_,s)}function sw(o){switch(o){case 5126:return zT;case 35664:return VT;case 35665:return HT;case 35666:return GT;case 35674:return WT;case 35675:return XT;case 35676:return jT;case 5124:case 35670:return qT;case 35667:case 35671:return YT;case 35668:case 35672:return KT;case 35669:case 35673:return $T;case 5125:return ZT;case 36294:return JT;case 36295:return QT;case 36296:return ew;case 35678:case 36198:case 36298:case 36306:case 35682:return tw;case 35679:case 36299:case 36307:return nw;case 35680:case 36300:case 36308:case 36293:return iw;case 36289:case 36303:case 36311:case 36292:return rw}}function ow(o,e){o.uniform1fv(this.addr,e)}function aw(o,e){const t=Co(e,this.size,2);o.uniform2fv(this.addr,t)}function lw(o,e){const t=Co(e,this.size,3);o.uniform3fv(this.addr,t)}function cw(o,e){const t=Co(e,this.size,4);o.uniform4fv(this.addr,t)}function uw(o,e){const t=Co(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function fw(o,e){const t=Co(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function dw(o,e){const t=Co(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function hw(o,e){o.uniform1iv(this.addr,e)}function pw(o,e){o.uniform2iv(this.addr,e)}function mw(o,e){o.uniform3iv(this.addr,e)}function gw(o,e){o.uniform4iv(this.addr,e)}function _w(o,e){o.uniform1uiv(this.addr,e)}function vw(o,e){o.uniform2uiv(this.addr,e)}function xw(o,e){o.uniform3uiv(this.addr,e)}function yw(o,e){o.uniform4uiv(this.addr,e)}function Sw(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));let c;this.type===o.SAMPLER_2D_SHADOW?c=Jd:c=m_;for(let f=0;f!==s;++f)t.setTexture2D(e[f]||c,a[f])}function Mw(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||__,a[c])}function Ew(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||v_,a[c])}function Tw(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||g_,a[c])}function ww(o){switch(o){case 5126:return ow;case 35664:return aw;case 35665:return lw;case 35666:return cw;case 35674:return uw;case 35675:return fw;case 35676:return dw;case 5124:case 35670:return hw;case 35667:case 35671:return pw;case 35668:case 35672:return mw;case 35669:case 35673:return gw;case 5125:return _w;case 36294:return vw;case 36295:return xw;case 36296:return yw;case 35678:case 36198:case 36298:case 36306:case 35682:return Sw;case 35679:case 36299:case 36307:return Mw;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}class Aw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sw(t.type)}}class bw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ww(t.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const f=s[a];f.setValue(e,t[f.id],i)}}}const td=/(\w+)(\])?(\[|\.)?/g;function o0(o,e){o.seq.push(e),o.map[e.id]=e}function Cw(o,e,t){const i=o.name,s=i.length;for(td.lastIndex=0;;){const a=td.exec(i),c=td.lastIndex;let f=a[1];const d=a[2]==="]",h=a[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===s){o0(t,h===void 0?new Aw(f,o,e):new bw(f,o,e));break}else{let _=t.map[f];_===void 0&&(_=new Rw(f),o0(t,_)),t=_}}}class Ec{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);Cw(f,d,this)}const s=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):a.push(c);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const f=t[a],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function a0(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const Pw=37297;let Lw=0;function Iw(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const l0=new pt;function Nw(o){Et._getMatrix(l0,Et.workingColorSpace,o);const e=`mat3( ${l0.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return tt("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function c0(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+Iw(o.getShaderSource(e),f)}else return a}function Dw(o,e){const t=Nw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Uw={[N0]:"Linear",[D0]:"Reinhard",[U0]:"Cineon",[F0]:"ACESFilmic",[k0]:"AgX",[B0]:"Neutral",[O0]:"Custom"};function Fw(o,e){const t=Uw[e];return t===void 0?(tt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gc=new Q;function Ow(){Et.getLuminanceCoefficients(gc);const o=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function Bw(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function zw(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let f=1;a.type===o.FLOAT_MAT2&&(f=2),a.type===o.FLOAT_MAT3&&(f=3),a.type===o.FLOAT_MAT4&&(f=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:f}}return t}function Ma(o){return o!==""}function u0(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(o){return o.replace(Vw,Gw)}const Hw=new Map;function Gw(o,e){let t=mt[e];if(t===void 0){const i=Hw.get(e);if(i!==void 0)t=mt[i],tt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(t)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d0(o){return o.replace(Ww,Xw)}function Xw(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function h0(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const jw={[_c]:"SHADOWMAP_TYPE_PCF",[ya]:"SHADOWMAP_TYPE_VSM"};function qw(o){return jw[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yw={[Ms]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[Lc]:"ENVMAP_TYPE_CUBE_UV"};function Kw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":Yw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const $w={[mo]:"ENVMAP_MODE_REFRACTION"};function Zw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":$w[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jw={[I0]:"ENVMAP_BLENDING_MULTIPLY",[zx]:"ENVMAP_BLENDING_MIX",[Vx]:"ENVMAP_BLENDING_ADD"};function Qw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":Jw[o.combine]||"ENVMAP_BLENDING_NONE"}function e1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function t1(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=qw(t),h=Kw(t),m=Zw(t),_=Qw(t),g=e1(t),v=kw(t),M=Bw(a),E=s.createProgram();let y,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ma).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ma).join(`
`),S.length>0&&(S+=`
`)):(y=[h0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),S=[h0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?Fw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Dw("linearToOutputTexel",t.outputColorSpace),Ow(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),c=Qd(c),c=u0(c,t),c=f0(c,t),f=Qd(f),f=u0(f,t),f=f0(f,t),c=d0(c),f=d0(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=R+y+c,C=R+S+f,O=a0(s,s.VERTEX_SHADER,L),D=a0(s,s.FRAGMENT_SHADER,C);s.attachShader(E,O),s.attachShader(E,D),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function k(F){if(o.debug.checkShaderErrors){const W=s.getProgramInfoLog(E)||"",X=s.getShaderInfoLog(O)||"",ne=s.getShaderInfoLog(D)||"",q=W.trim(),$=X.trim(),B=ne.trim();let Y=!0,Z=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,O,D);else{const se=c0(s,O,"vertex"),N=c0(s,D,"fragment");ot("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+se+`
`+N)}else q!==""?tt("WebGLProgram: Program Info Log:",q):($===""||B==="")&&(Z=!1);Z&&(F.diagnostics={runnable:Y,programLog:q,vertexShader:{log:$,prefix:y},fragmentShader:{log:B,prefix:S}})}s.deleteShader(O),s.deleteShader(D),w=new Ec(s,E),P=zw(s,E)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let ae=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ae===!1&&(ae=s.getProgramParameter(E,Pw)),ae},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=D,this}let n1=0;class i1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new r1(e),t.set(e,i)),i}}class r1{constructor(e){this.id=n1++,this.code=e,this.usedTimes=0}}function s1(o,e,t,i,s,a){const c=new J0,f=new i1,d=new Set,h=[],m=new Map,_=i.logarithmicDepthBuffer;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return d.add(w),w===0?"uv":`uv${w}`}function E(w,P,ae,F,W){const X=F.fog,ne=W.geometry,q=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?F.environment:null,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,B=e.get(w.envMap||q,$),Y=B&&B.mapping===Lc?B.image.height:null,Z=v[w.type];w.precision!==null&&(g=i.getMaxPrecision(w.precision),g!==w.precision&&tt("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const se=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,N=se!==void 0?se.length:0;let J=0;ne.morphAttributes.position!==void 0&&(J=1),ne.morphAttributes.normal!==void 0&&(J=2),ne.morphAttributes.color!==void 0&&(J=3);let Re,_e,De,ee;if(Z){const Rt=Fi[Z];Re=Rt.vertexShader,_e=Rt.fragmentShader}else Re=w.vertexShader,_e=w.fragmentShader,f.update(w),De=f.getVertexShaderID(w),ee=f.getFragmentShaderID(w);const he=o.getRenderTarget(),ce=o.state.buffers.depth.getReversed(),Ce=W.isInstancedMesh===!0,Le=W.isBatchedMesh===!0,Ye=!!w.map,Zt=!!w.matcap,_t=!!B,At=!!w.aoMap,It=!!w.lightMap,dt=!!w.bumpMap,Vt=!!w.normalMap,V=!!w.displacementMap,Xt=!!w.emissiveMap,St=!!w.metalnessMap,bt=!!w.roughnessMap,Xe=w.anisotropy>0,I=w.clearcoat>0,T=w.dispersion>0,j=w.iridescence>0,pe=w.sheen>0,ge=w.transmission>0,fe=Xe&&!!w.anisotropyMap,Ve=I&&!!w.clearcoatMap,Ae=I&&!!w.clearcoatNormalMap,$e=I&&!!w.clearcoatRoughnessMap,st=j&&!!w.iridescenceMap,Se=j&&!!w.iridescenceThicknessMap,we=pe&&!!w.sheenColorMap,je=pe&&!!w.sheenRoughnessMap,He=!!w.specularMap,Ue=!!w.specularColorMap,ft=!!w.specularIntensityMap,H=ge&&!!w.transmissionMap,be=ge&&!!w.thicknessMap,Ee=!!w.gradientMap,Fe=!!w.alphaMap,Me=w.alphaTest>0,de=!!w.alphaHash,Ge=!!w.extensions;let at=Vi;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(at=o.toneMapping);const Dt={shaderID:Z,shaderType:w.type,shaderName:w.name,vertexShader:Re,fragmentShader:_e,defines:w.defines,customVertexShaderID:De,customFragmentShaderID:ee,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Le,batchingColor:Le&&W._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&W.instanceColor!==null,instancingMorph:Ce&&W.morphTexture!==null,outputColorSpace:he===null?o.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Dn,alphaToCoverage:!!w.alphaToCoverage,map:Ye,matcap:Zt,envMap:_t,envMapMode:_t&&B.mapping,envMapCubeUVHeight:Y,aoMap:At,lightMap:It,bumpMap:dt,normalMap:Vt,displacementMap:V,emissiveMap:Xt,normalMapObjectSpace:Vt&&w.normalMapType===jx,normalMapTangentSpace:Vt&&w.normalMapType===K0,metalnessMap:St,roughnessMap:bt,anisotropy:Xe,anisotropyMap:fe,clearcoat:I,clearcoatMap:Ve,clearcoatNormalMap:Ae,clearcoatRoughnessMap:$e,dispersion:T,iridescence:j,iridescenceMap:st,iridescenceThicknessMap:Se,sheen:pe,sheenColorMap:we,sheenRoughnessMap:je,specularMap:He,specularColorMap:Ue,specularIntensityMap:ft,transmission:ge,transmissionMap:H,thicknessMap:be,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===uo&&w.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Me,alphaHash:de,combine:w.combine,mapUv:Ye&&M(w.map.channel),aoMapUv:At&&M(w.aoMap.channel),lightMapUv:It&&M(w.lightMap.channel),bumpMapUv:dt&&M(w.bumpMap.channel),normalMapUv:Vt&&M(w.normalMap.channel),displacementMapUv:V&&M(w.displacementMap.channel),emissiveMapUv:Xt&&M(w.emissiveMap.channel),metalnessMapUv:St&&M(w.metalnessMap.channel),roughnessMapUv:bt&&M(w.roughnessMap.channel),anisotropyMapUv:fe&&M(w.anisotropyMap.channel),clearcoatMapUv:Ve&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$e&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:je&&M(w.sheenRoughnessMap.channel),specularMapUv:He&&M(w.specularMap.channel),specularColorMapUv:Ue&&M(w.specularColorMap.channel),specularIntensityMapUv:ft&&M(w.specularIntensityMap.channel),transmissionMapUv:H&&M(w.transmissionMap.channel),thicknessMapUv:be&&M(w.thicknessMap.channel),alphaMapUv:Fe&&M(w.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Vt||Xe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ne.attributes.uv&&(Ye||Fe),fog:!!X,useFog:w.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||ne.attributes.normal===void 0&&Vt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ce,skinning:W.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:J,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&ae.length>0,shadowMapType:o.shadowMap.type,toneMapping:at,decodeVideoTexture:Ye&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Ut,decodeVideoTextureEmissive:Xt&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===Ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ei,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||Le)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Dt.vertexUv1s=d.has(1),Dt.vertexUv2s=d.has(2),Dt.vertexUv3s=d.has(3),d.clear(),Dt}function y(w){const P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ae in w.defines)P.push(ae),P.push(w.defines[ae]);return w.isRawShaderMaterial===!1&&(S(P,w),R(P,w),P.push(o.outputColorSpace)),P.push(w.customProgramCacheKey),P.join()}function S(w,P){w.push(P.precision),w.push(P.outputColorSpace),w.push(P.envMapMode),w.push(P.envMapCubeUVHeight),w.push(P.mapUv),w.push(P.alphaMapUv),w.push(P.lightMapUv),w.push(P.aoMapUv),w.push(P.bumpMapUv),w.push(P.normalMapUv),w.push(P.displacementMapUv),w.push(P.emissiveMapUv),w.push(P.metalnessMapUv),w.push(P.roughnessMapUv),w.push(P.anisotropyMapUv),w.push(P.clearcoatMapUv),w.push(P.clearcoatNormalMapUv),w.push(P.clearcoatRoughnessMapUv),w.push(P.iridescenceMapUv),w.push(P.iridescenceThicknessMapUv),w.push(P.sheenColorMapUv),w.push(P.sheenRoughnessMapUv),w.push(P.specularMapUv),w.push(P.specularColorMapUv),w.push(P.specularIntensityMapUv),w.push(P.transmissionMapUv),w.push(P.thicknessMapUv),w.push(P.combine),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.morphAttributeCount),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.numLightProbes),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function R(w,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),w.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),w.push(c.mask)}function L(w){const P=v[w.type];let ae;if(P){const F=Fi[P];ae=tS.clone(F.uniforms)}else ae=w.uniforms;return ae}function C(w,P){let ae=m.get(P);return ae!==void 0?++ae.usedTimes:(ae=new t1(o,P,w,s),h.push(ae),m.set(P,ae)),ae}function O(w){if(--w.usedTimes===0){const P=h.indexOf(w);h[P]=h[h.length-1],h.pop(),m.delete(w.cacheKey),w.destroy()}}function D(w){f.remove(w)}function k(){f.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:L,acquireProgram:C,releaseProgram:O,releaseShaderCache:D,programs:h,dispose:k}}function o1(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function i(c){o.delete(c)}function s(c,f,d){o.get(c)[f]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function a1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function p0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function m0(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(g){let v=0;return g.isInstancedMesh&&(v+=2),g.isSkinnedMesh&&(v+=1),v}function f(g,v,M,E,y,S){let R=o[e];return R===void 0?(R={id:g.id,object:g,geometry:v,material:M,materialVariant:c(g),groupOrder:E,renderOrder:g.renderOrder,z:y,group:S},o[e]=R):(R.id=g.id,R.object=g,R.geometry=v,R.material=M,R.materialVariant=c(g),R.groupOrder=E,R.renderOrder=g.renderOrder,R.z=y,R.group=S),e++,R}function d(g,v,M,E,y,S){const R=f(g,v,M,E,y,S);M.transmission>0?i.push(R):M.transparent===!0?s.push(R):t.push(R)}function h(g,v,M,E,y,S){const R=f(g,v,M,E,y,S);M.transmission>0?i.unshift(R):M.transparent===!0?s.unshift(R):t.unshift(R)}function m(g,v){t.length>1&&t.sort(g||a1),i.length>1&&i.sort(v||p0),s.length>1&&s.sort(v||p0)}function _(){for(let g=e,v=o.length;g<v;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:d,unshift:h,finish:_,sort:m}}function l1(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new m0,o.set(i,[c])):s>=a.length?(c=new m0,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function c1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new ut};break;case"SpotLight":t={position:new Q,direction:new Q,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return o[e.id]=t,t}}}function u1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let f1=0;function d1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function h1(o){const e=new c1,t=u1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new Q);const s=new Q,a=new gt,c=new gt;function f(h){let m=0,_=0,g=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let v=0,M=0,E=0,y=0,S=0,R=0,L=0,C=0,O=0,D=0,k=0;h.sort(d1);for(let P=0,ae=h.length;P<ae;P++){const F=h[P],W=F.color,X=F.intensity,ne=F.distance;let q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===_o?q=F.shadow.map.texture:q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)m+=W.r*X,_+=W.g*X,g+=W.b*X;else if(F.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(F.sh.coefficients[$],X);k++}else if(F.isDirectionalLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const B=F.shadow,Y=t.get(F);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,i.directionalShadow[v]=Y,i.directionalShadowMap[v]=q,i.directionalShadowMatrix[v]=F.shadow.matrix,R++}i.directional[v]=$,v++}else if(F.isSpotLight){const $=e.get(F);$.position.setFromMatrixPosition(F.matrixWorld),$.color.copy(W).multiplyScalar(X),$.distance=ne,$.coneCos=Math.cos(F.angle),$.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),$.decay=F.decay,i.spot[E]=$;const B=F.shadow;if(F.map&&(i.spotLightMap[O]=F.map,O++,B.updateMatrices(F),F.castShadow&&D++),i.spotLightMatrix[E]=B.matrix,F.castShadow){const Y=t.get(F);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=q,C++}E++}else if(F.isRectAreaLight){const $=e.get(F);$.color.copy(W).multiplyScalar(X),$.halfWidth.set(F.width*.5,0,0),$.halfHeight.set(0,F.height*.5,0),i.rectArea[y]=$,y++}else if(F.isPointLight){const $=e.get(F);if($.color.copy(F.color).multiplyScalar(F.intensity),$.distance=F.distance,$.decay=F.decay,F.castShadow){const B=F.shadow,Y=t.get(F);Y.shadowIntensity=B.intensity,Y.shadowBias=B.bias,Y.shadowNormalBias=B.normalBias,Y.shadowRadius=B.radius,Y.shadowMapSize=B.mapSize,Y.shadowCameraNear=B.camera.near,Y.shadowCameraFar=B.camera.far,i.pointShadow[M]=Y,i.pointShadowMap[M]=q,i.pointShadowMatrix[M]=F.shadow.matrix,L++}i.point[M]=$,M++}else if(F.isHemisphereLight){const $=e.get(F);$.skyColor.copy(F.color).multiplyScalar(X),$.groundColor.copy(F.groundColor).multiplyScalar(X),i.hemi[S]=$,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ne.LTC_FLOAT_1,i.rectAreaLTC2=Ne.LTC_FLOAT_2):(i.rectAreaLTC1=Ne.LTC_HALF_1,i.rectAreaLTC2=Ne.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=_,i.ambient[2]=g;const w=i.hash;(w.directionalLength!==v||w.pointLength!==M||w.spotLength!==E||w.rectAreaLength!==y||w.hemiLength!==S||w.numDirectionalShadows!==R||w.numPointShadows!==L||w.numSpotShadows!==C||w.numSpotMaps!==O||w.numLightProbes!==k)&&(i.directional.length=v,i.spot.length=E,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=C+O-D,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=k,w.directionalLength=v,w.pointLength=M,w.spotLength=E,w.rectAreaLength=y,w.hemiLength=S,w.numDirectionalShadows=R,w.numPointShadows=L,w.numSpotShadows=C,w.numSpotMaps=O,w.numLightProbes=k,i.version=f1++)}function d(h,m){let _=0,g=0,v=0,M=0,E=0;const y=m.matrixWorldInverse;for(let S=0,R=h.length;S<R;S++){const L=h[S];if(L.isDirectionalLight){const C=i.directional[_];C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(y),_++}else if(L.isSpotLight){const C=i.spot[v];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(y),v++}else if(L.isRectAreaLight){const C=i.rectArea[M];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),c.identity(),a.copy(L.matrixWorld),a.premultiply(y),c.extractRotation(a),C.halfWidth.set(L.width*.5,0,0),C.halfHeight.set(0,L.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const C=i.point[g];C.position.setFromMatrixPosition(L.matrixWorld),C.position.applyMatrix4(y),g++}else if(L.isHemisphereLight){const C=i.hemi[E];C.direction.setFromMatrixPosition(L.matrixWorld),C.direction.transformDirection(y),E++}}}return{setup:f,setupView:d,state:i}}function g0(o){const e=new h1(o),t=[],i=[];function s(m){h.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function c(m){i.push(m)}function f(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:d,pushLight:a,pushShadow:c}}function p1(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let f;return c===void 0?(f=new g0(o),e.set(s,[f])):a>=c.length?(f=new g0(o),c.push(f)):f=c[a],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const m1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_1=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],v1=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],_0=new gt,va=new Q,nd=new Q;function x1(o,e,t){let i=new yh;const s=new Tt,a=new Tt,c=new Wt,f=new sS,d=new oS,h={},m=t.maxTextureSize,_={[pr]:Gn,[Gn]:pr,[Ei]:Ei},g=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:m1,fragmentShader:g1}),v=g.clone();v.defines.HORIZONTAL_PASS=1;const M=new Qn;M.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new wn(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let S=this.type;this.render=function(D,k,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===Sx&&(tt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_c);const P=o.getRenderTarget(),ae=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),W=o.state;W.setBlending(dr),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const X=S!==this.type;X&&k.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(q=>q.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,q=D.length;ne<q;ne++){const $=D[ne],B=$.shadow;if(B===void 0){tt("WebGLShadowMap:",$,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const Y=B.getFrameExtents();s.multiply(Y),a.copy(B.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(a.x=Math.floor(m/Y.x),s.x=a.x*Y.x,B.mapSize.x=a.x),s.y>m&&(a.y=Math.floor(m/Y.y),s.y=a.y*Y.y,B.mapSize.y=a.y));const Z=o.state.buffers.depth.getReversed();if(B.camera._reversedDepth=Z,B.map===null||X===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ya){if($.isPointLight){tt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Hi(s.x,s.y,{format:_o,type:mr,minFilter:sn,magFilter:sn,generateMipmaps:!1}),B.map.texture.name=$.name+".shadowMap",B.map.depthTexture=new Ia(s.x,s.y,fi),B.map.depthTexture.name=$.name+".shadowMapDepth",B.map.depthTexture.format=gr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln}else $.isPointLight?(B.map=new p_(s.x),B.map.depthTexture=new Qy(s.x,Wi)):(B.map=new Hi(s.x,s.y),B.map.depthTexture=new Ia(s.x,s.y,Wi)),B.map.depthTexture.name=$.name+".shadowMap",B.map.depthTexture.format=gr,this.type===_c?(B.map.depthTexture.compareFunction=Z?ph:hh,B.map.depthTexture.minFilter=sn,B.map.depthTexture.magFilter=sn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln);B.camera.updateProjectionMatrix()}const se=B.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<se;N++){if(B.map.isWebGLCubeRenderTarget)o.setRenderTarget(B.map,N),o.clear();else{N===0&&(o.setRenderTarget(B.map),o.clear());const J=B.getViewport(N);c.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),W.viewport(c)}if($.isPointLight){const J=B.camera,Re=B.matrix,_e=$.distance||J.far;_e!==J.far&&(J.far=_e,J.updateProjectionMatrix()),va.setFromMatrixPosition($.matrixWorld),J.position.copy(va),nd.copy(J.position),nd.add(_1[N]),J.up.copy(v1[N]),J.lookAt(nd),J.updateMatrixWorld(),Re.makeTranslation(-va.x,-va.y,-va.z),_0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),B._frustum.setFromProjectionMatrix(_0,J.coordinateSystem,J.reversedDepth)}else B.updateMatrices($);i=B.getFrustum(),C(k,w,B.camera,$,this.type)}B.isPointLightShadow!==!0&&this.type===ya&&R(B,w),B.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(P,ae,F)};function R(D,k){const w=e.update(E);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,v.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,v.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Hi(s.x,s.y,{format:_o,type:mr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,o.setRenderTarget(D.mapPass),o.clear(),o.renderBufferDirect(k,null,w,g,E,null),v.uniforms.shadow_pass.value=D.mapPass.texture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,o.setRenderTarget(D.map),o.clear(),o.renderBufferDirect(k,null,w,v,E,null)}function L(D,k,w,P){let ae=null;const F=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)ae=F;else if(ae=w.isPointLight===!0?d:f,o.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const W=ae.uuid,X=k.uuid;let ne=h[W];ne===void 0&&(ne={},h[W]=ne);let q=ne[X];q===void 0&&(q=ae.clone(),ne[X]=q,k.addEventListener("dispose",O)),ae=q}if(ae.visible=k.visible,ae.wireframe=k.wireframe,P===ya?ae.side=k.shadowSide!==null?k.shadowSide:k.side:ae.side=k.shadowSide!==null?k.shadowSide:_[k.side],ae.alphaMap=k.alphaMap,ae.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,ae.map=k.map,ae.clipShadows=k.clipShadows,ae.clippingPlanes=k.clippingPlanes,ae.clipIntersection=k.clipIntersection,ae.displacementMap=k.displacementMap,ae.displacementScale=k.displacementScale,ae.displacementBias=k.displacementBias,ae.wireframeLinewidth=k.wireframeLinewidth,ae.linewidth=k.linewidth,w.isPointLight===!0&&ae.isMeshDistanceMaterial===!0){const W=o.properties.get(ae);W.light=w}return ae}function C(D,k,w,P,ae){if(D.visible===!1)return;if(D.layers.test(k.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&ae===ya)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);const X=e.update(D),ne=D.material;if(Array.isArray(ne)){const q=X.groups;for(let $=0,B=q.length;$<B;$++){const Y=q[$],Z=ne[Y.materialIndex];if(Z&&Z.visible){const se=L(D,Z,P,ae);D.onBeforeShadow(o,D,k,w,X,se,Y),o.renderBufferDirect(w,null,X,se,D,Y),D.onAfterShadow(o,D,k,w,X,se,Y)}}}else if(ne.visible){const q=L(D,ne,P,ae);D.onBeforeShadow(o,D,k,w,X,q,null),o.renderBufferDirect(w,null,X,q,D,null),D.onAfterShadow(o,D,k,w,X,q,null)}}const W=D.children;for(let X=0,ne=W.length;X<ne;X++)C(W[X],k,w,P,ae)}function O(D){D.target.removeEventListener("dispose",O);for(const w in h){const P=h[w],ae=D.target.uuid;ae in P&&(P[ae].dispose(),delete P[ae])}}}function y1(o,e){function t(){let H=!1;const be=new Wt;let Ee=null;const Fe=new Wt(0,0,0,0);return{setMask:function(Me){Ee!==Me&&!H&&(o.colorMask(Me,Me,Me,Me),Ee=Me)},setLocked:function(Me){H=Me},setClear:function(Me,de,Ge,at,Dt){Dt===!0&&(Me*=at,de*=at,Ge*=at),be.set(Me,de,Ge,at),Fe.equals(be)===!1&&(o.clearColor(Me,de,Ge,at),Fe.copy(be))},reset:function(){H=!1,Ee=null,Fe.set(-1,0,0,0)}}}function i(){let H=!1,be=!1,Ee=null,Fe=null,Me=null;return{setReversed:function(de){if(be!==de){const Ge=e.get("EXT_clip_control");de?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),be=de;const at=Me;Me=null,this.setClear(at)}},getReversed:function(){return be},setTest:function(de){de?he(o.DEPTH_TEST):ce(o.DEPTH_TEST)},setMask:function(de){Ee!==de&&!H&&(o.depthMask(de),Ee=de)},setFunc:function(de){if(be&&(de=iy[de]),Fe!==de){switch(de){case cd:o.depthFunc(o.NEVER);break;case ud:o.depthFunc(o.ALWAYS);break;case fd:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case dd:o.depthFunc(o.EQUAL);break;case hd:o.depthFunc(o.GEQUAL);break;case pd:o.depthFunc(o.GREATER);break;case md:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Fe=de}},setLocked:function(de){H=de},setClear:function(de){Me!==de&&(Me=de,be&&(de=1-de),o.clearDepth(de))},reset:function(){H=!1,Ee=null,Fe=null,Me=null,be=!1}}}function s(){let H=!1,be=null,Ee=null,Fe=null,Me=null,de=null,Ge=null,at=null,Dt=null;return{setTest:function(Rt){H||(Rt?he(o.STENCIL_TEST):ce(o.STENCIL_TEST))},setMask:function(Rt){be!==Rt&&!H&&(o.stencilMask(Rt),be=Rt)},setFunc:function(Rt,ei,An){(Ee!==Rt||Fe!==ei||Me!==An)&&(o.stencilFunc(Rt,ei,An),Ee=Rt,Fe=ei,Me=An)},setOp:function(Rt,ei,An){(de!==Rt||Ge!==ei||at!==An)&&(o.stencilOp(Rt,ei,An),de=Rt,Ge=ei,at=An)},setLocked:function(Rt){H=Rt},setClear:function(Rt){Dt!==Rt&&(o.clearStencil(Rt),Dt=Rt)},reset:function(){H=!1,be=null,Ee=null,Fe=null,Me=null,de=null,Ge=null,at=null,Dt=null}}}const a=new t,c=new i,f=new s,d=new WeakMap,h=new WeakMap;let m={},_={},g=new WeakMap,v=[],M=null,E=!1,y=null,S=null,R=null,L=null,C=null,O=null,D=null,k=new ut(0,0,0),w=0,P=!1,ae=null,F=null,W=null,X=null,ne=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,B=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),$=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),$=B>=2);let Z=null,se={};const N=o.getParameter(o.SCISSOR_BOX),J=o.getParameter(o.VIEWPORT),Re=new Wt().fromArray(N),_e=new Wt().fromArray(J);function De(H,be,Ee,Fe){const Me=new Uint8Array(4),de=o.createTexture();o.bindTexture(H,de),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ge=0;Ge<Ee;Ge++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(be,0,o.RGBA,1,1,Fe,0,o.RGBA,o.UNSIGNED_BYTE,Me):o.texImage2D(be+Ge,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Me);return de}const ee={};ee[o.TEXTURE_2D]=De(o.TEXTURE_2D,o.TEXTURE_2D,1),ee[o.TEXTURE_CUBE_MAP]=De(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[o.TEXTURE_2D_ARRAY]=De(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ee[o.TEXTURE_3D]=De(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),he(o.DEPTH_TEST),c.setFunc(po),dt(!1),Vt(tg),he(o.CULL_FACE),At(dr);function he(H){m[H]!==!0&&(o.enable(H),m[H]=!0)}function ce(H){m[H]!==!1&&(o.disable(H),m[H]=!1)}function Ce(H,be){return _[H]!==be?(o.bindFramebuffer(H,be),_[H]=be,H===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=be),H===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=be),!0):!1}function Le(H,be){let Ee=v,Fe=!1;if(H){Ee=g.get(be),Ee===void 0&&(Ee=[],g.set(be,Ee));const Me=H.textures;if(Ee.length!==Me.length||Ee[0]!==o.COLOR_ATTACHMENT0){for(let de=0,Ge=Me.length;de<Ge;de++)Ee[de]=o.COLOR_ATTACHMENT0+de;Ee.length=Me.length,Fe=!0}}else Ee[0]!==o.BACK&&(Ee[0]=o.BACK,Fe=!0);Fe&&o.drawBuffers(Ee)}function Ye(H){return M!==H?(o.useProgram(H),M=H,!0):!1}const Zt={[xs]:o.FUNC_ADD,[Ex]:o.FUNC_SUBTRACT,[Tx]:o.FUNC_REVERSE_SUBTRACT};Zt[wx]=o.MIN,Zt[Ax]=o.MAX;const _t={[bx]:o.ZERO,[Rx]:o.ONE,[Cx]:o.SRC_COLOR,[ad]:o.SRC_ALPHA,[Ux]:o.SRC_ALPHA_SATURATE,[Nx]:o.DST_COLOR,[Lx]:o.DST_ALPHA,[Px]:o.ONE_MINUS_SRC_COLOR,[ld]:o.ONE_MINUS_SRC_ALPHA,[Dx]:o.ONE_MINUS_DST_COLOR,[Ix]:o.ONE_MINUS_DST_ALPHA,[Fx]:o.CONSTANT_COLOR,[Ox]:o.ONE_MINUS_CONSTANT_COLOR,[kx]:o.CONSTANT_ALPHA,[Bx]:o.ONE_MINUS_CONSTANT_ALPHA};function At(H,be,Ee,Fe,Me,de,Ge,at,Dt,Rt){if(H===dr){E===!0&&(ce(o.BLEND),E=!1);return}if(E===!1&&(he(o.BLEND),E=!0),H!==Mx){if(H!==y||Rt!==P){if((S!==xs||C!==xs)&&(o.blendEquation(o.FUNC_ADD),S=xs,C=xs),Rt)switch(H){case uo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ng:o.blendFunc(o.ONE,o.ONE);break;case ig:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case rg:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ot("WebGLState: Invalid blending: ",H);break}else switch(H){case uo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ng:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case ig:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rg:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",H);break}R=null,L=null,O=null,D=null,k.set(0,0,0),w=0,y=H,P=Rt}return}Me=Me||be,de=de||Ee,Ge=Ge||Fe,(be!==S||Me!==C)&&(o.blendEquationSeparate(Zt[be],Zt[Me]),S=be,C=Me),(Ee!==R||Fe!==L||de!==O||Ge!==D)&&(o.blendFuncSeparate(_t[Ee],_t[Fe],_t[de],_t[Ge]),R=Ee,L=Fe,O=de,D=Ge),(at.equals(k)===!1||Dt!==w)&&(o.blendColor(at.r,at.g,at.b,Dt),k.copy(at),w=Dt),y=H,P=!1}function It(H,be){H.side===Ei?ce(o.CULL_FACE):he(o.CULL_FACE);let Ee=H.side===Gn;be&&(Ee=!Ee),dt(Ee),H.blending===uo&&H.transparent===!1?At(dr):At(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const Fe=H.stencilWrite;f.setTest(Fe),Fe&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Xt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(o.SAMPLE_ALPHA_TO_COVERAGE):ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){ae!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),ae=H)}function Vt(H){H!==xx?(he(o.CULL_FACE),H!==F&&(H===tg?o.cullFace(o.BACK):H===yx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):ce(o.CULL_FACE),F=H}function V(H){H!==W&&($&&o.lineWidth(H),W=H)}function Xt(H,be,Ee){H?(he(o.POLYGON_OFFSET_FILL),(X!==be||ne!==Ee)&&(X=be,ne=Ee,c.getReversed()&&(be=-be),o.polygonOffset(be,Ee))):ce(o.POLYGON_OFFSET_FILL)}function St(H){H?he(o.SCISSOR_TEST):ce(o.SCISSOR_TEST)}function bt(H){H===void 0&&(H=o.TEXTURE0+q-1),Z!==H&&(o.activeTexture(H),Z=H)}function Xe(H,be,Ee){Ee===void 0&&(Z===null?Ee=o.TEXTURE0+q-1:Ee=Z);let Fe=se[Ee];Fe===void 0&&(Fe={type:void 0,texture:void 0},se[Ee]=Fe),(Fe.type!==H||Fe.texture!==be)&&(Z!==Ee&&(o.activeTexture(Ee),Z=Ee),o.bindTexture(H,be||ee[H]),Fe.type=H,Fe.texture=be)}function I(){const H=se[Z];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function j(){try{o.compressedTexImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function pe(){try{o.texSubImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function ge(){try{o.texSubImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function fe(){try{o.compressedTexSubImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function Ve(){try{o.compressedTexSubImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function Ae(){try{o.texStorage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function $e(){try{o.texStorage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function st(){try{o.texImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function Se(){try{o.texImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function we(H){Re.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),Re.copy(H))}function je(H){_e.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),_e.copy(H))}function He(H,be){let Ee=h.get(be);Ee===void 0&&(Ee=new WeakMap,h.set(be,Ee));let Fe=Ee.get(H);Fe===void 0&&(Fe=o.getUniformBlockIndex(be,H.name),Ee.set(H,Fe))}function Ue(H,be){const Fe=h.get(be).get(H);d.get(be)!==Fe&&(o.uniformBlockBinding(be,Fe,H.__bindingPointIndex),d.set(be,Fe))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},Z=null,se={},_={},g=new WeakMap,v=[],M=null,E=!1,y=null,S=null,R=null,L=null,C=null,O=null,D=null,k=new ut(0,0,0),w=0,P=!1,ae=null,F=null,W=null,X=null,ne=null,Re.set(0,0,o.canvas.width,o.canvas.height),_e.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:he,disable:ce,bindFramebuffer:Ce,drawBuffers:Le,useProgram:Ye,setBlending:At,setMaterial:It,setFlipSided:dt,setCullFace:Vt,setLineWidth:V,setPolygonOffset:Xt,setScissorTest:St,activeTexture:bt,bindTexture:Xe,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:st,texImage3D:Se,updateUBOMapping:He,uniformBlockBinding:Ue,texStorage2D:Ae,texStorage3D:$e,texSubImage2D:pe,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ve,scissor:we,viewport:je,reset:ft}}function S1(o,e,t,i,s,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Tt,m=new WeakMap;let _;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,T){return v?new OffscreenCanvas(I,T):La("canvas")}function E(I,T,j){let pe=1;const ge=Xe(I);if((ge.width>j||ge.height>j)&&(pe=j/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const fe=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);_===void 0&&(_=M(fe,Ve));const Ae=T?M(fe,Ve):_;return Ae.width=fe,Ae.height=Ve,Ae.getContext("2d").drawImage(I,0,0,fe,Ve),tt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+Ve+")."),Ae}else return"data"in I&&tt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function y(I){return I.generateMipmaps}function S(I){o.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(I,T,j,pe,ge=!1){if(I!==null){if(o[I]!==void 0)return o[I];tt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let fe=T;if(T===o.RED&&(j===o.FLOAT&&(fe=o.R32F),j===o.HALF_FLOAT&&(fe=o.R16F),j===o.UNSIGNED_BYTE&&(fe=o.R8)),T===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(fe=o.R8UI),j===o.UNSIGNED_SHORT&&(fe=o.R16UI),j===o.UNSIGNED_INT&&(fe=o.R32UI),j===o.BYTE&&(fe=o.R8I),j===o.SHORT&&(fe=o.R16I),j===o.INT&&(fe=o.R32I)),T===o.RG&&(j===o.FLOAT&&(fe=o.RG32F),j===o.HALF_FLOAT&&(fe=o.RG16F),j===o.UNSIGNED_BYTE&&(fe=o.RG8)),T===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(fe=o.RG8UI),j===o.UNSIGNED_SHORT&&(fe=o.RG16UI),j===o.UNSIGNED_INT&&(fe=o.RG32UI),j===o.BYTE&&(fe=o.RG8I),j===o.SHORT&&(fe=o.RG16I),j===o.INT&&(fe=o.RG32I)),T===o.RGB_INTEGER&&(j===o.UNSIGNED_BYTE&&(fe=o.RGB8UI),j===o.UNSIGNED_SHORT&&(fe=o.RGB16UI),j===o.UNSIGNED_INT&&(fe=o.RGB32UI),j===o.BYTE&&(fe=o.RGB8I),j===o.SHORT&&(fe=o.RGB16I),j===o.INT&&(fe=o.RGB32I)),T===o.RGBA_INTEGER&&(j===o.UNSIGNED_BYTE&&(fe=o.RGBA8UI),j===o.UNSIGNED_SHORT&&(fe=o.RGBA16UI),j===o.UNSIGNED_INT&&(fe=o.RGBA32UI),j===o.BYTE&&(fe=o.RGBA8I),j===o.SHORT&&(fe=o.RGBA16I),j===o.INT&&(fe=o.RGBA32I)),T===o.RGB&&(j===o.UNSIGNED_INT_5_9_9_9_REV&&(fe=o.RGB9_E5),j===o.UNSIGNED_INT_10F_11F_11F_REV&&(fe=o.R11F_G11F_B10F)),T===o.RGBA){const Ve=ge?Ac:Et.getTransfer(pe);j===o.FLOAT&&(fe=o.RGBA32F),j===o.HALF_FLOAT&&(fe=o.RGBA16F),j===o.UNSIGNED_BYTE&&(fe=Ve===Ut?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(fe=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(fe=o.RGB5_A1)}return(fe===o.R16F||fe===o.R32F||fe===o.RG16F||fe===o.RG32F||fe===o.RGBA16F||fe===o.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function C(I,T){let j;return I?T===null||T===Wi||T===ba?j=o.DEPTH24_STENCIL8:T===fi?j=o.DEPTH32F_STENCIL8:T===Aa&&(j=o.DEPTH24_STENCIL8,tt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wi||T===ba?j=o.DEPTH_COMPONENT24:T===fi?j=o.DEPTH_COMPONENT32F:T===Aa&&(j=o.DEPTH_COMPONENT16),j}function O(I,T){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==ln&&I.minFilter!==sn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function D(I){const T=I.target;T.removeEventListener("dispose",D),w(T),T.isVideoTexture&&m.delete(T)}function k(I){const T=I.target;T.removeEventListener("dispose",k),ae(T)}function w(I){const T=i.get(I);if(T.__webglInit===void 0)return;const j=I.source,pe=g.get(j);if(pe){const ge=pe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(I),Object.keys(pe).length===0&&g.delete(j)}i.remove(I)}function P(I){const T=i.get(I);o.deleteTexture(T.__webglTexture);const j=I.source,pe=g.get(j);delete pe[T.__cacheKey],c.memory.textures--}function ae(I){const T=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ge=0;ge<T.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(T.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)o.deleteFramebuffer(T.__webglFramebuffer[pe]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=I.textures;for(let pe=0,ge=j.length;pe<ge;pe++){const fe=i.get(j[pe]);fe.__webglTexture&&(o.deleteTexture(fe.__webglTexture),c.memory.textures--),i.remove(j[pe])}i.remove(I)}let F=0;function W(){F=0}function X(){const I=F;return I>=s.maxTextures&&tt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),F+=1,I}function ne(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function q(I,T){const j=i.get(I);if(I.isVideoTexture&&St(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const pe=I.image;if(pe===null)tt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)tt("WebGLRenderer: Texture marked for update but image is incomplete");else{ee(j,I,T);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+T)}function $(I,T){const j=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){ee(j,I,T);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+T)}function B(I,T){const j=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){ee(j,I,T);return}t.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+T)}function Y(I,T){const j=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){he(j,I,T);return}t.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+T)}const Z={[go]:o.REPEAT,[Oi]:o.CLAMP_TO_EDGE,[wc]:o.MIRRORED_REPEAT},se={[ln]:o.NEAREST,[V0]:o.NEAREST_MIPMAP_NEAREST,[Sa]:o.NEAREST_MIPMAP_LINEAR,[sn]:o.LINEAR,[vc]:o.LINEAR_MIPMAP_NEAREST,[ki]:o.LINEAR_MIPMAP_LINEAR},N={[qx]:o.NEVER,[Jx]:o.ALWAYS,[Yx]:o.LESS,[hh]:o.LEQUAL,[Kx]:o.EQUAL,[ph]:o.GEQUAL,[$x]:o.GREATER,[Zx]:o.NOTEQUAL};function J(I,T){if(T.type===fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===sn||T.magFilter===vc||T.magFilter===Sa||T.magFilter===ki||T.minFilter===sn||T.minFilter===vc||T.minFilter===Sa||T.minFilter===ki)&&tt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,Z[T.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,Z[T.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,Z[T.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,se[T.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ln||T.minFilter!==Sa&&T.minFilter!==ki||T.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Re(I,T){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",D));const pe=T.source;let ge=g.get(pe);ge===void 0&&(ge={},g.set(pe,ge));const fe=ne(T);if(fe!==I.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,j=!0),ge[fe].usedTimes++;const Ve=ge[I.__cacheKey];Ve!==void 0&&(ge[I.__cacheKey].usedTimes--,Ve.usedTimes===0&&P(T)),I.__cacheKey=fe,I.__webglTexture=ge[fe].texture}return j}function _e(I,T,j){return Math.floor(Math.floor(I/j)/T)}function De(I,T,j,pe){const fe=I.updateRanges;if(fe.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,j,pe,T.data);else{fe.sort((Se,we)=>Se.start-we.start);let Ve=0;for(let Se=1;Se<fe.length;Se++){const we=fe[Ve],je=fe[Se],He=we.start+we.count,Ue=_e(je.start,T.width,4),ft=_e(we.start,T.width,4);je.start<=He+1&&Ue===ft&&_e(je.start+je.count-1,T.width,4)===Ue?we.count=Math.max(we.count,je.start+je.count-we.start):(++Ve,fe[Ve]=je)}fe.length=Ve+1;const Ae=o.getParameter(o.UNPACK_ROW_LENGTH),$e=o.getParameter(o.UNPACK_SKIP_PIXELS),st=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Se=0,we=fe.length;Se<we;Se++){const je=fe[Se],He=Math.floor(je.start/4),Ue=Math.ceil(je.count/4),ft=He%T.width,H=Math.floor(He/T.width),be=Ue,Ee=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),t.texSubImage2D(o.TEXTURE_2D,0,ft,H,be,Ee,j,pe,T.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ae),o.pixelStorei(o.UNPACK_SKIP_PIXELS,$e),o.pixelStorei(o.UNPACK_SKIP_ROWS,st)}}function ee(I,T,j){let pe=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Re(I,T),fe=T.source;t.bindTexture(pe,I.__webglTexture,o.TEXTURE0+j);const Ve=i.get(fe);if(fe.version!==Ve.__version||ge===!0){t.activeTexture(o.TEXTURE0+j);const Ae=Et.getPrimaries(Et.workingColorSpace),$e=T.colorSpace===qr?null:Et.getPrimaries(T.colorSpace),st=T.colorSpace===qr||Ae===$e?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let Se=E(T.image,!1,s.maxTextureSize);Se=bt(T,Se);const we=a.convert(T.format,T.colorSpace),je=a.convert(T.type);let He=L(T.internalFormat,we,je,T.colorSpace,T.isVideoTexture);J(pe,T);let Ue;const ft=T.mipmaps,H=T.isVideoTexture!==!0,be=Ve.__version===void 0||ge===!0,Ee=fe.dataReady,Fe=O(T,Se);if(T.isDepthTexture)He=C(T.format===Ss,T.type),be&&(H?t.texStorage2D(o.TEXTURE_2D,1,He,Se.width,Se.height):t.texImage2D(o.TEXTURE_2D,0,He,Se.width,Se.height,0,we,je,null));else if(T.isDataTexture)if(ft.length>0){H&&be&&t.texStorage2D(o.TEXTURE_2D,Fe,He,ft[0].width,ft[0].height);for(let Me=0,de=ft.length;Me<de;Me++)Ue=ft[Me],H?Ee&&t.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,we,je,Ue.data):t.texImage2D(o.TEXTURE_2D,Me,He,Ue.width,Ue.height,0,we,je,Ue.data);T.generateMipmaps=!1}else H?(be&&t.texStorage2D(o.TEXTURE_2D,Fe,He,Se.width,Se.height),Ee&&De(T,Se,we,je)):t.texImage2D(o.TEXTURE_2D,0,He,Se.width,Se.height,0,we,je,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){H&&be&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Fe,He,ft[0].width,ft[0].height,Se.depth);for(let Me=0,de=ft.length;Me<de;Me++)if(Ue=ft[Me],T.format!==di)if(we!==null)if(H){if(Ee)if(T.layerUpdates.size>0){const Ge=Yg(Ue.width,Ue.height,T.format,T.type);for(const at of T.layerUpdates){const Dt=Ue.data.subarray(at*Ge/Ue.data.BYTES_PER_ELEMENT,(at+1)*Ge/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,at,Ue.width,Ue.height,1,we,Dt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,Se.depth,we,Ue.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,He,Ue.width,Ue.height,Se.depth,0,Ue.data,0,0);else tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Ue.width,Ue.height,Se.depth,we,je,Ue.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Me,He,Ue.width,Ue.height,Se.depth,0,we,je,Ue.data)}else{H&&be&&t.texStorage2D(o.TEXTURE_2D,Fe,He,ft[0].width,ft[0].height);for(let Me=0,de=ft.length;Me<de;Me++)Ue=ft[Me],T.format!==di?we!==null?H?Ee&&t.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,we,Ue.data):t.compressedTexImage2D(o.TEXTURE_2D,Me,He,Ue.width,Ue.height,0,Ue.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&t.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ue.width,Ue.height,we,je,Ue.data):t.texImage2D(o.TEXTURE_2D,Me,He,Ue.width,Ue.height,0,we,je,Ue.data)}else if(T.isDataArrayTexture)if(H){if(be&&t.texStorage3D(o.TEXTURE_2D_ARRAY,Fe,He,Se.width,Se.height,Se.depth),Ee)if(T.layerUpdates.size>0){const Me=Yg(Se.width,Se.height,T.format,T.type);for(const de of T.layerUpdates){const Ge=Se.data.subarray(de*Me/Se.data.BYTES_PER_ELEMENT,(de+1)*Me/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,de,Se.width,Se.height,1,we,je,Ge)}T.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,we,je,Se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,He,Se.width,Se.height,Se.depth,0,we,je,Se.data);else if(T.isData3DTexture)H?(be&&t.texStorage3D(o.TEXTURE_3D,Fe,He,Se.width,Se.height,Se.depth),Ee&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,we,je,Se.data)):t.texImage3D(o.TEXTURE_3D,0,He,Se.width,Se.height,Se.depth,0,we,je,Se.data);else if(T.isFramebufferTexture){if(be)if(H)t.texStorage2D(o.TEXTURE_2D,Fe,He,Se.width,Se.height);else{let Me=Se.width,de=Se.height;for(let Ge=0;Ge<Fe;Ge++)t.texImage2D(o.TEXTURE_2D,Ge,He,Me,de,0,we,je,null),Me>>=1,de>>=1}}else if(ft.length>0){if(H&&be){const Me=Xe(ft[0]);t.texStorage2D(o.TEXTURE_2D,Fe,He,Me.width,Me.height)}for(let Me=0,de=ft.length;Me<de;Me++)Ue=ft[Me],H?Ee&&t.texSubImage2D(o.TEXTURE_2D,Me,0,0,we,je,Ue):t.texImage2D(o.TEXTURE_2D,Me,He,we,je,Ue);T.generateMipmaps=!1}else if(H){if(be){const Me=Xe(Se);t.texStorage2D(o.TEXTURE_2D,Fe,He,Me.width,Me.height)}Ee&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,we,je,Se)}else t.texImage2D(o.TEXTURE_2D,0,He,we,je,Se);y(T)&&S(pe),Ve.__version=fe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function he(I,T,j){if(T.image.length!==6)return;const pe=Re(I,T),ge=T.source;t.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+j);const fe=i.get(ge);if(ge.version!==fe.__version||pe===!0){t.activeTexture(o.TEXTURE0+j);const Ve=Et.getPrimaries(Et.workingColorSpace),Ae=T.colorSpace===qr?null:Et.getPrimaries(T.colorSpace),$e=T.colorSpace===qr||Ve===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);const st=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,we=[];for(let de=0;de<6;de++)!st&&!Se?we[de]=E(T.image[de],!0,s.maxCubemapSize):we[de]=Se?T.image[de].image:T.image[de],we[de]=bt(T,we[de]);const je=we[0],He=a.convert(T.format,T.colorSpace),Ue=a.convert(T.type),ft=L(T.internalFormat,He,Ue,T.colorSpace),H=T.isVideoTexture!==!0,be=fe.__version===void 0||pe===!0,Ee=ge.dataReady;let Fe=O(T,je);J(o.TEXTURE_CUBE_MAP,T);let Me;if(st){H&&be&&t.texStorage2D(o.TEXTURE_CUBE_MAP,Fe,ft,je.width,je.height);for(let de=0;de<6;de++){Me=we[de].mipmaps;for(let Ge=0;Ge<Me.length;Ge++){const at=Me[Ge];T.format!==di?He!==null?H?Ee&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,at.width,at.height,He,at.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,ft,at.width,at.height,0,at.data):tt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,at.width,at.height,He,Ue,at.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,ft,at.width,at.height,0,He,Ue,at.data)}}}else{if(Me=T.mipmaps,H&&be){Me.length>0&&Fe++;const de=Xe(we[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,Fe,ft,de.width,de.height)}for(let de=0;de<6;de++)if(Se){H?Ee&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,we[de].width,we[de].height,He,Ue,we[de].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,we[de].width,we[de].height,0,He,Ue,we[de].data);for(let Ge=0;Ge<Me.length;Ge++){const Dt=Me[Ge].image[de].image;H?Ee&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,Dt.width,Dt.height,He,Ue,Dt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,ft,Dt.width,Dt.height,0,He,Ue,Dt.data)}}else{H?Ee&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,He,Ue,we[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,He,Ue,we[de]);for(let Ge=0;Ge<Me.length;Ge++){const at=Me[Ge];H?Ee&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,He,Ue,at.image[de]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,ft,He,Ue,at.image[de])}}}y(T)&&S(o.TEXTURE_CUBE_MAP),fe.__version=ge.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ce(I,T,j,pe,ge,fe){const Ve=a.convert(j.format,j.colorSpace),Ae=a.convert(j.type),$e=L(j.internalFormat,Ve,Ae,j.colorSpace),st=i.get(T),Se=i.get(j);if(Se.__renderTarget=T,!st.__hasExternalTextures){const we=Math.max(1,T.width>>fe),je=Math.max(1,T.height>>fe);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,$e,we,je,T.depth,0,Ve,Ae,null):t.texImage2D(ge,fe,$e,we,je,0,Ve,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,I),Xt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,Se.__webglTexture,0,V(T)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,Se.__webglTexture,fe),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ce(I,T,j){if(o.bindRenderbuffer(o.RENDERBUFFER,I),T.depthBuffer){const pe=T.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,fe=C(T.stencilBuffer,ge),Ve=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Xt(T)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(T),fe,T.width,T.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(T),fe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,fe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ve,o.RENDERBUFFER,I)}else{const pe=T.textures;for(let ge=0;ge<pe.length;ge++){const fe=pe[ge],Ve=a.convert(fe.format,fe.colorSpace),Ae=a.convert(fe.type),$e=L(fe.internalFormat,Ve,Ae,fe.colorSpace);Xt(T)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(T),$e,T.width,T.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(T),$e,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,$e,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Le(I,T,j){const pe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(T.depthTexture);if(ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,T.depthTexture.addEventListener("dispose",D)),ge.__webglTexture===void 0){ge.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),J(o.TEXTURE_CUBE_MAP,T.depthTexture);const st=a.convert(T.depthTexture.format),Se=a.convert(T.depthTexture.type);let we;T.depthTexture.format===gr?we=o.DEPTH_COMPONENT24:T.depthTexture.format===Ss&&(we=o.DEPTH24_STENCIL8);for(let je=0;je<6;je++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,we,T.width,T.height,0,st,Se,null)}}else q(T.depthTexture,0);const fe=ge.__webglTexture,Ve=V(T),Ae=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+j:o.TEXTURE_2D,$e=T.depthTexture.format===Ss?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===gr)Xt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$e,Ae,fe,0,Ve):o.framebufferTexture2D(o.FRAMEBUFFER,$e,Ae,fe,0);else if(T.depthTexture.format===Ss)Xt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,$e,Ae,fe,0,Ve):o.framebufferTexture2D(o.FRAMEBUFFER,$e,Ae,fe,0);else throw new Error("Unknown depthTexture format")}function Ye(I){const T=i.get(I),j=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const pe=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=pe}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let pe=0;pe<6;pe++)Le(T.__webglFramebuffer[pe],I,pe);else{const pe=I.texture.mipmaps;pe&&pe.length>0?Le(T.__webglFramebuffer[0],I,0):Le(T.__webglFramebuffer,I,0)}else if(j){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=o.createRenderbuffer(),Ce(T.__webglDepthbuffer[pe],I,!1);else{const ge=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,fe)}}else{const pe=I.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ce(T.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,fe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,fe)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(I,T,j){const pe=i.get(I);T!==void 0&&ce(pe.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&Ye(I)}function _t(I){const T=I.texture,j=i.get(I),pe=i.get(T);I.addEventListener("dispose",k);const ge=I.textures,fe=I.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=T.version,c.memory.textures++),fe){j.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Ae]=[];for(let $e=0;$e<T.mipmaps.length;$e++)j.__webglFramebuffer[Ae][$e]=o.createFramebuffer()}else j.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)j.__webglFramebuffer[Ae]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(Ve)for(let Ae=0,$e=ge.length;Ae<$e;Ae++){const st=i.get(ge[Ae]);st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture(),c.memory.textures++)}if(I.samples>0&&Xt(I)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const $e=ge[Ae];j.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[Ae]);const st=a.convert($e.format,$e.colorSpace),Se=a.convert($e.type),we=L($e.internalFormat,st,Se,$e.colorSpace,I.isXRRenderTarget===!0),je=V(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,je,we,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,j.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),Ce(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(fe){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),J(o.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let $e=0;$e<T.mipmaps.length;$e++)ce(j.__webglFramebuffer[Ae][$e],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,$e);else ce(j.__webglFramebuffer[Ae],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(T)&&S(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ae=0,$e=ge.length;Ae<$e;Ae++){const st=ge[Ae],Se=i.get(st);let we=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,Se.__webglTexture),J(we,st),ce(j.__webglFramebuffer,I,st,o.COLOR_ATTACHMENT0+Ae,we,0),y(st)&&S(we)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),J(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let $e=0;$e<T.mipmaps.length;$e++)ce(j.__webglFramebuffer[$e],I,T,o.COLOR_ATTACHMENT0,Ae,$e);else ce(j.__webglFramebuffer,I,T,o.COLOR_ATTACHMENT0,Ae,0);y(T)&&S(Ae),t.unbindTexture()}I.depthBuffer&&Ye(I)}function At(I){const T=I.textures;for(let j=0,pe=T.length;j<pe;j++){const ge=T[j];if(y(ge)){const fe=R(I),Ve=i.get(ge).__webglTexture;t.bindTexture(fe,Ve),S(fe),t.unbindTexture()}}}const It=[],dt=[];function Vt(I){if(I.samples>0){if(Xt(I)===!1){const T=I.textures,j=I.width,pe=I.height;let ge=o.COLOR_BUFFER_BIT;const fe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ve=i.get(I),Ae=T.length>1;if(Ae)for(let st=0;st<T.length;st++)t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const $e=I.texture.mipmaps;$e&&$e.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let st=0;st<T.length;st++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[st]);const Se=i.get(T[st]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Se,0)}o.blitFramebuffer(0,0,j,pe,0,0,j,pe,ge,o.NEAREST),d===!0&&(It.length=0,dt.length=0,It.push(o.COLOR_ATTACHMENT0+st),I.depthBuffer&&I.resolveDepthBuffer===!1&&(It.push(fe),dt.push(fe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,dt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let st=0;st<T.length;st++){t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.RENDERBUFFER,Ve.__webglColorRenderbuffer[st]);const Se=i.get(T[st]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.TEXTURE_2D,Se,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const T=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function V(I){return Math.min(s.maxSamples,I.samples)}function Xt(I){const T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function St(I){const T=c.render.frame;m.get(I)!==T&&(m.set(I,T),I.update())}function bt(I,T){const j=I.colorSpace,pe=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Dn&&j!==qr&&(Et.getTransfer(j)===Ut?(pe!==di||ge!==Jn)&&tt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",j)),T}function Xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=W,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=B,this.setTextureCube=Y,this.rebindTextures=Zt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function M1(o,e){function t(i,s=qr){let a;const c=Et.getTransfer(s);if(i===Jn)return o.UNSIGNED_BYTE;if(i===ah)return o.UNSIGNED_SHORT_4_4_4_4;if(i===lh)return o.UNSIGNED_SHORT_5_5_5_1;if(i===W0)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===X0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===H0)return o.BYTE;if(i===G0)return o.SHORT;if(i===Aa)return o.UNSIGNED_SHORT;if(i===oh)return o.INT;if(i===Wi)return o.UNSIGNED_INT;if(i===fi)return o.FLOAT;if(i===mr)return o.HALF_FLOAT;if(i===j0)return o.ALPHA;if(i===q0)return o.RGB;if(i===di)return o.RGBA;if(i===gr)return o.DEPTH_COMPONENT;if(i===Ss)return o.DEPTH_STENCIL;if(i===ch)return o.RED;if(i===uh)return o.RED_INTEGER;if(i===_o)return o.RG;if(i===fh)return o.RG_INTEGER;if(i===dh)return o.RGBA_INTEGER;if(i===xc||i===yc||i===Sc||i===Mc)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===xc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===xc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===_d||i===vd||i===xd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===gd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yd||i===Sd||i===Md||i===Ed||i===Td||i===wd||i===Ad)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===yd||i===Sd)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Md)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ed)return a.COMPRESSED_R11_EAC;if(i===Td)return a.COMPRESSED_SIGNED_R11_EAC;if(i===wd)return a.COMPRESSED_RG11_EAC;if(i===Ad)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bd||i===Rd||i===Cd||i===Pd||i===Ld||i===Id||i===Nd||i===Dd||i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===bd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ld)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Id)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vd||i===Hd||i===Gd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Vd)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wd||i===Xd||i===jd||i===qd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Wd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const E1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class w1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new o_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ji({vertexShader:E1,fragmentShader:T1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new Da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class A1 extends Eo{constructor(e,t){super();const i=this;let s=null,a=1,c=null,f="local-floor",d=1,h=null,m=null,_=null,g=null,v=null,M=null;const E=typeof XRWebGLBinding<"u",y=new w1,S={},R=t.getContextAttributes();let L=null,C=null;const O=[],D=[],k=new Tt;let w=null;const P=new In;P.viewport=new Wt;const ae=new In;ae.viewport=new Wt;const F=[P,ae],W=new CS;let X=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=O[ee];return he===void 0&&(he=new Cf,O[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=O[ee];return he===void 0&&(he=new Cf,O[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=O[ee];return he===void 0&&(he=new Cf,O[ee]=he),he.getHandSpace()};function q(ee){const he=D.indexOf(ee.inputSource);if(he===-1)return;const ce=O[he];ce!==void 0&&(ce.update(ee.inputSource,ee.frame,h||c),ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function $(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",B);for(let ee=0;ee<O.length;ee++){const he=D[ee];he!==null&&(D[ee]=null,O[ee].disconnect(he))}X=null,ne=null,y.reset();for(const ee in S)delete S[ee];e.setRenderTarget(L),v=null,g=null,_=null,s=null,C=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){a=ee,i.isPresenting===!0&&tt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){f=ee,i.isPresenting===!0&&tt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ee){h=ee},this.getBaseLayer=function(){return g!==null?g:v},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",$),s.addEventListener("inputsourceschange",B),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ce=null,Le=null;R.depth&&(Le=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=R.stencil?Ss:gr,Ce=R.stencil?ba:Wi);const Ye={colorFormat:t.RGBA8,depthFormat:Le,scaleFactor:a};_=this.getBinding(),g=_.createProjectionLayer(Ye),s.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Hi(g.textureWidth,g.textureHeight,{format:di,type:Jn,depthTexture:new Ia(g.textureWidth,g.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ce={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};v=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),C=new Hi(v.framebufferWidth,v.framebufferHeight,{format:di,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await s.requestReferenceSpace(f),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function B(ee){for(let he=0;he<ee.removed.length;he++){const ce=ee.removed[he],Ce=D.indexOf(ce);Ce>=0&&(D[Ce]=null,O[Ce].disconnect(ce))}for(let he=0;he<ee.added.length;he++){const ce=ee.added[he];let Ce=D.indexOf(ce);if(Ce===-1){for(let Ye=0;Ye<O.length;Ye++)if(Ye>=D.length){D.push(ce),Ce=Ye;break}else if(D[Ye]===null){D[Ye]=ce,Ce=Ye;break}if(Ce===-1)break}const Le=O[Ce];Le&&Le.connect(ce)}}const Y=new Q,Z=new Q;function se(ee,he,ce){Y.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(ce.matrixWorld);const Ce=Y.distanceTo(Z),Le=he.projectionMatrix.elements,Ye=ce.projectionMatrix.elements,Zt=Le[14]/(Le[10]-1),_t=Le[14]/(Le[10]+1),At=(Le[9]+1)/Le[5],It=(Le[9]-1)/Le[5],dt=(Le[8]-1)/Le[0],Vt=(Ye[8]+1)/Ye[0],V=Zt*dt,Xt=Zt*Vt,St=Ce/(-dt+Vt),bt=St*-dt;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(bt),ee.translateZ(St),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Le[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=Zt+St,I=_t+St,T=V-bt,j=Xt+(Ce-bt),pe=At*_t/I*Xe,ge=It*_t/I*Xe;ee.projectionMatrix.makePerspective(T,j,pe,ge,Xe,I),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function N(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let he=ee.near,ce=ee.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(ce=y.depthFar)),W.near=ae.near=P.near=he,W.far=ae.far=P.far=ce,(X!==W.near||ne!==W.far)&&(s.updateRenderState({depthNear:W.near,depthFar:W.far}),X=W.near,ne=W.far),W.layers.mask=ee.layers.mask|6,P.layers.mask=W.layers.mask&-5,ae.layers.mask=W.layers.mask&-3;const Ce=ee.parent,Le=W.cameras;N(W,Ce);for(let Ye=0;Ye<Le.length;Ye++)N(Le[Ye],Ce);Le.length===2?se(W,P,ae):W.projectionMatrix.copy(P.projectionMatrix),J(ee,W,Ce)};function J(ee,he,ce){ce===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(ce.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=vo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(g===null&&v===null))return d},this.setFoveation=function(ee){d=ee,g!==null&&(g.fixedFoveation=ee),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=ee)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(W)},this.getCameraTexture=function(ee){return S[ee]};let Re=null;function _e(ee,he){if(m=he.getViewerPose(h||c),M=he,m!==null){const ce=m.views;v!==null&&(e.setRenderTargetFramebuffer(C,v.framebuffer),e.setRenderTarget(C));let Ce=!1;ce.length!==W.cameras.length&&(W.cameras.length=0,Ce=!0);for(let _t=0;_t<ce.length;_t++){const At=ce[_t];let It=null;if(v!==null)It=v.getViewport(At);else{const Vt=_.getViewSubImage(g,At);It=Vt.viewport,_t===0&&(e.setRenderTargetTextures(C,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(C))}let dt=F[_t];dt===void 0&&(dt=new In,dt.layers.enable(_t),dt.viewport=new Wt,F[_t]=dt),dt.matrix.fromArray(At.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(At.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(It.x,It.y,It.width,It.height),_t===0&&(W.matrix.copy(dt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Ce===!0&&W.cameras.push(dt)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){_=i.getBinding();const _t=_.getDepthInformation(ce[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,s.renderState)}if(Le&&Le.includes("camera-access")&&E){e.state.unbindTexture(),_=i.getBinding();for(let _t=0;_t<ce.length;_t++){const At=ce[_t].camera;if(At){let It=S[At];It||(It=new o_,S[At]=It);const dt=_.getCameraImage(At);It.sourceTexture=dt}}}}for(let ce=0;ce<O.length;ce++){const Ce=D[ce],Le=O[ce];Ce!==null&&Le!==void 0&&Le.update(Ce,he,h||c)}Re&&Re(ee,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),M=null}const De=new h_;De.setAnimationLoop(_e),this.setAnimationLoop=function(ee){Re=ee},this.dispose=function(){}}}const gs=new Xi,b1=new gt;function R1(o,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,a_(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,R,L,C){S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),_(y,S)):S.isMeshPhongMaterial?(a(y,S),m(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),g(y,S),S.isMeshPhysicalMaterial&&v(y,S,C)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),E(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,R,L):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Gn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Gn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),L=R.envMap,C=R.envMapRotation;L&&(y.envMap.value=L,gs.copy(C),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),y.envMapRotation.value.setFromMatrix4(b1.makeRotationFromEuler(gs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,R,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=L*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function m(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function v(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Gn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function E(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function C1(o,e,t,i){let s={},a={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,L){const C=L.program;i.uniformBlockBinding(R,C)}function h(R,L){let C=s[R.id];C===void 0&&(M(R),C=m(R),s[R.id]=C,R.addEventListener("dispose",y));const O=L.program;i.updateUBOMapping(R,O);const D=e.render.frame;a[R.id]!==D&&(g(R),a[R.id]=D)}function m(R){const L=_();R.__bindingPointIndex=L;const C=o.createBuffer(),O=R.__size,D=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,O,D),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,C),C}function _(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const L=s[R.id],C=R.uniforms,O=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let D=0,k=C.length;D<k;D++){const w=Array.isArray(C[D])?C[D]:[C[D]];for(let P=0,ae=w.length;P<ae;P++){const F=w[P];if(v(F,D,P,O)===!0){const W=F.__offset,X=Array.isArray(F.value)?F.value:[F.value];let ne=0;for(let q=0;q<X.length;q++){const $=X[q],B=E($);typeof $=="number"||typeof $=="boolean"?(F.__data[0]=$,o.bufferSubData(o.UNIFORM_BUFFER,W+ne,F.__data)):$.isMatrix3?(F.__data[0]=$.elements[0],F.__data[1]=$.elements[1],F.__data[2]=$.elements[2],F.__data[3]=0,F.__data[4]=$.elements[3],F.__data[5]=$.elements[4],F.__data[6]=$.elements[5],F.__data[7]=0,F.__data[8]=$.elements[6],F.__data[9]=$.elements[7],F.__data[10]=$.elements[8],F.__data[11]=0):($.toArray(F.__data,ne),ne+=B.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function v(R,L,C,O){const D=R.value,k=L+"_"+C;if(O[k]===void 0)return typeof D=="number"||typeof D=="boolean"?O[k]=D:O[k]=D.clone(),!0;{const w=O[k];if(typeof D=="number"||typeof D=="boolean"){if(w!==D)return O[k]=D,!0}else if(w.equals(D)===!1)return w.copy(D),!0}return!1}function M(R){const L=R.uniforms;let C=0;const O=16;for(let k=0,w=L.length;k<w;k++){const P=Array.isArray(L[k])?L[k]:[L[k]];for(let ae=0,F=P.length;ae<F;ae++){const W=P[ae],X=Array.isArray(W.value)?W.value:[W.value];for(let ne=0,q=X.length;ne<q;ne++){const $=X[ne],B=E($),Y=C%O,Z=Y%B.boundary,se=Y+Z;C+=Z,se!==0&&O-se<B.storage&&(C+=O-se),W.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=C,C+=B.storage}}}const D=C%O;return D>0&&(C+=O-D),R.__size=C,R.__cache={},this}function E(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?tt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):tt("WebGLRenderer: Unsupported uniform value type.",R),L}function y(R){const L=R.target;L.removeEventListener("dispose",y);const C=c.indexOf(L.__bindingPointIndex);c.splice(C,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete a[L.id]}function S(){for(const R in s)o.deleteBuffer(s[R]);c=[],s={},a={}}return{bind:d,update:h,dispose:S}}const P1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function L1(){return Di===null&&(Di=new vh(P1,16,16,_o,mr),Di.name="DFG_LUT",Di.minFilter=sn,Di.magFilter=sn,Di.wrapS=Oi,Di.wrapT=Oi,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class I1{constructor(e={}){const{canvas:t=ty(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:v=Jn}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const E=v,y=new Set([dh,fh,uh]),S=new Set([Jn,Wi,Aa,ba,ah,lh]),R=new Uint32Array(4),L=new Int32Array(4);let C=null,O=null;const D=[],k=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let ae=!1;this._outputColorSpace=gn;let F=0,W=0,X=null,ne=-1,q=null;const $=new Wt,B=new Wt;let Y=null;const Z=new ut(0);let se=0,N=t.width,J=t.height,Re=1,_e=null,De=null;const ee=new Wt(0,0,N,J),he=new Wt(0,0,N,J);let ce=!1;const Ce=new yh;let Le=!1,Ye=!1;const Zt=new gt,_t=new Q,At=new Wt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Vt(){return X===null?Re:1}let V=i;function Xt(b,K){return t.getContext(b,K)}try{const b={alpha:!0,depth:s,stencil:a,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sh}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),V===null){const K="webgl2";if(V=Xt(K,b),V===null)throw Xt(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ot("WebGLRenderer: "+b.message),b}let St,bt,Xe,I,T,j,pe,ge,fe,Ve,Ae,$e,st,Se,we,je,He,Ue,ft,H,be,Ee,Fe;function Me(){St=new IT(V),St.init(),be=new M1(V,St),bt=new TT(V,St,e,be),Xe=new y1(V,St),bt.reversedDepthBuffer&&g&&Xe.buffers.depth.setReversed(!0),I=new UT(V),T=new o1,j=new S1(V,St,Xe,T,bt,be,I),pe=new LT(P),ge=new zS(V),Ee=new MT(V,ge),fe=new NT(V,ge,I,Ee),Ve=new OT(V,fe,ge,Ee,I),Ue=new FT(V,bt,j),we=new wT(T),Ae=new s1(P,pe,St,bt,Ee,we),$e=new R1(P,T),st=new l1,Se=new p1(St),He=new ST(P,pe,Xe,Ve,M,d),je=new x1(P,Ve,bt),Fe=new C1(V,I,bt,Xe),ft=new ET(V,St,I),H=new DT(V,St,I),I.programs=Ae.programs,P.capabilities=bt,P.extensions=St,P.properties=T,P.renderLists=st,P.shadowMap=je,P.state=Xe,P.info=I}Me(),E!==Jn&&(w=new BT(E,t.width,t.height,s,a));const de=new A1(P,V);this.xr=de,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=St.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=St.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(b){b!==void 0&&(Re=b,this.setSize(N,J,!1))},this.getSize=function(b){return b.set(N,J)},this.setSize=function(b,K,ue=!0){if(de.isPresenting){tt("WebGLRenderer: Can't change size while VR device is presenting.");return}N=b,J=K,t.width=Math.floor(b*Re),t.height=Math.floor(K*Re),ue===!0&&(t.style.width=b+"px",t.style.height=K+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,K)},this.getDrawingBufferSize=function(b){return b.set(N*Re,J*Re).floor()},this.setDrawingBufferSize=function(b,K,ue){N=b,J=K,Re=ue,t.width=Math.floor(b*ue),t.height=Math.floor(K*ue),this.setViewport(0,0,b,K)},this.setEffects=function(b){if(E===Jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let K=0;K<b.length;K++)if(b[K].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy($)},this.getViewport=function(b){return b.copy(ee)},this.setViewport=function(b,K,ue,oe){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,K,ue,oe),Xe.viewport($.copy(ee).multiplyScalar(Re).round())},this.getScissor=function(b){return b.copy(he)},this.setScissor=function(b,K,ue,oe){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,K,ue,oe),Xe.scissor(B.copy(he).multiplyScalar(Re).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(b){Xe.setScissorTest(ce=b)},this.setOpaqueSort=function(b){_e=b},this.setTransparentSort=function(b){De=b},this.getClearColor=function(b){return b.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(b=!0,K=!0,ue=!0){let oe=0;if(b){let ie=!1;if(X!==null){const Ie=X.texture.format;ie=y.has(Ie)}if(ie){const Ie=X.texture.type,Be=S.has(Ie),Pe=He.getClearColor(),Oe=He.getClearAlpha(),Je=Pe.r,nt=Pe.g,ht=Pe.b;Be?(R[0]=Je,R[1]=nt,R[2]=ht,R[3]=Oe,V.clearBufferuiv(V.COLOR,0,R)):(L[0]=Je,L[1]=nt,L[2]=ht,L[3]=Oe,V.clearBufferiv(V.COLOR,0,L))}else oe|=V.COLOR_BUFFER_BIT}K&&(oe|=V.DEPTH_BUFFER_BIT),ue&&(oe|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&V.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),He.dispose(),st.dispose(),Se.dispose(),T.dispose(),pe.dispose(),Ve.dispose(),Ee.dispose(),Fe.dispose(),Ae.dispose(),de.dispose(),de.removeEventListener("sessionstart",xr),de.removeEventListener("sessionend",$r),ti.stop()};function Ge(b){b.preventDefault(),bc("WebGLRenderer: Context Lost."),ae=!0}function at(){bc("WebGLRenderer: Context Restored."),ae=!1;const b=I.autoReset,K=je.enabled,ue=je.autoUpdate,oe=je.needsUpdate,ie=je.type;Me(),I.autoReset=b,je.enabled=K,je.autoUpdate=ue,je.needsUpdate=oe,je.type=ie}function Dt(b){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Rt(b){const K=b.target;K.removeEventListener("dispose",Rt),ei(K)}function ei(b){An(b),T.remove(b)}function An(b){const K=T.get(b).programs;K!==void 0&&(K.forEach(function(ue){Ae.releaseProgram(ue)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,K,ue,oe,ie,Ie){K===null&&(K=It);const Be=ie.isMesh&&ie.matrixWorld.determinant()<0,Pe=ka(b,K,ue,oe,ie);Xe.setMaterial(oe,Be);let Oe=ue.index,Je=1;if(oe.wireframe===!0){if(Oe=fe.getWireframeAttribute(ue),Oe===void 0)return;Je=2}const nt=ue.drawRange,ht=ue.attributes.position;let et=nt.start*Je,Nt=(nt.start+nt.count)*Je;Ie!==null&&(et=Math.max(et,Ie.start*Je),Nt=Math.min(Nt,(Ie.start+Ie.count)*Je)),Oe!==null?(et=Math.max(et,0),Nt=Math.min(Nt,Oe.count)):ht!=null&&(et=Math.max(et,0),Nt=Math.min(Nt,ht.count));const Bt=Nt-et;if(Bt<0||Bt===1/0)return;Ee.setup(ie,oe,Pe,ue,Oe);let kt,wt=ft;if(Oe!==null&&(kt=ge.get(Oe),wt=H,wt.setIndex(kt)),ie.isMesh)oe.wireframe===!0?(Xe.setLineWidth(oe.wireframeLinewidth*Vt()),wt.setMode(V.LINES)):wt.setMode(V.TRIANGLES);else if(ie.isLine){let Jt=oe.linewidth;Jt===void 0&&(Jt=1),Xe.setLineWidth(Jt*Vt()),ie.isLineSegments?wt.setMode(V.LINES):ie.isLineLoop?wt.setMode(V.LINE_LOOP):wt.setMode(V.LINE_STRIP)}else ie.isPoints?wt.setMode(V.POINTS):ie.isSprite&&wt.setMode(V.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)Rc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))wt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Jt=ie._multiDrawStarts,Ke=ie._multiDrawCounts,bn=ie._multiDrawCount,Mt=Oe?ge.get(Oe).bytesPerElement:1,Un=T.get(oe).currentProgram.getUniforms();for(let Fn=0;Fn<bn;Fn++)Un.setValue(V,"_gl_DrawID",Fn),wt.render(Jt[Fn]/Mt,Ke[Fn])}else if(ie.isInstancedMesh)wt.renderInstances(et,Bt,ie.count);else if(ue.isInstancedBufferGeometry){const Jt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ke=Math.min(ue.instanceCount,Jt);wt.renderInstances(et,Bt,Ke)}else wt.render(et,Bt)};function Ts(b,K,ue){b.transparent===!0&&b.side===Ei&&b.forceSinglePass===!1?(b.side=Gn,b.needsUpdate=!0,Jr(b,K,ue),b.side=pr,b.needsUpdate=!0,Jr(b,K,ue),b.side=Ei):Jr(b,K,ue)}this.compile=function(b,K,ue=null){ue===null&&(ue=b),O=Se.get(ue),O.init(K),k.push(O),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(O.pushLight(ie),ie.castShadow&&O.pushShadow(ie))}),b!==ue&&b.traverseVisible(function(ie){ie.isLight&&ie.layers.test(K.layers)&&(O.pushLight(ie),ie.castShadow&&O.pushShadow(ie))}),O.setupLights();const oe=new Set;return b.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ie=ie.material;if(Ie)if(Array.isArray(Ie))for(let Be=0;Be<Ie.length;Be++){const Pe=Ie[Be];Ts(Pe,ue,ie),oe.add(Pe)}else Ts(Ie,ue,ie),oe.add(Ie)}),O=k.pop(),oe},this.compileAsync=function(b,K,ue=null){const oe=this.compile(b,K,ue);return new Promise(ie=>{function Ie(){if(oe.forEach(function(Be){T.get(Be).currentProgram.isReady()&&oe.delete(Be)}),oe.size===0){ie(b);return}setTimeout(Ie,10)}St.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Ki=null;function Oc(b){Ki&&Ki(b)}function xr(){ti.stop()}function $r(){ti.start()}const ti=new h_;ti.setAnimationLoop(Oc),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){Ki=b,de.setAnimationLoop(b),b===null?ti.stop():ti.start()},de.addEventListener("sessionstart",xr),de.addEventListener("sessionend",$r),this.render=function(b,K){if(K!==void 0&&K.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ae===!0)return;const ue=de.enabled===!0&&de.isPresenting===!0,oe=w!==null&&(X===null||ue)&&w.begin(P,X);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(K),K=de.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,K,X),O=Se.get(b,k.length),O.init(K),k.push(O),Zt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Ce.setFromProjectionMatrix(Zt,Bi,K.reversedDepth),Ye=this.localClippingEnabled,Le=we.init(this.clippingPlanes,Ye),C=st.get(b,D.length),C.init(),D.push(C),de.enabled===!0&&de.isPresenting===!0){const Be=P.xr.getDepthSensingMesh();Be!==null&&Zr(Be,K,-1/0,P.sortObjects)}Zr(b,K,0,P.sortObjects),C.finish(),P.sortObjects===!0&&C.sort(_e,De),dt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,dt&&He.addToRenderList(C,b),this.info.render.frame++,Le===!0&&we.beginShadows();const ie=O.state.shadowsArray;if(je.render(ie,b,K),Le===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&w.hasRenderPass())===!1){const Be=C.opaque,Pe=C.transmissive;if(O.setupLights(),K.isArrayCamera){const Oe=K.cameras;if(Pe.length>0)for(let Je=0,nt=Oe.length;Je<nt;Je++){const ht=Oe[Je];Fa(Be,Pe,b,ht)}dt&&He.render(b);for(let Je=0,nt=Oe.length;Je<nt;Je++){const ht=Oe[Je];Ua(C,b,ht,ht.viewport)}}else Pe.length>0&&Fa(Be,Pe,b,K),dt&&He.render(b),Ua(C,b,K)}X!==null&&W===0&&(j.updateMultisampleRenderTarget(X),j.updateRenderTargetMipmap(X)),oe&&w.end(P),b.isScene===!0&&b.onAfterRender(P,b,K),Ee.resetDefaultState(),ne=-1,q=null,k.pop(),k.length>0?(O=k[k.length-1],Le===!0&&we.setGlobalState(P.clippingPlanes,O.state.camera)):O=null,D.pop(),D.length>0?C=D[D.length-1]:C=null};function Zr(b,K,ue,oe){if(b.visible===!1)return;if(b.layers.test(K.layers)){if(b.isGroup)ue=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(K);else if(b.isLight)O.pushLight(b),b.castShadow&&O.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ce.intersectsSprite(b)){oe&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Zt);const Be=Ve.update(b),Pe=b.material;Pe.visible&&C.push(b,Be,Pe,ue,At.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ce.intersectsObject(b))){const Be=Ve.update(b),Pe=b.material;if(oe&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),At.copy(Be.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4(Zt)),Array.isArray(Pe)){const Oe=Be.groups;for(let Je=0,nt=Oe.length;Je<nt;Je++){const ht=Oe[Je],et=Pe[ht.materialIndex];et&&et.visible&&C.push(b,Be,et,ue,At.z,ht)}}else Pe.visible&&C.push(b,Be,Pe,ue,At.z,null)}}const Ie=b.children;for(let Be=0,Pe=Ie.length;Be<Pe;Be++)Zr(Ie[Be],K,ue,oe)}function Ua(b,K,ue,oe){const{opaque:ie,transmissive:Ie,transparent:Be}=b;O.setupLightsView(ue),Le===!0&&we.setGlobalState(P.clippingPlanes,ue),oe&&Xe.viewport($.copy(oe)),ie.length>0&&ws(ie,K,ue),Ie.length>0&&ws(Ie,K,ue),Be.length>0&&ws(Be,K,ue),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Fa(b,K,ue,oe){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[oe.id]===void 0){const et=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[oe.id]=new Hi(1,1,{generateMipmaps:!0,type:et?mr:Jn,minFilter:ki,samples:Math.max(4,bt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Ie=O.state.transmissionRenderTarget[oe.id],Be=oe.viewport||$;Ie.setSize(Be.z*P.transmissionResolutionScale,Be.w*P.transmissionResolutionScale);const Pe=P.getRenderTarget(),Oe=P.getActiveCubeFace(),Je=P.getActiveMipmapLevel();P.setRenderTarget(Ie),P.getClearColor(Z),se=P.getClearAlpha(),se<1&&P.setClearColor(16777215,.5),P.clear(),dt&&He.render(ue);const nt=P.toneMapping;P.toneMapping=Vi;const ht=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),O.setupLightsView(oe),Le===!0&&we.setGlobalState(P.clippingPlanes,oe),ws(b,ue,oe),j.updateMultisampleRenderTarget(Ie),j.updateRenderTargetMipmap(Ie),St.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Nt=0,Bt=K.length;Nt<Bt;Nt++){const kt=K[Nt],{object:wt,geometry:Jt,material:Ke,group:bn}=kt;if(Ke.side===Ei&&wt.layers.test(oe.layers)){const Mt=Ke.side;Ke.side=Gn,Ke.needsUpdate=!0,Ri(wt,ue,oe,Jt,Ke,bn),Ke.side=Mt,Ke.needsUpdate=!0,et=!0}}et===!0&&(j.updateMultisampleRenderTarget(Ie),j.updateRenderTargetMipmap(Ie))}P.setRenderTarget(Pe,Oe,Je),P.setClearColor(Z,se),ht!==void 0&&(oe.viewport=ht),P.toneMapping=nt}function ws(b,K,ue){const oe=K.isScene===!0?K.overrideMaterial:null;for(let ie=0,Ie=b.length;ie<Ie;ie++){const Be=b[ie],{object:Pe,geometry:Oe,group:Je}=Be;let nt=Be.material;nt.allowOverride===!0&&oe!==null&&(nt=oe),Pe.layers.test(ue.layers)&&Ri(Pe,K,ue,Oe,nt,Je)}}function Ri(b,K,ue,oe,ie,Ie){b.onBeforeRender(P,K,ue,oe,ie,Ie),b.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ie.onBeforeRender(P,K,ue,oe,b,Ie),ie.transparent===!0&&ie.side===Ei&&ie.forceSinglePass===!1?(ie.side=Gn,ie.needsUpdate=!0,P.renderBufferDirect(ue,K,oe,ie,b,Ie),ie.side=pr,ie.needsUpdate=!0,P.renderBufferDirect(ue,K,oe,ie,b,Ie),ie.side=Ei):P.renderBufferDirect(ue,K,oe,ie,b,Ie),b.onAfterRender(P,K,ue,oe,ie,Ie)}function Jr(b,K,ue){K.isScene!==!0&&(K=It);const oe=T.get(b),ie=O.state.lights,Ie=O.state.shadowsArray,Be=ie.state.version,Pe=Ae.getParameters(b,ie.state,Ie,K,ue),Oe=Ae.getProgramCacheKey(Pe);let Je=oe.programs;oe.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?K.environment:null,oe.fog=K.fog;const nt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;oe.envMap=pe.get(b.envMap||oe.environment,nt),oe.envMapRotation=oe.environment!==null&&b.envMap===null?K.environmentRotation:b.envMapRotation,Je===void 0&&(b.addEventListener("dispose",Rt),Je=new Map,oe.programs=Je);let ht=Je.get(Oe);if(ht!==void 0){if(oe.currentProgram===ht&&oe.lightsStateVersion===Be)return Oa(b,Pe),ht}else Pe.uniforms=Ae.getUniforms(b),b.onBeforeCompile(Pe,P),ht=Ae.acquireProgram(Pe,Oe),Je.set(Oe,ht),oe.uniforms=Pe.uniforms;const et=oe.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(et.clippingPlanes=we.uniform),Oa(b,Pe),oe.needsLights=za(b),oe.lightsStateVersion=Be,oe.needsLights&&(et.ambientLightColor.value=ie.state.ambient,et.lightProbe.value=ie.state.probe,et.directionalLights.value=ie.state.directional,et.directionalLightShadows.value=ie.state.directionalShadow,et.spotLights.value=ie.state.spot,et.spotLightShadows.value=ie.state.spotShadow,et.rectAreaLights.value=ie.state.rectArea,et.ltc_1.value=ie.state.rectAreaLTC1,et.ltc_2.value=ie.state.rectAreaLTC2,et.pointLights.value=ie.state.point,et.pointLightShadows.value=ie.state.pointShadow,et.hemisphereLights.value=ie.state.hemi,et.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,et.spotLightMatrix.value=ie.state.spotLightMatrix,et.spotLightMap.value=ie.state.spotLightMap,et.pointShadowMatrix.value=ie.state.pointShadowMatrix),oe.currentProgram=ht,oe.uniformsList=null,ht}function Po(b){if(b.uniformsList===null){const K=b.currentProgram.getUniforms();b.uniformsList=Ec.seqWithValue(K.seq,b.uniforms)}return b.uniformsList}function Oa(b,K){const ue=T.get(b);ue.outputColorSpace=K.outputColorSpace,ue.batching=K.batching,ue.batchingColor=K.batchingColor,ue.instancing=K.instancing,ue.instancingColor=K.instancingColor,ue.instancingMorph=K.instancingMorph,ue.skinning=K.skinning,ue.morphTargets=K.morphTargets,ue.morphNormals=K.morphNormals,ue.morphColors=K.morphColors,ue.morphTargetsCount=K.morphTargetsCount,ue.numClippingPlanes=K.numClippingPlanes,ue.numIntersection=K.numClipIntersection,ue.vertexAlphas=K.vertexAlphas,ue.vertexTangents=K.vertexTangents,ue.toneMapping=K.toneMapping}function ka(b,K,ue,oe,ie){K.isScene!==!0&&(K=It),j.resetTextureUnits();const Ie=K.fog,Be=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?K.environment:null,Pe=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Dn,Oe=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Je=pe.get(oe.envMap||Be,Oe),nt=oe.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ht=!!ue.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),et=!!ue.morphAttributes.position,Nt=!!ue.morphAttributes.normal,Bt=!!ue.morphAttributes.color;let kt=Vi;oe.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(kt=P.toneMapping);const wt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Jt=wt!==void 0?wt.length:0,Ke=T.get(oe),bn=O.state.lights;if(Le===!0&&(Ye===!0||b!==q)){const Qt=b===q&&oe.id===ne;we.setState(oe,b,Qt)}let Mt=!1;oe.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==bn.state.version||Ke.outputColorSpace!==Pe||ie.isBatchedMesh&&Ke.batching===!1||!ie.isBatchedMesh&&Ke.batching===!0||ie.isBatchedMesh&&Ke.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ke.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ke.instancing===!1||!ie.isInstancedMesh&&Ke.instancing===!0||ie.isSkinnedMesh&&Ke.skinning===!1||!ie.isSkinnedMesh&&Ke.skinning===!0||ie.isInstancedMesh&&Ke.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ke.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ke.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ke.instancingMorph===!1&&ie.morphTexture!==null||Ke.envMap!==Je||oe.fog===!0&&Ke.fog!==Ie||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==we.numPlanes||Ke.numIntersection!==we.numIntersection)||Ke.vertexAlphas!==nt||Ke.vertexTangents!==ht||Ke.morphTargets!==et||Ke.morphNormals!==Nt||Ke.morphColors!==Bt||Ke.toneMapping!==kt||Ke.morphTargetsCount!==Jt)&&(Mt=!0):(Mt=!0,Ke.__version=oe.version);let Un=Ke.currentProgram;Mt===!0&&(Un=Jr(oe,K,ie));let Fn=!1,Xn=!1,yr=!1;const Lt=Un.getUniforms(),lt=Ke.uniforms;if(Xe.useProgram(Un.program)&&(Fn=!0,Xn=!0,yr=!0),oe.id!==ne&&(ne=oe.id,Xn=!0),Fn||q!==b){Xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Lt.setValue(V,"projectionMatrix",b.projectionMatrix),Lt.setValue(V,"viewMatrix",b.matrixWorldInverse);const ni=Lt.map.cameraPosition;ni!==void 0&&ni.setValue(V,_t.setFromMatrixPosition(b.matrixWorld)),bt.logarithmicDepthBuffer&&Lt.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&Lt.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),q!==b&&(q=b,Xn=!0,yr=!0)}if(Ke.needsLights&&(bn.state.directionalShadowMap.length>0&&Lt.setValue(V,"directionalShadowMap",bn.state.directionalShadowMap,j),bn.state.spotShadowMap.length>0&&Lt.setValue(V,"spotShadowMap",bn.state.spotShadowMap,j),bn.state.pointShadowMap.length>0&&Lt.setValue(V,"pointShadowMap",bn.state.pointShadowMap,j)),ie.isSkinnedMesh){Lt.setOptional(V,ie,"bindMatrix"),Lt.setOptional(V,ie,"bindMatrixInverse");const Qt=ie.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Lt.setValue(V,"boneTexture",Qt.boneTexture,j))}ie.isBatchedMesh&&(Lt.setOptional(V,ie,"batchingTexture"),Lt.setValue(V,"batchingTexture",ie._matricesTexture,j),Lt.setOptional(V,ie,"batchingIdTexture"),Lt.setValue(V,"batchingIdTexture",ie._indirectTexture,j),Lt.setOptional(V,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Lt.setValue(V,"batchingColorTexture",ie._colorsTexture,j));const hi=ue.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&Ue.update(ie,ue,Un),(Xn||Ke.receiveShadow!==ie.receiveShadow)&&(Ke.receiveShadow=ie.receiveShadow,Lt.setValue(V,"receiveShadow",ie.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&K.environment!==null&&(lt.envMapIntensity.value=K.environmentIntensity),lt.dfgLUT!==void 0&&(lt.dfgLUT.value=L1()),Xn&&(Lt.setValue(V,"toneMappingExposure",P.toneMappingExposure),Ke.needsLights&&Ba(lt,yr),Ie&&oe.fog===!0&&$e.refreshFogUniforms(lt,Ie),$e.refreshMaterialUniforms(lt,oe,Re,J,O.state.transmissionRenderTarget[b.id]),Ec.upload(V,Po(Ke),lt,j)),oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ec.upload(V,Po(Ke),lt,j),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&Lt.setValue(V,"center",ie.center),Lt.setValue(V,"modelViewMatrix",ie.modelViewMatrix),Lt.setValue(V,"normalMatrix",ie.normalMatrix),Lt.setValue(V,"modelMatrix",ie.matrixWorld),oe.isShaderMaterial||oe.isRawShaderMaterial){const Qt=oe.uniformsGroups;for(let ni=0,$i=Qt.length;ni<$i;ni++){const Lo=Qt[ni];Fe.update(Lo,Un),Fe.bind(Lo,Un)}}return Un}function Ba(b,K){b.ambientLightColor.needsUpdate=K,b.lightProbe.needsUpdate=K,b.directionalLights.needsUpdate=K,b.directionalLightShadows.needsUpdate=K,b.pointLights.needsUpdate=K,b.pointLightShadows.needsUpdate=K,b.spotLights.needsUpdate=K,b.spotLightShadows.needsUpdate=K,b.rectAreaLights.needsUpdate=K,b.hemisphereLights.needsUpdate=K}function za(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,K,ue){const oe=T.get(b);oe.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),T.get(b.texture).__webglTexture=K,T.get(b.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ue,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,K){const ue=T.get(b);ue.__webglFramebuffer=K,ue.__useDefaultFramebuffer=K===void 0};const Va=V.createFramebuffer();this.setRenderTarget=function(b,K=0,ue=0){X=b,F=K,W=ue;let oe=null,ie=!1,Ie=!1;if(b){const Pe=T.get(b);if(Pe.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(V.FRAMEBUFFER,Pe.__webglFramebuffer),$.copy(b.viewport),B.copy(b.scissor),Y=b.scissorTest,Xe.viewport($),Xe.scissor(B),Xe.setScissorTest(Y),ne=-1;return}else if(Pe.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(Pe.__hasExternalTextures)j.rebindTextures(b,T.get(b.texture).__webglTexture,T.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const nt=b.depthTexture;if(Pe.__boundDepthTexture!==nt){if(nt!==null&&T.has(nt)&&(b.width!==nt.image.width||b.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}const Oe=b.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ie=!0);const Je=T.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Je[K])?oe=Je[K][ue]:oe=Je[K],ie=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?oe=T.get(b).__webglMultisampledFramebuffer:Array.isArray(Je)?oe=Je[ue]:oe=Je,$.copy(b.viewport),B.copy(b.scissor),Y=b.scissorTest}else $.copy(ee).multiplyScalar(Re).floor(),B.copy(he).multiplyScalar(Re).floor(),Y=ce;if(ue!==0&&(oe=Va),Xe.bindFramebuffer(V.FRAMEBUFFER,oe)&&Xe.drawBuffers(b,oe),Xe.viewport($),Xe.scissor(B),Xe.setScissorTest(Y),ie){const Pe=T.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Pe.__webglTexture,ue)}else if(Ie){const Pe=K;for(let Oe=0;Oe<b.textures.length;Oe++){const Je=T.get(b.textures[Oe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Oe,Je.__webglTexture,ue,Pe)}}else if(b!==null&&ue!==0){const Pe=T.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pe.__webglTexture,ue)}ne=-1},this.readRenderTargetPixels=function(b,K,ue,oe,ie,Ie,Be,Pe=0){if(!(b&&b.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Be!==void 0&&(Oe=Oe[Be]),Oe){Xe.bindFramebuffer(V.FRAMEBUFFER,Oe);try{const Je=b.textures[Pe],nt=Je.format,ht=Je.type;if(b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pe),!bt.textureFormatReadable(nt)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(ht)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=b.width-oe&&ue>=0&&ue<=b.height-ie&&V.readPixels(K,ue,oe,ie,be.convert(nt),be.convert(ht),Ie)}finally{const Je=X!==null?T.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(V.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(b,K,ue,oe,ie,Ie,Be,Pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Be!==void 0&&(Oe=Oe[Be]),Oe)if(K>=0&&K<=b.width-oe&&ue>=0&&ue<=b.height-ie){Xe.bindFramebuffer(V.FRAMEBUFFER,Oe);const Je=b.textures[Pe],nt=Je.format,ht=Je.type;if(b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Pe),!bt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.bufferData(V.PIXEL_PACK_BUFFER,Ie.byteLength,V.STREAM_READ),V.readPixels(K,ue,oe,ie,be.convert(nt),be.convert(ht),0);const Nt=X!==null?T.get(X).__webglFramebuffer:null;Xe.bindFramebuffer(V.FRAMEBUFFER,Nt);const Bt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ny(V,Bt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,et),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ie),V.deleteBuffer(et),V.deleteSync(Bt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,K=null,ue=0){const oe=Math.pow(2,-ue),ie=Math.floor(b.image.width*oe),Ie=Math.floor(b.image.height*oe),Be=K!==null?K.x:0,Pe=K!==null?K.y:0;j.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,ue,0,0,Be,Pe,ie,Ie),Xe.unbindTexture()};const kc=V.createFramebuffer(),Bc=V.createFramebuffer();this.copyTextureToTexture=function(b,K,ue=null,oe=null,ie=0,Ie=0){let Be,Pe,Oe,Je,nt,ht,et,Nt,Bt;const kt=b.isCompressedTexture?b.mipmaps[Ie]:b.image;if(ue!==null)Be=ue.max.x-ue.min.x,Pe=ue.max.y-ue.min.y,Oe=ue.isBox3?ue.max.z-ue.min.z:1,Je=ue.min.x,nt=ue.min.y,ht=ue.isBox3?ue.min.z:0;else{const lt=Math.pow(2,-ie);Be=Math.floor(kt.width*lt),Pe=Math.floor(kt.height*lt),b.isDataArrayTexture?Oe=kt.depth:b.isData3DTexture?Oe=Math.floor(kt.depth*lt):Oe=1,Je=0,nt=0,ht=0}oe!==null?(et=oe.x,Nt=oe.y,Bt=oe.z):(et=0,Nt=0,Bt=0);const wt=be.convert(K.format),Jt=be.convert(K.type);let Ke;K.isData3DTexture?(j.setTexture3D(K,0),Ke=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(j.setTexture2DArray(K,0),Ke=V.TEXTURE_2D_ARRAY):(j.setTexture2D(K,0),Ke=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const bn=V.getParameter(V.UNPACK_ROW_LENGTH),Mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=V.getParameter(V.UNPACK_SKIP_PIXELS),Fn=V.getParameter(V.UNPACK_SKIP_ROWS),Xn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,kt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Je),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ht);const yr=b.isDataArrayTexture||b.isData3DTexture,Lt=K.isDataArrayTexture||K.isData3DTexture;if(b.isDepthTexture){const lt=T.get(b),hi=T.get(K),Qt=T.get(lt.__renderTarget),ni=T.get(hi.__renderTarget);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let $i=0;$i<Oe;$i++)yr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(b).__webglTexture,ie,ht+$i),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(K).__webglTexture,Ie,Bt+$i)),V.blitFramebuffer(Je,nt,Be,Pe,et,Nt,Be,Pe,V.DEPTH_BUFFER_BIT,V.NEAREST);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ie!==0||b.isRenderTargetTexture||T.has(b)){const lt=T.get(b),hi=T.get(K);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,kc),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Bc);for(let Qt=0;Qt<Oe;Qt++)yr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,lt.__webglTexture,ie,ht+Qt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,lt.__webglTexture,ie),Lt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hi.__webglTexture,Ie,Bt+Qt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hi.__webglTexture,Ie),ie!==0?V.blitFramebuffer(Je,nt,Be,Pe,et,Nt,Be,Pe,V.COLOR_BUFFER_BIT,V.NEAREST):Lt?V.copyTexSubImage3D(Ke,Ie,et,Nt,Bt+Qt,Je,nt,Be,Pe):V.copyTexSubImage2D(Ke,Ie,et,Nt,Je,nt,Be,Pe);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Lt?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(Ke,Ie,et,Nt,Bt,Be,Pe,Oe,wt,Jt,kt.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(Ke,Ie,et,Nt,Bt,Be,Pe,Oe,wt,kt.data):V.texSubImage3D(Ke,Ie,et,Nt,Bt,Be,Pe,Oe,wt,Jt,kt):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ie,et,Nt,Be,Pe,wt,Jt,kt.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ie,et,Nt,kt.width,kt.height,wt,kt.data):V.texSubImage2D(V.TEXTURE_2D,Ie,et,Nt,Be,Pe,wt,Jt,kt);V.pixelStorei(V.UNPACK_ROW_LENGTH,bn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),V.pixelStorei(V.UNPACK_SKIP_ROWS,Fn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Xn),Ie===0&&K.generateMipmaps&&V.generateMipmap(Ke),Xe.unbindTexture()},this.initRenderTarget=function(b){T.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),Xe.unbindTexture()},this.resetState=function(){F=0,W=0,X=null,Xe.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}function v0(o,e){if(e===Wx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Yd||e===Y0){let t=o.getIndex();if(t===null){const c=[],f=o.getAttribute("position");if(f!==void 0){for(let d=0;d<f.count;d++)c.push(d);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Yd)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}function N1(o){const e=new Map,t=new Map,i=o.clone();return x_(o,i,function(s,a){e.set(a,s),t.set(s,a)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const a=s,c=e.get(s),f=c.skeleton.bones;a.skeleton=c.skeleton.clone(),a.bindMatrix.copy(c.bindMatrix),a.skeleton.bones=f.map(function(d){return t.get(d)}),a.bind(a.skeleton,a.bindMatrix)}),i}function x_(o,e,t){t(o,e);for(let i=0;i<o.children.length;i++)x_(o.children[i],e.children[i],t)}class D1 extends Ro{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new B1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new Z1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new F1(t)}),this.register(function(t){return new x0(t,xt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new x0(t,xt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new J1(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=wa.extractUrlBase(e);c=wa.resolveURL(h,this.path)}else c=wa.extractUrlBase(e);this.manager.itemStart(e);const f=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},d=new u_(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{a.parse(h,c,function(m){t(m),a.manager.itemEnd(e)},f)}catch(m){f(m)}},i,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},f={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===y_){try{c[xt.KHR_BINARY_GLTF]=new Q1(e)}catch(_){s&&s(_);return}a=JSON.parse(c[xt.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new dA(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let m=0;m<this.pluginCallbacks.length;m++){const _=this.pluginCallbacks[m](h);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[_.name]=_,c[_.name]=!0}if(a.extensionsUsed)for(let m=0;m<a.extensionsUsed.length;++m){const _=a.extensionsUsed[m],g=a.extensionsRequired||[];switch(_){case xt.KHR_MATERIALS_UNLIT:c[_]=new O1;break;case xt.KHR_DRACO_MESH_COMPRESSION:c[_]=new eA(a,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:c[_]=new tA;break;case xt.KHR_MESH_QUANTIZATION:c[_]=new nA;break;default:g.indexOf(_)>=0&&f[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}h.setExtensions(c),h.setPlugins(f),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function U1(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}function tn(o,e,t){const i=o.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class F1{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const m=new ut(16777215);d.color!==void 0&&m.setRGB(d.color[0],d.color[1],d.color[2],Dn);const _=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new d_(m),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new TS(m),h.distance=_;break;case"spot":h=new MS(m),h.distance=_,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),Ui(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],f=(a.extensions&&a.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(d){return i._getNodeRef(t.cache,f,d)})}}class O1{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yr}extendParams(e,t,i){const s=[];e.color=new ut(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Dn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,gn))}return Promise.all(s)}}class k1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class B1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Tt(a,a)}return Promise.all(s)}}class z1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class V1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class H1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Dn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,gn)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class G1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class W1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const a=i.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(a[0],a[1],a[2],Dn),Promise.all(s)}}class X1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}}class j1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const a=i.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(a[0],a[1],a[2],Dn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,gn)),Promise.all(s)}}class q1{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class Y1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class K1{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class $1{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],f=s.images[c.source];let d=i.textureLoader;if(f.uri){const h=i.options.manager.getHandler(f.uri);h!==null&&(d=h)}return i.loadTextureImage(e,c.source,d)}}class Z1{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],f=s.images[c.source];let d=i.textureLoader;if(f.uri){const h=i.options.manager.getHandler(f.uri);h!==null&&(d=h)}return i.loadTextureImage(e,c.source,d)}}class x0{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(f){const d=s.byteOffset||0,h=s.byteLength||0,m=s.count,_=s.byteStride,g=new Uint8Array(f,d,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(m,_,g,s.mode,s.filter).then(function(v){return v.buffer}):c.ready.then(function(){const v=new ArrayBuffer(m*_);return c.decodeGltfBuffer(new Uint8Array(v),m,_,g,s.mode,s.filter),v})})}else return null}}class J1{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==ui.TRIANGLES&&h.mode!==ui.TRIANGLE_STRIP&&h.mode!==ui.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,f=[],d={};for(const h in c)f.push(this.parser.getDependency("accessor",c[h]).then(m=>(d[h]=m,d[h])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(h=>{const m=h.pop(),_=m.isGroup?m.children:[m],g=h[0].count,v=[];for(const M of _){const E=new gt,y=new Q,S=new _r,R=new Q(1,1,1),L=new Xy(M.geometry,M.material,g);for(let C=0;C<g;C++)d.TRANSLATION&&y.fromBufferAttribute(d.TRANSLATION,C),d.ROTATION&&S.fromBufferAttribute(d.ROTATION,C),d.SCALE&&R.fromBufferAttribute(d.SCALE,C),L.setMatrixAt(C,E.compose(y,S,R));for(const C in d)if(C==="_COLOR_0"){const O=d[C];L.instanceColor=new $d(O.array,O.itemSize,O.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&M.geometry.setAttribute(C,d[C]);Kt.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),v.push(L)}return m.isGroup?(m.clear(),m.add(...v),m):v[0]}))}}const y_="glTF",xa=12,y0={JSON:1313821514,BIN:5130562};class Q1{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==y_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-xa,a=new DataView(e,xa);let c=0;for(;c<s;){const f=a.getUint32(c,!0);c+=4;const d=a.getUint32(c,!0);if(c+=4,d===y0.JSON){const h=new Uint8Array(e,xa+c,f);this.content=i.decode(h)}else if(d===y0.BIN){const h=xa+c;this.body=e.slice(h,h+f)}c+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class eA{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,f={},d={},h={};for(const m in c){const _=eh[m]||m.toLowerCase();f[_]=c[m]}for(const m in e.attributes){const _=eh[m]||m.toLowerCase();if(c[m]!==void 0){const g=i.accessors[e.attributes[m]],v=ho[g.componentType];h[_]=v.name,d[_]=g.normalized===!0}}return t.getDependency("bufferView",a).then(function(m){return new Promise(function(_,g){s.decodeDracoFile(m,function(v){for(const M in v.attributes){const E=v.attributes[M],y=d[M];y!==void 0&&(E.normalized=y)}_(v)},f,h,Dn,g)})})}}class tA{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class nA{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class S_ extends wo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,d=f*2,h=f*3,m=s-t,_=(i-t)/m,g=_*_,v=g*_,M=e*h,E=M-h,y=-2*v+3*g,S=v-g,R=1-y,L=S-g+_;for(let C=0;C!==f;C++){const O=c[E+C+f],D=c[E+C+d]*m,k=c[M+C+f],w=c[M+C]*m;a[C]=R*O+L*D+y*k+S*w}return a}}const iA=new _r;class rA extends S_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return iA.fromArray(a).normalize().toArray(a),a}}const ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ho={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},S0={9728:ln,9729:sn,9984:V0,9985:vc,9986:Sa,9987:ki},M0={33071:Oi,33648:wc,10497:go},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},sA={CUBICSPLINE:void 0,LINEAR:Ca,STEP:Ra},rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oA(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Na({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pr})),o.DefaultMaterial}function _s(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ui(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function aA(o,e,t){let i=!1,s=!1,a=!1;for(let h=0,m=e.length;h<m;h++){const _=e[h];if(_.POSITION!==void 0&&(i=!0),_.NORMAL!==void 0&&(s=!0),_.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],f=[],d=[];for(let h=0,m=e.length;h<m;h++){const _=e[h];if(i){const g=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):o.attributes.position;c.push(g)}if(s){const g=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):o.attributes.normal;f.push(g)}if(a){const g=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):o.attributes.color;d.push(g)}}return Promise.all([Promise.all(c),Promise.all(f),Promise.all(d)]).then(function(h){const m=h[0],_=h[1],g=h[2];return i&&(o.morphAttributes.position=m),s&&(o.morphAttributes.normal=_),a&&(o.morphAttributes.color=g),o.morphTargetsRelative=!0,o})}function lA(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function cA(o){let e;const t=o.extensions&&o.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sd(t.attributes):e=o.indices+":"+sd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+sd(o.targets[i]);return e}function sd(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function th(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function uA(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const fA=new gt;class dA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new U1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const f=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(f)===!0;const d=f.match(/Version\/(\d+)/);s=i&&d?parseInt(d[1],10):-1,a=f.indexOf("Firefox")>-1,c=a?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new yS(this.options.manager):this.textureLoader=new bS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new u_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const f={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return _s(a,f,s),Ui(f,s),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(f)})).then(function(){for(const d of f.scenes)d.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let f=0,d=c.length;f<d;f++)e[c[f]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,f)=>{const d=this.associations.get(c);d!=null&&this.associations.set(f,d);for(const[h,m]of c.children.entries())a(m,f.children[h])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(wa.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=id[s.type],f=ho[s.componentType],d=s.normalized===!0,h=new f(s.count*c);return Promise.resolve(new Nn(h,c,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const f=c[0],d=id[s.type],h=ho[s.componentType],m=h.BYTES_PER_ELEMENT,_=m*d,g=s.byteOffset||0,v=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,y;if(v&&v!==_){const S=Math.floor(g/v),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+S+":"+s.count;let L=t.cache.get(R);L||(E=new h(f,S*v,s.count*v/m),L=new ky(E,v/m),t.cache.add(R,L)),y=new _h(L,d,g%v/m,M)}else f===null?E=new h(s.count*d):E=new h(f,g,s.count*d),y=new Nn(E,d,M);if(s.sparse!==void 0){const S=id.SCALAR,R=ho[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,O=new R(c[1],L,s.sparse.count*S),D=new h(c[2],C,s.sparse.count*d);f!==null&&(y=new Nn(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let k=0,w=O.length;k<w;k++){const P=O[k];if(y.setX(P,D[k*d]),d>=2&&y.setY(P,D[k*d+1]),d>=3&&y.setZ(P,D[k*d+2]),d>=4&&y.setW(P,D[k*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=M}return y})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let f=this.textureLoader;if(c.uri){const d=i.manager.getHandler(c.uri);d!==null&&(f=d)}return this.loadTextureImage(e,a,f)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],f=a.images[t],d=(f.uri||f.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,i).then(function(m){m.flipY=!1,m.name=c.name||f.name||"",m.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(m.name=f.uri);const g=(a.samplers||{})[c.sampler]||{};return m.magFilter=S0[g.magFilter]||sn,m.minFilter=S0[g.minFilter]||ki,m.wrapS=M0[g.wrapS]||go,m.wrapT=M0[g.wrapT]||go,m.generateMipmaps=!m.isCompressedTexture&&m.minFilter!==ln&&m.minFilter!==sn,s.associations.set(m,{textures:e}),m}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const c=s.images[e],f=self.URL||self.webkitURL;let d=c.uri||"",h=!1;if(c.bufferView!==void 0)d=i.getDependency("bufferView",c.bufferView).then(function(_){h=!0;const g=new Blob([_],{type:c.mimeType});return d=f.createObjectURL(g),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const m=Promise.resolve(d).then(function(_){return new Promise(function(g,v){let M=g;t.isImageBitmapLoader===!0&&(M=function(E){const y=new cn(E);y.needsUpdate=!0,g(y)}),t.load(wa.resolveURL(_,a.path),M,void 0,v)})}).then(function(_){return h===!0&&f.revokeObjectURL(d),Ui(_,c),_.userData.mimeType=c.mimeType||uA(c.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),_});return this.sourceCache[e]=m,m}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[xt.KHR_TEXTURE_TRANSFORM]){const f=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const d=a.associations.get(c);c=a.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(c,f),a.associations.set(c,d)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+i.uuid;let d=this.cache.get(f);d||(d=new r_,Gi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(f,d)),i=d}else if(e.isLine){const f="LineBasicMaterial:"+i.uuid;let d=this.cache.get(f);d||(d=new i_,Gi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(f,d)),i=d}if(s||a||c){let f="ClonedMaterial:"+i.uuid+":";s&&(f+="derivative-tangents:"),a&&(f+="vertex-colors:"),c&&(f+="flat-shading:");let d=this.cache.get(f);d||(d=i.clone(),a&&(d.vertexColors=!0),c&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(f,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return Na}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const f={},d=a.extensions||{},h=[];if(d[xt.KHR_MATERIALS_UNLIT]){const _=s[xt.KHR_MATERIALS_UNLIT];c=_.getMaterialType(),h.push(_.extendParams(f,a,t))}else{const _=a.pbrMetallicRoughness||{};if(f.color=new ut(1,1,1),f.opacity=1,Array.isArray(_.baseColorFactor)){const g=_.baseColorFactor;f.color.setRGB(g[0],g[1],g[2],Dn),f.opacity=g[3]}_.baseColorTexture!==void 0&&h.push(t.assignTexture(f,"map",_.baseColorTexture,gn)),f.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,f.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(f,"metalnessMap",_.metallicRoughnessTexture)),h.push(t.assignTexture(f,"roughnessMap",_.metallicRoughnessTexture))),c=this._invokeOne(function(g){return g.getMaterialType&&g.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(g){return g.extendMaterialParams&&g.extendMaterialParams(e,f)})))}a.doubleSided===!0&&(f.side=Ei);const m=a.alphaMode||rd.OPAQUE;if(m===rd.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,m===rd.MASK&&(f.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Yr&&(h.push(t.assignTexture(f,"normalMap",a.normalTexture)),f.normalScale=new Tt(1,1),a.normalTexture.scale!==void 0)){const _=a.normalTexture.scale;f.normalScale.set(_,_)}if(a.occlusionTexture!==void 0&&c!==Yr&&(h.push(t.assignTexture(f,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Yr){const _=a.emissiveFactor;f.emissive=new ut().setRGB(_[0],_[1],_[2],Dn)}return a.emissiveTexture!==void 0&&c!==Yr&&h.push(t.assignTexture(f,"emissiveMap",a.emissiveTexture,gn)),Promise.all(h).then(function(){const _=new c(f);return a.name&&(_.name=a.name),Ui(_,a),t.associations.set(_,{materials:e}),a.extensions&&_s(s,_,a),_})}createUniqueName(e){const t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(f){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(d){return E0(d,f,t)})}const c=[];for(let f=0,d=e.length;f<d;f++){const h=e[f],m=cA(h),_=s[m];if(_)c.push(_.promise);else{let g;h.extensions&&h.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?g=a(h):g=E0(new Qn,h,t),s[m]={primitive:h,promise:g},c.push(g)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,f=[];for(let d=0,h=c.length;d<h;d++){const m=c[d].material===void 0?oA(this.cache):this.getDependency("material",c[d].material);f.push(m)}return f.push(t.loadGeometries(c)),Promise.all(f).then(function(d){const h=d.slice(0,d.length-1),m=d[d.length-1],_=[];for(let v=0,M=m.length;v<M;v++){const E=m[v],y=c[v];let S;const R=h[v];if(y.mode===ui.TRIANGLES||y.mode===ui.TRIANGLE_STRIP||y.mode===ui.TRIANGLE_FAN||y.mode===void 0)S=a.isSkinnedMesh===!0?new Hy(E,R):new wn(E,R),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),y.mode===ui.TRIANGLE_STRIP?S.geometry=v0(S.geometry,Y0):y.mode===ui.TRIANGLE_FAN&&(S.geometry=v0(S.geometry,Yd));else if(y.mode===ui.LINES)S=new Ky(E,R);else if(y.mode===ui.LINE_STRIP)S=new Sh(E,R);else if(y.mode===ui.LINE_LOOP)S=new $y(E,R);else if(y.mode===ui.POINTS)S=new Zy(E,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(S.geometry.morphAttributes).length>0&&lA(S,a),S.name=t.createUniqueName(a.name||"mesh_"+e),Ui(S,a),y.extensions&&_s(s,S,y),t.assignFinalMaterial(S),_.push(S)}for(let v=0,M=_.length;v<M;v++)t.associations.set(_[v],{meshes:e,primitives:v});if(_.length===1)return a.extensions&&_s(s,_[0],a),_[0];const g=new zi;a.extensions&&_s(s,g,a),t.associations.set(g,{meshes:e});for(let v=0,M=_.length;v<M;v++)g.add(_[v]);return g})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new In(yy.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Dc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ui(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,f=[],d=[];for(let h=0,m=c.length;h<m;h++){const _=c[h];if(_){f.push(_);const g=new gt;a!==null&&g.fromArray(a.array,h*16),d.push(g)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new xh(f,d)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],f=[],d=[],h=[],m=[];for(let _=0,g=s.channels.length;_<g;_++){const v=s.channels[_],M=s.samplers[v.sampler],E=v.target,y=E.node,S=s.parameters!==void 0?s.parameters[M.input]:M.input,R=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",y)),f.push(this.getDependency("accessor",S)),d.push(this.getDependency("accessor",R)),h.push(M),m.push(E))}return Promise.all([Promise.all(c),Promise.all(f),Promise.all(d),Promise.all(h),Promise.all(m)]).then(function(_){const g=_[0],v=_[1],M=_[2],E=_[3],y=_[4],S=[];for(let L=0,C=g.length;L<C;L++){const O=g[L],D=v[L],k=M[L],w=E[L],P=y[L];if(O===void 0)continue;O.updateMatrix&&O.updateMatrix();const ae=i._createAnimationTracks(O,D,k,w,P);if(ae)for(let F=0;F<ae.length;F++)S.push(ae[F])}const R=new hS(a,void 0,S);return Ui(R,s),R})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(f){if(f.isMesh)for(let d=0,h=s.weights.length;d<h;d++)f.morphTargetInfluences[d]=s.weights[d]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],f=s.children||[];for(let h=0,m=f.length;h<m;h++)c.push(i.getDependency("node",f[h]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),d]).then(function(h){const m=h[0],_=h[1],g=h[2];g!==null&&m.traverse(function(v){v.isSkinnedMesh&&v.bind(g,fA)});for(let v=0,M=_.length;v<M;v++)m.add(_[v]);if(m.userData.pivot!==void 0&&_.length>0){const v=m.userData.pivot,M=_[0];m.pivot=new Q().fromArray(v),m.position.x-=v[0],m.position.y-=v[1],m.position.z-=v[2],M.position.set(0,0,0),delete m.userData.pivot}return m})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",f=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&f.push(d),a.camera!==void 0&&f.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){f.push(h)}),this.nodeCache[e]=Promise.all(f).then(function(h){let m;if(a.isBone===!0?m=new n_:h.length>1?m=new zi:h.length===1?m=h[0]:m=new Kt,m!==h[0])for(let _=0,g=h.length;_<g;_++)m.add(h[_]);if(a.name&&(m.userData.name=a.name,m.name=c),Ui(m,a),a.extensions&&_s(i,m,a),a.matrix!==void 0){const _=new gt;_.fromArray(a.matrix),m.applyMatrix4(_)}else a.translation!==void 0&&m.position.fromArray(a.translation),a.rotation!==void 0&&m.quaternion.fromArray(a.rotation),a.scale!==void 0&&m.scale.fromArray(a.scale);if(!s.associations.has(m))s.associations.set(m,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){const _=s.associations.get(m);s.associations.set(m,{..._})}return s.associations.get(m).nodes=e,m}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new zi;i.name&&(a.name=s.createUniqueName(i.name)),Ui(a,i),i.extensions&&_s(t,a,i);const c=i.nodes||[],f=[];for(let d=0,h=c.length;d<h;d++)f.push(s.getDependency("node",c[d]));return Promise.all(f).then(function(d){for(let m=0,_=d.length;m<_;m++){const g=d[m];g.parent!==null?a.add(N1(g)):a.add(g)}const h=m=>{const _=new Map;for(const[g,v]of s.associations)(g instanceof Gi||g instanceof cn)&&_.set(g,v);return m.traverse(g=>{const v=s.associations.get(g);v!=null&&_.set(g,v)}),_};return s.associations=h(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],f=e.name?e.name:e.uuid,d=[];jr[a.path]===jr.weights?e.traverse(function(g){g.morphTargetInfluences&&d.push(g.name?g.name:g.uuid)}):d.push(f);let h;switch(jr[a.path]){case jr.weights:h=yo;break;case jr.rotation:h=So;break;case jr.translation:case jr.scale:h=Mo;break;default:switch(i.itemSize){case 1:h=yo;break;case 2:case 3:default:h=Mo;break}break}const m=s.interpolation!==void 0?sA[s.interpolation]:Ca,_=this._getArrayFromAccessor(i);for(let g=0,v=d.length;g<v;g++){const M=new h(d[g]+"."+jr[a.path],t.array,_,m);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=th(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof So?rA:S_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function hA(o,e,t){const i=e.attributes,s=new vr;if(i.POSITION!==void 0){const f=t.json.accessors[i.POSITION],d=f.min,h=f.max;if(d!==void 0&&h!==void 0){if(s.set(new Q(d[0],d[1],d[2]),new Q(h[0],h[1],h[2])),f.normalized){const m=th(ho[f.componentType]);s.min.multiplyScalar(m),s.max.multiplyScalar(m)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const f=new Q,d=new Q;for(let h=0,m=a.length;h<m;h++){const _=a[h];if(_.POSITION!==void 0){const g=t.json.accessors[_.POSITION],v=g.min,M=g.max;if(v!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(v[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(v[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(v[2]),Math.abs(M[2]))),g.normalized){const E=th(ho[g.componentType]);d.multiplyScalar(E)}f.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(f)}o.boundingBox=s;const c=new qi;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function E0(o,e,t){const i=e.attributes,s=[];function a(c,f){return t.getDependency("accessor",c).then(function(d){o.setAttribute(f,d)})}for(const c in i){const f=eh[c]||c.toLowerCase();f in o.attributes||s.push(a(i[c],f))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});s.push(c)}return Et.workingColorSpace!==Dn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),Ui(o,e),hA(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?aA(o,e.targets,t):o})}class pA{constructor(){this._onRoad=!0,this._terrain="road",this.SAMPLE_RADIUS=3}get onRoad(){return this._onRoad}get terrain(){return this._terrain}sampleFromGL(e){const t=Math.floor(e.drawingBufferWidth/2),i=Math.floor(e.drawingBufferHeight/2),s=this.SAMPLE_RADIUS,a=s*2+1,c=new Uint8Array(a*a*4);e.readPixels(t-s,i-s,a,a,e.RGBA,e.UNSIGNED_BYTE,c);let f=0,d=0;for(let h=0;h<c.length;h+=4){const m=c[h],_=c[h+1],g=c[h+2];c[h+3]<10||(d++,this.isRoadColor(m,_,g)&&f++)}if(d>0){const h=f/d;this._onRoad=h>.5,this._terrain=this._onRoad?"road":"offroad"}}isRoadColor(e,t,i){const s=(e+t+i)/3,a=Math.max(e,t,i),c=Math.min(e,t,i),f=a-c;return t>e+15&&t>i+15||i>e+30&&i>t+20||e-i>10&&f<40||s<30?!1:i>=e&&f<35||f<10||e>200&&t>170&&i<150&&s>170}}const mA=({apiKey:o,mapId:e,myCar:t,myCarType:i,myCarColor:s,playerName:a,peersRef:c,onMapError:f,onRoadStatusChange:d})=>{const h=Qe.useRef(null),[m,_]=Qe.useState(null),g=Qe.useRef(null),v=Qe.useRef(null),M=Qe.useRef(null),E=Qe.useRef(null),y=Qe.useRef(null),S=Qe.useRef(new Map),R=Qe.useRef(20),L=22,C=28,O=Qe.useRef(new pA),[D,k]=Qe.useState("roadmap"),[w,P]=Qe.useState(!0),ae=Qe.useRef(!0);return Qe.useEffect(()=>{const F=X=>{X.preventDefault(),R.current-=X.deltaY*.005,R.current=Math.max(10,Math.min(C,R.current))},W=h.current;return W&&W.addEventListener("wheel",F,{passive:!1}),()=>{W&&W.removeEventListener("wheel",F)}},[]),Qe.useEffect(()=>{if(h.current)return _x({key:o,v:"beta"}),Promise.all([eg("maps"),eg("geometry")]).then(([F])=>{const W=new F.Map(h.current,{center:{lat:t.lat,lng:t.lng},zoom:R.current,tilt:60,heading:t.heading,...e?{mapId:e}:{},renderingType:"VECTOR",disableDefaultUI:!0,gestureHandling:"none",keyboardShortcuts:!1});_(W),W.setMapTypeId("roadmap"),W.addListener("renderingtype_changed",()=>{W.getRenderingType()==="RASTER"&&f&&f("The map is not a vector map. WebGLOverlayView requires a vector map. Please check your Map ID.")});const X=new google.maps.WebGLOverlayView;g.current=X,X.onAdd=()=>{v.current=new Dy,v.current.rotation.x=Math.PI/2,v.current.rotation.y=Math.PI,M.current=new In;const ne=new d_(16777215,1);ne.position.set(0,10,0),v.current.add(ne);const q=new AS(16777215,.5);v.current.add(q),y.current=od(i,s,a,!0),v.current.add(y.current)},X.onContextRestored=({gl:ne})=>{E.current=new I1({canvas:ne.canvas,context:ne,...ne.getContextAttributes()}),E.current.autoClear=!1},X.onDraw=({gl:ne,transformer:q})=>{if(!v.current||!M.current||!E.current)return;const $=t.onRoad;if(O.current.sampleFromGL(ne),t.onRoad=O.current.onRoad,t.onRoad!==$&&d&&d(t.onRoad),y.current){const B=y.current.userData,Y=t.steeringAngle*(Math.PI/180),Z=t.speed*.3;B.frontWheels&&B.frontWheels.forEach(se=>{se.rotation.y=-Y}),B.glbWheels&&B.glbWheels.forEach(se=>{se.rotation.x+=Z}),B.glbFrontWheels&&B.glbFrontWheels.forEach(se=>{se.rotation.y=-Y})}if(M.current.projectionMatrix.fromArray(q.fromLatLngAltitude({lat:t.lat,lng:t.lng,altitude:0},new Float32Array([t.pitch||0,t.roll||0,-t.heading]),new Float32Array([1,1,1]))),y.current){const B=Math.min(R.current,22),Y=Math.pow(2,20-B),Z=Math.max(.3,Math.min(Y,50)),se=ae.current?-(30*Math.PI/180):90*Math.PI/180;y.current.children.forEach(N=>{N.userData.isNameSprite&&(N.scale.set(-N.userData.baseScale.x*Z,N.userData.baseScale.y*Z,N.userData.baseScale.z),ae.current?(N.position.y=N.userData.baseY*Z,N.position.z=0):(N.position.y=0,N.position.z=-N.userData.baseY*Z),N.rotation.x=se)})}S.current.forEach(B=>B.visible=!1),y.current&&(y.current.visible=!0),E.current.render(v.current,M.current),y.current&&(y.current.visible=!1),c.current.forEach((B,Y)=>{let Z=S.current.get(Y);!Z||Z.userData.carType!==B.carType||Z.userData.carColor!==B.carColor?(Z&&(v.current.remove(Z),Tc(Z)),Z=od(B.carType,B.carColor,B.playerName,!1),v.current.add(Z),S.current.set(Y,Z)):Z.userData.playerName!==B.playerName&&(nh(Z,B.playerName,!1),Z.userData.playerName=B.playerName);const se=Z.userData,N=(B.steeringAngle||0)*(Math.PI/180),J=(B.speed||0)*.3;se.frontWheels&&se.frontWheels.forEach(ce=>{ce.rotation.y=-N}),se.glbWheels&&se.glbWheels.forEach(ce=>{ce.rotation.x+=J}),se.glbFrontWheels&&se.glbFrontWheels.forEach(ce=>{ce.rotation.y=-N});const Re=Math.min(R.current,22),_e=Math.pow(2,20-Re),De=Math.max(.3,Math.min(_e,50)),ee=(B.heading-t.heading)*(Math.PI/180),he=ae.current?-(30*Math.PI/180):90*Math.PI/180;Z.children.forEach(ce=>{ce.userData.isNameSprite&&(ce.scale.set(-ce.userData.baseScale.x*De,ce.userData.baseScale.y*De,ce.userData.baseScale.z),ae.current?(ce.position.y=ce.userData.baseY*De,ce.position.z=0):(ce.position.y=0,ce.position.z=-ce.userData.baseY*De),ce.rotation.x=he,ce.rotation.y=ee)}),S.current.forEach(ce=>ce.visible=!1),Z.visible=!0,M.current.projectionMatrix.fromArray(q.fromLatLngAltitude({lat:B.lat,lng:B.lng,altitude:0},new Float32Array([B.pitch||0,B.roll||0,-B.heading]),new Float32Array([1,1,1]))),E.current.render(v.current,M.current)}),y.current&&(y.current.visible=!0),S.current.forEach(B=>B.visible=!0);for(const[B,Y]of S.current.entries())c.current.has(B)||(v.current.remove(Y),Tc(Y),S.current.delete(B));E.current.resetState()},X.setMap(W)}),()=>{g.current&&g.current.setMap(null)}},[o,e]),Qe.useEffect(()=>{ae.current=w},[w]),Qe.useEffect(()=>{m&&m.setMapTypeId(D)},[m,D]),Qe.useEffect(()=>{v.current&&(!y.current||y.current.userData.carType!==i||y.current.userData.carColor!==s?(y.current&&(v.current.remove(y.current),Tc(y.current)),y.current=od(i,s,a,!0),v.current.add(y.current)):y.current.userData.playerName!==a&&(nh(y.current,a,!0),y.current.userData.playerName=a))},[i,s,a]),Qe.useEffect(()=>{if(!m)return;let F,W=0,X=0,ne=0,q=0;const $=()=>{if(g.current&&g.current.requestRedraw(),Math.abs(t.lat-W)>1e-7||Math.abs(t.lng-X)>1e-7||Math.abs(t.heading-ne)>.1||Math.abs(R.current-q)>.01){const B=Math.min(R.current,L),Y=Math.max(0,R.current-L),Z=Math.pow(2,Y);m.moveCamera({center:{lat:t.lat,lng:t.lng},heading:t.heading,tilt:w?60:0,zoom:B}),h.current&&(h.current.style.transform=Z>1?`scale(${Z})`:""),W=t.lat,X=t.lng,ne=t.heading,q=R.current}F=requestAnimationFrame($)};return $(),()=>{cancelAnimationFrame(F)}},[m,t,w]),me.jsxs("div",{className:"relative w-full h-full overflow-hidden",children:[me.jsx("div",{ref:h,className:"w-full h-full origin-center"}),me.jsxs("div",{className:"absolute bottom-6 right-6 flex flex-col gap-2 z-10",children:[me.jsx("button",{className:"w-10 h-10 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold hover:bg-slate-900/100 transition-colors",onClick:()=>R.current=Math.min(C,R.current+1),title:"Zoom In",children:"+"}),me.jsx("button",{className:"w-10 h-10 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold hover:bg-slate-900/100 transition-colors",onClick:()=>R.current=Math.max(10,R.current-1),title:"Zoom Out",children:"-"}),me.jsx("button",{className:"w-10 h-10 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 text-white rounded-full shadow-lg flex items-center justify-center text-xs font-bold hover:bg-slate-900/100 transition-colors",onClick:()=>k(F=>F==="roadmap"?"satellite":"roadmap"),title:D==="roadmap"?"Switch to Satellite":"Switch to Street Map",children:D==="roadmap"?"🛰":"🗺"}),me.jsx("button",{className:`w-10 h-10 backdrop-blur-md border border-slate-700/50 rounded-full shadow-lg flex items-center justify-center text-xs font-bold transition-colors ${w?"bg-blue-600/80 text-white hover:bg-blue-500/80":"bg-slate-900/80 text-white hover:bg-slate-900/100"}`,onClick:()=>P(F=>!F),title:w?"Switch to 2D":"Switch to 3D",children:w?"3D":"2D"})]})]})},gA=new D1,_A={bus:Math.PI/2},vA=30*Math.PI/180;function xA(o,e=!1){const t=document.createElement("canvas"),i=t.getContext("2d");if(t.width=2048,t.height=512,i){i.font='Bold 200px "Inter", "Segoe UI", Arial, sans-serif',i.fillStyle=e?"rgba(37, 99, 235, 0.9)":"rgba(0, 0, 0, 0.75)";const v=i.measureText(o).width+120*2,M=400,E=(t.width-v)/2,y=(t.height-M)/2,S=50;i.beginPath(),i.moveTo(E+S,y),i.lineTo(E+v-S,y),i.quadraticCurveTo(E+v,y,E+v,y+S),i.lineTo(E+v,y+M-S),i.quadraticCurveTo(E+v,y+M,E+v-S,y+M),i.lineTo(E+S,y+M),i.quadraticCurveTo(E,y+M,E,y+M-S),i.lineTo(E,y+S),i.quadraticCurveTo(E,y,E+S,y),i.closePath(),i.fill(),i.strokeStyle=e?"rgba(251, 191, 36, 0.6)":"rgba(255, 255, 255, 0.3)",i.lineWidth=6,i.stroke(),i.fillStyle=e?"#fbbf24":"#ffffff",i.textAlign="center",i.textBaseline="middle",i.shadowColor="rgba(0, 0, 0, 1)",i.shadowBlur=10,i.shadowOffsetX=0,i.shadowOffsetY=4,i.fillText(o,t.width/2,t.height/2),i.shadowBlur=0,i.shadowOffsetY=0,i.fillText(o,t.width/2,t.height/2)}const s=new Jy(t);s.generateMipmaps=!0,s.minFilter=ki,s.magFilter=sn,s.anisotropy=16,s.colorSpace=gn;const a=e?50:42,c=e?12.5:10.5,f=new Da(1,1),d=new Yr({map:s,transparent:!0,depthTest:!1,side:Ei}),h=new wn(f,d);return h.rotation.x=-vA,h.scale.set(-a,c,1),h.position.y=16,h.renderOrder=999,h.userData={isNameSprite:!0,playerName:o,baseScale:{x:a,y:c,z:1},baseY:16},h}function Tc(o){o.traverse(e=>{if(e.isMesh){const t=e;t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())}else if(e.userData.isNameSprite&&e.isMesh){const t=e,i=t.material;i.map&&i.map.dispose(),i.dispose(),t.geometry.dispose()}})}function nh(o,e,t=!1){let i=null;if(o.children.forEach(s=>{s.userData.isNameSprite&&(i=s)}),!(i&&i.userData.playerName===e)){if(i){o.remove(i);const s=i.material;s.map&&s.map.dispose(),s.dispose(),i.geometry.dispose()}if(e){const s=xA(e,t);o.add(s)}}}function od(o,e,t,i=!1){const s=new zi,a=new ut(e||"#ff0000");s.userData={carType:o,carColor:e,playerName:t};const c=`/models/${o}.glb`;return gA.load(c,f=>{const d=f.scene;d.traverse(v=>{if(v.isMesh){const M=v;M.material&&(Array.isArray(M.material)?M.material.forEach(E=>{"color"in E&&E.color.copy(a)}):"color"in M.material&&M.material.color.copy(a))}});const h=_A[o];h&&(d.rotation.y=h);const m=[],_=[];d.traverse(v=>{const M=v.name.toLowerCase();console.log(`[${o}] mesh: "${v.name}" type: ${v.type}`),(M.includes("wheel")||M.includes("tire"))&&(m.push(v),(M.includes("front")||M.includes("fl")||M.includes("fr"))&&_.push(v))}),s.userData.glbWheels=m,_.length>0&&(s.userData.glbFrontWheels=_),console.log(`[${o}] wheels found: ${m.map(v=>v.name).join(", ")||"none"}`),console.log(`[${o}] front wheels: ${_.map(v=>v.name).join(", ")||"none"}`),s.children.filter(v=>!v.userData.isNameSprite).forEach(v=>{if(s.remove(v),v.isMesh){const M=v;M.geometry&&M.geometry.dispose(),M.material&&(Array.isArray(M.material)?M.material.forEach(E=>E.dispose()):M.material.dispose())}else v instanceof zi&&Tc(v)}),s.add(d)},void 0,f=>{console.warn(`Failed to load model ${c}, using fallback geometry.`,f)}),yA(s,o,a),t&&nh(s,t,i),s.scale.set(.5,.5,.5),s}function yA(o,e,t){let i=2,s=1,a=4,c=.4,f=.2,d=1.5,h=1.1;e==="suv"?(s=1.6,a=4.5,i=2.2,c=.5,d=1.6,h=1.2):e==="bus"?(s=2.5,a=8,i=2.5,c=.6,d=3,h=1.3):e==="compact"&&(s=1.2,a=3.5,i=1.8,c=.35,d=1.2,h=1);const m=new To(i,s,a),_=new Na({color:t}),g=new wn(m,_);g.position.y=s/2+c/2,o.add(g);const v=new Mh(c,c,f,16),M=new Na({color:3355443}),E=[{pos:[-h,c,d],isFront:!0},{pos:[h,c,d],isFront:!0},{pos:[-h,c,-d],isFront:!1},{pos:[h,c,-d],isFront:!1}],y=[];E.forEach(({pos:S,isFront:R})=>{const L=new zi;L.position.set(S[0],S[1],S[2]);const C=new wn(v,M);C.rotation.z=Math.PI/2,L.add(C),o.add(L),R&&y.push(L)}),o.userData.frontWheels=y}const SA=({car:o})=>{const e=Qe.useRef(null),t=Qe.useRef(null);Qe.useEffect(()=>{let s;const a=()=>{if(e.current&&t.current){const c=Math.abs(o.speed*24e6),f=Math.min(Math.round(c),240),d=-120+f/240*240;e.current.style.transform=`rotate(${d}deg)`,t.current.textContent=f.toString()}s=requestAnimationFrame(a)};return a(),()=>cancelAnimationFrame(s)},[o]);const i=[];for(let s=0;s<=240;s+=20){const c=(-120+s/240*240-90)*(Math.PI/180),f=s%40===0,d=s>=200,h=85,m=f?73:79,_=100+h*Math.cos(c),g=100+h*Math.sin(c),v=100+m*Math.cos(c),M=100+m*Math.sin(c),E=d?"#ef4444":f?"white":"#94a3b8";if(i.push(me.jsx("line",{x1:_,y1:g,x2:v,y2:M,stroke:E,strokeWidth:f?3:1.5,strokeLinecap:"round"},`line-${s}`)),f){const y=100+56*Math.cos(c),S=100+56*Math.sin(c);i.push(me.jsx("text",{x:y,y:S,fill:d?"#ef4444":"white",fontSize:"12",textAnchor:"middle",alignmentBaseline:"middle",fontFamily:"monospace",fontWeight:"bold",children:s},`text-${s}`))}}return me.jsxs("div",{className:"absolute bottom-6 right-30 w-56 h-56 bg-slate-900/90 backdrop-blur-md rounded-full border-[6px] border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden z-10",children:[me.jsx("div",{className:"absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(59,130,246,0.15)] pointer-events-none"}),me.jsxs("svg",{viewBox:"0 0 200 200",className:"w-full h-full drop-shadow-xl",children:[me.jsx("defs",{children:me.jsxs("radialGradient",{id:"dialGradient",cx:"50%",cy:"50%",r:"50%",children:[me.jsx("stop",{offset:"70%",stopColor:"#0f172a"}),me.jsx("stop",{offset:"100%",stopColor:"#1e293b"})]})}),me.jsx("circle",{cx:"100",cy:"100",r:"95",fill:"url(#dialGradient)"}),i,me.jsx("text",{ref:t,x:"100",y:"145",fill:"white",fontSize:"36",fontWeight:"900",textAnchor:"middle",fontFamily:"monospace",style:{fontVariantNumeric:"tabular-nums"},children:"0"}),me.jsx("text",{x:"100",y:"165",fill:"#94a3b8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",fontFamily:"sans-serif",letterSpacing:"1",children:"KM/H"}),me.jsxs("g",{ref:e,style:{transformOrigin:"100px 100px",transition:"transform 0.05s linear"},children:[me.jsx("polygon",{points:"97,102 103,102 100,22",fill:"rgba(0,0,0,0.4)"}),me.jsx("polygon",{points:"96,100 104,100 100,20",fill:"#ef4444"}),me.jsx("circle",{cx:"100",cy:"100",r:"10",fill:"#1e293b",stroke:"#334155",strokeWidth:"2"}),me.jsx("circle",{cx:"100",cy:"100",r:"4",fill:"#ef4444"})]})]})]})},ih={car:{maxSpeed:1e-5,maxReverseSpeed:3e-6,acceleration:2e-7,braking:5e-7,friction:.992,drag:.995,maxSteeringAngle:40,turnMultiplier:12,steeringResponse:.15,pitchEffect:1,rollEffect:.4},suv:{maxSpeed:8e-6,maxReverseSpeed:25e-7,acceleration:18e-8,braking:4e-7,friction:.991,drag:.994,maxSteeringAngle:38,turnMultiplier:10,steeringResponse:.12,pitchEffect:1.2,rollEffect:.5},bus:{maxSpeed:6e-6,maxReverseSpeed:15e-7,acceleration:12e-8,braking:3e-7,friction:.99,drag:.992,maxSteeringAngle:30,turnMultiplier:5,steeringResponse:.08,pitchEffect:.6,rollEffect:.6},compact:{maxSpeed:9e-6,maxReverseSpeed:28e-7,acceleration:22e-8,braking:5e-7,friction:.993,drag:.996,maxSteeringAngle:42,turnMultiplier:13,steeringResponse:.18,pitchEffect:1,rollEffect:.35}},T0=ih.car;class MA{constructor(e,t,i=0,s){this.speed=0,this.steeringAngle=0,this.pitch=0,this.roll=0,this.onRoad=!0,this.OFFROAD_SPEED_FACTOR=.4,this.OFFROAD_ACCEL_FACTOR=.5,this.OFFROAD_FRICTION=.975,this.OFFROAD_DRAG=.98,this.lat=e,this.lng=t,this.heading=i,this.profile=s&&ih[s]||T0}setCarType(e){this.profile=ih[e]||T0}update(e){const t=this.profile;let i=0;e.ArrowLeft||e.a?i=-t.maxSteeringAngle:(e.ArrowRight||e.d)&&(i=t.maxSteeringAngle),this.steeringAngle+=(i-this.steeringAngle)*t.steeringResponse;const s=this.onRoad?1:this.OFFROAD_ACCEL_FACTOR,a=this.onRoad?1:this.OFFROAD_SPEED_FACTOR,c=this.onRoad?t.friction:this.OFFROAD_FRICTION,f=this.onRoad?t.drag:this.OFFROAD_DRAG,d=t.maxSpeed*a,h=t.maxReverseSpeed*a,m=Math.abs(this.speed)/t.maxSpeed,_=t.acceleration*(1-m*.5)*s;let g=!1,v=!1;e.ArrowUp||e.w?this.speed<0?(this.speed+=t.braking,v=!0):(this.speed+=_,g=!0):(e.ArrowDown||e.s)&&(this.speed>0?(this.speed-=t.braking,v=!0):(this.speed-=_,g=!0)),this.speed*=c,this.speed*=f,this.speed>d&&(this.speed=d),this.speed<-h&&(this.speed=-h),Math.abs(this.speed)<1e-8&&!g&&!v&&(this.speed=0);const M=Math.max(.3,1-m*.7),E=this.steeringAngle/t.maxSteeringAngle*M*(this.speed/t.maxSpeed)*t.turnMultiplier;this.heading+=E;const y=1-Math.abs(this.steeringAngle)/t.maxSteeringAngle*.01;this.speed*=y,this.heading=(this.heading+360)%360;let S=0;const R=this.speed>1e-7?1:this.speed<-1e-7?-1:0;v&&R!==0?S=R*-2.5*t.pitchEffect:g&&(S=(R!==0?R:1)*1.5*t.pitchEffect),this.pitch+=(S-this.pitch)*.1;const L=E*m*t.rollEffect;this.roll+=(L-this.roll)*.15;const C=(90-this.heading)*(Math.PI/180);this.lng+=Math.cos(C)*this.speed,this.lat+=Math.sin(C)*this.speed}}class EA{constructor(e,t="self-hosted",i){this.pieSocketBase=i,this.ws=null,this.peers=new Map,this.dataChannels=new Map,this.myId="",this.roomId="",this.heartbeatInterval=null,this.messageQueue=Promise.resolve(),this.pendingSignals=new Map,this.lobbyWs=null,this.lobbyInterval=null,this.signalingUrl=e,this.mode=t}connect(e){this.roomId=e,this.mode==="piesocket"?(this.myId=Math.random().toString(36).substring(2,9),this.connectPieSocket(e)):this.connectSelfHosted(e)}connectSelfHosted(e){this.ws=new WebSocket(this.signalingUrl),this.ws.onopen=()=>{var t;(t=this.ws)==null||t.send(JSON.stringify({type:"join-room",roomId:e}))},this.ws.onmessage=t=>{this.messageQueue=this.messageQueue.then(async()=>{const i=JSON.parse(t.data);switch(i.type){case"room-joined":this.myId=i.id,this.onConnected&&this.onConnected();for(const s of i.peerIds)this.onPeerJoined&&this.onPeerJoined(s),await this.createPeerConnection(s,!0);break;case"peer-joined":this.onPeerJoined&&this.onPeerJoined(i.peerId),await this.createPeerConnection(i.peerId,!1);break;case"peer-left":this.removePeer(i.peerId),this.onPeerLeft&&this.onPeerLeft(i.peerId);break;case"signal":await this.handleSignal(i.senderId,i.signal);break}}).catch(i=>console.error("[WebRTC] message error:",i))}}connectPieSocket(e){this.ws=new WebSocket(this.signalingUrl),this.connectLobby(e),this.ws.onopen=()=>{this.broadcast({type:"peer-announce",senderId:this.myId,roomId:e}),this.onConnected&&this.onConnected(),this.heartbeatInterval=setInterval(()=>{this.broadcast({type:"peer-heartbeat",senderId:this.myId})},5e3)},this.ws.onmessage=t=>{this.messageQueue=this.messageQueue.then(()=>this.handlePieSocketMessage(t)).catch(i=>console.error("[PieSocket] message error:",i))},this.ws.onclose=()=>{this.heartbeatInterval&&(clearInterval(this.heartbeatInterval),this.heartbeatInterval=null)}}async handlePieSocketMessage(e){let t;try{t=JSON.parse(e.data)}catch{return}if(!(t.event==="system"||t.sender==="system")){if(t.event&&t.data)try{t=typeof t.data=="string"?JSON.parse(t.data):t.data}catch{return}if(t.senderId!==this.myId)switch(t.type){case"peer-announce":{if(!this.peers.has(t.senderId)){this.onPeerJoined&&this.onPeerJoined(t.senderId),this.broadcast({type:"peer-announce",senderId:this.myId,roomId:this.roomId});const i=this.myId>t.senderId;await this.createPeerConnection(t.senderId,i),this.flushPendingSignals(t.senderId)}break}case"peer-heartbeat":{if(!this.peers.has(t.senderId)){this.onPeerJoined&&this.onPeerJoined(t.senderId),this.broadcast({type:"peer-announce",senderId:this.myId,roomId:this.roomId});const i=this.myId>t.senderId;await this.createPeerConnection(t.senderId,i),this.flushPendingSignals(t.senderId)}break}case"peer-left":{this.removePeer(t.senderId),this.pendingSignals.delete(t.senderId),this.onPeerLeft&&this.onPeerLeft(t.senderId);break}case"signal":{if(t.targetId!==this.myId)break;if(!this.peers.has(t.senderId)){const i=this.pendingSignals.get(t.senderId)||[];i.push(t.signal),this.pendingSignals.set(t.senderId,i);break}await this.handleSignal(t.senderId,t.signal);break}}}}async flushPendingSignals(e){const t=this.pendingSignals.get(e);if(!(!t||t.length===0)){this.pendingSignals.delete(e);for(const i of t)await this.handleSignal(e,i)}}broadcast(e){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}connectLobby(e){if(!this.pieSocketBase)return;const t=this.pieSocketBase.replace("%CHANNEL%","__lobby__");this.lobbyWs=new WebSocket(t);const i=()=>{this.lobbyWs&&this.lobbyWs.readyState===WebSocket.OPEN&&this.lobbyWs.send(JSON.stringify({type:"lobby-room-announce",playerId:this.myId,roomId:e}))};this.lobbyWs.onopen=()=>{i(),this.lobbyInterval=setInterval(i,5e3)},this.lobbyWs.onmessage=s=>{let a;try{a=JSON.parse(s.data)}catch{return}if(!(a.event==="system"||a.sender==="system")){if(a.event&&a.data)try{a=typeof a.data=="string"?JSON.parse(a.data):a.data}catch{return}a.type==="lobby-ping"&&i()}}}disconnectLobby(){this.lobbyInterval&&(clearInterval(this.lobbyInterval),this.lobbyInterval=null),this.lobbyWs&&(this.lobbyWs.readyState===WebSocket.OPEN&&this.lobbyWs.send(JSON.stringify({type:"lobby-player-left",playerId:this.myId})),this.lobbyWs.close(),this.lobbyWs=null)}disconnect(){this.mode==="piesocket"&&this.myId&&this.broadcast({type:"peer-left",senderId:this.myId}),this.disconnectLobby(),this.heartbeatInterval&&(clearInterval(this.heartbeatInterval),this.heartbeatInterval=null),this.ws&&(this.ws.close(),this.ws=null);for(const e of this.peers.keys())this.removePeer(e);this.pendingSignals.clear()}async createPeerConnection(e,t){const i=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]});if(this.peers.set(e,i),i.onicecandidate=s=>{s.candidate&&this.sendSignal(e,{type:"candidate",candidate:s.candidate})},i.onconnectionstatechange=()=>{(i.connectionState==="failed"||i.connectionState==="disconnected")&&(this.removePeer(e),this.onPeerLeft&&this.onPeerLeft(e))},t){const s=i.createDataChannel("game-data");this.setupDataChannel(e,s);const a=await i.createOffer();await i.setLocalDescription(a),this.sendSignal(e,{type:"offer",offer:a})}else i.ondatachannel=s=>{this.setupDataChannel(e,s.channel)}}setupDataChannel(e,t){this.dataChannels.set(e,t),t.onmessage=i=>{const s=JSON.parse(i.data);s.type==="sync"&&this.onPeerData?this.onPeerData(e,s.payload):s.type==="chat"&&this.onChatMessage&&this.onChatMessage(s.payload)}}async handleSignal(e,t){const i=this.peers.get(e);if(i)if(t.type==="offer"){await i.setRemoteDescription(new RTCSessionDescription(t.offer));const s=await i.createAnswer();await i.setLocalDescription(s),this.sendSignal(e,{type:"answer",answer:s})}else t.type==="answer"?await i.setRemoteDescription(new RTCSessionDescription(t.answer)):t.type==="candidate"&&await i.addIceCandidate(new RTCIceCandidate(t.candidate))}sendSignal(e,t){this.mode==="piesocket"?this.broadcast({type:"signal",senderId:this.myId,targetId:e,signal:t}):this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({type:"signal",targetId:e,signal:t}))}removePeer(e){const t=this.peers.get(e);t&&(t.close(),this.peers.delete(e));const i=this.dataChannels.get(e);i&&(i.close(),this.dataChannels.delete(e))}broadcastSync(e){const t=JSON.stringify({type:"sync",payload:{...e,id:this.myId}});for(const i of this.dataChannels.values())i.readyState==="open"&&i.send(t)}broadcastChat(e,t){const i={id:Math.random().toString(36).substring(2,9),senderId:this.myId,senderName:t,text:e,timestamp:Date.now()},s=JSON.stringify({type:"chat",payload:i});for(const a of this.dataChannels.values())a.readyState==="open"&&a.send(s);this.onChatMessage&&this.onChatMessage(i)}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),wA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),w0=o=>{const e=wA(o);return e.charAt(0).toUpperCase()+e.slice(1)},M_=(...o)=>o.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim(),AA=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var bA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=Qe.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:c,...f},d)=>Qe.createElement("svg",{ref:d,...bA,width:e,height:e,stroke:o,strokeWidth:i?Number(t)*24/Number(e):t,className:M_("lucide",s),...!a&&!AA(f)&&{"aria-hidden":"true"},...f},[...c.map(([h,m])=>Qe.createElement(h,m)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=(o,e)=>{const t=Qe.forwardRef(({className:i,...s},a)=>Qe.createElement(RA,{ref:a,iconNode:e,className:M_(`lucide-${TA(w0(o))}`,`lucide-${o}`,i),...s}));return t.displayName=w0(o),t};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],A0=Es("car",CA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],LA=Es("check",PA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=[["path",{d:"M11 20H2",key:"nlcfvz"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",key:"au4z13"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14",key:"74r1mk"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M22 20h-3",key:"vhrsz"}]],b0=Es("door-open",IA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],DA=Es("message-square",NA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],FA=Es("send",UA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],E_=Es("users",OA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],BA=Es("wifi",kA),zA="ZnayCxidbQCbNQZ0JPM2lCES2IhfHIrJRqbHUckq",VA="free.blr2",HA="__lobby__",GA=12e3;function WA({onJoinRoom:o}){const[e,t]=Qe.useState([]),[i,s]=Qe.useState(!0),[a,c]=Qe.useState("");!window.location.hostname.includes("localhost")&&window.location.hostname.includes("127.0.0.1");const f=Qe.useRef(new Map),d=Qe.useRef(null),h=()=>{const _=Date.now(),g=new Map;for(const[M,E]of f.current){if(_-E.lastSeen>GA){f.current.delete(M);continue}g.set(E.roomId,(g.get(E.roomId)||0)+1)}const v=Array.from(g.entries()).map(([M,E])=>({id:M,playerCount:E})).sort((M,E)=>E.playerCount-M.playerCount);t(v),s(!1)};Qe.useEffect(()=>{const _=`wss://${VA}.piesocket.com/v3/${encodeURIComponent(HA)}?api_key=${zA}`,g=new WebSocket(_);d.current=g,g.onopen=()=>{s(!1),g.send(JSON.stringify({type:"lobby-ping"}))},g.onmessage=M=>{let E;try{E=JSON.parse(M.data)}catch{return}if(!(E.event==="system"||E.sender==="system")){if(E.event&&E.data)try{E=typeof E.data=="string"?JSON.parse(E.data):E.data}catch{return}E.type==="lobby-room-announce"&&E.playerId&&E.roomId&&(f.current.set(E.playerId,{roomId:E.roomId,lastSeen:Date.now()}),h()),E.type==="lobby-player-left"&&E.playerId&&(f.current.delete(E.playerId),h())}},g.onerror=()=>{c("Could not connect to lobby"),s(!1)};const v=setInterval(h,5e3);return()=>{clearInterval(v),g.close(),d.current=null}},[]),Qe.useEffect(()=>{},[]);const m=e.reduce((_,g)=>_+g.playerCount,0);return me.jsxs("div",{className:"w-full max-w-lg",children:[me.jsxs("div",{className:"flex items-center justify-between mb-4",children:[me.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[me.jsx(BA,{className:"w-5 h-5 text-emerald-400"}),"Active Rooms"]}),me.jsxs("div",{className:"flex items-center gap-3",children:[me.jsx("span",{className:"text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full",children:"Online"}),me.jsxs("span",{className:"text-sm text-slate-400 flex items-center gap-1",children:[me.jsx(E_,{className:"w-4 h-4"}),m," online"]}),!1]})]}),a&&me.jsx("div",{className:"bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-4 text-sm",children:a}),e.length===0&&!i&&!a&&me.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center",children:[me.jsx(b0,{className:"w-10 h-10 text-slate-600 mx-auto mb-3"}),me.jsx("p",{className:"text-slate-400 text-sm",children:"No active rooms"}),me.jsx("p",{className:"text-slate-500 text-xs mt-1",children:"Create one by entering a Room ID below"})]}),e.length>0&&me.jsx("div",{className:"space-y-2 max-h-72 overflow-y-auto pr-1",children:e.map(_=>me.jsxs("button",{onClick:()=>o(_.id),className:"w-full flex items-center justify-between bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700 hover:border-blue-500/50 rounded-xl px-4 py-3 transition-all group",children:[me.jsxs("div",{className:"flex items-center gap-3",children:[me.jsx("div",{className:"bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors",children:me.jsx(b0,{className:"w-4 h-4 text-blue-400"})}),me.jsx("span",{className:"font-mono text-white font-medium",children:_.id})]}),me.jsxs("div",{className:"flex items-center gap-2",children:[me.jsxs("div",{className:"flex items-center gap-1.5",children:[me.jsxs("span",{className:"relative flex h-2 w-2",children:[me.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),me.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-500"})]}),me.jsxs("span",{className:"text-sm text-slate-300",children:[_.playerCount," player",_.playerCount!==1?"s":""]})]}),me.jsx("span",{className:"text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity",children:"Join →"})]})]},_.id))})]})}const R0="AIzaSyDL9J82iDhcUWdQiuIvBYa0t5asrtz3Swk",C0="TEST",XA="ZnayCxidbQCbNQZ0JPM2lCES2IhfHIrJRqbHUckq",jA="free.blr2",qA=13.7563,YA=100.5018,P0=[{id:"car",name:"Sports Car"},{id:"suv",name:"SUV"},{id:"bus",name:"Bus"},{id:"compact",name:"Compact"}],L0=[{id:"#ef4444",name:"Red"},{id:"#3b82f6",name:"Blue"},{id:"#eab308",name:"Yellow"},{id:"#22c55e",name:"Green"},{id:"#a855f7",name:"Purple"},{id:"#f97316",name:"Orange"},{id:"#ffffff",name:"White"},{id:"#1f2937",name:"Black"}];function KA(){const[o,e]=Qe.useState(!1),[t,i]=Qe.useState(""),[s,a]=Qe.useState(R0),[c,f]=Qe.useState(C0),[d,h]=Qe.useState(""),[m]=Qe.useState(()=>new MA(qA,YA,0)),_=Qe.useRef(new Map),[g,v]=Qe.useState(0),[M,E]=Qe.useState([]),[y,S]=Qe.useState(""),[R,L]=Qe.useState(!1),C=Qe.useRef(!1),[O,D]=Qe.useState(0),[k,w]=Qe.useState(P0[0].id),[P,ae]=Qe.useState(L0[0].id),[F,W]=Qe.useState(!0),[X,ne]=Qe.useState("Player"+Math.floor(Math.random()*1e3)),q=Qe.useRef(null),$=Qe.useRef({}),B=Qe.useRef(0),Y=Qe.useRef(null),Z=Qe.useRef(null),se=Qe.useRef(null);Qe.useEffect(()=>{const _e=ee=>{ee.target instanceof HTMLInputElement||ee.target instanceof HTMLTextAreaElement||($.current[ee.key]=!0)},De=ee=>{ee.target instanceof HTMLInputElement||ee.target instanceof HTMLTextAreaElement||($.current[ee.key]=!1)};return window.addEventListener("keydown",_e),window.addEventListener("keyup",De),()=>{window.removeEventListener("keydown",_e),window.removeEventListener("keyup",De)}},[]),!window.location.hostname.includes("localhost")&&window.location.hostname.includes("127.0.0.1");const N=()=>{if(!s||!t){h("Please fill in all required fields.");return}h("");{let ee,he,ce;ce=`wss://${jA}.piesocket.com/v3/%CHANNEL%?api_key=${XA}`,ee=ce.replace("%CHANNEL%",encodeURIComponent(t)),he="piesocket";const Ce=new EA(ee,he,ce);q.current=Ce,Ce.onPeerData=(Le,Ye)=>{_.current.set(Le,Ye)},Ce.onPeerLeft=Le=>{_.current.delete(Le),v(_.current.size)},Ce.onPeerJoined=Le=>{v(_.current.size+1)},Ce.onChatMessage=Le=>{E(Ye=>[...Ye.slice(-49),Le]),C.current||D(Ye=>Ye+1)},Ce.connect(t)}m.setCarType(k),e(!0);try{const ee=window.AudioContext||window.webkitAudioContext,he=new ee;Y.current=he;const ce=he.createOscillator();ce.type="sawtooth",ce.frequency.value=50;const Ce=he.createBiquadFilter();Ce.type="lowpass",Ce.frequency.value=400;const Le=he.createGain();Le.gain.value=.05,ce.connect(Ce),Ce.connect(Le),Le.connect(he.destination),ce.start(),Z.current=ce,se.current=Le}catch(ee){console.error("Audio initialization failed:",ee)}let _e=0;const De=ee=>{if(m.update($.current),Z.current&&se.current&&Y.current){const he=Math.abs(m.speed*24e6),ce=50+he*1.5;Z.current.frequency.setTargetAtTime(ce,Y.current.currentTime,.1);const Ce=$.current.ArrowUp||$.current.w||$.current.W,Le=$.current.ArrowDown||$.current.s||$.current.S;let Ye=.05;Ce?Ye=.15:(Le||he>5)&&(Ye=.1),se.current.gain.setTargetAtTime(Ye,Y.current.currentTime,.1)}q.current&&ee-_e>33&&(q.current.broadcastSync({lat:m.lat,lng:m.lng,heading:m.heading,speed:m.speed,steeringAngle:m.steeringAngle,pitch:m.pitch,roll:m.roll,carType:k,carColor:P,playerName:X}),_e=ee),B.current=requestAnimationFrame(De)};B.current=requestAnimationFrame(De)},J=()=>{q.current&&(q.current.disconnect(),q.current=null),Y.current&&(Y.current.close(),Y.current=null,Z.current=null,se.current=null),cancelAnimationFrame(B.current),e(!1),_.current.clear(),v(0),E([])},Re=_e=>{_e.preventDefault(),!(!y.trim()||!q.current)&&(q.current.broadcastChat(y,X),S(""))};return o?me.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-slate-900",children:[me.jsx(mA,{apiKey:s,mapId:c,myCar:m,myCarType:k,myCarColor:P,playerName:X,peersRef:_,onMapError:_e=>{J(),h(_e)},onRoadStatusChange:W}),me.jsxs("div",{className:"absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-2xl text-white",children:[me.jsxs("h2",{className:"font-bold text-lg mb-1 flex items-center gap-2",children:[me.jsx(A0,{className:"w-5 h-5 text-blue-400"}),"World Drive"]}),me.jsxs("div",{className:"text-sm text-slate-300 space-y-1",children:[me.jsxs("p",{children:["Room: ",me.jsx("span",{className:"text-white font-mono",children:t})]}),me.jsxs("p",{className:"flex items-center gap-1",children:[me.jsx(E_,{className:"w-4 h-4"}),g+1," Player",g!==0?"s":""]}),me.jsx("p",{className:`font-semibold ${F?"text-green-400":"text-amber-400"}`,children:F?"On Road":"Off Road (slow)"})]})]}),me.jsxs("div",{className:"absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-2xl text-white text-sm",children:[me.jsx("p",{className:"font-semibold mb-2 text-slate-300",children:"Controls"}),me.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2",children:[me.jsx("span",{className:"text-slate-400",children:"Accelerate"}),me.jsx("span",{className:"font-mono bg-slate-800 px-2 py-0.5 rounded text-center",children:"W / ↑"}),me.jsx("span",{className:"text-slate-400",children:"Brake/Rev"}),me.jsx("span",{className:"font-mono bg-slate-800 px-2 py-0.5 rounded text-center",children:"S / ↓"}),me.jsx("span",{className:"text-slate-400",children:"Steer"}),me.jsx("span",{className:"font-mono bg-slate-800 px-2 py-0.5 rounded text-center",children:"A D / ← →"})]}),me.jsx("button",{onClick:J,className:"w-full mt-4 bg-red-500/20 hover:bg-red-500/40 text-red-400 py-1.5 rounded transition-colors",children:"Leave Game"})]}),me.jsx(SA,{car:m}),me.jsxs("div",{className:`absolute bottom-4 left-4 w-80 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl flex flex-col transition-all duration-300 ${R?"h-96":"h-12"}`,children:[me.jsxs("button",{onClick:()=>{const _e=!R;L(_e),C.current=_e,_e&&D(0)},className:"flex items-center justify-between p-3 text-white hover:bg-slate-800/50 rounded-t-xl transition-colors",children:[me.jsxs("span",{className:"flex items-center gap-2 font-medium",children:[me.jsx(DA,{className:"w-4 h-4 text-blue-400"}),"Chat"]}),O>0&&!R&&me.jsx("span",{className:"bg-blue-500 text-xs px-2 py-0.5 rounded-full",children:O})]}),R&&me.jsxs(me.Fragment,{children:[me.jsx("div",{className:"flex-1 overflow-y-auto p-3 space-y-2 border-t border-slate-700/50 scrollbar-thin scrollbar-thumb-slate-600",children:M.map(_e=>{var De;return me.jsxs("div",{className:`text-sm ${_e.senderId===((De=q.current)==null?void 0:De.myId)?"text-blue-300 text-right":"text-slate-300"}`,children:[me.jsx("span",{className:"font-mono text-xs opacity-50 mr-2",children:_e.senderName}),me.jsx("span",{className:"bg-slate-800/80 px-2 py-1 rounded-lg inline-block",children:_e.text})]},_e.id)})}),me.jsxs("form",{onSubmit:Re,className:"p-2 border-t border-slate-700/50 flex gap-2",children:[me.jsx("input",{type:"text",value:y,onChange:_e=>S(_e.target.value),placeholder:"Type a message...",className:"flex-1 bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"}),me.jsx("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-500 text-white p-1.5 rounded transition-colors",children:me.jsx(FA,{className:"w-4 h-4"})})]})]})]})]}):me.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center p-4 text-slate-100 font-sans",children:me.jsx("div",{className:"max-w-lg w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700",children:me.jsxs("div",{className:"p-8",children:[me.jsx("div",{className:"flex items-center justify-center mb-8",children:me.jsx("div",{className:"bg-blue-500 p-3 rounded-xl shadow-lg shadow-blue-500/30",children:me.jsx(A0,{className:"w-8 h-8 text-white"})})}),me.jsx("h1",{className:"text-3xl font-bold text-center mb-2",children:"World Drive"}),me.jsx("p",{className:"text-slate-400 text-center mb-8",children:"Multiplayer driving on real-world maps"}),me.jsx(WA,{onJoinRoom:_e=>i(_e)}),me.jsxs("div",{className:"my-4 flex items-center gap-3",children:[me.jsx("div",{className:"flex-1 h-px bg-slate-700"}),me.jsx("span",{className:"text-xs text-slate-500 uppercase",children:"or create a room"}),me.jsx("div",{className:"flex-1 h-px bg-slate-700"})]}),d&&me.jsx("div",{className:"bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6 text-sm",children:d}),me.jsxs("div",{className:"space-y-4",children:[me.jsxs("div",{className:"space-y-3 mb-6",children:[me.jsx("label",{className:"block text-sm font-medium text-slate-400",children:"Select Car"}),me.jsx("div",{className:"grid grid-cols-2 gap-2",children:P0.map(_e=>me.jsx("button",{onClick:()=>w(_e.id),className:`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${k===_e.id?"bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"}`,children:_e.name},_e.id))}),me.jsx("label",{className:"block text-sm font-medium text-slate-400 mt-4",children:"Select Color"}),me.jsx("div",{className:"flex flex-wrap gap-2",children:L0.map(_e=>me.jsx("button",{onClick:()=>ae(_e.id),style:{backgroundColor:_e.id},className:`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${P===_e.id?"border-white scale-110 shadow-lg":"border-transparent hover:scale-105 opacity-80 hover:opacity-100"}`,title:_e.name,children:P===_e.id&&me.jsx(LA,{className:`w-4 h-4 ${_e.id==="#ffffff"?"text-black":"text-white"}`})},_e.id))})]}),me.jsxs("div",{children:[me.jsx("label",{className:"block text-sm font-medium text-slate-400 mb-1",children:"Player Name"}),me.jsx("input",{type:"text",value:X,onChange:_e=>ne(_e.target.value),placeholder:"e.g. SpeedRacer",className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"})]}),me.jsxs("div",{children:[me.jsx("label",{className:"block text-sm font-medium text-slate-400 mb-1",children:"Room ID"}),me.jsx("input",{type:"text",value:t,onChange:_e=>i(_e.target.value),placeholder:"e.g. tokyo-drift",className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"})]}),!R0,!C0,me.jsx("button",{onClick:N,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-4 shadow-lg shadow-blue-600/20",children:"Join Game"})]})]})})})}ux.createRoot(document.getElementById("root")).render(me.jsx(Qe.StrictMode,{children:me.jsx(KA,{})}));
