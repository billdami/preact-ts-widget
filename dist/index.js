var e,t,n,_,r,o={},l=[],i=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function u(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function a(e,t,n){var _,r,o,l=arguments,i={};for(o in t)"key"==o?_=t[o]:"ref"==o?r=t[o]:i[o]=t[o];if(arguments.length>3)for(n=[n],o=3;o<arguments.length;o++)n.push(l[o]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return s(e,i,_,r,null)}function s(t,n,_,r,o){var l={type:t,props:n,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(l),l}function f(e){return e.children}function p(e,t){this.props=e,this.context=t}function d(e,t){if(null==t)return e.__?d(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?d(e):null}function h(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return h(e)}}function v(r){(!r.__d&&(r.__d=!0)&&t.push(r)&&!y.__r++||_!==e.debounceRendering)&&((_=e.debounceRendering)||n)(y)}function y(){for(var e;y.__r=t.length;)e=t.sort(function(e,t){return e.__v.__b-t.__v.__b}),t=[],e.some(function(e){var t,n,_,r,o,l,i;e.__d&&(l=(o=(t=e).__v).__e,(i=t.__P)&&(n=[],(_=u({},o)).__v=o.__v+1,r=x(i,o,_,t.__n,void 0!==i.ownerSVGElement,null!=o.__h?[l]:null,n,null==l?d(o):l,o.__h),N(n,o),r!=l&&h(o)))})}function m(e,t,n,_,r,i,u,a,p,h){var v,y,m,b,k,w,E,S=_&&_.__k||l,N=S.length;for(p==o&&(p=null!=u?u[0]:N?d(_,0):null),n.__k=[],v=0;v<t.length;v++)if(null!=(b=n.__k[v]=null==(b=t[v])||"boolean"==typeof b?null:"string"==typeof b||"number"==typeof b?s(null,b,null,null,b):Array.isArray(b)?s(f,{children:b},null,null,null):null!=b.__e||null!=b.__c?s(b.type,b.props,b.key,null,b.__v):b)){if(b.__=n,b.__b=n.__b+1,null===(m=S[v])||m&&b.key==m.key&&b.type===m.type)S[v]=void 0;else for(y=0;y<N;y++){if((m=S[y])&&b.key==m.key&&b.type===m.type){S[y]=void 0;break}m=null}k=x(e,b,m=m||o,r,i,u,a,p,h),(y=b.ref)&&m.ref!=y&&(E||(E=[]),m.ref&&E.push(m.ref,null,b),E.push(y,b.__c||k,b)),null!=k?(null==w&&(w=k),p=g(e,b,m,S,u,k,p),h||"option"!=n.type?"function"==typeof n.type&&(n.__d=p):e.value=""):p&&m.__e==p&&p.parentNode!=e&&(p=d(m))}if(n.__e=w,null!=u&&"function"!=typeof n.type)for(v=u.length;v--;)null!=u[v]&&c(u[v]);for(v=N;v--;)null!=S[v]&&H(S[v],S[v]);if(E)for(v=0;v<E.length;v++)A(E[v],E[++v],E[++v])}function g(e,t,n,_,r,o,l){var i,u,c;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(r==n||o!=l||null==o.parentNode)e:if(null==l||l.parentNode!==e)e.appendChild(o),i=null;else{for(u=l,c=0;(u=u.nextSibling)&&c<_.length;c+=2)if(u==o)break e;e.insertBefore(o,l),i=l}return void 0!==i?i:o.nextSibling}function b(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||i.test(t)?n:n+"px"}function k(e,t,n,_,r){var o,l,i;if(r&&"className"==t&&(t="class"),"style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||b(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||b(e.style,t,n[t])}else"o"===t[0]&&"n"===t[1]?(o=t!==(t=t.replace(/Capture$/,"")),(l=t.toLowerCase())in e&&(t=l),t=t.slice(2),e.l||(e.l={}),e.l[t+o]=n,i=o?E:w,n?_||e.addEventListener(t,i,o):e.removeEventListener(t,i,o)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&"href"!==t&&!r&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function w(t){this.l[t.type+!1](e.event?e.event(t):t)}function E(t){this.l[t.type+!0](e.event?e.event(t):t)}function S(e,t,n){var _,r;for(_=0;_<e.__k.length;_++)(r=e.__k[_])&&(r.__=e,r.__e&&("function"==typeof r.type&&r.__k.length>1&&S(r,t,n),t=g(n,r,r,e.__k,null,r.__e,t),"function"==typeof e.type&&(e.__d=t)))}function x(t,n,_,r,i,c,a,s,d){var h,v,y,g,b,w,E,x,N,A,H,T=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(d=_.__h,s=n.__e=_.__e,n.__h=null,c=[s]),(h=e.__b)&&h(n);try{e:if("function"==typeof T){if(x=n.props,N=(h=T.contextType)&&r[h.__c],A=h?N?N.props.value:h.__:r,_.__c?E=(v=n.__c=_.__c).__=v.__E:("prototype"in T&&T.prototype.render?n.__c=v=new T(x,A):(n.__c=v=new p(x,A),v.constructor=T,v.render=P),N&&N.sub(v),v.props=x,v.state||(v.state={}),v.context=A,v.__n=r,y=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=T.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=u({},v.__s)),u(v.__s,T.getDerivedStateFromProps(x,v.__s))),g=v.props,b=v.state,y)null==T.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==T.getDerivedStateFromProps&&x!==g&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(x,A),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(x,v.__s,A)||n.__v===_.__v){v.props=x,v.state=v.__s,n.__v!==_.__v&&(v.__d=!1),v.__v=n,n.__e=_.__e,n.__k=_.__k,v.__h.length&&a.push(v),S(n,s,t);break e}null!=v.componentWillUpdate&&v.componentWillUpdate(x,v.__s,A),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(g,b,w)})}v.context=A,v.props=x,v.state=v.__s,(h=e.__r)&&h(n),v.__d=!1,v.__v=n,v.__P=t,h=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(r=u(u({},r),v.getChildContext())),y||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(g,b)),H=null!=h&&h.type==f&&null==h.key?h.props.children:h,m(t,Array.isArray(H)?H:[H],n,_,r,i,c,a,s,d),v.base=n.__e,n.__h=null,v.__h.length&&a.push(v),E&&(v.__E=v.__=null),v.__e=!1}else null==c&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=function(e,t,n,_,r,i,u,c){var a,s,f,p,d,h=n.props,v=t.props;if(r="svg"===t.type||r,null!=i)for(a=0;a<i.length;a++)if(null!=(s=i[a])&&((null===t.type?3===s.nodeType:s.localName===t.type)||e==s)){e=s,i[a]=null;break}if(null==e){if(null===t.type)return document.createTextNode(v);e=r?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,v.is&&{is:v.is}),i=null,c=!1}if(null===t.type)h===v||c&&e.data===v||(e.data=v);else{if(null!=i&&(i=l.slice.call(e.childNodes)),f=(h=n.props||o).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!c){if(null!=i)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||f)&&(p&&(f&&p.__html==f.__html||p.__html===e.innerHTML)||(e.innerHTML=p&&p.__html||""))}(function(e,t,n,_,r){var o;for(o in n)"children"===o||"key"===o||o in t||k(e,o,null,n[o],_);for(o in t)r&&"function"!=typeof t[o]||"children"===o||"key"===o||"value"===o||"checked"===o||n[o]===t[o]||k(e,o,t[o],n[o],_)})(e,v,h,r,c),p?t.__k=[]:(a=t.props.children,m(e,Array.isArray(a)?a:[a],t,n,_,"foreignObject"!==t.type&&r,i,u,o,c)),c||("value"in v&&void 0!==(a=v.value)&&(a!==e.value||"progress"===t.type&&!a)&&k(e,"value",a,h.value,!1),"checked"in v&&void 0!==(a=v.checked)&&a!==e.checked&&k(e,"checked",a,h.checked,!1))}return e}(_.__e,n,_,r,i,c,a,d);(h=e.diffed)&&h(n)}catch(t){n.__v=null,(d||null!=c)&&(n.__e=s,n.__h=!!d,c[c.indexOf(s)]=null),e.__e(t,n,_)}return n.__e}function N(t,n){e.__c&&e.__c(n,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(e){e.call(n)})}catch(t){e.__e(t,n.__v)}})}function A(t,n,_){try{"function"==typeof t?t(n):t.current=n}catch(t){e.__e(t,_)}}function H(t,n,_){var r,o,l;if(e.unmount&&e.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||A(r,null,n)),_||"function"==typeof t.type||(_=null!=(o=t.__e)),t.__e=t.__d=void 0,null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){e.__e(t,n)}r.base=r.__P=null}if(r=t.__k)for(l=0;l<r.length;l++)r[l]&&H(r[l],n,_);null!=o&&c(o)}function P(e,t,n){return this.constructor(e,n)}e={__e:function(e,t){for(var n,_,r,o=t.__h;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return t.__h=o,n.__E=n}catch(t){e=t}throw e},__v:0},p.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=u({},this.state),"function"==typeof e&&(e=e(u({},n),this.props)),e&&u(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),v(this))},p.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),v(this))},p.prototype.render=f,t=[],n="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,y.__r=0,r=o;var T,C,L,O=function(e){var t,n=e.selector,_=e.inline,r=e.clientSpecified,o=[],l=document.currentScript||(t=document.getElementsByTagName("script"))[t.length-1];return!0===_&&o.push(l.parentNode),!0!==r||n||(n=function(e){var t=e.attributes,n=null;return Object.keys(t).forEach(function(e){t.hasOwnProperty(e)&&"data-mount-in"===t[e].name&&(n=t[e].nodeValue)}),n}(l)),n&&[].forEach.call(document.querySelectorAll(n),function(e){o.push(e)}),o},D=0,U=[],j=e.__b,M=e.__r,F=e.diffed,W=e.__c,B=e.unmount;function q(t,n){e.__h&&e.__h(C,t,D||n),D=0;var _=C.__H||(C.__H={__:[],__h:[]});return t>=_.__.length&&_.__.push({}),_.__[t]}function R(e,t){var n=q(T++,7);return function(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function z(){U.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(V),t.__H.__h.forEach(G),t.__H.__h=[]}catch(n){t.__H.__h=[],e.__e(n,t.__v)}}),U=[]}e.__b=function(e){C=null,j&&j(e)},e.__r=function(e){M&&M(e),T=0;var t=(C=e.__c).__H;t&&(t.__h.forEach(V),t.__h.forEach(G),t.__h=[])},e.diffed=function(t){F&&F(t);var n=t.__c;n&&n.__H&&n.__H.__h.length&&(1!==U.push(n)&&L===e.requestAnimationFrame||((L=e.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(_),I&&cancelAnimationFrame(t),setTimeout(e)},_=setTimeout(n,100);I&&(t=requestAnimationFrame(n))})(z)),C=void 0},e.__c=function(t,n){n.some(function(t){try{t.__h.forEach(V),t.__h=t.__h.filter(function(e){return!e.__||G(e)})}catch(_){n.some(function(e){e.__h&&(e.__h=[])}),n=[],e.__e(_,t.__v)}}),W&&W(t,n)},e.unmount=function(t){B&&B(t);var n=t.__c;if(n&&n.__H)try{n.__H.__.forEach(V)}catch(t){e.__e(t,n.__v)}};var I="function"==typeof requestAnimationFrame;function V(e){var t=C;"function"==typeof e.__c&&e.__c(),C=t}function G(e){var t=C;e.__c=e.__(),C=t}function J(e,t){return"function"==typeof t?t(e):t}var $,K,Q=(function(e){!function(){var t={}.hasOwnProperty;function n(){for(var e=[],_=0;_<arguments.length;_++){var r=arguments[_];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var l=n.apply(null,r);l&&e.push(l)}else if("object"===o)for(var i in r)t.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n}()}($={exports:{}}),$.exports),X=function(e){var t=e.className,n=function(e,t){if(null==e)return{};var n,_,r={},o=Object.keys(e);for(_=0;_<o.length;_++)t.indexOf(n=o[_])>=0||(r[n]=e[n]);return r}(e,["className"]);return a("input",Object.assign({class:Q("_3E_BR",t)},n))},Y=function(e){var t=e.firstName,n=(D=1,function(e,t,n){var _=q(T++,2);return _.t=e,_.__c||(_.__=[J(void 0,"User"),function(e){var t=_.t(_.__[0],e);_.__[0]!==t&&(_.__=[t,_.__[1]],_.__c.setState({}))}],_.__c=C),_.__}(J)),_=n[0],r=n[1],o=function(e,t){return D=8,R(function(){return e},[])}(function(e){console.log("last name updated!",e.target.value),r(e.target.value)});return a("div",{class:"_1-j_z"},a("p",null,"Hello, ",t," ",_),a("p",null,a(X,{value:_,onInput:o})))},Z=(K=function(e){return a("div",{class:"_1vjs4"},a("h1",{style:{color:e.color}},e.title),a(Y,{firstName:"Joe"}))},{render:function(t){void 0===t&&(t={});var n=t.selector;void 0===n&&(n=null);var _=t.inline;void 0===_&&(_=!1);var i=t.clean;void 0===i&&(i=!1);var u=t.clientSpecified;void 0===u&&(u=!1);var c=t.defaultProps;void 0===c&&(c={});var s=O({selector:n,inline:_,clientSpecified:u}),p=function(){if(s.length>0){var t=O({selector:n,inline:_,clientSpecified:u});return function(t,n,_,i,u){n.forEach(function(n){var _=n;if(!_._habitat){_._habitat=!0;var c=function(e,t){void 0===t&&(t={});var n=e.attributes,_=Object.assign({},t);return Object.keys(n).forEach(function(e){if(n.hasOwnProperty(e)){var t=n[e].name;if(!t||"string"!=typeof t)return!1;var r=t.split(/(data-props?-)/).pop()||"";t!==(r=r.replace(/-([a-z])/gi,function(e,t){return t.toUpperCase()}))&&(_[r]=n[e].nodeValue)}}),[].forEach.call(e.getElementsByTagName("script"),function(e){var t={};if(e.hasAttribute("type")){if("text/props"!==e.getAttribute("type")&&"application/json"!==e.getAttribute("type"))return;try{t=JSON.parse(e.innerHTML)}catch(e){throw new Error(e)}Object.assign(_,t)}}),_}(n,u)||u;return i&&(_.innerHTML=""),function(t,n,_){var i,u,c;e.__&&e.__(t,n),u=(i=null===r)?null:n.__k,t=a(f,null,[t]),c=[],x(n,n.__k=t,u||o,o,void 0!==n.ownerSVGElement,u?null:n.childNodes.length?l.slice.call(n.childNodes):null,c,o,i),N(c,t)}(a(t,c),_)}})}(K,t,0,i,c)}};p(),document.addEventListener("DOMContentLoaded",p),document.addEventListener("load",p)}});if(window["preact-ts-widget-css"]){var ee=document.head||document.getElementsByTagName("head")[0],te=document.createElement("style");ee.appendChild(te),te.type="text/css",te.appendChild(document.createTextNode(window["preact-ts-widget-css"]))}Z.render({selector:'[data-widget-host="preact-ts-widget"]',clean:!0});
//# sourceMappingURL=index.js.map
