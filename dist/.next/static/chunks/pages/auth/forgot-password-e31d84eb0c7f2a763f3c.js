_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[93],{"LLt/":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("1OyB"),a=n("vuIU"),r=n("Ji7U"),o=n("md7G"),s=n("foSv"),l=n("p46w"),u=n.n(l),c=n("/bfT");function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Object(o.a)(this,n)}}var d=new(function(e){Object(r.a)(n,e);var t=f(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"login",value:function(e){return this.post("/auth/users/login",e)}},{key:"setAuthHeader",value:function(e,t){u.a.set(c.f,e,{expires:365}),u.a.set(c.c,t,{expires:365}),this.setAuthHeaderToken(e)}},{key:"performerLogin",value:function(e){return this.post("/auth/performers/login",e)}},{key:"studioLogin",value:function(e){return this.post("/auth/studio/login",e)}},{key:"setToken",value:function(e){u.a.set(c.f,e,{expires:365}),this.setAuthHeaderToken(e)}},{key:"getToken",value:function(){return u.a.get(c.f)||null}},{key:"getRole",value:function(){return u.a.get(c.c)||null}},{key:"removeToken",value:function(){u.a.remove(c.f),u.a.remove(c.c)}},{key:"removeRemember",value:function(){u.a.remove("rememberMe")}},{key:"updatePassword",value:function(e){return this.put("/auth/users/me/password",e)}},{key:"performersRegister",value:function(e){return this.register("/auth/performers/register",e)}},{key:"userRegister",value:function(e){return this.post("/auth/users/register",e)}},{key:"studioRegister",value:function(e){return this.register("/auth/studio/register",e)}},{key:"forgotPassword",value:function(e,t){var n={email:e,type:t};return this.post("/auth/users/forgot",n)}},{key:"resendVerificationEmail",value:function(e){return this.post("/verification/resend-verification-email",e)}}]),n}(c.a))},Lmjj:function(e,t,n){},"PkK/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/forgot-password",function(){return n("f8jF")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var i=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var r,o=a(n("q1tI")),s=n("elyg"),l=n("nOHt"),u=new Map,c=window.IntersectionObserver,f={};var d=function(e,t){var n=r||(c?r=new c((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function h(e,t,n,i){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,i).catch((function(e){0})),f[t+"%"+n]=!0)}var p=function(e){var t=!1!==e.prefetch,n=o.default.useState(),a=i(n,2),r=a[0],u=a[1],p=(0,l.useRouter)(),m=p&&p.pathname||"/",y=o.default.useMemo((function(){var t=(0,s.resolveHref)(m,e.href,!0),n=i(t,2),a=n[0],r=n[1];return{href:a,as:e.as?(0,s.resolveHref)(m,e.as):r||a}}),[m,e.href,e.as]),v=y.href,g=y.as;o.default.useEffect((function(){if(t&&c&&r&&r.tagName&&(0,s.isLocalURL)(v)&&!f[v+"%"+g])return d(r,(function(){h(p,v,g)}))}),[t,r,v,g,p]);var b=e.children,w=e.replace,E=e.shallow,I=e.scroll;"string"===typeof b&&(b=o.default.createElement("a",null,b));var T=o.Children.only(b),x={ref:function(e){e&&u(e),T&&"object"===typeof T&&T.ref&&("function"===typeof T.ref?T.ref(e):"object"===typeof T.ref&&(T.ref.current=e))},onClick:function(e){T.props&&"function"===typeof T.props.onClick&&T.props.onClick(e),e.defaultPrevented||function(e,t,n,i,a,r,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=i.indexOf("#")<0),t[a?"replace":"push"](n,i,{shallow:r}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,v,g,w,E,I)}};return t&&(x.onMouseEnter=function(e){(0,s.isLocalURL)(v)&&(T.props&&"function"===typeof T.props.onMouseEnter&&T.props.onMouseEnter(e),h(p,v,g,{priority:!0}))}),(e.passHref||"a"===T.type&&!("href"in T.props))&&(x.href=(0,s.addBasePath)((0,s.addLocale)(g,p&&p.locale,p&&p.defaultLocale))),o.default.cloneElement(T,x)};t.default=p},f8jF:function(e,t,n){"use strict";n.r(t);var i=n("o0o1"),a=n.n(i),r=n("HaE+"),o=n("1OyB"),s=n("vuIU"),l=n("Ji7U"),u=n("md7G"),c=n("foSv"),f=n("rePB"),d=n("q1tI"),h=n.n(d),p=(n("Lmjj"),n("8Kt/")),m=n.n(p),y=n("LLt/"),v=n("tsqr"),g=n("Vl3Y"),b=n("2fM7"),w=n("5rEg"),E=n("2/Rp"),I=n("NsEo"),T=n("YFqc"),x=n.n(T),k=n("/MKj"),O=n("n3wA"),j=h.a.createElement;function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return Object(u.a)(this,n)}}var L=function(e){Object(l.a)(n,e);var t=S(n);function n(e){var i;return Object(o.a)(this,n),(i=t.call(this,e)).state={loading:!1},i}return Object(s.a)(n,[{key:"onFinish",value:function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),e.next=4,y.a.forgotPassword(t.email,t.type);case 4:v.b.success("New password have been sent to your email"),this.setState({loading:!1}),e.next=15;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Promise.resolve(e.t0);case 12:n=e.sent,v.b.error(Object(I.h)(n)),this.setState({loading:!1});case 15:case"end":return e.stop()}}),e,this,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.loading,t=this.props.ui;return j(h.a.Fragment,null,j(m.a,null,j("title",null,"Forgot Password")),j("div",{className:"register-page"},j("div",{className:"form-register-container"},j(g.a,{onFinish:this.onFinish.bind(this),layout:"vertical",initialValues:{type:"user"}},j("h1",null,"Forgot Password"),j(g.a.Item,{label:"Type",name:"type",key:"type",rules:[{required:!0}]},j(b.a,null,j(b.a.Option,{value:"user",key:"user"},"User"),j(b.a.Option,{value:"performer",key:"performer"},(null===t||void 0===t?void 0:t.singularTextModel)||"Performer"),j(b.a.Option,{value:"studio",key:"studio"},"Studio"))),j(g.a.Item,{name:"email",key:"email",label:"Email",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your email!"}]},j(w.a,{type:"email",placeholder:"abc@example.com"})),j(g.a.Item,null,j(E.a,{type:"primary",disabled:e,loading:e,htmlType:"submit"},"Submit")),j("div",{style:{display:"flex",justifyContent:"space-between",width:"100%",margin:"15px 0"}},j(x.a,{href:"/auth/resend-verification-email"},j("a",null,"Resend Email Verification")),j(x.a,{href:"/auth/login/user"},j("a",null,"Login"))))),j(O.a,{ui:t})))}}]),n}(d.PureComponent);Object(f.a)(L,"layout","auth"),Object(f.a)(L,"authenticate",!1);t.default=Object(k.b)((function(e){return{ui:e.ui}}),{})(L)},"k/nb":function(e,t,n){},n3wA:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var i=n("q1tI"),a=n.n(i),r=a.a.createElement,o=function(e){var t=e.ui;return r("div",{className:"form-register-placeholder",style:null!==t&&void 0!==t&&t.placeholderLoginUrl?{backgroundImage:"url(".concat(t.placeholderLoginUrl,")")}:{}})},s=(n("k/nb"),a.a.createElement);function l(){return s("div",null,s("div",{className:"confirmage__header text-center"},"YOU MUST BE OVER 18 AND AGREE TO THE TERMS BELOW BEFORE CONTINUING:"),s("div",{className:"confirmage__description text-center"},s("div",{className:"scroll"},s("p",null,"You also agree to share your information with Duodecad ITS Learn More",s("br",null),"You also agree to share information with Duodecad ITS because the website will not work properly without this agreement.",s("br",null),"An important part of the cam material is provided by Duodecad ITS:",s("br",null),"The profiles content and photographs",s("br",null),"The player and his functionalities",s("br",null),"The payment processor",s("br",null),"...",s("br",null),"Therefore, every page is depending on Duodecad ITS and can\u2019t be dissociated with (users URL) service."),s("p",null,'This website contains information, links, images and videos of sexually explicit material (collectively, the "Sexually Explicit Material"). Do NOT continue if: (i) you are not at least 18 years of age or the age of majority in each and every jurisdiction in which you will or may view the Sexually Explicit Material, whichever is higher (the "Age of Majority"), (ii) such material offends you, or (iii) viewing the Sexually Explicit Material is not legal in each and every community where you choose to view it.'),s("p",null,"By choosing to enter this website you are affirming under oath and penalties of perjury pursuant to Title 28 U.S.C. \xa7 1746 and other applicable statutes and laws that all of the following statements are true and correct:"),s("ul",null,s("li",null,"I have attained the Age of Majority in my jurisdiction;"),s("li",null,"The sexually explicit material I am viewing is for my own personal use and I will not expose any minors to the material;"),s("li",null,"I desire to receive/view sexually explicit material;"),s("li",null,"I believe that as an adult it is my inalienable constitutional right to receive/view sexually explicit material;"),s("li",null,"I believe that sexual acts between consenting adults are neither offensive nor obscene;"),s("li",null,"The viewing, reading and downloading of sexually explicit materials does not violate the standards of any community, town, city, state or country where I will be viewing, reading and/or downloading the Sexually Explicit Materials;"),s("li",null,"I am solely responsible for any false disclosures or legal ramifications of viewing, reading or downloading any material appearing on this site. I further agree that neither this website nor its affiliates will be held responsible for any legal ramifications arising from any fraudulent entry into or use of this website;"),s("li",null,"I understand that my use of this website is governed by the website's",s("a",{href:"/page/terms-and-conditions"},"Terms")," ","which I have reviewed and accepted, and I agree to be bound by such Terms."),s("li",null,"I agree that by entering this website, I am subjecting myself, and any business entity in which I have any legal or equitable interest, to the personal jurisdiction of the State of Florida, Miami-Dade County, should any dispute arise at any time between this website, myself and/or such business entity;"),s("li",null,"This warning page constitutes a legally binding agreement between me, this website and/or any business in which I have any legal or equitable interest. If any provision of this Agreement is found to be unenforceable, the remainder shall be enforced as fully as possible and the unenforceable provision shall be deemed modified to the limited extent required to permit its enforcement in a manner most closely representing the intentions as expressed herein;"),s("li",null,"All performers on this site are over the age of 18, have consented being photographed and/or filmed, believe it is their right to engage in consensual sexual acts for the entertainment and education of other adults and I believe it is my right as an adult to watch them doing what adults do;"),s("li",null,"The videos and images in this site are intended to be used by responsible adults as sexual aids, to provide sexual education and to provide sexual entertainment;"),s("li",null,"I understand that providing a false declaration under the penalties of perjury is a criminal offense; and"),s("li",null,'I agree that this agreement is governed by the Electronic Signatures in Global and National Commerce Act (commonly known as the "E-Sign Act"), 15 U.S.C. \xa7 7000, et seq., and by choosing to click on "I Agree. Enter Here" and indicating my agreement to be bound by the terms of this agreement, I affirmatively adopt the signature line below as my signature and the manifestation of my consent to be bound by the terms of this agreement.'))),s("p",{className:"notice-txt"},"THIS SITE ACTIVELY COOPERATES WITH LAW ENFORCEMENT IN ALL INSTANCES OF SUSPECTED ILLEGAL USE OF THE SERVICE, ESPECIALLY IN THE CASE OF UNDERAGE USAGE OF THE SERVICE.")))}}},[["PkK/",0,1,3,5,2,4,6,7,10,9,12,13,14,16,18,19,22,8]]]);