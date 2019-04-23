!function(e,t){"object"===typeof exports&&"undefined"!==typeof module?t(exports,require("antd-mobile"),require("react"),require("react-formutil")):"function"===typeof define&&define.amd?define(["exports","antd-mobile","react","react-formutil"],t):t((e=e||self).ReactAmFormutil={},e.AntdMobile,e.React,e.ReactFormutil)}(this,function(e,t,r,n){"use strict";var o="default"in r?r.default:r,a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function c(e,t){function r(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r}var l=t.Checkbox.CheckboxItem,s=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.onChange,n=t.value,a=t.onFocus,c=t.onBlur,s=t.data,p=u(t,["onChange","value","onFocus","onBlur","data"]),d=function(e,t){var o=t.target.checked;r(o?n.concat(e):n.filter(function(t){return t!==e}))};return s.map(function(t){return o.createElement(l,i({key:t.value},p,t,{checked:n.indexOf(t.value)>-1,children:t.title,onChange:d.bind(e,t.value),onFocus:a,onBlur:c}))})},t.propTypes=void 0,t.defaultProps={value:[]},t}(r.Component),p=t.Radio.RadioItem,d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.onChange,n=t.value,a=t.onFocus,c=t.onBlur,l=t.data,s=u(t,["onChange","value","onFocus","onBlur","data"]),d=function(e){r(e)};return l.map(function(t){return o.createElement(p,i({key:t.value},s,t,{checked:n===t.value,children:t.title,onChange:d.bind(e,t.value),onFocus:a,onBlur:c}))})},t.propTypes=void 0,t}(r.Component),f=t.List.Item,h=1,m="Switch"!==t.Switch.name;var y=m?t.Checkbox:"Checkbox",v=m?t.Radio:"Radio",b=m?t.PickerView:"PickerView",k=m?t.DatePickerView:"DatePickerView",g=m?t.DatePicker:"DatePicker",P=m?t.Switch:"Switch",C=m?t.Range:"Range",_=m?t.Picker:"Picker",O=m?t.ImagePicker:"ImagePicker",x=m?t.InputItem:"InputItem",w=m?t.TextareaItem:"TextareaItem",E=m?t.Slider:"Slider",I=m?t.Checkbox.CheckboxItem:"CheckboxItem",j=m?t.Radio.RadioItem:"RadioItem",R=m?t.Checkbox.AgreeItem:"AgreeItem",F=m?s:"CheckboxGroup",T=m?d:"RadioGroup",B=function(e){function a(){return null!==e&&e.apply(this,arguments)||this}return c(a,e),a.prototype.render=function(){var e=this.props,a=e,c=a.children,l=a.className,s=a.label,p=a.errorLevel,d=void 0===p?h:p,B=u(a,["children","className","label","errorLevel"]),N=r.Children.only(c),S=function(e){if(e){if("function"===typeof e.type){var t=e.type;return t.formutilType?t.formutilType:m?t:t.displayName||t.name}return e.props.type||e.type}}(N);switch(S){case y:case v:case P:case I:case j:case R:B.__TYPE__="checked";break;case"checked":case"array":case"object":case"number":case"empty":B.__TYPE__=S;break;default:B.__TYPE__="empty"}return o.createElement(n.EasyField,i({},B,{passUtil:"$fieldutil",children:function(n){var a,c,p,h,m=e.valuePropName,B=void 0===m?"value":m,$=e.changePropName,A=void 0===$?"onChange":$,D=e.focusPropName,G=void 0===D?"onFocus":D,L=e.blurPropName,V=void 0===L?"onBlur":L,q=n.$fieldutil,M=A,Y=n[M],U=G,z=n[U],H=V,J=n[H],K=B,Q=n[K],W=u(n,["$fieldutil","symbol"===typeof M?M:M+"","symbol"===typeof U?U:U+"","symbol"===typeof H?H:H+"","symbol"===typeof K?K:K+""]),X=q.$invalid,Z=q.$dirty,ee=q.$touched,te=q.$getFirstError,re=q.$focused;switch(S){case y:case v:case P:case I:case j:case R:case"checked":var ne=e.checked,oe=void 0===ne||ne,ae=e.unchecked,ce=void 0!==ae&&ae;p={checked:Q===oe,onChange:function(e){var t=e&&e.target?e.target.checked:e;Y(t?oe:ce,e)}};break;case O:p={onChange:Y,files:Q};break;default:(a={})[A]=Y,a[B]=Q,p=a}switch(Object.assign(p,((c={})[G]=z,c[V]=J,c)),d){case 0:h=X&&Z&&ee;break;case 1:h=X&&Z;break;case 2:h=X;break;default:h=!1}var ie={invalid:X,valid:!X,dirty:Z,pristine:!Z,touched:ee,untouched:!ee,focused:re};W.className=Object.keys(ie).filter(function(e){return ie[e]}).map(function(e){return"am-formutil-"+e}).concat(l).filter(Boolean).join(" ");var ue=h?{error:!0}:{};switch(S){case x:case w:ue.onErrorClick=function(){t.Modal.alert("Error info",te())};case I:case j:case R:case C:case E:case b:case k:return r.cloneElement(N,i({},W,ue,p,s?{title:s,children:s}:{}));case g:case _:return r.cloneElement(N,i({},p,{children:o.createElement(f,i({},W,ue),s)}));case F:case T:return r.cloneElement(N,i({},W,ue,p));default:var le=r.cloneElement(N,p);return o.createElement(f,i({},W,ue,s?{extra:le,children:s}:{children:le}))}}}))},a.propTypes=void 0,a}(r.Component);Object.keys(n).forEach(function(t){Object.defineProperty(e,t,{enumerable:!0,get:function(){return n[t]}})}),e.CheckboxGroup=s,e.FormItem=B,e.RadioGroup=d,e.setErrorLevel=function(e){h=e},Object.defineProperty(e,"__esModule",{value:!0})});
