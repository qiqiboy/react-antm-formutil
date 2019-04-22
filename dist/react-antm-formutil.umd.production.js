!function(e,t){"object"===typeof exports&&"undefined"!==typeof module?t(exports,require("antd-mobile"),require("prop-types"),require("react"),require("react-formutil")):"function"===typeof define&&define.amd?define(["exports","antd-mobile","prop-types","react","react-formutil"],t):t((e=e||self).ReactAntmFormutil={},e.AntdMobile,e.PropTypes,e.React,e.ReactFormutil)}(this,function(e,t,r,n,o){"use strict";r=r&&r.hasOwnProperty("default")?r.default:r;var a="default"in n?n.default:n,c=function(e,t){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e,t){function r(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var u=function(){return(u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function l(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&(r[n[o]]=e[n[o]])}return r}var s=t.Checkbox.CheckboxItem,p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.onChange,n=t.value,o=t.onFocus,c=t.onBlur,i=t.data,l=function(e,t){var o=t.target.checked;r(o?n.concat(e):n.filter(function(t){return t!==e}))};return i.map(function(t){return a.createElement(s,u({key:t.value},t,{checked:n.indexOf(t.value)>-1,children:t.title,onChange:l.bind(e,t.value),onFocus:o,onBlur:c}))})},t.propTypes={onChange:r.func,onFocus:r.func,onBlur:r.func,value:r.array},t.defaultProps={value:[]},t}(n.Component),f=t.Radio.RadioItem,d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return i(t,e),t.prototype.render=function(){var e=this,t=this.props,r=t.onChange,n=t.value,o=t.onFocus,c=t.onBlur,i=t.data,l=function(e){r(e)};return i.map(function(t){return a.createElement(f,u({key:t.value},t,{checked:n===t.value,children:t.title,onChange:l.bind(e,t.value),onFocus:o,onBlur:c}))})},t.propTypes={onChange:r.func,onFocus:r.func,onBlur:r.func,value:r.any},t}(n.Component),h=t.List.Item,m=1,y="Switch"!==t.Switch.name;var v=y?t.Checkbox:"Checkbox",b=y?t.Radio:"Radio",k=y?t.PickerView:"PickerView",g=y?t.DatePicker:"DatePicker",P=y?t.Switch:"Switch",C=y?t.Range:"Range",O=y?t.Picker:"Picker",_=y?t.ImagePicker:"ImagePicker",x=y?t.InputItem:"InputItem",E=y?t.TextareaItem:"TextareaItem",I=y?t.Slider:"Slider",w=y?t.Checkbox.CheckboxItem:"CheckboxItem",j=y?t.Radio.RadioItem:"RadioItem",R=y?t.Checkbox.AgreeItem:"AgreeItem",F=y?p:"CheckboxGroup",T=y?d:"RadioGroup",B=function(e){function c(){return null!==e&&e.apply(this,arguments)||this}return i(c,e),c.prototype.render=function(){var e=this.props,r=e,c=r.children,i=r.className,s=r.label,p=r.errorLevel,f=void 0===p?m:p,d=l(r,["children","className","label","errorLevel"]),B=n.Children.only(c),N=function(e){if(e){if("function"===typeof e.type){var t=e.type;return t.formutilType?t.formutilType:y?t:t.displayName||t.name}return e.props.type||e.type}}(B);switch(N){case v:case b:case P:case w:case j:case R:d.__TYPE__="checked";break;case"checked":case"array":case"object":case"number":case"empty":d.__TYPE__=N;break;default:d.__TYPE__="empty"}return a.createElement(o.EasyField,u({},d,{passUtil:"$fieldutil",children:function(r){var o,c,p,d,m=e.valuePropName,y=void 0===m?"value":m,S=e.changePropName,$=void 0===S?"onChange":S,q=e.focusPropName,A=void 0===q?"onFocus":q,L=e.blurPropName,G=void 0===L?"onBlur":L,M=r.$fieldutil,Y=$,D=r[Y],V=A,U=r[V],z=G,H=r[z],J=y,K=r[J],Q=l(r,["$fieldutil","symbol"===typeof Y?Y:Y+"","symbol"===typeof V?V:V+"","symbol"===typeof z?z:z+"","symbol"===typeof J?J:J+""]),W=M.$invalid,X=M.$dirty,Z=M.$touched,ee=M.$getFirstError,te=M.$focused;switch(N){case v:case b:case P:case w:case j:case R:case"checked":var re=e.checked,ne=void 0===re||re,oe=e.unchecked,ae=void 0!==oe&&oe;p={checked:K===ne,onChange:function(e){var t=e&&e.target?e.target.checked:e;D(t?ne:ae,e)}};break;case _:p={onChange:D,files:K};break;default:(o={})[$]=D,o[y]=K,p=o}switch(Object.assign(p,((c={})[A]=U,c[G]=H,c)),f){case 0:d=W&&X&&Z;break;case 1:d=W&&X;break;case 2:d=W;break;default:d=!1}var ce={invalid:W,valid:!W,dirty:X,pristine:!X,touched:Z,untouched:!Z,focused:te};Q.className=Object.keys(ce).filter(function(e){return ce[e]}).map(function(e){return"antm-formutil-"+e}).concat(i).filter(Boolean).join(" ");var ie=d?{error:!0}:{};switch(N){case x:case E:ie.onErrorClick=function(){t.Modal.alert("Error info",ee())};case w:case j:case R:case C:case I:case k:return n.cloneElement(B,u({},Q,ie,p,{title:s,children:s}));case g:case O:return n.cloneElement(B,u({},p,{children:a.createElement(h,u({},Q,ie),s)}));case F:case T:return n.cloneElement(B,p);default:var ue=n.cloneElement(B,p);return s?a.createElement(h,u({},Q,ie,{extra:ue}),s):a.createElement(h,u({},Q,ie),ue)}}}))},c.propTypes=u({},h.propTypes,{label:r.any,errorLevel:r.oneOf([0,1,2,"off"]),children:r.element.isRequired}),c}(n.Component);Object.keys(o).forEach(function(t){Object.defineProperty(e,t,{enumerable:!0,get:function(){return o[t]}})}),e.CheckboxGroup=p,e.FormItem=B,e.RadioGroup=d,e.setErrorLevel=function(e){m=e},Object.defineProperty(e,"__esModule",{value:!0})});
