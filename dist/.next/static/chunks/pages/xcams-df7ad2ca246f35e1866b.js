_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[137],{"2/Rp":function(e,t,r){"use strict";var n=r("zvFY");t.a=n.b},"2vdt":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/xcams",function(){return r("lM/c")}])},"9njb":function(e,t,r){"use strict";var n=r("o0o1"),a=r.n(n),i=r("HaE+"),o=r("1OyB"),c=r("vuIU"),s=r("JX7q"),u=r("Ji7U"),l=r("md7G"),d=r("foSv"),p=r("rePB"),f=(r("LJzH"),r("q1tI")),b=r("TSYQ"),h=r.n(b),v=r("vcXL"),O=r.n(v),m=r("HQdG"),y=r("CLrh"),R=r("MoJi"),E=r("8OJ3"),I=r("rP/q"),A=f.createElement;function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(d.a)(e);if(t){var a=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var g=function(e){Object(u.a)(r,e);var t=S(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),Object(p.a)(Object(s.a)(e),"videoContainerRef",void 0),Object(p.a)(Object(s.a)(e),"streamId",void 0),Object(p.a)(Object(s.a)(e),"player",void 0),Object(p.a)(Object(s.a)(e),"activeStreams",[]),Object(p.a)(Object(s.a)(e),"getLiveStreamOrVodURLInterval",void 0),Object(p.a)(Object(s.a)(e),"id","player-".concat(Object(I.b)())),e}return Object(c.a)(r,[{key:"componentDidMount",value:function(){this.videoContainerRef=f.createRef()}},{key:"componentWillUnmount",value:function(){this.getLiveStreamOrVodURLInterval&&clearInterval(this.getLiveStreamOrVodURLInterval),this.player&&this.player.dispose()}},{key:"handler",value:function(){var e=Object(i.a)(a.a.mark((function e(t,r){var n,i,o,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,i=n.webRTCAdaptor,o=n.settings,t!==R.a.INITIALIZED){e.next=8;break}return e.next=4,y.r.getSubscriberToken({streamId:this.streamId,settings:o});case 4:c=e.sent,i.play(this.streamId,c),e.next=26;break;case 8:if(t!==R.a.NEW_STREAM_AVAILABLE){e.next=14;break}s=this.activeStreams.find((function(e){return e===r.streamId})),this.player&&(this.player.dispose(),this.player=void 0),s||(this.activeStreams.push(r.streamId),this.createRemoteVideo(r.stream)),e.next=26;break;case 14:if(t!==R.a.PLAY_FINISHED){e.next=20;break}this.activeStreams=this.activeStreams.filter((function(e){return e!==r.streamId})),this.removeRemoteVideo(),setTimeout((function(){i.getStreamInfo(r.streamId)}),3e3),e.next=26;break;case 20:if(t!==R.a.STREAM_INFORMATION){e.next=26;break}if(r.streamId!==this.streamId){e.next=26;break}return e.next=24,y.r.getSubscriberToken({streamId:r.streamId,settings:o});case 24:u=e.sent,i.play(r.streamId,u);case 26:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"createPlaybackideo",value:function(e){var t=this.props.classNames,r=document.createElement("video");r.setAttribute("id",this.id),r.setAttribute("class",h()(t,"subscriber video-js")),r.autoplay=!0,r.muted=!0,r.controls=!0,r.playsInline=!0,r.width=this.videoContainerRef.current.offsetWidth,this.videoContainerRef.current.append(r),this.player=Object(E.a)(this.id,{autoplay:!0,liveui:!0}),this.player.on("ended",this.ended.bind(this)),this.player.on("error",this.ended.bind(this)),this.player.controls(!0),e&&this.playHLS(e)}},{key:"resetPlaybackVideo",value:function(){var e;this.streamId="",null!==(e=this.player)&&void 0!==e&&e.src()&&(this.player.dispose(),this.player=void 0)}},{key:"cbErrorHandler",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var r,n,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"no_stream_exist"===t&&(r=this.props,n=r.webRTCAdaptor,i=r.initWebRTCAdaptor,n?this.streamId&&n.getStreamInfo(this.streamId):i(this.handler.bind(this),this.cbErrorHandler.bind(this)));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"ended",value:function(){var e=Object(i.a)(a.a.mark((function e(){var t,r,n=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.settings,this.streamId){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,y.r.getLiveStreamOrVodURL({streamId:this.streamId,settings:t,appName:t.AntMediaAppname});case 5:(r=e.sent)&&(this.getLiveStreamOrVodURLInterval=setInterval((function(){O()(r,{method:"HEAD"}).then((function(){n.playHLS(n.streamId),n.getLiveStreamOrVodURLInterval&&clearInterval(n.getLiveStreamOrVodURLInterval)}))}),5e3));case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createRemoteVideo",value:function(e){var t=this.props.classNames,r=document.createElement("video");r.setAttribute("id",this.id),r.setAttribute("class",h()(t)),r.autoplay=!0,r.muted=!0,r.controls=!0,r.playsInline=!0,r.srcObject=e,r.width=this.videoContainerRef.current.offsetWidth,this.videoContainerRef.current.append(r)}},{key:"removeRemoteVideo",value:function(){var e=document.getElementById(this.id);e&&(e.srcObject=null,this.videoContainerRef.current.removeChild(e))}},{key:"play",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var r,n,i,o,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.props,n=r.initWebRTCAdaptor,i=r.initialized,o=r.webRTCAdaptor,c=r.settings,this.streamId=t,!i){e.next=8;break}return e.next=5,y.r.getSubscriberToken({streamId:t,settings:c});case 5:return s=e.sent,o.play(t,s),e.abrupt("return");case 8:n(this.handler.bind(this),this.cbErrorHandler.bind(this));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"playHLS",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var r,n,i,o,c,s=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.player||this.createPlaybackideo(t),r=this.props,n=r.configs,i=r.settings,o=n.appName||i.AntMediaAppname,this.streamId=t,this.getLiveStreamOrVodURLInterval&&clearInterval(this.getLiveStreamOrVodURLInterval),e.next=7,y.r.getLiveStreamOrVodURL({appName:o,settings:i,streamId:t});case 7:if(c=e.sent){e.next=10;break}return e.abrupt("return");case 10:setTimeout((function(){s.player&&(s.player.src({type:"application/x-mpegURL",src:c}),s.player.play(),s.player.controls(!0))}),1e3);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"stop",value:function(){var e=this.props.leaveSession;this.streamId="",e&&e()}},{key:"render",value:function(){var e=this.props.containerClassName;return A("div",{className:h()("video-container",e),ref:this.videoContainerRef})}}]),r}(f.PureComponent);t.a=f.memo(Object(m.a)(g))},HQdG:function(e,t,r){"use strict";r.d(t,"a",(function(){return j}));var n=r("o0o1"),a=r.n(n),i=r("HaE+"),o=r("wx14"),c=r("1OyB"),s=r("vuIU"),u=r("JX7q"),l=r("Ji7U"),d=r("md7G"),p=r("foSv"),f=r("rePB"),b=r("q1tI"),h=r.n(b),v=r("nOHt"),O=r.n(v),m=r("fsrY"),y=r("tsqr"),R=r("XwMy"),E=r("MoJi"),I=h.a.createElement;function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(p.a)(e);if(t){var a=Object(p.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}function j(e){var t=function(t){Object(l.a)(n,t);var r=g(n);function n(e){var t;Object(c.a)(this,n),t=r.call(this,e),Object(f.a)(Object(u.a)(t),"webRTCAdaptor",void 0),Object(f.a)(Object(u.a)(t),"autoRepublishIntervalJob",void 0),Object(f.a)(Object(u.a)(t),"onbeforeunload",(function(){t.leaveSession()}));var a=t.props.sessionId;return t.state={initialized:!1,publish_started:!1,isMicMuted:!1,streamId:a},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initImmediately&&this.initWebRTCAdaptor(),O.a.events.on("routeChangeStart",this.onbeforeunload)}},{key:"componentWillUnmount",value:function(){O.a.events.off("routeChangeStart",this.onbeforeunload)}},{key:"leaveSession",value:function(){var e=this.state,t=e.streamId,r=e.initialized,n=this.props.configs.isPlayMode;this.autoRepublishIntervalJob&&window.clearInterval(this.autoRepublishIntervalJob),this.webRTCAdaptor&&(t&&(this.webRTCAdaptor.stop(t),this.webRTCAdaptor.closePeerConnection(t),n||this.webRTCAdaptor.closeStream(t)),r&&this.webRTCAdaptor.closeWebSocket(),this.webRTCAdaptor=void 0),this.setState({streamId:"",initialized:!1,isMicMuted:!1})}},{key:"initWebRTCAdaptor",value:function(e,t){var r=this,n=this.props,a=n.configs,i=n.settings,o=n.autoRepublishDisabled,c=n.callback,s=a.isPlayMode,u=R.a.debug,l=s?i[m.a.SUBSCRIBER_URL]:i[m.a.PUBLISHER_URL];if(l){if(this.webRTCAdaptor||!o){var d=a.appName||i.AntMediaAppname,p="".concat(l,"/").concat(d,"/websocket"),f="ws://".concat(p);window.location.protocol.startsWith("https")&&(f="wss://".concat(p)),this.setState({cb:e,cbError:t}),this.webRTCAdaptor=new window.WebRTCAdaptor(S(S({websocket_url:f,mediaConstraints:{video:!0,audio:!0},debug:u,peerconnection_config:{iceServers:[{urls:"stun:stun.l.google.com:19302"}]},sdp_constraints:{OfferToReceiveAudio:!1,OfferToReceiveVideo:!1},bandwidth:R.a.maxVideoBitrateKbps,isPlayMode:!1},a),{},{callback:function(t,n){if("initialized"===t)r.setState({initialized:!0});else if("publish_started"===t)r.setState({publish_started:!0,streamId:n.streamId}),r.autoRepublishIntervalJob||o||(r.autoRepublishIntervalJob=setInterval(r.checkAndRepublishIfRequired.bind(r),5e3));else if("publish_finished"===t)r.setState({publish_started:!1,streamId:""});else if(t===E.a.ICE_CONNECTION_STATE_CHANGED)r.setState({iceConnectionState:n.state});else if(t===E.a.REFRESH_CONNECTION){r.state.publish_started&&!o&&r.checkAndRepublishIfRequired()}else t===E.a.CLOSED&&"undefined"!==typeof n&&console.log("Connecton closed: ".concat(JSON.stringify(n)));c&&"function"===typeof c&&c(t,n),e&&"function"===typeof e&&e(t,n)},callbackError:function(e,n){t&&"function"===typeof t&&t(e,n),r.callbackError(e,n,{websocketURL:f})}}))}}else y.b.error("Undefined WebsocketURL!")}},{key:"checkAndRepublishIfRequired",value:function(){try{var e=this.state,t=e.streamId,r=e.cb,n=e.cbError;if(!this.webRTCAdaptor||!t)return;var a=this.webRTCAdaptor.iceConnectionState(t);null!=a&&"failed"!==a&&"disconnected"!==a||(console.error("Publish has stopped and will try to re-publish"),this.webRTCAdaptor.stop(t),this.webRTCAdaptor.closePeerConnection(t),this.webRTCAdaptor.closeWebSocket(),this.initWebRTCAdaptor(r,n))}catch(i){console.error("error republish",i)}}},{key:"callbackError",value:function(e,t,r){console.error("error callback: ".concat(JSON.stringify(e)));var n=r.websocketURL;if("string"===typeof t)return console.error("error message:",t),void y.b.error(t,3);var a=JSON.stringify(e);-1===a.indexOf("noStreamNameSpecified")?(-1!==a.indexOf("NotFoundError")?a="Camera or Mic are not found or not allowed in your device":-1!==a.indexOf("NotReadableError")||-1!==a.indexOf("TrackStartError")?a="Camera or Mic is being used by some other process that does not let read the devices":-1!==a.indexOf("OverconstrainedError")||-1!==a.indexOf("ConstraintNotSatisfiedError")?a="There is no device found that fits your video and audio constraints. You may change video and audio constraints":-1!==a.indexOf("NotAllowedError")||-1!==a.indexOf("PermissionDeniedError")?a="You are not allowed to access camera and mic.":-1!==a.indexOf("TypeError")?a="Video/Audio is required":-1!==a.indexOf("ScreenSharePermissionDenied")?a="You are not allowed to access screen share":-1!==a.indexOf("WebSocketNotConnected")?a="WebRTCAdaptor Connection is disconnected":-1!==a.indexOf("unauthorized_access")?a="Access Denied. You don\u2019t have permission to access":-1!==a.indexOf("streamIdInUse")?a="Stream have been already published. Please close the previous connection.":-1!==a.indexOf("publishTimeoutError")?a="WebRTC Publishing Timeout Error":-1!==a.indexOf("not_allowed_unregistered_streams")?a="Stream with an unregistered id is not allowed":-1!==a.indexOf("UnsecureContext")?a="Fatal Error: Browser cannot access camera and mic because of unsecure context. Please install SSL and access via https":-1!==a.indexOf("WebSocketNotSupported")?a="Fatal Error: WebSocket not supported in this browser":-1!==a.indexOf("AudioAlreadyActive")?a="AudioAlreadyActive":-1!==a.indexOf("isTrusted")?(a="WebSocket connection to ".concat(n," failed"),window.location.reload()):a="WebRTCAdaptor Connection Error",a&&y.b.error(a,3)):console.warn(a)}},{key:"muteLocalMic",value:function(){this.webRTCAdaptor&&(this.webRTCAdaptor.muteLocalMic(),this.setState({isMicMuted:!0}),y.b.success("Muted local mic successfully"))}},{key:"unmuteLocalMic",value:function(){this.webRTCAdaptor&&(this.webRTCAdaptor.unmuteLocalMic(),this.setState({isMicMuted:!1}),y.b.success("Unmuted local mic successfully"))}},{key:"render",value:function(){var t=this.props.forwardedRef;return I(e,Object(o.a)({},this.props,this.state,{webRTCAdaptor:this.webRTCAdaptor,initWebRTCAdaptor:this.initWebRTCAdaptor.bind(this),muteLocalMic:this.muteLocalMic.bind(this),unmuteLocalMic:this.unmuteLocalMic.bind(this),leaveSession:this.leaveSession.bind(this),ref:t}))}}],[{key:"getInitialProps",value:function(){var t=Object(i.a)(a.a.mark((function t(r){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=e.getInitialProps,!t.t0){t.next=5;break}return t.next=4,e.getInitialProps(r);case 4:t.t0=t.sent;case 5:return n=t.t0,t.abrupt("return",S({},n));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),n}(h.a.Component);return h.a.forwardRef((function(e,r){return I(t,Object(o.a)({},e,{forwardedRef:r}))}))}},MoJi:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.INITIALIZED="initialized",e.AVAILABLE_DEVICES="available_devices",e.PUBLISH_STARTED="publish_started",e.PUBLISH_FINISHED="publish_finished",e.SCREEN_SHARE_EXTENSION_AVAILABLE="screen_share_extension_available",e.SCREEN_SHARE_STOPPED="screen_share_stopped",e.CLOSED="closed",e.PONG="pong",e.REFRESH_CONNECTION="refreshConnection",e.ICE_CONNECTION_STATE_CHANGED="ice_connection_state_changed",e.UPDATED_STATS="updated_stats",e.PLAY_FINISHED="play_finished",e.PLAY_STARTED="play_started",e.JOINED_THE_ROOM="joinedTheRoom",e.STREAM_JOINED="streamJoined",e.NEW_STREAM_AVAILABLE="newStreamAvailable",e.STREAM_LEAVED="streamLeaved",e.LEAVED_FROM_ROOM="leavedFromRoom",e.STREAM_INFORMATION="streamInformation"}(n||(n={}))},fsrY:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={SITE_NAME:"siteName",LOGO_URL:"logoUrl",BANNER_URL:"bannerUrl",PLACEHOLDER_LOGIN_URL:"placeholderLoginUrl",PLACEHOLDER_AVATAR_URL:"placeholderAvatarUrl",FAVICON:"favicon",META_KEYWORDS:"metaKeywords",META_DESCRIPTION:"metaDescription",HEADER_SCRIPT:"headerScript",AFTER_BODY_SCRIPT:"afterBodyScript",CURRENCY:"currency",GOOGLE_ANALYTICS_CODE:"gaCode",MAINTENANCE_MODE:"maintenanceMode",TIP_SOUND:"tipSound",DEFAULT_OFFLINE_MODEL_IMAGE:"defaultOfflineModelImage",DEFAULT_MODEL_PRIVATECALL_WITH_USER_IMAGE:"defaultPrivateCallImage",DEFAULT_MODEL_IN_GROUP_CHAT_IMAGE:"defaultGroupChatImage",VIEWER_URL:"viewerURL",PUBLISHER_URL:"publisherURL",SUBSCRIBER_URL:"subscriberUrl",OPTION_FOR_BROADCAST:"optionForBroadcast",OPTION_FOR_PRIVATE:"optionForPrivate",OPTION_FOR_GROUP:"optionForGroup",SECURE_OPTION:"secureOption",ANT_MEDIA_APPNAME:"AntMediaAppname"}},"lM/c":function(e,t,r){"use strict";r.r(t);var n=r("wx14"),a=r("KQm4"),i=r("1OyB"),o=r("vuIU"),c=r("JX7q"),s=r("Ji7U"),u=r("md7G"),l=r("foSv"),d=r("rePB"),p=r("q1tI"),f=r.n(p),b=r("rP/q"),h=r("/MKj"),v=r("9njb"),O=r("2/Rp"),m=f.a.createElement;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var a=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(u.a)(this,r)}}var E=function(e){Object(s.a)(r,e);var t=R(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(d.a)(Object(c.a)(e),"playerRefs",{}),Object(d.a)(Object(c.a)(e),"state",{streamIds:[]}),e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){for(var e=this.state.streamIds,t=Object(a.a)(e),r=0;r<5;r+=1)t.push(Object(b.b)());this.setState({streamIds:t})}},{key:"play",value:function(){var e=this;Object.keys(this.playerRefs).forEach((function(t){var r;null===(r=e.playerRefs[t])||void 0===r||r.playHLS(t)}))}},{key:"render",value:function(){var e=this,t=this.state.streamIds;return m(f.a.Fragment,null,m(O.a,{type:"primary",onClick:this.play.bind(this),disabled:!0},"Play"),t.length>0&&t.map((function(t){return m(v.a,Object(n.a)({},e.props,{sessionId:t,configs:{isPlayMode:!0},ref:function(r){return e.playerRefs[t]=r}}))})))}}]),r}(p.PureComponent);t.default=Object(h.b)((function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(d.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.streaming)}))(E)},zvFY:function(e,t,r){"use strict";r.d(t,"a",(function(){return N}));var n=r("wx14"),a=r("rePB"),i=r("ODXe"),o=r("U8pU"),c=r("q1tI"),s=r.n(c),u=r("TSYQ"),l=r.n(u),d=r("bT9E"),p=r("H84U"),f=r("1OyB"),b=function e(t){return Object(f.a)(this,e),new Error("unreachable case: ".concat(JSON.stringify(t)))},h=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},v=function(e){return c.createElement(p.a,null,(function(t){var r,i=t.getPrefixCls,o=t.direction,s=e.prefixCls,u=e.size,d=e.className,p=h(e,["prefixCls","size","className"]),f=i("btn-group",s),v="";switch(u){case"large":v="lg";break;case"small":v="sm";break;case"middle":case void 0:break;default:console.warn(new b(u))}var O=l()(f,(r={},Object(a.a)(r,"".concat(f,"-").concat(v),v),Object(a.a)(r,"".concat(f,"-rtl"),"rtl"===o),r),d);return c.createElement("div",Object(n.a)({},p,{className:O}))}))},O=r("g0mS"),m=r("CWQg"),y=r("uaoM"),R=r("3Nzz"),E=r("8XRh"),I=r("ye1Q"),A=function(){return{width:0,opacity:0,transform:"scale(0)"}},S=function(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},g=function(e){var t=e.prefixCls,r=!!e.loading;return e.existIcon?s.a.createElement("span",{className:"".concat(t,"-loading-icon")},s.a.createElement(I.a,null)):s.a.createElement(E.default,{visible:r,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:A,onAppearActive:S,onEnterStart:A,onEnterActive:S,onLeaveStart:S,onLeaveActive:A},(function(e,r){var n=e.className,a=e.style;return s.a.createElement("span",{className:"".concat(t,"-loading-icon"),style:a,ref:r},s.a.createElement(I.a,{className:n}))}))},j=r("0n0R"),C=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},_=/^[\u4e00-\u9fa5]{2}$/,w=_.test.bind(_);function T(e){return"text"===e||"link"===e}function L(e,t){if(null!=e){var r,n=t?" ":"";return"string"!==typeof e&&"number"!==typeof e&&"string"===typeof e.type&&w(e.props.children)?Object(j.a)(e,{children:e.props.children.split("").join(n)}):"string"===typeof e?w(e)?c.createElement("span",null,e.split("").join(n)):c.createElement("span",null,e):(r=e,c.isValidElement(r)&&r.type===c.Fragment?c.createElement("span",null,e):e)}}Object(m.a)("default","primary","ghost","dashed","link","text"),Object(m.a)("default","circle","round"),Object(m.a)("submit","button","reset");function N(e){return"danger"===e?{danger:!0}:{type:e}}var k=function(e,t){var r,s,u=e.loading,f=void 0!==u&&u,b=e.prefixCls,h=e.type,v=e.danger,m=e.shape,E=void 0===m?"default":m,I=e.size,A=e.className,S=e.children,j=e.icon,_=e.ghost,N=void 0!==_&&_,k=e.block,P=void 0!==k&&k,x=e.htmlType,M=void 0===x?"button":x,U=C(e,["loading","prefixCls","type","danger","shape","size","className","children","icon","ghost","block","htmlType"]),D=c.useContext(R.b),B=c.useState(!!f),H=Object(i.a)(B,2),V=H[0],W=H[1],F=c.useState(!1),J=Object(i.a)(F,2),G=J[0],z=J[1],Y=c.useContext(p.b),q=Y.getPrefixCls,X=Y.autoInsertSpaceInButton,Q=Y.direction,K=t||c.createRef(),Z=c.useRef(),$=function(){return 1===c.Children.count(S)&&!j&&!T(h)};s="object"===Object(o.a)(f)&&f.delay?f.delay||!0:!!f,c.useEffect((function(){clearTimeout(Z.current),"number"===typeof s?Z.current=window.setTimeout((function(){W(s)}),s):W(s)}),[s]),c.useEffect((function(){if(K&&K.current&&!1!==X){var e=K.current.textContent;$()&&w(e)?G||z(!0):G&&z(!1)}}),[K]);var ee=function(t){var r,n=e.onClick,a=e.disabled;V||a?t.preventDefault():null===(r=n)||void 0===r||r(t)};Object(y.a)(!("string"===typeof j&&j.length>2),"Button","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(j,"` at https://ant.design/components/icon")),Object(y.a)(!(N&&T(h)),"Button","`link` or `text` button can't be a `ghost` button.");var te=q("btn",b),re=!1!==X,ne="";switch(I||D){case"large":ne="lg";break;case"small":ne="sm"}var ae=V?"loading":j,ie=l()(te,(r={},Object(a.a)(r,"".concat(te,"-").concat(h),h),Object(a.a)(r,"".concat(te,"-").concat(E),"default"!==E&&E),Object(a.a)(r,"".concat(te,"-").concat(ne),ne),Object(a.a)(r,"".concat(te,"-icon-only"),!S&&0!==S&&!!ae),Object(a.a)(r,"".concat(te,"-background-ghost"),N&&!T(h)),Object(a.a)(r,"".concat(te,"-loading"),V),Object(a.a)(r,"".concat(te,"-two-chinese-chars"),G&&re),Object(a.a)(r,"".concat(te,"-block"),P),Object(a.a)(r,"".concat(te,"-dangerous"),!!v),Object(a.a)(r,"".concat(te,"-rtl"),"rtl"===Q),r),A),oe=j&&!V?j:c.createElement(g,{existIcon:!!j,prefixCls:te,loading:!!V}),ce=S||0===S?function(e,t){var r=!1,n=[];return c.Children.forEach(e,(function(e){var t=Object(o.a)(e),a="string"===t||"number"===t;if(r&&a){var i=n.length-1,c=n[i];n[i]="".concat(c).concat(e)}else n.push(e);r=a})),c.Children.map(n,(function(e){return L(e,t)}))}(S,$()&&re):null,se=Object(d.a)(U,["navigate"]);if(void 0!==se.href)return c.createElement("a",Object(n.a)({},se,{className:ie,onClick:ee,ref:K}),oe,ce);var ue=c.createElement("button",Object(n.a)({},U,{type:M,className:ie,onClick:ee,ref:K}),oe,ce);return T(h)?ue:c.createElement(O.a,{disabled:!!V},ue)},P=c.forwardRef(k);P.displayName="Button",P.Group=v,P.__ANT_BUTTON=!0;t.b=P}},[["2vdt",0,1,3,5,29,2,4,6,9,11,13,16,20,25,38,8]]]);