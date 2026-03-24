(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();var gf={exports:{}},ca={},_f={exports:{}},vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function ex(){if(Gm)return vt;Gm=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function m(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(k,B,Ee){this.props=k,this.context=B,this.refs=E,this.updater=Ee||x}y.prototype.isReactComponent={},y.prototype.setState=function(k,B){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,B,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function S(){}S.prototype=y.prototype;function R(k,B,Ee){this.props=k,this.context=B,this.refs=E,this.updater=Ee||x}var L=R.prototype=new S;L.constructor=R,M(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,D=Object.prototype.hasOwnProperty,U={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function w(k,B,Ee){var Re,Fe={},te=null,he=null;if(B!=null)for(Re in B.ref!==void 0&&(he=B.ref),B.key!==void 0&&(te=""+B.key),B)D.call(B,Re)&&!N.hasOwnProperty(Re)&&(Fe[Re]=B[Re]);var de=arguments.length-2;if(de===1)Fe.children=Ee;else if(1<de){for(var Pe=Array(de),We=0;We<de;We++)Pe[We]=arguments[We+2];Fe.children=Pe}if(k&&k.defaultProps)for(Re in de=k.defaultProps,de)Fe[Re]===void 0&&(Fe[Re]=de[Re]);return{$$typeof:o,type:k,key:te,ref:he,props:Fe,_owner:U.current}}function C(k,B){return{$$typeof:o,type:k.type,key:B,ref:k.ref,props:k.props,_owner:k._owner}}function se(k){return typeof k=="object"&&k!==null&&k.$$typeof===o}function O(k){var B={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ee){return B[Ee]})}var q=/\/+/g;function W(k,B){return typeof k=="object"&&k!==null&&k.key!=null?O(""+k.key):B.toString(36)}function ee(k,B,Ee,Re,Fe){var te=typeof k;(te==="undefined"||te==="boolean")&&(k=null);var he=!1;if(k===null)he=!0;else switch(te){case"string":case"number":he=!0;break;case"object":switch(k.$$typeof){case o:case e:he=!0}}if(he)return he=k,Fe=Fe(he),k=Re===""?"."+W(he,0):Re,P(Fe)?(Ee="",k!=null&&(Ee=k.replace(q,"$&/")+"/"),ee(Fe,B,Ee,"",function(We){return We})):Fe!=null&&(se(Fe)&&(Fe=C(Fe,Ee+(!Fe.key||he&&he.key===Fe.key?"":(""+Fe.key).replace(q,"$&/")+"/")+k)),B.push(Fe)),1;if(he=0,Re=Re===""?".":Re+":",P(k))for(var de=0;de<k.length;de++){te=k[de];var Pe=Re+W(te,de);he+=ee(te,B,Ee,Pe,Fe)}else if(Pe=m(k),typeof Pe=="function")for(k=Pe.call(k),de=0;!(te=k.next()).done;)te=te.value,Pe=Re+W(te,de++),he+=ee(te,B,Ee,Pe,Fe);else if(te==="object")throw B=String(k),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.");return he}function Z(k,B,Ee){if(k==null)return k;var Re=[],Fe=0;return ee(k,Re,"","",function(te){return B.call(Ee,te,Fe++)}),Re}function K(k){if(k._status===-1){var B=k._result;B=B(),B.then(function(Ee){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ee)},function(Ee){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ee)}),k._status===-1&&(k._status=0,k._result=B)}if(k._status===1)return k._result.default;throw k._result}var X={current:null},J={transition:null},ae={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:J,ReactCurrentOwner:U};function ce(){throw Error("act(...) is not supported in production builds of React.")}return vt.Children={map:Z,forEach:function(k,B,Ee){Z(k,function(){B.apply(this,arguments)},Ee)},count:function(k){var B=0;return Z(k,function(){B++}),B},toArray:function(k){return Z(k,function(B){return B})||[]},only:function(k){if(!se(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},vt.Component=y,vt.Fragment=t,vt.Profiler=s,vt.PureComponent=R,vt.StrictMode=i,vt.Suspense=d,vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,vt.act=ce,vt.cloneElement=function(k,B,Ee){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Re=M({},k.props),Fe=k.key,te=k.ref,he=k._owner;if(B!=null){if(B.ref!==void 0&&(te=B.ref,he=U.current),B.key!==void 0&&(Fe=""+B.key),k.type&&k.type.defaultProps)var de=k.type.defaultProps;for(Pe in B)D.call(B,Pe)&&!N.hasOwnProperty(Pe)&&(Re[Pe]=B[Pe]===void 0&&de!==void 0?de[Pe]:B[Pe])}var Pe=arguments.length-2;if(Pe===1)Re.children=Ee;else if(1<Pe){de=Array(Pe);for(var We=0;We<Pe;We++)de[We]=arguments[We+2];Re.children=de}return{$$typeof:o,type:k.type,key:Fe,ref:te,props:Re,_owner:he}},vt.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:a,_context:k},k.Consumer=k},vt.createElement=w,vt.createFactory=function(k){var B=w.bind(null,k);return B.type=k,B},vt.createRef=function(){return{current:null}},vt.forwardRef=function(k){return{$$typeof:f,render:k}},vt.isValidElement=se,vt.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:K}},vt.memo=function(k,B){return{$$typeof:h,type:k,compare:B===void 0?null:B}},vt.startTransition=function(k){var B=J.transition;J.transition={};try{k()}finally{J.transition=B}},vt.unstable_act=ce,vt.useCallback=function(k,B){return X.current.useCallback(k,B)},vt.useContext=function(k){return X.current.useContext(k)},vt.useDebugValue=function(){},vt.useDeferredValue=function(k){return X.current.useDeferredValue(k)},vt.useEffect=function(k,B){return X.current.useEffect(k,B)},vt.useId=function(){return X.current.useId()},vt.useImperativeHandle=function(k,B,Ee){return X.current.useImperativeHandle(k,B,Ee)},vt.useInsertionEffect=function(k,B){return X.current.useInsertionEffect(k,B)},vt.useLayoutEffect=function(k,B){return X.current.useLayoutEffect(k,B)},vt.useMemo=function(k,B){return X.current.useMemo(k,B)},vt.useReducer=function(k,B,Ee){return X.current.useReducer(k,B,Ee)},vt.useRef=function(k){return X.current.useRef(k)},vt.useState=function(k){return X.current.useState(k)},vt.useSyncExternalStore=function(k,B,Ee){return X.current.useSyncExternalStore(k,B,Ee)},vt.useTransition=function(){return X.current.useTransition()},vt.version="18.3.1",vt}var Wm;function ih(){return Wm||(Wm=1,_f.exports=ex()),_f.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function tx(){if(Xm)return ca;Xm=1;var o=ih(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var g,_={},m=null,x=null;h!==void 0&&(m=""+h),d.key!==void 0&&(m=""+d.key),d.ref!==void 0&&(x=d.ref);for(g in d)i.call(d,g)&&!a.hasOwnProperty(g)&&(_[g]=d[g]);if(f&&f.defaultProps)for(g in d=f.defaultProps,d)_[g]===void 0&&(_[g]=d[g]);return{$$typeof:e,type:f,key:m,ref:x,props:_,_owner:s.current}}return ca.Fragment=t,ca.jsx=c,ca.jsxs=c,ca}var jm;function nx(){return jm||(jm=1,gf.exports=tx()),gf.exports}var me=nx(),it=ih(),Hl={},vf={exports:{}},Hn={},xf={exports:{}},yf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qm;function ix(){return qm||(qm=1,(function(o){function e(J,ae){var ce=J.length;J.push(ae);e:for(;0<ce;){var k=ce-1>>>1,B=J[k];if(0<s(B,ae))J[k]=ae,J[ce]=B,ce=k;else break e}}function t(J){return J.length===0?null:J[0]}function i(J){if(J.length===0)return null;var ae=J[0],ce=J.pop();if(ce!==ae){J[0]=ce;e:for(var k=0,B=J.length,Ee=B>>>1;k<Ee;){var Re=2*(k+1)-1,Fe=J[Re],te=Re+1,he=J[te];if(0>s(Fe,ce))te<B&&0>s(he,Fe)?(J[k]=he,J[te]=ce,k=te):(J[k]=Fe,J[Re]=ce,k=Re);else if(te<B&&0>s(he,ce))J[k]=he,J[te]=ce,k=te;else break e}}return ae}function s(J,ae){var ce=J.sortIndex-ae.sortIndex;return ce!==0?ce:J.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;o.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var d=[],h=[],g=1,_=null,m=3,x=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(J){for(var ae=t(h);ae!==null;){if(ae.callback===null)i(h);else if(ae.startTime<=J)i(h),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(h)}}function P(J){if(E=!1,L(J),!M)if(t(d)!==null)M=!0,K(D);else{var ae=t(h);ae!==null&&X(P,ae.startTime-J)}}function D(J,ae){M=!1,E&&(E=!1,S(w),w=-1),x=!0;var ce=m;try{for(L(ae),_=t(d);_!==null&&(!(_.expirationTime>ae)||J&&!O());){var k=_.callback;if(typeof k=="function"){_.callback=null,m=_.priorityLevel;var B=k(_.expirationTime<=ae);ae=o.unstable_now(),typeof B=="function"?_.callback=B:_===t(d)&&i(d),L(ae)}else i(d);_=t(d)}if(_!==null)var Ee=!0;else{var Re=t(h);Re!==null&&X(P,Re.startTime-ae),Ee=!1}return Ee}finally{_=null,m=ce,x=!1}}var U=!1,N=null,w=-1,C=5,se=-1;function O(){return!(o.unstable_now()-se<C)}function q(){if(N!==null){var J=o.unstable_now();se=J;var ae=!0;try{ae=N(!0,J)}finally{ae?W():(U=!1,N=null)}}else U=!1}var W;if(typeof R=="function")W=function(){R(q)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,Z=ee.port2;ee.port1.onmessage=q,W=function(){Z.postMessage(null)}}else W=function(){y(q,0)};function K(J){N=J,U||(U=!0,W())}function X(J,ae){w=y(function(){J(o.unstable_now())},ae)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(J){J.callback=null},o.unstable_continueExecution=function(){M||x||(M=!0,K(D))},o.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<J?Math.floor(1e3/J):5},o.unstable_getCurrentPriorityLevel=function(){return m},o.unstable_getFirstCallbackNode=function(){return t(d)},o.unstable_next=function(J){switch(m){case 1:case 2:case 3:var ae=3;break;default:ae=m}var ce=m;m=ae;try{return J()}finally{m=ce}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(J,ae){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ce=m;m=J;try{return ae()}finally{m=ce}},o.unstable_scheduleCallback=function(J,ae,ce){var k=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?k+ce:k):ce=k,J){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=ce+B,J={id:g++,callback:ae,priorityLevel:J,startTime:ce,expirationTime:B,sortIndex:-1},ce>k?(J.sortIndex=ce,e(h,J),t(d)===null&&J===t(h)&&(E?(S(w),w=-1):E=!0,X(P,ce-k))):(J.sortIndex=B,e(d,J),M||x||(M=!0,K(D))),J},o.unstable_shouldYield=O,o.unstable_wrapCallback=function(J){var ae=m;return function(){var ce=m;m=ae;try{return J.apply(this,arguments)}finally{m=ce}}}})(yf)),yf}var Ym;function rx(){return Ym||(Ym=1,xf.exports=ix()),xf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function sx(){if(Km)return Hn;Km=1;var o=ih(),e=rx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function a(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function m(n){return d.call(_,n)?!0:d.call(g,n)?!1:h.test(n)?_[n]=!0:(g[n]=!0,!1)}function x(n,r,l,u){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return u?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,r,l,u){if(r===null||typeof r>"u"||x(n,r,l,u))return!0;if(u)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function E(n,r,l,u,p,v,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new E(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,R);y[r]=new E(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,R);y[r]=new E(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,R);y[r]=new E(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,r,l,u){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:u||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(M(r,l,p,u)&&(l=null),u||p===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,u=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,u?n.setAttributeNS(u,r,l):n.setAttribute(r,l))))}var P=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),U=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),se=Symbol.for("react.provider"),O=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),Z=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),J=Symbol.iterator;function ae(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,k;function B(n){if(k===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);k=r&&r[1]||""}return`
`+k+n}var Ee=!1;function Re(n,r){if(!n||Ee)return"";Ee=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(oe){var u=oe}Reflect.construct(n,[],r)}else{try{r.call()}catch(oe){u=oe}n.call(r.prototype)}else{try{throw Error()}catch(oe){u=oe}n()}}catch(oe){if(oe&&u&&typeof oe.stack=="string"){for(var p=oe.stack.split(`
`),v=u.stack.split(`
`),A=p.length-1,F=v.length-1;1<=A&&0<=F&&p[A]!==v[F];)F--;for(;1<=A&&0<=F;A--,F--)if(p[A]!==v[F]){if(A!==1||F!==1)do if(A--,F--,0>F||p[A]!==v[F]){var z=`
`+p[A].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=A&&0<=F);break}}}finally{Ee=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?B(n):""}function Fe(n){switch(n.tag){case 5:return B(n.type);case 16:return B("Lazy");case 13:return B("Suspense");case 19:return B("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case U:return"Portal";case C:return"Profiler";case w:return"StrictMode";case W:return"Suspense";case ee:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case se:return(n._context.displayName||"Context")+".Provider";case q:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Z:return r=n.displayName||null,r!==null?r:te(n.type)||"Memo";case K:r=n._payload,n=n._init;try{return te(n(r))}catch{}}return null}function he(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function de(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Pe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function We(n){var r=Pe(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),u=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(A){u=""+A,v.call(this,A)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function rt(n){n._valueTracker||(n._valueTracker=We(n))}function Zt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),u="";return n&&(u=Pe(n)?n.checked?"true":"false":n.value),n=u,n!==l?(r.setValue(n),!0):!1}function _t(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,r){var l=r.checked;return ce({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function It(n,r){var l=r.defaultValue==null?"":r.defaultValue,u=r.checked!=null?r.checked:r.defaultChecked;l=de(r.value!=null?r.value:l),n._wrapperState={initialChecked:u,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function dt(n,r){r=r.checked,r!=null&&L(n,"checked",r,!1)}function Vt(n,r){dt(n,r);var l=de(r.value),u=r.type;if(l!=null)u==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Xt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Xt(n,r.type,de(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function V(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var u=r.type;if(!(u!=="submit"&&u!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Xt(n,r,l){(r!=="number"||_t(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var St=Array.isArray;function bt(n,r,l,u){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&u&&(n[l].defaultSelected=!0)}else{for(l=""+de(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function Xe(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function I(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(St(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:de(l)}}function T(n,r){var l=de(r.value),u=de(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),u!=null&&(n.defaultValue=""+u)}function j(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,ze=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,u,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,u,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Ae(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];Object.keys(Ke).forEach(function(n){st.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ke[r]=Ke[n]})});function ye(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ke.hasOwnProperty(n)&&Ke[n]?(""+r).trim():r+"px"}function we(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var u=l.indexOf("--")===0,p=ye(l,r[l],u);l==="float"&&(l="cssFloat"),u?n.setProperty(l,p):n[l]=p}}var je=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ve(n,r){if(r){if(je[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ne(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,Me=null,De=null;function Se(n){if(n=Yo(n)){if(typeof be!="function")throw Error(t(280));var r=n.stateNode;r&&(r=il(r),be(n.stateNode,n.type,r))}}function fe(n){Me?De?De.push(n):De=[n]:Me=n}function He(){if(Me){var n=Me,r=De;if(De=Me=null,Se(n),r)for(n=0;n<r.length;n++)Se(r[n])}}function at(n,r){return n(r)}function Dt(){}var Rt=!1;function ei(n,r,l){if(Rt)return n(r,l);Rt=!0;try{return at(n,r,l)}finally{Rt=!1,(Me!==null||De!==null)&&(Dt(),He())}}function An(n,r){var l=n.stateNode;if(l===null)return null;var u=il(l);if(u===null)return null;l=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Ts=!1;if(f)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{Ts=!1}function Oc(n,r,l,u,p,v,A,F,z){var oe=Array.prototype.slice.call(arguments,3);try{r.apply(l,oe)}catch(ve){this.onError(ve)}}var xr=!1,$r=null,ti=!1,Zr=null,Ua={onError:function(n){xr=!0,$r=n}};function Fa(n,r,l,u,p,v,A,F,z){xr=!1,$r=null,Oc.apply(Ua,arguments)}function ws(n,r,l,u,p,v,A,F,z){if(Fa.apply(this,arguments),xr){if(xr){var oe=$r;xr=!1,$r=null}else throw Error(t(198));ti||(ti=!0,Zr=oe)}}function Ri(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Jr(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Po(n){if(Ri(n)!==n)throw Error(t(188))}function Oa(n){var r=n.alternate;if(!r){if(r=Ri(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,u=r;;){var p=l.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){l=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===l)return Po(p),n;if(v===u)return Po(p),r;v=v.sibling}throw Error(t(188))}if(l.return!==u.return)l=p,u=v;else{for(var A=!1,F=p.child;F;){if(F===l){A=!0,l=p,u=v;break}if(F===u){A=!0,u=p,l=v;break}F=F.sibling}if(!A){for(F=v.child;F;){if(F===l){A=!0,l=v,u=p;break}if(F===u){A=!0,u=v,l=p;break}F=F.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==u)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function ka(n){return n=Oa(n),n!==null?Ba(n):null}function Ba(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ba(n);if(r!==null)return r;n=n.sibling}return null}var za=e.unstable_scheduleCallback,Va=e.unstable_cancelCallback,kc=e.unstable_shouldYield,Bc=e.unstable_requestPaint,b=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,le=e.unstable_ImmediatePriority,re=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,Le=e.unstable_LowPriority,ke=e.unstable_IdlePriority,Ce=null,Ue=null;function Ze(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(Ce,n,void 0,(n.current.flags&128)===128)}catch{}}var et=Math.clz32?Math.clz32:Nt,ht=Math.log,Je=Math.LN2;function Nt(n){return n>>>=0,n===0?32:31-(ht(n)/Je|0)|0}var Bt=64,kt=4194304;function wt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Jt(n,r){var l=n.pendingLanes;if(l===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,A=l&268435455;if(A!==0){var F=A&~p;F!==0?u=wt(F):(v&=A,v!==0&&(u=wt(v)))}else A=l&~p,A!==0?u=wt(A):v!==0&&(u=wt(v));if(u===0)return 0;if(r!==0&&r!==u&&(r&p)===0&&(p=u&-u,v=r&-r,p>=v||p===16&&(v&4194240)!==0))return r;if((u&4)!==0&&(u|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=u;0<r;)l=31-et(r),p=1<<l,u|=n[l],r&=~p;return u}function Ye(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bn(n,r){for(var l=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var A=31-et(v),F=1<<A,z=p[A];z===-1?((F&l)===0||(F&u)!==0)&&(p[A]=Ye(F,r)):z<=r&&(n.expiredLanes|=F),v&=~F}}function Mt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Un(){var n=Bt;return Bt<<=1,(Bt&4194240)===0&&(Bt=64),n}function Fn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Xn(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-et(r),n[r]=l}function yr(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-et(l),v=1<<p;r[p]=0,u[p]=-1,n[p]=-1,l&=~v}}function Lt(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var u=31-et(l),p=1<<u;p&r|n[u]&r&&(n[u]|=r),l&=~p}}var lt=0;function hi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Qt,ni,$i,Lo,wh,zc=!1,Ha=[],Sr=null,Mr=null,Er=null,Io=new Map,No=new Map,Tr=[],M_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ah(n,r){switch(n){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Io.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(r.pointerId)}}function Do(n,r,l,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},r!==null&&(r=Yo(r),r!==null&&ni(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function E_(n,r,l,u,p){switch(r){case"focusin":return Sr=Do(Sr,n,r,l,u,p),!0;case"dragenter":return Mr=Do(Mr,n,r,l,u,p),!0;case"mouseover":return Er=Do(Er,n,r,l,u,p),!0;case"pointerover":var v=p.pointerId;return Io.set(v,Do(Io.get(v)||null,n,r,l,u,p)),!0;case"gotpointercapture":return v=p.pointerId,No.set(v,Do(No.get(v)||null,n,r,l,u,p)),!0}return!1}function bh(n){var r=Qr(n.target);if(r!==null){var l=Ri(r);if(l!==null){if(r=l.tag,r===13){if(r=Jr(l),r!==null){n.blockedOn=r,wh(n.priority,function(){$i(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ga(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Hc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var u=new l.constructor(l.type,l);ft=u,l.target.dispatchEvent(u),ft=null}else return r=Yo(l),r!==null&&ni(r),n.blockedOn=l,!1;r.shift()}return!0}function Rh(n,r,l){Ga(n)&&l.delete(r)}function T_(){zc=!1,Sr!==null&&Ga(Sr)&&(Sr=null),Mr!==null&&Ga(Mr)&&(Mr=null),Er!==null&&Ga(Er)&&(Er=null),Io.forEach(Rh),No.forEach(Rh)}function Uo(n,r){n.blockedOn===r&&(n.blockedOn=null,zc||(zc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,T_)))}function Fo(n){function r(p){return Uo(p,n)}if(0<Ha.length){Uo(Ha[0],n);for(var l=1;l<Ha.length;l++){var u=Ha[l];u.blockedOn===n&&(u.blockedOn=null)}}for(Sr!==null&&Uo(Sr,n),Mr!==null&&Uo(Mr,n),Er!==null&&Uo(Er,n),Io.forEach(r),No.forEach(r),l=0;l<Tr.length;l++)u=Tr[l],u.blockedOn===n&&(u.blockedOn=null);for(;0<Tr.length&&(l=Tr[0],l.blockedOn===null);)bh(l),l.blockedOn===null&&Tr.shift()}var As=P.ReactCurrentBatchConfig,Wa=!0;function w_(n,r,l,u){var p=lt,v=As.transition;As.transition=null;try{lt=1,Vc(n,r,l,u)}finally{lt=p,As.transition=v}}function A_(n,r,l,u){var p=lt,v=As.transition;As.transition=null;try{lt=4,Vc(n,r,l,u)}finally{lt=p,As.transition=v}}function Vc(n,r,l,u){if(Wa){var p=Hc(n,r,l,u);if(p===null)su(n,r,u,Xa,l),Ah(n,u);else if(E_(p,n,r,l,u))u.stopPropagation();else if(Ah(n,u),r&4&&-1<M_.indexOf(n)){for(;p!==null;){var v=Yo(p);if(v!==null&&Qt(v),v=Hc(n,r,l,u),v===null&&su(n,r,u,Xa,l),v===p)break;p=v}p!==null&&u.stopPropagation()}else su(n,r,u,null,l)}}var Xa=null;function Hc(n,r,l,u){if(Xa=null,n=H(u),n=Qr(n),n!==null)if(r=Ri(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Jr(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Xa=n,null}function Ch(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case le:return 1;case re:return 4;case ne:case Le:return 16;case ke:return 536870912;default:return 16}default:return 16}}var wr=null,Gc=null,ja=null;function Ph(){if(ja)return ja;var n,r=Gc,l=r.length,u,p="value"in wr?wr.value:wr.textContent,v=p.length;for(n=0;n<l&&r[n]===p[n];n++);var A=l-n;for(u=1;u<=A&&r[l-u]===p[v-u];u++);return ja=p.slice(n,1<u?1-u:void 0)}function qa(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Ya(){return!0}function Lh(){return!1}function jn(n){function r(l,u,p,v,A){this._reactName=l,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(l=n[F],this[F]=l?l(v):v[F]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ya:Lh,this.isPropagationStopped=Lh,this}return ce(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ya)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ya)},persist:function(){},isPersistent:Ya}),r}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wc=jn(bs),Oo=ce({},bs,{view:0,detail:0}),b_=jn(Oo),Xc,jc,ko,Ka=ce({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ko&&(ko&&n.type==="mousemove"?(Xc=n.screenX-ko.screenX,jc=n.screenY-ko.screenY):jc=Xc=0,ko=n),Xc)},movementY:function(n){return"movementY"in n?n.movementY:jc}}),Ih=jn(Ka),R_=ce({},Ka,{dataTransfer:0}),C_=jn(R_),P_=ce({},Oo,{relatedTarget:0}),qc=jn(P_),L_=ce({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),I_=jn(L_),N_=ce({},bs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),D_=jn(N_),U_=ce({},bs,{data:0}),Nh=jn(U_),F_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=k_[n])?!!r[n]:!1}function Yc(){return B_}var z_=ce({},Oo,{key:function(n){if(n.key){var r=F_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=qa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?O_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(n){return n.type==="keypress"?qa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),V_=jn(z_),H_=ce({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=jn(H_),G_=ce({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),W_=jn(G_),X_=ce({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=jn(X_),q_=ce({},Ka,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Y_=jn(q_),K_=[9,13,27,32],Kc=f&&"CompositionEvent"in window,Bo=null;f&&"documentMode"in document&&(Bo=document.documentMode);var $_=f&&"TextEvent"in window&&!Bo,Uh=f&&(!Kc||Bo&&8<Bo&&11>=Bo),Fh=" ",Oh=!1;function kh(n,r){switch(n){case"keyup":return K_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function Z_(n,r){switch(n){case"compositionend":return Bh(r);case"keypress":return r.which!==32?null:(Oh=!0,Fh);case"textInput":return n=r.data,n===Fh&&Oh?null:n;default:return null}}function J_(n,r){if(Rs)return n==="compositionend"||!Kc&&kh(n,r)?(n=Ph(),ja=Gc=wr=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Uh&&r.locale!=="ko"?null:r.data;default:return null}}var Q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Q_[n.type]:r==="textarea"}function Vh(n,r,l,u){fe(u),r=el(r,"onChange"),0<r.length&&(l=new Wc("onChange","change",null,l,u),n.push({event:l,listeners:r}))}var zo=null,Vo=null;function ev(n){sp(n,0)}function $a(n){var r=Ns(n);if(Zt(r))return n}function tv(n,r){if(n==="change")return r}var Hh=!1;if(f){var $c;if(f){var Zc="oninput"in document;if(!Zc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),Zc=typeof Gh.oninput=="function"}$c=Zc}else $c=!1;Hh=$c&&(!document.documentMode||9<document.documentMode)}function Wh(){zo&&(zo.detachEvent("onpropertychange",Xh),Vo=zo=null)}function Xh(n){if(n.propertyName==="value"&&$a(Vo)){var r=[];Vh(r,Vo,n,H(n)),ei(ev,r)}}function nv(n,r,l){n==="focusin"?(Wh(),zo=r,Vo=l,zo.attachEvent("onpropertychange",Xh)):n==="focusout"&&Wh()}function iv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $a(Vo)}function rv(n,r){if(n==="click")return $a(r)}function sv(n,r){if(n==="input"||n==="change")return $a(r)}function ov(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var pi=typeof Object.is=="function"?Object.is:ov;function Ho(n,r){if(pi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),u=Object.keys(r);if(l.length!==u.length)return!1;for(u=0;u<l.length;u++){var p=l[u];if(!d.call(r,p)||!pi(n[p],r[p]))return!1}return!0}function jh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qh(n,r){var l=jh(n);n=0;for(var u;l;){if(l.nodeType===3){if(u=n+l.textContent.length,n<=r&&u>=r)return{node:l,offset:r-n};n=u}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=jh(l)}}function Yh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Yh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Kh(){for(var n=window,r=_t();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=_t(n.document)}return r}function Jc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function av(n){var r=Kh(),l=n.focusedElem,u=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Yh(l.ownerDocument.documentElement,l)){if(u!==null&&Jc(l)){if(r=u.start,n=u.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=qh(l,v);var A=qh(l,u);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var lv=f&&"documentMode"in document&&11>=document.documentMode,Cs=null,Qc=null,Go=null,eu=!1;function $h(n,r,l){var u=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;eu||Cs==null||Cs!==_t(u)||(u=Cs,"selectionStart"in u&&Jc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Go&&Ho(Go,u)||(Go=u,u=el(Qc,"onSelect"),0<u.length&&(r=new Wc("onSelect","select",null,r,l),n.push({event:r,listeners:u}),r.target=Cs)))}function Za(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ps={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},tu={},Zh={};f&&(Zh=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Ja(n){if(tu[n])return tu[n];if(!Ps[n])return n;var r=Ps[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Zh)return tu[n]=r[l];return n}var Jh=Ja("animationend"),Qh=Ja("animationiteration"),ep=Ja("animationstart"),tp=Ja("transitionend"),np=new Map,ip="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(n,r){np.set(n,r),a(r,[n])}for(var nu=0;nu<ip.length;nu++){var iu=ip[nu],cv=iu.toLowerCase(),uv=iu[0].toUpperCase()+iu.slice(1);Ar(cv,"on"+uv)}Ar(Jh,"onAnimationEnd"),Ar(Qh,"onAnimationIteration"),Ar(ep,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(tp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wo));function rp(n,r,l){var u=n.type||"unknown-event";n.currentTarget=l,ws(u,r,void 0,n),n.currentTarget=null}function sp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var u=n[l],p=u.event;u=u.listeners;e:{var v=void 0;if(r)for(var A=u.length-1;0<=A;A--){var F=u[A],z=F.instance,oe=F.currentTarget;if(F=F.listener,z!==v&&p.isPropagationStopped())break e;rp(p,F,oe),v=z}else for(A=0;A<u.length;A++){if(F=u[A],z=F.instance,oe=F.currentTarget,F=F.listener,z!==v&&p.isPropagationStopped())break e;rp(p,F,oe),v=z}}}if(ti)throw n=Zr,ti=!1,Zr=null,n}function Ht(n,r){var l=r[fu];l===void 0&&(l=r[fu]=new Set);var u=n+"__bubble";l.has(u)||(op(r,n,2,!1),l.add(u))}function ru(n,r,l){var u=0;r&&(u|=4),op(l,n,u,r)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function Xo(n){if(!n[Qa]){n[Qa]=!0,i.forEach(function(l){l!=="selectionchange"&&(fv.has(l)||ru(l,!1,n),ru(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Qa]||(r[Qa]=!0,ru("selectionchange",!1,r))}}function op(n,r,l,u){switch(Ch(r)){case 1:var p=w_;break;case 4:p=A_;break;default:p=Vc}l=p.bind(null,r,l,n),p=void 0,!Ts||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function su(n,r,l,u,p){var v=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var F=u.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(A===4)for(A=u.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===p||z.nodeType===8&&z.parentNode===p))return;A=A.return}for(;F!==null;){if(A=Qr(F),A===null)return;if(z=A.tag,z===5||z===6){u=v=A;continue e}F=F.parentNode}}u=u.return}ei(function(){var oe=v,ve=H(l),xe=[];e:{var _e=np.get(n);if(_e!==void 0){var Oe=Wc,Ge=n;switch(n){case"keypress":if(qa(l)===0)break e;case"keydown":case"keyup":Oe=V_;break;case"focusin":Ge="focus",Oe=qc;break;case"focusout":Ge="blur",Oe=qc;break;case"beforeblur":case"afterblur":Oe=qc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=C_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=W_;break;case Jh:case Qh:case ep:Oe=I_;break;case tp:Oe=j_;break;case"scroll":Oe=b_;break;case"wheel":Oe=Y_;break;case"copy":case"cut":case"paste":Oe=D_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=Dh}var qe=(r&4)!==0,en=!qe&&n==="scroll",Q=qe?_e!==null?_e+"Capture":null:_e;qe=[];for(var G=oe,ie;G!==null;){ie=G;var Te=ie.stateNode;if(ie.tag===5&&Te!==null&&(ie=Te,Q!==null&&(Te=An(G,Q),Te!=null&&qe.push(jo(G,Te,ie)))),en)break;G=G.return}0<qe.length&&(_e=new Oe(_e,Ge,null,l,ve),xe.push({event:_e,listeners:qe}))}}if((r&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Oe=n==="mouseout"||n==="pointerout",_e&&l!==ft&&(Ge=l.relatedTarget||l.fromElement)&&(Qr(Ge)||Ge[Zi]))break e;if((Oe||_e)&&(_e=ve.window===ve?ve:(_e=ve.ownerDocument)?_e.defaultView||_e.parentWindow:window,Oe?(Ge=l.relatedTarget||l.toElement,Oe=oe,Ge=Ge?Qr(Ge):null,Ge!==null&&(en=Ri(Ge),Ge!==en||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Oe=null,Ge=oe),Oe!==Ge)){if(qe=Ih,Te="onMouseLeave",Q="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(qe=Dh,Te="onPointerLeave",Q="onPointerEnter",G="pointer"),en=Oe==null?_e:Ns(Oe),ie=Ge==null?_e:Ns(Ge),_e=new qe(Te,G+"leave",Oe,l,ve),_e.target=en,_e.relatedTarget=ie,Te=null,Qr(ve)===oe&&(qe=new qe(Q,G+"enter",Ge,l,ve),qe.target=ie,qe.relatedTarget=en,Te=qe),en=Te,Oe&&Ge)t:{for(qe=Oe,Q=Ge,G=0,ie=qe;ie;ie=Ls(ie))G++;for(ie=0,Te=Q;Te;Te=Ls(Te))ie++;for(;0<G-ie;)qe=Ls(qe),G--;for(;0<ie-G;)Q=Ls(Q),ie--;for(;G--;){if(qe===Q||Q!==null&&qe===Q.alternate)break t;qe=Ls(qe),Q=Ls(Q)}qe=null}else qe=null;Oe!==null&&ap(xe,_e,Oe,qe,!1),Ge!==null&&en!==null&&ap(xe,en,Ge,qe,!0)}}e:{if(_e=oe?Ns(oe):window,Oe=_e.nodeName&&_e.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&_e.type==="file")var $e=tv;else if(zh(_e))if(Hh)$e=sv;else{$e=iv;var tt=nv}else(Oe=_e.nodeName)&&Oe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&($e=rv);if($e&&($e=$e(n,oe))){Vh(xe,$e,l,ve);break e}tt&&tt(n,_e,oe),n==="focusout"&&(tt=_e._wrapperState)&&tt.controlled&&_e.type==="number"&&Xt(_e,"number",_e.value)}switch(tt=oe?Ns(oe):window,n){case"focusin":(zh(tt)||tt.contentEditable==="true")&&(Cs=tt,Qc=oe,Go=null);break;case"focusout":Go=Qc=Cs=null;break;case"mousedown":eu=!0;break;case"contextmenu":case"mouseup":case"dragend":eu=!1,$h(xe,l,ve);break;case"selectionchange":if(lv)break;case"keydown":case"keyup":$h(xe,l,ve)}var nt;if(Kc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Rs?kh(n,l)&&(ct="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Uh&&l.locale!=="ko"&&(Rs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Rs&&(nt=Ph()):(wr=ve,Gc="value"in wr?wr.value:wr.textContent,Rs=!0)),tt=el(oe,ct),0<tt.length&&(ct=new Nh(ct,n,null,l,ve),xe.push({event:ct,listeners:tt}),nt?ct.data=nt:(nt=Bh(l),nt!==null&&(ct.data=nt)))),(nt=$_?Z_(n,l):J_(n,l))&&(oe=el(oe,"onBeforeInput"),0<oe.length&&(ve=new Nh("onBeforeInput","beforeinput",null,l,ve),xe.push({event:ve,listeners:oe}),ve.data=nt))}sp(xe,r)})}function jo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function el(n,r){for(var l=r+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=An(n,l),v!=null&&u.unshift(jo(n,v,p)),v=An(n,r),v!=null&&u.push(jo(n,v,p))),n=n.return}return u}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function ap(n,r,l,u,p){for(var v=r._reactName,A=[];l!==null&&l!==u;){var F=l,z=F.alternate,oe=F.stateNode;if(z!==null&&z===u)break;F.tag===5&&oe!==null&&(F=oe,p?(z=An(l,v),z!=null&&A.unshift(jo(l,z,F))):p||(z=An(l,v),z!=null&&A.push(jo(l,z,F)))),l=l.return}A.length!==0&&n.push({event:r,listeners:A})}var dv=/\r\n?/g,hv=/\u0000|\uFFFD/g;function lp(n){return(typeof n=="string"?n:""+n).replace(dv,`
`).replace(hv,"")}function tl(n,r,l){if(r=lp(r),lp(n)!==r&&l)throw Error(t(425))}function nl(){}var ou=null,au=null;function lu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,pv=typeof clearTimeout=="function"?clearTimeout:void 0,cp=typeof Promise=="function"?Promise:void 0,mv=typeof queueMicrotask=="function"?queueMicrotask:typeof cp<"u"?function(n){return cp.resolve(null).then(n).catch(gv)}:cu;function gv(n){setTimeout(function(){throw n})}function uu(n,r){var l=r,u=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(u===0){n.removeChild(p),Fo(r);return}u--}else l!=="$"&&l!=="$?"&&l!=="$!"||u++;l=p}while(l);Fo(r)}function br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function up(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Is,qo="__reactProps$"+Is,Zi="__reactContainer$"+Is,fu="__reactEvents$"+Is,_v="__reactListeners$"+Is,vv="__reactHandles$"+Is;function Qr(n){var r=n[Ci];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Zi]||l[Ci]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=up(n);n!==null;){if(l=n[Ci])return l;n=up(n)}return r}n=l,l=n.parentNode}return null}function Yo(n){return n=n[Ci]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function il(n){return n[qo]||null}var du=[],Ds=-1;function Rr(n){return{current:n}}function Gt(n){0>Ds||(n.current=du[Ds],du[Ds]=null,Ds--)}function zt(n,r){Ds++,du[Ds]=n.current,n.current=r}var Cr={},xn=Rr(Cr),On=Rr(!1),es=Cr;function Us(n,r){var l=n.type.contextTypes;if(!l)return Cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===r)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in l)p[v]=r[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function kn(n){return n=n.childContextTypes,n!=null}function rl(){Gt(On),Gt(xn)}function fp(n,r,l){if(xn.current!==Cr)throw Error(t(168));zt(xn,r),zt(On,l)}function dp(n,r,l){var u=n.stateNode;if(r=r.childContextTypes,typeof u.getChildContext!="function")return l;u=u.getChildContext();for(var p in u)if(!(p in r))throw Error(t(108,he(n)||"Unknown",p));return ce({},l,u)}function sl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,es=xn.current,zt(xn,n),zt(On,On.current),!0}function hp(n,r,l){var u=n.stateNode;if(!u)throw Error(t(169));l?(n=dp(n,r,es),u.__reactInternalMemoizedMergedChildContext=n,Gt(On),Gt(xn),zt(xn,n)):Gt(On),zt(On,l)}var Ji=null,ol=!1,hu=!1;function pp(n){Ji===null?Ji=[n]:Ji.push(n)}function xv(n){ol=!0,pp(n)}function Pr(){if(!hu&&Ji!==null){hu=!0;var n=0,r=lt;try{var l=Ji;for(lt=1;n<l.length;n++){var u=l[n];do u=u(!0);while(u!==null)}Ji=null,ol=!1}catch(p){throw Ji!==null&&(Ji=Ji.slice(n+1)),za(le,Pr),p}finally{lt=r,hu=!1}}return null}var Fs=[],Os=0,al=null,ll=0,ii=[],ri=0,ts=null,Qi=1,er="";function ns(n,r){Fs[Os++]=ll,Fs[Os++]=al,al=n,ll=r}function mp(n,r,l){ii[ri++]=Qi,ii[ri++]=er,ii[ri++]=ts,ts=n;var u=Qi;n=er;var p=32-et(u)-1;u&=~(1<<p),l+=1;var v=32-et(r)+p;if(30<v){var A=p-p%5;v=(u&(1<<A)-1).toString(32),u>>=A,p-=A,Qi=1<<32-et(r)+p|l<<p|u,er=v+n}else Qi=1<<v|l<<p|u,er=n}function pu(n){n.return!==null&&(ns(n,1),mp(n,1,0))}function mu(n){for(;n===al;)al=Fs[--Os],Fs[Os]=null,ll=Fs[--Os],Fs[Os]=null;for(;n===ts;)ts=ii[--ri],ii[ri]=null,er=ii[--ri],ii[ri]=null,Qi=ii[--ri],ii[ri]=null}var qn=null,Yn=null,jt=!1,mi=null;function gp(n,r){var l=li(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function _p(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,qn=n,Yn=br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,qn=n,Yn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ts!==null?{id:Qi,overflow:er}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=li(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,qn=n,Yn=null,!0):!1;default:return!1}}function gu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function _u(n){if(jt){var r=Yn;if(r){var l=r;if(!_p(n,r)){if(gu(n))throw Error(t(418));r=br(l.nextSibling);var u=qn;r&&_p(n,r)?gp(u,l):(n.flags=n.flags&-4097|2,jt=!1,qn=n)}}else{if(gu(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,qn=n}}}function vp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;qn=n}function cl(n){if(n!==qn)return!1;if(!jt)return vp(n),jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!lu(n.type,n.memoizedProps)),r&&(r=Yn)){if(gu(n))throw xp(),Error(t(418));for(;r;)gp(n,r),r=br(r.nextSibling)}if(vp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){Yn=br(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}Yn=null}}else Yn=qn?br(n.stateNode.nextSibling):null;return!0}function xp(){for(var n=Yn;n;)n=br(n.nextSibling)}function ks(){Yn=qn=null,jt=!1}function vu(n){mi===null?mi=[n]:mi.push(n)}var yv=P.ReactCurrentBatchConfig;function Ko(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var u=l.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(A){var F=p.refs;A===null?delete F[v]:F[v]=A},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function ul(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function yp(n){var r=n._init;return r(n._payload)}function Sp(n){function r(Q,G){if(n){var ie=Q.deletions;ie===null?(Q.deletions=[G],Q.flags|=16):ie.push(G)}}function l(Q,G){if(!n)return null;for(;G!==null;)r(Q,G),G=G.sibling;return null}function u(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function p(Q,G){return Q=kr(Q,G),Q.index=0,Q.sibling=null,Q}function v(Q,G,ie){return Q.index=ie,n?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<G?(Q.flags|=2,G):ie):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function A(Q){return n&&Q.alternate===null&&(Q.flags|=2),Q}function F(Q,G,ie,Te){return G===null||G.tag!==6?(G=uf(ie,Q.mode,Te),G.return=Q,G):(G=p(G,ie),G.return=Q,G)}function z(Q,G,ie,Te){var $e=ie.type;return $e===N?ve(Q,G,ie.props.children,Te,ie.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&yp($e)===G.type)?(Te=p(G,ie.props),Te.ref=Ko(Q,G,ie),Te.return=Q,Te):(Te=Dl(ie.type,ie.key,ie.props,null,Q.mode,Te),Te.ref=Ko(Q,G,ie),Te.return=Q,Te)}function oe(Q,G,ie,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==ie.containerInfo||G.stateNode.implementation!==ie.implementation?(G=ff(ie,Q.mode,Te),G.return=Q,G):(G=p(G,ie.children||[]),G.return=Q,G)}function ve(Q,G,ie,Te,$e){return G===null||G.tag!==7?(G=us(ie,Q.mode,Te,$e),G.return=Q,G):(G=p(G,ie),G.return=Q,G)}function xe(Q,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number")return G=uf(""+G,Q.mode,ie),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case D:return ie=Dl(G.type,G.key,G.props,null,Q.mode,ie),ie.ref=Ko(Q,null,G),ie.return=Q,ie;case U:return G=ff(G,Q.mode,ie),G.return=Q,G;case K:var Te=G._init;return xe(Q,Te(G._payload),ie)}if(St(G)||ae(G))return G=us(G,Q.mode,ie,null),G.return=Q,G;ul(Q,G)}return null}function _e(Q,G,ie,Te){var $e=G!==null?G.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return $e!==null?null:F(Q,G,""+ie,Te);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case D:return ie.key===$e?z(Q,G,ie,Te):null;case U:return ie.key===$e?oe(Q,G,ie,Te):null;case K:return $e=ie._init,_e(Q,G,$e(ie._payload),Te)}if(St(ie)||ae(ie))return $e!==null?null:ve(Q,G,ie,Te,null);ul(Q,ie)}return null}function Oe(Q,G,ie,Te,$e){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return Q=Q.get(ie)||null,F(G,Q,""+Te,$e);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case D:return Q=Q.get(Te.key===null?ie:Te.key)||null,z(G,Q,Te,$e);case U:return Q=Q.get(Te.key===null?ie:Te.key)||null,oe(G,Q,Te,$e);case K:var tt=Te._init;return Oe(Q,G,ie,tt(Te._payload),$e)}if(St(Te)||ae(Te))return Q=Q.get(ie)||null,ve(G,Q,Te,$e,null);ul(G,Te)}return null}function Ge(Q,G,ie,Te){for(var $e=null,tt=null,nt=G,ct=G=0,pn=null;nt!==null&&ct<ie.length;ct++){nt.index>ct?(pn=nt,nt=null):pn=nt.sibling;var Pt=_e(Q,nt,ie[ct],Te);if(Pt===null){nt===null&&(nt=pn);break}n&&nt&&Pt.alternate===null&&r(Q,nt),G=v(Pt,G,ct),tt===null?$e=Pt:tt.sibling=Pt,tt=Pt,nt=pn}if(ct===ie.length)return l(Q,nt),jt&&ns(Q,ct),$e;if(nt===null){for(;ct<ie.length;ct++)nt=xe(Q,ie[ct],Te),nt!==null&&(G=v(nt,G,ct),tt===null?$e=nt:tt.sibling=nt,tt=nt);return jt&&ns(Q,ct),$e}for(nt=u(Q,nt);ct<ie.length;ct++)pn=Oe(nt,Q,ct,ie[ct],Te),pn!==null&&(n&&pn.alternate!==null&&nt.delete(pn.key===null?ct:pn.key),G=v(pn,G,ct),tt===null?$e=pn:tt.sibling=pn,tt=pn);return n&&nt.forEach(function(Br){return r(Q,Br)}),jt&&ns(Q,ct),$e}function qe(Q,G,ie,Te){var $e=ae(ie);if(typeof $e!="function")throw Error(t(150));if(ie=$e.call(ie),ie==null)throw Error(t(151));for(var tt=$e=null,nt=G,ct=G=0,pn=null,Pt=ie.next();nt!==null&&!Pt.done;ct++,Pt=ie.next()){nt.index>ct?(pn=nt,nt=null):pn=nt.sibling;var Br=_e(Q,nt,Pt.value,Te);if(Br===null){nt===null&&(nt=pn);break}n&&nt&&Br.alternate===null&&r(Q,nt),G=v(Br,G,ct),tt===null?$e=Br:tt.sibling=Br,tt=Br,nt=pn}if(Pt.done)return l(Q,nt),jt&&ns(Q,ct),$e;if(nt===null){for(;!Pt.done;ct++,Pt=ie.next())Pt=xe(Q,Pt.value,Te),Pt!==null&&(G=v(Pt,G,ct),tt===null?$e=Pt:tt.sibling=Pt,tt=Pt);return jt&&ns(Q,ct),$e}for(nt=u(Q,nt);!Pt.done;ct++,Pt=ie.next())Pt=Oe(nt,Q,ct,Pt.value,Te),Pt!==null&&(n&&Pt.alternate!==null&&nt.delete(Pt.key===null?ct:Pt.key),G=v(Pt,G,ct),tt===null?$e=Pt:tt.sibling=Pt,tt=Pt);return n&&nt.forEach(function(Qv){return r(Q,Qv)}),jt&&ns(Q,ct),$e}function en(Q,G,ie,Te){if(typeof ie=="object"&&ie!==null&&ie.type===N&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case D:e:{for(var $e=ie.key,tt=G;tt!==null;){if(tt.key===$e){if($e=ie.type,$e===N){if(tt.tag===7){l(Q,tt.sibling),G=p(tt,ie.props.children),G.return=Q,Q=G;break e}}else if(tt.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&yp($e)===tt.type){l(Q,tt.sibling),G=p(tt,ie.props),G.ref=Ko(Q,tt,ie),G.return=Q,Q=G;break e}l(Q,tt);break}else r(Q,tt);tt=tt.sibling}ie.type===N?(G=us(ie.props.children,Q.mode,Te,ie.key),G.return=Q,Q=G):(Te=Dl(ie.type,ie.key,ie.props,null,Q.mode,Te),Te.ref=Ko(Q,G,ie),Te.return=Q,Q=Te)}return A(Q);case U:e:{for(tt=ie.key;G!==null;){if(G.key===tt)if(G.tag===4&&G.stateNode.containerInfo===ie.containerInfo&&G.stateNode.implementation===ie.implementation){l(Q,G.sibling),G=p(G,ie.children||[]),G.return=Q,Q=G;break e}else{l(Q,G);break}else r(Q,G);G=G.sibling}G=ff(ie,Q.mode,Te),G.return=Q,Q=G}return A(Q);case K:return tt=ie._init,en(Q,G,tt(ie._payload),Te)}if(St(ie))return Ge(Q,G,ie,Te);if(ae(ie))return qe(Q,G,ie,Te);ul(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,G!==null&&G.tag===6?(l(Q,G.sibling),G=p(G,ie),G.return=Q,Q=G):(l(Q,G),G=uf(ie,Q.mode,Te),G.return=Q,Q=G),A(Q)):l(Q,G)}return en}var Bs=Sp(!0),Mp=Sp(!1),fl=Rr(null),dl=null,zs=null,xu=null;function yu(){xu=zs=dl=null}function Su(n){var r=fl.current;Gt(fl),n._currentValue=r}function Mu(n,r,l){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===l)break;n=n.return}}function Vs(n,r){dl=n,xu=zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function si(n){var r=n._currentValue;if(xu!==n)if(n={context:n,memoizedValue:r,next:null},zs===null){if(dl===null)throw Error(t(308));zs=n,dl.dependencies={lanes:0,firstContext:n}}else zs=zs.next=n;return r}var is=null;function Eu(n){is===null?is=[n]:is.push(n)}function Ep(n,r,l,u){var p=r.interleaved;return p===null?(l.next=l,Eu(r)):(l.next=p.next,p.next=l),r.interleaved=l,tr(n,u)}function tr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Lr=!1;function Tu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function nr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Ir(n,r,l){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ct&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,tr(n,l)}return p=u.interleaved,p===null?(r.next=r,Eu(u)):(r.next=p.next,p.next=r),u.interleaved=r,tr(n,l)}function hl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Lt(n,l)}}function wp(n,r){var l=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,l===u)){var p=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?p=v=A:v=v.next=A,l=l.next}while(l!==null);v===null?p=v=r:v=v.next=r}else p=v=r;l={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function pl(n,r,l,u){var p=n.updateQueue;Lr=!1;var v=p.firstBaseUpdate,A=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var z=F,oe=z.next;z.next=null,A===null?v=oe:A.next=oe,A=z;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,F=ve.lastBaseUpdate,F!==A&&(F===null?ve.firstBaseUpdate=oe:F.next=oe,ve.lastBaseUpdate=z))}if(v!==null){var xe=p.baseState;A=0,ve=oe=z=null,F=v;do{var _e=F.lane,Oe=F.eventTime;if((u&_e)===_e){ve!==null&&(ve=ve.next={eventTime:Oe,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ge=n,qe=F;switch(_e=r,Oe=l,qe.tag){case 1:if(Ge=qe.payload,typeof Ge=="function"){xe=Ge.call(Oe,xe,_e);break e}xe=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=qe.payload,_e=typeof Ge=="function"?Ge.call(Oe,xe,_e):Ge,_e==null)break e;xe=ce({},xe,_e);break e;case 2:Lr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,_e=p.effects,_e===null?p.effects=[F]:_e.push(F))}else Oe={eventTime:Oe,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},ve===null?(oe=ve=Oe,z=xe):ve=ve.next=Oe,A|=_e;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,p.lastBaseUpdate=_e,p.shared.pending=null}}while(!0);if(ve===null&&(z=xe),p.baseState=z,p.firstBaseUpdate=oe,p.lastBaseUpdate=ve,r=p.shared.interleaved,r!==null){p=r;do A|=p.lane,p=p.next;while(p!==r)}else v===null&&(p.shared.lanes=0);os|=A,n.lanes=A,n.memoizedState=xe}}function Ap(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var u=n[r],p=u.callback;if(p!==null){if(u.callback=null,u=l,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var $o={},Pi=Rr($o),Zo=Rr($o),Jo=Rr($o);function rs(n){if(n===$o)throw Error(t(174));return n}function wu(n,r){switch(zt(Jo,r),zt(Zo,n),zt(Pi,$o),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:ge(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=ge(r,n)}Gt(Pi),zt(Pi,r)}function Hs(){Gt(Pi),Gt(Zo),Gt(Jo)}function bp(n){rs(Jo.current);var r=rs(Pi.current),l=ge(r,n.type);r!==l&&(zt(Zo,n),zt(Pi,l))}function Au(n){Zo.current===n&&(Gt(Pi),Gt(Zo))}var qt=Rr(0);function ml(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var bu=[];function Ru(){for(var n=0;n<bu.length;n++)bu[n]._workInProgressVersionPrimary=null;bu.length=0}var gl=P.ReactCurrentDispatcher,Cu=P.ReactCurrentBatchConfig,ss=0,Yt=null,on=null,dn=null,_l=!1,Qo=!1,ea=0,Sv=0;function yn(){throw Error(t(321))}function Pu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!pi(n[l],r[l]))return!1;return!0}function Lu(n,r,l,u,p,v){if(ss=v,Yt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,gl.current=n===null||n.memoizedState===null?wv:Av,n=l(u,p),Qo){v=0;do{if(Qo=!1,ea=0,25<=v)throw Error(t(301));v+=1,dn=on=null,r.updateQueue=null,gl.current=bv,n=l(u,p)}while(Qo)}if(gl.current=yl,r=on!==null&&on.next!==null,ss=0,dn=on=Yt=null,_l=!1,r)throw Error(t(300));return n}function Iu(){var n=ea!==0;return ea=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Yt.memoizedState=dn=n:dn=dn.next=n,dn}function oi(){if(on===null){var n=Yt.alternate;n=n!==null?n.memoizedState:null}else n=on.next;var r=dn===null?Yt.memoizedState:dn.next;if(r!==null)dn=r,on=n;else{if(n===null)throw Error(t(310));on=n,n={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?Yt.memoizedState=dn=n:dn=dn.next=n}return dn}function ta(n,r){return typeof r=="function"?r(n):r}function Nu(n){var r=oi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=on,p=u.baseQueue,v=l.pending;if(v!==null){if(p!==null){var A=p.next;p.next=v.next,v.next=A}u.baseQueue=p=v,l.pending=null}if(p!==null){v=p.next,u=u.baseState;var F=A=null,z=null,oe=v;do{var ve=oe.lane;if((ss&ve)===ve)z!==null&&(z=z.next={lane:0,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),u=oe.hasEagerState?oe.eagerState:n(u,oe.action);else{var xe={lane:ve,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null};z===null?(F=z=xe,A=u):z=z.next=xe,Yt.lanes|=ve,os|=ve}oe=oe.next}while(oe!==null&&oe!==v);z===null?A=u:z.next=F,pi(u,r.memoizedState)||(Bn=!0),r.memoizedState=u,r.baseState=A,r.baseQueue=z,l.lastRenderedState=u}if(n=l.interleaved,n!==null){p=n;do v=p.lane,Yt.lanes|=v,os|=v,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Du(n){var r=oi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var u=l.dispatch,p=l.pending,v=r.memoizedState;if(p!==null){l.pending=null;var A=p=p.next;do v=n(v,A.action),A=A.next;while(A!==p);pi(v,r.memoizedState)||(Bn=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,u]}function Rp(){}function Cp(n,r){var l=Yt,u=oi(),p=r(),v=!pi(u.memoizedState,p);if(v&&(u.memoizedState=p,Bn=!0),u=u.queue,Uu(Ip.bind(null,l,u,n),[n]),u.getSnapshot!==r||v||dn!==null&&dn.memoizedState.tag&1){if(l.flags|=2048,na(9,Lp.bind(null,l,u,p,r),void 0,null),hn===null)throw Error(t(349));(ss&30)!==0||Pp(l,r,p)}return p}function Pp(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function Lp(n,r,l,u){r.value=l,r.getSnapshot=u,Np(r)&&Dp(n)}function Ip(n,r,l){return l(function(){Np(r)&&Dp(n)})}function Np(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!pi(n,l)}catch{return!0}}function Dp(n){var r=tr(n,1);r!==null&&xi(r,n,1,-1)}function Up(n){var r=Li();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:n},r.queue=n,n=n.dispatch=Tv.bind(null,Yt,n),[r.memoizedState,n]}function na(n,r,l,u){return n={tag:n,create:r,destroy:l,deps:u,next:null},r=Yt.updateQueue,r===null?(r={lastEffect:null,stores:null},Yt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(u=l.next,l.next=n,n.next=u,r.lastEffect=n)),n}function Fp(){return oi().memoizedState}function vl(n,r,l,u){var p=Li();Yt.flags|=n,p.memoizedState=na(1|r,l,void 0,u===void 0?null:u)}function xl(n,r,l,u){var p=oi();u=u===void 0?null:u;var v=void 0;if(on!==null){var A=on.memoizedState;if(v=A.destroy,u!==null&&Pu(u,A.deps)){p.memoizedState=na(r,l,v,u);return}}Yt.flags|=n,p.memoizedState=na(1|r,l,v,u)}function Op(n,r){return vl(8390656,8,n,r)}function Uu(n,r){return xl(2048,8,n,r)}function kp(n,r){return xl(4,2,n,r)}function Bp(n,r){return xl(4,4,n,r)}function zp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Vp(n,r,l){return l=l!=null?l.concat([n]):null,xl(4,4,zp.bind(null,r,n),l)}function Fu(){}function Hp(n,r){var l=oi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Pu(r,u[1])?u[0]:(l.memoizedState=[n,r],n)}function Gp(n,r){var l=oi();r=r===void 0?null:r;var u=l.memoizedState;return u!==null&&r!==null&&Pu(r,u[1])?u[0]:(n=n(),l.memoizedState=[n,r],n)}function Wp(n,r,l){return(ss&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=l):(pi(l,r)||(l=Un(),Yt.lanes|=l,os|=l,n.baseState=!0),r)}function Mv(n,r){var l=lt;lt=l!==0&&4>l?l:4,n(!0);var u=Cu.transition;Cu.transition={};try{n(!1),r()}finally{lt=l,Cu.transition=u}}function Xp(){return oi().memoizedState}function Ev(n,r,l){var u=Fr(n);if(l={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null},jp(n))qp(r,l);else if(l=Ep(n,r,l,u),l!==null){var p=Cn();xi(l,n,u,p),Yp(l,r,u)}}function Tv(n,r,l){var u=Fr(n),p={lane:u,action:l,hasEagerState:!1,eagerState:null,next:null};if(jp(n))qp(r,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var A=r.lastRenderedState,F=v(A,l);if(p.hasEagerState=!0,p.eagerState=F,pi(F,A)){var z=r.interleaved;z===null?(p.next=p,Eu(r)):(p.next=z.next,z.next=p),r.interleaved=p;return}}catch{}finally{}l=Ep(n,r,p,u),l!==null&&(p=Cn(),xi(l,n,u,p),Yp(l,r,u))}}function jp(n){var r=n.alternate;return n===Yt||r!==null&&r===Yt}function qp(n,r){Qo=_l=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Yp(n,r,l){if((l&4194240)!==0){var u=r.lanes;u&=n.pendingLanes,l|=u,r.lanes=l,Lt(n,l)}}var yl={readContext:si,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},wv={readContext:si,useCallback:function(n,r){return Li().memoizedState=[n,r===void 0?null:r],n},useContext:si,useEffect:Op,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,vl(4194308,4,zp.bind(null,r,n),l)},useLayoutEffect:function(n,r){return vl(4194308,4,n,r)},useInsertionEffect:function(n,r){return vl(4,2,n,r)},useMemo:function(n,r){var l=Li();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var u=Li();return r=l!==void 0?l(r):r,u.memoizedState=u.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},u.queue=n,n=n.dispatch=Ev.bind(null,Yt,n),[u.memoizedState,n]},useRef:function(n){var r=Li();return n={current:n},r.memoizedState=n},useState:Up,useDebugValue:Fu,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=Up(!1),r=n[0];return n=Mv.bind(null,n[1]),Li().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var u=Yt,p=Li();if(jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),hn===null)throw Error(t(349));(ss&30)!==0||Pp(u,r,l)}p.memoizedState=l;var v={value:l,getSnapshot:r};return p.queue=v,Op(Ip.bind(null,u,v,n),[n]),u.flags|=2048,na(9,Lp.bind(null,u,v,l,r),void 0,null),l},useId:function(){var n=Li(),r=hn.identifierPrefix;if(jt){var l=er,u=Qi;l=(u&~(1<<32-et(u)-1)).toString(32)+l,r=":"+r+"R"+l,l=ea++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Sv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Av={readContext:si,useCallback:Hp,useContext:si,useEffect:Uu,useImperativeHandle:Vp,useInsertionEffect:kp,useLayoutEffect:Bp,useMemo:Gp,useReducer:Nu,useRef:Fp,useState:function(){return Nu(ta)},useDebugValue:Fu,useDeferredValue:function(n){var r=oi();return Wp(r,on.memoizedState,n)},useTransition:function(){var n=Nu(ta)[0],r=oi().memoizedState;return[n,r]},useMutableSource:Rp,useSyncExternalStore:Cp,useId:Xp,unstable_isNewReconciler:!1},bv={readContext:si,useCallback:Hp,useContext:si,useEffect:Uu,useImperativeHandle:Vp,useInsertionEffect:kp,useLayoutEffect:Bp,useMemo:Gp,useReducer:Du,useRef:Fp,useState:function(){return Du(ta)},useDebugValue:Fu,useDeferredValue:function(n){var r=oi();return on===null?r.memoizedState=n:Wp(r,on.memoizedState,n)},useTransition:function(){var n=Du(ta)[0],r=oi().memoizedState;return[n,r]},useMutableSource:Rp,useSyncExternalStore:Cp,useId:Xp,unstable_isNewReconciler:!1};function gi(n,r){if(n&&n.defaultProps){r=ce({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ou(n,r,l,u){r=n.memoizedState,l=l(u,r),l=l==null?r:ce({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Sl={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var u=Cn(),p=Fr(n),v=nr(u,p);v.payload=r,l!=null&&(v.callback=l),r=Ir(n,v,p),r!==null&&(xi(r,n,p,u),hl(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var u=Cn(),p=Fr(n),v=nr(u,p);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Ir(n,v,p),r!==null&&(xi(r,n,p,u),hl(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Cn(),u=Fr(n),p=nr(l,u);p.tag=2,r!=null&&(p.callback=r),r=Ir(n,p,u),r!==null&&(xi(r,n,u,l),hl(r,n,u))}};function Kp(n,r,l,u,p,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,A):r.prototype&&r.prototype.isPureReactComponent?!Ho(l,u)||!Ho(p,v):!0}function $p(n,r,l){var u=!1,p=Cr,v=r.contextType;return typeof v=="object"&&v!==null?v=si(v):(p=kn(r)?es:xn.current,u=r.contextTypes,v=(u=u!=null)?Us(n,p):Cr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Sl,n.stateNode=r,r._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),r}function Zp(n,r,l,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,u),r.state!==n&&Sl.enqueueReplaceState(r,r.state,null)}function ku(n,r,l,u){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},Tu(n);var v=r.contextType;typeof v=="object"&&v!==null?p.context=si(v):(v=kn(r)?es:xn.current,p.context=Us(n,v)),p.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Ou(n,r,v,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&Sl.enqueueReplaceState(p,p.state,null),pl(n,l,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Gs(n,r){try{var l="",u=r;do l+=Fe(u),u=u.return;while(u);var p=l}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:p,digest:null}}function Bu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var Rv=typeof WeakMap=="function"?WeakMap:Map;function Jp(n,r,l){l=nr(-1,l),l.tag=3,l.payload={element:null};var u=r.value;return l.callback=function(){Rl||(Rl=!0,tf=u),zu(n,r)},l}function Qp(n,r,l){l=nr(-1,l),l.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=r.value;l.payload=function(){return u(p)},l.callback=function(){zu(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){zu(n,r),typeof u!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),l}function em(n,r,l){var u=n.pingCache;if(u===null){u=n.pingCache=new Rv;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(l)||(p.add(l),n=Hv.bind(null,n,r,l),r.then(n,n))}function tm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function nm(n,r,l,u,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=nr(-1,1),r.tag=2,Ir(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Cv=P.ReactCurrentOwner,Bn=!1;function Rn(n,r,l,u){r.child=n===null?Mp(r,null,l,u):Bs(r,n.child,l,u)}function im(n,r,l,u,p){l=l.render;var v=r.ref;return Vs(r,p),u=Lu(n,r,l,u,v,p),l=Iu(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ir(n,r,p)):(jt&&l&&pu(r),r.flags|=1,Rn(n,r,u,p),r.child)}function rm(n,r,l,u,p){if(n===null){var v=l.type;return typeof v=="function"&&!cf(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,sm(n,r,v,u,p)):(n=Dl(l.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&p)===0){var A=v.memoizedProps;if(l=l.compare,l=l!==null?l:Ho,l(A,u)&&n.ref===r.ref)return ir(n,r,p)}return r.flags|=1,n=kr(v,u),n.ref=r.ref,n.return=r,r.child=n}function sm(n,r,l,u,p){if(n!==null){var v=n.memoizedProps;if(Ho(v,u)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,ir(n,r,p)}return Vu(n,r,l,u,p)}function om(n,r,l){var u=r.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(Xs,Kn),Kn|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,zt(Xs,Kn),Kn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:l,zt(Xs,Kn),Kn|=u}else v!==null?(u=v.baseLanes|l,r.memoizedState=null):u=l,zt(Xs,Kn),Kn|=u;return Rn(n,r,p,l),r.child}function am(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Vu(n,r,l,u,p){var v=kn(l)?es:xn.current;return v=Us(r,v),Vs(r,p),l=Lu(n,r,l,u,v,p),u=Iu(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,ir(n,r,p)):(jt&&u&&pu(r),r.flags|=1,Rn(n,r,l,p),r.child)}function lm(n,r,l,u,p){if(kn(l)){var v=!0;sl(r)}else v=!1;if(Vs(r,p),r.stateNode===null)El(n,r),$p(r,l,u),ku(r,l,u,p),u=!0;else if(n===null){var A=r.stateNode,F=r.memoizedProps;A.props=F;var z=A.context,oe=l.contextType;typeof oe=="object"&&oe!==null?oe=si(oe):(oe=kn(l)?es:xn.current,oe=Us(r,oe));var ve=l.getDerivedStateFromProps,xe=typeof ve=="function"||typeof A.getSnapshotBeforeUpdate=="function";xe||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==u||z!==oe)&&Zp(r,A,u,oe),Lr=!1;var _e=r.memoizedState;A.state=_e,pl(r,u,A,p),z=r.memoizedState,F!==u||_e!==z||On.current||Lr?(typeof ve=="function"&&(Ou(r,l,ve,u),z=r.memoizedState),(F=Lr||Kp(r,l,F,u,_e,z,oe))?(xe||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=z),A.props=u,A.state=z,A.context=oe,u=F):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{A=r.stateNode,Tp(n,r),F=r.memoizedProps,oe=r.type===r.elementType?F:gi(r.type,F),A.props=oe,xe=r.pendingProps,_e=A.context,z=l.contextType,typeof z=="object"&&z!==null?z=si(z):(z=kn(l)?es:xn.current,z=Us(r,z));var Oe=l.getDerivedStateFromProps;(ve=typeof Oe=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==xe||_e!==z)&&Zp(r,A,u,z),Lr=!1,_e=r.memoizedState,A.state=_e,pl(r,u,A,p);var Ge=r.memoizedState;F!==xe||_e!==Ge||On.current||Lr?(typeof Oe=="function"&&(Ou(r,l,Oe,u),Ge=r.memoizedState),(oe=Lr||Kp(r,l,oe,u,_e,Ge,z)||!1)?(ve||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,Ge,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,Ge,z)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Ge),A.props=u,A.state=Ge,A.context=z,u=oe):(typeof A.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(r.flags|=1024),u=!1)}return Hu(n,r,l,u,v,p)}function Hu(n,r,l,u,p,v){am(n,r);var A=(r.flags&128)!==0;if(!u&&!A)return p&&hp(r,l,!1),ir(n,r,v);u=r.stateNode,Cv.current=r;var F=A&&typeof l.getDerivedStateFromError!="function"?null:u.render();return r.flags|=1,n!==null&&A?(r.child=Bs(r,n.child,null,v),r.child=Bs(r,null,F,v)):Rn(n,r,F,v),r.memoizedState=u.state,p&&hp(r,l,!0),r.child}function cm(n){var r=n.stateNode;r.pendingContext?fp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&fp(n,r.context,!1),wu(n,r.containerInfo)}function um(n,r,l,u,p){return ks(),vu(p),r.flags|=256,Rn(n,r,l,u),r.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Wu(n){return{baseLanes:n,cachePool:null,transitions:null}}function fm(n,r,l){var u=r.pendingProps,p=qt.current,v=!1,A=(r.flags&128)!==0,F;if((F=A)||(F=n!==null&&n.memoizedState===null?!1:(p&2)!==0),F?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),zt(qt,p&1),n===null)return _u(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=u.children,n=u.fallback,v?(u=r.mode,v=r.child,A={mode:"hidden",children:A},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=A):v=Ul(A,u,0,null),n=us(n,u,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Wu(l),r.memoizedState=Gu,n):Xu(r,A));if(p=n.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return Pv(n,r,A,u,F,p,l);if(v){v=u.fallback,A=r.mode,p=n.child,F=p.sibling;var z={mode:"hidden",children:u.children};return(A&1)===0&&r.child!==p?(u=r.child,u.childLanes=0,u.pendingProps=z,r.deletions=null):(u=kr(p,z),u.subtreeFlags=p.subtreeFlags&14680064),F!==null?v=kr(F,v):(v=us(v,A,l,null),v.flags|=2),v.return=r,u.return=r,u.sibling=v,r.child=u,u=v,v=r.child,A=n.child.memoizedState,A=A===null?Wu(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=n.childLanes&~l,r.memoizedState=Gu,u}return v=n.child,n=v.sibling,u=kr(v,{mode:"visible",children:u.children}),(r.mode&1)===0&&(u.lanes=l),u.return=r,u.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=u,r.memoizedState=null,u}function Xu(n,r){return r=Ul({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ml(n,r,l,u){return u!==null&&vu(u),Bs(r,n.child,null,l),n=Xu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Pv(n,r,l,u,p,v,A){if(l)return r.flags&256?(r.flags&=-257,u=Bu(Error(t(422))),Ml(n,r,A,u)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=u.fallback,p=r.mode,u=Ul({mode:"visible",children:u.children},p,0,null),v=us(v,p,A,null),v.flags|=2,u.return=r,v.return=r,u.sibling=v,r.child=u,(r.mode&1)!==0&&Bs(r,n.child,null,A),r.child.memoizedState=Wu(A),r.memoizedState=Gu,v);if((r.mode&1)===0)return Ml(n,r,A,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var F=u.dgst;return u=F,v=Error(t(419)),u=Bu(v,u,void 0),Ml(n,r,A,u)}if(F=(A&n.childLanes)!==0,Bn||F){if(u=hn,u!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|A))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,tr(n,p),xi(u,n,p,-1))}return lf(),u=Bu(Error(t(421))),Ml(n,r,A,u)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=Gv.bind(null,n),p._reactRetry=r,null):(n=v.treeContext,Yn=br(p.nextSibling),qn=r,jt=!0,mi=null,n!==null&&(ii[ri++]=Qi,ii[ri++]=er,ii[ri++]=ts,Qi=n.id,er=n.overflow,ts=r),r=Xu(r,u.children),r.flags|=4096,r)}function dm(n,r,l){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),Mu(n.return,r,l)}function ju(n,r,l,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:l,tailMode:p}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=l,v.tailMode=p)}function hm(n,r,l){var u=r.pendingProps,p=u.revealOrder,v=u.tail;if(Rn(n,r,u.children,l),u=qt.current,(u&2)!==0)u=u&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&dm(n,l,r);else if(n.tag===19)dm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(zt(qt,u),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&ml(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),ju(r,!1,p,l,v);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&ml(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}ju(r,!0,l,null,v);break;case"together":ju(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function El(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function ir(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),os|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=kr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=kr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function Lv(n,r,l){switch(r.tag){case 3:cm(r),ks();break;case 5:bp(r);break;case 1:kn(r.type)&&sl(r);break;case 4:wu(r,r.stateNode.containerInfo);break;case 10:var u=r.type._context,p=r.memoizedProps.value;zt(fl,u._currentValue),u._currentValue=p;break;case 13:if(u=r.memoizedState,u!==null)return u.dehydrated!==null?(zt(qt,qt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?fm(n,r,l):(zt(qt,qt.current&1),n=ir(n,r,l),n!==null?n.sibling:null);zt(qt,qt.current&1);break;case 19:if(u=(l&r.childLanes)!==0,(n.flags&128)!==0){if(u)return hm(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),zt(qt,qt.current),u)break;return null;case 22:case 23:return r.lanes=0,om(n,r,l)}return ir(n,r,l)}var pm,qu,mm,gm;pm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},qu=function(){},mm=function(n,r,l,u){var p=n.memoizedProps;if(p!==u){n=r.stateNode,rs(Pi.current);var v=null;switch(l){case"input":p=At(n,p),u=At(n,u),v=[];break;case"select":p=ce({},p,{value:void 0}),u=ce({},u,{value:void 0}),v=[];break;case"textarea":p=Xe(n,p),u=Xe(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=nl)}Ve(l,u);var A;l=null;for(oe in p)if(!u.hasOwnProperty(oe)&&p.hasOwnProperty(oe)&&p[oe]!=null)if(oe==="style"){var F=p[oe];for(A in F)F.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else oe!=="dangerouslySetInnerHTML"&&oe!=="children"&&oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&oe!=="autoFocus"&&(s.hasOwnProperty(oe)?v||(v=[]):(v=v||[]).push(oe,null));for(oe in u){var z=u[oe];if(F=p!=null?p[oe]:void 0,u.hasOwnProperty(oe)&&z!==F&&(z!=null||F!=null))if(oe==="style")if(F){for(A in F)!F.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in z)z.hasOwnProperty(A)&&F[A]!==z[A]&&(l||(l={}),l[A]=z[A])}else l||(v||(v=[]),v.push(oe,l)),l=z;else oe==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(v=v||[]).push(oe,z)):oe==="children"?typeof z!="string"&&typeof z!="number"||(v=v||[]).push(oe,""+z):oe!=="suppressContentEditableWarning"&&oe!=="suppressHydrationWarning"&&(s.hasOwnProperty(oe)?(z!=null&&oe==="onScroll"&&Ht("scroll",n),v||F===z||(v=[])):(v=v||[]).push(oe,z))}l&&(v=v||[]).push("style",l);var oe=v;(r.updateQueue=oe)&&(r.flags|=4)}},gm=function(n,r,l,u){l!==u&&(r.flags|=4)};function ia(n,r){if(!jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var u=null;l!==null;)l.alternate!==null&&(u=l),l=l.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Sn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,u=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=l,r}function Iv(n,r,l){var u=r.pendingProps;switch(mu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(r),null;case 1:return kn(r.type)&&rl(),Sn(r),null;case 3:return u=r.stateNode,Hs(),Gt(On),Gt(xn),Ru(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(cl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,mi!==null&&(sf(mi),mi=null))),qu(n,r),Sn(r),null;case 5:Au(r);var p=rs(Jo.current);if(l=r.type,n!==null&&r.stateNode!=null)mm(n,r,l,u,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!u){if(r.stateNode===null)throw Error(t(166));return Sn(r),null}if(n=rs(Pi.current),cl(r)){u=r.stateNode,l=r.type;var v=r.memoizedProps;switch(u[Ci]=r,u[qo]=v,n=(r.mode&1)!==0,l){case"dialog":Ht("cancel",u),Ht("close",u);break;case"iframe":case"object":case"embed":Ht("load",u);break;case"video":case"audio":for(p=0;p<Wo.length;p++)Ht(Wo[p],u);break;case"source":Ht("error",u);break;case"img":case"image":case"link":Ht("error",u),Ht("load",u);break;case"details":Ht("toggle",u);break;case"input":It(u,v),Ht("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Ht("invalid",u);break;case"textarea":I(u,v),Ht("invalid",u)}Ve(l,v),p=null;for(var A in v)if(v.hasOwnProperty(A)){var F=v[A];A==="children"?typeof F=="string"?u.textContent!==F&&(v.suppressHydrationWarning!==!0&&tl(u.textContent,F,n),p=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(v.suppressHydrationWarning!==!0&&tl(u.textContent,F,n),p=["children",""+F]):s.hasOwnProperty(A)&&F!=null&&A==="onScroll"&&Ht("scroll",u)}switch(l){case"input":rt(u),V(u,v,!0);break;case"textarea":rt(u),j(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=nl)}u=p,r.updateQueue=u,u!==null&&(r.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(l,{is:u.is}):(n=A.createElement(l),l==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,l),n[Ci]=r,n[qo]=u,pm(n,r,!1,!1),r.stateNode=n;e:{switch(A=Ne(l,u),l){case"dialog":Ht("cancel",n),Ht("close",n),p=u;break;case"iframe":case"object":case"embed":Ht("load",n),p=u;break;case"video":case"audio":for(p=0;p<Wo.length;p++)Ht(Wo[p],n);p=u;break;case"source":Ht("error",n),p=u;break;case"img":case"image":case"link":Ht("error",n),Ht("load",n),p=u;break;case"details":Ht("toggle",n),p=u;break;case"input":It(n,u),p=At(n,u),Ht("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ce({},u,{value:void 0}),Ht("invalid",n);break;case"textarea":I(n,u),p=Xe(n,u),Ht("invalid",n);break;default:p=u}Ve(l,p),F=p;for(v in F)if(F.hasOwnProperty(v)){var z=F[v];v==="style"?we(n,z):v==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ze(n,z)):v==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&Ae(n,z):typeof z=="number"&&Ae(n,""+z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?z!=null&&v==="onScroll"&&Ht("scroll",n):z!=null&&L(n,v,z,A))}switch(l){case"input":rt(n),V(n,u,!1);break;case"textarea":rt(n),j(n);break;case"option":u.value!=null&&n.setAttribute("value",""+de(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?bt(n,!!u.multiple,v,!1):u.defaultValue!=null&&bt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=nl)}switch(l){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Sn(r),null;case 6:if(n&&r.stateNode!=null)gm(n,r,n.memoizedProps,u);else{if(typeof u!="string"&&r.stateNode===null)throw Error(t(166));if(l=rs(Jo.current),rs(Pi.current),cl(r)){if(u=r.stateNode,l=r.memoizedProps,u[Ci]=r,(v=u.nodeValue!==l)&&(n=qn,n!==null))switch(n.tag){case 3:tl(u.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tl(u.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else u=(l.nodeType===9?l:l.ownerDocument).createTextNode(u),u[Ci]=r,r.stateNode=u}return Sn(r),null;case 13:if(Gt(qt),u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Yn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xp(),ks(),r.flags|=98560,v=!1;else if(v=cl(r),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Ci]=r}else ks(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Sn(r),v=!1}else mi!==null&&(sf(mi),mi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(qt.current&1)!==0?an===0&&(an=3):lf())),r.updateQueue!==null&&(r.flags|=4),Sn(r),null);case 4:return Hs(),qu(n,r),n===null&&Xo(r.stateNode.containerInfo),Sn(r),null;case 10:return Su(r.type._context),Sn(r),null;case 17:return kn(r.type)&&rl(),Sn(r),null;case 19:if(Gt(qt),v=r.memoizedState,v===null)return Sn(r),null;if(u=(r.flags&128)!==0,A=v.rendering,A===null)if(u)ia(v,!1);else{if(an!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=ml(n),A!==null){for(r.flags|=128,ia(v,!1),u=A.updateQueue,u!==null&&(r.updateQueue=u,r.flags|=4),r.subtreeFlags=0,u=l,l=r.child;l!==null;)v=l,n=u,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,n=A.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return zt(qt,qt.current&1|2),r.child}n=n.sibling}v.tail!==null&&b()>js&&(r.flags|=128,u=!0,ia(v,!1),r.lanes=4194304)}else{if(!u)if(n=ml(A),n!==null){if(r.flags|=128,u=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),ia(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!jt)return Sn(r),null}else 2*b()-v.renderingStartTime>js&&l!==1073741824&&(r.flags|=128,u=!0,ia(v,!1),r.lanes=4194304);v.isBackwards?(A.sibling=r.child,r.child=A):(l=v.last,l!==null?l.sibling=A:r.child=A,v.last=A)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=b(),r.sibling=null,l=qt.current,zt(qt,u?l&1|2:l&1),r):(Sn(r),null);case 22:case 23:return af(),u=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(r.flags|=8192),u&&(r.mode&1)!==0?(Kn&1073741824)!==0&&(Sn(r),r.subtreeFlags&6&&(r.flags|=8192)):Sn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Nv(n,r){switch(mu(r),r.tag){case 1:return kn(r.type)&&rl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Hs(),Gt(On),Gt(xn),Ru(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Au(r),null;case 13:if(Gt(qt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ks()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Gt(qt),null;case 4:return Hs(),null;case 10:return Su(r.type._context),null;case 22:case 23:return af(),null;case 24:return null;default:return null}}var Tl=!1,Mn=!1,Dv=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ws(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(u){$t(n,r,u)}else l.current=null}function Yu(n,r,l){try{l()}catch(u){$t(n,r,u)}}var _m=!1;function Uv(n,r){if(ou=Wa,n=Kh(),Jc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var u=l.getSelection&&l.getSelection();if(u&&u.rangeCount!==0){l=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var A=0,F=-1,z=-1,oe=0,ve=0,xe=n,_e=null;t:for(;;){for(var Oe;xe!==l||p!==0&&xe.nodeType!==3||(F=A+p),xe!==v||u!==0&&xe.nodeType!==3||(z=A+u),xe.nodeType===3&&(A+=xe.nodeValue.length),(Oe=xe.firstChild)!==null;)_e=xe,xe=Oe;for(;;){if(xe===n)break t;if(_e===l&&++oe===p&&(F=A),_e===v&&++ve===u&&(z=A),(Oe=xe.nextSibling)!==null)break;xe=_e,_e=xe.parentNode}xe=Oe}l=F===-1||z===-1?null:{start:F,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(au={focusedElem:n,selectionRange:l},Wa=!1,Be=r;Be!==null;)if(r=Be,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Be=n;else for(;Be!==null;){r=Be;try{var Ge=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var qe=Ge.memoizedProps,en=Ge.memoizedState,Q=r.stateNode,G=Q.getSnapshotBeforeUpdate(r.elementType===r.type?qe:gi(r.type,qe),en);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ie=r.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){$t(r,r.return,Te)}if(n=r.sibling,n!==null){n.return=r.return,Be=n;break}Be=r.return}return Ge=_m,_m=!1,Ge}function ra(n,r,l){var u=r.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&Yu(r,l,v)}p=p.next}while(p!==u)}}function wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var u=l.create;l.destroy=u()}l=l.next}while(l!==r)}}function Ku(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function vm(n){var r=n.alternate;r!==null&&(n.alternate=null,vm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ci],delete r[qo],delete r[fu],delete r[_v],delete r[vv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xm(n){return n.tag===5||n.tag===3||n.tag===4}function ym(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function $u(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=nl));else if(u!==4&&(n=n.child,n!==null))for($u(n,r,l),n=n.sibling;n!==null;)$u(n,r,l),n=n.sibling}function Zu(n,r,l){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Zu(n,r,l),n=n.sibling;n!==null;)Zu(n,r,l),n=n.sibling}var _n=null,_i=!1;function Nr(n,r,l){for(l=l.child;l!==null;)Sm(n,r,l),l=l.sibling}function Sm(n,r,l){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(Ce,l)}catch{}switch(l.tag){case 5:Mn||Ws(l,r);case 6:var u=_n,p=_i;_n=null,Nr(n,r,l),_n=u,_i=p,_n!==null&&(_i?(n=_n,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):_n.removeChild(l.stateNode));break;case 18:_n!==null&&(_i?(n=_n,l=l.stateNode,n.nodeType===8?uu(n.parentNode,l):n.nodeType===1&&uu(n,l),Fo(n)):uu(_n,l.stateNode));break;case 4:u=_n,p=_i,_n=l.stateNode.containerInfo,_i=!0,Nr(n,r,l),_n=u,_i=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(u=l.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,A=v.destroy;v=v.tag,A!==void 0&&((v&2)!==0||(v&4)!==0)&&Yu(l,r,A),p=p.next}while(p!==u)}Nr(n,r,l);break;case 1:if(!Mn&&(Ws(l,r),u=l.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=l.memoizedProps,u.state=l.memoizedState,u.componentWillUnmount()}catch(F){$t(l,r,F)}Nr(n,r,l);break;case 21:Nr(n,r,l);break;case 22:l.mode&1?(Mn=(u=Mn)||l.memoizedState!==null,Nr(n,r,l),Mn=u):Nr(n,r,l);break;default:Nr(n,r,l)}}function Mm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Dv),r.forEach(function(u){var p=Wv.bind(null,n,u);l.has(u)||(l.add(u),u.then(p,p))})}}function vi(n,r){var l=r.deletions;if(l!==null)for(var u=0;u<l.length;u++){var p=l[u];try{var v=n,A=r,F=A;e:for(;F!==null;){switch(F.tag){case 5:_n=F.stateNode,_i=!1;break e;case 3:_n=F.stateNode.containerInfo,_i=!0;break e;case 4:_n=F.stateNode.containerInfo,_i=!0;break e}F=F.return}if(_n===null)throw Error(t(160));Sm(v,A,p),_n=null,_i=!1;var z=p.alternate;z!==null&&(z.return=null),p.return=null}catch(oe){$t(p,r,oe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Em(r,n),r=r.sibling}function Em(n,r){var l=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(vi(r,n),Ii(n),u&4){try{ra(3,n,n.return),wl(3,n)}catch(qe){$t(n,n.return,qe)}try{ra(5,n,n.return)}catch(qe){$t(n,n.return,qe)}}break;case 1:vi(r,n),Ii(n),u&512&&l!==null&&Ws(l,l.return);break;case 5:if(vi(r,n),Ii(n),u&512&&l!==null&&Ws(l,l.return),n.flags&32){var p=n.stateNode;try{Ae(p,"")}catch(qe){$t(n,n.return,qe)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,A=l!==null?l.memoizedProps:v,F=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{F==="input"&&v.type==="radio"&&v.name!=null&&dt(p,v),Ne(F,A);var oe=Ne(F,v);for(A=0;A<z.length;A+=2){var ve=z[A],xe=z[A+1];ve==="style"?we(p,xe):ve==="dangerouslySetInnerHTML"?ze(p,xe):ve==="children"?Ae(p,xe):L(p,ve,xe,oe)}switch(F){case"input":Vt(p,v);break;case"textarea":T(p,v);break;case"select":var _e=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Oe=v.value;Oe!=null?bt(p,!!v.multiple,Oe,!1):_e!==!!v.multiple&&(v.defaultValue!=null?bt(p,!!v.multiple,v.defaultValue,!0):bt(p,!!v.multiple,v.multiple?[]:"",!1))}p[qo]=v}catch(qe){$t(n,n.return,qe)}}break;case 6:if(vi(r,n),Ii(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(qe){$t(n,n.return,qe)}}break;case 3:if(vi(r,n),Ii(n),u&4&&l!==null&&l.memoizedState.isDehydrated)try{Fo(r.containerInfo)}catch(qe){$t(n,n.return,qe)}break;case 4:vi(r,n),Ii(n);break;case 13:vi(r,n),Ii(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(ef=b())),u&4&&Mm(n);break;case 22:if(ve=l!==null&&l.memoizedState!==null,n.mode&1?(Mn=(oe=Mn)||ve,vi(r,n),Mn=oe):vi(r,n),Ii(n),u&8192){if(oe=n.memoizedState!==null,(n.stateNode.isHidden=oe)&&!ve&&(n.mode&1)!==0)for(Be=n,ve=n.child;ve!==null;){for(xe=Be=ve;Be!==null;){switch(_e=Be,Oe=_e.child,_e.tag){case 0:case 11:case 14:case 15:ra(4,_e,_e.return);break;case 1:Ws(_e,_e.return);var Ge=_e.stateNode;if(typeof Ge.componentWillUnmount=="function"){u=_e,l=_e.return;try{r=u,Ge.props=r.memoizedProps,Ge.state=r.memoizedState,Ge.componentWillUnmount()}catch(qe){$t(u,l,qe)}}break;case 5:Ws(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Am(xe);continue}}Oe!==null?(Oe.return=_e,Be=Oe):Am(xe)}ve=ve.sibling}e:for(ve=null,xe=n;;){if(xe.tag===5){if(ve===null){ve=xe;try{p=xe.stateNode,oe?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(F=xe.stateNode,z=xe.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=ye("display",A))}catch(qe){$t(n,n.return,qe)}}}else if(xe.tag===6){if(ve===null)try{xe.stateNode.nodeValue=oe?"":xe.memoizedProps}catch(qe){$t(n,n.return,qe)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;ve===xe&&(ve=null),xe=xe.return}ve===xe&&(ve=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:vi(r,n),Ii(n),u&4&&Mm(n);break;case 21:break;default:vi(r,n),Ii(n)}}function Ii(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(xm(l)){var u=l;break e}l=l.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Ae(p,""),u.flags&=-33);var v=ym(n);Zu(n,v,p);break;case 3:case 4:var A=u.stateNode.containerInfo,F=ym(n);$u(n,F,A);break;default:throw Error(t(161))}}catch(z){$t(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Fv(n,r,l){Be=n,Tm(n)}function Tm(n,r,l){for(var u=(n.mode&1)!==0;Be!==null;){var p=Be,v=p.child;if(p.tag===22&&u){var A=p.memoizedState!==null||Tl;if(!A){var F=p.alternate,z=F!==null&&F.memoizedState!==null||Mn;F=Tl;var oe=Mn;if(Tl=A,(Mn=z)&&!oe)for(Be=p;Be!==null;)A=Be,z=A.child,A.tag===22&&A.memoizedState!==null?bm(p):z!==null?(z.return=A,Be=z):bm(p);for(;v!==null;)Be=v,Tm(v),v=v.sibling;Be=p,Tl=F,Mn=oe}wm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Be=v):wm(n)}}function wm(n){for(;Be!==null;){var r=Be;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Mn||wl(5,r);break;case 1:var u=r.stateNode;if(r.flags&4&&!Mn)if(l===null)u.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:gi(r.type,l.memoizedProps);u.componentDidUpdate(p,l.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Ap(r,v,u);break;case 3:var A=r.updateQueue;if(A!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Ap(r,A,l)}break;case 5:var F=r.stateNode;if(l===null&&r.flags&4){l=F;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var oe=r.alternate;if(oe!==null){var ve=oe.memoizedState;if(ve!==null){var xe=ve.dehydrated;xe!==null&&Fo(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||r.flags&512&&Ku(r)}catch(_e){$t(r,r.return,_e)}}if(r===n){Be=null;break}if(l=r.sibling,l!==null){l.return=r.return,Be=l;break}Be=r.return}}function Am(n){for(;Be!==null;){var r=Be;if(r===n){Be=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Be=l;break}Be=r.return}}function bm(n){for(;Be!==null;){var r=Be;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{wl(4,r)}catch(z){$t(r,l,z)}break;case 1:var u=r.stateNode;if(typeof u.componentDidMount=="function"){var p=r.return;try{u.componentDidMount()}catch(z){$t(r,p,z)}}var v=r.return;try{Ku(r)}catch(z){$t(r,v,z)}break;case 5:var A=r.return;try{Ku(r)}catch(z){$t(r,A,z)}}}catch(z){$t(r,r.return,z)}if(r===n){Be=null;break}var F=r.sibling;if(F!==null){F.return=r.return,Be=F;break}Be=r.return}}var Ov=Math.ceil,Al=P.ReactCurrentDispatcher,Ju=P.ReactCurrentOwner,ai=P.ReactCurrentBatchConfig,Ct=0,hn=null,nn=null,vn=0,Kn=0,Xs=Rr(0),an=0,sa=null,os=0,bl=0,Qu=0,oa=null,zn=null,ef=0,js=1/0,rr=null,Rl=!1,tf=null,Dr=null,Cl=!1,Ur=null,Pl=0,aa=0,nf=null,Ll=-1,Il=0;function Cn(){return(Ct&6)!==0?b():Ll!==-1?Ll:Ll=b()}function Fr(n){return(n.mode&1)===0?1:(Ct&2)!==0&&vn!==0?vn&-vn:yv.transition!==null?(Il===0&&(Il=Un()),Il):(n=lt,n!==0||(n=window.event,n=n===void 0?16:Ch(n.type)),n)}function xi(n,r,l,u){if(50<aa)throw aa=0,nf=null,Error(t(185));Xn(n,l,u),((Ct&2)===0||n!==hn)&&(n===hn&&((Ct&2)===0&&(bl|=l),an===4&&Or(n,vn)),Vn(n,u),l===1&&Ct===0&&(r.mode&1)===0&&(js=b()+500,ol&&Pr()))}function Vn(n,r){var l=n.callbackNode;bn(n,r);var u=Jt(n,n===hn?vn:0);if(u===0)l!==null&&Va(l),n.callbackNode=null,n.callbackPriority=0;else if(r=u&-u,n.callbackPriority!==r){if(l!=null&&Va(l),r===1)n.tag===0?xv(Cm.bind(null,n)):pp(Cm.bind(null,n)),mv(function(){(Ct&6)===0&&Pr()}),l=null;else{switch(hi(u)){case 1:l=le;break;case 4:l=re;break;case 16:l=ne;break;case 536870912:l=ke;break;default:l=ne}l=Om(l,Rm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Rm(n,r){if(Ll=-1,Il=0,(Ct&6)!==0)throw Error(t(327));var l=n.callbackNode;if(qs()&&n.callbackNode!==l)return null;var u=Jt(n,n===hn?vn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||r)r=Nl(n,u);else{r=u;var p=Ct;Ct|=2;var v=Lm();(hn!==n||vn!==r)&&(rr=null,js=b()+500,ls(n,r));do try{zv();break}catch(F){Pm(n,F)}while(!0);yu(),Al.current=v,Ct=p,nn!==null?r=0:(hn=null,vn=0,r=an)}if(r!==0){if(r===2&&(p=Mt(n),p!==0&&(u=p,r=rf(n,p))),r===1)throw l=sa,ls(n,0),Or(n,u),Vn(n,b()),l;if(r===6)Or(n,u);else{if(p=n.current.alternate,(u&30)===0&&!kv(p)&&(r=Nl(n,u),r===2&&(v=Mt(n),v!==0&&(u=v,r=rf(n,v))),r===1))throw l=sa,ls(n,0),Or(n,u),Vn(n,b()),l;switch(n.finishedWork=p,n.finishedLanes=u,r){case 0:case 1:throw Error(t(345));case 2:cs(n,zn,rr);break;case 3:if(Or(n,u),(u&130023424)===u&&(r=ef+500-b(),10<r)){if(Jt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Cn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=cu(cs.bind(null,n,zn,rr),r);break}cs(n,zn,rr);break;case 4:if(Or(n,u),(u&4194240)===u)break;for(r=n.eventTimes,p=-1;0<u;){var A=31-et(u);v=1<<A,A=r[A],A>p&&(p=A),u&=~v}if(u=p,u=b()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Ov(u/1960))-u,10<u){n.timeoutHandle=cu(cs.bind(null,n,zn,rr),u);break}cs(n,zn,rr);break;case 5:cs(n,zn,rr);break;default:throw Error(t(329))}}}return Vn(n,b()),n.callbackNode===l?Rm.bind(null,n):null}function rf(n,r){var l=oa;return n.current.memoizedState.isDehydrated&&(ls(n,r).flags|=256),n=Nl(n,r),n!==2&&(r=zn,zn=l,r!==null&&sf(r)),n}function sf(n){zn===null?zn=n:zn.push.apply(zn,n)}function kv(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var u=0;u<l.length;u++){var p=l[u],v=p.getSnapshot;p=p.value;try{if(!pi(v(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Or(n,r){for(r&=~Qu,r&=~bl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-et(r),u=1<<l;n[l]=-1,r&=~u}}function Cm(n){if((Ct&6)!==0)throw Error(t(327));qs();var r=Jt(n,0);if((r&1)===0)return Vn(n,b()),null;var l=Nl(n,r);if(n.tag!==0&&l===2){var u=Mt(n);u!==0&&(r=u,l=rf(n,u))}if(l===1)throw l=sa,ls(n,0),Or(n,r),Vn(n,b()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,cs(n,zn,rr),Vn(n,b()),null}function of(n,r){var l=Ct;Ct|=1;try{return n(r)}finally{Ct=l,Ct===0&&(js=b()+500,ol&&Pr())}}function as(n){Ur!==null&&Ur.tag===0&&(Ct&6)===0&&qs();var r=Ct;Ct|=1;var l=ai.transition,u=lt;try{if(ai.transition=null,lt=1,n)return n()}finally{lt=u,ai.transition=l,Ct=r,(Ct&6)===0&&Pr()}}function af(){Kn=Xs.current,Gt(Xs)}function ls(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,pv(l)),nn!==null)for(l=nn.return;l!==null;){var u=l;switch(mu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&rl();break;case 3:Hs(),Gt(On),Gt(xn),Ru();break;case 5:Au(u);break;case 4:Hs();break;case 13:Gt(qt);break;case 19:Gt(qt);break;case 10:Su(u.type._context);break;case 22:case 23:af()}l=l.return}if(hn=n,nn=n=kr(n.current,null),vn=Kn=r,an=0,sa=null,Qu=bl=os=0,zn=oa=null,is!==null){for(r=0;r<is.length;r++)if(l=is[r],u=l.interleaved,u!==null){l.interleaved=null;var p=u.next,v=l.pending;if(v!==null){var A=v.next;v.next=p,u.next=A}l.pending=u}is=null}return n}function Pm(n,r){do{var l=nn;try{if(yu(),gl.current=yl,_l){for(var u=Yt.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}_l=!1}if(ss=0,dn=on=Yt=null,Qo=!1,ea=0,Ju.current=null,l===null||l.return===null){an=1,sa=r,nn=null;break}e:{var v=n,A=l.return,F=l,z=r;if(r=vn,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var oe=z,ve=F,xe=ve.tag;if((ve.mode&1)===0&&(xe===0||xe===11||xe===15)){var _e=ve.alternate;_e?(ve.updateQueue=_e.updateQueue,ve.memoizedState=_e.memoizedState,ve.lanes=_e.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Oe=tm(A);if(Oe!==null){Oe.flags&=-257,nm(Oe,A,F,v,r),Oe.mode&1&&em(v,oe,r),r=Oe,z=oe;var Ge=r.updateQueue;if(Ge===null){var qe=new Set;qe.add(z),r.updateQueue=qe}else Ge.add(z);break e}else{if((r&1)===0){em(v,oe,r),lf();break e}z=Error(t(426))}}else if(jt&&F.mode&1){var en=tm(A);if(en!==null){(en.flags&65536)===0&&(en.flags|=256),nm(en,A,F,v,r),vu(Gs(z,F));break e}}v=z=Gs(z,F),an!==4&&(an=2),oa===null?oa=[v]:oa.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var Q=Jp(v,z,r);wp(v,Q);break e;case 1:F=z;var G=v.type,ie=v.stateNode;if((v.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Dr===null||!Dr.has(ie)))){v.flags|=65536,r&=-r,v.lanes|=r;var Te=Qp(v,F,r);wp(v,Te);break e}}v=v.return}while(v!==null)}Nm(l)}catch($e){r=$e,nn===l&&l!==null&&(nn=l=l.return);continue}break}while(!0)}function Lm(){var n=Al.current;return Al.current=yl,n===null?yl:n}function lf(){(an===0||an===3||an===2)&&(an=4),hn===null||(os&268435455)===0&&(bl&268435455)===0||Or(hn,vn)}function Nl(n,r){var l=Ct;Ct|=2;var u=Lm();(hn!==n||vn!==r)&&(rr=null,ls(n,r));do try{Bv();break}catch(p){Pm(n,p)}while(!0);if(yu(),Ct=l,Al.current=u,nn!==null)throw Error(t(261));return hn=null,vn=0,an}function Bv(){for(;nn!==null;)Im(nn)}function zv(){for(;nn!==null&&!kc();)Im(nn)}function Im(n){var r=Fm(n.alternate,n,Kn);n.memoizedProps=n.pendingProps,r===null?Nm(n):nn=r,Ju.current=null}function Nm(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Iv(l,r,Kn),l!==null){nn=l;return}}else{if(l=Nv(l,r),l!==null){l.flags&=32767,nn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{an=6,nn=null;return}}if(r=r.sibling,r!==null){nn=r;return}nn=r=n}while(r!==null);an===0&&(an=5)}function cs(n,r,l){var u=lt,p=ai.transition;try{ai.transition=null,lt=1,Vv(n,r,l,u)}finally{ai.transition=p,lt=u}return null}function Vv(n,r,l,u){do qs();while(Ur!==null);if((Ct&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(yr(n,v),n===hn&&(nn=hn=null,vn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Cl||(Cl=!0,Om(ne,function(){return qs(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=ai.transition,ai.transition=null;var A=lt;lt=1;var F=Ct;Ct|=4,Ju.current=null,Uv(n,l),Em(l,n),av(au),Wa=!!ou,au=ou=null,n.current=l,Fv(l),Bc(),Ct=F,lt=A,ai.transition=v}else n.current=l;if(Cl&&(Cl=!1,Ur=n,Pl=p),v=n.pendingLanes,v===0&&(Dr=null),Ze(l.stateNode),Vn(n,b()),r!==null)for(u=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],u(p.value,{componentStack:p.stack,digest:p.digest});if(Rl)throw Rl=!1,n=tf,tf=null,n;return(Pl&1)!==0&&n.tag!==0&&qs(),v=n.pendingLanes,(v&1)!==0?n===nf?aa++:(aa=0,nf=n):aa=0,Pr(),null}function qs(){if(Ur!==null){var n=hi(Pl),r=ai.transition,l=lt;try{if(ai.transition=null,lt=16>n?16:n,Ur===null)var u=!1;else{if(n=Ur,Ur=null,Pl=0,(Ct&6)!==0)throw Error(t(331));var p=Ct;for(Ct|=4,Be=n.current;Be!==null;){var v=Be,A=v.child;if((Be.flags&16)!==0){var F=v.deletions;if(F!==null){for(var z=0;z<F.length;z++){var oe=F[z];for(Be=oe;Be!==null;){var ve=Be;switch(ve.tag){case 0:case 11:case 15:ra(8,ve,v)}var xe=ve.child;if(xe!==null)xe.return=ve,Be=xe;else for(;Be!==null;){ve=Be;var _e=ve.sibling,Oe=ve.return;if(vm(ve),ve===oe){Be=null;break}if(_e!==null){_e.return=Oe,Be=_e;break}Be=Oe}}}var Ge=v.alternate;if(Ge!==null){var qe=Ge.child;if(qe!==null){Ge.child=null;do{var en=qe.sibling;qe.sibling=null,qe=en}while(qe!==null)}}Be=v}}if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,Be=A;else e:for(;Be!==null;){if(v=Be,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:ra(9,v,v.return)}var Q=v.sibling;if(Q!==null){Q.return=v.return,Be=Q;break e}Be=v.return}}var G=n.current;for(Be=G;Be!==null;){A=Be;var ie=A.child;if((A.subtreeFlags&2064)!==0&&ie!==null)ie.return=A,Be=ie;else e:for(A=G;Be!==null;){if(F=Be,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:wl(9,F)}}catch($e){$t(F,F.return,$e)}if(F===A){Be=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,Be=Te;break e}Be=F.return}}if(Ct=p,Pr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(Ce,n)}catch{}u=!0}return u}finally{lt=l,ai.transition=r}}return!1}function Dm(n,r,l){r=Gs(l,r),r=Jp(n,r,1),n=Ir(n,r,1),r=Cn(),n!==null&&(Xn(n,1,r),Vn(n,r))}function $t(n,r,l){if(n.tag===3)Dm(n,n,l);else for(;r!==null;){if(r.tag===3){Dm(r,n,l);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Dr===null||!Dr.has(u))){n=Gs(l,n),n=Qp(r,n,1),r=Ir(r,n,1),n=Cn(),r!==null&&(Xn(r,1,n),Vn(r,n));break}}r=r.return}}function Hv(n,r,l){var u=n.pingCache;u!==null&&u.delete(r),r=Cn(),n.pingedLanes|=n.suspendedLanes&l,hn===n&&(vn&l)===l&&(an===4||an===3&&(vn&130023424)===vn&&500>b()-ef?ls(n,0):Qu|=l),Vn(n,r)}function Um(n,r){r===0&&((n.mode&1)===0?r=1:(r=kt,kt<<=1,(kt&130023424)===0&&(kt=4194304)));var l=Cn();n=tr(n,r),n!==null&&(Xn(n,r,l),Vn(n,l))}function Gv(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Um(n,l)}function Wv(n,r){var l=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(r),Um(n,l)}var Fm;Fm=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||On.current)Bn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Bn=!1,Lv(n,r,l);Bn=(n.flags&131072)!==0}else Bn=!1,jt&&(r.flags&1048576)!==0&&mp(r,ll,r.index);switch(r.lanes=0,r.tag){case 2:var u=r.type;El(n,r),n=r.pendingProps;var p=Us(r,xn.current);Vs(r,l),p=Lu(null,r,u,n,p,l);var v=Iu();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,kn(u)?(v=!0,sl(r)):v=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Tu(r),p.updater=Sl,r.stateNode=p,p._reactInternals=r,ku(r,u,n,l),r=Hu(null,r,u,!0,v,l)):(r.tag=0,jt&&v&&pu(r),Rn(null,r,p,l),r=r.child),r;case 16:u=r.elementType;e:{switch(El(n,r),n=r.pendingProps,p=u._init,u=p(u._payload),r.type=u,p=r.tag=jv(u),n=gi(u,n),p){case 0:r=Vu(null,r,u,n,l);break e;case 1:r=lm(null,r,u,n,l);break e;case 11:r=im(null,r,u,n,l);break e;case 14:r=rm(null,r,u,gi(u.type,n),l);break e}throw Error(t(306,u,""))}return r;case 0:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:gi(u,p),Vu(n,r,u,p,l);case 1:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:gi(u,p),lm(n,r,u,p,l);case 3:e:{if(cm(r),n===null)throw Error(t(387));u=r.pendingProps,v=r.memoizedState,p=v.element,Tp(n,r),pl(r,u,null,l);var A=r.memoizedState;if(u=A.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){p=Gs(Error(t(423)),r),r=um(n,r,u,l,p);break e}else if(u!==p){p=Gs(Error(t(424)),r),r=um(n,r,u,l,p);break e}else for(Yn=br(r.stateNode.containerInfo.firstChild),qn=r,jt=!0,mi=null,l=Mp(r,null,u,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ks(),u===p){r=ir(n,r,l);break e}Rn(n,r,u,l)}r=r.child}return r;case 5:return bp(r),n===null&&_u(r),u=r.type,p=r.pendingProps,v=n!==null?n.memoizedProps:null,A=p.children,lu(u,p)?A=null:v!==null&&lu(u,v)&&(r.flags|=32),am(n,r),Rn(n,r,A,l),r.child;case 6:return n===null&&_u(r),null;case 13:return fm(n,r,l);case 4:return wu(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Bs(r,null,u,l):Rn(n,r,u,l),r.child;case 11:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:gi(u,p),im(n,r,u,p,l);case 7:return Rn(n,r,r.pendingProps,l),r.child;case 8:return Rn(n,r,r.pendingProps.children,l),r.child;case 12:return Rn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(u=r.type._context,p=r.pendingProps,v=r.memoizedProps,A=p.value,zt(fl,u._currentValue),u._currentValue=A,v!==null)if(pi(v.value,A)){if(v.children===p.children&&!On.current){r=ir(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var F=v.dependencies;if(F!==null){A=v.child;for(var z=F.firstContext;z!==null;){if(z.context===u){if(v.tag===1){z=nr(-1,l&-l),z.tag=2;var oe=v.updateQueue;if(oe!==null){oe=oe.shared;var ve=oe.pending;ve===null?z.next=z:(z.next=ve.next,ve.next=z),oe.pending=z}}v.lanes|=l,z=v.alternate,z!==null&&(z.lanes|=l),Mu(v.return,l,r),F.lanes|=l;break}z=z.next}}else if(v.tag===10)A=v.type===r.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(t(341));A.lanes|=l,F=A.alternate,F!==null&&(F.lanes|=l),Mu(A,l,r),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===r){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}Rn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,u=r.pendingProps.children,Vs(r,l),p=si(p),u=u(p),r.flags|=1,Rn(n,r,u,l),r.child;case 14:return u=r.type,p=gi(u,r.pendingProps),p=gi(u.type,p),rm(n,r,u,p,l);case 15:return sm(n,r,r.type,r.pendingProps,l);case 17:return u=r.type,p=r.pendingProps,p=r.elementType===u?p:gi(u,p),El(n,r),r.tag=1,kn(u)?(n=!0,sl(r)):n=!1,Vs(r,l),$p(r,u,p),ku(r,u,p,l),Hu(null,r,u,!0,n,l);case 19:return hm(n,r,l);case 22:return om(n,r,l)}throw Error(t(156,r.tag))};function Om(n,r){return za(n,r)}function Xv(n,r,l,u){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(n,r,l,u){return new Xv(n,r,l,u)}function cf(n){return n=n.prototype,!(!n||!n.isReactComponent)}function jv(n){if(typeof n=="function")return cf(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===Z)return 14}return 2}function kr(n,r){var l=n.alternate;return l===null?(l=li(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Dl(n,r,l,u,p,v){var A=2;if(u=n,typeof n=="function")cf(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case N:return us(l.children,p,v,r);case w:A=8,p|=8;break;case C:return n=li(12,l,r,p|2),n.elementType=C,n.lanes=v,n;case W:return n=li(13,l,r,p),n.elementType=W,n.lanes=v,n;case ee:return n=li(19,l,r,p),n.elementType=ee,n.lanes=v,n;case X:return Ul(l,p,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case se:A=10;break e;case O:A=9;break e;case q:A=11;break e;case Z:A=14;break e;case K:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=li(A,l,r,p),r.elementType=n,r.type=u,r.lanes=v,r}function us(n,r,l,u){return n=li(7,n,u,r),n.lanes=l,n}function Ul(n,r,l,u){return n=li(22,n,u,r),n.elementType=X,n.lanes=l,n.stateNode={isHidden:!1},n}function uf(n,r,l){return n=li(6,n,null,r),n.lanes=l,n}function ff(n,r,l){return r=li(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function qv(n,r,l,u,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fn(0),this.expirationTimes=Fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function df(n,r,l,u,p,v,A,F,z){return n=new qv(n,r,l,F,z),r===1?(r=1,v===!0&&(r|=8)):r=0,v=li(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tu(v),n}function Yv(n,r,l){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:r,implementation:l}}function km(n){if(!n)return Cr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(kn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(kn(l))return dp(n,l,r)}return r}function Bm(n,r,l,u,p,v,A,F,z){return n=df(l,u,!0,n,p,v,A,F,z),n.context=km(null),l=n.current,u=Cn(),p=Fr(l),v=nr(u,p),v.callback=r??null,Ir(l,v,p),n.current.lanes=p,Xn(n,p,u),Vn(n,u),n}function Fl(n,r,l,u){var p=r.current,v=Cn(),A=Fr(p);return l=km(l),r.context===null?r.context=l:r.pendingContext=l,r=nr(v,A),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=Ir(p,r,A),n!==null&&(xi(n,p,A,v),hl(n,p,A)),A}function Ol(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function zm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function hf(n,r){zm(n,r),(n=n.alternate)&&zm(n,r)}function Kv(){return null}var Vm=typeof reportError=="function"?reportError:function(n){console.error(n)};function pf(n){this._internalRoot=n}kl.prototype.render=pf.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Fl(n,r,null,null)},kl.prototype.unmount=pf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;as(function(){Fl(null,n,null,null)}),r[Zi]=null}};function kl(n){this._internalRoot=n}kl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Lo();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Tr.length&&r!==0&&r<Tr[l].priority;l++);Tr.splice(l,0,n),l===0&&bh(n)}};function mf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Hm(){}function $v(n,r,l,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var oe=Ol(A);v.call(oe)}}var A=Bm(r,u,n,0,null,!1,!1,"",Hm);return n._reactRootContainer=A,n[Zi]=A.current,Xo(n.nodeType===8?n.parentNode:n),as(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var F=u;u=function(){var oe=Ol(z);F.call(oe)}}var z=df(n,0,!1,null,null,!1,!1,"",Hm);return n._reactRootContainer=z,n[Zi]=z.current,Xo(n.nodeType===8?n.parentNode:n),as(function(){Fl(r,z,l,u)}),z}function zl(n,r,l,u,p){var v=l._reactRootContainer;if(v){var A=v;if(typeof p=="function"){var F=p;p=function(){var z=Ol(A);F.call(z)}}Fl(r,A,n,p)}else A=$v(l,r,n,p,u);return Ol(A)}Qt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=wt(r.pendingLanes);l!==0&&(Lt(r,l|1),Vn(r,b()),(Ct&6)===0&&(js=b()+500,Pr()))}break;case 13:as(function(){var u=tr(n,1);if(u!==null){var p=Cn();xi(u,n,1,p)}}),hf(n,1)}},ni=function(n){if(n.tag===13){var r=tr(n,134217728);if(r!==null){var l=Cn();xi(r,n,134217728,l)}hf(n,134217728)}},$i=function(n){if(n.tag===13){var r=Fr(n),l=tr(n,r);if(l!==null){var u=Cn();xi(l,n,r,u)}hf(n,r)}},Lo=function(){return lt},wh=function(n,r){var l=lt;try{return lt=n,r()}finally{lt=l}},be=function(n,r,l){switch(r){case"input":if(Vt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var u=l[r];if(u!==n&&u.form===n.form){var p=il(u);if(!p)throw Error(t(90));Zt(u),Vt(u,p)}}}break;case"textarea":T(n,l);break;case"select":r=l.value,r!=null&&bt(n,!!l.multiple,r,!1)}},at=of,Dt=as;var Zv={usingClientEntryPoint:!1,Events:[Yo,Ns,il,fe,He,of]},la={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jv={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ka(n),n===null?null:n.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||Kv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{Ce=Vl.inject(Jv),Ue=Vl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zv,Hn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(r))throw Error(t(200));return Yv(n,r,null,l)},Hn.createRoot=function(n,r){if(!mf(n))throw Error(t(299));var l=!1,u="",p=Vm;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=df(n,1,!1,null,null,l,!1,u,p),n[Zi]=r.current,Xo(n.nodeType===8?n.parentNode:n),new pf(r)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ka(r),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return as(n)},Hn.hydrate=function(n,r,l){if(!Bl(r))throw Error(t(200));return zl(null,n,r,!0,l)},Hn.hydrateRoot=function(n,r,l){if(!mf(n))throw Error(t(405));var u=l!=null&&l.hydratedSources||null,p=!1,v="",A=Vm;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),r=Bm(r,null,n,1,l??null,p,!1,v,A),n[Zi]=r.current,Xo(n),u)for(n=0;n<u.length;n++)l=u[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new kl(r)},Hn.render=function(n,r,l){if(!Bl(r))throw Error(t(200));return zl(null,n,r,!1,l)},Hn.unmountComponentAtNode=function(n){if(!Bl(n))throw Error(t(40));return n._reactRootContainer?(as(function(){zl(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1},Hn.unstable_batchedUpdates=of,Hn.unstable_renderSubtreeIntoContainer=function(n,r,l,u){if(!Bl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return zl(n,r,l,!1,u)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var $m;function ox(){if($m)return vf.exports;$m=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),vf.exports=sx(),vf.exports}var Zm;function ax(){if(Zm)return Hl;Zm=1;var o=ox();return Hl.createRoot=o.createRoot,Hl.hydrateRoot=o.hydrateRoot,Hl}var lx=ax();function cx(o,e){o.src=e}const ux=o=>{var e,t,i,s="The Google Maps JavaScript API",a="google",c="importLibrary",f="__ib__",d=document,h=window,g=h[a]||(h[a]={}),_=g.maps||(g.maps={}),m=new Set,x=new URLSearchParams,M=()=>e||(e=new Promise(async(E,y)=>{var S;await(t=d.createElement("script")),x.set("libraries",[...m]+"");for(i in o)x.set(i.replace(/[A-Z]/g,R=>"_"+R[0].toLowerCase()),o[i]);x.set("callback",a+".maps."+f),cx(t,"https://maps.googleapis.com/maps/api/js?"+x),_[f]=E,t.onerror=()=>e=y(Error(s+" could not load.")),t.nonce=((S=d.querySelector("script[nonce]"))==null?void 0:S.nonce)||"",d.head.append(t)}));_[c]?console.warn(s+" only loads once. Ignoring:",o):_[c]=(E,...y)=>m.add(E)&&M().then(()=>_[c](E,...y))},fx=o=>`The setOptions() function should only be called once. The options passed to the additional call (${JSON.stringify(o)}) will be ignored.`,dx=o=>`The google.maps.importLibrary() function is already defined, and @googlemaps/js-api-loader will use the existing function instead of overwriting it. The options passed to setOptions (${JSON.stringify(o)}) will be ignored.`,hx=()=>{},px=()=>{};let Jm=!1;function mx(o){if(Jm){hx(fx(o));return}gx(o),Jm=!0}async function Qm(o){var e,t;if(!((t=(e=window==null?void 0:window.google)==null?void 0:e.maps)!=null&&t.importLibrary))throw new Error("google.maps.importLibrary is not installed.");return await google.maps.importLibrary(o)}function gx(o){var t,i;const e=!!((i=(t=window.google)==null?void 0:t.maps)!=null&&i.importLibrary);e&&px(dx(o)),e||ux(o)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="183",_x=0,eg=1,vx=2,_c=1,xx=2,ya=3,pr=0,Gn=1,Ei=2,dr=0,uo=1,tg=2,ng=3,ig=4,yx=5,xs=100,Sx=101,Mx=102,Ex=103,Tx=104,wx=200,Ax=201,bx=202,Rx=203,ad=204,ld=205,Cx=206,Px=207,Lx=208,Ix=209,Nx=210,Dx=211,Ux=212,Fx=213,Ox=214,cd=0,ud=1,fd=2,po=3,dd=4,hd=5,pd=6,md=7,P0=0,kx=1,Bx=2,Vi=0,L0=1,I0=2,N0=3,D0=4,U0=5,F0=6,O0=7,rg="attached",zx="detached",k0=300,Ms=301,mo=302,Sf=303,Mf=304,Lc=306,go=1e3,Oi=1001,wc=1002,ln=1003,B0=1004,Sa=1005,sn=1006,vc=1007,ki=1008,Jn=1009,z0=1010,V0=1011,Aa=1012,sh=1013,Wi=1014,fi=1015,mr=1016,oh=1017,ah=1018,ba=1020,H0=35902,G0=35899,W0=1021,X0=1022,di=1023,gr=1026,Ss=1027,lh=1028,ch=1029,_o=1030,uh=1031,fh=1033,xc=33776,yc=33777,Sc=33778,Mc=33779,gd=35840,_d=35841,vd=35842,xd=35843,yd=36196,Sd=37492,Md=37496,Ed=37488,Td=37489,wd=37490,Ad=37491,bd=37808,Rd=37809,Cd=37810,Pd=37811,Ld=37812,Id=37813,Nd=37814,Dd=37815,Ud=37816,Fd=37817,Od=37818,kd=37819,Bd=37820,zd=37821,Vd=36492,Hd=36494,Gd=36495,Wd=36283,Xd=36284,jd=36285,qd=36286,Ra=2300,Ca=2301,Ef=2302,sg=2303,og=2400,ag=2401,lg=2402,Vx=2500,Hx=0,j0=1,Yd=2,Gx=3200,q0=0,Wx=1,qr="",gn="srgb",Dn="srgb-linear",Ac="linear",Ut="srgb",Ys=7680,cg=519,Xx=512,jx=513,qx=514,dh=515,Yx=516,Kx=517,hh=518,$x=519,Kd=35044,ug="300 es",Bi=2e3,Pa=2001;function Zx(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Jx(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function La(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Qx(){const o=La("canvas");return o.style.display="block",o}const fg={};function bc(...o){const e="THREE."+o.shift();console.log(e,...o)}function Y0(o){const e=o[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=o[1];t&&t.isStackTrace?o[0]+=" "+t.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function Qe(...o){o=Y0(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...o)}}function ot(...o){o=Y0(o);const e="THREE."+o.shift();{const t=o[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...o)}}function Rc(...o){const e=o.join(" ");e in fg||(fg[e]=!0,Qe(...o))}function ey(o,e,t){return new Promise(function(i,s){function a(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const ty={[cd]:ud,[fd]:pd,[dd]:md,[po]:hd,[ud]:cd,[pd]:fd,[md]:dd,[hd]:po};class Eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,c=s.length;a<c;a++)s[a].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dg=1234567;const Ea=Math.PI/180,vo=180/Math.PI;function Ai(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function yt(o,e,t){return Math.max(e,Math.min(t,o))}function ph(o,e){return(o%e+e)%e}function ny(o,e,t,i,s){return i+(o-e)*(s-i)/(t-e)}function iy(o,e,t){return o!==e?(t-o)/(e-o):0}function Ta(o,e,t){return(1-t)*o+t*e}function ry(o,e,t,i){return Ta(o,e,1-Math.exp(-t*i))}function sy(o,e=1){return e-Math.abs(ph(o,e*2)-e)}function oy(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function ay(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function ly(o,e){return o+Math.floor(Math.random()*(e-o+1))}function cy(o,e){return o+Math.random()*(e-o)}function uy(o){return o*(.5-Math.random())}function fy(o){o!==void 0&&(dg=o);let e=dg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dy(o){return o*Ea}function hy(o){return o*vo}function py(o){return(o&o-1)===0&&o!==0}function my(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function gy(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function _y(o,e,t,i,s){const a=Math.cos,c=Math.sin,f=a(t/2),d=c(t/2),h=a((e+i)/2),g=c((e+i)/2),_=a((e-i)/2),m=c((e-i)/2),x=a((i-e)/2),M=c((i-e)/2);switch(s){case"XYX":o.set(f*g,d*_,d*m,f*h);break;case"YZY":o.set(d*m,f*g,d*_,f*h);break;case"ZXZ":o.set(d*_,d*m,f*g,f*h);break;case"XZX":o.set(f*g,d*M,d*x,f*h);break;case"YXY":o.set(d*x,f*g,d*M,f*h);break;case"ZYZ":o.set(d*M,d*x,f*g,f*h);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ft(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const vy={DEG2RAD:Ea,RAD2DEG:vo,generateUUID:Ai,clamp:yt,euclideanModulo:ph,mapLinear:ny,inverseLerp:iy,lerp:Ta,damp:ry,pingpong:sy,smoothstep:oy,smootherstep:ay,randInt:ly,randFloat:cy,randFloatSpread:uy,seededRandom:fy,degToRad:dy,radToDeg:hy,isPowerOfTwo:py,ceilPowerOfTwo:my,floorPowerOfTwo:gy,setQuaternionFromProperEuler:_y,normalize:Ft,denormalize:Ti};class Tt{constructor(e=0,t=0){Tt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*i-c*s+e.x,this.y=a*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _r{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,c,f){let d=i[s+0],h=i[s+1],g=i[s+2],_=i[s+3],m=a[c+0],x=a[c+1],M=a[c+2],E=a[c+3];if(_!==E||d!==m||h!==x||g!==M){let y=d*m+h*x+g*M+_*E;y<0&&(m=-m,x=-x,M=-M,E=-E,y=-y);let S=1-f;if(y<.9995){const R=Math.acos(y),L=Math.sin(R);S=Math.sin(S*R)/L,f=Math.sin(f*R)/L,d=d*S+m*f,h=h*S+x*f,g=g*S+M*f,_=_*S+E*f}else{d=d*S+m*f,h=h*S+x*f,g=g*S+M*f,_=_*S+E*f;const R=1/Math.sqrt(d*d+h*h+g*g+_*_);d*=R,h*=R,g*=R,_*=R}}e[t]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,s,a,c){const f=i[s],d=i[s+1],h=i[s+2],g=i[s+3],_=a[c],m=a[c+1],x=a[c+2],M=a[c+3];return e[t]=f*M+g*_+d*x-h*m,e[t+1]=d*M+g*m+h*_-f*x,e[t+2]=h*M+g*x+f*m-d*_,e[t+3]=g*M-f*_-d*m-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(i/2),g=f(s/2),_=f(a/2),m=d(i/2),x=d(s/2),M=d(a/2);switch(c){case"XYZ":this._x=m*g*_+h*x*M,this._y=h*x*_-m*g*M,this._z=h*g*M+m*x*_,this._w=h*g*_-m*x*M;break;case"YXZ":this._x=m*g*_+h*x*M,this._y=h*x*_-m*g*M,this._z=h*g*M-m*x*_,this._w=h*g*_+m*x*M;break;case"ZXY":this._x=m*g*_-h*x*M,this._y=h*x*_+m*g*M,this._z=h*g*M+m*x*_,this._w=h*g*_-m*x*M;break;case"ZYX":this._x=m*g*_-h*x*M,this._y=h*x*_+m*g*M,this._z=h*g*M-m*x*_,this._w=h*g*_+m*x*M;break;case"YZX":this._x=m*g*_+h*x*M,this._y=h*x*_+m*g*M,this._z=h*g*M-m*x*_,this._w=h*g*_-m*x*M;break;case"XZY":this._x=m*g*_-h*x*M,this._y=h*x*_-m*g*M,this._z=h*g*M+m*x*_,this._w=h*g*_+m*x*M;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],c=t[1],f=t[5],d=t[9],h=t[2],g=t[6],_=t[10],m=i+f+_;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(g-d)*x,this._y=(a-h)*x,this._z=(c-s)*x}else if(i>f&&i>_){const x=2*Math.sqrt(1+i-f-_);this._w=(g-d)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(a+h)/x}else if(f>_){const x=2*Math.sqrt(1+f-i-_);this._w=(a-h)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(d+g)/x}else{const x=2*Math.sqrt(1+_-i-f);this._w=(c-s)/x,this._x=(a+h)/x,this._y=(d+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,c=e._w,f=t._x,d=t._y,h=t._z,g=t._w;return this._x=i*g+c*f+s*h-a*d,this._y=s*g+c*d+a*f-i*h,this._z=a*g+c*h+i*d-s*f,this._w=c*g-i*f-s*d-a*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,a=e._z,c=e._w,f=this.dot(e);f<0&&(i=-i,s=-s,a=-a,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),g=Math.sin(h);d=Math.sin(d*h)/g,t=Math.sin(t*h)/g,this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,c=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*c,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*c,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*s-f*i),g=2*(f*t-a*s),_=2*(a*i-c*t);return this.x=t+d*h+c*_-f*g,this.y=i+d*g+f*h-a*_,this.z=s+d*_+a*g-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,c=t.x,f=t.y,d=t.z;return this.x=s*d-a*f,this.y=a*c-i*d,this.z=i*f-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tf.copy(this).projectOnVector(e),this.sub(Tf)}reflect(e){return this.sub(Tf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tf=new $,hg=new _r;class pt{constructor(e,t,i,s,a,c,f,d,h){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,f,d,h)}set(e,t,i,s,a,c,f,d,h){const g=this.elements;return g[0]=e,g[1]=s,g[2]=f,g[3]=t,g[4]=a,g[5]=d,g[6]=i,g[7]=c,g[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],f=i[3],d=i[6],h=i[1],g=i[4],_=i[7],m=i[2],x=i[5],M=i[8],E=s[0],y=s[3],S=s[6],R=s[1],L=s[4],P=s[7],D=s[2],U=s[5],N=s[8];return a[0]=c*E+f*R+d*D,a[3]=c*y+f*L+d*U,a[6]=c*S+f*P+d*N,a[1]=h*E+g*R+_*D,a[4]=h*y+g*L+_*U,a[7]=h*S+g*P+_*N,a[2]=m*E+x*R+M*D,a[5]=m*y+x*L+M*U,a[8]=m*S+x*P+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8];return t*c*g-t*f*h-i*a*g+i*f*d+s*a*h-s*c*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],_=g*c-f*h,m=f*d-g*a,x=h*a-c*d,M=t*_+i*m+s*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=_*E,e[1]=(s*h-g*i)*E,e[2]=(f*i-s*c)*E,e[3]=m*E,e[4]=(g*t-s*d)*E,e[5]=(s*a-f*t)*E,e[6]=x*E,e[7]=(i*d-h*t)*E,e[8]=(c*t-i*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,c,f){const d=Math.cos(a),h=Math.sin(a);return this.set(i*d,i*h,-i*(d*c+h*f)+c+e,-s*h,s*d,-s*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(wf.makeScale(e,t)),this}rotate(e){return this.premultiply(wf.makeRotation(-e)),this}translate(e,t){return this.premultiply(wf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wf=new pt,pg=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mg=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xy(){const o={enabled:!0,workingColorSpace:Dn,spaces:{},convert:function(s,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ut&&(s.r=hr(s.r),s.g=hr(s.g),s.b=hr(s.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(s.r=fo(s.r),s.g=fo(s.g),s.b=fo(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qr?Ac:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,c){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Rc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Rc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return o.define({[Dn]:{primaries:e,whitePoint:i,transfer:Ac,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:e,whitePoint:i,transfer:Ut,toXYZ:pg,fromXYZ:mg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),o}const Et=xy();function hr(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ks;class yy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ks===void 0&&(Ks=La("canvas")),Ks.width=e.width,Ks.height=e.height;const s=Ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ks}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=La("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let c=0;c<a.length;c++)a[c]=hr(a[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(hr(t[i]/255)*255):t[i]=hr(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sy=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?a.push(Af(s[c].image)):a.push(Af(s[c]))}else a=Af(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function Af(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?yy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}let My=0;const bf=new $;class cn extends Eo{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,i=Oi,s=Oi,a=sn,c=ki,f=di,d=Jn,h=cn.DEFAULT_ANISOTROPY,g=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Ai(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(bf).x}get height(){return this.source.getSize(bf).y}get depth(){return this.source.getSize(bf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==k0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case go:e.x=e.x-Math.floor(e.x);break;case Oi:e.x=e.x<0?0:1;break;case wc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case go:e.y=e.y-Math.floor(e.y);break;case Oi:e.y=e.y<0?0:1;break;case wc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=k0;cn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,i=0,s=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*a,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*a,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*a,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const d=e.elements,h=d[0],g=d[4],_=d[8],m=d[1],x=d[5],M=d[9],E=d[2],y=d[6],S=d[10];if(Math.abs(g-m)<.01&&Math.abs(_-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+m)<.1&&Math.abs(_+E)<.1&&Math.abs(M+y)<.1&&Math.abs(h+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(h+1)/2,P=(x+1)/2,D=(S+1)/2,U=(g+m)/4,N=(_+E)/4,w=(M+y)/4;return L>P&&L>D?L<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(L),s=U/i,a=N/i):P>D?P<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(P),i=U/s,a=w/s):D<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(D),i=N/a,s=w/a),this.set(i,s,a,t),this}let R=Math.sqrt((y-M)*(y-M)+(_-E)*(_-E)+(m-g)*(m-g));return Math.abs(R)<.001&&(R=1),this.x=(y-M)/R,this.y=(_-E)/R,this.z=(m-g)/R,this.w=Math.acos((h+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ey extends Eo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},a=new cn(s),c=i.count;for(let f=0;f<c;f++)this.textures[f]=a.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new mh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends Ey{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class K0 extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ty extends cn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gt{constructor(e,t,i,s,a,c,f,d,h,g,_,m,x,M,E,y){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,c,f,d,h,g,_,m,x,M,E,y)}set(e,t,i,s,a,c,f,d,h,g,_,m,x,M,E,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=a,S[5]=c,S[9]=f,S[13]=d,S[2]=h,S[6]=g,S[10]=_,S[14]=m,S[3]=x,S[7]=M,S[11]=E,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/$s.setFromMatrixColumn(e,0).length(),a=1/$s.setFromMatrixColumn(e,1).length(),c=1/$s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,c=Math.cos(i),f=Math.sin(i),d=Math.cos(s),h=Math.sin(s),g=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const m=c*g,x=c*_,M=f*g,E=f*_;t[0]=d*g,t[4]=-d*_,t[8]=h,t[1]=x+M*h,t[5]=m-E*h,t[9]=-f*d,t[2]=E-m*h,t[6]=M+x*h,t[10]=c*d}else if(e.order==="YXZ"){const m=d*g,x=d*_,M=h*g,E=h*_;t[0]=m+E*f,t[4]=M*f-x,t[8]=c*h,t[1]=c*_,t[5]=c*g,t[9]=-f,t[2]=x*f-M,t[6]=E+m*f,t[10]=c*d}else if(e.order==="ZXY"){const m=d*g,x=d*_,M=h*g,E=h*_;t[0]=m-E*f,t[4]=-c*_,t[8]=M+x*f,t[1]=x+M*f,t[5]=c*g,t[9]=E-m*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const m=c*g,x=c*_,M=f*g,E=f*_;t[0]=d*g,t[4]=M*h-x,t[8]=m*h+E,t[1]=d*_,t[5]=E*h+m,t[9]=x*h-M,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const m=c*d,x=c*h,M=f*d,E=f*h;t[0]=d*g,t[4]=E-m*_,t[8]=M*_+x,t[1]=_,t[5]=c*g,t[9]=-f*g,t[2]=-h*g,t[6]=x*_+M,t[10]=m-E*_}else if(e.order==="XZY"){const m=c*d,x=c*h,M=f*d,E=f*h;t[0]=d*g,t[4]=-_,t[8]=h*g,t[1]=m*_+E,t[5]=c*g,t[9]=x*_-M,t[2]=M*_-x,t[6]=f*g,t[10]=E*_+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wy,e,Ay)}lookAt(e,t,i){const s=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),zr.crossVectors(i,$n),zr.lengthSq()===0&&(Math.abs(i.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),zr.crossVectors(i,$n)),zr.normalize(),Gl.crossVectors($n,zr),s[0]=zr.x,s[4]=Gl.x,s[8]=$n.x,s[1]=zr.y,s[5]=Gl.y,s[9]=$n.y,s[2]=zr.z,s[6]=Gl.z,s[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,c=i[0],f=i[4],d=i[8],h=i[12],g=i[1],_=i[5],m=i[9],x=i[13],M=i[2],E=i[6],y=i[10],S=i[14],R=i[3],L=i[7],P=i[11],D=i[15],U=s[0],N=s[4],w=s[8],C=s[12],se=s[1],O=s[5],q=s[9],W=s[13],ee=s[2],Z=s[6],K=s[10],X=s[14],J=s[3],ae=s[7],ce=s[11],k=s[15];return a[0]=c*U+f*se+d*ee+h*J,a[4]=c*N+f*O+d*Z+h*ae,a[8]=c*w+f*q+d*K+h*ce,a[12]=c*C+f*W+d*X+h*k,a[1]=g*U+_*se+m*ee+x*J,a[5]=g*N+_*O+m*Z+x*ae,a[9]=g*w+_*q+m*K+x*ce,a[13]=g*C+_*W+m*X+x*k,a[2]=M*U+E*se+y*ee+S*J,a[6]=M*N+E*O+y*Z+S*ae,a[10]=M*w+E*q+y*K+S*ce,a[14]=M*C+E*W+y*X+S*k,a[3]=R*U+L*se+P*ee+D*J,a[7]=R*N+L*O+P*Z+D*ae,a[11]=R*w+L*q+P*K+D*ce,a[15]=R*C+L*W+P*X+D*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],c=e[1],f=e[5],d=e[9],h=e[13],g=e[2],_=e[6],m=e[10],x=e[14],M=e[3],E=e[7],y=e[11],S=e[15],R=d*x-h*m,L=f*x-h*_,P=f*m-d*_,D=c*x-h*g,U=c*m-d*g,N=c*_-f*g;return t*(E*R-y*L+S*P)-i*(M*R-y*D+S*U)+s*(M*L-E*D+S*N)-a*(M*P-E*U+y*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],c=e[4],f=e[5],d=e[6],h=e[7],g=e[8],_=e[9],m=e[10],x=e[11],M=e[12],E=e[13],y=e[14],S=e[15],R=t*f-i*c,L=t*d-s*c,P=t*h-a*c,D=i*d-s*f,U=i*h-a*f,N=s*h-a*d,w=g*E-_*M,C=g*y-m*M,se=g*S-x*M,O=_*y-m*E,q=_*S-x*E,W=m*S-x*y,ee=R*W-L*q+P*O+D*se-U*C+N*w;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/ee;return e[0]=(f*W-d*q+h*O)*Z,e[1]=(s*q-i*W-a*O)*Z,e[2]=(E*N-y*U+S*D)*Z,e[3]=(m*U-_*N-x*D)*Z,e[4]=(d*se-c*W-h*C)*Z,e[5]=(t*W-s*se+a*C)*Z,e[6]=(y*P-M*N-S*L)*Z,e[7]=(g*N-m*P+x*L)*Z,e[8]=(c*q-f*se+h*w)*Z,e[9]=(i*se-t*q-a*w)*Z,e[10]=(M*U-E*P+S*R)*Z,e[11]=(_*P-g*U-x*R)*Z,e[12]=(f*C-c*O-d*w)*Z,e[13]=(t*O-i*C+s*w)*Z,e[14]=(E*L-M*D-y*R)*Z,e[15]=(g*D-_*L+m*R)*Z,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,c=e.x,f=e.y,d=e.z,h=a*c,g=a*f;return this.set(h*c+i,h*f-s*d,h*d+s*f,0,h*f+s*d,g*f+i,g*d-s*c,0,h*d-s*f,g*d+s*c,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,c){return this.set(1,i,a,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,c=t._y,f=t._z,d=t._w,h=a+a,g=c+c,_=f+f,m=a*h,x=a*g,M=a*_,E=c*g,y=c*_,S=f*_,R=d*h,L=d*g,P=d*_,D=i.x,U=i.y,N=i.z;return s[0]=(1-(E+S))*D,s[1]=(x+P)*D,s[2]=(M-L)*D,s[3]=0,s[4]=(x-P)*U,s[5]=(1-(m+S))*U,s[6]=(y+R)*U,s[7]=0,s[8]=(M+L)*N,s[9]=(y-R)*N,s[10]=(1-(m+E))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const a=this.determinant();if(a===0)return i.set(1,1,1),t.identity(),this;let c=$s.set(s[0],s[1],s[2]).length();const f=$s.set(s[4],s[5],s[6]).length(),d=$s.set(s[8],s[9],s[10]).length();a<0&&(c=-c),yi.copy(this);const h=1/c,g=1/f,_=1/d;return yi.elements[0]*=h,yi.elements[1]*=h,yi.elements[2]*=h,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=_,yi.elements[9]*=_,yi.elements[10]*=_,t.setFromRotationMatrix(yi),i.x=c,i.y=f,i.z=d,this}makePerspective(e,t,i,s,a,c,f=Bi,d=!1){const h=this.elements,g=2*a/(t-e),_=2*a/(i-s),m=(t+e)/(t-e),x=(i+s)/(i-s);let M,E;if(d)M=a/(c-a),E=c*a/(c-a);else if(f===Bi)M=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(f===Pa)M=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=m,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,a,c,f=Bi,d=!1){const h=this.elements,g=2/(t-e),_=2/(i-s),m=-(t+e)/(t-e),x=-(i+s)/(i-s);let M,E;if(d)M=1/(c-a),E=c/(c-a);else if(f===Bi)M=-2/(c-a),E=-(c+a)/(c-a);else if(f===Pa)M=-1/(c-a),E=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=g,h[4]=0,h[8]=0,h[12]=m,h[1]=0,h[5]=_,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const $s=new $,yi=new gt,wy=new $(0,0,0),Ay=new $(1,1,1),zr=new $,Gl=new $,$n=new $,gg=new gt,_g=new _r;class Xi{constructor(e=0,t=0,i=0,s=Xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],c=s[4],f=s[8],d=s[1],h=s[5],g=s[9],_=s[2],m=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(m,h),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,h),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,h),this._y=Math.atan2(f,a)):(this._x=Math.atan2(-g,x),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _g.setFromEuler(this),this.setFromQuaternion(_g,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xi.DEFAULT_ORDER="XYZ";class $0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let by=0;const vg=new $,Zs=new _r,sr=new gt,Wl=new $,ua=new $,Ry=new $,Cy=new _r,xg=new $(1,0,0),yg=new $(0,1,0),Sg=new $(0,0,1),Mg={type:"added"},Py={type:"removed"},Js={type:"childadded",child:null},Rf={type:"childremoved",child:null};class Kt extends Eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new $,t=new Xi,i=new _r,s=new $(1,1,1);function a(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new pt}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(e,t){return Zs.setFromAxisAngle(e,t),this.quaternion.premultiply(Zs),this}rotateX(e){return this.rotateOnAxis(xg,e)}rotateY(e){return this.rotateOnAxis(yg,e)}rotateZ(e){return this.rotateOnAxis(Sg,e)}translateOnAxis(e,t){return vg.copy(e).applyQuaternion(this.quaternion),this.position.add(vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xg,e)}translateY(e){return this.translateOnAxis(yg,e)}translateZ(e){return this.translateOnAxis(Sg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wl.copy(e):Wl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(ua,Wl,this.up):sr.lookAt(Wl,ua,this.up),this.quaternion.setFromRotationMatrix(sr),s&&(sr.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(sr),this.quaternion.premultiply(Zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mg),Js.child=e,this.dispatchEvent(Js),Js.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Py),Rf.child=e,this.dispatchEvent(Rf),Rf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mg),Js.child=e,this.dispatchEvent(Js),Js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,Ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,Cy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*s,a[13]+=i-a[1]*t-a[5]*i-a[9]*s,a[14]+=s-a[2]*t-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,c=s.length;a<c;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,g=d.length;h<g;h++){const _=d[h];a(e.shapes,_)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(a(e.materials,this.material[d]));s.material=f}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];s.animations.push(a(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),g=c(e.images),_=c(e.shapes),m=c(e.skeletons),x=c(e.animations),M=c(e.nodes);f.length>0&&(i.geometries=f),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),g.length>0&&(i.images=g),_.length>0&&(i.shapes=_),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),M.length>0&&(i.nodes=M)}return i.object=s,i;function c(f){const d=[];for(const h in f){const g=f[h];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new $(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zi extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ly={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,i),S=this._getHandJoint(h,E);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=h.joints["index-finger-tip"],_=h.joints["thumb-tip"],m=g.position.distanceTo(_.position),x=.02,M=.005;h.inputState.pinching&&m>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&m<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));f!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Ly)))}return f!==null&&(f.visible=s!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function Pf(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class ut{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=i,Et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Et.workingColorSpace){if(e=ph(e,1),t=yt(t,0,1),i=yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,c=2*i-a;this.r=Pf(c,a,e+1/3),this.g=Pf(c,a,e),this.b=Pf(c,a,e-1/3)}return Et.colorSpaceToWorking(this,s),this}setStyle(e,t=gn){function i(a){a!==void 0&&parseFloat(a)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gn){const i=Z0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gn){return Et.workingToColorSpace(Tn.copy(this),e),Math.round(yt(Tn.r*255,0,255))*65536+Math.round(yt(Tn.g*255,0,255))*256+Math.round(yt(Tn.b*255,0,255))}getHexString(e=gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(Tn.copy(this),t);const i=Tn.r,s=Tn.g,a=Tn.b,c=Math.max(i,s,a),f=Math.min(i,s,a);let d,h;const g=(f+c)/2;if(f===c)d=0,h=0;else{const _=c-f;switch(h=g<=.5?_/(c+f):_/(2-c-f),c){case i:d=(s-a)/_+(s<a?6:0);break;case s:d=(a-i)/_+2;break;case a:d=(i-s)/_+4;break}d/=6}return e.h=d,e.s=h,e.l=g,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=gn){Et.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,s=Tn.b;return e!==gn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Xl);const i=Ta(Vr.h,Xl.h,t),s=Ta(Vr.s,Xl.s,t),a=Ta(Vr.l,Xl.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new ut;ut.NAMES=Z0;class Iy extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Si=new $,or=new $,Lf=new $,ar=new $,Qs=new $,eo=new $,Eg=new $,If=new $,Nf=new $,Df=new $,Uf=new Wt,Ff=new Wt,Of=new Wt;class wi{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Si.subVectors(e,t),s.cross(Si);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){Si.subVectors(s,t),or.subVectors(i,t),Lf.subVectors(e,t);const c=Si.dot(Si),f=Si.dot(or),d=Si.dot(Lf),h=or.dot(or),g=or.dot(Lf),_=c*h-f*f;if(_===0)return a.set(0,0,0),null;const m=1/_,x=(h*d-f*g)*m,M=(c*g-f*d)*m;return a.set(1-x-M,M,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getInterpolation(e,t,i,s,a,c,f,d){return this.getBarycoord(e,t,i,s,ar)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,ar.x),d.addScaledVector(c,ar.y),d.addScaledVector(f,ar.z),d)}static getInterpolatedAttribute(e,t,i,s,a,c){return Uf.setScalar(0),Ff.setScalar(0),Of.setScalar(0),Uf.fromBufferAttribute(e,t),Ff.fromBufferAttribute(e,i),Of.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Uf,a.x),c.addScaledVector(Ff,a.y),c.addScaledVector(Of,a.z),c}static isFrontFacing(e,t,i,s){return Si.subVectors(i,t),or.subVectors(e,t),Si.cross(or).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Si.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Si.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return wi.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let c,f;Qs.subVectors(s,i),eo.subVectors(a,i),If.subVectors(e,i);const d=Qs.dot(If),h=eo.dot(If);if(d<=0&&h<=0)return t.copy(i);Nf.subVectors(e,s);const g=Qs.dot(Nf),_=eo.dot(Nf);if(g>=0&&_<=g)return t.copy(s);const m=d*_-g*h;if(m<=0&&d>=0&&g<=0)return c=d/(d-g),t.copy(i).addScaledVector(Qs,c);Df.subVectors(e,a);const x=Qs.dot(Df),M=eo.dot(Df);if(M>=0&&x<=M)return t.copy(a);const E=x*h-d*M;if(E<=0&&h>=0&&M<=0)return f=h/(h-M),t.copy(i).addScaledVector(eo,f);const y=g*M-x*_;if(y<=0&&_-g>=0&&x-M>=0)return Eg.subVectors(a,s),f=(_-g)/(_-g+(x-M)),t.copy(s).addScaledVector(Eg,f);const S=1/(y+E+m);return c=E*S,f=m*S,t.copy(i).addScaledVector(Qs,c).addScaledVector(eo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vr{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=a.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Mi):Mi.fromBufferAttribute(a,c),Mi.applyMatrix4(e.matrixWorld),this.expandByPoint(Mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),jl.copy(i.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}const s=e.children;for(let a=0,c=s.length;a<c;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mi),Mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),ql.subVectors(this.max,fa),to.subVectors(e.a,fa),no.subVectors(e.b,fa),io.subVectors(e.c,fa),Hr.subVectors(no,to),Gr.subVectors(io,no),fs.subVectors(to,io);let t=[0,-Hr.z,Hr.y,0,-Gr.z,Gr.y,0,-fs.z,fs.y,Hr.z,0,-Hr.x,Gr.z,0,-Gr.x,fs.z,0,-fs.x,-Hr.y,Hr.x,0,-Gr.y,Gr.x,0,-fs.y,fs.x,0];return!kf(t,to,no,io,ql)||(t=[1,0,0,0,1,0,0,0,1],!kf(t,to,no,io,ql))?!1:(Yl.crossVectors(Hr,Gr),t=[Yl.x,Yl.y,Yl.z],kf(t,to,no,io,ql))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const lr=[new $,new $,new $,new $,new $,new $,new $,new $],Mi=new $,jl=new vr,to=new $,no=new $,io=new $,Hr=new $,Gr=new $,fs=new $,fa=new $,ql=new $,Yl=new $,ds=new $;function kf(o,e,t,i,s){for(let a=0,c=o.length-3;a<=c;a+=3){ds.fromArray(o,a);const f=s.x*Math.abs(ds.x)+s.y*Math.abs(ds.y)+s.z*Math.abs(ds.z),d=e.dot(ds),h=t.dot(ds),g=i.dot(ds);if(Math.max(-Math.max(d,h,g),Math.min(d,h,g))>f)return!1}return!0}const rn=new $,Kl=new Tt;let Ny=0;class Nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ny++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kd,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kl.fromBufferAttribute(this,t),Kl.applyMatrix3(e),this.setXY(t,Kl.x,Kl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kd&&(e.usage=this.usage),e}}class J0 extends Nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Q0 extends Nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Wn extends Nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Dy=new vr,da=new $,Bf=new $;class qi{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Dy.setFromPoints(e).getCenter(i);let s=0;for(let a=0,c=e.length;a<c;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);const t=da.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(da,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Bf)),this.expandByPoint(da.copy(e.center).sub(Bf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Uy=0;const ci=new gt,zf=new Kt,ro=new $,Zn=new vr,ha=new vr,mn=new $;class Qn extends Eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uy++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zx(e)?Q0:J0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new pt().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ci.makeRotationFromQuaternion(e),this.applyMatrix4(ci),this}rotateX(e){return ci.makeRotationX(e),this.applyMatrix4(ci),this}rotateY(e){return ci.makeRotationY(e),this.applyMatrix4(ci),this}rotateZ(e){return ci.makeRotationZ(e),this.applyMatrix4(ci),this}translate(e,t,i){return ci.makeTranslation(e,t,i),this.applyMatrix4(ci),this}scale(e,t,i){return ci.makeScale(e,t,i),this.applyMatrix4(ci),this}lookAt(e){return zf.lookAt(e),zf.updateMatrix(),this.applyMatrix4(zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Wn(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];Zn.setFromBufferAttribute(a),this.morphTargetsRelative?(mn.addVectors(this.boundingBox.min,Zn.min),this.boundingBox.expandByPoint(mn),mn.addVectors(this.boundingBox.max,Zn.max),this.boundingBox.expandByPoint(mn)):(this.boundingBox.expandByPoint(Zn.min),this.boundingBox.expandByPoint(Zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(Zn.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const f=t[a];ha.setFromBufferAttribute(f),this.morphTargetsRelative?(mn.addVectors(Zn.min,ha.min),Zn.expandByPoint(mn),mn.addVectors(Zn.max,ha.max),Zn.expandByPoint(mn)):(Zn.expandByPoint(ha.min),Zn.expandByPoint(ha.max))}Zn.getCenter(i);let s=0;for(let a=0,c=e.count;a<c;a++)mn.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(mn));if(t)for(let a=0,c=t.length;a<c;a++){const f=t[a],d=this.morphTargetsRelative;for(let h=0,g=f.count;h<g;h++)mn.fromBufferAttribute(f,h),d&&(ro.fromBufferAttribute(e,h),mn.add(ro)),s=Math.max(s,i.distanceToSquared(mn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let w=0;w<i.count;w++)f[w]=new $,d[w]=new $;const h=new $,g=new $,_=new $,m=new Tt,x=new Tt,M=new Tt,E=new $,y=new $;function S(w,C,se){h.fromBufferAttribute(i,w),g.fromBufferAttribute(i,C),_.fromBufferAttribute(i,se),m.fromBufferAttribute(a,w),x.fromBufferAttribute(a,C),M.fromBufferAttribute(a,se),g.sub(h),_.sub(h),x.sub(m),M.sub(m);const O=1/(x.x*M.y-M.x*x.y);isFinite(O)&&(E.copy(g).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(O),y.copy(_).multiplyScalar(x.x).addScaledVector(g,-M.x).multiplyScalar(O),f[w].add(E),f[C].add(E),f[se].add(E),d[w].add(y),d[C].add(y),d[se].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,C=R.length;w<C;++w){const se=R[w],O=se.start,q=se.count;for(let W=O,ee=O+q;W<ee;W+=3)S(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const L=new $,P=new $,D=new $,U=new $;function N(w){D.fromBufferAttribute(s,w),U.copy(D);const C=f[w];L.copy(C),L.sub(D.multiplyScalar(D.dot(C))).normalize(),P.crossVectors(U,C);const O=P.dot(d[w])<0?-1:1;c.setXYZW(w,L.x,L.y,L.z,O)}for(let w=0,C=R.length;w<C;++w){const se=R[w],O=se.start,q=se.count;for(let W=O,ee=O+q;W<ee;W+=3)N(e.getX(W+0)),N(e.getX(W+1)),N(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);const s=new $,a=new $,c=new $,f=new $,d=new $,h=new $,g=new $,_=new $;if(e)for(let m=0,x=e.count;m<x;m+=3){const M=e.getX(m+0),E=e.getX(m+1),y=e.getX(m+2);s.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,y),g.subVectors(c,a),_.subVectors(s,a),g.cross(_),f.fromBufferAttribute(i,M),d.fromBufferAttribute(i,E),h.fromBufferAttribute(i,y),f.add(g),d.add(g),h.add(g),i.setXYZ(M,f.x,f.y,f.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(y,h.x,h.y,h.z)}else for(let m=0,x=t.count;m<x;m+=3)s.fromBufferAttribute(t,m+0),a.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),g.subVectors(c,a),_.subVectors(s,a),g.cross(_),i.setXYZ(m+0,g.x,g.y,g.z),i.setXYZ(m+1,g.x,g.y,g.z),i.setXYZ(m+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)mn.fromBufferAttribute(e,t),mn.normalize(),e.setXYZ(t,mn.x,mn.y,mn.z)}toNonIndexed(){function e(f,d){const h=f.array,g=f.itemSize,_=f.normalized,m=new h.constructor(d.length*g);let x=0,M=0;for(let E=0,y=d.length;E<y;E++){f.isInterleavedBufferAttribute?x=d[E]*f.data.stride+f.offset:x=d[E]*g;for(let S=0;S<g;S++)m[M++]=h[x++]}return new Nn(m,g,_)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qn,i=this.index.array,s=this.attributes;for(const f in s){const d=s[f],h=e(d,i);t.setAttribute(f,h)}const a=this.morphAttributes;for(const f in a){const d=[],h=a[f];for(let g=0,_=h.length;g<_;g++){const m=h[g],x=e(m,i);d.push(x)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],g=[];for(let _=0,m=h.length;_<m;_++){const x=h[_];g.push(x.toJSON(e.data))}g.length>0&&(s[d]=g,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const g=s[h];this.setAttribute(h,g.clone(t))}const a=e.morphAttributes;for(const h in a){const g=[],_=a[h];for(let m=0,x=_.length;m<x;m++)g.push(_[m].clone(t));this.morphAttributes[h]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,g=c.length;h<g;h++){const _=c[h];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fy{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kd,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,a=this.stride;s<a;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pn=new $;class gh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyMatrix4(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.applyNormalMatrix(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pn.fromBufferAttribute(this,t),Pn.transformDirection(e),this.setXYZ(t,Pn.x,Pn.y,Pn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),s=Ft(s,this.array),a=Ft(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=a,this}clone(e){if(e===void 0){bc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return new Nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new gh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){bc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[s+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let Oy=0;class Gi extends Eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=uo,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=ld,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ys,this.stencilZFail=Ys,this.stencilZPass=Ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(i.blending=this.blending),this.side!==pr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ad&&(i.blendSrc=this.blendSrc),this.blendDst!==ld&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ys&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ys&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ys&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const c=[];for(const f in a){const d=a[f];delete d.metadata,c.push(d)}return c}if(t){const a=s(e.textures),c=s(e.images);a.length>0&&(i.textures=a),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const cr=new $,Vf=new $,$l=new $,Wr=new $,Hf=new $,Zl=new $,Gf=new $;class Ic{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Vf.copy(e).add(t).multiplyScalar(.5),$l.copy(t).sub(e).normalize(),Wr.copy(this.origin).sub(Vf);const a=e.distanceTo(t)*.5,c=-this.direction.dot($l),f=Wr.dot(this.direction),d=-Wr.dot($l),h=Wr.lengthSq(),g=Math.abs(1-c*c);let _,m,x,M;if(g>0)if(_=c*d-f,m=c*f-d,M=a*g,_>=0)if(m>=-M)if(m<=M){const E=1/g;_*=E,m*=E,x=_*(_+c*m+2*f)+m*(c*_+m+2*d)+h}else m=a,_=Math.max(0,-(c*m+f)),x=-_*_+m*(m+2*d)+h;else m=-a,_=Math.max(0,-(c*m+f)),x=-_*_+m*(m+2*d)+h;else m<=-M?(_=Math.max(0,-(-c*a+f)),m=_>0?-a:Math.min(Math.max(-a,-d),a),x=-_*_+m*(m+2*d)+h):m<=M?(_=0,m=Math.min(Math.max(-a,-d),a),x=m*(m+2*d)+h):(_=Math.max(0,-(c*a+f)),m=_>0?a:Math.min(Math.max(-a,-d),a),x=-_*_+m*(m+2*d)+h);else m=c>0?-a:a,_=Math.max(0,-(c*m+f)),x=-_*_+m*(m+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,_),s&&s.copy(Vf).addScaledVector($l,m),x}intersectSphere(e,t){cr.subVectors(e.center,this.origin);const i=cr.dot(this.direction),s=cr.dot(cr)-i*i,a=e.radius*e.radius;if(s>a)return null;const c=Math.sqrt(a-s),f=i-c,d=i+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,c,f,d;const h=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,m=this.origin;return h>=0?(i=(e.min.x-m.x)*h,s=(e.max.x-m.x)*h):(i=(e.max.x-m.x)*h,s=(e.min.x-m.x)*h),g>=0?(a=(e.min.y-m.y)*g,c=(e.max.y-m.y)*g):(a=(e.max.y-m.y)*g,c=(e.min.y-m.y)*g),i>c||a>s||((a>i||isNaN(i))&&(i=a),(c<s||isNaN(s))&&(s=c),_>=0?(f=(e.min.z-m.z)*_,d=(e.max.z-m.z)*_):(f=(e.max.z-m.z)*_,d=(e.min.z-m.z)*_),i>d||f>s)||((f>i||i!==i)&&(i=f),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,i,s,a){Hf.subVectors(t,e),Zl.subVectors(i,e),Gf.crossVectors(Hf,Zl);let c=this.direction.dot(Gf),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Wr.subVectors(this.origin,e);const d=f*this.direction.dot(Zl.crossVectors(Wr,Zl));if(d<0)return null;const h=f*this.direction.dot(Hf.cross(Wr));if(h<0||d+h>c)return null;const g=-f*Wr.dot(Gf);return g<0?null:this.at(g/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yr extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=P0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tg=new gt,hs=new Ic,Jl=new qi,wg=new $,Ql=new $,ec=new $,tc=new $,Wf=new $,nc=new $,Ag=new $,ic=new $;class wn extends Kt{constructor(e=new Qn,t=new Yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(a&&f){nc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const g=f[d],_=a[d];g!==0&&(Wf.fromBufferAttribute(_,e),c?nc.addScaledVector(Wf,g):nc.addScaledVector(Wf.sub(t),g))}t.add(nc)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jl.copy(i.boundingSphere),Jl.applyMatrix4(a),hs.copy(e.ray).recast(e.near),!(Jl.containsPoint(hs.origin)===!1&&(hs.intersectSphere(Jl,wg)===null||hs.origin.distanceToSquared(wg)>(e.far-e.near)**2))&&(Tg.copy(a).invert(),hs.copy(e.ray).applyMatrix4(Tg),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,i){let s;const a=this.geometry,c=this.material,f=a.index,d=a.attributes.position,h=a.attributes.uv,g=a.attributes.uv1,_=a.attributes.normal,m=a.groups,x=a.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=m.length;M<E;M++){const y=m[M],S=c[y.materialIndex],R=Math.max(y.start,x.start),L=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let P=R,D=L;P<D;P+=3){const U=f.getX(P),N=f.getX(P+1),w=f.getX(P+2);s=rc(this,S,e,i,h,g,_,U,N,w),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(f.count,x.start+x.count);for(let y=M,S=E;y<S;y+=3){const R=f.getX(y),L=f.getX(y+1),P=f.getX(y+2);s=rc(this,c,e,i,h,g,_,R,L,P),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=m.length;M<E;M++){const y=m[M],S=c[y.materialIndex],R=Math.max(y.start,x.start),L=Math.min(d.count,Math.min(y.start+y.count,x.start+x.count));for(let P=R,D=L;P<D;P+=3){const U=P,N=P+1,w=P+2;s=rc(this,S,e,i,h,g,_,U,N,w),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let y=M,S=E;y<S;y+=3){const R=y,L=y+1,P=y+2;s=rc(this,c,e,i,h,g,_,R,L,P),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function ky(o,e,t,i,s,a,c,f){let d;if(e.side===Gn?d=i.intersectTriangle(c,a,s,!0,f):d=i.intersectTriangle(s,a,c,e.side===pr,f),d===null)return null;ic.copy(f),ic.applyMatrix4(o.matrixWorld);const h=t.ray.origin.distanceTo(ic);return h<t.near||h>t.far?null:{distance:h,point:ic.clone(),object:o}}function rc(o,e,t,i,s,a,c,f,d,h){o.getVertexPosition(f,Ql),o.getVertexPosition(d,ec),o.getVertexPosition(h,tc);const g=ky(o,e,t,i,Ql,ec,tc,Ag);if(g){const _=new $;wi.getBarycoord(Ag,Ql,ec,tc,_),s&&(g.uv=wi.getInterpolatedAttribute(s,f,d,h,_,new Tt)),a&&(g.uv1=wi.getInterpolatedAttribute(a,f,d,h,_,new Tt)),c&&(g.normal=wi.getInterpolatedAttribute(c,f,d,h,_,new $),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const m={a:f,b:d,c:h,normal:new $,materialIndex:0};wi.getNormal(Ql,ec,tc,m.normal),g.face=m,g.barycoord=_}return g}const bg=new $,Rg=new Wt,Cg=new Wt,By=new $,Pg=new gt,sc=new $,Xf=new qi,Lg=new gt,jf=new Ic;class zy extends wn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=rg,this.bindMatrix=new gt,this.bindMatrixInverse=new gt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vr),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sc),this.boundingBox.expandByPoint(sc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,sc),this.boundingSphere.expandByPoint(sc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xf.copy(this.boundingSphere),Xf.applyMatrix4(s),e.ray.intersectsSphere(Xf)!==!1&&(Lg.copy(s).invert(),jf.copy(e.ray).applyMatrix4(Lg),!(this.boundingBox!==null&&jf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Wt,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===rg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zx?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Rg.fromBufferAttribute(s.attributes.skinIndex,e),Cg.fromBufferAttribute(s.attributes.skinWeight,e),bg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const c=Cg.getComponent(a);if(c!==0){const f=Rg.getComponent(a);Pg.multiplyMatrices(i.bones[f].matrixWorld,i.boneInverses[f]),t.addScaledVector(By.copy(bg).applyMatrix4(Pg),c)}}return t.applyMatrix4(this.bindMatrixInverse)}}class e_ extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class _h extends cn{constructor(e=null,t=1,i=1,s,a,c,f,d,h=ln,g=ln,_,m){super(null,c,f,d,h,g,s,a,_,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ig=new gt,Vy=new gt;class vh{constructor(e=[],t=[]){this.uuid=Ai(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new gt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new gt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let a=0,c=e.length;a<c;a++){const f=e[a]?e[a].matrixWorld:Vy;Ig.multiplyMatrices(f,t[a]),Ig.toArray(i,a*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new vh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new _h(t,e,e,di,fi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const a=e.bones[i];let c=t[a];c===void 0&&(Qe("Skeleton: No bone found with UUID:",a),c=new e_),this.bones.push(c),this.boneInverses.push(new gt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,a=t.length;s<a;s++){const c=t[s];e.bones.push(c.uuid);const f=i[s];e.boneInverses.push(f.toArray())}return e}}class $d extends Nn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const so=new gt,Ng=new gt,oc=[],Dg=new vr,Hy=new gt,pa=new wn,ma=new qi;class Gy extends wn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $d(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Hy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),Dg.copy(e.boundingBox).applyMatrix4(so),this.boundingBox.union(Dg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,so),ma.copy(e.boundingSphere).applyMatrix4(so),this.boundingSphere.union(ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,a=i.length+1,c=e*a+1;for(let f=0;f<i.length;f++)i[f]=s[c+f]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(pa.geometry=this.geometry,pa.material=this.material,pa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ma.copy(this.boundingSphere),ma.applyMatrix4(i),e.ray.intersectsSphere(ma)!==!1))for(let a=0;a<s;a++){this.getMatrixAt(a,so),Ng.multiplyMatrices(i,so),pa.matrixWorld=Ng,pa.raycast(e,oc);for(let c=0,f=oc.length;c<f;c++){const d=oc[c];d.instanceId=a,d.object=this,t.push(d)}oc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $d(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new _h(new Float32Array(s*this.count),s,this.count,lh,fi));const a=this.morphTexture.source.data.data;let c=0;for(let h=0;h<i.length;h++)c+=i[h];const f=this.geometry.morphTargetsRelative?1:1-c,d=s*e;a[d]=f,a.set(i,d+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const qf=new $,Wy=new $,Xy=new pt;class vs{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=qf.subVectors(i,t).cross(Wy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(qf),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xy.getNormalMatrix(e),s=this.coplanarPoint(qf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new qi,jy=new Tt(.5,.5),ac=new $;class xh{constructor(e=new vs,t=new vs,i=new vs,s=new vs,a=new vs,c=new vs){this.planes=[e,t,i,s,a,c]}set(e,t,i,s,a,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(s),f[4].copy(a),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bi,i=!1){const s=this.planes,a=e.elements,c=a[0],f=a[1],d=a[2],h=a[3],g=a[4],_=a[5],m=a[6],x=a[7],M=a[8],E=a[9],y=a[10],S=a[11],R=a[12],L=a[13],P=a[14],D=a[15];if(s[0].setComponents(h-c,x-g,S-M,D-R).normalize(),s[1].setComponents(h+c,x+g,S+M,D+R).normalize(),s[2].setComponents(h+f,x+_,S+E,D+L).normalize(),s[3].setComponents(h-f,x-_,S-E,D-L).normalize(),i)s[4].setComponents(d,m,y,P).normalize(),s[5].setComponents(h-d,x-m,S-y,D-P).normalize();else if(s[4].setComponents(h-d,x-m,S-y,D-P).normalize(),t===Bi)s[5].setComponents(h+d,x+m,S+y,D+P).normalize();else if(t===Pa)s[5].setComponents(d,m,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=jy.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(ac.x=s.normal.x>0?e.max.x:e.min.x,ac.y=s.normal.y>0?e.max.y:e.min.y,ac.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class t_ extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Cc=new $,Pc=new $,Ug=new gt,ga=new Ic,lc=new qi,Yf=new $,Fg=new $;class yh extends Kt{constructor(e=new Qn,t=new t_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Cc.fromBufferAttribute(t,s-1),Pc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Cc.distanceTo(Pc);e.setAttribute("lineDistance",new Wn(i,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),lc.radius+=a,e.ray.intersectsSphere(lc)===!1)return;Ug.copy(s).invert(),ga.copy(e.ray).applyMatrix4(Ug);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const x=Math.max(0,c.start),M=Math.min(g.count,c.start+c.count);for(let E=x,y=M-1;E<y;E+=h){const S=g.getX(E),R=g.getX(E+1),L=cc(this,e,ga,d,S,R,E);L&&t.push(L)}if(this.isLineLoop){const E=g.getX(M-1),y=g.getX(x),S=cc(this,e,ga,d,E,y,M-1);S&&t.push(S)}}else{const x=Math.max(0,c.start),M=Math.min(m.count,c.start+c.count);for(let E=x,y=M-1;E<y;E+=h){const S=cc(this,e,ga,d,E,E+1,E);S&&t.push(S)}if(this.isLineLoop){const E=cc(this,e,ga,d,M-1,x,M-1);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function cc(o,e,t,i,s,a,c){const f=o.geometry.attributes.position;if(Cc.fromBufferAttribute(f,s),Pc.fromBufferAttribute(f,a),t.distanceSqToSegment(Cc,Pc,Yf,Fg)>i)return;Yf.applyMatrix4(o.matrixWorld);const h=e.ray.origin.distanceTo(Yf);if(!(h<e.near||h>e.far))return{distance:h,point:Fg.clone().applyMatrix4(o.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:o}}const Og=new $,kg=new $;class qy extends yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)Og.fromBufferAttribute(t,s),kg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Og.distanceTo(kg);e.setAttribute("lineDistance",new Wn(i,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yy extends yh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class n_ extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bg=new gt,Zd=new Ic,uc=new qi,fc=new $;class Ky extends Kt{constructor(e=new Qn,t=new n_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(s),uc.radius+=a,e.ray.intersectsSphere(uc)===!1)return;Bg.copy(s).invert(),Zd.copy(e.ray).applyMatrix4(Bg);const f=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=i.index,_=i.attributes.position;if(h!==null){const m=Math.max(0,c.start),x=Math.min(h.count,c.start+c.count);for(let M=m,E=x;M<E;M++){const y=h.getX(M);fc.fromBufferAttribute(_,y),zg(fc,y,d,s,e,t,this)}}else{const m=Math.max(0,c.start),x=Math.min(_.count,c.start+c.count);for(let M=m,E=x;M<E;M++)fc.fromBufferAttribute(_,M),zg(fc,M,d,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=s.length;a<c;a++){const f=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=a}}}}}function zg(o,e,t,i,s,a,c){const f=Zd.distanceSqToPoint(o);if(f<t){const d=new $;Zd.closestPointToPoint(o,d),d.applyMatrix4(i);const h=s.ray.origin.distanceTo(d);if(h<s.near||h>s.far)return;a.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class i_ extends cn{constructor(e=[],t=Ms,i,s,a,c,f,d,h,g){super(e,t,i,s,a,c,f,d,h,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $y extends cn{constructor(e,t,i,s,a,c,f,d,h){super(e,t,i,s,a,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ia extends cn{constructor(e,t,i=Wi,s,a,c,f=ln,d=ln,h,g=gr,_=1){if(g!==gr&&g!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:_};super(m,s,a,c,f,d,g,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zy extends Ia{constructor(e,t=Wi,i=Ms,s,a,c=ln,f=ln,d,h=gr){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,i,s,a,c,f,d,h),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class r_ extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class To extends Qn{constructor(e=1,t=1,i=1,s=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:c};const f=this;s=Math.floor(s),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],g=[],_=[];let m=0,x=0;M("z","y","x",-1,-1,i,t,e,c,a,0),M("z","y","x",1,-1,i,t,-e,c,a,1),M("x","z","y",1,1,e,i,t,s,c,2),M("x","z","y",1,-1,e,i,-t,s,c,3),M("x","y","z",1,-1,e,t,i,s,a,4),M("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(d),this.setAttribute("position",new Wn(h,3)),this.setAttribute("normal",new Wn(g,3)),this.setAttribute("uv",new Wn(_,2));function M(E,y,S,R,L,P,D,U,N,w,C){const se=P/N,O=D/w,q=P/2,W=D/2,ee=U/2,Z=N+1,K=w+1;let X=0,J=0;const ae=new $;for(let ce=0;ce<K;ce++){const k=ce*O-W;for(let B=0;B<Z;B++){const Ee=B*se-q;ae[E]=Ee*R,ae[y]=k*L,ae[S]=ee,h.push(ae.x,ae.y,ae.z),ae[E]=0,ae[y]=0,ae[S]=U>0?1:-1,g.push(ae.x,ae.y,ae.z),_.push(B/N),_.push(1-ce/w),X+=1}}for(let ce=0;ce<w;ce++)for(let k=0;k<N;k++){const B=m+k+Z*ce,Ee=m+k+Z*(ce+1),Re=m+(k+1)+Z*(ce+1),Fe=m+(k+1)+Z*ce;d.push(B,Ee,Fe),d.push(Ee,Re,Fe),J+=6}f.addGroup(x,J,C),x+=J,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new To(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Sh extends Qn{constructor(e=1,t=1,i=1,s=32,a=1,c=!1,f=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:c,thetaStart:f,thetaLength:d};const h=this;s=Math.floor(s),a=Math.floor(a);const g=[],_=[],m=[],x=[];let M=0;const E=[],y=i/2;let S=0;R(),c===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(g),this.setAttribute("position",new Wn(_,3)),this.setAttribute("normal",new Wn(m,3)),this.setAttribute("uv",new Wn(x,2));function R(){const P=new $,D=new $;let U=0;const N=(t-e)/i;for(let w=0;w<=a;w++){const C=[],se=w/a,O=se*(t-e)+e;for(let q=0;q<=s;q++){const W=q/s,ee=W*d+f,Z=Math.sin(ee),K=Math.cos(ee);D.x=O*Z,D.y=-se*i+y,D.z=O*K,_.push(D.x,D.y,D.z),P.set(Z,N,K).normalize(),m.push(P.x,P.y,P.z),x.push(W,1-se),C.push(M++)}E.push(C)}for(let w=0;w<s;w++)for(let C=0;C<a;C++){const se=E[C][w],O=E[C+1][w],q=E[C+1][w+1],W=E[C][w+1];(e>0||C!==0)&&(g.push(se,O,W),U+=3),(t>0||C!==a-1)&&(g.push(O,q,W),U+=3)}h.addGroup(S,U,0),S+=U}function L(P){const D=M,U=new Tt,N=new $;let w=0;const C=P===!0?e:t,se=P===!0?1:-1;for(let q=1;q<=s;q++)_.push(0,y*se,0),m.push(0,se,0),x.push(.5,.5),M++;const O=M;for(let q=0;q<=s;q++){const ee=q/s*d+f,Z=Math.cos(ee),K=Math.sin(ee);N.x=C*K,N.y=y*se,N.z=C*Z,_.push(N.x,N.y,N.z),m.push(0,se,0),U.x=Z*.5+.5,U.y=K*.5*se+.5,x.push(U.x,U.y),M++}for(let q=0;q<s;q++){const W=D+q,ee=O+q;P===!0?g.push(ee,ee+1,W):g.push(ee+1,ee,W),w+=3}h.addGroup(S,w,P===!0?1:2),S+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Da extends Qn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,c=t/2,f=Math.floor(i),d=Math.floor(s),h=f+1,g=d+1,_=e/f,m=t/d,x=[],M=[],E=[],y=[];for(let S=0;S<g;S++){const R=S*m-c;for(let L=0;L<h;L++){const P=L*_-a;M.push(P,-R,0),E.push(0,0,1),y.push(L/f),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let R=0;R<f;R++){const L=R+h*S,P=R+h*(S+1),D=R+1+h*(S+1),U=R+1+h*S;x.push(L,P,U),x.push(P,D,U)}this.setIndex(x),this.setAttribute("position",new Wn(M,3)),this.setAttribute("normal",new Wn(E,3)),this.setAttribute("uv",new Wn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.width,e.height,e.widthSegments,e.heightSegments)}}function xo(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const s=o[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Ln(o){const e={};for(let t=0;t<o.length;t++){const i=xo(o[t]);for(const s in i)e[s]=i[s]}return e}function Jy(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function s_(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Qy={clone:xo,merge:Ln};var eS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eS,this.fragmentShader=tS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xo(e.uniforms),this.uniformsGroups=Jy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nS extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Na extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=q0,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yi extends Na{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class iS extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rS extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function dc(o,e){return!o||o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function sS(o){function e(s,a){return o[s]-o[a]}const t=o.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Vg(o,e,t){const i=o.length,s=new o.constructor(i);for(let a=0,c=0;c!==i;++a){const f=t[a]*e;for(let d=0;d!==e;++d)s[c++]=o[f+d]}return s}function o_(o,e,t,i){let s=1,a=o[0];for(;a!==void 0&&a[i]===void 0;)a=o[s++];if(a===void 0)return;let c=a[i];if(c!==void 0)if(Array.isArray(c))do c=a[i],c!==void 0&&(e.push(a.time),t.push(...c)),a=o[s++];while(a!==void 0);else if(c.toArray!==void 0)do c=a[i],c!==void 0&&(e.push(a.time),c.toArray(t,t.length)),a=o[s++];while(a!==void 0);else do c=a[i],c!==void 0&&(e.push(a.time),t.push(c)),a=o[s++];while(a!==void 0)}class wo{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],a=t[i-1];e:{t:{let c;n:{i:if(!(e<s)){for(let f=i+2;;){if(s===void 0){if(e<a)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===f)break;if(a=s,s=t[++i],e<s)break t}c=t.length;break n}if(!(e>=a)){const f=t[1];e<f&&(i=2,a=f);for(let d=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===d)break;if(s=a,a=t[--i-1],e>=a)break t}c=i,i=0;break n}break e}for(;i<c;){const f=i+c>>>1;e<t[f]?c=f:i=f+1}if(s=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,s)}return this.interpolate_(i,a,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s;for(let c=0;c!==s;++c)t[c]=i[a+c];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class oS extends wo{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:og,endingEnd:og}}intervalChanged_(e,t,i){const s=this.parameterPositions;let a=e-2,c=e+1,f=s[a],d=s[c];if(f===void 0)switch(this.getSettings_().endingStart){case ag:a=e,f=2*t-i;break;case lg:a=s.length-2,f=t+s[a]-s[a+1];break;default:a=e,f=i}if(d===void 0)switch(this.getSettings_().endingEnd){case ag:c=e,d=2*i-t;break;case lg:c=1,d=i+s[1]-s[0];break;default:c=e-1,d=t}const h=(i-t)*.5,g=this.valueSize;this._weightPrev=h/(t-f),this._weightNext=h/(d-i),this._offsetPrev=a*g,this._offsetNext=c*g}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=this._offsetPrev,_=this._offsetNext,m=this._weightPrev,x=this._weightNext,M=(i-t)/(s-t),E=M*M,y=E*M,S=-m*y+2*m*E-m*M,R=(1+m)*y+(-1.5-2*m)*E+(-.5+m)*M+1,L=(-1-x)*y+(1.5+x)*E+.5*M,P=x*y-x*E;for(let D=0;D!==f;++D)a[D]=S*c[g+D]+R*c[h+D]+L*c[d+D]+P*c[_+D];return a}}class aS extends wo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=(i-t)/(s-t),_=1-g;for(let m=0;m!==f;++m)a[m]=c[h+m]*_+c[d+m]*g;return a}}class lS extends wo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class cS extends wo{interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,d=e*f,h=d-f,g=this.settings||this.DefaultSettings_,_=g.inTangents,m=g.outTangents;if(!_||!m){const E=(i-t)/(s-t),y=1-E;for(let S=0;S!==f;++S)a[S]=c[h+S]*y+c[d+S]*E;return a}const x=f*2,M=e-1;for(let E=0;E!==f;++E){const y=c[h+E],S=c[d+E],R=M*x+E*2,L=m[R],P=m[R+1],D=e*x+E*2,U=_[D],N=_[D+1];let w=(i-t)/(s-t),C,se,O,q,W;for(let ee=0;ee<8;ee++){C=w*w,se=C*w,O=1-w,q=O*O,W=q*O;const K=W*t+3*q*w*L+3*O*C*U+se*s-i;if(Math.abs(K)<1e-10)break;const X=3*q*(L-t)+6*O*w*(U-L)+3*C*(s-U);if(Math.abs(X)<1e-10)break;w=w-K/X,w=Math.max(0,Math.min(1,w))}a[E]=W*y+3*q*w*P+3*O*C*N+se*S}return a}}class bi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=dc(t,this.TimeBufferType),this.values=dc(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:dc(e.times,Array),values:dc(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new lS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new aS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new oS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new cS(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ra:t=this.InterpolantFactoryMethodDiscrete;break;case Ca:t=this.InterpolantFactoryMethodLinear;break;case Ef:t=this.InterpolantFactoryMethodSmooth;break;case sg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ra;case this.InterpolantFactoryMethodLinear:return Ca;case this.InterpolantFactoryMethodSmooth:return Ef;case this.InterpolantFactoryMethodBezier:return sg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let a=0,c=s-1;for(;a!==s&&i[a]<e;)++a;for(;c!==-1&&i[c]>t;)--c;if(++c,a!==0||c!==s){a>=c&&(c=Math.max(c,1),a=c-1);const f=this.getValueSize();this.times=i.slice(a,c),this.values=this.values.slice(a*f,c*f)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,a=i.length;a===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let c=null;for(let f=0;f!==a;f++){const d=i[f];if(typeof d=="number"&&isNaN(d)){ot("KeyframeTrack: Time is not a valid number.",this,f,d),e=!1;break}if(c!==null&&c>d){ot("KeyframeTrack: Out of order keys.",this,f,d,c),e=!1;break}c=d}if(s!==void 0&&Jx(s))for(let f=0,d=s.length;f!==d;++f){const h=s[f];if(isNaN(h)){ot("KeyframeTrack: Value is not a valid number.",this,f,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ef,a=e.length-1;let c=1;for(let f=1;f<a;++f){let d=!1;const h=e[f],g=e[f+1];if(h!==g&&(f!==1||h!==e[0]))if(s)d=!0;else{const _=f*i,m=_-i,x=_+i;for(let M=0;M!==i;++M){const E=t[_+M];if(E!==t[m+M]||E!==t[x+M]){d=!0;break}}}if(d){if(f!==c){e[c]=e[f];const _=f*i,m=c*i;for(let x=0;x!==i;++x)t[m+x]=t[_+x]}++c}}if(a>0){e[c]=e[a];for(let f=a*i,d=c*i,h=0;h!==i;++h)t[d+h]=t[f+h];++c}return c!==e.length?(this.times=e.slice(0,c),this.values=t.slice(0,c*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=Ca;class Ao extends bi{constructor(e,t,i){super(e,t,i)}}Ao.prototype.ValueTypeName="bool";Ao.prototype.ValueBufferType=Array;Ao.prototype.DefaultInterpolation=Ra;Ao.prototype.InterpolantFactoryMethodLinear=void 0;Ao.prototype.InterpolantFactoryMethodSmooth=void 0;class a_ extends bi{constructor(e,t,i,s){super(e,t,i,s)}}a_.prototype.ValueTypeName="color";class yo extends bi{constructor(e,t,i,s){super(e,t,i,s)}}yo.prototype.ValueTypeName="number";class uS extends wo{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,d=(i-t)/(s-t);let h=e*f;for(let g=h+f;h!==g;h+=4)_r.slerpFlat(a,0,c,h-f,c,h,d);return a}}class So extends bi{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new uS(this.times,this.values,this.getValueSize(),e)}}So.prototype.ValueTypeName="quaternion";So.prototype.InterpolantFactoryMethodSmooth=void 0;class bo extends bi{constructor(e,t,i){super(e,t,i)}}bo.prototype.ValueTypeName="string";bo.prototype.ValueBufferType=Array;bo.prototype.DefaultInterpolation=Ra;bo.prototype.InterpolantFactoryMethodLinear=void 0;bo.prototype.InterpolantFactoryMethodSmooth=void 0;class Mo extends bi{constructor(e,t,i,s){super(e,t,i,s)}}Mo.prototype.ValueTypeName="vector";class fS{constructor(e="",t=-1,i=[],s=Vx){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Ai(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let c=0,f=i.length;c!==f;++c)t.push(hS(i[c]).scale(s));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,c=i.length;a!==c;++a)t.push(bi.toJSON(i[a]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const a=t.length,c=[];for(let f=0;f<a;f++){let d=[],h=[];d.push((f+a-1)%a,f,(f+1)%a),h.push(0,1,0);const g=sS(d);d=Vg(d,1,g),h=Vg(h,1,g),!s&&d[0]===0&&(d.push(a),h.push(h[0])),c.push(new yo(".morphTargetInfluences["+t[f].name+"]",d,h).scale(1/i))}return new this(e,-1,c)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},a=/^([\w-]*?)([\d]+)$/;for(let f=0,d=e.length;f<d;f++){const h=e[f],g=h.name.match(a);if(g&&g.length>1){const _=g[1];let m=s[_];m||(s[_]=m=[]),m.push(h)}}const c=[];for(const f in s)c.push(this.CreateFromMorphTargetSequence(f,s[f],t,i));return c}static parseAnimation(e,t){if(Qe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return ot("AnimationClip: No animation in JSONLoader data."),null;const i=function(_,m,x,M,E){if(x.length!==0){const y=[],S=[];o_(x,y,S,M),y.length!==0&&E.push(new _(m,y,S))}},s=[],a=e.name||"default",c=e.fps||30,f=e.blendMode;let d=e.length||-1;const h=e.hierarchy||[];for(let _=0;_<h.length;_++){const m=h[_].keys;if(!(!m||m.length===0))if(m[0].morphTargets){const x={};let M;for(M=0;M<m.length;M++)if(m[M].morphTargets)for(let E=0;E<m[M].morphTargets.length;E++)x[m[M].morphTargets[E]]=-1;for(const E in x){const y=[],S=[];for(let R=0;R!==m[M].morphTargets.length;++R){const L=m[M];y.push(L.time),S.push(L.morphTarget===E?1:0)}s.push(new yo(".morphTargetInfluence["+E+"]",y,S))}d=x.length*c}else{const x=".bones["+t[_].name+"]";i(Mo,x+".position",m,"pos",s),i(So,x+".quaternion",m,"rot",s),i(Mo,x+".scale",m,"scl",s)}}return s.length===0?null:new this(a,d,s,f)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function dS(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yo;case"vector":case"vector2":case"vector3":case"vector4":return Mo;case"color":return a_;case"quaternion":return So;case"bool":case"boolean":return Ao;case"string":return bo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function hS(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dS(o.type);if(o.times===void 0){const t=[],i=[];o_(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const fr={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(Hg(o)||(this.files[o]=e))},get:function(o){if(this.enabled!==!1&&!Hg(o))return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};function Hg(o){try{const e=o.slice(o.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class pS{constructor(e,t,i){const s=this;let a=!1,c=0,f=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(g){f++,a===!1&&s.onStart!==void 0&&s.onStart(g,c,f),a=!0},this.itemEnd=function(g){c++,s.onProgress!==void 0&&s.onProgress(g,c,f),c===f&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(g){s.onError!==void 0&&s.onError(g)},this.resolveURL=function(g){return d?d(g):g},this.setURLModifier=function(g){return d=g,this},this.addHandler=function(g,_){return h.push(g,_),this},this.removeHandler=function(g){const _=h.indexOf(g);return _!==-1&&h.splice(_,2),this},this.getHandler=function(g){for(let _=0,m=h.length;_<m;_+=2){const x=h[_],M=h[_+1];if(x.global&&(x.lastIndex=0),x.test(g))return M}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const mS=new pS;class Ro{constructor(e){this.manager=e!==void 0?e:mS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ro.DEFAULT_MATERIAL_NAME="__DEFAULT";const ur={};class gS extends Error{constructor(e,t){super(e),this.response=t}}class l_ extends Ro{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=fr.get(`file:${e}`);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(ur[e]!==void 0){ur[e].push({onLoad:t,onProgress:i,onError:s});return}ur[e]=[],ur[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),f=this.mimeType,d=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const g=ur[e],_=h.body.getReader(),m=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=m?parseInt(m):0,M=x!==0;let E=0;const y=new ReadableStream({start(S){R();function R(){_.read().then(({done:L,value:P})=>{if(L)S.close();else{E+=P.byteLength;const D=new ProgressEvent("progress",{lengthComputable:M,loaded:E,total:x});for(let U=0,N=g.length;U<N;U++){const w=g[U];w.onProgress&&w.onProgress(D)}S.enqueue(P),R()}},L=>{S.error(L)})}}});return new Response(y)}else throw new gS(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(g=>new DOMParser().parseFromString(g,f));case"json":return h.json();default:if(f==="")return h.text();{const _=/charset="?([^;"\s]*)"?/i.exec(f),m=_&&_[1]?_[1].toLowerCase():void 0,x=new TextDecoder(m);return h.arrayBuffer().then(M=>x.decode(M))}}}).then(h=>{fr.add(`file:${e}`,h);const g=ur[e];delete ur[e];for(let _=0,m=g.length;_<m;_++){const x=g[_];x.onLoad&&x.onLoad(h)}}).catch(h=>{const g=ur[e];if(g===void 0)throw this.manager.itemError(e),h;delete ur[e];for(let _=0,m=g.length;_<m;_++){const x=g[_];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const oo=new WeakMap;class _S extends Ro{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=fr.get(`image:${e}`);if(c!==void 0){if(c.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0);else{let _=oo.get(c);_===void 0&&(_=[],oo.set(c,_)),_.push({onLoad:t,onError:s})}return c}const f=La("img");function d(){g(),t&&t(this);const _=oo.get(this)||[];for(let m=0;m<_.length;m++){const x=_[m];x.onLoad&&x.onLoad(this)}oo.delete(this),a.manager.itemEnd(e)}function h(_){g(),s&&s(_),fr.remove(`image:${e}`);const m=oo.get(this)||[];for(let x=0;x<m.length;x++){const M=m[x];M.onError&&M.onError(_)}oo.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function g(){f.removeEventListener("load",d,!1),f.removeEventListener("error",h,!1)}return f.addEventListener("load",d,!1),f.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),fr.add(`image:${e}`,f),a.manager.itemStart(e),f.src=e,f}}class vS extends Ro{constructor(e){super(e)}load(e,t,i,s){const a=new cn,c=new _S(this.manager);return c.setCrossOrigin(this.crossOrigin),c.setPath(this.path),c.load(e,function(f){a.image=f,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Nc extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Kf=new gt,Gg=new $,Wg=new $;class Mh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new Wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gg),Wg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wg),t.updateMatrixWorld(),Kf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Pa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hc=new $,pc=new _r,Ni=new $;class c_ extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hc,pc,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hc,pc,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(hc,pc,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hc,pc,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new $,Xg=new Tt,jg=new Tt;class In extends c_{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ea*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Ea*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,Xg,jg),t.subVectors(jg,Xg)}setViewOffset(e,t,i,s,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ea*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*s/d,t-=c.offsetY*i/h,s*=c.width/d,i*=c.height/h}const f=this.filmOffset;f!==0&&(a+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xS extends Mh{constructor(){super(new In(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=vo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||s!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=s,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class yS extends Nc{constructor(e,t,i=0,s=Math.PI/3,a=0,c=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=i,this.angle=s,this.penumbra=a,this.decay=c,this.map=null,this.shadow=new xS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class SS extends Mh{constructor(){super(new In(90,1,.5,500)),this.isPointLightShadow=!0}}class MS extends Nc{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new SS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Dc extends c_{constructor(e=-1,t=1,i=1,s=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,c=i+e,f=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,f-=g*this.view.offsetY,d=f-g*this.view.height}this.projectionMatrix.makeOrthographic(a,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ES extends Mh{constructor(){super(new Dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class u_ extends Nc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new ES}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class TS extends Nc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class wa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const $f=new WeakMap;class wS extends Ro{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,c=fr.get(`image-bitmap:${e}`);if(c!==void 0){if(a.manager.itemStart(e),c.then){c.then(h=>{if($f.has(c)===!0)s&&s($f.get(c)),a.manager.itemError(e),a.manager.itemEnd(e);else return t&&t(h),a.manager.itemEnd(e),h});return}return setTimeout(function(){t&&t(c),a.manager.itemEnd(e)},0),c}const f={};f.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",f.headers=this.requestHeader,f.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const d=fetch(e,f).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(h){return fr.add(`image-bitmap:${e}`,h),t&&t(h),a.manager.itemEnd(e),h}).catch(function(h){s&&s(h),$f.set(d,h),fr.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});fr.add(`image-bitmap:${e}`,d),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const ao=-90,lo=1;class AS extends Kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new In(ao,lo,e,t);s.layers=this.layers,this.add(s);const a=new In(ao,lo,e,t);a.layers=this.layers,this.add(a);const c=new In(ao,lo,e,t);c.layers=this.layers,this.add(c);const f=new In(ao,lo,e,t);f.layers=this.layers,this.add(f);const d=new In(ao,lo,e,t);d.layers=this.layers,this.add(d);const h=new In(ao,lo,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,c,f,d]=t;for(const h of t)this.remove(h);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,f,d,h,g]=this.children,_=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,m,x),e.xr.enabled=M,i.texture.needsPMREMUpdate=!0}}class bS extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Eh="\\[\\]\\.:\\/",RS=new RegExp("["+Eh+"]","g"),Th="[^"+Eh+"]",CS="[^"+Eh.replace("\\.","")+"]",PS=/((?:WC+[\/:])*)/.source.replace("WC",Th),LS=/(WCOD+)?/.source.replace("WCOD",CS),IS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Th),NS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Th),DS=new RegExp("^"+PS+LS+IS+NS+"$"),US=["material","materials","bones","map"];class FS{constructor(e,t,i){const s=i||Ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,a=i.length;s!==a;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ot{constructor(e,t,i){this.path=t,this.parsedPath=i||Ot.parseTrackName(t),this.node=Ot.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ot.Composite(e,t,i):new Ot(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(RS,"")}static parseTrackName(e){const t=DS.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const a=i.nodeName.substring(s+1);US.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let c=0;c<a.length;c++){const f=a[c];if(f.name===t||f.uuid===t)return f;const d=i(f.children);if(d)return d}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let a=t.propertyIndex;if(e||(e=Ot.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=t.objectIndex;switch(i){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let g=0;g<e.length;g++)if(e[g].name===h){h=g;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(h!==void 0){if(e[h]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const c=e[s];if(c===void 0){const h=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",e);return}let f=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?f=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(f=this.Versioning.MatrixWorldNeedsUpdate);let d=this.BindingType.Direct;if(a!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}d=this.BindingType.ArrayElement,this.resolvedProperty=c,this.propertyIndex=a}else c.fromArray!==void 0&&c.toArray!==void 0?(d=this.BindingType.HasFromToArray,this.resolvedProperty=c):Array.isArray(c)?(d=this.BindingType.EntireArray,this.resolvedProperty=c):this.propertyName=s;this.getValue=this.GetterByBindingType[d],this.setValue=this.SetterByBindingTypeAndVersioning[d][f]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ot.Composite=FS;Ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ot.prototype.GetterByBindingType=[Ot.prototype._getValue_direct,Ot.prototype._getValue_array,Ot.prototype._getValue_arrayElement,Ot.prototype._getValue_toArray];Ot.prototype.SetterByBindingTypeAndVersioning=[[Ot.prototype._setValue_direct,Ot.prototype._setValue_direct_setNeedsUpdate,Ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_array,Ot.prototype._setValue_array_setNeedsUpdate,Ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_arrayElement,Ot.prototype._setValue_arrayElement_setNeedsUpdate,Ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ot.prototype._setValue_fromArray,Ot.prototype._setValue_fromArray_setNeedsUpdate,Ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function qg(o,e,t,i){const s=OS(i);switch(t){case W0:return o*e;case lh:return o*e/s.components*s.byteLength;case ch:return o*e/s.components*s.byteLength;case _o:return o*e*2/s.components*s.byteLength;case uh:return o*e*2/s.components*s.byteLength;case X0:return o*e*3/s.components*s.byteLength;case di:return o*e*4/s.components*s.byteLength;case fh:return o*e*4/s.components*s.byteLength;case xc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _d:case xd:return Math.max(o,16)*Math.max(e,8)/4;case gd:case vd:return Math.max(o,8)*Math.max(e,8)/2;case yd:case Sd:case Ed:case Td:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Md:case wd:case Ad:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Id:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Od:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Bd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Vd:case Hd:case Gd:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Wd:case Xd:return Math.ceil(o/4)*Math.ceil(e/4)*8;case jd:case qd:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OS(o){switch(o){case Jn:case z0:return{byteLength:1,components:1};case Aa:case V0:case mr:return{byteLength:2,components:1};case oh:case ah:return{byteLength:2,components:4};case Wi:case sh:case fi:return{byteLength:4,components:1};case H0:case G0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function f_(){let o=null,e=!1,t=null,i=null;function s(a,c){t(a,c),i=o.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(s),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){o=a}}}function kS(o){const e=new WeakMap;function t(f,d){const h=f.array,g=f.usage,_=h.byteLength,m=o.createBuffer();o.bindBuffer(d,m),o.bufferData(d,h,g),f.onUploadCallback();let x;if(h instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=o.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=o.SHORT;else if(h instanceof Uint32Array)x=o.UNSIGNED_INT;else if(h instanceof Int32Array)x=o.INT;else if(h instanceof Int8Array)x=o.BYTE;else if(h instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:_}}function i(f,d,h){const g=d.array,_=d.updateRanges;if(o.bindBuffer(h,f),_.length===0)o.bufferSubData(h,0,g);else{_.sort((x,M)=>x.start-M.start);let m=0;for(let x=1;x<_.length;x++){const M=_[m],E=_[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++m,_[m]=E)}_.length=m+1;for(let x=0,M=_.length;x<M;x++){const E=_[x];o.bufferSubData(h,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function a(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(o.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,f,d),h.version=f.version}}return{get:s,remove:a,update:c}}var BS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zS=`#ifdef USE_ALPHAHASH
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
#endif`,VS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XS=`#ifdef USE_AOMAP
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
#endif`,jS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qS=`#ifdef USE_BATCHING
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
#endif`,YS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JS=`#ifdef USE_IRIDESCENCE
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
#endif`,QS=`#ifdef USE_BUMPMAP
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
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lM=`#define PI 3.141592653589793
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
} // validated`,cM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mM="gl_FragColor = linearToOutputTexel( gl_FragColor );",gM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
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
#endif`,vM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
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
}`,bM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PM=`uniform bool receiveShadow;
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
#endif`,LM=`#ifdef USE_ENVMAP
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
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FM=`PhysicalMaterial material;
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
#endif`,OM=`uniform sampler2D dfgLUT;
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
}`,kM=`
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,YM=`#if defined( USE_POINTS_UV )
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
#endif`,KM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,JM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,QM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`#ifdef USE_MORPHTARGETS
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
#endif`,tE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,iE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,rE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aE=`#ifdef USE_NORMALMAP
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
#endif`,lE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,uE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ME=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,EE=`float getShadowMask() {
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
}`,TE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wE=`#ifdef USE_SKINNING
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
#endif`,AE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,RE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,HE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`#include <common>
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
}`,XE=`#if DEPTH_PACKING == 3200
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
}`,jE=`#define DISTANCE
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
}`,qE=`#define DISTANCE
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
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`uniform float scale;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,QE=`uniform vec3 diffuse;
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
}`,eT=`#define LAMBERT
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
}`,tT=`#define LAMBERT
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
}`,nT=`#define MATCAP
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
}`,iT=`#define MATCAP
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
}`,rT=`#define NORMAL
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
}`,sT=`#define NORMAL
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
}`,oT=`#define PHONG
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
}`,aT=`#define PHONG
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
}`,lT=`#define STANDARD
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
}`,cT=`#define STANDARD
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
}`,uT=`#define TOON
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
}`,fT=`#define TOON
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
}`,dT=`uniform float size;
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
}`,hT=`uniform vec3 diffuse;
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
}`,pT=`#include <common>
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
}`,mT=`uniform vec3 color;
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
}`,gT=`uniform float rotation;
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
}`,_T=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:BS,alphahash_pars_fragment:zS,alphamap_fragment:VS,alphamap_pars_fragment:HS,alphatest_fragment:GS,alphatest_pars_fragment:WS,aomap_fragment:XS,aomap_pars_fragment:jS,batching_pars_vertex:qS,batching_vertex:YS,begin_vertex:KS,beginnormal_vertex:$S,bsdfs:ZS,iridescence_fragment:JS,bumpmap_pars_fragment:QS,clipping_planes_fragment:eM,clipping_planes_pars_fragment:tM,clipping_planes_pars_vertex:nM,clipping_planes_vertex:iM,color_fragment:rM,color_pars_fragment:sM,color_pars_vertex:oM,color_vertex:aM,common:lM,cube_uv_reflection_fragment:cM,defaultnormal_vertex:uM,displacementmap_pars_vertex:fM,displacementmap_vertex:dM,emissivemap_fragment:hM,emissivemap_pars_fragment:pM,colorspace_fragment:mM,colorspace_pars_fragment:gM,envmap_fragment:_M,envmap_common_pars_fragment:vM,envmap_pars_fragment:xM,envmap_pars_vertex:yM,envmap_physical_pars_fragment:LM,envmap_vertex:SM,fog_vertex:MM,fog_pars_vertex:EM,fog_fragment:TM,fog_pars_fragment:wM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:bM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:CM,lights_pars_begin:PM,lights_toon_fragment:IM,lights_toon_pars_fragment:NM,lights_phong_fragment:DM,lights_phong_pars_fragment:UM,lights_physical_fragment:FM,lights_physical_pars_fragment:OM,lights_fragment_begin:kM,lights_fragment_maps:BM,lights_fragment_end:zM,logdepthbuf_fragment:VM,logdepthbuf_pars_fragment:HM,logdepthbuf_pars_vertex:GM,logdepthbuf_vertex:WM,map_fragment:XM,map_pars_fragment:jM,map_particle_fragment:qM,map_particle_pars_fragment:YM,metalnessmap_fragment:KM,metalnessmap_pars_fragment:$M,morphinstance_vertex:ZM,morphcolor_vertex:JM,morphnormal_vertex:QM,morphtarget_pars_vertex:eE,morphtarget_vertex:tE,normal_fragment_begin:nE,normal_fragment_maps:iE,normal_pars_fragment:rE,normal_pars_vertex:sE,normal_vertex:oE,normalmap_pars_fragment:aE,clearcoat_normal_fragment_begin:lE,clearcoat_normal_fragment_maps:cE,clearcoat_pars_fragment:uE,iridescence_pars_fragment:fE,opaque_fragment:dE,packing:hE,premultiplied_alpha_fragment:pE,project_vertex:mE,dithering_fragment:gE,dithering_pars_fragment:_E,roughnessmap_fragment:vE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:yE,shadowmap_pars_vertex:SE,shadowmap_vertex:ME,shadowmask_pars_fragment:EE,skinbase_vertex:TE,skinning_pars_vertex:wE,skinning_vertex:AE,skinnormal_vertex:bE,specularmap_fragment:RE,specularmap_pars_fragment:CE,tonemapping_fragment:PE,tonemapping_pars_fragment:LE,transmission_fragment:IE,transmission_pars_fragment:NE,uv_pars_fragment:DE,uv_pars_vertex:UE,uv_vertex:FE,worldpos_vertex:OE,background_vert:kE,background_frag:BE,backgroundCube_vert:zE,backgroundCube_frag:VE,cube_vert:HE,cube_frag:GE,depth_vert:WE,depth_frag:XE,distance_vert:jE,distance_frag:qE,equirect_vert:YE,equirect_frag:KE,linedashed_vert:$E,linedashed_frag:ZE,meshbasic_vert:JE,meshbasic_frag:QE,meshlambert_vert:eT,meshlambert_frag:tT,meshmatcap_vert:nT,meshmatcap_frag:iT,meshnormal_vert:rT,meshnormal_frag:sT,meshphong_vert:oT,meshphong_frag:aT,meshphysical_vert:lT,meshphysical_frag:cT,meshtoon_vert:uT,meshtoon_frag:fT,points_vert:dT,points_frag:hT,shadow_vert:pT,shadow_frag:mT,sprite_vert:gT,sprite_frag:_T},Ie={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Fi={basic:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Ln([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Ln([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Ln([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new ut(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Ln([Ie.points,Ie.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Ln([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Ln([Ie.common,Ie.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Ln([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Ln([Ie.sprite,Ie.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Ln([Ie.common,Ie.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Ln([Ie.lights,Ie.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Fi.physical={uniforms:Ln([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const mc={r:0,b:0,g:0},ms=new Xi,vT=new gt;function xT(o,e,t,i,s,a){const c=new ut(0);let f=s===!0?0:1,d,h,g=null,_=0,m=null;function x(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const P=R.backgroundBlurriness>0;L=e.get(L,P)}return L}function M(R){let L=!1;const P=x(R);P===null?y(c,f):P&&P.isColor&&(y(P,1),L=!0);const D=o.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(o.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(R,L){const P=x(L);P&&(P.isCubeTexture||P.mapping===Lc)?(h===void 0&&(h=new wn(new To(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:xo(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,U,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ms.copy(L.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(vT.makeRotationFromEuler(ms)),h.material.toneMapped=Et.getTransfer(P.colorSpace)!==Ut,(g!==P||_!==P.version||m!==o.toneMapping)&&(h.material.needsUpdate=!0,g=P,_=P.version,m=o.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new wn(new Da(2,2),new ji({name:"BackgroundMaterial",uniforms:xo(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,d.material.toneMapped=Et.getTransfer(P.colorSpace)!==Ut,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||_!==P.version||m!==o.toneMapping)&&(d.material.needsUpdate=!0,g=P,_=P.version,m=o.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null))}function y(R,L){R.getRGB(mc,s_(o)),t.buffers.color.setClear(mc.r,mc.g,mc.b,L,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,L=1){c.set(R),f=L,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,y(c,f)},render:M,addToRenderList:E,dispose:S}}function yT(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},s=m(null);let a=s,c=!1;function f(O,q,W,ee,Z){let K=!1;const X=_(O,ee,W,q);a!==X&&(a=X,h(a.object)),K=x(O,ee,W,Z),K&&M(O,ee,W,Z),Z!==null&&e.update(Z,o.ELEMENT_ARRAY_BUFFER),(K||c)&&(c=!1,P(O,q,W,ee),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function d(){return o.createVertexArray()}function h(O){return o.bindVertexArray(O)}function g(O){return o.deleteVertexArray(O)}function _(O,q,W,ee){const Z=ee.wireframe===!0;let K=i[q.id];K===void 0&&(K={},i[q.id]=K);const X=O.isInstancedMesh===!0?O.id:0;let J=K[X];J===void 0&&(J={},K[X]=J);let ae=J[W.id];ae===void 0&&(ae={},J[W.id]=ae);let ce=ae[Z];return ce===void 0&&(ce=m(d()),ae[Z]=ce),ce}function m(O){const q=[],W=[],ee=[];for(let Z=0;Z<t;Z++)q[Z]=0,W[Z]=0,ee[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:W,attributeDivisors:ee,object:O,attributes:{},index:null}}function x(O,q,W,ee){const Z=a.attributes,K=q.attributes;let X=0;const J=W.getAttributes();for(const ae in J)if(J[ae].location>=0){const k=Z[ae];let B=K[ae];if(B===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(B=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(B=O.instanceColor)),k===void 0||k.attribute!==B||B&&k.data!==B.data)return!0;X++}return a.attributesNum!==X||a.index!==ee}function M(O,q,W,ee){const Z={},K=q.attributes;let X=0;const J=W.getAttributes();for(const ae in J)if(J[ae].location>=0){let k=K[ae];k===void 0&&(ae==="instanceMatrix"&&O.instanceMatrix&&(k=O.instanceMatrix),ae==="instanceColor"&&O.instanceColor&&(k=O.instanceColor));const B={};B.attribute=k,k&&k.data&&(B.data=k.data),Z[ae]=B,X++}a.attributes=Z,a.attributesNum=X,a.index=ee}function E(){const O=a.newAttributes;for(let q=0,W=O.length;q<W;q++)O[q]=0}function y(O){S(O,0)}function S(O,q){const W=a.newAttributes,ee=a.enabledAttributes,Z=a.attributeDivisors;W[O]=1,ee[O]===0&&(o.enableVertexAttribArray(O),ee[O]=1),Z[O]!==q&&(o.vertexAttribDivisor(O,q),Z[O]=q)}function R(){const O=a.newAttributes,q=a.enabledAttributes;for(let W=0,ee=q.length;W<ee;W++)q[W]!==O[W]&&(o.disableVertexAttribArray(W),q[W]=0)}function L(O,q,W,ee,Z,K,X){X===!0?o.vertexAttribIPointer(O,q,W,Z,K):o.vertexAttribPointer(O,q,W,ee,Z,K)}function P(O,q,W,ee){E();const Z=ee.attributes,K=W.getAttributes(),X=q.defaultAttributeValues;for(const J in K){const ae=K[J];if(ae.location>=0){let ce=Z[J];if(ce===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor)),ce!==void 0){const k=ce.normalized,B=ce.itemSize,Ee=e.get(ce);if(Ee===void 0)continue;const Re=Ee.buffer,Fe=Ee.type,te=Ee.bytesPerElement,he=Fe===o.INT||Fe===o.UNSIGNED_INT||ce.gpuType===sh;if(ce.isInterleavedBufferAttribute){const de=ce.data,Pe=de.stride,We=ce.offset;if(de.isInstancedInterleavedBuffer){for(let rt=0;rt<ae.locationSize;rt++)S(ae.location+rt,de.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let rt=0;rt<ae.locationSize;rt++)y(ae.location+rt);o.bindBuffer(o.ARRAY_BUFFER,Re);for(let rt=0;rt<ae.locationSize;rt++)L(ae.location+rt,B/ae.locationSize,Fe,k,Pe*te,(We+B/ae.locationSize*rt)*te,he)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<ae.locationSize;de++)S(ae.location+de,ce.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<ae.locationSize;de++)y(ae.location+de);o.bindBuffer(o.ARRAY_BUFFER,Re);for(let de=0;de<ae.locationSize;de++)L(ae.location+de,B/ae.locationSize,Fe,k,B*te,B/ae.locationSize*de*te,he)}}else if(X!==void 0){const k=X[J];if(k!==void 0)switch(k.length){case 2:o.vertexAttrib2fv(ae.location,k);break;case 3:o.vertexAttrib3fv(ae.location,k);break;case 4:o.vertexAttrib4fv(ae.location,k);break;default:o.vertexAttrib1fv(ae.location,k)}}}}R()}function D(){C();for(const O in i){const q=i[O];for(const W in q){const ee=q[W];for(const Z in ee){const K=ee[Z];for(const X in K)g(K[X].object),delete K[X];delete ee[Z]}}delete i[O]}}function U(O){if(i[O.id]===void 0)return;const q=i[O.id];for(const W in q){const ee=q[W];for(const Z in ee){const K=ee[Z];for(const X in K)g(K[X].object),delete K[X];delete ee[Z]}}delete i[O.id]}function N(O){for(const q in i){const W=i[q];for(const ee in W){const Z=W[ee];if(Z[O.id]===void 0)continue;const K=Z[O.id];for(const X in K)g(K[X].object),delete K[X];delete Z[O.id]}}}function w(O){for(const q in i){const W=i[q],ee=O.isInstancedMesh===!0?O.id:0,Z=W[ee];if(Z!==void 0){for(const K in Z){const X=Z[K];for(const J in X)g(X[J].object),delete X[J];delete Z[K]}delete W[ee],Object.keys(W).length===0&&delete i[q]}}}function C(){se(),c=!0,a!==s&&(a=s,h(a.object))}function se(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:C,resetDefaultState:se,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfObject:w,releaseStatesOfProgram:N,initAttributes:E,enableAttribute:y,disableUnusedAttributes:R}}function ST(o,e,t){let i;function s(h){i=h}function a(h,g){o.drawArrays(i,h,g),t.update(g,i,1)}function c(h,g,_){_!==0&&(o.drawArraysInstanced(i,h,g,_),t.update(g,i,_))}function f(h,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,g,0,_);let x=0;for(let M=0;M<_;M++)x+=g[M];t.update(x,i,1)}function d(h,g,_,m){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)c(h[M],g[M],m[M]);else{x.multiDrawArraysInstancedWEBGL(i,h,0,g,0,m,0,_);let M=0;for(let E=0;E<_;E++)M+=g[E]*m[E];t.update(M,i,1)}}this.setMode=s,this.render=a,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=d}function MT(o,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=o.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(N){return!(N!==di&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const w=N===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Jn&&i.convert(N)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==fi&&!w)}function d(N){if(N==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const g=d(h);g!==h&&(Qe("WebGLRenderer:",h,"not supported, using",g,"instead."),h=g);const _=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=o.getParameter(o.MAX_SAMPLES),U=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:_,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:P,maxSamples:D,samples:U}}function ET(o){const e=this;let t=null,i=0,s=!1,a=!1;const c=new vs,f=new pt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,m){const x=_.length!==0||m||i!==0||s;return s=m,i=_.length,x},this.beginShadows=function(){a=!0,g(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,m){t=g(_,m,0)},this.setState=function(_,m,x){const M=_.clippingPlanes,E=_.clipIntersection,y=_.clipShadows,S=o.get(_);if(!s||M===null||M.length===0||a&&!y)a?g(null):h();else{const R=a?0:i,L=R*4;let P=S.clippingState||null;d.value=P,P=g(M,m,L,x);for(let D=0;D!==L;++D)P[D]=t[D];S.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(_,m,x,M){const E=_!==null?_.length:0;let y=null;if(E!==0){if(y=d.value,M!==!0||y===null){const S=x+E*4,R=m.matrixWorldInverse;f.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let L=0,P=x;L!==E;++L,P+=4)c.copy(_[L]).applyMatrix4(R,f),c.normal.toArray(y,P),y[P+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}const Kr=4,Yg=[.125,.215,.35,.446,.526,.582],ys=20,TT=256,_a=new Dc,Kg=new ut;let Zf=null,Jf=0,Qf=0,ed=!1;const wT=new $;class $g{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,a={}){const{size:c=256,position:f=wT}=a;Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,s,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Zf,Jf,Qf),this._renderer.xr.enabled=ed,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ms||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zf=this._renderer.getRenderTarget(),Jf=this._renderer.getActiveCubeFace(),Qf=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:mr,format:di,colorSpace:Dn,depthBuffer:!1},s=Zg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zg(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AT(a)),this._blurMaterial=RT(a,e,t),this._ggxMaterial=bT(a,e,t)}return s}_compileMaterial(e){const t=new wn(new Qn,e);this._renderer.compile(t,_a)}_sceneToCubeUV(e,t,i,s,a){const d=new In(90,1,t,i),h=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,m=_.autoClear,x=_.toneMapping;_.getClearColor(Kg),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(s),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new wn(new To,new Yr({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,y=E.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(Kg),S=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+g[L],a.y,a.z)):P===1?(d.up.set(0,0,h[L]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+g[L],a.z)):(d.up.set(0,h[L],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+g[L]));const D=this._cubeSize;co(s,P*D,L>2?D:0,D,D),_.setRenderTarget(s),S&&_.render(E,d),_.render(e,d)}_.toneMapping=x,_.autoClear=m,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ms||e.mapping===mo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jg());const a=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const f=a.uniforms;f.envMap.value=e;const d=this._cubeSize;co(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(c,_a)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let a=1;a<s;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[i];f.material=c;const d=c.uniforms,h=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(h*h-g*g),m=0+h*1.25,x=_*m,{_lodMax:M}=this,E=this._sizeLods[i],y=3*E*(i>M-Kr?i-M+Kr:0),S=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=M-t,co(a,y,S,3*E,2*E),s.setRenderTarget(a),s.render(f,_a),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-i,co(e,y,S,3*E,2*E),s.setRenderTarget(e),s.render(f,_a)}_blur(e,t,i,s,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",a),this._halfBlur(c,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&ot("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[s];_.material=h;const m=h.uniforms,x=this._sizeLods[i]-1,M=isFinite(a)?Math.PI/(2*x):2*Math.PI/(2*ys-1),E=a/M,y=isFinite(a)?1+Math.floor(g*E):ys;y>ys&&Qe(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const S=[];let R=0;for(let N=0;N<ys;++N){const w=N/E,C=Math.exp(-w*w/2);S.push(C),N===0?R+=C:N<y&&(R+=2*C)}for(let N=0;N<S.length;N++)S[N]=S[N]/R;m.envMap.value=e.texture,m.samples.value=y,m.weights.value=S,m.latitudinal.value=c==="latitudinal",f&&(m.poleAxis.value=f);const{_lodMax:L}=this;m.dTheta.value=M,m.mipInt.value=L-i;const P=this._sizeLods[s],D=3*P*(s>L-Kr?s-L+Kr:0),U=4*(this._cubeSize-P);co(t,D,U,3*P,2*P),d.setRenderTarget(t),d.render(_,_a)}}function AT(o){const e=[],t=[],i=[];let s=o;const a=o-Kr+1+Yg.length;for(let c=0;c<a;c++){const f=Math.pow(2,s);e.push(f);let d=1/f;c>o-Kr?d=Yg[c-o+Kr-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),g=-h,_=1+h,m=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,M=6,E=3,y=2,S=1,R=new Float32Array(E*M*x),L=new Float32Array(y*M*x),P=new Float32Array(S*M*x);for(let U=0;U<x;U++){const N=U%3*2/3-1,w=U>2?0:-1,C=[N,w,0,N+2/3,w,0,N+2/3,w+1,0,N,w,0,N+2/3,w+1,0,N,w+1,0];R.set(C,E*M*U),L.set(m,y*M*U);const se=[U,U,U,U,U,U];P.set(se,S*M*U)}const D=new Qn;D.setAttribute("position",new Nn(R,E)),D.setAttribute("uv",new Nn(L,y)),D.setAttribute("faceIndex",new Nn(P,S)),i.push(new wn(D,null)),s>Kr&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Zg(o,e,t){const i=new Hi(o,e,t);return i.texture.mapping=Lc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(o,e,t,i,s){o.viewport.set(e,t,i,s),o.scissor.set(e,t,i,s)}function bT(o,e,t){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:TT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function RT(o,e,t){const i=new Float32Array(ys),s=new $(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Jg(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Qg(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

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
	`}class d_ extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new i_(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new To(5,5,5),a=new ji({name:"CubemapFromEquirect",uniforms:xo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gn,blending:dr});a.uniforms.tEquirect.value=t;const c=new wn(s,a),f=t.minFilter;return t.minFilter===ki&&(t.minFilter=sn),new AS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(a)}}function CT(o){let e=new WeakMap,t=new WeakMap,i=null;function s(m,x=!1){return m==null?null:x?c(m):a(m)}function a(m){if(m&&m.isTexture){const x=m.mapping;if(x===Sf||x===Mf)if(e.has(m)){const M=e.get(m).texture;return f(M,m.mapping)}else{const M=m.image;if(M&&M.height>0){const E=new d_(M.height);return E.fromEquirectangularTexture(o,m),e.set(m,E),m.addEventListener("dispose",h),f(E.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const x=m.mapping,M=x===Sf||x===Mf,E=x===Ms||x===mo;if(M||E){let y=t.get(m);const S=y!==void 0?y.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new $g(o)),y=M?i.fromEquirectangular(m,y):i.fromCubemap(m,y),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),y.texture;if(y!==void 0)return y.texture;{const R=m.image;return M&&R&&R.height>0||E&&R&&d(R)?(i===null&&(i=new $g(o)),y=M?i.fromEquirectangular(m):i.fromCubemap(m),y.texture.pmremVersion=m.pmremVersion,t.set(m,y),m.addEventListener("dispose",g),y.texture):null}}}return m}function f(m,x){return x===Sf?m.mapping=Ms:x===Mf&&(m.mapping=mo),m}function d(m){let x=0;const M=6;for(let E=0;E<M;E++)m[E]!==void 0&&x++;return x===M}function h(m){const x=m.target;x.removeEventListener("dispose",h);const M=e.get(x);M!==void 0&&(e.delete(x),M.dispose())}function g(m){const x=m.target;x.removeEventListener("dispose",g);const M=t.get(x);M!==void 0&&(t.delete(x),M.dispose())}function _(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:_}}function PT(o){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=o.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Rc("WebGLRenderer: "+i+" extension not supported."),s}}}function LT(o,e,t,i){const s={},a=new WeakMap;function c(_){const m=_.target;m.index!==null&&e.remove(m.index);for(const M in m.attributes)e.remove(m.attributes[M]);m.removeEventListener("dispose",c),delete s[m.id];const x=a.get(m);x&&(e.remove(x),a.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function f(_,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function d(_){const m=_.attributes;for(const x in m)e.update(m[x],o.ARRAY_BUFFER)}function h(_){const m=[],x=_.index,M=_.attributes.position;let E=0;if(M===void 0)return;if(x!==null){const R=x.array;E=x.version;for(let L=0,P=R.length;L<P;L+=3){const D=R[L+0],U=R[L+1],N=R[L+2];m.push(D,U,U,N,N,D)}}else{const R=M.array;E=M.version;for(let L=0,P=R.length/3-1;L<P;L+=3){const D=L+0,U=L+1,N=L+2;m.push(D,U,U,N,N,D)}}const y=new(M.count>=65535?Q0:J0)(m,1);y.version=E;const S=a.get(_);S&&e.remove(S),a.set(_,y)}function g(_){const m=a.get(_);if(m){const x=_.index;x!==null&&m.version<x.version&&h(_)}else h(_);return a.get(_)}return{get:f,update:d,getWireframeAttribute:g}}function IT(o,e,t){let i;function s(m){i=m}let a,c;function f(m){a=m.type,c=m.bytesPerElement}function d(m,x){o.drawElements(i,x,a,m*c),t.update(x,i,1)}function h(m,x,M){M!==0&&(o.drawElementsInstanced(i,x,a,m*c,M),t.update(x,i,M))}function g(m,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,a,m,0,M);let y=0;for(let S=0;S<M;S++)y+=x[S];t.update(y,i,1)}function _(m,x,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<m.length;S++)h(m[S]/c,x[S],E[S]);else{y.multiDrawElementsInstancedWEBGL(i,x,0,a,m,0,E,0,M);let S=0;for(let R=0;R<M;R++)S+=x[R]*E[R];t.update(S,i,1)}}this.setMode=s,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function NT(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,c,f){switch(t.calls++,c){case o.TRIANGLES:t.triangles+=f*(a/3);break;case o.LINES:t.lines+=f*(a/2);break;case o.LINE_STRIP:t.lines+=f*(a-1);break;case o.LINE_LOOP:t.lines+=f*a;break;case o.POINTS:t.points+=f*a;break;default:ot("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function DT(o,e,t){const i=new WeakMap,s=new Wt;function a(c,f,d){const h=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let m=i.get(f);if(m===void 0||m.count!==_){let se=function(){w.dispose(),i.delete(f),f.removeEventListener("dispose",se)};var x=se;m!==void 0&&m.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;M===!0&&(P=1),E===!0&&(P=2),y===!0&&(P=3);let D=f.attributes.position.count*P,U=1;D>e.maxTextureSize&&(U=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const N=new Float32Array(D*U*4*_),w=new K0(N,D,U,_);w.type=fi,w.needsUpdate=!0;const C=P*4;for(let O=0;O<_;O++){const q=S[O],W=R[O],ee=L[O],Z=D*U*4*O;for(let K=0;K<q.count;K++){const X=K*C;M===!0&&(s.fromBufferAttribute(q,K),N[Z+X+0]=s.x,N[Z+X+1]=s.y,N[Z+X+2]=s.z,N[Z+X+3]=0),E===!0&&(s.fromBufferAttribute(W,K),N[Z+X+4]=s.x,N[Z+X+5]=s.y,N[Z+X+6]=s.z,N[Z+X+7]=0),y===!0&&(s.fromBufferAttribute(ee,K),N[Z+X+8]=s.x,N[Z+X+9]=s.y,N[Z+X+10]=s.z,N[Z+X+11]=ee.itemSize===4?s.w:1)}}m={count:_,texture:w,size:new Tt(D,U)},i.set(f,m),f.addEventListener("dispose",se)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(o,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const E=f.morphTargetsRelative?1:1-M;d.getUniforms().setValue(o,"morphTargetBaseInfluence",E),d.getUniforms().setValue(o,"morphTargetInfluences",h)}d.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}return{update:a}}function UT(o,e,t,i,s){let a=new WeakMap;function c(h){const g=s.render.frame,_=h.geometry,m=e.get(h,_);if(a.get(m)!==g&&(e.update(m),a.set(m,g)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==g&&(t.update(h.instanceMatrix,o.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,o.ARRAY_BUFFER),a.set(h,g))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==g&&(x.update(),a.set(x,g))}return m}function f(){a=new WeakMap}function d(h){const g=h.target;g.removeEventListener("dispose",d),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const FT={[L0]:"LINEAR_TONE_MAPPING",[I0]:"REINHARD_TONE_MAPPING",[N0]:"CINEON_TONE_MAPPING",[D0]:"ACES_FILMIC_TONE_MAPPING",[F0]:"AGX_TONE_MAPPING",[O0]:"NEUTRAL_TONE_MAPPING",[U0]:"CUSTOM_TONE_MAPPING"};function OT(o,e,t,i,s){const a=new Hi(e,t,{type:o,depthBuffer:i,stencilBuffer:s}),c=new Hi(e,t,{type:mr,depthBuffer:!1,stencilBuffer:!1}),f=new Qn;f.setAttribute("position",new Wn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Wn([0,2,0,0,2,0],2));const d=new nS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new wn(f,d),g=new Dc(-1,1,1,-1,0,1);let _=null,m=null,x=!1,M,E=null,y=[],S=!1;this.setSize=function(R,L){a.setSize(R,L),c.setSize(R,L);for(let P=0;P<y.length;P++){const D=y[P];D.setSize&&D.setSize(R,L)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const L=a.width,P=a.height;for(let D=0;D<y.length;D++){const U=y[D];U.setSize&&U.setSize(L,P)}},this.begin=function(R,L){if(x||R.toneMapping===Vi&&y.length===0)return!1;if(E=L,L!==null){const P=L.width,D=L.height;(a.width!==P||a.height!==D)&&this.setSize(P,D)}return S===!1&&R.setRenderTarget(a),M=R.toneMapping,R.toneMapping=Vi,!0},this.hasRenderPass=function(){return S},this.end=function(R,L){R.toneMapping=M,x=!0;let P=a,D=c;for(let U=0;U<y.length;U++){const N=y[U];if(N.enabled!==!1&&(N.render(R,D,P,L),N.needsSwap!==!1)){const w=P;P=D,D=w}}if(_!==R.outputColorSpace||m!==R.toneMapping){_=R.outputColorSpace,m=R.toneMapping,d.defines={},Et.getTransfer(_)===Ut&&(d.defines.SRGB_TRANSFER="");const U=FT[m];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(E),R.render(h,g),E=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),c.dispose(),f.dispose(),d.dispose()}}const h_=new cn,Jd=new Ia(1,1),p_=new K0,m_=new Ty,g_=new i_,e0=[],t0=[],n0=new Float32Array(16),i0=new Float32Array(9),r0=new Float32Array(4);function Co(o,e,t){const i=o[0];if(i<=0||i>0)return o;const s=e*t;let a=e0[s];if(a===void 0&&(a=new Float32Array(s),e0[s]=a),e!==0){i.toArray(a,0);for(let c=1,f=0;c!==e;++c)f+=t,o[c].toArray(a,f)}return a}function un(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function fn(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Fc(o,e){let t=t0[e];t===void 0&&(t=new Int32Array(e),t0[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function kT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function BT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2fv(this.addr,e),fn(t,e)}}function zT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;o.uniform3fv(this.addr,e),fn(t,e)}}function VT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4fv(this.addr,e),fn(t,e)}}function HT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;r0.set(i),o.uniformMatrix2fv(this.addr,!1,r0),fn(t,i)}}function GT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;i0.set(i),o.uniformMatrix3fv(this.addr,!1,i0),fn(t,i)}}function WT(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(un(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),fn(t,e)}else{if(un(t,i))return;n0.set(i),o.uniformMatrix4fv(this.addr,!1,n0),fn(t,i)}}function XT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function jT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2iv(this.addr,e),fn(t,e)}}function qT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;o.uniform3iv(this.addr,e),fn(t,e)}}function YT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4iv(this.addr,e),fn(t,e)}}function KT(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function $T(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;o.uniform2uiv(this.addr,e),fn(t,e)}}function ZT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;o.uniform3uiv(this.addr,e),fn(t,e)}}function JT(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;o.uniform4uiv(this.addr,e),fn(t,e)}}function QT(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s);let a;this.type===o.SAMPLER_2D_SHADOW?(Jd.compareFunction=t.isReversedDepthBuffer()?hh:dh,a=Jd):a=h_,t.setTexture2D(e||a,s)}function ew(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||m_,s)}function tw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||g_,s)}function nw(o,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(o.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||p_,s)}function iw(o){switch(o){case 5126:return kT;case 35664:return BT;case 35665:return zT;case 35666:return VT;case 35674:return HT;case 35675:return GT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return jT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return KT;case 36294:return $T;case 36295:return ZT;case 36296:return JT;case 35678:case 36198:case 36298:case 36306:case 35682:return QT;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}function rw(o,e){o.uniform1fv(this.addr,e)}function sw(o,e){const t=Co(e,this.size,2);o.uniform2fv(this.addr,t)}function ow(o,e){const t=Co(e,this.size,3);o.uniform3fv(this.addr,t)}function aw(o,e){const t=Co(e,this.size,4);o.uniform4fv(this.addr,t)}function lw(o,e){const t=Co(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function cw(o,e){const t=Co(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function uw(o,e){const t=Co(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function fw(o,e){o.uniform1iv(this.addr,e)}function dw(o,e){o.uniform2iv(this.addr,e)}function hw(o,e){o.uniform3iv(this.addr,e)}function pw(o,e){o.uniform4iv(this.addr,e)}function mw(o,e){o.uniform1uiv(this.addr,e)}function gw(o,e){o.uniform2uiv(this.addr,e)}function _w(o,e){o.uniform3uiv(this.addr,e)}function vw(o,e){o.uniform4uiv(this.addr,e)}function xw(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));let c;this.type===o.SAMPLER_2D_SHADOW?c=Jd:c=h_;for(let f=0;f!==s;++f)t.setTexture2D(e[f]||c,a[f])}function yw(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||m_,a[c])}function Sw(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||g_,a[c])}function Mw(o,e,t){const i=this.cache,s=e.length,a=Fc(t,s);un(i,a)||(o.uniform1iv(this.addr,a),fn(i,a));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||p_,a[c])}function Ew(o){switch(o){case 5126:return rw;case 35664:return sw;case 35665:return ow;case 35666:return aw;case 35674:return lw;case 35675:return cw;case 35676:return uw;case 5124:case 35670:return fw;case 35667:case 35671:return dw;case 35668:case 35672:return hw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return _w;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return xw;case 35679:case 36299:case 36307:return yw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Mw}}class Tw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=iw(t.type)}}class ww{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ew(t.type)}}class Aw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,c=s.length;a!==c;++a){const f=s[a];f.setValue(e,t[f.id],i)}}}const td=/(\w+)(\])?(\[|\.)?/g;function s0(o,e){o.seq.push(e),o.map[e.id]=e}function bw(o,e,t){const i=o.name,s=i.length;for(td.lastIndex=0;;){const a=td.exec(i),c=td.lastIndex;let f=a[1];const d=a[2]==="]",h=a[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===s){s0(t,h===void 0?new Tw(f,o,e):new ww(f,o,e));break}else{let _=t.map[f];_===void 0&&(_=new Aw(f),s0(t,_)),t=_}}}class Ec{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);bw(f,d,this)}const s=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):a.push(c);s.length>0&&(this.seq=s.concat(a))}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,c=t.length;a!==c;++a){const f=t[a],d=i[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function o0(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const Rw=37297;let Cw=0;function Pw(o,e){const t=o.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=s;c<a;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const a0=new pt;function Lw(o){Et._getMatrix(a0,Et.workingColorSpace,o);const e=`mat3( ${a0.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(o)){case Ac:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function l0(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),a=(o.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+Pw(o.getShaderSource(e),f)}else return a}function Iw(o,e){const t=Lw(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Nw={[L0]:"Linear",[I0]:"Reinhard",[N0]:"Cineon",[D0]:"ACESFilmic",[F0]:"AgX",[O0]:"Neutral",[U0]:"Custom"};function Dw(o,e){const t=Nw[e];return t===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gc=new $;function Uw(){Et.getLuminanceCoefficients(gc);const o=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fw(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ma).join(`
`)}function Ow(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function kw(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=o.getActiveAttrib(e,s),c=a.name;let f=1;a.type===o.FLOAT_MAT2&&(f=2),a.type===o.FLOAT_MAT3&&(f=3),a.type===o.FLOAT_MAT4&&(f=4),t[c]={type:a.type,location:o.getAttribLocation(e,c),locationSize:f}}return t}function Ma(o){return o!==""}function c0(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function u0(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qd(o){return o.replace(Bw,Vw)}const zw=new Map;function Vw(o,e){let t=mt[e];if(t===void 0){const i=zw.get(e);if(i!==void 0)t=mt[i],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qd(t)}const Hw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function f0(o){return o.replace(Hw,Gw)}function Gw(o,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function d0(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}const Ww={[_c]:"SHADOWMAP_TYPE_PCF",[ya]:"SHADOWMAP_TYPE_VSM"};function Xw(o){return Ww[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jw={[Ms]:"ENVMAP_TYPE_CUBE",[mo]:"ENVMAP_TYPE_CUBE",[Lc]:"ENVMAP_TYPE_CUBE_UV"};function qw(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":jw[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const Yw={[mo]:"ENVMAP_MODE_REFRACTION"};function Kw(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":Yw[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $w={[P0]:"ENVMAP_BLENDING_MULTIPLY",[kx]:"ENVMAP_BLENDING_MIX",[Bx]:"ENVMAP_BLENDING_ADD"};function Zw(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":$w[o.combine]||"ENVMAP_BLENDING_NONE"}function Jw(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Qw(o,e,t,i){const s=o.getContext(),a=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=Xw(t),h=qw(t),g=Kw(t),_=Zw(t),m=Jw(t),x=Fw(t),M=Ow(a),E=s.createProgram();let y,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ma).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ma).join(`
`),S.length>0&&(S+=`
`)):(y=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ma).join(`
`),S=[d0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Vi?Dw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,Iw("linearToOutputTexel",t.outputColorSpace),Uw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ma).join(`
`)),c=Qd(c),c=c0(c,t),c=u0(c,t),f=Qd(f),f=c0(f,t),f=u0(f,t),c=f0(c),f=f0(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const L=R+y+c,P=R+S+f,D=o0(s,s.VERTEX_SHADER,L),U=o0(s,s.FRAGMENT_SHADER,P);s.attachShader(E,D),s.attachShader(E,U),t.index0AttributeName!==void 0?s.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function N(O){if(o.debug.checkShaderErrors){const q=s.getProgramInfoLog(E)||"",W=s.getShaderInfoLog(D)||"",ee=s.getShaderInfoLog(U)||"",Z=q.trim(),K=W.trim(),X=ee.trim();let J=!0,ae=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(J=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,D,U);else{const ce=l0(s,D,"vertex"),k=l0(s,U,"fragment");ot("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Z+`
`+ce+`
`+k)}else Z!==""?Qe("WebGLProgram: Program Info Log:",Z):(K===""||X==="")&&(ae=!1);ae&&(O.diagnostics={runnable:J,programLog:Z,vertexShader:{log:K,prefix:y},fragmentShader:{log:X,prefix:S}})}s.deleteShader(D),s.deleteShader(U),w=new Ec(s,E),C=kw(s,E)}let w;this.getUniforms=function(){return w===void 0&&N(this),w};let C;this.getAttributes=function(){return C===void 0&&N(this),C};let se=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return se===!1&&(se=s.getProgramParameter(E,Rw)),se},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cw++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=D,this.fragmentShader=U,this}let e1=0;class t1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new n1(e),t.set(e,i)),i}}class n1{constructor(e){this.id=e1++,this.code=e,this.usedTimes=0}}function i1(o,e,t,i,s,a){const c=new $0,f=new t1,d=new Set,h=[],g=new Map,_=i.logarithmicDepthBuffer;let m=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return d.add(w),w===0?"uv":`uv${w}`}function E(w,C,se,O,q){const W=O.fog,ee=q.geometry,Z=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,X=e.get(w.envMap||Z,K),J=X&&X.mapping===Lc?X.image.height:null,ae=x[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&Qe("WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));const ce=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,k=ce!==void 0?ce.length:0;let B=0;ee.morphAttributes.position!==void 0&&(B=1),ee.morphAttributes.normal!==void 0&&(B=2),ee.morphAttributes.color!==void 0&&(B=3);let Ee,Re,Fe,te;if(ae){const Rt=Fi[ae];Ee=Rt.vertexShader,Re=Rt.fragmentShader}else Ee=w.vertexShader,Re=w.fragmentShader,f.update(w),Fe=f.getVertexShaderID(w),te=f.getFragmentShaderID(w);const he=o.getRenderTarget(),de=o.state.buffers.depth.getReversed(),Pe=q.isInstancedMesh===!0,We=q.isBatchedMesh===!0,rt=!!w.map,Zt=!!w.matcap,_t=!!X,At=!!w.aoMap,It=!!w.lightMap,dt=!!w.bumpMap,Vt=!!w.normalMap,V=!!w.displacementMap,Xt=!!w.emissiveMap,St=!!w.metalnessMap,bt=!!w.roughnessMap,Xe=w.anisotropy>0,I=w.clearcoat>0,T=w.dispersion>0,j=w.iridescence>0,pe=w.sheen>0,ge=w.transmission>0,ue=Xe&&!!w.anisotropyMap,ze=I&&!!w.clearcoatMap,Ae=I&&!!w.clearcoatNormalMap,Ke=I&&!!w.clearcoatRoughnessMap,st=j&&!!w.iridescenceMap,ye=j&&!!w.iridescenceThicknessMap,we=pe&&!!w.sheenColorMap,je=pe&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Ne=!!w.specularColorMap,ft=!!w.specularIntensityMap,H=ge&&!!w.transmissionMap,be=ge&&!!w.thicknessMap,Me=!!w.gradientMap,De=!!w.alphaMap,Se=w.alphaTest>0,fe=!!w.alphaHash,He=!!w.extensions;let at=Vi;w.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(at=o.toneMapping);const Dt={shaderID:ae,shaderType:w.type,shaderName:w.name,vertexShader:Ee,fragmentShader:Re,defines:w.defines,customVertexShaderID:Fe,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,batching:We,batchingColor:We&&q._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&q.instanceColor!==null,instancingMorph:Pe&&q.morphTexture!==null,outputColorSpace:he===null?o.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Dn,alphaToCoverage:!!w.alphaToCoverage,map:rt,matcap:Zt,envMap:_t,envMapMode:_t&&X.mapping,envMapCubeUVHeight:J,aoMap:At,lightMap:It,bumpMap:dt,normalMap:Vt,displacementMap:V,emissiveMap:Xt,normalMapObjectSpace:Vt&&w.normalMapType===Wx,normalMapTangentSpace:Vt&&w.normalMapType===q0,metalnessMap:St,roughnessMap:bt,anisotropy:Xe,anisotropyMap:ue,clearcoat:I,clearcoatMap:ze,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ke,dispersion:T,iridescence:j,iridescenceMap:st,iridescenceThicknessMap:ye,sheen:pe,sheenColorMap:we,sheenRoughnessMap:je,specularMap:Ve,specularColorMap:Ne,specularIntensityMap:ft,transmission:ge,transmissionMap:H,thicknessMap:be,gradientMap:Me,opaque:w.transparent===!1&&w.blending===uo&&w.alphaToCoverage===!1,alphaMap:De,alphaTest:Se,alphaHash:fe,combine:w.combine,mapUv:rt&&M(w.map.channel),aoMapUv:At&&M(w.aoMap.channel),lightMapUv:It&&M(w.lightMap.channel),bumpMapUv:dt&&M(w.bumpMap.channel),normalMapUv:Vt&&M(w.normalMap.channel),displacementMapUv:V&&M(w.displacementMap.channel),emissiveMapUv:Xt&&M(w.emissiveMap.channel),metalnessMapUv:St&&M(w.metalnessMap.channel),roughnessMapUv:bt&&M(w.roughnessMap.channel),anisotropyMapUv:ue&&M(w.anisotropyMap.channel),clearcoatMapUv:ze&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:we&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:je&&M(w.sheenRoughnessMap.channel),specularMapUv:Ve&&M(w.specularMap.channel),specularColorMapUv:Ne&&M(w.specularColorMap.channel),specularIntensityMapUv:ft&&M(w.specularIntensityMap.channel),transmissionMapUv:H&&M(w.transmissionMap.channel),thicknessMapUv:be&&M(w.thicknessMap.channel),alphaMapUv:De&&M(w.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(Vt||Xe),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!ee.attributes.uv&&(rt||De),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||ee.attributes.normal===void 0&&Vt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:de,skinning:q.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:B,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&se.length>0,shadowMapType:o.shadowMap.type,toneMapping:at,decodeVideoTexture:rt&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Ut,decodeVideoTextureEmissive:Xt&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===Ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ei,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||We)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Dt.vertexUv1s=d.has(1),Dt.vertexUv2s=d.has(2),Dt.vertexUv3s=d.has(3),d.clear(),Dt}function y(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const se in w.defines)C.push(se),C.push(w.defines[se]);return w.isRawShaderMaterial===!1&&(S(C,w),R(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function S(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function R(w,C){c.disableAll(),C.instancing&&c.enable(0),C.instancingColor&&c.enable(1),C.instancingMorph&&c.enable(2),C.matcap&&c.enable(3),C.envMap&&c.enable(4),C.normalMapObjectSpace&&c.enable(5),C.normalMapTangentSpace&&c.enable(6),C.clearcoat&&c.enable(7),C.iridescence&&c.enable(8),C.alphaTest&&c.enable(9),C.vertexColors&&c.enable(10),C.vertexAlphas&&c.enable(11),C.vertexUv1s&&c.enable(12),C.vertexUv2s&&c.enable(13),C.vertexUv3s&&c.enable(14),C.vertexTangents&&c.enable(15),C.anisotropy&&c.enable(16),C.alphaHash&&c.enable(17),C.batching&&c.enable(18),C.dispersion&&c.enable(19),C.batchingColor&&c.enable(20),C.gradientMap&&c.enable(21),w.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),w.push(c.mask)}function L(w){const C=x[w.type];let se;if(C){const O=Fi[C];se=Qy.clone(O.uniforms)}else se=w.uniforms;return se}function P(w,C){let se=g.get(C);return se!==void 0?++se.usedTimes:(se=new Qw(o,C,w,s),h.push(se),g.set(C,se)),se}function D(w){if(--w.usedTimes===0){const C=h.indexOf(w);h[C]=h[h.length-1],h.pop(),g.delete(w.cacheKey),w.destroy()}}function U(w){f.remove(w)}function N(){f.dispose()}return{getParameters:E,getProgramCacheKey:y,getUniforms:L,acquireProgram:P,releaseProgram:D,releaseShaderCache:U,programs:h,dispose:N}}function r1(){let o=new WeakMap;function e(c){return o.has(c)}function t(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function i(c){o.delete(c)}function s(c,f,d){o.get(c)[f]=d}function a(){o=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function s1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.materialVariant!==e.materialVariant?o.materialVariant-e.materialVariant:o.z!==e.z?o.z-e.z:o.id-e.id}function h0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function p0(){const o=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function c(m){let x=0;return m.isInstancedMesh&&(x+=2),m.isSkinnedMesh&&(x+=1),x}function f(m,x,M,E,y,S){let R=o[e];return R===void 0?(R={id:m.id,object:m,geometry:x,material:M,materialVariant:c(m),groupOrder:E,renderOrder:m.renderOrder,z:y,group:S},o[e]=R):(R.id=m.id,R.object=m,R.geometry=x,R.material=M,R.materialVariant=c(m),R.groupOrder=E,R.renderOrder=m.renderOrder,R.z=y,R.group=S),e++,R}function d(m,x,M,E,y,S){const R=f(m,x,M,E,y,S);M.transmission>0?i.push(R):M.transparent===!0?s.push(R):t.push(R)}function h(m,x,M,E,y,S){const R=f(m,x,M,E,y,S);M.transmission>0?i.unshift(R):M.transparent===!0?s.unshift(R):t.unshift(R)}function g(m,x){t.length>1&&t.sort(m||s1),i.length>1&&i.sort(x||h0),s.length>1&&s.sort(x||h0)}function _(){for(let m=e,x=o.length;m<x;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:d,unshift:h,finish:_,sort:g}}function o1(){let o=new WeakMap;function e(i,s){const a=o.get(i);let c;return a===void 0?(c=new p0,o.set(i,[c])):s>=a.length?(c=new p0,a.push(c)):c=a[s],c}function t(){o=new WeakMap}return{get:e,dispose:t}}function a1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new ut};break;case"SpotLight":t={position:new $,direction:new $,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=t,t}}}function l1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let c1=0;function u1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function f1(o){const e=new a1,t=l1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new $);const s=new $,a=new gt,c=new gt;function f(h){let g=0,_=0,m=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let x=0,M=0,E=0,y=0,S=0,R=0,L=0,P=0,D=0,U=0,N=0;h.sort(u1);for(let C=0,se=h.length;C<se;C++){const O=h[C],q=O.color,W=O.intensity,ee=O.distance;let Z=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===_o?Z=O.shadow.map.texture:Z=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)g+=q.r*W,_+=q.g*W,m+=q.b*W;else if(O.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(O.sh.coefficients[K],W);N++}else if(O.isDirectionalLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const X=O.shadow,J=t.get(O);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.directionalShadow[x]=J,i.directionalShadowMap[x]=Z,i.directionalShadowMatrix[x]=O.shadow.matrix,R++}i.directional[x]=K,x++}else if(O.isSpotLight){const K=e.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(q).multiplyScalar(W),K.distance=ee,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,i.spot[E]=K;const X=O.shadow;if(O.map&&(i.spotLightMap[D]=O.map,D++,X.updateMatrices(O),O.castShadow&&U++),i.spotLightMatrix[E]=X.matrix,O.castShadow){const J=t.get(O);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.spotShadow[E]=J,i.spotShadowMap[E]=Z,P++}E++}else if(O.isRectAreaLight){const K=e.get(O);K.color.copy(q).multiplyScalar(W),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),i.rectArea[y]=K,y++}else if(O.isPointLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity),K.distance=O.distance,K.decay=O.decay,O.castShadow){const X=O.shadow,J=t.get(O);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,i.pointShadow[M]=J,i.pointShadowMap[M]=Z,i.pointShadowMatrix[M]=O.shadow.matrix,L++}i.point[M]=K,M++}else if(O.isHemisphereLight){const K=e.get(O);K.skyColor.copy(O.color).multiplyScalar(W),K.groundColor.copy(O.groundColor).multiplyScalar(W),i.hemi[S]=K,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=_,i.ambient[2]=m;const w=i.hash;(w.directionalLength!==x||w.pointLength!==M||w.spotLength!==E||w.rectAreaLength!==y||w.hemiLength!==S||w.numDirectionalShadows!==R||w.numPointShadows!==L||w.numSpotShadows!==P||w.numSpotMaps!==D||w.numLightProbes!==N)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=y,i.point.length=M,i.hemi.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=P+D-U,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=N,w.directionalLength=x,w.pointLength=M,w.spotLength=E,w.rectAreaLength=y,w.hemiLength=S,w.numDirectionalShadows=R,w.numPointShadows=L,w.numSpotShadows=P,w.numSpotMaps=D,w.numLightProbes=N,i.version=c1++)}function d(h,g){let _=0,m=0,x=0,M=0,E=0;const y=g.matrixWorldInverse;for(let S=0,R=h.length;S<R;S++){const L=h[S];if(L.isDirectionalLight){const P=i.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(y),_++}else if(L.isSpotLight){const P=i.spot[x];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(y),x++}else if(L.isRectAreaLight){const P=i.rectArea[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),c.identity(),a.copy(L.matrixWorld),a.premultiply(y),c.extractRotation(a),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),m++}else if(L.isHemisphereLight){const P=i.hemi[E];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),E++}}}return{setup:f,setupView:d,state:i}}function m0(o){const e=new f1(o),t=[],i=[];function s(g){h.camera=g,t.length=0,i.length=0}function a(g){t.push(g)}function c(g){i.push(g)}function f(){e.setup(t)}function d(g){e.setupView(t,g)}const h={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:f,setupLightsView:d,pushLight:a,pushShadow:c}}function d1(o){let e=new WeakMap;function t(s,a=0){const c=e.get(s);let f;return c===void 0?(f=new m0(o),e.set(s,[f])):a>=c.length?(f=new m0(o),c.push(f)):f=c[a],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const h1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p1=`uniform sampler2D shadow_pass;
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
}`,m1=[new $(1,0,0),new $(-1,0,0),new $(0,1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1)],g1=[new $(0,-1,0),new $(0,-1,0),new $(0,0,1),new $(0,0,-1),new $(0,-1,0),new $(0,-1,0)],g0=new gt,va=new $,nd=new $;function _1(o,e,t){let i=new xh;const s=new Tt,a=new Tt,c=new Wt,f=new iS,d=new rS,h={},g=t.maxTextureSize,_={[pr]:Gn,[Gn]:pr,[Ei]:Ei},m=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:h1,fragmentShader:p1}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const M=new Qn;M.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new wn(M,m),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let S=this.type;this.render=function(U,N,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;this.type===xx&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=_c);const C=o.getRenderTarget(),se=o.getActiveCubeFace(),O=o.getActiveMipmapLevel(),q=o.state;q.setBlending(dr),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const W=S!==this.type;W&&N.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(Z=>Z.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,Z=U.length;ee<Z;ee++){const K=U[ee],X=K.shadow;if(X===void 0){Qe("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const J=X.getFrameExtents();s.multiply(J),a.copy(X.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(a.x=Math.floor(g/J.x),s.x=a.x*J.x,X.mapSize.x=a.x),s.y>g&&(a.y=Math.floor(g/J.y),s.y=a.y*J.y,X.mapSize.y=a.y));const ae=o.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ae,X.map===null||W===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ya){if(K.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Hi(s.x,s.y,{format:_o,type:mr,minFilter:sn,magFilter:sn,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new Ia(s.x,s.y,fi),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=gr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ln,X.map.depthTexture.magFilter=ln}else K.isPointLight?(X.map=new d_(s.x),X.map.depthTexture=new Zy(s.x,Wi)):(X.map=new Hi(s.x,s.y),X.map.depthTexture=new Ia(s.x,s.y,Wi)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=gr,this.type===_c?(X.map.depthTexture.compareFunction=ae?hh:dh,X.map.depthTexture.minFilter=sn,X.map.depthTexture.magFilter=sn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=ln,X.map.depthTexture.magFilter=ln);X.camera.updateProjectionMatrix()}const ce=X.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ce;k++){if(X.map.isWebGLCubeRenderTarget)o.setRenderTarget(X.map,k),o.clear();else{k===0&&(o.setRenderTarget(X.map),o.clear());const B=X.getViewport(k);c.set(a.x*B.x,a.y*B.y,a.x*B.z,a.y*B.w),q.viewport(c)}if(K.isPointLight){const B=X.camera,Ee=X.matrix,Re=K.distance||B.far;Re!==B.far&&(B.far=Re,B.updateProjectionMatrix()),va.setFromMatrixPosition(K.matrixWorld),B.position.copy(va),nd.copy(B.position),nd.add(m1[k]),B.up.copy(g1[k]),B.lookAt(nd),B.updateMatrixWorld(),Ee.makeTranslation(-va.x,-va.y,-va.z),g0.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),X._frustum.setFromProjectionMatrix(g0,B.coordinateSystem,B.reversedDepth)}else X.updateMatrices(K);i=X.getFrustum(),P(N,w,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===ya&&R(X,w),X.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(C,se,O)};function R(U,N){const w=e.update(E);m.defines.VSM_SAMPLES!==U.blurSamples&&(m.defines.VSM_SAMPLES=U.blurSamples,x.defines.VSM_SAMPLES=U.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Hi(s.x,s.y,{format:_o,type:mr})),m.uniforms.shadow_pass.value=U.map.depthTexture,m.uniforms.resolution.value=U.mapSize,m.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(N,null,w,m,E,null),x.uniforms.shadow_pass.value=U.mapPass.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(N,null,w,x,E,null)}function L(U,N,w,C){let se=null;const O=w.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(O!==void 0)se=O;else if(se=w.isPointLight===!0?d:f,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const q=se.uuid,W=N.uuid;let ee=h[q];ee===void 0&&(ee={},h[q]=ee);let Z=ee[W];Z===void 0&&(Z=se.clone(),ee[W]=Z,N.addEventListener("dispose",D)),se=Z}if(se.visible=N.visible,se.wireframe=N.wireframe,C===ya?se.side=N.shadowSide!==null?N.shadowSide:N.side:se.side=N.shadowSide!==null?N.shadowSide:_[N.side],se.alphaMap=N.alphaMap,se.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,se.map=N.map,se.clipShadows=N.clipShadows,se.clippingPlanes=N.clippingPlanes,se.clipIntersection=N.clipIntersection,se.displacementMap=N.displacementMap,se.displacementScale=N.displacementScale,se.displacementBias=N.displacementBias,se.wireframeLinewidth=N.wireframeLinewidth,se.linewidth=N.linewidth,w.isPointLight===!0&&se.isMeshDistanceMaterial===!0){const q=o.properties.get(se);q.light=w}return se}function P(U,N,w,C,se){if(U.visible===!1)return;if(U.layers.test(N.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&se===ya)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,U.matrixWorld);const W=e.update(U),ee=U.material;if(Array.isArray(ee)){const Z=W.groups;for(let K=0,X=Z.length;K<X;K++){const J=Z[K],ae=ee[J.materialIndex];if(ae&&ae.visible){const ce=L(U,ae,C,se);U.onBeforeShadow(o,U,N,w,W,ce,J),o.renderBufferDirect(w,null,W,ce,U,J),U.onAfterShadow(o,U,N,w,W,ce,J)}}}else if(ee.visible){const Z=L(U,ee,C,se);U.onBeforeShadow(o,U,N,w,W,Z,null),o.renderBufferDirect(w,null,W,Z,U,null),U.onAfterShadow(o,U,N,w,W,Z,null)}}const q=U.children;for(let W=0,ee=q.length;W<ee;W++)P(q[W],N,w,C,se)}function D(U){U.target.removeEventListener("dispose",D);for(const w in h){const C=h[w],se=U.target.uuid;se in C&&(C[se].dispose(),delete C[se])}}}function v1(o,e){function t(){let H=!1;const be=new Wt;let Me=null;const De=new Wt(0,0,0,0);return{setMask:function(Se){Me!==Se&&!H&&(o.colorMask(Se,Se,Se,Se),Me=Se)},setLocked:function(Se){H=Se},setClear:function(Se,fe,He,at,Dt){Dt===!0&&(Se*=at,fe*=at,He*=at),be.set(Se,fe,He,at),De.equals(be)===!1&&(o.clearColor(Se,fe,He,at),De.copy(be))},reset:function(){H=!1,Me=null,De.set(-1,0,0,0)}}}function i(){let H=!1,be=!1,Me=null,De=null,Se=null;return{setReversed:function(fe){if(be!==fe){const He=e.get("EXT_clip_control");fe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),be=fe;const at=Se;Se=null,this.setClear(at)}},getReversed:function(){return be},setTest:function(fe){fe?he(o.DEPTH_TEST):de(o.DEPTH_TEST)},setMask:function(fe){Me!==fe&&!H&&(o.depthMask(fe),Me=fe)},setFunc:function(fe){if(be&&(fe=ty[fe]),De!==fe){switch(fe){case cd:o.depthFunc(o.NEVER);break;case ud:o.depthFunc(o.ALWAYS);break;case fd:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case dd:o.depthFunc(o.EQUAL);break;case hd:o.depthFunc(o.GEQUAL);break;case pd:o.depthFunc(o.GREATER);break;case md:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}De=fe}},setLocked:function(fe){H=fe},setClear:function(fe){Se!==fe&&(Se=fe,be&&(fe=1-fe),o.clearDepth(fe))},reset:function(){H=!1,Me=null,De=null,Se=null,be=!1}}}function s(){let H=!1,be=null,Me=null,De=null,Se=null,fe=null,He=null,at=null,Dt=null;return{setTest:function(Rt){H||(Rt?he(o.STENCIL_TEST):de(o.STENCIL_TEST))},setMask:function(Rt){be!==Rt&&!H&&(o.stencilMask(Rt),be=Rt)},setFunc:function(Rt,ei,An){(Me!==Rt||De!==ei||Se!==An)&&(o.stencilFunc(Rt,ei,An),Me=Rt,De=ei,Se=An)},setOp:function(Rt,ei,An){(fe!==Rt||He!==ei||at!==An)&&(o.stencilOp(Rt,ei,An),fe=Rt,He=ei,at=An)},setLocked:function(Rt){H=Rt},setClear:function(Rt){Dt!==Rt&&(o.clearStencil(Rt),Dt=Rt)},reset:function(){H=!1,be=null,Me=null,De=null,Se=null,fe=null,He=null,at=null,Dt=null}}}const a=new t,c=new i,f=new s,d=new WeakMap,h=new WeakMap;let g={},_={},m=new WeakMap,x=[],M=null,E=!1,y=null,S=null,R=null,L=null,P=null,D=null,U=null,N=new ut(0,0,0),w=0,C=!1,se=null,O=null,q=null,W=null,ee=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,X=0;const J=o.getParameter(o.VERSION);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),K=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),K=X>=2);let ae=null,ce={};const k=o.getParameter(o.SCISSOR_BOX),B=o.getParameter(o.VIEWPORT),Ee=new Wt().fromArray(k),Re=new Wt().fromArray(B);function Fe(H,be,Me,De){const Se=new Uint8Array(4),fe=o.createTexture();o.bindTexture(H,fe),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let He=0;He<Me;He++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(be,0,o.RGBA,1,1,De,0,o.RGBA,o.UNSIGNED_BYTE,Se):o.texImage2D(be+He,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Se);return fe}const te={};te[o.TEXTURE_2D]=Fe(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=Fe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=Fe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=Fe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),f.setClear(0),he(o.DEPTH_TEST),c.setFunc(po),dt(!1),Vt(eg),he(o.CULL_FACE),At(dr);function he(H){g[H]!==!0&&(o.enable(H),g[H]=!0)}function de(H){g[H]!==!1&&(o.disable(H),g[H]=!1)}function Pe(H,be){return _[H]!==be?(o.bindFramebuffer(H,be),_[H]=be,H===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=be),H===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=be),!0):!1}function We(H,be){let Me=x,De=!1;if(H){Me=m.get(be),Me===void 0&&(Me=[],m.set(be,Me));const Se=H.textures;if(Me.length!==Se.length||Me[0]!==o.COLOR_ATTACHMENT0){for(let fe=0,He=Se.length;fe<He;fe++)Me[fe]=o.COLOR_ATTACHMENT0+fe;Me.length=Se.length,De=!0}}else Me[0]!==o.BACK&&(Me[0]=o.BACK,De=!0);De&&o.drawBuffers(Me)}function rt(H){return M!==H?(o.useProgram(H),M=H,!0):!1}const Zt={[xs]:o.FUNC_ADD,[Sx]:o.FUNC_SUBTRACT,[Mx]:o.FUNC_REVERSE_SUBTRACT};Zt[Ex]=o.MIN,Zt[Tx]=o.MAX;const _t={[wx]:o.ZERO,[Ax]:o.ONE,[bx]:o.SRC_COLOR,[ad]:o.SRC_ALPHA,[Nx]:o.SRC_ALPHA_SATURATE,[Lx]:o.DST_COLOR,[Cx]:o.DST_ALPHA,[Rx]:o.ONE_MINUS_SRC_COLOR,[ld]:o.ONE_MINUS_SRC_ALPHA,[Ix]:o.ONE_MINUS_DST_COLOR,[Px]:o.ONE_MINUS_DST_ALPHA,[Dx]:o.CONSTANT_COLOR,[Ux]:o.ONE_MINUS_CONSTANT_COLOR,[Fx]:o.CONSTANT_ALPHA,[Ox]:o.ONE_MINUS_CONSTANT_ALPHA};function At(H,be,Me,De,Se,fe,He,at,Dt,Rt){if(H===dr){E===!0&&(de(o.BLEND),E=!1);return}if(E===!1&&(he(o.BLEND),E=!0),H!==yx){if(H!==y||Rt!==C){if((S!==xs||P!==xs)&&(o.blendEquation(o.FUNC_ADD),S=xs,P=xs),Rt)switch(H){case uo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tg:o.blendFunc(o.ONE,o.ONE);break;case ng:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ig:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:ot("WebGLState: Invalid blending: ",H);break}else switch(H){case uo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case tg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case ng:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ig:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",H);break}R=null,L=null,D=null,U=null,N.set(0,0,0),w=0,y=H,C=Rt}return}Se=Se||be,fe=fe||Me,He=He||De,(be!==S||Se!==P)&&(o.blendEquationSeparate(Zt[be],Zt[Se]),S=be,P=Se),(Me!==R||De!==L||fe!==D||He!==U)&&(o.blendFuncSeparate(_t[Me],_t[De],_t[fe],_t[He]),R=Me,L=De,D=fe,U=He),(at.equals(N)===!1||Dt!==w)&&(o.blendColor(at.r,at.g,at.b,Dt),N.copy(at),w=Dt),y=H,C=!1}function It(H,be){H.side===Ei?de(o.CULL_FACE):he(o.CULL_FACE);let Me=H.side===Gn;be&&(Me=!Me),dt(Me),H.blending===uo&&H.transparent===!1?At(dr):At(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const De=H.stencilWrite;f.setTest(De),De&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Xt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(o.SAMPLE_ALPHA_TO_COVERAGE):de(o.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){se!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),se=H)}function Vt(H){H!==_x?(he(o.CULL_FACE),H!==O&&(H===eg?o.cullFace(o.BACK):H===vx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):de(o.CULL_FACE),O=H}function V(H){H!==q&&(K&&o.lineWidth(H),q=H)}function Xt(H,be,Me){H?(he(o.POLYGON_OFFSET_FILL),(W!==be||ee!==Me)&&(W=be,ee=Me,c.getReversed()&&(be=-be),o.polygonOffset(be,Me))):de(o.POLYGON_OFFSET_FILL)}function St(H){H?he(o.SCISSOR_TEST):de(o.SCISSOR_TEST)}function bt(H){H===void 0&&(H=o.TEXTURE0+Z-1),ae!==H&&(o.activeTexture(H),ae=H)}function Xe(H,be,Me){Me===void 0&&(ae===null?Me=o.TEXTURE0+Z-1:Me=ae);let De=ce[Me];De===void 0&&(De={type:void 0,texture:void 0},ce[Me]=De),(De.type!==H||De.texture!==be)&&(ae!==Me&&(o.activeTexture(Me),ae=Me),o.bindTexture(H,be||te[H]),De.type=H,De.texture=be)}function I(){const H=ce[ae];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function j(){try{o.compressedTexImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function pe(){try{o.texSubImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function ge(){try{o.texSubImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function ue(){try{o.compressedTexSubImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function ze(){try{o.compressedTexSubImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function Ae(){try{o.texStorage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function Ke(){try{o.texStorage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function st(){try{o.texImage2D(...arguments)}catch(H){ot("WebGLState:",H)}}function ye(){try{o.texImage3D(...arguments)}catch(H){ot("WebGLState:",H)}}function we(H){Ee.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),Ee.copy(H))}function je(H){Re.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Re.copy(H))}function Ve(H,be){let Me=h.get(be);Me===void 0&&(Me=new WeakMap,h.set(be,Me));let De=Me.get(H);De===void 0&&(De=o.getUniformBlockIndex(be,H.name),Me.set(H,De))}function Ne(H,be){const De=h.get(be).get(H);d.get(be)!==De&&(o.uniformBlockBinding(be,De,H.__bindingPointIndex),d.set(be,De))}function ft(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},ae=null,ce={},_={},m=new WeakMap,x=[],M=null,E=!1,y=null,S=null,R=null,L=null,P=null,D=null,U=null,N=new ut(0,0,0),w=0,C=!1,se=null,O=null,q=null,W=null,ee=null,Ee.set(0,0,o.canvas.width,o.canvas.height),Re.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),f.reset()}return{buffers:{color:a,depth:c,stencil:f},enable:he,disable:de,bindFramebuffer:Pe,drawBuffers:We,useProgram:rt,setBlending:At,setMaterial:It,setFlipSided:dt,setCullFace:Vt,setLineWidth:V,setPolygonOffset:Xt,setScissorTest:St,activeTexture:bt,bindTexture:Xe,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:j,texImage2D:st,texImage3D:ye,updateUBOMapping:Ve,uniformBlockBinding:Ne,texStorage2D:Ae,texStorage3D:Ke,texSubImage2D:pe,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:ze,scissor:we,viewport:je,reset:ft}}function x1(o,e,t,i,s,a,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Tt,g=new WeakMap;let _;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(I,T){return x?new OffscreenCanvas(I,T):La("canvas")}function E(I,T,j){let pe=1;const ge=Xe(I);if((ge.width>j||ge.height>j)&&(pe=j/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ue=Math.floor(pe*ge.width),ze=Math.floor(pe*ge.height);_===void 0&&(_=M(ue,ze));const Ae=T?M(ue,ze):_;return Ae.width=ue,Ae.height=ze,Ae.getContext("2d").drawImage(I,0,0,ue,ze),Qe("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+ze+")."),Ae}else return"data"in I&&Qe("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function y(I){return I.generateMipmaps}function S(I){o.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(I,T,j,pe,ge=!1){if(I!==null){if(o[I]!==void 0)return o[I];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ue=T;if(T===o.RED&&(j===o.FLOAT&&(ue=o.R32F),j===o.HALF_FLOAT&&(ue=o.R16F),j===o.UNSIGNED_BYTE&&(ue=o.R8)),T===o.RED_INTEGER&&(j===o.UNSIGNED_BYTE&&(ue=o.R8UI),j===o.UNSIGNED_SHORT&&(ue=o.R16UI),j===o.UNSIGNED_INT&&(ue=o.R32UI),j===o.BYTE&&(ue=o.R8I),j===o.SHORT&&(ue=o.R16I),j===o.INT&&(ue=o.R32I)),T===o.RG&&(j===o.FLOAT&&(ue=o.RG32F),j===o.HALF_FLOAT&&(ue=o.RG16F),j===o.UNSIGNED_BYTE&&(ue=o.RG8)),T===o.RG_INTEGER&&(j===o.UNSIGNED_BYTE&&(ue=o.RG8UI),j===o.UNSIGNED_SHORT&&(ue=o.RG16UI),j===o.UNSIGNED_INT&&(ue=o.RG32UI),j===o.BYTE&&(ue=o.RG8I),j===o.SHORT&&(ue=o.RG16I),j===o.INT&&(ue=o.RG32I)),T===o.RGB_INTEGER&&(j===o.UNSIGNED_BYTE&&(ue=o.RGB8UI),j===o.UNSIGNED_SHORT&&(ue=o.RGB16UI),j===o.UNSIGNED_INT&&(ue=o.RGB32UI),j===o.BYTE&&(ue=o.RGB8I),j===o.SHORT&&(ue=o.RGB16I),j===o.INT&&(ue=o.RGB32I)),T===o.RGBA_INTEGER&&(j===o.UNSIGNED_BYTE&&(ue=o.RGBA8UI),j===o.UNSIGNED_SHORT&&(ue=o.RGBA16UI),j===o.UNSIGNED_INT&&(ue=o.RGBA32UI),j===o.BYTE&&(ue=o.RGBA8I),j===o.SHORT&&(ue=o.RGBA16I),j===o.INT&&(ue=o.RGBA32I)),T===o.RGB&&(j===o.UNSIGNED_INT_5_9_9_9_REV&&(ue=o.RGB9_E5),j===o.UNSIGNED_INT_10F_11F_11F_REV&&(ue=o.R11F_G11F_B10F)),T===o.RGBA){const ze=ge?Ac:Et.getTransfer(pe);j===o.FLOAT&&(ue=o.RGBA32F),j===o.HALF_FLOAT&&(ue=o.RGBA16F),j===o.UNSIGNED_BYTE&&(ue=ze===Ut?o.SRGB8_ALPHA8:o.RGBA8),j===o.UNSIGNED_SHORT_4_4_4_4&&(ue=o.RGBA4),j===o.UNSIGNED_SHORT_5_5_5_1&&(ue=o.RGB5_A1)}return(ue===o.R16F||ue===o.R32F||ue===o.RG16F||ue===o.RG32F||ue===o.RGBA16F||ue===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(I,T){let j;return I?T===null||T===Wi||T===ba?j=o.DEPTH24_STENCIL8:T===fi?j=o.DEPTH32F_STENCIL8:T===Aa&&(j=o.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wi||T===ba?j=o.DEPTH_COMPONENT24:T===fi?j=o.DEPTH_COMPONENT32F:T===Aa&&(j=o.DEPTH_COMPONENT16),j}function D(I,T){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==ln&&I.minFilter!==sn?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function U(I){const T=I.target;T.removeEventListener("dispose",U),w(T),T.isVideoTexture&&g.delete(T)}function N(I){const T=I.target;T.removeEventListener("dispose",N),se(T)}function w(I){const T=i.get(I);if(T.__webglInit===void 0)return;const j=I.source,pe=m.get(j);if(pe){const ge=pe[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&C(I),Object.keys(pe).length===0&&m.delete(j)}i.remove(I)}function C(I){const T=i.get(I);o.deleteTexture(T.__webglTexture);const j=I.source,pe=m.get(j);delete pe[T.__cacheKey],c.memory.textures--}function se(I){const T=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ge=0;ge<T.__webglFramebuffer[pe].length;ge++)o.deleteFramebuffer(T.__webglFramebuffer[pe][ge]);else o.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)o.deleteFramebuffer(T.__webglFramebuffer[pe]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const j=I.textures;for(let pe=0,ge=j.length;pe<ge;pe++){const ue=i.get(j[pe]);ue.__webglTexture&&(o.deleteTexture(ue.__webglTexture),c.memory.textures--),i.remove(j[pe])}i.remove(I)}let O=0;function q(){O=0}function W(){const I=O;return I>=s.maxTextures&&Qe("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+s.maxTextures),O+=1,I}function ee(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function Z(I,T){const j=i.get(I);if(I.isVideoTexture&&St(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&j.__version!==I.version){const pe=I.image;if(pe===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{te(j,I,T);return}}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(o.TEXTURE_2D,j.__webglTexture,o.TEXTURE0+T)}function K(I,T){const j=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){te(j,I,T);return}else I.isExternalTexture&&(j.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(o.TEXTURE_2D_ARRAY,j.__webglTexture,o.TEXTURE0+T)}function X(I,T){const j=i.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&j.__version!==I.version){te(j,I,T);return}t.bindTexture(o.TEXTURE_3D,j.__webglTexture,o.TEXTURE0+T)}function J(I,T){const j=i.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&j.__version!==I.version){he(j,I,T);return}t.bindTexture(o.TEXTURE_CUBE_MAP,j.__webglTexture,o.TEXTURE0+T)}const ae={[go]:o.REPEAT,[Oi]:o.CLAMP_TO_EDGE,[wc]:o.MIRRORED_REPEAT},ce={[ln]:o.NEAREST,[B0]:o.NEAREST_MIPMAP_NEAREST,[Sa]:o.NEAREST_MIPMAP_LINEAR,[sn]:o.LINEAR,[vc]:o.LINEAR_MIPMAP_NEAREST,[ki]:o.LINEAR_MIPMAP_LINEAR},k={[Xx]:o.NEVER,[$x]:o.ALWAYS,[jx]:o.LESS,[dh]:o.LEQUAL,[qx]:o.EQUAL,[hh]:o.GEQUAL,[Yx]:o.GREATER,[Kx]:o.NOTEQUAL};function B(I,T){if(T.type===fi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===sn||T.magFilter===vc||T.magFilter===Sa||T.magFilter===ki||T.minFilter===sn||T.minFilter===vc||T.minFilter===Sa||T.minFilter===ki)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,ae[T.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,ae[T.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,ae[T.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,ce[T.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,ce[T.minFilter]),T.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,k[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ln||T.minFilter!==Sa&&T.minFilter!==ki||T.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");o.texParameterf(I,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function Ee(I,T){let j=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",U));const pe=T.source;let ge=m.get(pe);ge===void 0&&(ge={},m.set(pe,ge));const ue=ee(T);if(ue!==I.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,j=!0),ge[ue].usedTimes++;const ze=ge[I.__cacheKey];ze!==void 0&&(ge[I.__cacheKey].usedTimes--,ze.usedTimes===0&&C(T)),I.__cacheKey=ue,I.__webglTexture=ge[ue].texture}return j}function Re(I,T,j){return Math.floor(Math.floor(I/j)/T)}function Fe(I,T,j,pe){const ue=I.updateRanges;if(ue.length===0)t.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,j,pe,T.data);else{ue.sort((ye,we)=>ye.start-we.start);let ze=0;for(let ye=1;ye<ue.length;ye++){const we=ue[ze],je=ue[ye],Ve=we.start+we.count,Ne=Re(je.start,T.width,4),ft=Re(we.start,T.width,4);je.start<=Ve+1&&Ne===ft&&Re(je.start+je.count-1,T.width,4)===Ne?we.count=Math.max(we.count,je.start+je.count-we.start):(++ze,ue[ze]=je)}ue.length=ze+1;const Ae=o.getParameter(o.UNPACK_ROW_LENGTH),Ke=o.getParameter(o.UNPACK_SKIP_PIXELS),st=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let ye=0,we=ue.length;ye<we;ye++){const je=ue[ye],Ve=Math.floor(je.start/4),Ne=Math.ceil(je.count/4),ft=Ve%T.width,H=Math.floor(Ve/T.width),be=Ne,Me=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ft),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),t.texSubImage2D(o.TEXTURE_2D,0,ft,H,be,Me,j,pe,T.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ae),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ke),o.pixelStorei(o.UNPACK_SKIP_ROWS,st)}}function te(I,T,j){let pe=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=o.TEXTURE_3D);const ge=Ee(I,T),ue=T.source;t.bindTexture(pe,I.__webglTexture,o.TEXTURE0+j);const ze=i.get(ue);if(ue.version!==ze.__version||ge===!0){t.activeTexture(o.TEXTURE0+j);const Ae=Et.getPrimaries(Et.workingColorSpace),Ke=T.colorSpace===qr?null:Et.getPrimaries(T.colorSpace),st=T.colorSpace===qr||Ae===Ke?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ye=E(T.image,!1,s.maxTextureSize);ye=bt(T,ye);const we=a.convert(T.format,T.colorSpace),je=a.convert(T.type);let Ve=L(T.internalFormat,we,je,T.colorSpace,T.isVideoTexture);B(pe,T);let Ne;const ft=T.mipmaps,H=T.isVideoTexture!==!0,be=ze.__version===void 0||ge===!0,Me=ue.dataReady,De=D(T,ye);if(T.isDepthTexture)Ve=P(T.format===Ss,T.type),be&&(H?t.texStorage2D(o.TEXTURE_2D,1,Ve,ye.width,ye.height):t.texImage2D(o.TEXTURE_2D,0,Ve,ye.width,ye.height,0,we,je,null));else if(T.isDataTexture)if(ft.length>0){H&&be&&t.texStorage2D(o.TEXTURE_2D,De,Ve,ft[0].width,ft[0].height);for(let Se=0,fe=ft.length;Se<fe;Se++)Ne=ft[Se],H?Me&&t.texSubImage2D(o.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,we,je,Ne.data):t.texImage2D(o.TEXTURE_2D,Se,Ve,Ne.width,Ne.height,0,we,je,Ne.data);T.generateMipmaps=!1}else H?(be&&t.texStorage2D(o.TEXTURE_2D,De,Ve,ye.width,ye.height),Me&&Fe(T,ye,we,je)):t.texImage2D(o.TEXTURE_2D,0,Ve,ye.width,ye.height,0,we,je,ye.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){H&&be&&t.texStorage3D(o.TEXTURE_2D_ARRAY,De,Ve,ft[0].width,ft[0].height,ye.depth);for(let Se=0,fe=ft.length;Se<fe;Se++)if(Ne=ft[Se],T.format!==di)if(we!==null)if(H){if(Me)if(T.layerUpdates.size>0){const He=qg(Ne.width,Ne.height,T.format,T.type);for(const at of T.layerUpdates){const Dt=Ne.data.subarray(at*He/Ne.data.BYTES_PER_ELEMENT,(at+1)*He/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,at,Ne.width,Ne.height,1,we,Dt)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,ye.depth,we,Ne.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Se,Ve,Ne.width,Ne.height,ye.depth,0,Ne.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Me&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,ye.depth,we,je,Ne.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Se,Ve,Ne.width,Ne.height,ye.depth,0,we,je,Ne.data)}else{H&&be&&t.texStorage2D(o.TEXTURE_2D,De,Ve,ft[0].width,ft[0].height);for(let Se=0,fe=ft.length;Se<fe;Se++)Ne=ft[Se],T.format!==di?we!==null?H?Me&&t.compressedTexSubImage2D(o.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(o.TEXTURE_2D,Se,Ve,Ne.width,Ne.height,0,Ne.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Me&&t.texSubImage2D(o.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,we,je,Ne.data):t.texImage2D(o.TEXTURE_2D,Se,Ve,Ne.width,Ne.height,0,we,je,Ne.data)}else if(T.isDataArrayTexture)if(H){if(be&&t.texStorage3D(o.TEXTURE_2D_ARRAY,De,Ve,ye.width,ye.height,ye.depth),Me)if(T.layerUpdates.size>0){const Se=qg(ye.width,ye.height,T.format,T.type);for(const fe of T.layerUpdates){const He=ye.data.subarray(fe*Se/ye.data.BYTES_PER_ELEMENT,(fe+1)*Se/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,fe,ye.width,ye.height,1,we,je,He)}T.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,we,je,ye.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Ve,ye.width,ye.height,ye.depth,0,we,je,ye.data);else if(T.isData3DTexture)H?(be&&t.texStorage3D(o.TEXTURE_3D,De,Ve,ye.width,ye.height,ye.depth),Me&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,we,je,ye.data)):t.texImage3D(o.TEXTURE_3D,0,Ve,ye.width,ye.height,ye.depth,0,we,je,ye.data);else if(T.isFramebufferTexture){if(be)if(H)t.texStorage2D(o.TEXTURE_2D,De,Ve,ye.width,ye.height);else{let Se=ye.width,fe=ye.height;for(let He=0;He<De;He++)t.texImage2D(o.TEXTURE_2D,He,Ve,Se,fe,0,we,je,null),Se>>=1,fe>>=1}}else if(ft.length>0){if(H&&be){const Se=Xe(ft[0]);t.texStorage2D(o.TEXTURE_2D,De,Ve,Se.width,Se.height)}for(let Se=0,fe=ft.length;Se<fe;Se++)Ne=ft[Se],H?Me&&t.texSubImage2D(o.TEXTURE_2D,Se,0,0,we,je,Ne):t.texImage2D(o.TEXTURE_2D,Se,Ve,we,je,Ne);T.generateMipmaps=!1}else if(H){if(be){const Se=Xe(ye);t.texStorage2D(o.TEXTURE_2D,De,Ve,Se.width,Se.height)}Me&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,we,je,ye)}else t.texImage2D(o.TEXTURE_2D,0,Ve,we,je,ye);y(T)&&S(pe),ze.__version=ue.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function he(I,T,j){if(T.image.length!==6)return;const pe=Ee(I,T),ge=T.source;t.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+j);const ue=i.get(ge);if(ge.version!==ue.__version||pe===!0){t.activeTexture(o.TEXTURE0+j);const ze=Et.getPrimaries(Et.workingColorSpace),Ae=T.colorSpace===qr?null:Et.getPrimaries(T.colorSpace),Ke=T.colorSpace===qr||ze===Ae?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const st=T.isCompressedTexture||T.image[0].isCompressedTexture,ye=T.image[0]&&T.image[0].isDataTexture,we=[];for(let fe=0;fe<6;fe++)!st&&!ye?we[fe]=E(T.image[fe],!0,s.maxCubemapSize):we[fe]=ye?T.image[fe].image:T.image[fe],we[fe]=bt(T,we[fe]);const je=we[0],Ve=a.convert(T.format,T.colorSpace),Ne=a.convert(T.type),ft=L(T.internalFormat,Ve,Ne,T.colorSpace),H=T.isVideoTexture!==!0,be=ue.__version===void 0||pe===!0,Me=ge.dataReady;let De=D(T,je);B(o.TEXTURE_CUBE_MAP,T);let Se;if(st){H&&be&&t.texStorage2D(o.TEXTURE_CUBE_MAP,De,ft,je.width,je.height);for(let fe=0;fe<6;fe++){Se=we[fe].mipmaps;for(let He=0;He<Se.length;He++){const at=Se[He];T.format!==di?Ve!==null?H?Me&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,at.width,at.height,Ve,at.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,ft,at.width,at.height,0,at.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,0,0,at.width,at.height,Ve,Ne,at.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He,ft,at.width,at.height,0,Ve,Ne,at.data)}}}else{if(Se=T.mipmaps,H&&be){Se.length>0&&De++;const fe=Xe(we[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,De,ft,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ye){H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,we[fe].width,we[fe].height,Ve,Ne,we[fe].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,we[fe].width,we[fe].height,0,Ve,Ne,we[fe].data);for(let He=0;He<Se.length;He++){const Dt=Se[He].image[fe].image;H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Dt.width,Dt.height,Ve,Ne,Dt.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,ft,Dt.width,Dt.height,0,Ve,Ne,Dt.data)}}else{H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ve,Ne,we[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Ve,Ne,we[fe]);for(let He=0;He<Se.length;He++){const at=Se[He];H?Me&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,0,0,Ve,Ne,at.image[fe]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,He+1,ft,Ve,Ne,at.image[fe])}}}y(T)&&S(o.TEXTURE_CUBE_MAP),ue.__version=ge.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function de(I,T,j,pe,ge,ue){const ze=a.convert(j.format,j.colorSpace),Ae=a.convert(j.type),Ke=L(j.internalFormat,ze,Ae,j.colorSpace),st=i.get(T),ye=i.get(j);if(ye.__renderTarget=T,!st.__hasExternalTextures){const we=Math.max(1,T.width>>ue),je=Math.max(1,T.height>>ue);ge===o.TEXTURE_3D||ge===o.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,Ke,we,je,T.depth,0,ze,Ae,null):t.texImage2D(ge,ue,Ke,we,je,0,ze,Ae,null)}t.bindFramebuffer(o.FRAMEBUFFER,I),Xt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,V(T)):(ge===o.TEXTURE_2D||ge>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ge,ye.__webglTexture,ue),t.bindFramebuffer(o.FRAMEBUFFER,null)}function Pe(I,T,j){if(o.bindRenderbuffer(o.RENDERBUFFER,I),T.depthBuffer){const pe=T.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=P(T.stencilBuffer,ge),ze=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Xt(T)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(T),ue,T.width,T.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(T),ue,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ue,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ze,o.RENDERBUFFER,I)}else{const pe=T.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],ze=a.convert(ue.format,ue.colorSpace),Ae=a.convert(ue.type),Ke=L(ue.internalFormat,ze,Ae,ue.colorSpace);Xt(T)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,V(T),Ke,T.width,T.height):j?o.renderbufferStorageMultisample(o.RENDERBUFFER,V(T),Ke,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Ke,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function We(I,T,j){const pe=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(o.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=i.get(T.depthTexture);if(ge.__renderTarget=T,(!ge.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,T.depthTexture.addEventListener("dispose",U)),ge.__webglTexture===void 0){ge.__webglTexture=o.createTexture(),t.bindTexture(o.TEXTURE_CUBE_MAP,ge.__webglTexture),B(o.TEXTURE_CUBE_MAP,T.depthTexture);const st=a.convert(T.depthTexture.format),ye=a.convert(T.depthTexture.type);let we;T.depthTexture.format===gr?we=o.DEPTH_COMPONENT24:T.depthTexture.format===Ss&&(we=o.DEPTH24_STENCIL8);for(let je=0;je<6;je++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+je,0,we,T.width,T.height,0,st,ye,null)}}else Z(T.depthTexture,0);const ue=ge.__webglTexture,ze=V(T),Ae=pe?o.TEXTURE_CUBE_MAP_POSITIVE_X+j:o.TEXTURE_2D,Ke=T.depthTexture.format===Ss?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(T.depthTexture.format===gr)Xt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ke,Ae,ue,0,ze):o.framebufferTexture2D(o.FRAMEBUFFER,Ke,Ae,ue,0);else if(T.depthTexture.format===Ss)Xt(T)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Ke,Ae,ue,0,ze):o.framebufferTexture2D(o.FRAMEBUFFER,Ke,Ae,ue,0);else throw new Error("Unknown depthTexture format")}function rt(I){const T=i.get(I),j=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const pe=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=pe}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(j)for(let pe=0;pe<6;pe++)We(T.__webglFramebuffer[pe],I,pe);else{const pe=I.texture.mipmaps;pe&&pe.length>0?We(T.__webglFramebuffer[0],I,0):We(T.__webglFramebuffer,I,0)}else if(j){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=o.createRenderbuffer(),Pe(T.__webglDepthbuffer[pe],I,!1);else{const ge=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}else{const pe=I.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Pe(T.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ue=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,ge,o.RENDERBUFFER,ue)}}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(I,T,j){const pe=i.get(I);T!==void 0&&de(pe.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),j!==void 0&&rt(I)}function _t(I){const T=I.texture,j=i.get(I),pe=i.get(T);I.addEventListener("dispose",N);const ge=I.textures,ue=I.isWebGLCubeRenderTarget===!0,ze=ge.length>1;if(ze||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=T.version,c.memory.textures++),ue){j.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer[Ae]=[];for(let Ke=0;Ke<T.mipmaps.length;Ke++)j.__webglFramebuffer[Ae][Ke]=o.createFramebuffer()}else j.__webglFramebuffer[Ae]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)j.__webglFramebuffer[Ae]=o.createFramebuffer()}else j.__webglFramebuffer=o.createFramebuffer();if(ze)for(let Ae=0,Ke=ge.length;Ae<Ke;Ae++){const st=i.get(ge[Ae]);st.__webglTexture===void 0&&(st.__webglTexture=o.createTexture(),c.memory.textures++)}if(I.samples>0&&Xt(I)===!1){j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ke=ge[Ae];j.__webglColorRenderbuffer[Ae]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,j.__webglColorRenderbuffer[Ae]);const st=a.convert(Ke.format,Ke.colorSpace),ye=a.convert(Ke.type),we=L(Ke.internalFormat,st,ye,Ke.colorSpace,I.isXRRenderTarget===!0),je=V(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,je,we,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ae,o.RENDERBUFFER,j.__webglColorRenderbuffer[Ae])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),Pe(j.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ue){t.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),B(o.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ke=0;Ke<T.mipmaps.length;Ke++)de(j.__webglFramebuffer[Ae][Ke],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ke);else de(j.__webglFramebuffer[Ae],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(T)&&S(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ae=0,Ke=ge.length;Ae<Ke;Ae++){const st=ge[Ae],ye=i.get(st);let we=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(we,ye.__webglTexture),B(we,st),de(j.__webglFramebuffer,I,st,o.COLOR_ATTACHMENT0+Ae,we,0),y(st)&&S(we)}t.unbindTexture()}else{let Ae=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),B(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Ke=0;Ke<T.mipmaps.length;Ke++)de(j.__webglFramebuffer[Ke],I,T,o.COLOR_ATTACHMENT0,Ae,Ke);else de(j.__webglFramebuffer,I,T,o.COLOR_ATTACHMENT0,Ae,0);y(T)&&S(Ae),t.unbindTexture()}I.depthBuffer&&rt(I)}function At(I){const T=I.textures;for(let j=0,pe=T.length;j<pe;j++){const ge=T[j];if(y(ge)){const ue=R(I),ze=i.get(ge).__webglTexture;t.bindTexture(ue,ze),S(ue),t.unbindTexture()}}}const It=[],dt=[];function Vt(I){if(I.samples>0){if(Xt(I)===!1){const T=I.textures,j=I.width,pe=I.height;let ge=o.COLOR_BUFFER_BIT;const ue=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ze=i.get(I),Ae=T.length>1;if(Ae)for(let st=0;st<T.length;st++)t.bindFramebuffer(o.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Ke=I.texture.mipmaps;Ke&&Ke.length>0?t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let st=0;st<T.length;st++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=o.STENCIL_BUFFER_BIT)),Ae){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ze.__webglColorRenderbuffer[st]);const ye=i.get(T[st]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,ye,0)}o.blitFramebuffer(0,0,j,pe,0,0,j,pe,ge,o.NEAREST),d===!0&&(It.length=0,dt.length=0,It.push(o.COLOR_ATTACHMENT0+st),I.depthBuffer&&I.resolveDepthBuffer===!1&&(It.push(ue),dt.push(ue),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,dt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ae)for(let st=0;st<T.length;st++){t.bindFramebuffer(o.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.RENDERBUFFER,ze.__webglColorRenderbuffer[st]);const ye=i.get(T[st]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,ze.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+st,o.TEXTURE_2D,ye,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&d){const T=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function V(I){return Math.min(s.maxSamples,I.samples)}function Xt(I){const T=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function St(I){const T=c.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function bt(I,T){const j=I.colorSpace,pe=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||j!==Dn&&j!==qr&&(Et.getTransfer(j)===Ut?(pe!==di||ge!==Jn)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",j)),T}function Xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.setTexture2D=Z,this.setTexture2DArray=K,this.setTexture3D=X,this.setTextureCube=J,this.rebindTextures=Zt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=de,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function y1(o,e){function t(i,s=qr){let a;const c=Et.getTransfer(s);if(i===Jn)return o.UNSIGNED_BYTE;if(i===oh)return o.UNSIGNED_SHORT_4_4_4_4;if(i===ah)return o.UNSIGNED_SHORT_5_5_5_1;if(i===H0)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===G0)return o.UNSIGNED_INT_10F_11F_11F_REV;if(i===z0)return o.BYTE;if(i===V0)return o.SHORT;if(i===Aa)return o.UNSIGNED_SHORT;if(i===sh)return o.INT;if(i===Wi)return o.UNSIGNED_INT;if(i===fi)return o.FLOAT;if(i===mr)return o.HALF_FLOAT;if(i===W0)return o.ALPHA;if(i===X0)return o.RGB;if(i===di)return o.RGBA;if(i===gr)return o.DEPTH_COMPONENT;if(i===Ss)return o.DEPTH_STENCIL;if(i===lh)return o.RED;if(i===ch)return o.RED_INTEGER;if(i===_o)return o.RG;if(i===uh)return o.RG_INTEGER;if(i===fh)return o.RGBA_INTEGER;if(i===xc||i===yc||i===Sc||i===Mc)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===xc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===xc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sc)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mc)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===gd||i===_d||i===vd||i===xd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===gd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_d)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yd||i===Sd||i===Md||i===Ed||i===Td||i===wd||i===Ad)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===yd||i===Sd)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Md)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ed)return a.COMPRESSED_R11_EAC;if(i===Td)return a.COMPRESSED_SIGNED_R11_EAC;if(i===wd)return a.COMPRESSED_RG11_EAC;if(i===Ad)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===bd||i===Rd||i===Cd||i===Pd||i===Ld||i===Id||i===Nd||i===Dd||i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===bd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ld)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Id)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Od)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===kd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Bd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vd||i===Hd||i===Gd)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Vd)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Hd)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gd)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wd||i===Xd||i===jd||i===qd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Wd)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Xd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===jd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ba?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}const S1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M1=`
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

}`;class E1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new r_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ji({vertexShader:S1,fragmentShader:M1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wn(new Da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T1 extends Eo{constructor(e,t){super();const i=this;let s=null,a=1,c=null,f="local-floor",d=1,h=null,g=null,_=null,m=null,x=null,M=null;const E=typeof XRWebGLBinding<"u",y=new E1,S={},R=t.getContextAttributes();let L=null,P=null;const D=[],U=[],N=new Tt;let w=null;const C=new In;C.viewport=new Wt;const se=new In;se.viewport=new Wt;const O=[C,se],q=new bS;let W=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let he=D[te];return he===void 0&&(he=new Cf,D[te]=he),he.getTargetRaySpace()},this.getControllerGrip=function(te){let he=D[te];return he===void 0&&(he=new Cf,D[te]=he),he.getGripSpace()},this.getHand=function(te){let he=D[te];return he===void 0&&(he=new Cf,D[te]=he),he.getHandSpace()};function Z(te){const he=U.indexOf(te.inputSource);if(he===-1)return;const de=D[he];de!==void 0&&(de.update(te.inputSource,te.frame,h||c),de.dispatchEvent({type:te.type,data:te.inputSource}))}function K(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",K),s.removeEventListener("inputsourceschange",X);for(let te=0;te<D.length;te++){const he=U[te];he!==null&&(U[te]=null,D[te].disconnect(he))}W=null,ee=null,y.reset();for(const te in S)delete S[te];e.setRenderTarget(L),x=null,m=null,_=null,s=null,P=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(te){h=te},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return _===null&&E&&(_=new XRWebGLBinding(s,t)),_},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",K),s.addEventListener("inputsourceschange",X),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(N),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Pe=null,We=null;R.depth&&(We=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=R.stencil?Ss:gr,Pe=R.stencil?ba:Wi);const rt={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:a};_=this.getBinding(),m=_.createProjectionLayer(rt),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),P=new Hi(m.textureWidth,m.textureHeight,{format:di,type:Jn,depthTexture:new Ia(m.textureWidth,m.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const de={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};x=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),P=new Hi(x.framebufferWidth,x.framebufferHeight,{format:di,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await s.requestReferenceSpace(f),Fe.setContext(s),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(te){for(let he=0;he<te.removed.length;he++){const de=te.removed[he],Pe=U.indexOf(de);Pe>=0&&(U[Pe]=null,D[Pe].disconnect(de))}for(let he=0;he<te.added.length;he++){const de=te.added[he];let Pe=U.indexOf(de);if(Pe===-1){for(let rt=0;rt<D.length;rt++)if(rt>=U.length){U.push(de),Pe=rt;break}else if(U[rt]===null){U[rt]=de,Pe=rt;break}if(Pe===-1)break}const We=D[Pe];We&&We.connect(de)}}const J=new $,ae=new $;function ce(te,he,de){J.setFromMatrixPosition(he.matrixWorld),ae.setFromMatrixPosition(de.matrixWorld);const Pe=J.distanceTo(ae),We=he.projectionMatrix.elements,rt=de.projectionMatrix.elements,Zt=We[14]/(We[10]-1),_t=We[14]/(We[10]+1),At=(We[9]+1)/We[5],It=(We[9]-1)/We[5],dt=(We[8]-1)/We[0],Vt=(rt[8]+1)/rt[0],V=Zt*dt,Xt=Zt*Vt,St=Pe/(-dt+Vt),bt=St*-dt;if(he.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(bt),te.translateZ(St),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),We[10]===-1)te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=Zt+St,I=_t+St,T=V-bt,j=Xt+(Pe-bt),pe=At*_t/I*Xe,ge=It*_t/I*Xe;te.projectionMatrix.makePerspective(T,j,pe,ge,Xe,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function k(te,he){he===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(he.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let he=te.near,de=te.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(de=y.depthFar)),q.near=se.near=C.near=he,q.far=se.far=C.far=de,(W!==q.near||ee!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),W=q.near,ee=q.far),q.layers.mask=te.layers.mask|6,C.layers.mask=q.layers.mask&-5,se.layers.mask=q.layers.mask&-3;const Pe=te.parent,We=q.cameras;k(q,Pe);for(let rt=0;rt<We.length;rt++)k(We[rt],Pe);We.length===2?ce(q,C,se):q.projectionMatrix.copy(C.projectionMatrix),B(te,q,Pe)};function B(te,he,de){de===null?te.matrix.copy(he.matrixWorld):(te.matrix.copy(de.matrixWorld),te.matrix.invert(),te.matrix.multiply(he.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(he.projectionMatrix),te.projectionMatrixInverse.copy(he.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=vo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(m===null&&x===null))return d},this.setFoveation=function(te){d=te,m!==null&&(m.fixedFoveation=te),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(q)},this.getCameraTexture=function(te){return S[te]};let Ee=null;function Re(te,he){if(g=he.getViewerPose(h||c),M=he,g!==null){const de=g.views;x!==null&&(e.setRenderTargetFramebuffer(P,x.framebuffer),e.setRenderTarget(P));let Pe=!1;de.length!==q.cameras.length&&(q.cameras.length=0,Pe=!0);for(let _t=0;_t<de.length;_t++){const At=de[_t];let It=null;if(x!==null)It=x.getViewport(At);else{const Vt=_.getViewSubImage(m,At);It=Vt.viewport,_t===0&&(e.setRenderTargetTextures(P,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(P))}let dt=O[_t];dt===void 0&&(dt=new In,dt.layers.enable(_t),dt.viewport=new Wt,O[_t]=dt),dt.matrix.fromArray(At.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(At.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(It.x,It.y,It.width,It.height),_t===0&&(q.matrix.copy(dt.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Pe===!0&&q.cameras.push(dt)}const We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){_=i.getBinding();const _t=_.getDepthInformation(de[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,s.renderState)}if(We&&We.includes("camera-access")&&E){e.state.unbindTexture(),_=i.getBinding();for(let _t=0;_t<de.length;_t++){const At=de[_t].camera;if(At){let It=S[At];It||(It=new r_,S[At]=It);const dt=_.getCameraImage(At);It.sourceTexture=dt}}}}for(let de=0;de<D.length;de++){const Pe=U[de],We=D[de];Pe!==null&&We!==void 0&&We.update(Pe,he,h||c)}Ee&&Ee(te,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),M=null}const Fe=new f_;Fe.setAnimationLoop(Re),this.setAnimationLoop=function(te){Ee=te},this.dispose=function(){}}}const gs=new Xi,w1=new gt;function A1(o,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,s_(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,R,L,P){S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),_(y,S)):S.isMeshPhongMaterial?(a(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),m(y,S),S.isMeshPhysicalMaterial&&x(y,S,P)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),E(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?d(y,S,R,L):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Gn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Gn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),L=R.envMap,P=R.envMapRotation;L&&(y.envMap.value=L,gs.copy(P),gs.x*=-1,gs.y*=-1,gs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),y.envMapRotation.value.setFromMatrix4(w1.makeRotationFromEuler(gs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,R,L){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=L*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function _(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function m(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Gn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function E(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function b1(o,e,t,i){let s={},a={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,L){const P=L.program;i.uniformBlockBinding(R,P)}function h(R,L){let P=s[R.id];P===void 0&&(M(R),P=g(R),s[R.id]=P,R.addEventListener("dispose",y));const D=L.program;i.updateUBOMapping(R,D);const U=e.render.frame;a[R.id]!==U&&(m(R),a[R.id]=U)}function g(R){const L=_();R.__bindingPointIndex=L;const P=o.createBuffer(),D=R.__size,U=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,D,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,P),P}function _(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(R){const L=s[R.id],P=R.uniforms,D=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let U=0,N=P.length;U<N;U++){const w=Array.isArray(P[U])?P[U]:[P[U]];for(let C=0,se=w.length;C<se;C++){const O=w[C];if(x(O,U,C,D)===!0){const q=O.__offset,W=Array.isArray(O.value)?O.value:[O.value];let ee=0;for(let Z=0;Z<W.length;Z++){const K=W[Z],X=E(K);typeof K=="number"||typeof K=="boolean"?(O.__data[0]=K,o.bufferSubData(o.UNIFORM_BUFFER,q+ee,O.__data)):K.isMatrix3?(O.__data[0]=K.elements[0],O.__data[1]=K.elements[1],O.__data[2]=K.elements[2],O.__data[3]=0,O.__data[4]=K.elements[3],O.__data[5]=K.elements[4],O.__data[6]=K.elements[5],O.__data[7]=0,O.__data[8]=K.elements[6],O.__data[9]=K.elements[7],O.__data[10]=K.elements[8],O.__data[11]=0):(K.toArray(O.__data,ee),ee+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,q,O.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(R,L,P,D){const U=R.value,N=L+"_"+P;if(D[N]===void 0)return typeof U=="number"||typeof U=="boolean"?D[N]=U:D[N]=U.clone(),!0;{const w=D[N];if(typeof U=="number"||typeof U=="boolean"){if(w!==U)return D[N]=U,!0}else if(w.equals(U)===!1)return w.copy(U),!0}return!1}function M(R){const L=R.uniforms;let P=0;const D=16;for(let N=0,w=L.length;N<w;N++){const C=Array.isArray(L[N])?L[N]:[L[N]];for(let se=0,O=C.length;se<O;se++){const q=C[se],W=Array.isArray(q.value)?q.value:[q.value];for(let ee=0,Z=W.length;ee<Z;ee++){const K=W[ee],X=E(K),J=P%D,ae=J%X.boundary,ce=J+ae;P+=ae,ce!==0&&D-ce<X.storage&&(P+=D-ce),q.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=X.storage}}}const U=P%D;return U>0&&(P+=D-U),R.__size=P,R.__cache={},this}function E(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Qe("WebGLRenderer: Unsupported uniform value type.",R),L}function y(R){const L=R.target;L.removeEventListener("dispose",y);const P=c.indexOf(L.__bindingPointIndex);c.splice(P,1),o.deleteBuffer(s[L.id]),delete s[L.id],delete a[L.id]}function S(){for(const R in s)o.deleteBuffer(s[R]);c=[],s={},a={}}return{bind:d,update:h,dispose:S}}const R1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Di=null;function C1(){return Di===null&&(Di=new _h(R1,16,16,_o,mr),Di.name="DFG_LUT",Di.minFilter=sn,Di.magFilter=sn,Di.wrapS=Oi,Di.wrapT=Oi,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}class P1{constructor(e={}){const{canvas:t=Qx(),context:i=null,depth:s=!0,stencil:a=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:m=!1,outputBufferType:x=Jn}=e;this.isWebGLRenderer=!0;let M;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=i.getContextAttributes().alpha}else M=c;const E=x,y=new Set([fh,uh,ch]),S=new Set([Jn,Wi,Aa,ba,oh,ah]),R=new Uint32Array(4),L=new Int32Array(4);let P=null,D=null;const U=[],N=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let se=!1;this._outputColorSpace=gn;let O=0,q=0,W=null,ee=-1,Z=null;const K=new Wt,X=new Wt;let J=null;const ae=new ut(0);let ce=0,k=t.width,B=t.height,Ee=1,Re=null,Fe=null;const te=new Wt(0,0,k,B),he=new Wt(0,0,k,B);let de=!1;const Pe=new xh;let We=!1,rt=!1;const Zt=new gt,_t=new $,At=new Wt,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Vt(){return W===null?Ee:1}let V=i;function Xt(b,Y){return t.getContext(b,Y)}try{const b={alpha:!0,depth:s,stencil:a,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rh}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Dt,!1),V===null){const Y="webgl2";if(V=Xt(Y,b),V===null)throw Xt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ot("WebGLRenderer: "+b.message),b}let St,bt,Xe,I,T,j,pe,ge,ue,ze,Ae,Ke,st,ye,we,je,Ve,Ne,ft,H,be,Me,De;function Se(){St=new PT(V),St.init(),be=new y1(V,St),bt=new MT(V,St,e,be),Xe=new v1(V,St),bt.reversedDepthBuffer&&m&&Xe.buffers.depth.setReversed(!0),I=new NT(V),T=new r1,j=new x1(V,St,Xe,T,bt,be,I),pe=new CT(C),ge=new kS(V),Me=new yT(V,ge),ue=new LT(V,ge,I,Me),ze=new UT(V,ue,ge,Me,I),Ne=new DT(V,bt,j),we=new ET(T),Ae=new i1(C,pe,St,bt,Me,we),Ke=new A1(C,T),st=new o1,ye=new d1(St),Ve=new xT(C,pe,Xe,ze,M,d),je=new _1(C,ze,bt),De=new b1(V,I,bt,Xe),ft=new ST(V,St,I),H=new IT(V,St,I),I.programs=Ae.programs,C.capabilities=bt,C.extensions=St,C.properties=T,C.renderLists=st,C.shadowMap=je,C.state=Xe,C.info=I}Se(),E!==Jn&&(w=new OT(E,t.width,t.height,s,a));const fe=new T1(C,V);this.xr=fe,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=St.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=St.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(b){b!==void 0&&(Ee=b,this.setSize(k,B,!1))},this.getSize=function(b){return b.set(k,B)},this.setSize=function(b,Y,le=!0){if(fe.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}k=b,B=Y,t.width=Math.floor(b*Ee),t.height=Math.floor(Y*Ee),le===!0&&(t.style.width=b+"px",t.style.height=Y+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,b,Y)},this.getDrawingBufferSize=function(b){return b.set(k*Ee,B*Ee).floor()},this.setDrawingBufferSize=function(b,Y,le){k=b,B=Y,Ee=le,t.width=Math.floor(b*le),t.height=Math.floor(Y*le),this.setViewport(0,0,b,Y)},this.setEffects=function(b){if(E===Jn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let Y=0;Y<b.length;Y++)if(b[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(K)},this.getViewport=function(b){return b.copy(te)},this.setViewport=function(b,Y,le,re){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,Y,le,re),Xe.viewport(K.copy(te).multiplyScalar(Ee).round())},this.getScissor=function(b){return b.copy(he)},this.setScissor=function(b,Y,le,re){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,Y,le,re),Xe.scissor(X.copy(he).multiplyScalar(Ee).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(b){Xe.setScissorTest(de=b)},this.setOpaqueSort=function(b){Re=b},this.setTransparentSort=function(b){Fe=b},this.getClearColor=function(b){return b.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(b=!0,Y=!0,le=!0){let re=0;if(b){let ne=!1;if(W!==null){const Le=W.texture.format;ne=y.has(Le)}if(ne){const Le=W.texture.type,ke=S.has(Le),Ce=Ve.getClearColor(),Ue=Ve.getClearAlpha(),Ze=Ce.r,et=Ce.g,ht=Ce.b;ke?(R[0]=Ze,R[1]=et,R[2]=ht,R[3]=Ue,V.clearBufferuiv(V.COLOR,0,R)):(L[0]=Ze,L[1]=et,L[2]=ht,L[3]=Ue,V.clearBufferiv(V.COLOR,0,L))}else re|=V.COLOR_BUFFER_BIT}Y&&(re|=V.DEPTH_BUFFER_BIT),le&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Dt,!1),Ve.dispose(),st.dispose(),ye.dispose(),T.dispose(),pe.dispose(),ze.dispose(),Me.dispose(),De.dispose(),Ae.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",xr),fe.removeEventListener("sessionend",$r),ti.stop()};function He(b){b.preventDefault(),bc("WebGLRenderer: Context Lost."),se=!0}function at(){bc("WebGLRenderer: Context Restored."),se=!1;const b=I.autoReset,Y=je.enabled,le=je.autoUpdate,re=je.needsUpdate,ne=je.type;Se(),I.autoReset=b,je.enabled=Y,je.autoUpdate=le,je.needsUpdate=re,je.type=ne}function Dt(b){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Rt(b){const Y=b.target;Y.removeEventListener("dispose",Rt),ei(Y)}function ei(b){An(b),T.remove(b)}function An(b){const Y=T.get(b).programs;Y!==void 0&&(Y.forEach(function(le){Ae.releaseProgram(le)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,Y,le,re,ne,Le){Y===null&&(Y=It);const ke=ne.isMesh&&ne.matrixWorld.determinant()<0,Ce=ka(b,Y,le,re,ne);Xe.setMaterial(re,ke);let Ue=le.index,Ze=1;if(re.wireframe===!0){if(Ue=ue.getWireframeAttribute(le),Ue===void 0)return;Ze=2}const et=le.drawRange,ht=le.attributes.position;let Je=et.start*Ze,Nt=(et.start+et.count)*Ze;Le!==null&&(Je=Math.max(Je,Le.start*Ze),Nt=Math.min(Nt,(Le.start+Le.count)*Ze)),Ue!==null?(Je=Math.max(Je,0),Nt=Math.min(Nt,Ue.count)):ht!=null&&(Je=Math.max(Je,0),Nt=Math.min(Nt,ht.count));const Bt=Nt-Je;if(Bt<0||Bt===1/0)return;Me.setup(ne,re,Ce,le,Ue);let kt,wt=ft;if(Ue!==null&&(kt=ge.get(Ue),wt=H,wt.setIndex(kt)),ne.isMesh)re.wireframe===!0?(Xe.setLineWidth(re.wireframeLinewidth*Vt()),wt.setMode(V.LINES)):wt.setMode(V.TRIANGLES);else if(ne.isLine){let Jt=re.linewidth;Jt===void 0&&(Jt=1),Xe.setLineWidth(Jt*Vt()),ne.isLineSegments?wt.setMode(V.LINES):ne.isLineLoop?wt.setMode(V.LINE_LOOP):wt.setMode(V.LINE_STRIP)}else ne.isPoints?wt.setMode(V.POINTS):ne.isSprite&&wt.setMode(V.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)Rc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))wt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Jt=ne._multiDrawStarts,Ye=ne._multiDrawCounts,bn=ne._multiDrawCount,Mt=Ue?ge.get(Ue).bytesPerElement:1,Un=T.get(re).currentProgram.getUniforms();for(let Fn=0;Fn<bn;Fn++)Un.setValue(V,"_gl_DrawID",Fn),wt.render(Jt[Fn]/Mt,Ye[Fn])}else if(ne.isInstancedMesh)wt.renderInstances(Je,Bt,ne.count);else if(le.isInstancedBufferGeometry){const Jt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ye=Math.min(le.instanceCount,Jt);wt.renderInstances(Je,Bt,Ye)}else wt.render(Je,Bt)};function Ts(b,Y,le){b.transparent===!0&&b.side===Ei&&b.forceSinglePass===!1?(b.side=Gn,b.needsUpdate=!0,Jr(b,Y,le),b.side=pr,b.needsUpdate=!0,Jr(b,Y,le),b.side=Ei):Jr(b,Y,le)}this.compile=function(b,Y,le=null){le===null&&(le=b),D=ye.get(le),D.init(Y),N.push(D),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(D.pushLight(ne),ne.castShadow&&D.pushShadow(ne))}),b!==le&&b.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(D.pushLight(ne),ne.castShadow&&D.pushShadow(ne))}),D.setupLights();const re=new Set;return b.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Le=ne.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const Ce=Le[ke];Ts(Ce,le,ne),re.add(Ce)}else Ts(Le,le,ne),re.add(Le)}),D=N.pop(),re},this.compileAsync=function(b,Y,le=null){const re=this.compile(b,Y,le);return new Promise(ne=>{function Le(){if(re.forEach(function(ke){T.get(ke).currentProgram.isReady()&&re.delete(ke)}),re.size===0){ne(b);return}setTimeout(Le,10)}St.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Ki=null;function Oc(b){Ki&&Ki(b)}function xr(){ti.stop()}function $r(){ti.start()}const ti=new f_;ti.setAnimationLoop(Oc),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(b){Ki=b,fe.setAnimationLoop(b),b===null?ti.stop():ti.start()},fe.addEventListener("sessionstart",xr),fe.addEventListener("sessionend",$r),this.render=function(b,Y){if(Y!==void 0&&Y.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(se===!0)return;const le=fe.enabled===!0&&fe.isPresenting===!0,re=w!==null&&(W===null||le)&&w.begin(C,W);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(Y),Y=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,Y,W),D=ye.get(b,N.length),D.init(Y),N.push(D),Zt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Pe.setFromProjectionMatrix(Zt,Bi,Y.reversedDepth),rt=this.localClippingEnabled,We=we.init(this.clippingPlanes,rt),P=st.get(b,U.length),P.init(),U.push(P),fe.enabled===!0&&fe.isPresenting===!0){const ke=C.xr.getDepthSensingMesh();ke!==null&&Zr(ke,Y,-1/0,C.sortObjects)}Zr(b,Y,0,C.sortObjects),P.finish(),C.sortObjects===!0&&P.sort(Re,Fe),dt=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,dt&&Ve.addToRenderList(P,b),this.info.render.frame++,We===!0&&we.beginShadows();const ne=D.state.shadowsArray;if(je.render(ne,b,Y),We===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&w.hasRenderPass())===!1){const ke=P.opaque,Ce=P.transmissive;if(D.setupLights(),Y.isArrayCamera){const Ue=Y.cameras;if(Ce.length>0)for(let Ze=0,et=Ue.length;Ze<et;Ze++){const ht=Ue[Ze];Fa(ke,Ce,b,ht)}dt&&Ve.render(b);for(let Ze=0,et=Ue.length;Ze<et;Ze++){const ht=Ue[Ze];Ua(P,b,ht,ht.viewport)}}else Ce.length>0&&Fa(ke,Ce,b,Y),dt&&Ve.render(b),Ua(P,b,Y)}W!==null&&q===0&&(j.updateMultisampleRenderTarget(W),j.updateRenderTargetMipmap(W)),re&&w.end(C),b.isScene===!0&&b.onAfterRender(C,b,Y),Me.resetDefaultState(),ee=-1,Z=null,N.pop(),N.length>0?(D=N[N.length-1],We===!0&&we.setGlobalState(C.clippingPlanes,D.state.camera)):D=null,U.pop(),U.length>0?P=U[U.length-1]:P=null};function Zr(b,Y,le,re){if(b.visible===!1)return;if(b.layers.test(Y.layers)){if(b.isGroup)le=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Y);else if(b.isLight)D.pushLight(b),b.castShadow&&D.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Pe.intersectsSprite(b)){re&&At.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Zt);const ke=ze.update(b),Ce=b.material;Ce.visible&&P.push(b,ke,Ce,le,At.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Pe.intersectsObject(b))){const ke=ze.update(b),Ce=b.material;if(re&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),At.copy(b.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),At.copy(ke.boundingSphere.center)),At.applyMatrix4(b.matrixWorld).applyMatrix4(Zt)),Array.isArray(Ce)){const Ue=ke.groups;for(let Ze=0,et=Ue.length;Ze<et;Ze++){const ht=Ue[Ze],Je=Ce[ht.materialIndex];Je&&Je.visible&&P.push(b,ke,Je,le,At.z,ht)}}else Ce.visible&&P.push(b,ke,Ce,le,At.z,null)}}const Le=b.children;for(let ke=0,Ce=Le.length;ke<Ce;ke++)Zr(Le[ke],Y,le,re)}function Ua(b,Y,le,re){const{opaque:ne,transmissive:Le,transparent:ke}=b;D.setupLightsView(le),We===!0&&we.setGlobalState(C.clippingPlanes,le),re&&Xe.viewport(K.copy(re)),ne.length>0&&ws(ne,Y,le),Le.length>0&&ws(Le,Y,le),ke.length>0&&ws(ke,Y,le),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Fa(b,Y,le,re){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[re.id]===void 0){const Je=St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[re.id]=new Hi(1,1,{generateMipmaps:!0,type:Je?mr:Jn,minFilter:ki,samples:Math.max(4,bt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Le=D.state.transmissionRenderTarget[re.id],ke=re.viewport||K;Le.setSize(ke.z*C.transmissionResolutionScale,ke.w*C.transmissionResolutionScale);const Ce=C.getRenderTarget(),Ue=C.getActiveCubeFace(),Ze=C.getActiveMipmapLevel();C.setRenderTarget(Le),C.getClearColor(ae),ce=C.getClearAlpha(),ce<1&&C.setClearColor(16777215,.5),C.clear(),dt&&Ve.render(le);const et=C.toneMapping;C.toneMapping=Vi;const ht=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),D.setupLightsView(re),We===!0&&we.setGlobalState(C.clippingPlanes,re),ws(b,le,re),j.updateMultisampleRenderTarget(Le),j.updateRenderTargetMipmap(Le),St.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Nt=0,Bt=Y.length;Nt<Bt;Nt++){const kt=Y[Nt],{object:wt,geometry:Jt,material:Ye,group:bn}=kt;if(Ye.side===Ei&&wt.layers.test(re.layers)){const Mt=Ye.side;Ye.side=Gn,Ye.needsUpdate=!0,Ri(wt,le,re,Jt,Ye,bn),Ye.side=Mt,Ye.needsUpdate=!0,Je=!0}}Je===!0&&(j.updateMultisampleRenderTarget(Le),j.updateRenderTargetMipmap(Le))}C.setRenderTarget(Ce,Ue,Ze),C.setClearColor(ae,ce),ht!==void 0&&(re.viewport=ht),C.toneMapping=et}function ws(b,Y,le){const re=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,Le=b.length;ne<Le;ne++){const ke=b[ne],{object:Ce,geometry:Ue,group:Ze}=ke;let et=ke.material;et.allowOverride===!0&&re!==null&&(et=re),Ce.layers.test(le.layers)&&Ri(Ce,Y,le,Ue,et,Ze)}}function Ri(b,Y,le,re,ne,Le){b.onBeforeRender(C,Y,le,re,ne,Le),b.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),ne.onBeforeRender(C,Y,le,re,b,Le),ne.transparent===!0&&ne.side===Ei&&ne.forceSinglePass===!1?(ne.side=Gn,ne.needsUpdate=!0,C.renderBufferDirect(le,Y,re,ne,b,Le),ne.side=pr,ne.needsUpdate=!0,C.renderBufferDirect(le,Y,re,ne,b,Le),ne.side=Ei):C.renderBufferDirect(le,Y,re,ne,b,Le),b.onAfterRender(C,Y,le,re,ne,Le)}function Jr(b,Y,le){Y.isScene!==!0&&(Y=It);const re=T.get(b),ne=D.state.lights,Le=D.state.shadowsArray,ke=ne.state.version,Ce=Ae.getParameters(b,ne.state,Le,Y,le),Ue=Ae.getProgramCacheKey(Ce);let Ze=re.programs;re.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?Y.environment:null,re.fog=Y.fog;const et=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;re.envMap=pe.get(b.envMap||re.environment,et),re.envMapRotation=re.environment!==null&&b.envMap===null?Y.environmentRotation:b.envMapRotation,Ze===void 0&&(b.addEventListener("dispose",Rt),Ze=new Map,re.programs=Ze);let ht=Ze.get(Ue);if(ht!==void 0){if(re.currentProgram===ht&&re.lightsStateVersion===ke)return Oa(b,Ce),ht}else Ce.uniforms=Ae.getUniforms(b),b.onBeforeCompile(Ce,C),ht=Ae.acquireProgram(Ce,Ue),Ze.set(Ue,ht),re.uniforms=Ce.uniforms;const Je=re.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Je.clippingPlanes=we.uniform),Oa(b,Ce),re.needsLights=za(b),re.lightsStateVersion=ke,re.needsLights&&(Je.ambientLightColor.value=ne.state.ambient,Je.lightProbe.value=ne.state.probe,Je.directionalLights.value=ne.state.directional,Je.directionalLightShadows.value=ne.state.directionalShadow,Je.spotLights.value=ne.state.spot,Je.spotLightShadows.value=ne.state.spotShadow,Je.rectAreaLights.value=ne.state.rectArea,Je.ltc_1.value=ne.state.rectAreaLTC1,Je.ltc_2.value=ne.state.rectAreaLTC2,Je.pointLights.value=ne.state.point,Je.pointLightShadows.value=ne.state.pointShadow,Je.hemisphereLights.value=ne.state.hemi,Je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Je.spotLightMatrix.value=ne.state.spotLightMatrix,Je.spotLightMap.value=ne.state.spotLightMap,Je.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=ht,re.uniformsList=null,ht}function Po(b){if(b.uniformsList===null){const Y=b.currentProgram.getUniforms();b.uniformsList=Ec.seqWithValue(Y.seq,b.uniforms)}return b.uniformsList}function Oa(b,Y){const le=T.get(b);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function ka(b,Y,le,re,ne){Y.isScene!==!0&&(Y=It),j.resetTextureUnits();const Le=Y.fog,ke=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?Y.environment:null,Ce=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Dn,Ue=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Ze=pe.get(re.envMap||ke,Ue),et=re.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ht=!!le.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Je=!!le.morphAttributes.position,Nt=!!le.morphAttributes.normal,Bt=!!le.morphAttributes.color;let kt=Vi;re.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(kt=C.toneMapping);const wt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Jt=wt!==void 0?wt.length:0,Ye=T.get(re),bn=D.state.lights;if(We===!0&&(rt===!0||b!==Z)){const Qt=b===Z&&re.id===ee;we.setState(re,b,Qt)}let Mt=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==bn.state.version||Ye.outputColorSpace!==Ce||ne.isBatchedMesh&&Ye.batching===!1||!ne.isBatchedMesh&&Ye.batching===!0||ne.isBatchedMesh&&Ye.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Ye.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Ye.instancing===!1||!ne.isInstancedMesh&&Ye.instancing===!0||ne.isSkinnedMesh&&Ye.skinning===!1||!ne.isSkinnedMesh&&Ye.skinning===!0||ne.isInstancedMesh&&Ye.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Ye.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Ye.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Ye.instancingMorph===!1&&ne.morphTexture!==null||Ye.envMap!==Ze||re.fog===!0&&Ye.fog!==Le||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==we.numPlanes||Ye.numIntersection!==we.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==ht||Ye.morphTargets!==Je||Ye.morphNormals!==Nt||Ye.morphColors!==Bt||Ye.toneMapping!==kt||Ye.morphTargetsCount!==Jt)&&(Mt=!0):(Mt=!0,Ye.__version=re.version);let Un=Ye.currentProgram;Mt===!0&&(Un=Jr(re,Y,ne));let Fn=!1,Xn=!1,yr=!1;const Lt=Un.getUniforms(),lt=Ye.uniforms;if(Xe.useProgram(Un.program)&&(Fn=!0,Xn=!0,yr=!0),re.id!==ee&&(ee=re.id,Xn=!0),Fn||Z!==b){Xe.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Lt.setValue(V,"projectionMatrix",b.projectionMatrix),Lt.setValue(V,"viewMatrix",b.matrixWorldInverse);const ni=Lt.map.cameraPosition;ni!==void 0&&ni.setValue(V,_t.setFromMatrixPosition(b.matrixWorld)),bt.logarithmicDepthBuffer&&Lt.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Lt.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),Z!==b&&(Z=b,Xn=!0,yr=!0)}if(Ye.needsLights&&(bn.state.directionalShadowMap.length>0&&Lt.setValue(V,"directionalShadowMap",bn.state.directionalShadowMap,j),bn.state.spotShadowMap.length>0&&Lt.setValue(V,"spotShadowMap",bn.state.spotShadowMap,j),bn.state.pointShadowMap.length>0&&Lt.setValue(V,"pointShadowMap",bn.state.pointShadowMap,j)),ne.isSkinnedMesh){Lt.setOptional(V,ne,"bindMatrix"),Lt.setOptional(V,ne,"bindMatrixInverse");const Qt=ne.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),Lt.setValue(V,"boneTexture",Qt.boneTexture,j))}ne.isBatchedMesh&&(Lt.setOptional(V,ne,"batchingTexture"),Lt.setValue(V,"batchingTexture",ne._matricesTexture,j),Lt.setOptional(V,ne,"batchingIdTexture"),Lt.setValue(V,"batchingIdTexture",ne._indirectTexture,j),Lt.setOptional(V,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Lt.setValue(V,"batchingColorTexture",ne._colorsTexture,j));const hi=le.morphAttributes;if((hi.position!==void 0||hi.normal!==void 0||hi.color!==void 0)&&Ne.update(ne,le,Un),(Xn||Ye.receiveShadow!==ne.receiveShadow)&&(Ye.receiveShadow=ne.receiveShadow,Lt.setValue(V,"receiveShadow",ne.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&Y.environment!==null&&(lt.envMapIntensity.value=Y.environmentIntensity),lt.dfgLUT!==void 0&&(lt.dfgLUT.value=C1()),Xn&&(Lt.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&Ba(lt,yr),Le&&re.fog===!0&&Ke.refreshFogUniforms(lt,Le),Ke.refreshMaterialUniforms(lt,re,Ee,B,D.state.transmissionRenderTarget[b.id]),Ec.upload(V,Po(Ye),lt,j)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ec.upload(V,Po(Ye),lt,j),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Lt.setValue(V,"center",ne.center),Lt.setValue(V,"modelViewMatrix",ne.modelViewMatrix),Lt.setValue(V,"normalMatrix",ne.normalMatrix),Lt.setValue(V,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const Qt=re.uniformsGroups;for(let ni=0,$i=Qt.length;ni<$i;ni++){const Lo=Qt[ni];De.update(Lo,Un),De.bind(Lo,Un)}}return Un}function Ba(b,Y){b.ambientLightColor.needsUpdate=Y,b.lightProbe.needsUpdate=Y,b.directionalLights.needsUpdate=Y,b.directionalLightShadows.needsUpdate=Y,b.pointLights.needsUpdate=Y,b.pointLightShadows.needsUpdate=Y,b.spotLights.needsUpdate=Y,b.spotLightShadows.needsUpdate=Y,b.rectAreaLights.needsUpdate=Y,b.hemisphereLights.needsUpdate=Y}function za(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(b,Y,le){const re=T.get(b);re.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),T.get(b.texture).__webglTexture=Y,T.get(b.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:le,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Y){const le=T.get(b);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Va=V.createFramebuffer();this.setRenderTarget=function(b,Y=0,le=0){W=b,O=Y,q=le;let re=null,ne=!1,Le=!1;if(b){const Ce=T.get(b);if(Ce.__useDefaultFramebuffer!==void 0){Xe.bindFramebuffer(V.FRAMEBUFFER,Ce.__webglFramebuffer),K.copy(b.viewport),X.copy(b.scissor),J=b.scissorTest,Xe.viewport(K),Xe.scissor(X),Xe.setScissorTest(J),ee=-1;return}else if(Ce.__webglFramebuffer===void 0)j.setupRenderTarget(b);else if(Ce.__hasExternalTextures)j.rebindTextures(b,T.get(b.texture).__webglTexture,T.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const et=b.depthTexture;if(Ce.__boundDepthTexture!==et){if(et!==null&&T.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(b)}}const Ue=b.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Le=!0);const Ze=T.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ze[Y])?re=Ze[Y][le]:re=Ze[Y],ne=!0):b.samples>0&&j.useMultisampledRTT(b)===!1?re=T.get(b).__webglMultisampledFramebuffer:Array.isArray(Ze)?re=Ze[le]:re=Ze,K.copy(b.viewport),X.copy(b.scissor),J=b.scissorTest}else K.copy(te).multiplyScalar(Ee).floor(),X.copy(he).multiplyScalar(Ee).floor(),J=de;if(le!==0&&(re=Va),Xe.bindFramebuffer(V.FRAMEBUFFER,re)&&Xe.drawBuffers(b,re),Xe.viewport(K),Xe.scissor(X),Xe.setScissorTest(J),ne){const Ce=T.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce.__webglTexture,le)}else if(Le){const Ce=Y;for(let Ue=0;Ue<b.textures.length;Ue++){const Ze=T.get(b.textures[Ue]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ue,Ze.__webglTexture,le,Ce)}}else if(b!==null&&le!==0){const Ce=T.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ce.__webglTexture,le)}ee=-1},this.readRenderTargetPixels=function(b,Y,le,re,ne,Le,ke,Ce=0){if(!(b&&b.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ke!==void 0&&(Ue=Ue[ke]),Ue){Xe.bindFramebuffer(V.FRAMEBUFFER,Ue);try{const Ze=b.textures[Ce],et=Ze.format,ht=Ze.type;if(b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),!bt.textureFormatReadable(et)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(ht)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=b.width-re&&le>=0&&le<=b.height-ne&&V.readPixels(Y,le,re,ne,be.convert(et),be.convert(ht),Le)}finally{const Ze=W!==null?T.get(W).__webglFramebuffer:null;Xe.bindFramebuffer(V.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(b,Y,le,re,ne,Le,ke,Ce=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=T.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ke!==void 0&&(Ue=Ue[ke]),Ue)if(Y>=0&&Y<=b.width-re&&le>=0&&le<=b.height-ne){Xe.bindFramebuffer(V.FRAMEBUFFER,Ue);const Ze=b.textures[Ce],et=Ze.format,ht=Ze.type;if(b.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),!bt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Je),V.bufferData(V.PIXEL_PACK_BUFFER,Le.byteLength,V.STREAM_READ),V.readPixels(Y,le,re,ne,be.convert(et),be.convert(ht),0);const Nt=W!==null?T.get(W).__webglFramebuffer:null;Xe.bindFramebuffer(V.FRAMEBUFFER,Nt);const Bt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await ey(V,Bt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Je),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Le),V.deleteBuffer(Je),V.deleteSync(Bt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Y=null,le=0){const re=Math.pow(2,-le),ne=Math.floor(b.image.width*re),Le=Math.floor(b.image.height*re),ke=Y!==null?Y.x:0,Ce=Y!==null?Y.y:0;j.setTexture2D(b,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,ke,Ce,ne,Le),Xe.unbindTexture()};const kc=V.createFramebuffer(),Bc=V.createFramebuffer();this.copyTextureToTexture=function(b,Y,le=null,re=null,ne=0,Le=0){let ke,Ce,Ue,Ze,et,ht,Je,Nt,Bt;const kt=b.isCompressedTexture?b.mipmaps[Le]:b.image;if(le!==null)ke=le.max.x-le.min.x,Ce=le.max.y-le.min.y,Ue=le.isBox3?le.max.z-le.min.z:1,Ze=le.min.x,et=le.min.y,ht=le.isBox3?le.min.z:0;else{const lt=Math.pow(2,-ne);ke=Math.floor(kt.width*lt),Ce=Math.floor(kt.height*lt),b.isDataArrayTexture?Ue=kt.depth:b.isData3DTexture?Ue=Math.floor(kt.depth*lt):Ue=1,Ze=0,et=0,ht=0}re!==null?(Je=re.x,Nt=re.y,Bt=re.z):(Je=0,Nt=0,Bt=0);const wt=be.convert(Y.format),Jt=be.convert(Y.type);let Ye;Y.isData3DTexture?(j.setTexture3D(Y,0),Ye=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(j.setTexture2DArray(Y,0),Ye=V.TEXTURE_2D_ARRAY):(j.setTexture2D(Y,0),Ye=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const bn=V.getParameter(V.UNPACK_ROW_LENGTH),Mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Un=V.getParameter(V.UNPACK_SKIP_PIXELS),Fn=V.getParameter(V.UNPACK_SKIP_ROWS),Xn=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,kt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,kt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ze),V.pixelStorei(V.UNPACK_SKIP_ROWS,et),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ht);const yr=b.isDataArrayTexture||b.isData3DTexture,Lt=Y.isDataArrayTexture||Y.isData3DTexture;if(b.isDepthTexture){const lt=T.get(b),hi=T.get(Y),Qt=T.get(lt.__renderTarget),ni=T.get(hi.__renderTarget);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,Qt.__webglFramebuffer),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let $i=0;$i<Ue;$i++)yr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(b).__webglTexture,ne,ht+$i),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,T.get(Y).__webglTexture,Le,Bt+$i)),V.blitFramebuffer(Ze,et,ke,Ce,Je,Nt,ke,Ce,V.DEPTH_BUFFER_BIT,V.NEAREST);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ne!==0||b.isRenderTargetTexture||T.has(b)){const lt=T.get(b),hi=T.get(Y);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,kc),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Bc);for(let Qt=0;Qt<Ue;Qt++)yr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,lt.__webglTexture,ne,ht+Qt):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,lt.__webglTexture,ne),Lt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hi.__webglTexture,Le,Bt+Qt):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hi.__webglTexture,Le),ne!==0?V.blitFramebuffer(Ze,et,ke,Ce,Je,Nt,ke,Ce,V.COLOR_BUFFER_BIT,V.NEAREST):Lt?V.copyTexSubImage3D(Ye,Le,Je,Nt,Bt+Qt,Ze,et,ke,Ce):V.copyTexSubImage2D(Ye,Le,Je,Nt,Ze,et,ke,Ce);Xe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Lt?b.isDataTexture||b.isData3DTexture?V.texSubImage3D(Ye,Le,Je,Nt,Bt,ke,Ce,Ue,wt,Jt,kt.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Ye,Le,Je,Nt,Bt,ke,Ce,Ue,wt,kt.data):V.texSubImage3D(Ye,Le,Je,Nt,Bt,ke,Ce,Ue,wt,Jt,kt):b.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Le,Je,Nt,ke,Ce,wt,Jt,kt.data):b.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Le,Je,Nt,kt.width,kt.height,wt,kt.data):V.texSubImage2D(V.TEXTURE_2D,Le,Je,Nt,ke,Ce,wt,Jt,kt);V.pixelStorei(V.UNPACK_ROW_LENGTH,bn),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Un),V.pixelStorei(V.UNPACK_SKIP_ROWS,Fn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Xn),Le===0&&Y.generateMipmaps&&V.generateMipmap(Ye),Xe.unbindTexture()},this.initRenderTarget=function(b){T.get(b).__webglFramebuffer===void 0&&j.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?j.setTextureCube(b,0):b.isData3DTexture?j.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?j.setTexture2DArray(b,0):j.setTexture2D(b,0),Xe.unbindTexture()},this.resetState=function(){O=0,q=0,W=null,Xe.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}function _0(o,e){if(e===Hx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),o;if(e===Yd||e===j0){let t=o.getIndex();if(t===null){const c=[],f=o.getAttribute("position");if(f!==void 0){for(let d=0;d<f.count;d++)c.push(d);o.setIndex(c),t=o.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,s=[];if(e===Yd)for(let c=1;c<=i;c++)s.push(t.getX(0)),s.push(t.getX(c)),s.push(t.getX(c+1));else for(let c=0;c<i;c++)c%2===0?(s.push(t.getX(c)),s.push(t.getX(c+1)),s.push(t.getX(c+2))):(s.push(t.getX(c+2)),s.push(t.getX(c+1)),s.push(t.getX(c)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=o.clone();return a.setIndex(s),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),o}function L1(o){const e=new Map,t=new Map,i=o.clone();return __(o,i,function(s,a){e.set(a,s),t.set(s,a)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;const a=s,c=e.get(s),f=c.skeleton.bones;a.skeleton=c.skeleton.clone(),a.bindMatrix.copy(c.bindMatrix),a.skeleton.bones=f.map(function(d){return t.get(d)}),a.bind(a.skeleton,a.bindMatrix)}),i}function __(o,e,t){t(o,e);for(let i=0;i<o.children.length;i++)__(o.children[i],e.children[i],t)}class I1 extends Ro{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new O1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new K1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new F1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new B1(t)}),this.register(function(t){return new j1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new D1(t)}),this.register(function(t){return new v0(t,xt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new v0(t,xt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new $1(t)})}load(e,t,i,s){const a=this;let c;if(this.resourcePath!=="")c=this.resourcePath;else if(this.path!==""){const h=wa.extractUrlBase(e);c=wa.resolveURL(h,this.path)}else c=wa.extractUrlBase(e);this.manager.itemStart(e);const f=function(h){s?s(h):console.error(h),a.manager.itemError(e),a.manager.itemEnd(e)},d=new l_(this.manager);d.setPath(this.path),d.setResponseType("arraybuffer"),d.setRequestHeader(this.requestHeader),d.setWithCredentials(this.withCredentials),d.load(e,function(h){try{a.parse(h,c,function(g){t(g),a.manager.itemEnd(e)},f)}catch(g){f(g)}},i,f)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let a;const c={},f={},d=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(d.decode(new Uint8Array(e,0,4))===v_){try{c[xt.KHR_BINARY_GLTF]=new Z1(e)}catch(_){s&&s(_);return}a=JSON.parse(c[xt.KHR_BINARY_GLTF].content)}else a=JSON.parse(d.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new uA(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let g=0;g<this.pluginCallbacks.length;g++){const _=this.pluginCallbacks[g](h);_.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),f[_.name]=_,c[_.name]=!0}if(a.extensionsUsed)for(let g=0;g<a.extensionsUsed.length;++g){const _=a.extensionsUsed[g],m=a.extensionsRequired||[];switch(_){case xt.KHR_MATERIALS_UNLIT:c[_]=new U1;break;case xt.KHR_DRACO_MESH_COMPRESSION:c[_]=new J1(a,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:c[_]=new Q1;break;case xt.KHR_MESH_QUANTIZATION:c[_]=new eA;break;default:m.indexOf(_)>=0&&f[_]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+_+'".')}}h.setExtensions(c),h.setPlugins(f),h.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,a){i.parse(e,t,s,a)})}}function N1(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}function tn(o,e,t){const i=o.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class D1{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const a=t.json,d=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let h;const g=new ut(16777215);d.color!==void 0&&g.setRGB(d.color[0],d.color[1],d.color[2],Dn);const _=d.range!==void 0?d.range:0;switch(d.type){case"directional":h=new u_(g),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new MS(g),h.distance=_;break;case"spot":h=new yS(g),h.distance=_,d.spot=d.spot||{},d.spot.innerConeAngle=d.spot.innerConeAngle!==void 0?d.spot.innerConeAngle:0,d.spot.outerConeAngle=d.spot.outerConeAngle!==void 0?d.spot.outerConeAngle:Math.PI/4,h.angle=d.spot.outerConeAngle,h.penumbra=1-d.spot.innerConeAngle/d.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+d.type)}return h.position.set(0,0,0),Ui(h,d),d.intensity!==void 0&&(h.intensity=d.intensity),h.name=t.createUniqueName(d.name||"light_"+e),s=Promise.resolve(h),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,a=i.json.nodes[e],f=(a.extensions&&a.extensions[this.name]||{}).light;return f===void 0?null:this._loadLight(f).then(function(d){return i._getNodeRef(t.cache,f,d)})}}class U1{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Yr}extendParams(e,t,i){const s=[];e.color=new ut(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const c=a.baseColorFactor;e.color.setRGB(c[0],c[1],c[2],Dn),e.opacity=c[3]}a.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",a.baseColorTexture,gn))}return Promise.all(s)}}class F1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class O1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const a=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Tt(a,a)}return Promise.all(s)}}class k1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class B1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}}class z1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];if(t.sheenColor=new ut(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const a=i.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Dn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,gn)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}}class V1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(s)}}class H1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const a=i.attenuationColor||[1,1,1];return t.attenuationColor=new ut().setRGB(a[0],a[1],a[2],Dn),Promise.all(s)}}class G1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}}class W1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const a=i.specularColorFactor||[1,1,1];return t.specularColor=new ut().setRGB(a[0],a[1],a[2],Dn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,gn)),Promise.all(s)}}class X1{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(s)}}class j1{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return tn(this.parser,e,this.name)!==null?Yi:null}extendMaterialParams(e,t){const i=tn(this.parser,e,this.name);if(i===null)return Promise.resolve();const s=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}}class q1{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const a=s.extensions[this.name],c=t.options.ktx2Loader;if(!c){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,c)}}class Y1{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],f=s.images[c.source];let d=i.textureLoader;if(f.uri){const h=i.options.manager.getHandler(f.uri);h!==null&&(d=h)}return i.loadTextureImage(e,c.source,d)}}class K1{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,s=i.json,a=s.textures[e];if(!a.extensions||!a.extensions[t])return null;const c=a.extensions[t],f=s.images[c.source];let d=i.textureLoader;if(f.uri){const h=i.options.manager.getHandler(f.uri);h!==null&&(d=h)}return i.loadTextureImage(e,c.source,d)}}class v0{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],a=this.parser.getDependency("buffer",s.buffer),c=this.parser.options.meshoptDecoder;if(!c||!c.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(f){const d=s.byteOffset||0,h=s.byteLength||0,g=s.count,_=s.byteStride,m=new Uint8Array(f,d,h);return c.decodeGltfBufferAsync?c.decodeGltfBufferAsync(g,_,m,s.mode,s.filter).then(function(x){return x.buffer}):c.ready.then(function(){const x=new ArrayBuffer(g*_);return c.decodeGltfBuffer(new Uint8Array(x),g,_,m,s.mode,s.filter),x})})}else return null}}class $1{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const h of s.primitives)if(h.mode!==ui.TRIANGLES&&h.mode!==ui.TRIANGLE_STRIP&&h.mode!==ui.TRIANGLE_FAN&&h.mode!==void 0)return null;const c=i.extensions[this.name].attributes,f=[],d={};for(const h in c)f.push(this.parser.getDependency("accessor",c[h]).then(g=>(d[h]=g,d[h])));return f.length<1?null:(f.push(this.parser.createNodeMesh(e)),Promise.all(f).then(h=>{const g=h.pop(),_=g.isGroup?g.children:[g],m=h[0].count,x=[];for(const M of _){const E=new gt,y=new $,S=new _r,R=new $(1,1,1),L=new Gy(M.geometry,M.material,m);for(let P=0;P<m;P++)d.TRANSLATION&&y.fromBufferAttribute(d.TRANSLATION,P),d.ROTATION&&S.fromBufferAttribute(d.ROTATION,P),d.SCALE&&R.fromBufferAttribute(d.SCALE,P),L.setMatrixAt(P,E.compose(y,S,R));for(const P in d)if(P==="_COLOR_0"){const D=d[P];L.instanceColor=new $d(D.array,D.itemSize,D.normalized)}else P!=="TRANSLATION"&&P!=="ROTATION"&&P!=="SCALE"&&M.geometry.setAttribute(P,d[P]);Kt.prototype.copy.call(L,M),this.parser.assignFinalMaterial(L),x.push(L)}return g.isGroup?(g.clear(),g.add(...x),g):x[0]}))}}const v_="glTF",xa=12,x0={JSON:1313821514,BIN:5130562};class Z1{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xa),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==v_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-xa,a=new DataView(e,xa);let c=0;for(;c<s;){const f=a.getUint32(c,!0);c+=4;const d=a.getUint32(c,!0);if(c+=4,d===x0.JSON){const h=new Uint8Array(e,xa+c,f);this.content=i.decode(h)}else if(d===x0.BIN){const h=xa+c;this.body=e.slice(h,h+f)}c+=f}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class J1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,a=e.extensions[this.name].bufferView,c=e.extensions[this.name].attributes,f={},d={},h={};for(const g in c){const _=eh[g]||g.toLowerCase();f[_]=c[g]}for(const g in e.attributes){const _=eh[g]||g.toLowerCase();if(c[g]!==void 0){const m=i.accessors[e.attributes[g]],x=ho[m.componentType];h[_]=x.name,d[_]=m.normalized===!0}}return t.getDependency("bufferView",a).then(function(g){return new Promise(function(_,m){s.decodeDracoFile(g,function(x){for(const M in x.attributes){const E=x.attributes[M],y=d[M];y!==void 0&&(E.normalized=y)}_(x)},f,h,Dn,m)})})}}class Q1{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class eA{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class x_ extends wo{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,a=e*s*3+s;for(let c=0;c!==s;c++)t[c]=i[a+c];return t}interpolate_(e,t,i,s){const a=this.resultBuffer,c=this.sampleValues,f=this.valueSize,d=f*2,h=f*3,g=s-t,_=(i-t)/g,m=_*_,x=m*_,M=e*h,E=M-h,y=-2*x+3*m,S=x-m,R=1-y,L=S-m+_;for(let P=0;P!==f;P++){const D=c[E+P+f],U=c[E+P+d]*g,N=c[M+P+f],w=c[M+P]*g;a[P]=R*D+L*U+y*N+S*w}return a}}const tA=new _r;class nA extends x_{interpolate_(e,t,i,s){const a=super.interpolate_(e,t,i,s);return tA.fromArray(a).normalize().toArray(a),a}}const ui={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ho={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},y0={9728:ln,9729:sn,9984:B0,9985:vc,9986:Sa,9987:ki},S0={33071:Oi,33648:wc,10497:go},id={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},eh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iA={CUBICSPLINE:void 0,LINEAR:Ca,STEP:Ra},rd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rA(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new Na({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:pr})),o.DefaultMaterial}function _s(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ui(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sA(o,e,t){let i=!1,s=!1,a=!1;for(let h=0,g=e.length;h<g;h++){const _=e[h];if(_.POSITION!==void 0&&(i=!0),_.NORMAL!==void 0&&(s=!0),_.COLOR_0!==void 0&&(a=!0),i&&s&&a)break}if(!i&&!s&&!a)return Promise.resolve(o);const c=[],f=[],d=[];for(let h=0,g=e.length;h<g;h++){const _=e[h];if(i){const m=_.POSITION!==void 0?t.getDependency("accessor",_.POSITION):o.attributes.position;c.push(m)}if(s){const m=_.NORMAL!==void 0?t.getDependency("accessor",_.NORMAL):o.attributes.normal;f.push(m)}if(a){const m=_.COLOR_0!==void 0?t.getDependency("accessor",_.COLOR_0):o.attributes.color;d.push(m)}}return Promise.all([Promise.all(c),Promise.all(f),Promise.all(d)]).then(function(h){const g=h[0],_=h[1],m=h[2];return i&&(o.morphAttributes.position=g),s&&(o.morphAttributes.normal=_),a&&(o.morphAttributes.color=m),o.morphTargetsRelative=!0,o})}function oA(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aA(o){let e;const t=o.extensions&&o.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+sd(t.attributes):e=o.indices+":"+sd(o.attributes)+":"+o.mode,o.targets!==void 0)for(let i=0,s=o.targets.length;i<s;i++)e+=":"+sd(o.targets[i]);return e}function sd(o){let e="";const t=Object.keys(o).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+o[t[i]]+";";return e}function th(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lA(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":o.search(/\.ktx2($|\?)/i)>0||o.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const cA=new gt;class uA{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new N1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,a=!1,c=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const f=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(f)===!0;const d=f.match(/Version\/(\d+)/);s=i&&d?parseInt(d[1],10):-1,a=f.indexOf("Firefox")>-1,c=a?f.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||a&&c<98?this.textureLoader=new vS(this.options.manager):this.textureLoader=new wS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new l_(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(c){return c._markDefs&&c._markDefs()}),Promise.all(this._invokeAll(function(c){return c.beforeRoot&&c.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(c){const f={scene:c[0][s.scene||0],scenes:c[0],animations:c[1],cameras:c[2],asset:s.asset,parser:i,userData:{}};return _s(a,f,s),Ui(f,s),Promise.all(i._invokeAll(function(d){return d.afterRoot&&d.afterRoot(f)})).then(function(){for(const d of f.scenes)d.updateMatrixWorld();e(f)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,a=t.length;s<a;s++){const c=t[s].joints;for(let f=0,d=c.length;f<d;f++)e[c[f]].isBone=!0}for(let s=0,a=e.length;s<a;s++){const c=e[s];c.mesh!==void 0&&(this._addNodeRef(this.meshCache,c.mesh),c.skin!==void 0&&(i[c.mesh].isSkinnedMesh=!0)),c.camera!==void 0&&this._addNodeRef(this.cameraCache,c.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),a=(c,f)=>{const d=this.associations.get(c);d!=null&&this.associations.set(f,d);for(const[h,g]of c.children.entries())a(g,f.children[h])};return a(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const a=e(t[s]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":s=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(a,c){return i.getDependency(e,c)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(a,c){i.load(wa.resolveURL(t.uri,s.path),a,void 0,function(){c(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const c=id[s.type],f=ho[s.componentType],d=s.normalized===!0,h=new f(s.count*c);return Promise.resolve(new Nn(h,c,d))}const a=[];return s.bufferView!==void 0?a.push(this.getDependency("bufferView",s.bufferView)):a.push(null),s.sparse!==void 0&&(a.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(a).then(function(c){const f=c[0],d=id[s.type],h=ho[s.componentType],g=h.BYTES_PER_ELEMENT,_=g*d,m=s.byteOffset||0,x=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,M=s.normalized===!0;let E,y;if(x&&x!==_){const S=Math.floor(m/x),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+S+":"+s.count;let L=t.cache.get(R);L||(E=new h(f,S*x,s.count*x/g),L=new Fy(E,x/g),t.cache.add(R,L)),y=new gh(L,d,m%x/g,M)}else f===null?E=new h(s.count*d):E=new h(f,m,s.count*d),y=new Nn(E,d,M);if(s.sparse!==void 0){const S=id.SCALAR,R=ho[s.sparse.indices.componentType],L=s.sparse.indices.byteOffset||0,P=s.sparse.values.byteOffset||0,D=new R(c[1],L,s.sparse.count*S),U=new h(c[2],P,s.sparse.count*d);f!==null&&(y=new Nn(y.array.slice(),y.itemSize,y.normalized)),y.normalized=!1;for(let N=0,w=D.length;N<w;N++){const C=D[N];if(y.setX(C,U[N*d]),d>=2&&y.setY(C,U[N*d+1]),d>=3&&y.setZ(C,U[N*d+2]),d>=4&&y.setW(C,U[N*d+3]),d>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}y.normalized=M}return y})}loadTexture(e){const t=this.json,i=this.options,a=t.textures[e].source,c=t.images[a];let f=this.textureLoader;if(c.uri){const d=i.manager.getHandler(c.uri);d!==null&&(f=d)}return this.loadTextureImage(e,a,f)}loadTextureImage(e,t,i){const s=this,a=this.json,c=a.textures[e],f=a.images[t],d=(f.uri||f.bufferView)+":"+c.sampler;if(this.textureCache[d])return this.textureCache[d];const h=this.loadImageSource(t,i).then(function(g){g.flipY=!1,g.name=c.name||f.name||"",g.name===""&&typeof f.uri=="string"&&f.uri.startsWith("data:image/")===!1&&(g.name=f.uri);const m=(a.samplers||{})[c.sampler]||{};return g.magFilter=y0[m.magFilter]||sn,g.minFilter=y0[m.minFilter]||ki,g.wrapS=S0[m.wrapS]||go,g.wrapT=S0[m.wrapT]||go,g.generateMipmaps=!g.isCompressedTexture&&g.minFilter!==ln&&g.minFilter!==sn,s.associations.set(g,{textures:e}),g}).catch(function(){return null});return this.textureCache[d]=h,h}loadImageSource(e,t){const i=this,s=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(_=>_.clone());const c=s.images[e],f=self.URL||self.webkitURL;let d=c.uri||"",h=!1;if(c.bufferView!==void 0)d=i.getDependency("bufferView",c.bufferView).then(function(_){h=!0;const m=new Blob([_],{type:c.mimeType});return d=f.createObjectURL(m),d});else if(c.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const g=Promise.resolve(d).then(function(_){return new Promise(function(m,x){let M=m;t.isImageBitmapLoader===!0&&(M=function(E){const y=new cn(E);y.needsUpdate=!0,m(y)}),t.load(wa.resolveURL(_,a.path),M,void 0,x)})}).then(function(_){return h===!0&&f.revokeObjectURL(d),Ui(_,c),_.userData.mimeType=c.mimeType||lA(c.uri),_}).catch(function(_){throw console.error("THREE.GLTFLoader: Couldn't load texture",d),_});return this.sourceCache[e]=g,g}assignTexture(e,t,i,s){const a=this;return this.getDependency("texture",i.index).then(function(c){if(!c)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(c=c.clone(),c.channel=i.texCoord),a.extensions[xt.KHR_TEXTURE_TRANSFORM]){const f=i.extensions!==void 0?i.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(f){const d=a.associations.get(c);c=a.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(c,f),a.associations.set(c,d)}}return s!==void 0&&(c.colorSpace=s),e[t]=c,c})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,c=t.attributes.normal===void 0;if(e.isPoints){const f="PointsMaterial:"+i.uuid;let d=this.cache.get(f);d||(d=new n_,Gi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,d.sizeAttenuation=!1,this.cache.add(f,d)),i=d}else if(e.isLine){const f="LineBasicMaterial:"+i.uuid;let d=this.cache.get(f);d||(d=new t_,Gi.prototype.copy.call(d,i),d.color.copy(i.color),d.map=i.map,this.cache.add(f,d)),i=d}if(s||a||c){let f="ClonedMaterial:"+i.uuid+":";s&&(f+="derivative-tangents:"),a&&(f+="vertex-colors:"),c&&(f+="flat-shading:");let d=this.cache.get(f);d||(d=i.clone(),a&&(d.vertexColors=!0),c&&(d.flatShading=!0),s&&(d.normalScale&&(d.normalScale.y*=-1),d.clearcoatNormalScale&&(d.clearcoatNormalScale.y*=-1)),this.cache.add(f,d),this.associations.set(d,this.associations.get(i))),i=d}e.material=i}getMaterialType(){return Na}loadMaterial(e){const t=this,i=this.json,s=this.extensions,a=i.materials[e];let c;const f={},d=a.extensions||{},h=[];if(d[xt.KHR_MATERIALS_UNLIT]){const _=s[xt.KHR_MATERIALS_UNLIT];c=_.getMaterialType(),h.push(_.extendParams(f,a,t))}else{const _=a.pbrMetallicRoughness||{};if(f.color=new ut(1,1,1),f.opacity=1,Array.isArray(_.baseColorFactor)){const m=_.baseColorFactor;f.color.setRGB(m[0],m[1],m[2],Dn),f.opacity=m[3]}_.baseColorTexture!==void 0&&h.push(t.assignTexture(f,"map",_.baseColorTexture,gn)),f.metalness=_.metallicFactor!==void 0?_.metallicFactor:1,f.roughness=_.roughnessFactor!==void 0?_.roughnessFactor:1,_.metallicRoughnessTexture!==void 0&&(h.push(t.assignTexture(f,"metalnessMap",_.metallicRoughnessTexture)),h.push(t.assignTexture(f,"roughnessMap",_.metallicRoughnessTexture))),c=this._invokeOne(function(m){return m.getMaterialType&&m.getMaterialType(e)}),h.push(Promise.all(this._invokeAll(function(m){return m.extendMaterialParams&&m.extendMaterialParams(e,f)})))}a.doubleSided===!0&&(f.side=Ei);const g=a.alphaMode||rd.OPAQUE;if(g===rd.BLEND?(f.transparent=!0,f.depthWrite=!1):(f.transparent=!1,g===rd.MASK&&(f.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&c!==Yr&&(h.push(t.assignTexture(f,"normalMap",a.normalTexture)),f.normalScale=new Tt(1,1),a.normalTexture.scale!==void 0)){const _=a.normalTexture.scale;f.normalScale.set(_,_)}if(a.occlusionTexture!==void 0&&c!==Yr&&(h.push(t.assignTexture(f,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(f.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&c!==Yr){const _=a.emissiveFactor;f.emissive=new ut().setRGB(_[0],_[1],_[2],Dn)}return a.emissiveTexture!==void 0&&c!==Yr&&h.push(t.assignTexture(f,"emissiveMap",a.emissiveTexture,gn)),Promise.all(h).then(function(){const _=new c(f);return a.name&&(_.name=a.name),Ui(_,a),t.associations.set(_,{materials:e}),a.extensions&&_s(s,_,a),_})}createUniqueName(e){const t=Ot.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function a(f){return i[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(f,t).then(function(d){return M0(d,f,t)})}const c=[];for(let f=0,d=e.length;f<d;f++){const h=e[f],g=aA(h),_=s[g];if(_)c.push(_.promise);else{let m;h.extensions&&h.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?m=a(h):m=M0(new Qn,h,t),s[g]={primitive:h,promise:m},c.push(m)}}return Promise.all(c)}loadMesh(e){const t=this,i=this.json,s=this.extensions,a=i.meshes[e],c=a.primitives,f=[];for(let d=0,h=c.length;d<h;d++){const g=c[d].material===void 0?rA(this.cache):this.getDependency("material",c[d].material);f.push(g)}return f.push(t.loadGeometries(c)),Promise.all(f).then(function(d){const h=d.slice(0,d.length-1),g=d[d.length-1],_=[];for(let x=0,M=g.length;x<M;x++){const E=g[x],y=c[x];let S;const R=h[x];if(y.mode===ui.TRIANGLES||y.mode===ui.TRIANGLE_STRIP||y.mode===ui.TRIANGLE_FAN||y.mode===void 0)S=a.isSkinnedMesh===!0?new zy(E,R):new wn(E,R),S.isSkinnedMesh===!0&&S.normalizeSkinWeights(),y.mode===ui.TRIANGLE_STRIP?S.geometry=_0(S.geometry,j0):y.mode===ui.TRIANGLE_FAN&&(S.geometry=_0(S.geometry,Yd));else if(y.mode===ui.LINES)S=new qy(E,R);else if(y.mode===ui.LINE_STRIP)S=new yh(E,R);else if(y.mode===ui.LINE_LOOP)S=new Yy(E,R);else if(y.mode===ui.POINTS)S=new Ky(E,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+y.mode);Object.keys(S.geometry.morphAttributes).length>0&&oA(S,a),S.name=t.createUniqueName(a.name||"mesh_"+e),Ui(S,a),y.extensions&&_s(s,S,y),t.assignFinalMaterial(S),_.push(S)}for(let x=0,M=_.length;x<M;x++)t.associations.set(_[x],{meshes:e,primitives:x});if(_.length===1)return a.extensions&&_s(s,_[0],a),_[0];const m=new zi;a.extensions&&_s(s,m,a),t.associations.set(m,{meshes:e});for(let x=0,M=_.length;x<M;x++)m.add(_[x]);return m})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new In(vy.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Dc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ui(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,a=t.joints.length;s<a;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const a=s.pop(),c=s,f=[],d=[];for(let h=0,g=c.length;h<g;h++){const _=c[h];if(_){f.push(_);const m=new gt;a!==null&&m.fromArray(a.array,h*16),d.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[h])}return new vh(f,d)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],a=s.name?s.name:"animation_"+e,c=[],f=[],d=[],h=[],g=[];for(let _=0,m=s.channels.length;_<m;_++){const x=s.channels[_],M=s.samplers[x.sampler],E=x.target,y=E.node,S=s.parameters!==void 0?s.parameters[M.input]:M.input,R=s.parameters!==void 0?s.parameters[M.output]:M.output;E.node!==void 0&&(c.push(this.getDependency("node",y)),f.push(this.getDependency("accessor",S)),d.push(this.getDependency("accessor",R)),h.push(M),g.push(E))}return Promise.all([Promise.all(c),Promise.all(f),Promise.all(d),Promise.all(h),Promise.all(g)]).then(function(_){const m=_[0],x=_[1],M=_[2],E=_[3],y=_[4],S=[];for(let L=0,P=m.length;L<P;L++){const D=m[L],U=x[L],N=M[L],w=E[L],C=y[L];if(D===void 0)continue;D.updateMatrix&&D.updateMatrix();const se=i._createAnimationTracks(D,U,N,w,C);if(se)for(let O=0;O<se.length;O++)S.push(se[O])}const R=new fS(a,void 0,S);return Ui(R,s),R})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(a){const c=i._getNodeRef(i.meshCache,s.mesh,a);return s.weights!==void 0&&c.traverse(function(f){if(f.isMesh)for(let d=0,h=s.weights.length;d<h;d++)f.morphTargetInfluences[d]=s.weights[d]}),c})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],a=i._loadNodeShallow(e),c=[],f=s.children||[];for(let h=0,g=f.length;h<g;h++)c.push(i.getDependency("node",f[h]));const d=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([a,Promise.all(c),d]).then(function(h){const g=h[0],_=h[1],m=h[2];m!==null&&g.traverse(function(x){x.isSkinnedMesh&&x.bind(m,cA)});for(let x=0,M=_.length;x<M;x++)g.add(_[x]);if(g.userData.pivot!==void 0&&_.length>0){const x=g.userData.pivot,M=_[0];g.pivot=new $().fromArray(x),g.position.x-=x[0],g.position.y-=x[1],g.position.z-=x[2],M.position.set(0,0,0),delete g.userData.pivot}return g})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],c=a.name?s.createUniqueName(a.name):"",f=[],d=s._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});return d&&f.push(d),a.camera!==void 0&&f.push(s.getDependency("camera",a.camera).then(function(h){return s._getNodeRef(s.cameraCache,a.camera,h)})),s._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){f.push(h)}),this.nodeCache[e]=Promise.all(f).then(function(h){let g;if(a.isBone===!0?g=new e_:h.length>1?g=new zi:h.length===1?g=h[0]:g=new Kt,g!==h[0])for(let _=0,m=h.length;_<m;_++)g.add(h[_]);if(a.name&&(g.userData.name=a.name,g.name=c),Ui(g,a),a.extensions&&_s(i,g,a),a.matrix!==void 0){const _=new gt;_.fromArray(a.matrix),g.applyMatrix4(_)}else a.translation!==void 0&&g.position.fromArray(a.translation),a.rotation!==void 0&&g.quaternion.fromArray(a.rotation),a.scale!==void 0&&g.scale.fromArray(a.scale);if(!s.associations.has(g))s.associations.set(g,{});else if(a.mesh!==void 0&&s.meshCache.refs[a.mesh]>1){const _=s.associations.get(g);s.associations.set(g,{..._})}return s.associations.get(g).nodes=e,g}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,a=new zi;i.name&&(a.name=s.createUniqueName(i.name)),Ui(a,i),i.extensions&&_s(t,a,i);const c=i.nodes||[],f=[];for(let d=0,h=c.length;d<h;d++)f.push(s.getDependency("node",c[d]));return Promise.all(f).then(function(d){for(let g=0,_=d.length;g<_;g++){const m=d[g];m.parent!==null?a.add(L1(m)):a.add(m)}const h=g=>{const _=new Map;for(const[m,x]of s.associations)(m instanceof Gi||m instanceof cn)&&_.set(m,x);return g.traverse(m=>{const x=s.associations.get(m);x!=null&&_.set(m,x)}),_};return s.associations=h(a),a})}_createAnimationTracks(e,t,i,s,a){const c=[],f=e.name?e.name:e.uuid,d=[];jr[a.path]===jr.weights?e.traverse(function(m){m.morphTargetInfluences&&d.push(m.name?m.name:m.uuid)}):d.push(f);let h;switch(jr[a.path]){case jr.weights:h=yo;break;case jr.rotation:h=So;break;case jr.translation:case jr.scale:h=Mo;break;default:switch(i.itemSize){case 1:h=yo;break;case 2:case 3:default:h=Mo;break}break}const g=s.interpolation!==void 0?iA[s.interpolation]:Ca,_=this._getArrayFromAccessor(i);for(let m=0,x=d.length;m<x;m++){const M=new h(d[m]+"."+jr[a.path],t.array,_,g);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(M),c.push(M)}return c}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=th(t.constructor),s=new Float32Array(t.length);for(let a=0,c=t.length;a<c;a++)s[a]=t[a]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof So?nA:x_;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function fA(o,e,t){const i=e.attributes,s=new vr;if(i.POSITION!==void 0){const f=t.json.accessors[i.POSITION],d=f.min,h=f.max;if(d!==void 0&&h!==void 0){if(s.set(new $(d[0],d[1],d[2]),new $(h[0],h[1],h[2])),f.normalized){const g=th(ho[f.componentType]);s.min.multiplyScalar(g),s.max.multiplyScalar(g)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const f=new $,d=new $;for(let h=0,g=a.length;h<g;h++){const _=a[h];if(_.POSITION!==void 0){const m=t.json.accessors[_.POSITION],x=m.min,M=m.max;if(x!==void 0&&M!==void 0){if(d.setX(Math.max(Math.abs(x[0]),Math.abs(M[0]))),d.setY(Math.max(Math.abs(x[1]),Math.abs(M[1]))),d.setZ(Math.max(Math.abs(x[2]),Math.abs(M[2]))),m.normalized){const E=th(ho[m.componentType]);d.multiplyScalar(E)}f.max(d)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(f)}o.boundingBox=s;const c=new qi;s.getCenter(c.center),c.radius=s.min.distanceTo(s.max)/2,o.boundingSphere=c}function M0(o,e,t){const i=e.attributes,s=[];function a(c,f){return t.getDependency("accessor",c).then(function(d){o.setAttribute(f,d)})}for(const c in i){const f=eh[c]||c.toLowerCase();f in o.attributes||s.push(a(i[c],f))}if(e.indices!==void 0&&!o.index){const c=t.getDependency("accessor",e.indices).then(function(f){o.setIndex(f)});s.push(c)}return Et.workingColorSpace!==Dn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Et.workingColorSpace}" not supported.`),Ui(o,e),fA(o,e,t),Promise.all(s).then(function(){return e.targets!==void 0?sA(o,e.targets,t):o})}const dA=({apiKey:o,mapId:e,myCar:t,myCarType:i,myCarColor:s,playerName:a,peersRef:c,onMapError:f})=>{const d=it.useRef(null),[h,g]=it.useState(null),_=it.useRef(null),m=it.useRef(null),x=it.useRef(null),M=it.useRef(null),E=it.useRef(null),y=it.useRef(new Map),S=it.useRef(20);return it.useEffect(()=>{const R=P=>{P.preventDefault(),S.current-=P.deltaY*.005,S.current=Math.max(10,Math.min(22,S.current))},L=d.current;return L&&L.addEventListener("wheel",R,{passive:!1}),()=>{L&&L.removeEventListener("wheel",R)}},[]),it.useEffect(()=>{if(d.current)return mx({key:o,v:"beta"}),Promise.all([Qm("maps"),Qm("geometry")]).then(([R])=>{const L=new R.Map(d.current,{center:{lat:t.lat,lng:t.lng},zoom:S.current,tilt:60,heading:t.heading,...e?{mapId:e}:{},renderingType:"VECTOR",disableDefaultUI:!0,gestureHandling:"none",keyboardShortcuts:!1});g(L),L.addListener("renderingtype_changed",()=>{L.getRenderingType()==="RASTER"&&f&&f("The map is not a vector map. WebGLOverlayView requires a vector map. Please check your Map ID.")});const P=new google.maps.WebGLOverlayView;_.current=P,P.onAdd=()=>{m.current=new Iy,m.current.rotation.x=Math.PI/2,m.current.rotation.y=Math.PI,x.current=new In;const D=new u_(16777215,1);D.position.set(0,10,0),m.current.add(D);const U=new TS(16777215,.5);m.current.add(U),E.current=od(i,s,a,!0),m.current.add(E.current)},P.onContextRestored=({gl:D})=>{M.current=new P1({canvas:D.canvas,context:D,...D.getContextAttributes()}),M.current.autoClear=!1},P.onDraw=({gl:D,transformer:U})=>{if(!(!m.current||!x.current||!M.current)){if(E.current&&E.current.userData.frontWheels){const N=t.steeringAngle*(Math.PI/180);E.current.userData.frontWheels.forEach(w=>{w.rotation.y=-N})}if(x.current.projectionMatrix.fromArray(U.fromLatLngAltitude({lat:t.lat,lng:t.lng,altitude:0},new Float32Array([t.pitch||0,t.roll||0,-t.heading]),new Float32Array([1,1,1]))),E.current){const N=Math.pow(2,20-S.current),w=Math.max(.1,Math.min(N,50));E.current.children.forEach(C=>{C.userData.isNameSprite&&(C.scale.set(-C.userData.baseScale.x*w,C.userData.baseScale.y*w,C.userData.baseScale.z),C.position.y=C.userData.baseY*w)})}y.current.forEach(N=>N.visible=!1),E.current&&(E.current.visible=!0),M.current.render(m.current,x.current),E.current&&(E.current.visible=!1),c.current.forEach((N,w)=>{let C=y.current.get(w);if(!C||C.userData.carType!==N.carType||C.userData.carColor!==N.carColor?(C&&(m.current.remove(C),Tc(C)),C=od(N.carType,N.carColor,N.playerName,!1),m.current.add(C),y.current.set(w,C)):C.userData.playerName!==N.playerName&&(nh(C,N.playerName,!1),C.userData.playerName=N.playerName),C.userData.frontWheels){const W=(N.steeringAngle||0)*(Math.PI/180);C.userData.frontWheels.forEach(ee=>{ee.rotation.y=-W})}const se=Math.pow(2,20-S.current),O=Math.max(.1,Math.min(se,50)),q=(N.heading-t.heading)*(Math.PI/180);C.children.forEach(W=>{W.userData.isNameSprite&&(W.scale.set(-W.userData.baseScale.x*O,W.userData.baseScale.y*O,W.userData.baseScale.z),W.position.y=W.userData.baseY*O,W.rotation.y=q)}),y.current.forEach(W=>W.visible=!1),C.visible=!0,x.current.projectionMatrix.fromArray(U.fromLatLngAltitude({lat:N.lat,lng:N.lng,altitude:0},new Float32Array([N.pitch||0,N.roll||0,-N.heading]),new Float32Array([1,1,1]))),M.current.render(m.current,x.current)}),E.current&&(E.current.visible=!0),y.current.forEach(N=>N.visible=!0);for(const[N,w]of y.current.entries())c.current.has(N)||(m.current.remove(w),Tc(w),y.current.delete(N));M.current.resetState()}},P.setMap(L)}),()=>{_.current&&_.current.setMap(null)}},[o,e]),it.useEffect(()=>{m.current&&(!E.current||E.current.userData.carType!==i||E.current.userData.carColor!==s?(E.current&&(m.current.remove(E.current),Tc(E.current)),E.current=od(i,s,a,!0),m.current.add(E.current)):E.current.userData.playerName!==a&&(nh(E.current,a,!0),E.current.userData.playerName=a))},[i,s,a]),it.useEffect(()=>{if(!h)return;let R,L=0,P=0,D=0,U=0;const N=()=>{_.current&&_.current.requestRedraw(),(Math.abs(t.lat-L)>1e-7||Math.abs(t.lng-P)>1e-7||Math.abs(t.heading-D)>.1||Math.abs(S.current-U)>.01)&&(h.moveCamera({center:{lat:t.lat,lng:t.lng},heading:t.heading,tilt:60,zoom:S.current}),L=t.lat,P=t.lng,D=t.heading,U=S.current),R=requestAnimationFrame(N)};return N(),()=>{cancelAnimationFrame(R)}},[h,t]),me.jsxs("div",{className:"relative w-full h-full",children:[me.jsx("div",{ref:d,className:"w-full h-full"}),me.jsxs("div",{className:"absolute bottom-6 right-6 flex flex-col gap-2 z-10",children:[me.jsx("button",{className:"w-10 h-10 bg-white text-black rounded-full shadow-lg flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition-colors",onClick:()=>S.current=Math.min(22,S.current+1),title:"Zoom In",children:"+"}),me.jsx("button",{className:"w-10 h-10 bg-white text-black rounded-full shadow-lg flex items-center justify-center text-xl font-bold hover:bg-gray-100 transition-colors",onClick:()=>S.current=Math.max(10,S.current-1),title:"Zoom Out",children:"-"})]})]})},hA=new I1,pA=30*Math.PI/180;function mA(o,e=!1){const t=document.createElement("canvas"),i=t.getContext("2d");if(t.width=2048,t.height=512,i){i.font='Bold 200px "Inter", "Segoe UI", Arial, sans-serif',i.fillStyle=e?"rgba(37, 99, 235, 0.9)":"rgba(0, 0, 0, 0.75)";const x=i.measureText(o).width+120*2,M=400,E=(t.width-x)/2,y=(t.height-M)/2,S=50;i.beginPath(),i.moveTo(E+S,y),i.lineTo(E+x-S,y),i.quadraticCurveTo(E+x,y,E+x,y+S),i.lineTo(E+x,y+M-S),i.quadraticCurveTo(E+x,y+M,E+x-S,y+M),i.lineTo(E+S,y+M),i.quadraticCurveTo(E,y+M,E,y+M-S),i.lineTo(E,y+S),i.quadraticCurveTo(E,y,E+S,y),i.closePath(),i.fill(),i.strokeStyle=e?"rgba(251, 191, 36, 0.6)":"rgba(255, 255, 255, 0.3)",i.lineWidth=6,i.stroke(),i.fillStyle=e?"#fbbf24":"#ffffff",i.textAlign="center",i.textBaseline="middle",i.shadowColor="rgba(0, 0, 0, 1)",i.shadowBlur=10,i.shadowOffsetX=0,i.shadowOffsetY=4,i.fillText(o,t.width/2,t.height/2),i.shadowBlur=0,i.shadowOffsetY=0,i.fillText(o,t.width/2,t.height/2)}const s=new $y(t);s.generateMipmaps=!0,s.minFilter=ki,s.magFilter=sn,s.anisotropy=16,s.colorSpace=gn;const a=e?36:30,c=e?9:7.5,f=new Da(1,1),d=new Yr({map:s,transparent:!0,depthTest:!1,side:Ei}),h=new wn(f,d);return h.rotation.x=-pA,h.scale.set(-a,c,1),h.position.y=12,h.renderOrder=999,h.userData={isNameSprite:!0,playerName:o,baseScale:{x:a,y:c,z:1},baseY:12},h}function Tc(o){o.traverse(e=>{if(e.isMesh){const t=e;t.geometry&&t.geometry.dispose(),t.material&&(Array.isArray(t.material)?t.material.forEach(i=>i.dispose()):t.material.dispose())}else if(e.userData.isNameSprite&&e.isMesh){const t=e,i=t.material;i.map&&i.map.dispose(),i.dispose(),t.geometry.dispose()}})}function nh(o,e,t=!1){let i=null;if(o.children.forEach(s=>{s.userData.isNameSprite&&(i=s)}),!(i&&i.userData.playerName===e)){if(i){o.remove(i);const s=i.material;s.map&&s.map.dispose(),s.dispose(),i.geometry.dispose()}if(e){const s=mA(e,t);o.add(s)}}}function od(o,e,t,i=!1){const s=new zi,a=new ut(e||"#ff0000");s.userData={carType:o,carColor:e,playerName:t};const c=`/models/${o}.glb`;return hA.load(c,f=>{const d=f.scene;d.traverse(g=>{if(g.isMesh){const _=g;_.material&&(Array.isArray(_.material)?_.material.forEach(m=>{"color"in m&&m.color.copy(a)}):"color"in _.material&&_.material.color.copy(a))}}),s.children.filter(g=>!g.userData.isNameSprite).forEach(g=>{if(s.remove(g),g.isMesh){const _=g;_.geometry&&_.geometry.dispose(),_.material&&(Array.isArray(_.material)?_.material.forEach(m=>m.dispose()):_.material.dispose())}else g instanceof zi&&Tc(g)}),s.add(d)},void 0,f=>{console.warn(`Failed to load model ${c}, using fallback geometry.`,f)}),gA(s,o,a),t&&nh(s,t,i),s.scale.set(.5,.5,.5),s}function gA(o,e,t){let i=2,s=1,a=4,c=.4,f=.2,d=1.5,h=1.1;e==="suv"?(s=1.6,a=4.5,i=2.2,c=.5,d=1.6,h=1.2):e==="truck"?(s=1.8,a=5.5,i=2.4,c=.6,d=2,h=1.3):e==="compact"&&(s=1.2,a=3.5,i=1.8,c=.35,d=1.2,h=1);const g=new To(i,s,a),_=new Na({color:t}),m=new wn(g,_);m.position.y=s/2+c/2,o.add(m);const x=new Sh(c,c,f,16),M=new Na({color:3355443}),E=[{pos:[-h,c,d],isFront:!0},{pos:[h,c,d],isFront:!0},{pos:[-h,c,-d],isFront:!1},{pos:[h,c,-d],isFront:!1}],y=[];E.forEach(({pos:S,isFront:R})=>{const L=new zi;L.position.set(S[0],S[1],S[2]);const P=new wn(x,M);P.rotation.z=Math.PI/2,L.add(P),o.add(L),R&&y.push(L)}),o.userData.frontWheels=y}const _A=({car:o})=>{const e=it.useRef(null),t=it.useRef(null);it.useEffect(()=>{let s;const a=()=>{if(e.current&&t.current){const c=Math.abs(o.speed*24e6),f=Math.min(Math.round(c),240),d=-120+f/240*240;e.current.style.transform=`rotate(${d}deg)`,t.current.textContent=f.toString()}s=requestAnimationFrame(a)};return a(),()=>cancelAnimationFrame(s)},[o]);const i=[];for(let s=0;s<=240;s+=20){const c=(-120+s/240*240-90)*(Math.PI/180),f=s%40===0,d=s>=200,h=85,g=f?73:79,_=100+h*Math.cos(c),m=100+h*Math.sin(c),x=100+g*Math.cos(c),M=100+g*Math.sin(c),E=d?"#ef4444":f?"white":"#94a3b8";if(i.push(me.jsx("line",{x1:_,y1:m,x2:x,y2:M,stroke:E,strokeWidth:f?3:1.5,strokeLinecap:"round"},`line-${s}`)),f){const y=100+56*Math.cos(c),S=100+56*Math.sin(c);i.push(me.jsx("text",{x:y,y:S,fill:d?"#ef4444":"white",fontSize:"12",textAnchor:"middle",alignmentBaseline:"middle",fontFamily:"monospace",fontWeight:"bold",children:s},`text-${s}`))}}return me.jsxs("div",{className:"absolute bottom-6 right-6 w-56 h-56 bg-slate-900/90 backdrop-blur-md rounded-full border-[6px] border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center overflow-hidden z-10",children:[me.jsx("div",{className:"absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(59,130,246,0.15)] pointer-events-none"}),me.jsxs("svg",{viewBox:"0 0 200 200",className:"w-full h-full drop-shadow-xl",children:[me.jsx("defs",{children:me.jsxs("radialGradient",{id:"dialGradient",cx:"50%",cy:"50%",r:"50%",children:[me.jsx("stop",{offset:"70%",stopColor:"#0f172a"}),me.jsx("stop",{offset:"100%",stopColor:"#1e293b"})]})}),me.jsx("circle",{cx:"100",cy:"100",r:"95",fill:"url(#dialGradient)"}),i,me.jsx("text",{ref:t,x:"100",y:"145",fill:"white",fontSize:"36",fontWeight:"900",textAnchor:"middle",fontFamily:"monospace",style:{fontVariantNumeric:"tabular-nums"},children:"0"}),me.jsx("text",{x:"100",y:"165",fill:"#94a3b8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",fontFamily:"sans-serif",letterSpacing:"1",children:"KM/H"}),me.jsxs("g",{ref:e,style:{transformOrigin:"100px 100px",transition:"transform 0.05s linear"},children:[me.jsx("polygon",{points:"97,102 103,102 100,22",fill:"rgba(0,0,0,0.4)"}),me.jsx("polygon",{points:"96,100 104,100 100,20",fill:"#ef4444"}),me.jsx("circle",{cx:"100",cy:"100",r:"10",fill:"#1e293b",stroke:"#334155",strokeWidth:"2"}),me.jsx("circle",{cx:"100",cy:"100",r:"4",fill:"#ef4444"})]})]})]})};class vA{constructor(e,t,i=0){this.speed=0,this.steeringAngle=0,this.pitch=0,this.roll=0,this.MAX_SPEED=1e-5,this.MAX_REVERSE_SPEED=3e-6,this.BASE_ACCELERATION=2e-7,this.BASE_BRAKING=5e-7,this.FRICTION=.992,this.DRAG=.995,this.MAX_STEERING_ANGLE=40,this.lat=e,this.lng=t,this.heading=i}update(e){let t=0;e.ArrowLeft||e.a?t=-this.MAX_STEERING_ANGLE:(e.ArrowRight||e.d)&&(t=this.MAX_STEERING_ANGLE),this.steeringAngle+=(t-this.steeringAngle)*.15;const i=Math.abs(this.speed)/this.MAX_SPEED,s=this.BASE_ACCELERATION*(1-i*.5);let a=!1,c=!1;e.ArrowUp||e.w?this.speed<0?(this.speed+=this.BASE_BRAKING,c=!0):(this.speed+=s,a=!0):(e.ArrowDown||e.s)&&(this.speed>0?(this.speed-=this.BASE_BRAKING,c=!0):(this.speed-=s,a=!0)),this.speed*=this.FRICTION,this.speed*=this.DRAG,this.speed>this.MAX_SPEED&&(this.speed=this.MAX_SPEED),this.speed<-this.MAX_REVERSE_SPEED&&(this.speed=-this.MAX_REVERSE_SPEED),Math.abs(this.speed)<1e-8&&!a&&!c&&(this.speed=0);const f=Math.max(.3,1-i*.7),d=this.steeringAngle/this.MAX_STEERING_ANGLE*f*(this.speed/this.MAX_SPEED)*12;this.heading+=d;const h=1-Math.abs(this.steeringAngle)/this.MAX_STEERING_ANGLE*.01;this.speed*=h,this.heading=(this.heading+360)%360;let g=0;const _=this.speed>1e-7?1:this.speed<-1e-7?-1:0;c&&_!==0?g=_*-2.5:a&&(g=(_!==0?_:1)*1.5),this.pitch+=(g-this.pitch)*.1;const m=d*i*.4;this.roll+=(m-this.roll)*.15;const x=(90-this.heading)*(Math.PI/180);this.lng+=Math.cos(x)*this.speed,this.lat+=Math.sin(x)*this.speed}}class xA{constructor(e,t="self-hosted",i){this.pieSocketBase=i,this.ws=null,this.peers=new Map,this.dataChannels=new Map,this.myId="",this.roomId="",this.heartbeatInterval=null,this.messageQueue=Promise.resolve(),this.pendingSignals=new Map,this.lobbyWs=null,this.lobbyInterval=null,this.signalingUrl=e,this.mode=t}connect(e){this.roomId=e,this.mode==="piesocket"?(this.myId=Math.random().toString(36).substring(2,9),this.connectPieSocket(e)):this.connectSelfHosted(e)}connectSelfHosted(e){this.ws=new WebSocket(this.signalingUrl),this.ws.onopen=()=>{var t;(t=this.ws)==null||t.send(JSON.stringify({type:"join-room",roomId:e}))},this.ws.onmessage=t=>{this.messageQueue=this.messageQueue.then(async()=>{const i=JSON.parse(t.data);switch(i.type){case"room-joined":this.myId=i.id,this.onConnected&&this.onConnected();for(const s of i.peerIds)this.onPeerJoined&&this.onPeerJoined(s),await this.createPeerConnection(s,!0);break;case"peer-joined":this.onPeerJoined&&this.onPeerJoined(i.peerId),await this.createPeerConnection(i.peerId,!1);break;case"peer-left":this.removePeer(i.peerId),this.onPeerLeft&&this.onPeerLeft(i.peerId);break;case"signal":await this.handleSignal(i.senderId,i.signal);break}}).catch(i=>console.error("[WebRTC] message error:",i))}}connectPieSocket(e){this.ws=new WebSocket(this.signalingUrl),this.connectLobby(e),this.ws.onopen=()=>{this.broadcast({type:"peer-announce",senderId:this.myId,roomId:e}),this.onConnected&&this.onConnected(),this.heartbeatInterval=setInterval(()=>{this.broadcast({type:"peer-heartbeat",senderId:this.myId})},5e3)},this.ws.onmessage=t=>{this.messageQueue=this.messageQueue.then(()=>this.handlePieSocketMessage(t)).catch(i=>console.error("[PieSocket] message error:",i))},this.ws.onclose=()=>{this.heartbeatInterval&&(clearInterval(this.heartbeatInterval),this.heartbeatInterval=null)}}async handlePieSocketMessage(e){let t;try{t=JSON.parse(e.data)}catch{return}if(!(t.event==="system"||t.sender==="system")){if(t.event&&t.data)try{t=typeof t.data=="string"?JSON.parse(t.data):t.data}catch{return}if(t.senderId!==this.myId)switch(t.type){case"peer-announce":{if(!this.peers.has(t.senderId)){this.onPeerJoined&&this.onPeerJoined(t.senderId),this.broadcast({type:"peer-announce",senderId:this.myId,roomId:this.roomId});const i=this.myId>t.senderId;await this.createPeerConnection(t.senderId,i),this.flushPendingSignals(t.senderId)}break}case"peer-heartbeat":{if(!this.peers.has(t.senderId)){this.onPeerJoined&&this.onPeerJoined(t.senderId),this.broadcast({type:"peer-announce",senderId:this.myId,roomId:this.roomId});const i=this.myId>t.senderId;await this.createPeerConnection(t.senderId,i),this.flushPendingSignals(t.senderId)}break}case"peer-left":{this.removePeer(t.senderId),this.pendingSignals.delete(t.senderId),this.onPeerLeft&&this.onPeerLeft(t.senderId);break}case"signal":{if(t.targetId!==this.myId)break;if(!this.peers.has(t.senderId)){const i=this.pendingSignals.get(t.senderId)||[];i.push(t.signal),this.pendingSignals.set(t.senderId,i);break}await this.handleSignal(t.senderId,t.signal);break}}}}async flushPendingSignals(e){const t=this.pendingSignals.get(e);if(!(!t||t.length===0)){this.pendingSignals.delete(e);for(const i of t)await this.handleSignal(e,i)}}broadcast(e){this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify(e))}connectLobby(e){if(!this.pieSocketBase)return;const t=this.pieSocketBase.replace("%CHANNEL%","__lobby__");this.lobbyWs=new WebSocket(t);const i=()=>{this.lobbyWs&&this.lobbyWs.readyState===WebSocket.OPEN&&this.lobbyWs.send(JSON.stringify({type:"lobby-room-announce",playerId:this.myId,roomId:e}))};this.lobbyWs.onopen=()=>{i(),this.lobbyInterval=setInterval(i,5e3)},this.lobbyWs.onmessage=s=>{let a;try{a=JSON.parse(s.data)}catch{return}if(!(a.event==="system"||a.sender==="system")){if(a.event&&a.data)try{a=typeof a.data=="string"?JSON.parse(a.data):a.data}catch{return}a.type==="lobby-ping"&&i()}}}disconnectLobby(){this.lobbyInterval&&(clearInterval(this.lobbyInterval),this.lobbyInterval=null),this.lobbyWs&&(this.lobbyWs.readyState===WebSocket.OPEN&&this.lobbyWs.send(JSON.stringify({type:"lobby-player-left",playerId:this.myId})),this.lobbyWs.close(),this.lobbyWs=null)}disconnect(){this.mode==="piesocket"&&this.myId&&this.broadcast({type:"peer-left",senderId:this.myId}),this.disconnectLobby(),this.heartbeatInterval&&(clearInterval(this.heartbeatInterval),this.heartbeatInterval=null),this.ws&&(this.ws.close(),this.ws=null);for(const e of this.peers.keys())this.removePeer(e);this.pendingSignals.clear()}async createPeerConnection(e,t){const i=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]});if(this.peers.set(e,i),i.onicecandidate=s=>{s.candidate&&this.sendSignal(e,{type:"candidate",candidate:s.candidate})},i.onconnectionstatechange=()=>{(i.connectionState==="failed"||i.connectionState==="disconnected")&&(this.removePeer(e),this.onPeerLeft&&this.onPeerLeft(e))},t){const s=i.createDataChannel("game-data");this.setupDataChannel(e,s);const a=await i.createOffer();await i.setLocalDescription(a),this.sendSignal(e,{type:"offer",offer:a})}else i.ondatachannel=s=>{this.setupDataChannel(e,s.channel)}}setupDataChannel(e,t){this.dataChannels.set(e,t),t.onmessage=i=>{const s=JSON.parse(i.data);s.type==="sync"&&this.onPeerData?this.onPeerData(e,s.payload):s.type==="chat"&&this.onChatMessage&&this.onChatMessage(s.payload)}}async handleSignal(e,t){const i=this.peers.get(e);if(i)if(t.type==="offer"){await i.setRemoteDescription(new RTCSessionDescription(t.offer));const s=await i.createAnswer();await i.setLocalDescription(s),this.sendSignal(e,{type:"answer",answer:s})}else t.type==="answer"?await i.setRemoteDescription(new RTCSessionDescription(t.answer)):t.type==="candidate"&&await i.addIceCandidate(new RTCIceCandidate(t.candidate))}sendSignal(e,t){this.mode==="piesocket"?this.broadcast({type:"signal",senderId:this.myId,targetId:e,signal:t}):this.ws&&this.ws.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({type:"signal",targetId:e,signal:t}))}removePeer(e){const t=this.peers.get(e);t&&(t.close(),this.peers.delete(e));const i=this.dataChannels.get(e);i&&(i.close(),this.dataChannels.delete(e))}broadcastSync(e){const t=JSON.stringify({type:"sync",payload:{...e,id:this.myId}});for(const i of this.dataChannels.values())i.readyState==="open"&&i.send(t)}broadcastChat(e,t){const i={id:Math.random().toString(36).substring(2,9),senderId:this.myId,senderName:t,text:e,timestamp:Date.now()},s=JSON.stringify({type:"chat",payload:i});for(const a of this.dataChannels.values())a.readyState==="open"&&a.send(s);this.onChatMessage&&this.onChatMessage(i)}}/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),SA=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),E0=o=>{const e=SA(o);return e.charAt(0).toUpperCase()+e.slice(1)},y_=(...o)=>o.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim(),MA=o=>{for(const e in o)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var EA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=it.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:a,iconNode:c,...f},d)=>it.createElement("svg",{ref:d,...EA,width:e,height:e,stroke:o,strokeWidth:i?Number(t)*24/Number(e):t,className:y_("lucide",s),...!a&&!MA(f)&&{"aria-hidden":"true"},...f},[...c.map(([h,g])=>it.createElement(h,g)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=(o,e)=>{const t=it.forwardRef(({className:i,...s},a)=>it.createElement(TA,{ref:a,iconNode:e,className:y_(`lucide-${yA(E0(o))}`,`lucide-${o}`,i),...s}));return t.displayName=E0(o),t};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wA=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],T0=Es("car",wA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],bA=Es("check",AA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=[["path",{d:"M11 20H2",key:"nlcfvz"}],["path",{d:"M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",key:"au4z13"}],["path",{d:"M11 4H8a2 2 0 0 0-2 2v14",key:"74r1mk"}],["path",{d:"M14 12h.01",key:"1jfl7z"}],["path",{d:"M22 20h-3",key:"vhrsz"}]],w0=Es("door-open",RA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],PA=Es("message-square",CA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],IA=Es("send",LA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],S_=Es("users",NA);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],UA=Es("wifi",DA),FA="ZnayCxidbQCbNQZ0JPM2lCES2IhfHIrJRqbHUckq",OA="free.blr2",kA="__lobby__",BA=12e3;function zA({onJoinRoom:o}){const[e,t]=it.useState([]),[i,s]=it.useState(!0),[a,c]=it.useState("");!window.location.hostname.includes("localhost")&&window.location.hostname.includes("127.0.0.1");const f=it.useRef(new Map),d=it.useRef(null),h=()=>{const _=Date.now(),m=new Map;for(const[M,E]of f.current){if(_-E.lastSeen>BA){f.current.delete(M);continue}m.set(E.roomId,(m.get(E.roomId)||0)+1)}const x=Array.from(m.entries()).map(([M,E])=>({id:M,playerCount:E})).sort((M,E)=>E.playerCount-M.playerCount);t(x),s(!1)};it.useEffect(()=>{const _=`wss://${OA}.piesocket.com/v3/${encodeURIComponent(kA)}?api_key=${FA}`,m=new WebSocket(_);d.current=m,m.onopen=()=>{s(!1),m.send(JSON.stringify({type:"lobby-ping"}))},m.onmessage=M=>{let E;try{E=JSON.parse(M.data)}catch{return}if(!(E.event==="system"||E.sender==="system")){if(E.event&&E.data)try{E=typeof E.data=="string"?JSON.parse(E.data):E.data}catch{return}E.type==="lobby-room-announce"&&E.playerId&&E.roomId&&(f.current.set(E.playerId,{roomId:E.roomId,lastSeen:Date.now()}),h()),E.type==="lobby-player-left"&&E.playerId&&(f.current.delete(E.playerId),h())}},m.onerror=()=>{c("Could not connect to lobby"),s(!1)};const x=setInterval(h,5e3);return()=>{clearInterval(x),m.close(),d.current=null}},[]),it.useEffect(()=>{},[]);const g=e.reduce((_,m)=>_+m.playerCount,0);return me.jsxs("div",{className:"w-full max-w-lg",children:[me.jsxs("div",{className:"flex items-center justify-between mb-4",children:[me.jsxs("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:[me.jsx(UA,{className:"w-5 h-5 text-emerald-400"}),"Active Rooms"]}),me.jsxs("div",{className:"flex items-center gap-3",children:[me.jsx("span",{className:"text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full",children:"Online"}),me.jsxs("span",{className:"text-sm text-slate-400 flex items-center gap-1",children:[me.jsx(S_,{className:"w-4 h-4"}),g," online"]}),!1]})]}),a&&me.jsx("div",{className:"bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-4 text-sm",children:a}),e.length===0&&!i&&!a&&me.jsxs("div",{className:"bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center",children:[me.jsx(w0,{className:"w-10 h-10 text-slate-600 mx-auto mb-3"}),me.jsx("p",{className:"text-slate-400 text-sm",children:"No active rooms"}),me.jsx("p",{className:"text-slate-500 text-xs mt-1",children:"Create one by entering a Room ID below"})]}),e.length>0&&me.jsx("div",{className:"space-y-2 max-h-72 overflow-y-auto pr-1",children:e.map(_=>me.jsxs("button",{onClick:()=>o(_.id),className:"w-full flex items-center justify-between bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700 hover:border-blue-500/50 rounded-xl px-4 py-3 transition-all group",children:[me.jsxs("div",{className:"flex items-center gap-3",children:[me.jsx("div",{className:"bg-blue-500/20 p-2 rounded-lg group-hover:bg-blue-500/30 transition-colors",children:me.jsx(w0,{className:"w-4 h-4 text-blue-400"})}),me.jsx("span",{className:"font-mono text-white font-medium",children:_.id})]}),me.jsxs("div",{className:"flex items-center gap-2",children:[me.jsxs("div",{className:"flex items-center gap-1.5",children:[me.jsxs("span",{className:"relative flex h-2 w-2",children:[me.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"}),me.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-green-500"})]}),me.jsxs("span",{className:"text-sm text-slate-300",children:[_.playerCount," player",_.playerCount!==1?"s":""]})]}),me.jsx("span",{className:"text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity",children:"Join →"})]})]},_.id))})]})}const A0="AIzaSyDL9J82iDhcUWdQiuIvBYa0t5asrtz3Swk",b0="TEST",VA="ZnayCxidbQCbNQZ0JPM2lCES2IhfHIrJRqbHUckq",HA="free.blr2",GA=13.7563,WA=100.5018,R0=[{id:"sports",name:"Sports Car"},{id:"suv",name:"SUV"},{id:"truck",name:"Truck"},{id:"compact",name:"Compact"}],C0=[{id:"#ef4444",name:"Red"},{id:"#3b82f6",name:"Blue"},{id:"#eab308",name:"Yellow"},{id:"#22c55e",name:"Green"},{id:"#a855f7",name:"Purple"},{id:"#f97316",name:"Orange"},{id:"#ffffff",name:"White"},{id:"#1f2937",name:"Black"}];function XA(){const[o,e]=it.useState(!1),[t,i]=it.useState(""),[s,a]=it.useState(A0),[c,f]=it.useState(b0),[d,h]=it.useState(""),[g]=it.useState(()=>new vA(GA,WA,0)),_=it.useRef(new Map),[m,x]=it.useState(0),[M,E]=it.useState([]),[y,S]=it.useState(""),[R,L]=it.useState(!1),P=it.useRef(!1),[D,U]=it.useState(0),[N,w]=it.useState(R0[0].id),[C,se]=it.useState(C0[0].id),[O,q]=it.useState("Player"+Math.floor(Math.random()*1e3)),W=it.useRef(null),ee=it.useRef({}),Z=it.useRef(0),K=it.useRef(null),X=it.useRef(null),J=it.useRef(null);it.useEffect(()=>{const B=Re=>{Re.target instanceof HTMLInputElement||Re.target instanceof HTMLTextAreaElement||(ee.current[Re.key]=!0)},Ee=Re=>{Re.target instanceof HTMLInputElement||Re.target instanceof HTMLTextAreaElement||(ee.current[Re.key]=!1)};return window.addEventListener("keydown",B),window.addEventListener("keyup",Ee),()=>{window.removeEventListener("keydown",B),window.removeEventListener("keyup",Ee)}},[]),!window.location.hostname.includes("localhost")&&window.location.hostname.includes("127.0.0.1");const ae=()=>{if(!s||!t){h("Please fill in all required fields.");return}h("");{let Re,Fe,te;te=`wss://${HA}.piesocket.com/v3/%CHANNEL%?api_key=${VA}`,Re=te.replace("%CHANNEL%",encodeURIComponent(t)),Fe="piesocket";const he=new xA(Re,Fe,te);W.current=he,he.onPeerData=(de,Pe)=>{_.current.set(de,Pe)},he.onPeerLeft=de=>{_.current.delete(de),x(_.current.size)},he.onPeerJoined=de=>{x(_.current.size+1)},he.onChatMessage=de=>{E(Pe=>[...Pe.slice(-49),de]),P.current||U(Pe=>Pe+1)},he.connect(t)}e(!0);try{const Re=window.AudioContext||window.webkitAudioContext,Fe=new Re;K.current=Fe;const te=Fe.createOscillator();te.type="sawtooth",te.frequency.value=50;const he=Fe.createBiquadFilter();he.type="lowpass",he.frequency.value=400;const de=Fe.createGain();de.gain.value=.05,te.connect(he),he.connect(de),de.connect(Fe.destination),te.start(),X.current=te,J.current=de}catch(Re){console.error("Audio initialization failed:",Re)}let B=0;const Ee=Re=>{if(g.update(ee.current),X.current&&J.current&&K.current){const Fe=Math.abs(g.speed*24e6),te=50+Fe*1.5;X.current.frequency.setTargetAtTime(te,K.current.currentTime,.1);const he=ee.current.ArrowUp||ee.current.w||ee.current.W,de=ee.current.ArrowDown||ee.current.s||ee.current.S;let Pe=.05;he?Pe=.15:(de||Fe>5)&&(Pe=.1),J.current.gain.setTargetAtTime(Pe,K.current.currentTime,.1)}W.current&&Re-B>33&&(W.current.broadcastSync({lat:g.lat,lng:g.lng,heading:g.heading,speed:g.speed,steeringAngle:g.steeringAngle,pitch:g.pitch,roll:g.roll,carType:N,carColor:C,playerName:O}),B=Re),Z.current=requestAnimationFrame(Ee)};Z.current=requestAnimationFrame(Ee)},ce=()=>{W.current&&(W.current.disconnect(),W.current=null),K.current&&(K.current.close(),K.current=null,X.current=null,J.current=null),cancelAnimationFrame(Z.current),e(!1),_.current.clear(),x(0),E([])},k=B=>{B.preventDefault(),!(!y.trim()||!W.current)&&(W.current.broadcastChat(y,O),S(""))};return o?me.jsxs("div",{className:"relative w-full h-screen overflow-hidden bg-slate-900",children:[me.jsx(dA,{apiKey:s,mapId:c,myCar:g,myCarType:N,myCarColor:C,playerName:O,peersRef:_,onMapError:B=>{ce(),h(B)}}),me.jsxs("div",{className:"absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-2xl text-white",children:[me.jsxs("h2",{className:"font-bold text-lg mb-1 flex items-center gap-2",children:[me.jsx(T0,{className:"w-5 h-5 text-blue-400"}),"World Drive"]}),me.jsxs("div",{className:"text-sm text-slate-300 space-y-1",children:[me.jsxs("p",{children:["Room: ",me.jsx("span",{className:"text-white font-mono",children:t})]}),me.jsxs("p",{className:"flex items-center gap-1",children:[me.jsx(S_,{className:"w-4 h-4"}),m+1," Player",m!==0?"s":""]})]})]}),me.jsxs("div",{className:"absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 p-4 rounded-xl shadow-2xl text-white text-sm",children:[me.jsx("p",{className:"font-semibold mb-2 text-slate-300",children:"Controls"}),me.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-2",children:[me.jsx("span",{className:"text-slate-400",children:"Accelerate"}),me.jsx("span",{className:"font-mono bg-slate-800 px-2 py-0.5 rounded text-center",children:"W / ↑"}),me.jsx("span",{className:"text-slate-400",children:"Brake/Rev"}),me.jsx("span",{className:"font-mono bg-slate-800 px-2 py-0.5 rounded text-center",children:"S / ↓"}),me.jsx("span",{className:"text-slate-400",children:"Steer"}),me.jsx("span",{className:"font-mono bg-slate-800 px-2 py-0.5 rounded text-center",children:"A D / ← →"})]}),me.jsx("button",{onClick:ce,className:"w-full mt-4 bg-red-500/20 hover:bg-red-500/40 text-red-400 py-1.5 rounded transition-colors",children:"Leave Game"})]}),me.jsx(_A,{car:g}),me.jsxs("div",{className:`absolute bottom-4 left-4 w-80 bg-slate-900/80 backdrop-blur-md border border-slate-700/50 rounded-xl shadow-2xl flex flex-col transition-all duration-300 ${R?"h-96":"h-12"}`,children:[me.jsxs("button",{onClick:()=>{const B=!R;L(B),P.current=B,B&&U(0)},className:"flex items-center justify-between p-3 text-white hover:bg-slate-800/50 rounded-t-xl transition-colors",children:[me.jsxs("span",{className:"flex items-center gap-2 font-medium",children:[me.jsx(PA,{className:"w-4 h-4 text-blue-400"}),"Chat"]}),D>0&&!R&&me.jsx("span",{className:"bg-blue-500 text-xs px-2 py-0.5 rounded-full",children:D})]}),R&&me.jsxs(me.Fragment,{children:[me.jsx("div",{className:"flex-1 overflow-y-auto p-3 space-y-2 border-t border-slate-700/50 scrollbar-thin scrollbar-thumb-slate-600",children:M.map(B=>{var Ee;return me.jsxs("div",{className:`text-sm ${B.senderId===((Ee=W.current)==null?void 0:Ee.myId)?"text-blue-300 text-right":"text-slate-300"}`,children:[me.jsx("span",{className:"font-mono text-xs opacity-50 mr-2",children:B.senderName}),me.jsx("span",{className:"bg-slate-800/80 px-2 py-1 rounded-lg inline-block",children:B.text})]},B.id)})}),me.jsxs("form",{onSubmit:k,className:"p-2 border-t border-slate-700/50 flex gap-2",children:[me.jsx("input",{type:"text",value:y,onChange:B=>S(B.target.value),placeholder:"Type a message...",className:"flex-1 bg-slate-800 border border-slate-700 rounded px-3 py-1.5 text-sm text-white focus:outline-none focus:border-blue-500"}),me.jsx("button",{type:"submit",className:"bg-blue-600 hover:bg-blue-500 text-white p-1.5 rounded transition-colors",children:me.jsx(IA,{className:"w-4 h-4"})})]})]})]})]}):me.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center p-4 text-slate-100 font-sans",children:me.jsx("div",{className:"max-w-lg w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700",children:me.jsxs("div",{className:"p-8",children:[me.jsx("div",{className:"flex items-center justify-center mb-8",children:me.jsx("div",{className:"bg-blue-500 p-3 rounded-xl shadow-lg shadow-blue-500/30",children:me.jsx(T0,{className:"w-8 h-8 text-white"})})}),me.jsx("h1",{className:"text-3xl font-bold text-center mb-2",children:"World Drive"}),me.jsx("p",{className:"text-slate-400 text-center mb-8",children:"Multiplayer driving on real-world maps"}),me.jsx(zA,{onJoinRoom:B=>i(B)}),me.jsxs("div",{className:"my-4 flex items-center gap-3",children:[me.jsx("div",{className:"flex-1 h-px bg-slate-700"}),me.jsx("span",{className:"text-xs text-slate-500 uppercase",children:"or create a room"}),me.jsx("div",{className:"flex-1 h-px bg-slate-700"})]}),d&&me.jsx("div",{className:"bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-6 text-sm",children:d}),me.jsxs("div",{className:"space-y-4",children:[me.jsxs("div",{className:"space-y-3 mb-6",children:[me.jsx("label",{className:"block text-sm font-medium text-slate-400",children:"Select Car"}),me.jsx("div",{className:"grid grid-cols-2 gap-2",children:R0.map(B=>me.jsx("button",{onClick:()=>w(B.id),className:`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${N===B.id?"bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/20":"bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"}`,children:B.name},B.id))}),me.jsx("label",{className:"block text-sm font-medium text-slate-400 mt-4",children:"Select Color"}),me.jsx("div",{className:"flex flex-wrap gap-2",children:C0.map(B=>me.jsx("button",{onClick:()=>se(B.id),style:{backgroundColor:B.id},className:`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${C===B.id?"border-white scale-110 shadow-lg":"border-transparent hover:scale-105 opacity-80 hover:opacity-100"}`,title:B.name,children:C===B.id&&me.jsx(bA,{className:`w-4 h-4 ${B.id==="#ffffff"?"text-black":"text-white"}`})},B.id))})]}),me.jsxs("div",{children:[me.jsx("label",{className:"block text-sm font-medium text-slate-400 mb-1",children:"Player Name"}),me.jsx("input",{type:"text",value:O,onChange:B=>q(B.target.value),placeholder:"e.g. SpeedRacer",className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"})]}),me.jsxs("div",{children:[me.jsx("label",{className:"block text-sm font-medium text-slate-400 mb-1",children:"Room ID"}),me.jsx("input",{type:"text",value:t,onChange:B=>i(B.target.value),placeholder:"e.g. tokyo-drift",className:"w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"})]}),!A0,!b0,me.jsx("button",{onClick:ae,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-4 shadow-lg shadow-blue-600/20",children:"Join Game"})]})]})})})}lx.createRoot(document.getElementById("root")).render(me.jsx(it.StrictMode,{children:me.jsx(XA,{})}));
