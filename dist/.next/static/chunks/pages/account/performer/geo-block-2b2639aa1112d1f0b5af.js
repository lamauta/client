_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{a0d4:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),c=n("HaE+"),o=n("KQm4"),i=n("1OyB"),s=n("vuIU"),u=n("Ji7U"),l=n("md7G"),d=n("foSv"),f=n("rePB"),k=n("tsqr"),p=n("kaz8"),b=n("2/Rp"),h=n("ZTPi"),y=n("wCAj"),v=n("Y1dN"),g=n("8Kt/"),m=n.n(g),O=n("q1tI"),w=n.n(O),j=n("CLrh"),x=n("NsEo"),C=n("/MKj"),B=(n("n4iA"),w.a.createElement);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var U=function(e){Object(u.a)(n,e);var t=S(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={blockedCountries:[],blockedUsers:[],isLoading:!1,isBlocking:!1},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.search()}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,r=n.blockedCountries;n.isBlocking&&r!==t.blockedCountries&&this.blockCountry(r)}},{key:"handleBlockCountry",value:function(e,t){this.setState({isBlocking:!0});var n=this.state.blockedCountries;t.target&&t.target.checked?this.setState({blockedCountries:[].concat(Object(o.a)(n),[e])}):this.setState({blockedCountries:n.filter((function(t){return e!==t}))})}},{key:"handleBlockUser",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you sure?")){e.next=2;break}return e.abrupt("return");case 2:return n=this.state.blockedUsers,e.prev=3,r=n.find((function(e){return e._id===t})),n.splice(r,1),e.next=8,this.setState((function(e){var t=e.blockedUsers.splice(r,1);return _(_({},e),{blockedUsers:t})}));case 8:j.k.geoBlock({userIds:n.length?n.map((function(e){return e._id})):[]}),e.next=17;break;case 11:return e.prev=11,e.t0=e.catch(3),e.next=15,Promise.resolve(e.t0);case 15:c=e.sent,k.b.error(c||"Something went wrong, please try again later");case 17:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isLoading:!0}),e.next=4,j.k.getBlockedList();case 4:t=e.sent,this.setState({blockedCountries:t.data.countries||[],blockedUsers:t.data.usersInfo||[]}),e.next=14;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Promise.resolve(e.t0);case 12:n=e.sent,k.b.error(Object(x.h)(n||"An error occurred, please try again!"));case 14:return e.prev=14,this.setState({isLoading:!1}),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[0,8,14,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"blockCountry",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.k.geoBlock({countries:t});case 3:e.next=11;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Promise.resolve(e.t0);case 9:n=e.sent,k.b.error(n||"Something went wrong, please try again later");case 11:return e.prev=11,this.setState({isBlocking:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,5,11,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.countries,n=this.state,r=n.isLoading,a=n.isBlocking,c=n.blockedCountries,o=n.blockedUsers,i=[{title:"Country",dataIndex:"name",key:"name"},{title:"Coutry Code",dataIndex:"code",key:"code"},{title:"Flag",dataIndex:"flag",key:"flag",render:function(e){return B("img",{src:e,width:"50px",alt:""})}},{title:"#",dataIndex:"code",key:"check",render:function(t){return B(p.a,{disabled:a,defaultChecked:!!(c.length>0&&c.find((function(e){return e===t}))),onChange:e.handleBlockCountry.bind(e,t)})}}],s=[{title:"# ",dataIndex:"_id",key:"avatar",render:function(e,t){return B("img",{src:(null===t||void 0===t?void 0:t.avatar)||"/default-user-icon.png",width:"50px",alt:""})}},{title:"Name ",dataIndex:"name",key:"name"},{title:"Username",dataIndex:"username",key:"username"},{title:"#",dataIndex:"_id",key:"check",render:function(t){return B("div",null,B(b.a,{onClick:e.handleBlockUser.bind(e,t)},"Unblock"))}}];return B(w.a.Fragment,null,B(m.a,null,B("title",null,"Blocking")),B("div",{className:"geo-blocking-page"},B(v.a,{title:"Blocking"}),B(h.a,{defaultActiveKey:"geo-block"},B(h.a.TabPane,{tab:"GEO Blocking",key:"geo-block"},B("div",null,t&&t.length>0&&!r?B(y.a,{pagination:!1,dataSource:t.map((function(e,t){return _(_({},e),{},{key:"key-country-".concat(t)})})),columns:i}):B("p",{className:"text-center"},"loading..."))),B(h.a.TabPane,{tab:"Black list users",key:"user-block"},B("div",null,r?B("p",{className:"text-center"},"loading..."):B(y.a,{pagination:!1,dataSource:o.map((function(e,t){return _(_({},e),{},{key:"key-country-".concat(t)})})),columns:s}))))))}}]),n}(O.PureComponent);Object(f.a)(U,"authenticate",!0),Object(f.a)(U,"layout","primary");t.default=Object(C.b)((function(e){return{countries:e.settings.countries}}))(U)},y8ku:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/performer/geo-block",function(){return n("a0d4")}])}},[["y8ku",0,1,3,5,2,4,6,7,10,9,11,12,13,14,15,17,18,19,20,21,23,24,26,8]]]);