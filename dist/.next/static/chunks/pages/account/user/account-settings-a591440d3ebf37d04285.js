_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[81],{"4xUc":function(e,t,a){"use strict";var r=a("wx14"),n=a("q1tI"),o=a("Vl3Y"),c=a("5rEg"),s=a("2/Rp"),i=n.createElement,u={labelCol:{xs:{span:24},sm:{span:12}},wrapperCol:{xs:{span:24},sm:{span:12}}},l=function(e){var t=e.onFinish,a=e.submiting;return i(o.a,Object(r.a)({layout:"vertical",onFinish:t},u),i(o.a.Item,{name:"prePassword",label:"Old Password",rules:[{required:!0,message:"Please input your old password!"},{min:6,max:14,message:"6-14 characters"}],hasFeedback:!0},i(c.a.Password,{placeholder:"Old Password"})),i(o.a.Item,{name:"password",label:"New Password",rules:[{required:!0,message:"Please input your password!"},{min:6,max:14,message:"6-14 characters"}],hasFeedback:!0},i(c.a.Password,{placeholder:"Password"})),i(o.a.Item,{name:"confirm",dependencies:["password"],hasFeedback:!0,label:"Retype password",rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}]},i(c.a.Password,{placeholder:"Confirm Password"})),i(o.a.Item,null,i(s.a,{type:"primary",htmlType:"submit",loading:a,disabled:a,className:"btn-submit"},"Save Changes")))};l.defaultProps={submiting:!1},t.a=l},BMrR:function(e,t,a){"use strict";var r=a("qrJ5");t.a=r.a},G3dp:function(e,t,a){"use strict";var r=a("VTBJ"),n=a("q1tI"),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},c=a("6VBw"),s=function(e,t){return n.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:o}))};s.displayName="EditOutlined";t.a=n.forwardRef(s)},GMeC:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var r=a("XwMy"),n=a("tsqr");function o(e){var t=e.name.split(".").pop().toLowerCase();return-1===r.a.imageAccept.split(",").map((function(e){return e.trim()})).indexOf(".".concat(t))?(n.b.error("You can only upload ".concat(r.a.imageAccept," file!")),!1):!!(e.size/1024/1024<(r.a.maximumSizeUploadAvatar||2))||(n.b.error("Image must smaller than ".concat(r.a.maximumSizeUploadAvatar||2,"MB!")),!1)}},ITiG:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a("1OyB"),n=a("vuIU"),o=a("Ji7U"),c=a("md7G"),s=a("foSv"),i=a("/bfT"),u=a("XwMy");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(s.a)(e);if(t){var n=Object(s.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(c.a)(this,a)}}var d=new(function(e){Object(o.a)(a,e);var t=l(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"me",value:function(e){return this.get("/users/me",e)}},{key:"updateMe",value:function(e){return this.put("/users",e)}},{key:"getAvatarUploadUrl",value:function(e){return e?"".concat(u.a.apiEndpoint,"/users/").concat(e,"/avatar/upload"):"".concat(u.a.apiEndpoint,"/users/avatar/upload")}},{key:"search",value:function(e){return this.get(this.buildUrl("/users/search",e))}},{key:"findById",value:function(e){return this.get("/users/view/".concat(e))}}]),a}(i.a))},Y1dN:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("rePB"),c=a("ODXe"),s=a("TSYQ"),i=a.n(s),u=a("VTBJ"),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},d=a("6VBw"),p=function(e,t){return r.createElement(d.a,Object(u.a)(Object(u.a)({},e),{},{ref:t,icon:l}))};p.displayName="ArrowLeftOutlined";var f=r.forwardRef(p),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},b=function(e,t){return r.createElement(d.a,Object(u.a)(Object(u.a)({},e),{},{ref:t,icon:m}))};b.displayName="ArrowRightOutlined";var h=r.forwardRef(b),v=a("t23M"),g=a("H84U"),y=a("wx14"),O=a("KQm4"),E=a("Zm9Q"),w=a("8Skl"),j=a("XBQK"),P=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},R=function(e){var t,a,n=e.prefixCls,o=e.separator,c=void 0===o?"/":o,s=e.children,i=e.overlay,u=e.dropdownProps,l=P(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=(0,r.useContext(g.b).getPrefixCls)("breadcrumb",n);return t="href"in l?r.createElement("a",Object(y.a)({className:"".concat(d,"-link")},l),s):r.createElement("span",Object(y.a)({className:"".concat(d,"-link")},l),s),a=t,t=i?r.createElement(j.a,Object(y.a)({overlay:i,placement:"bottomCenter"},u),r.createElement("span",{className:"".concat(d,"-overlay-link")},a,r.createElement(w.a,null))):a,s?r.createElement("span",null,t,c&&r.createElement("span",{className:"".concat(d,"-separator")},c)):null};R.__ANT_BREADCRUMB_ITEM=!0;var T=R,U=function(e){var t=e.children,a=(0,r.useContext(g.b).getPrefixCls)("breadcrumb");return r.createElement("span",{className:"".concat(a,"-separator")},t||"/")};U.__ANT_BREADCRUMB_SEPARATOR=!0;var N=U,S=a("BvKs"),k=a("uaoM"),I=a("0n0R"),x=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a};function C(e,t,a,n){var o=a.indexOf(e)===a.length-1,c=function(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|");return e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),(function(e,a){return t[a]||e}))}(e,t);return o?r.createElement("span",null,c):r.createElement("a",{href:"#/".concat(n.join("/"))},c)}var _=function(e,t){return e=(e||"").replace(/^\//,""),Object.keys(t).forEach((function(a){e=e.replace(":".concat(a),t[a])})),e},A=function(e){var t,a=e.prefixCls,n=e.separator,c=void 0===n?"/":n,s=e.style,u=e.className,l=e.routes,d=e.children,p=e.itemRender,f=void 0===p?C:p,m=e.params,b=void 0===m?{}:m,h=x(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),v=r.useContext(g.b),w=v.getPrefixCls,j=v.direction,P=w("breadcrumb",a);if(l&&l.length>0){var R=[];t=l.map((function(e){var t,a=_(e.path,b);return a&&R.push(a),e.children&&e.children.length&&(t=r.createElement(S.a,null,e.children.map((function(e){return r.createElement(S.a.Item,{key:e.path||e.breadcrumbName},f(e,b,l,function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2?arguments[2]:void 0,r=Object(O.a)(e),n=_(t,a);return n&&r.push(n),r}(R,e.path,b)))})))),r.createElement(T,{overlay:t,separator:c,key:a||e.breadcrumbName},f(e,b,l,R))}))}else d&&(t=Object(E.a)(d).map((function(e,t){return e?(Object(k.a)(e.type&&(!0===e.type.__ANT_BREADCRUMB_ITEM||!0===e.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Object(I.a)(e,{separator:c,key:t})):e})));var U=i()(P,Object(o.a)({},"".concat(P,"-rtl"),"rtl"===j),u);return r.createElement("div",Object(y.a)({className:U,style:s},h),t)};A.Item=T,A.Separator=N;var B=A,F=a("Tckk"),M=a("4IlW"),G=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a},L={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},z=r.forwardRef((function(e,t){var a=e.style,n=e.noStyle,o=e.disabled,c=G(e,["style","noStyle","disabled"]),s={};return n||(s=Object(y.a)({},L)),o&&(s.pointerEvents="none"),s=Object(y.a)(Object(y.a)({},s),a),r.createElement("div",Object(y.a)({role:"button",tabIndex:0,ref:t},c,{onKeyDown:function(e){e.keyCode===M.a.ENTER&&e.preventDefault()},onKeyUp:function(t){var a=t.keyCode,r=e.onClick;a===M.a.ENTER&&r&&r()},style:s}))})),D=a("YMnH"),q=function(e,t,a){return t&&a?r.createElement(D.a,{componentName:"PageHeader"},(function(n){var o=n.back;return r.createElement("div",{className:"".concat(e,"-back")},r.createElement(z,{onClick:function(e){null===a||void 0===a||a(e)},className:"".concat(e,"-back-button"),"aria-label":o},t))})):null},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";return void 0!==e.backIcon?e.backIcon:"rtl"===t?r.createElement(h,null):r.createElement(f,null)},V=function(e){var t=r.useState(!1),a=Object(c.a)(t,2),n=a[0],s=a[1],u=function(e){var t=e.width;s(t<768)};return r.createElement(g.a,null,(function(t){var a,c,s=t.getPrefixCls,l=t.pageHeader,d=t.direction,p=e.prefixCls,f=e.style,m=e.footer,b=e.children,h=e.breadcrumb,g=e.breadcrumbRender,y=e.className,O=!0;"ghost"in e?O=e.ghost:l&&"ghost"in l&&(O=l.ghost);var E=s("page-header",p),w=function(){var e;return(null===(e=h)||void 0===e?void 0:e.routes)?function(e){return r.createElement(B,e)}(h):null}(),j=h&&"props"in h,P=null!==(c=null===g||void 0===g?void 0:g(e,w))&&void 0!==c?c:w,R=j?h:P,T=i()(E,y,(a={"has-breadcrumb":!!R,"has-footer":!!m},Object(o.a)(a,"".concat(E,"-ghost"),O),Object(o.a)(a,"".concat(E,"-rtl"),"rtl"===d),Object(o.a)(a,"".concat(E,"-compact"),n),a));return r.createElement(v.default,{onResize:u},r.createElement("div",{className:T,style:f},R,function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=t.title,o=t.avatar,c=t.subTitle,s=t.tags,i=t.extra,u=t.onBack,l="".concat(e,"-heading"),d=n||c||s||i;if(!d)return null;var p=H(t,a),f=q(e,p,u),m=f||o||d;return r.createElement("div",{className:l},m&&r.createElement("div",{className:"".concat(l,"-left")},f,o&&r.createElement(F.a,o),n&&r.createElement("span",{className:"".concat(l,"-title"),title:"string"===typeof n?n:void 0},n),c&&r.createElement("span",{className:"".concat(l,"-sub-title"),title:"string"===typeof c?c:void 0},c),s&&r.createElement("span",{className:"".concat(l,"-tags")},s)),i&&r.createElement("span",{className:"".concat(l,"-extra")},i))}(E,e,d),b&&function(e,t){return r.createElement("div",{className:"".concat(e,"-content")},t)}(E,b),function(e,t){return t?r.createElement("div",{className:"".concat(e,"-footer")},t):null}(E,m)))}))},X=a("PArb"),K=n.a.createElement;t.a=function(e){var t=e.title,a=e.extra;return K(n.a.Fragment,null,K(V,{title:t,extra:a}),K(X.a,null))}},grZg:function(e,t,a){"use strict";a.r(t);var r=a("wx14"),n=a("o0o1"),o=a.n(n),c=a("HaE+"),s=a("1OyB"),i=a("vuIU"),u=a("Ji7U"),l=a("md7G"),d=a("foSv"),p=a("rePB"),f=a("q1tI"),m=a.n(f),b=a("tsqr"),h=a("ZTPi"),v=a("Y1dN"),g=a("/MKj"),y=a("ODXe"),O=a("Vl3Y"),E=a("2/Rp"),w=a("BMrR"),j=a("kPKH"),P=a("5rEg"),R=a("2fM7"),T=a("+eQT"),U=a("8z0m"),N=a("wd/R"),S=a.n(N),k=a("/bfT"),I=a("p46w"),x=a.n(I),C=a("z7Xi"),_=a("G3dp"),A=(a("Pje9"),a("GMeC")),B=f.createElement,F={labelCol:{xs:{span:24},sm:{span:4}},wrapperCol:{xs:{span:24},sm:{span:16}}},M={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:0}}},G=function(e){var t=e.username,a=e.firstName,n=e.lastName,o=e.gender,c=e.onFinish,s=e.countries,i=e.email,u=e.country,l=e.phone,d=e.city,p=e.state,f=e.dateOfBirth,m=e.onChangeAvatar,b=e.uploadAvatarUrl,h=e.uploadedAvatar,v=e.avatarUploading,g=e.avatar,N=e.loading,I=O.a.useForm(),G=Object(y.a)(I,1)[0],L=B(E.a,{type:"dashed",loading:v,disabled:v,icon:B(C.a,null)},"Upload");return B(O.a,Object(r.a)({},F,{form:G,onFinish:c,name:"performerRegisterForm",className:"performerRegisterForm",initialValues:{dateOfBirth:S()(f),country:u,firstName:a,lastName:n,gender:o,email:i,avatar:g,username:t,phone:l,city:d,state:p},layout:"vertical"}),B(w.a,{gutter:25},B(j.a,{sm:12,xs:24},B(O.a.Item,{name:"username",label:"Username",rules:[{required:!0,message:"Please input your username!"}]},B(P.a,{disabled:!0})),B(O.a.Item,{name:"gender",label:"Sex"},B(R.a,null,B(R.a.Option,{value:"male",key:"male"},"Male"),B(R.a.Option,{value:"female",key:"female"},"Female"),B(R.a.Option,{value:"transgender",key:"transgender"},"Transgender"))),B(O.a.Item,{name:"firstName",label:"First Name",rules:[{pattern:new RegExp("^[a-zA-Z0-9 ]*$"),message:"Alphanumeric"},{whitespace:!0,message:"Please input your first name!"},{required:!0,message:"Please input your first name!"}]},B(P.a,{placeholder:"First name"})),B(O.a.Item,{name:"lastName",label:"Last Name",rules:[{pattern:new RegExp("^[a-zA-Z0-9 ]*$"),message:"Alphanumeric"},{whitespace:!0,message:"Please input your last name!"},{required:!0,message:"Please input your first name!"}]},B(P.a,{placeholder:"Last name"})),B(O.a.Item,{name:"phone",label:"Phone Number",rules:[{min:9},{max:14},{pattern:new RegExp(/^[0-9\b\\+ ]+$/),message:"The phone number is not in the correct format"}]},B(P.a,{placeholder:"Phone Number"}))),B(j.a,{sm:12,xs:24},B(O.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}]},B(P.a,{disabled:!0,placeholder:"test@example.com"})),B(O.a.Item,{name:"dateOfBirth",label:"Date of Birth",rules:[{required:!0,message:"Please input date of birth!"},{validator:function(e,t){return t?S()().diff(t,"years")>=18?Promise.resolve():Promise.reject(new Error("Minimum of 18 years")):Promise.resolve()}}]},B(T.a,{style:{width:"100%"}})),B(O.a.Item,{name:"country",label:"Country",rules:[{required:!0,message:"Please input your country!"}]},B(R.a,{showSearch:!0},s.length>0&&s.map((function(e){return B(R.a.Option,{value:e.name,key:e.code},e.name)})))),B(O.a.Item,{name:"state",label:"State"},B(P.a,{placeholder:"State Name"})),B(O.a.Item,{name:"city",label:"City"},B(P.a,{placeholder:"City Name"})),B(O.a.Item,{label:"Profile Avatar"},B(U.a,{onChange:m,accept:"image/*",action:b,headers:{Authorization:x.a.get(k.f)},name:"avatar",showUploadList:!1,beforeUpload:A.a},g||h?B("div",{style:{height:60,width:60,position:"relative"}},B("img",{src:h||g,style:{height:60,width:60,borderRadius:30},alt:""}),B(_.a,{className:"edit-icon"})):L)))),B(O.a.Item,M,B(E.a,{type:"primary",htmlType:"submit",disabled:N,loading:N},"Save Changes")))},L=a("8Kt/"),z=a.n(L),D=a("zM0U"),q=a("ITiG"),H=a("x7is"),V=a("kXO4"),X=a("NsEo"),K=a("nOHt"),Y=a.n(K),J=a("4xUc"),Q=(a("vXTS"),m.a.createElement);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function W(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){Object(p.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function $(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(d.a)(e);if(t){var n=Object(d.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(l.a)(this,a)}}var ee=function(e){Object(u.a)(a,e);var t=$(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).state={countries:[],uploadedAvatar:"",avatarUploading:!1},r}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.action;e&&"account-information"!==e||this.getCountries()}},{key:"componentDidUpdate",value:function(e){var t=this.props,a=t.success,r=t.updateUserError,n=t.auth,o=t.action,c=this.state.countries;e.success!==a&&a&&b.b.success("Update Profile Success."),e.updateUserError!==r&&r&&b.b.error(Object(X.h)(r)),e.auth.updatePassword.success!==n.updatePassword.success&&n.updatePassword.success&&b.b.success("Update Password Success."),e.auth.updatePassword.error!==n.updatePassword.error&&n.updatePassword.error&&b.b.error(Object(X.h)(n.updatePassword.error)),c.length||"account-information"!==o||this.getCountries()}},{key:"onFinish",value:function(e){var t=this.props,a=t.user;(0,t.updateUser)(W(W({},a),e))}},{key:"onChangeAvatar",value:function(e){var t=e.file;"uploading"!==t.status?"done"===t.status&&(this.setState({avatarUploading:!1}),t.response&&this.setState({uploadedAvatar:t.response.data.url})):this.setState({avatarUploading:!0})}},{key:"onTabsChange",value:function(e){Y.a.push({pathname:"/account/user/account-settings",query:{action:e}},"/account/user/account-settings?action=".concat(e),{shallow:!1})}},{key:"onPasswordChange",value:function(e){(0,this.props.updatePassword)(e)}},{key:"getCountries",value:function(){var e=Object(c.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.getCountries();case 3:t=e.sent,this.setState({countries:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b.b.error(Object(X.h)(e.t0));case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.user,a=e.action,n=e.auth,o=e.userUpdating,c=this.state,s=c.countries,i=c.uploadedAvatar,u=c.avatarUploading;return Q(m.a.Fragment,null,Q(z.a,null,Q("title",null,"".concat(t.username," Profile"))),Q("div",{className:"account-setting-page"},Q(v.a,{title:"Account Settings"}),Q(h.a,{activeKey:a||"account-information",style:{padding:"0 24px"},size:"large",onChange:this.onTabsChange.bind(this)},Q(h.a.TabPane,{tab:"Account Information",key:"account-information"},Q(G,Object(r.a)({},t,{onFinish:this.onFinish.bind(this),countries:s,onChangeAvatar:this.onChangeAvatar.bind(this),uploadAvatarUrl:q.a.getAvatarUploadUrl(),uploadedAvatar:i,avatarUploading:u,loading:o}))),Q(h.a.TabPane,{key:"change-password",tab:"Change Password"},Q(J.a,Object(r.a)({onFinish:this.onPasswordChange.bind(this)},n.updatePassword))))))}}],[{key:"getInitialProps",value:function(e){return{action:e.ctx.query.action}}}]),a}(f.PureComponent);Object(p.a)(ee,"authenticate",!0),Object(p.a)(ee,"layout","primary");var te={updateUser:H.p,updatePassword:V.s};t.default=Object(g.b)((function(e){return{user:e.user.current,userUpdating:e.user.userUpdating,success:e.user.updateUserSuccess,updateUserError:e.user.updateUserError,auth:e.auth}}),te)(ee)},"jX+S":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/user/account-settings",function(){return a("grZg")}])},kPKH:function(e,t,a){"use strict";var r=a("/kpp");t.a=r.a},kXO4:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return i})),a.d(t,"i",(function(){return l})),a.d(t,"k",(function(){return d})),a.d(t,"j",(function(){return p})),a.d(t,"l",(function(){return f})),a.d(t,"p",(function(){return b})),a.d(t,"r",(function(){return h})),a.d(t,"q",(function(){return v})),a.d(t,"f",(function(){return y})),a.d(t,"h",(function(){return O})),a.d(t,"g",(function(){return E})),a.d(t,"m",(function(){return w})),a.d(t,"v",(function(){return P})),a.d(t,"x",(function(){return R})),a.d(t,"w",(function(){return T})),a.d(t,"o",(function(){return U})),a.d(t,"s",(function(){return S})),a.d(t,"u",(function(){return k})),a.d(t,"t",(function(){return I})),a.d(t,"n",(function(){return x})),a.d(t,"e",(function(){return C}));var r=a("vo7w"),n=Object(r.b)("login","LOGIN"),o=n.login,c=n.loginSuccess,s=n.loginFail,i=Object(r.a)("LOGIN_REQUESTING"),u=Object(r.b)("performerlogin","PERFORMER_LOGIN"),l=u.performerlogin,d=u.performerloginSuccess,p=u.performerloginFail,f=Object(r.a)("resetLoginData"),m=Object(r.b)("studioLogin","STUDIO_LOGIN"),b=m.studioLogin,h=m.studioLoginSuccess,v=m.studioLoginFail,g=Object(r.b)("performerRegister","PERFORMER_REGISTER"),y=g.performerRegister,O=g.performerRegisterSuccess,E=g.performerRegisterFail,w=Object(r.a)("SET_PERFORMER_REGISTER_SUBMITTING"),j=Object(r.b)("userRegister","USER_REGISTER"),P=j.userRegister,R=j.userRegisterSuccess,T=j.userRegisterFail,U=Object(r.a)("SET_USER_REGISTER_SUBMITTING"),N=Object(r.b)("updatePassword","UPDATE_PASSWORD"),S=N.updatePassword,k=N.updatePasswordSuccess,I=N.updatePasswordFail,x=Object(r.a)("SET_UPDATE_PASSWORD_SUBMITTING"),C=Object(r.a)("logout")},x7is:function(e,t,a){"use strict";a.d(t,"m",(function(){return n})),a.d(t,"n",(function(){return o})),a.d(t,"o",(function(){return c})),a.d(t,"p",(function(){return i})),a.d(t,"r",(function(){return u})),a.d(t,"q",(function(){return l})),a.d(t,"l",(function(){return d})),a.d(t,"k",(function(){return p})),a.d(t,"a",(function(){return f})),a.d(t,"b",(function(){return b})),a.d(t,"d",(function(){return h})),a.d(t,"c",(function(){return v})),a.d(t,"i",(function(){return g})),a.d(t,"j",(function(){return y})),a.d(t,"e",(function(){return E})),a.d(t,"g",(function(){return w})),a.d(t,"f",(function(){return j})),a.d(t,"h",(function(){return P}));var r=a("vo7w"),n=Object(r.a)("updateCurrentUser"),o=Object(r.a)("updateCurrentUserAvatar"),c=Object(r.a)("updateCurrentUserBalance"),s=Object(r.b)("updateUser","UPDATE_USER"),i=s.updateUser,u=s.updateUserSuccess,l=s.updateUserFail,d=Object(r.a)("updatingUser"),p=Object(r.a)("setUserReducer"),f=Object(r.a)("buyTokenSuccess"),m=Object(r.b)("getFavoritePerformers","GET_FAVOURITE"),b=m.getFavoritePerformers,h=m.getFavoritePerformersSuccess,v=m.getFavoritePerformersFailed,g=Object(r.a)("GETTING_FAVORITE"),y=Object(r.a)("REMOVE_FAVORITE"),O=Object(r.b)("getPaymentTokenHistroy","GET_PAYMET_TOKE_HISTORY"),E=O.getPaymentTokenHistroy,w=O.getPaymentTokenHistroySuccess,j=O.getPaymentTokenHistroyFail,P=Object(r.a)("GETTING_PAYMET_TOKE_HISTORY")},z7Xi:function(e,t,a){"use strict";var r=a("VTBJ"),n=a("q1tI"),o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"},c=a("6VBw"),s=function(e,t){return n.createElement(c.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:o}))};s.displayName="UploadOutlined";t.a=n.forwardRef(s)},zM0U:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("1OyB"),n=a("vuIU"),o=a("Ji7U"),c=a("md7G"),s=a("foSv");function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=Object(s.a)(e);if(t){var n=Object(s.a)(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return Object(c.a)(this,a)}}var u=new(function(e){Object(o.a)(a,e);var t=i(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"all",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.get(this.buildUrl("/settings/public",{group:e}))}},{key:"getCountries",value:function(){return this.get("/countries/list")}},{key:"getTimezones",value:function(){return this.get("/timezones/list")}}]),a}(a("/bfT").a))}},[["jX+S",0,1,3,5,2,4,6,7,10,9,11,12,13,14,15,16,17,18,19,21,22,24,28,30,8]]]);