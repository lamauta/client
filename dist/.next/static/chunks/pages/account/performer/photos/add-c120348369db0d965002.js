_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[71],{"36JD":function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),o=r.n(n),c=r("HaE+"),a=r("1OyB"),i=r("vuIU"),u=r("Ji7U"),s=r("md7G"),p=r("foSv"),f=r("rePB"),l=r("q1tI"),b=r.n(l),h=r("tsqr"),O=r("Y1dN"),j=r("8Kt/"),v=r.n(j),d=r("/MKj"),m=r("pKnN"),y=r("CLrh"),w=r("NsEo"),P=r("nOHt"),_=r.n(P),g=(r("M6VO"),b.a.createElement);function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function N(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach((function(e){Object(f.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(p.a)(t);if(e){var o=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}var k=function(t){Object(u.a)(r,t);var e=S(r);function r(t){var n;return Object(a.a)(this,r),(n=e.call(this,t)).state={onSubmit:!1},n}return Object(i.a)(r,[{key:"onFinish",value:function(){var t=Object(c.a)(o.a.mark((function t(e){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=this.props.performer,t.prev=1,this.setState({onSubmit:!0}),t.next=5,y.l.create("/performer/performer-assets/photos/upload",N(N({},e),{},{performerId:r._id}));case 5:h.b.success("Add photo success."),_.a.back(),t.next=15;break;case 9:return t.prev=9,t.t0=t.catch(1),t.next=13,Promise.resolve(t.t0);case 13:n=t.sent,h.b.error(Object(w.h)(n));case 15:return t.prev=15,this.setState({onSubmit:!1}),t.finish(15);case 18:case"end":return t.stop()}}),t,this,[[1,9,15,18]])})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.onSubmit;return g(b.a.Fragment,null,g(v.a,null,g("title",null,"Upload Photo")),g("div",{className:"performer-photos-page"},g(O.a,{title:"Create new Photo"}),g(m.a,{loading:t,onFinish:this.onFinish.bind(this),photo:{}})))}}]),r}(l.PureComponent);Object(f.a)(k,"authenticate",!0),Object(f.a)(k,"layout","primary");e.default=Object(d.b)((function(t){return{performer:t.performer.current}}))(k)},jexl:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/performer/photos/add",function(){return r("36JD")}])}},[["jexl",0,1,3,5,2,4,6,7,10,9,11,12,13,14,15,16,17,18,19,20,21,22,28,34,48,8]]]);