(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(6),i=a.n(r),l=a(1),o=a(2),s=a(4),u=a(3),b=a(7),m=a.n(b),d=(a(13),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.tabs,a=e.id,n=e.onTabSelected;return c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",{className:"list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"item"},c.a.createElement("span",{className:m()("item_title",{active:e.id===a}),onClick:function(){return n(e)}},e.title))}))),c.a.createElement("p",{className:"content"},t.find((function(e){return a===e.id})).content))}}]),a}(c.a.Component)),p=(a(14),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={selectedTab:p[0]},e.handleTabChange=function(t){e.setState({selectedTab:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.selectedTab;return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"Selected Tab is: ".concat(e.title)),c.a.createElement(d,{tabs:p,id:e.id,onTabSelected:this.handleTabChange}))}}]),a}(c.a.Component);i.a.render(c.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.3a49d484.chunk.js.map