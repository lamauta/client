_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[99],{"+KLJ":function(e,t,n){"use strict";var r=n("wx14"),a=n("rePB"),o=n("ODXe"),i=n("q1tI"),s=n("4i/N"),c=n("Ue1A"),l=n("RCxd"),u=n("+YFz"),f=n("2BaD"),d=n("jO45"),m=n("IMoZ"),p=n("zueq"),h=n("jN4g"),g=n("8XRh"),b=n("TSYQ"),y=n.n(b),v=n("H84U"),O=n("RqAY"),w=n("1OyB"),E=n("vuIU"),j=n("Ji7U"),I=n("LK+K"),R=function(e){Object(j.a)(n,e);var t=Object(I.a)(n);function n(){var e;return Object(w.a)(this,n),(e=t.apply(this,arguments)).state={error:void 0,info:{componentStack:""}},e}return Object(E.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.description,r=e.children,a=this.state,o=a.error,s=a.info,c=s&&s.componentStack?s.componentStack:null,l="undefined"===typeof t?(o||"").toString():t,u="undefined"===typeof n?c:n;return o?i.createElement(L,{type:"error",message:l,description:i.createElement("pre",null,u)}):r}}]),n}(i.Component),S=n("0n0R"),T=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},P={success:d.a,info:p.a,error:h.a,warning:m.a},x={success:c.a,info:u.a,error:f.a,warning:l.a},N=function(e){var t,n=e.description,c=e.prefixCls,l=e.message,u=e.banner,f=e.className,d=void 0===f?"":f,m=e.style,p=e.onMouseEnter,h=e.onMouseLeave,b=e.onClick,w=e.afterClose,E=e.showIcon,j=e.closable,I=e.closeText,R=e.action,N=T(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),L=i.useState(!1),U=Object(o.a)(L,2),M=U[0],k=U[1],C=i.useRef(),A=i.useContext(v.b),_=A.getPrefixCls,D=A.direction,F=_("alert",c),q=function(e){var t;k(!0),null===(t=N.onClose)||void 0===t||t.call(N,e)},B=!!I||j,V=function(){var e=N.type;return void 0!==e?e:u?"warning":"info"}(),G=!(!u||void 0!==E)||E,H=y()(F,"".concat(F,"-").concat(V),(t={},Object(a.a)(t,"".concat(F,"-with-description"),!!n),Object(a.a)(t,"".concat(F,"-no-icon"),!G),Object(a.a)(t,"".concat(F,"-banner"),!!u),Object(a.a)(t,"".concat(F,"-rtl"),"rtl"===D),t),d),z=Object(O.a)(N);return i.createElement(g.default,{visible:!M,motionName:"".concat(F,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(e){return{maxHeight:e.offsetHeight}},onLeaveEnd:w},(function(e){var t=e.className,o=e.style;return i.createElement("div",Object(r.a)({ref:C,"data-show":!M,className:y()(H,t),style:Object(r.a)(Object(r.a)({},m),o),onMouseEnter:p,onMouseLeave:h,onClick:b,role:"alert"},z),G?function(){var e=N.icon,t=(n?x:P)[V]||null;return e?Object(S.c)(e,i.createElement("span",{className:"".concat(F,"-icon")},e),(function(){return{className:y()("".concat(F,"-icon"),Object(a.a)({},e.props.className,e.props.className))}})):i.createElement(t,{className:"".concat(F,"-icon")})}():null,i.createElement("div",{className:"".concat(F,"-content")},l?i.createElement("div",{className:"".concat(F,"-message")},l):null,n?i.createElement("div",{className:"".concat(F,"-description")},n):null),R?i.createElement("div",{className:"".concat(F,"-action")},R):null,B?i.createElement("button",{type:"button",onClick:q,className:"".concat(F,"-close-icon"),tabIndex:0},I?i.createElement("span",{className:"".concat(F,"-close-text")},I):i.createElement(s.a,null)):null)}))};N.ErrorBoundary=R;var L=t.a=N},COv8:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),o=n("HaE+"),i=n("1OyB"),s=n("vuIU"),c=n("Ji7U"),l=n("md7G"),u=n("foSv"),f=n("rePB"),d=n("q1tI"),m=n.n(d),p=(n("Lmjj"),n("8Kt/")),h=n.n(p),g=n("nOHt"),b=n.n(g),y=n("tsqr"),v=n("+KLJ"),O=n("/MKj"),w=n("kXO4"),E=n("ODXe"),j=n("Vl3Y"),I=n("+eQT"),R=n("5rEg"),S=n("2fM7"),T=n("8z0m"),P=n("2/Rp"),x=n("wd/R"),N=n.n(x),L=n("pHZt"),U=n("NsEo"),M=n("z7Xi"),k=n("YFqc"),C=n.n(k),A=n("YRv5"),_=d.createElement;function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var F={updateUIValue:L.b},q=Object(O.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.ui)}),F)((function(e){var t=e.onFinish,n=e.submiting,r=e.countries,a=e.error,o=e.singularTextModel,i=d.useState(""),s=Object(E.a)(i,2),c=s[0],l=s[1],u=d.useState(""),f=Object(E.a)(u,2),m=f[0],p=f[1],h=j.a.useForm(),g=Object(E.a)(h,1)[0];return _(j.a,{layout:"vertical",form:g,onFinish:t,name:"performerRegisterForm",initialValues:{country:void 0,gender:"female"}},_("h1",null,o||"Performer"," ","register"),_(j.a.Item,{name:"dateOfBirth",rules:[{required:!0,message:"Please input your date of birth!"},{validator:function(e,t){return N()().diff(t,"years")>=18?Promise.resolve():Promise.reject(new Error("Minimum of 18 years"))}}]},_(I.a,{placeholder:"Date of Birth"})),_(j.a.Item,{name:"firstName",rules:[{required:!0,message:"Please input your first name!"},{pattern:new RegExp("^[a-zA-Z0-9 ]*$"),message:"Alphanumeric"},{whitespace:!0,message:"Please input your first name!"}]},_(R.a,{placeholder:"First Name"})),_(j.a.Item,{name:"lastName",rules:[{required:!0,message:"Please input your last name!"},{pattern:new RegExp("^[a-zA-Z0-9 ]*$"),message:"Alphanumeric"},{whitespace:!0,message:"Please input your last name!"}]},_(R.a,{placeholder:"Last Name"})),_(j.a.Item,{name:"email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},_(R.a,{placeholder:"E-mail"})),_(j.a.Item,{name:"username",rules:[{required:!0,message:"Username is required!"},A.a]},_(R.a,{placeholder:"Username"})),_(j.a.Item,{name:"password",rules:[{required:!0,message:"Please input your password!"},{min:6,max:14,message:"Passoword should be 6-14 characters"}],hasFeedback:!0},_(R.a.Password,{placeholder:"Password"})),_(j.a.Item,{name:"confirm",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,n){return n&&t("password")!==n?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}]},_(R.a.Password,{placeholder:"Confirm Password"})),_(j.a.Item,{name:"country",rules:[{required:!0,message:"Please input your country!"}]},_(S.a,{showSearch:!0,placeholder:"Country"},r.length>0&&r.map((function(e){return _(S.a.Option,{value:e.name,key:e.code},e.name)})))),_(j.a.Item,{name:"gender"},_(S.a,{placeholder:"Gender"},_(S.a.Option,{value:"male",key:"male"},"Male"),_(S.a.Option,{value:"female",key:"female"},"Female"),_(S.a.Option,{value:"transgender",key:"transgender"},"Transgender"))),_(j.a.Item,{name:"documentVerification",rules:[{required:!0,message:"Verification document is required!"}]},_(T.a,{showUploadList:!1,customRequest:function(){return!0},fileList:[],onChange:function(e){return p(e.file.name)}},_(P.a,null,_(M.a,null)," ","Upload Document For Verification"),m&&_("span",{className:"file-name"},m))),_(j.a.Item,{name:"idVerification",rules:[{required:!0,message:"Id Verifycation is required"}]},_(T.a,{showUploadList:!1,customRequest:function(){return!0},fileList:[],onChange:function(e){return l(e.file.name)}},_(P.a,null,_(M.a,null),"Upload ID For Verification"),c&&_("span",{className:"file-name"},c))),a&&_(j.a.Item,null,_(v.a,{description:Object(U.h)(a),type:"error",message:"Error"})),_(j.a.Item,null,_(P.a,{type:"primary",htmlType:"submit",disabled:n,loading:n,className:"btn-submit"},"Register new account")),_(j.a.Item,null,"Are you a"," ",o||"Performer","?"," ",_(C.a,{href:"/auth/login/performer"},_("a",null,"Login"))),_(j.a.Item,null,"Want to be a member?"," ",_(C.a,{href:"/auth/register/user"},_("a",null,"Signup now"))))})),B=n("zM0U"),V=n("n3wA"),G=m.a.createElement;function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var a=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var K=function(e){Object(c.a)(n,e);var t=Y(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={error:!1,errorMessage:"",countries:[]},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.getContries()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.success,r=t.data,a=t.error;e.success!==n&&n&&(y.b.success(r&&r.message||"Your register has been successfully, please wait for our admin approval"),b.a.push("/auth/login/performer")),e.error!==a&&a&&y.b.error(Object(U.h)(a))}},{key:"onFinish",value:function(e){var t=this.props.performerRegister,n=z({},e);e.dateOfBirth&&(n=z(z({},e),{},{dateOfBirth:N()(e.dateOfBirth).toISOString()})),t(n)}},{key:"getContries",value:function(){var e=Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.getCountries();case 3:t=e.sent,this.setState({countries:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),this.setState({error:!0,errorMessage:Object(U.h)(e.t0)});case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.submiting,n=e.ui,r=this.state,a=r.error,o=r.errorMessage,i=r.countries;return G(m.a.Fragment,null,G(h.a,null,G("title",null,(null===n||void 0===n?void 0:n.singularTextModel)||"Performer"," ","Register")),G("div",{className:"register-page"},G("div",{className:"form-register-container"},o&&G(v.a,{type:"error",message:"Error request",banner:!0}),G(q,{singularTextModel:(null===n||void 0===n?void 0:n.singularTextModel)||"Performer",onFinish:this.onFinish.bind(this),submiting:t,countries:i,error:a})),G(V.a,{ui:n})))}}]),n}(d.PureComponent);Object(f.a)(K,"authenticate",!1),Object(f.a)(K,"layout","auth");var J={performerRegister:w.f,updateUIValue:L.b};t.default=Object(O.b)((function(e){return z({ui:e.ui,loggedIn:e.auth.loggedIn},e.auth.performerRegister)}),J)(K)},Gytx:function(e,t){e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),c=0;c<o.length;c++){var l=o[c];if(!s(l))return!1;var u=e[l],f=t[l];if(!1===(a=n?n.call(r,u,f,l):void 0)||void 0===a&&u!==f)return!1}return!0}},Lmjj:function(e,t,n){},RqAY:function(e,t,n){"use strict";function r(e){return Object.keys(e).reduce((function(t,n){return"data-"!==n.substr(0,5)&&"aria-"!==n.substr(0,5)&&"role"!==n||"data-__"===n.substr(0,7)||(t[n]=e[n]),t}),{})}n.d(t,"a",(function(){return r}))},YFqc:function(e,t,n){e.exports=n("cTJO")},YRv5:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={pattern:new RegExp("^[a-zA-Z0-9]*$"),message:"Dont allow special chars or space"}},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o,i=a(n("q1tI")),s=n("elyg"),c=n("nOHt"),l=new Map,u=window.IntersectionObserver,f={};var d=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function m(e,t,n,r){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],l=a[1],p=(0,c.useRouter)(),h=p&&p.pathname||"/",g=i.default.useMemo((function(){var t=(0,s.resolveHref)(h,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,s.resolveHref)(h,e.as):o||a}}),[h,e.href,e.as]),b=g.href,y=g.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,s.isLocalURL)(b)&&!f[b+"%"+y])return d(o,(function(){m(p,b,y)}))}),[t,o,b,y,p]);var v=e.children,O=e.replace,w=e.shallow,E=e.scroll;"string"===typeof v&&(v=i.default.createElement("a",null,v));var j=i.Children.only(v),I={ref:function(e){e&&l(e),j&&"object"===typeof j&&j.ref&&("function"===typeof j.ref?j.ref(e):"object"===typeof j.ref&&(j.ref.current=e))},onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,b,y,O,w,E)}};return t&&(I.onMouseEnter=function(e){(0,s.isLocalURL)(b)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),m(p,b,y,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(I.href=(0,s.addBasePath)((0,s.addLocale)(y,p&&p.locale,p&&p.defaultLocale))),i.default.cloneElement(j,I)};t.default=p},"k/nb":function(e,t,n){},kXO4:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"i",(function(){return u})),n.d(t,"k",(function(){return f})),n.d(t,"j",(function(){return d})),n.d(t,"l",(function(){return m})),n.d(t,"p",(function(){return h})),n.d(t,"r",(function(){return g})),n.d(t,"q",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"h",(function(){return O})),n.d(t,"g",(function(){return w})),n.d(t,"m",(function(){return E})),n.d(t,"v",(function(){return I})),n.d(t,"x",(function(){return R})),n.d(t,"w",(function(){return S})),n.d(t,"o",(function(){return T})),n.d(t,"s",(function(){return x})),n.d(t,"u",(function(){return N})),n.d(t,"t",(function(){return L})),n.d(t,"n",(function(){return U})),n.d(t,"e",(function(){return M}));var r=n("vo7w"),a=Object(r.b)("login","LOGIN"),o=a.login,i=a.loginSuccess,s=a.loginFail,c=Object(r.a)("LOGIN_REQUESTING"),l=Object(r.b)("performerlogin","PERFORMER_LOGIN"),u=l.performerlogin,f=l.performerloginSuccess,d=l.performerloginFail,m=Object(r.a)("resetLoginData"),p=Object(r.b)("studioLogin","STUDIO_LOGIN"),h=p.studioLogin,g=p.studioLoginSuccess,b=p.studioLoginFail,y=Object(r.b)("performerRegister","PERFORMER_REGISTER"),v=y.performerRegister,O=y.performerRegisterSuccess,w=y.performerRegisterFail,E=Object(r.a)("SET_PERFORMER_REGISTER_SUBMITTING"),j=Object(r.b)("userRegister","USER_REGISTER"),I=j.userRegister,R=j.userRegisterSuccess,S=j.userRegisterFail,T=Object(r.a)("SET_USER_REGISTER_SUBMITTING"),P=Object(r.b)("updatePassword","UPDATE_PASSWORD"),x=P.updatePassword,N=P.updatePasswordSuccess,L=P.updatePasswordFail,U=Object(r.a)("SET_UPDATE_PASSWORD_SUBMITTING"),M=Object(r.a)("logout")},n3wA:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var r=n("q1tI"),a=n.n(r),o=a.a.createElement,i=function(e){var t=e.ui;return o("div",{className:"form-register-placeholder",style:null!==t&&void 0!==t&&t.placeholderLoginUrl?{backgroundImage:"url(".concat(t.placeholderLoginUrl,")")}:{}})},s=(n("k/nb"),a.a.createElement);function c(){return s("div",null,s("div",{className:"confirmage__header text-center"},"YOU MUST BE OVER 18 AND AGREE TO THE TERMS BELOW BEFORE CONTINUING:"),s("div",{className:"confirmage__description text-center"},s("div",{className:"scroll"},s("p",null,"You also agree to share your information with Duodecad ITS Learn More",s("br",null),"You also agree to share information with Duodecad ITS because the website will not work properly without this agreement.",s("br",null),"An important part of the cam material is provided by Duodecad ITS:",s("br",null),"The profiles content and photographs",s("br",null),"The player and his functionalities",s("br",null),"The payment processor",s("br",null),"...",s("br",null),"Therefore, every page is depending on Duodecad ITS and can\u2019t be dissociated with (users URL) service."),s("p",null,'This website contains information, links, images and videos of sexually explicit material (collectively, the "Sexually Explicit Material"). Do NOT continue if: (i) you are not at least 18 years of age or the age of majority in each and every jurisdiction in which you will or may view the Sexually Explicit Material, whichever is higher (the "Age of Majority"), (ii) such material offends you, or (iii) viewing the Sexually Explicit Material is not legal in each and every community where you choose to view it.'),s("p",null,"By choosing to enter this website you are affirming under oath and penalties of perjury pursuant to Title 28 U.S.C. \xa7 1746 and other applicable statutes and laws that all of the following statements are true and correct:"),s("ul",null,s("li",null,"I have attained the Age of Majority in my jurisdiction;"),s("li",null,"The sexually explicit material I am viewing is for my own personal use and I will not expose any minors to the material;"),s("li",null,"I desire to receive/view sexually explicit material;"),s("li",null,"I believe that as an adult it is my inalienable constitutional right to receive/view sexually explicit material;"),s("li",null,"I believe that sexual acts between consenting adults are neither offensive nor obscene;"),s("li",null,"The viewing, reading and downloading of sexually explicit materials does not violate the standards of any community, town, city, state or country where I will be viewing, reading and/or downloading the Sexually Explicit Materials;"),s("li",null,"I am solely responsible for any false disclosures or legal ramifications of viewing, reading or downloading any material appearing on this site. I further agree that neither this website nor its affiliates will be held responsible for any legal ramifications arising from any fraudulent entry into or use of this website;"),s("li",null,"I understand that my use of this website is governed by the website's",s("a",{href:"/page/terms-and-conditions"},"Terms")," ","which I have reviewed and accepted, and I agree to be bound by such Terms."),s("li",null,"I agree that by entering this website, I am subjecting myself, and any business entity in which I have any legal or equitable interest, to the personal jurisdiction of the State of Florida, Miami-Dade County, should any dispute arise at any time between this website, myself and/or such business entity;"),s("li",null,"This warning page constitutes a legally binding agreement between me, this website and/or any business in which I have any legal or equitable interest. If any provision of this Agreement is found to be unenforceable, the remainder shall be enforced as fully as possible and the unenforceable provision shall be deemed modified to the limited extent required to permit its enforcement in a manner most closely representing the intentions as expressed herein;"),s("li",null,"All performers on this site are over the age of 18, have consented being photographed and/or filmed, believe it is their right to engage in consensual sexual acts for the entertainment and education of other adults and I believe it is my right as an adult to watch them doing what adults do;"),s("li",null,"The videos and images in this site are intended to be used by responsible adults as sexual aids, to provide sexual education and to provide sexual entertainment;"),s("li",null,"I understand that providing a false declaration under the penalties of perjury is a criminal offense; and"),s("li",null,'I agree that this agreement is governed by the Electronic Signatures in Global and National Commerce Act (commonly known as the "E-Sign Act"), 15 U.S.C. \xa7 7000, et seq., and by choosing to click on "I Agree. Enter Here" and indicating my agreement to be bound by the terms of this agreement, I affirmatively adopt the signature line below as my signature and the manifestation of my consent to be bound by the terms of this agreement.'))),s("p",{className:"notice-txt"},"THIS SITE ACTIVELY COOPERATES WITH LAW ENFORCEMENT IN ALL INSTANCES OF SUSPECTED ILLEGAL USE OF THE SERVICE, ESPECIALLY IN THE CASE OF UNDERAGE USAGE OF THE SERVICE.")))}},pHZt:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var r=n("vo7w"),a=Object(r.a)("updateUIValue"),o=Object(r.a)("loadUIValue")},uBEg:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/register/model",function(){return n("COv8")}])},z7Xi:function(e,t,n){"use strict";var r=n("VTBJ"),a=n("q1tI"),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},i=n("6VBw"),s=function(e,t){return a.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:o}))};s.displayName="UploadOutlined";t.a=a.forwardRef(s)},zM0U:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("1OyB"),a=n("vuIU"),o=n("Ji7U"),i=n("md7G"),s=n("foSv");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var l=new(function(e){Object(o.a)(n,e);var t=c(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"all",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.get(this.buildUrl("/settings/public",{group:e}))}},{key:"getCountries",value:function(){return this.get("/countries/list")}},{key:"getTimezones",value:function(){return this.get("/timezones/list")}}]),n}(n("/bfT").a))}},[["uBEg",0,1,3,5,2,4,6,7,10,9,11,12,13,14,16,18,19,22,28,30,8]]]);