_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[126],{"62On":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return c}));var r={labelCol:{xs:{span:24},sm:{span:12}},wrapperCol:{xs:{span:24},sm:{span:12}}};function a(){var e=document.querySelector(".content"),t=document.querySelector(".container");e.scroll({top:0,behavior:"auto"}),t.scroll({top:0,behavior:"auto"})}var o={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:0}}},c={primaryColor:"#ff0066",successColor:"#2fb52d",whiteColor:"#ffffff"}},"9Byw":function(e,t,n){"use strict";n.d(t,"z",(function(){return a})),n.d(t,"C",(function(){return c})),n.d(t,"I",(function(){return u})),n.d(t,"F",(function(){return i})),n.d(t,"y",(function(){return s})),n.d(t,"H",(function(){return l})),n.d(t,"E",(function(){return f})),n.d(t,"G",(function(){return d})),n.d(t,"D",(function(){return p})),n.d(t,"l",(function(){return m})),n.d(t,"n",(function(){return O})),n.d(t,"m",(function(){return v})),n.d(t,"w",(function(){return h})),n.d(t,"o",(function(){return y})),n.d(t,"q",(function(){return S})),n.d(t,"p",(function(){return E})),n.d(t,"x",(function(){return j})),n.d(t,"u",(function(){return T})),n.d(t,"i",(function(){return M})),n.d(t,"k",(function(){return _})),n.d(t,"j",(function(){return w})),n.d(t,"v",(function(){return C})),n.d(t,"a",(function(){return I})),n.d(t,"h",(function(){return k})),n.d(t,"f",(function(){return U})),n.d(t,"g",(function(){return A})),n.d(t,"B",(function(){return x})),n.d(t,"b",(function(){return N})),n.d(t,"e",(function(){return q})),n.d(t,"c",(function(){return B})),n.d(t,"d",(function(){return G})),n.d(t,"A",(function(){return F})),n.d(t,"r",(function(){return H})),n.d(t,"t",(function(){return L})),n.d(t,"s",(function(){return K})),n.d(t,"J",(function(){return z}));var r=n("vo7w"),a=Object(r.a)("updateCurrentStudio"),o=Object(r.b)("updateStudio","UPDATE_STUDIO"),c=o.updateStudio,u=o.updateStudioSuccess,i=o.updateStudioFail,s=Object(r.a)("updatingStudio"),l=Object(r.a)("UPDATE_STUDIO_PAYMENT_INFO"),f=Object(r.a)("UPDATE_STUDIO_DIRECT_DEPOSIT"),d=Object(r.a)("UPDATE_STUDIO_PAXUM"),p=Object(r.a)("UPDATE_STUDIO_BITPAY"),b=Object(r.b)("getStudioEarning","GET_STUDIO_EARNING"),m=b.getStudioEarning,O=b.getStudioEarningSuccess,v=b.getStudioEarningFail,h=Object(r.a)("SET_GETTING_STUDIO_EARNIG"),g=Object(r.b)("getStudioPayoutRequest","GET_STUDIO_PAYOUT_REQUEST"),y=g.getStudioPayoutRequest,S=g.getStudioPayoutRequestSuccess,E=g.getStudioPayoutRequestFail,j=Object(r.a)("SET_GETTING_STUDIO_PAYOUT_REQUEST"),T=Object(r.a)("REMOVE_STUDIO_PAYOUT_REQUEST"),P=Object(r.b)("getPerformerRequest","GET_PERFORMER_REQUEST"),M=P.getPerformerRequest,_=P.getPerformerRequestSuccess,w=P.getPerformerRequestFail,C=Object(r.a)("SET_GETTING_PERFORMER_REQUEST"),R=Object(r.b)("getMembers","GET_MEMBERS"),I=R.getMembers,k=R.getMembersSuccess,U=R.getMembersFail,A=Object(r.a)("GET_MEMBER_SEACHING"),x=Object(r.a)("UPDATE_MEMBER_STATUS"),D=Object(r.b)("getMembersCommissions","GET_MEMBERS_COMMSSIONS"),N=D.getMembersCommissions,q=D.getMembersCommissionsSuccess,B=D.getMembersCommissionsFail,G=Object(r.a)("GET_MEMBER_COMMSSIO_SEACHING"),F=Object(r.a)("UPDATE_MEMBER_COMMISSION"),Y=Object(r.b)("getStudioStats","GET_STUDIO_STATS"),H=Y.getStudioStats,L=Y.getStudioStatsSuccess,K=Y.getStudioStatsFail,z=Object(r.a)("UPDATE_TOTAL_PERFORMER")},ADto:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return i}));var r=n("wd/R"),a=n.n(r);function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"DD/MM/YYYY HH:mm:ss";return a()(e).format(t)}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm";return a.a.utc(a.a.duration(e,"milliseconds").asMilliseconds()).format(t)}function u(e){return e?(new Date).getFullYear()-new Date(e).getFullYear():""}function i(e){var t=Math.floor(e/3600),n=Math.floor((e-3600*t)/60),r=e-3600*t-60*n;return"".concat(t<10?"0":"").concat(t,":").concat(n<10?"0":"").concat(n,":").concat(r<10?"0":"").concat(r)}},BMrR:function(e,t,n){"use strict";var r=n("qrJ5");t.a=r.a},GMeC:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("XwMy"),a=n("tsqr");function o(e){var t=e.name.split(".").pop().toLowerCase();return-1===r.a.imageAccept.split(",").map((function(e){return e.trim()})).indexOf(".".concat(t))?(a.b.error("You can only upload ".concat(r.a.imageAccept," file!")),!1):!!(e.size/1024/1024<(r.a.maximumSizeUploadAvatar||2))||(a.b.error("Image must smaller than ".concat(r.a.maximumSizeUploadAvatar||2,"MB!")),!1)}},YFqc:function(e,t,n){e.exports=n("cTJO")},YRv5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={pattern:new RegExp("^[a-zA-Z0-9]*$"),message:"Dont allow special chars or space"}},ZNXZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/studio/models",function(){return n("pKJs")}])},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o,c=a(n("q1tI")),u=n("elyg"),i=n("nOHt"),s=new Map,l=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(l?o=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function p(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var b=function(e){var t=!1!==e.prefetch,n=c.default.useState(),a=r(n,2),o=a[0],s=a[1],b=(0,i.useRouter)(),m=b&&b.pathname||"/",O=c.default.useMemo((function(){var t=(0,u.resolveHref)(m,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,u.resolveHref)(m,e.as):o||a}}),[m,e.href,e.as]),v=O.href,h=O.as;c.default.useEffect((function(){if(t&&l&&o&&o.tagName&&(0,u.isLocalURL)(v)&&!f[v+"%"+h])return d(o,(function(){p(b,v,h)}))}),[t,o,v,h,b]);var g=e.children,y=e.replace,S=e.shallow,E=e.scroll;"string"===typeof g&&(g=c.default.createElement("a",null,g));var j=c.Children.only(g),T={ref:function(e){e&&s(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,b,v,h,y,S,E)}};return t&&(T.onMouseEnter=function(e){(0,u.isLocalURL)(v)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),p(b,v,h,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(T.href=(0,u.addBasePath)((0,u.addLocale)(h,b&&b.locale,b&&b.defaultLocale))),c.default.cloneElement(j,T)};t.default=b},iOTI:function(e,t,n){"use strict";var r=n("Vl3Y"),a=n("5rEg"),o=n("2fM7"),c=n("2/Rp"),u=n("l+S1"),i=n("q1tI"),s=n.n(i).a.createElement,l=function(e){var t=e.onSearch,n=e.searching;return s("div",null,s(r.a,{onFinish:t,name:"studioSearchModels",layout:"vertical",initialValues:{q:"",status:""}},s(r.a.Item,{name:"q",key:"name"},s(a.a,{type:"text",prefix:s(u.a,{className:"site-form-item-icon"}),placeholder:"Search..."})),s(r.a.Item,{name:"status",key:"onlineStatus"},s(o.a,null,s(o.a.Option,{value:"",key:""},"All Status"),s(o.a.Option,{value:"active",key:"active"},"Active"),s(o.a.Option,{value:"inactive",key:"inactive"},"Inactive"))),s(r.a.Item,null,s(c.a,{type:"primary",htmlType:"submit",disabled:n,loading:n},"Search"))))};l.defaultProps={onSearch:null},t.a=l},kPKH:function(e,t,n){"use strict";var r=n("/kpp");t.a=r.a},mr32:function(e,t,n){"use strict";var r=n("rePB"),a=n("wx14"),o=n("ODXe"),c=n("q1tI"),u=n("TSYQ"),i=n.n(u),s=n("bT9E"),l=n("4i/N"),f=n("H84U"),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},p=function(e){var t,n=e.prefixCls,o=e.className,u=e.checked,s=e.onChange,l=e.onClick,p=d(e,["prefixCls","className","checked","onChange","onClick"]),b=(0,c.useContext(f.b).getPrefixCls)("tag",n),m=i()(b,(t={},Object(r.a)(t,"".concat(b,"-checkable"),!0),Object(r.a)(t,"".concat(b,"-checkable-checked"),u),t),o);return c.createElement("span",Object(a.a)({},p,{className:m,onClick:function(e){null===s||void 0===s||s(!u),null===l||void 0===l||l(e)}}))},b=n("09Wf"),m=n("g0mS"),O=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},v=new RegExp("^(".concat(b.a.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(b.b.join("|"),")$")),g=function(e,t){var n,u=e.prefixCls,d=e.className,p=e.style,b=e.children,g=e.icon,y=e.color,S=e.onClose,E=e.closeIcon,j=e.closable,T=void 0!==j&&j,P=O(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),M=c.useContext(f.b),_=M.getPrefixCls,w=M.direction,C=c.useState(!0),R=Object(o.a)(C,2),I=R[0],k=R[1];c.useEffect((function(){"visible"in P&&k(P.visible)}),[P.visible]);var U=function(){return!!y&&(v.test(y)||h.test(y))},A=Object(a.a)({backgroundColor:y&&!U()?y:void 0},p),x=U(),D=_("tag",u),N=i()(D,(n={},Object(r.a)(n,"".concat(D,"-").concat(y),x),Object(r.a)(n,"".concat(D,"-has-color"),y&&!x),Object(r.a)(n,"".concat(D,"-hidden"),!I),Object(r.a)(n,"".concat(D,"-rtl"),"rtl"===w),n),d),q=function(e){e.stopPropagation(),null===S||void 0===S||S(e),e.defaultPrevented||"visible"in P||k(!1)},B="onClick"in P||b&&"a"===b.type,G=Object(s.a)(P,["visible"]),F=g||null,Y=F?c.createElement(c.Fragment,null,F,c.createElement("span",null,b)):b,H=c.createElement("span",Object(a.a)({},G,{ref:t,className:N,style:A}),Y,T?E?c.createElement("span",{className:"".concat(D,"-close-icon"),onClick:q},E):c.createElement(l.a,{className:"".concat(D,"-close-icon"),onClick:q}):null);return B?c.createElement(m.a,null,H):H},y=c.forwardRef(g);y.displayName="Tag",y.CheckableTag=p;t.a=y},pKJs:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),c=n("md7G"),u=n("foSv"),i=n("rePB"),s=n("q1tI"),l=n.n(s),f=n("BMrR"),d=n("kPKH"),p=n("Y1dN"),b=n("8Kt/"),m=n.n(b),O=n("YFqc"),v=n.n(O),h=n("9Byw"),g=n("iOTI"),y=n("psLn"),S=n("mr32"),E=n("wCAj"),j=n("o0o1"),T=n.n(j),P=n("HaE+"),M=n("ODXe"),_=n("tsqr"),w=n("2/Rp"),C=l.a.createElement,R=function(e){var t=e.member,n=e.updateMemberStatus,r=l.a.useState(!1),a=Object(M.a)(r,2),o=a[0],c=a[1],u=function(){var e=Object(P.a)(T.a.mark((function e(t){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,c(!0),n(t._id),_.b.success("Update Success"),e.next=12;break;case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,Promise.resolve(e.t0);case 10:r=e.sent,_.b.error(Object(y.j)(r));case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,6,12,15]])})));return function(t){return e.apply(this,arguments)}}();return C(w.a,{type:"active"===t.status?"default":"primary",onClick:function(){return u(t)},loading:o,disabled:o},"active"===t.status?"Inactive":"Active")},I=l.a.createElement;function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=e.data,n=e.searching,r=e.total,a=e.pageSize,o=e.updateMemberStatus,c=e.onChange,u=e.placeholderAvatarUrl,i=[{title:"Avatar",key:"avatar",dataIndex:"avatar",render:function(e){return I("img",{src:e||u||"/no-avatar.png",style:{width:"100px "},alt:""})}},{title:"Email",key:"email",dataIndex:"email"},{title:"Username",key:"username",dataIndex:"username"},{title:"Age",key:"age",dataIndex:"dateOfBirth",render:function(e){return Object(y.h)(e)}},{title:"Gender",key:"gender",dataIndex:"gender"},{title:"Country",key:"country",dataIndex:"country"},{title:"Status",key:"status",dataIndex:"status",render:function(e){switch(e){case"active":return I(S.a,{color:"green"},"Active");case"inactive":return I(S.a,{color:"Red"},"Inactive");case"pending":default:return I(S.a,{color:"orange"},"Pending")}}},{title:"Actions",key:"actions",render:function(e){return I(R,{member:e,updateMemberStatus:o})}}],s=t.map((function(e){return U(U({},e),{},{key:e._id})}));return I(E.a,{dataSource:s,columns:i,loading:n,pagination:{pageSize:a,total:r},onChange:c,scroll:{x:!0}})};A.defaultProps={placeholderAvatarUrl:""};var x=A,D=n("/MKj"),N=(n("BhtX"),l.a.createElement);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var F=function(e){Object(o.a)(n,e);var t=G(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={limit:12,offset:0,sortBy:"createdAt",sort:"desc",filter:{}},a}return Object(a.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getMembers)(this.state)}},{key:"componentDidUpdate",value:function(e,t){var n=this.props.getMembers;t!==this.state&&n(this.state)}},{key:"handleTableChange",value:function(e,t,n){var r=this.state;this.setState(Object(y.k)(e,t,n,r))}},{key:"onSearch",value:function(e){this.setState(e)}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.searching,r=e.total,a=e.updateMemberStatus,o=e.placeholderAvatarUrl,c=this.state.limit;return N(l.a.Fragment,null,N(m.a,null,N("title",null,"Studio's Models")),N("div",{className:"studio-models-background"},N(p.a,{title:"Models",extra:N(v.a,{href:"/studio/models/add"},N("a",null,"Add new member"))}),N("div",{className:"studio-models-box"},N(f.a,null,N(d.a,{xs:24,sm:12},N(g.a,{searching:n,onSearch:this.onSearch.bind(this)})),N(d.a,{xs:24,sm:12})),N(x,{data:t,searching:n,total:r,updateMemberStatus:a,onChange:this.handleTableChange.bind(this),pageSize:c,placeholderAvatarUrl:o}))))}}]),n}(s.PureComponent);Object(i.a)(F,"authenticate","studio"),Object(i.a)(F,"layout","primary");var Y={getMembers:h.a,updateMemberStatus:h.B};t.default=Object(D.b)((function(e){return B(B({},e.studio.members),{},{placeholderAvatarUrl:e.ui.placeholderAvatarUrl})}),Y)(F)},psLn:function(e,t,n){"use strict";n.d(t,"c",(function(){return r.f})),n.d(t,"a",(function(){return a.a})),n.d(t,"n",(function(){return a.d})),n.d(t,"f",(function(){return o.b})),n.d(t,"b",(function(){return o.a})),n.d(t,"h",(function(){return o.d})),n.d(t,"g",(function(){return o.c})),n.d(t,"o",(function(){return c})),n.d(t,"e",(function(){return u.c})),n.d(t,"m",(function(){return u.d})),n.d(t,"d",(function(){return u.b})),n.d(t,"j",(function(){return i.h})),n.d(t,"k",(function(){return i.i})),n.d(t,"i",(function(){return i.e})),n.d(t,"l",(function(){return i.j}));n("o0o1"),n("HaE+");var r=n("vo7w"),a=n("rP/q"),o=n("ADto"),c={required:"This field is required!",types:{email:"Not a validate email!",number:"Not a validate number!"},number:{range:"Must be between min and max"}},u=n("62On"),i=n("NsEo");n("YRv5"),n("GMeC")}},[["ZNXZ",0,1,3,5,2,4,6,7,10,9,11,12,13,14,15,16,17,18,19,21,22,23,26,8]]]);