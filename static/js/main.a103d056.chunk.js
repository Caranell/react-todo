(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{61:function(e,t,a){e.exports=a(76)},67:function(e,t,a){},68:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),c=(a(67),a(68),a(38)),o=a(46),m=a(26),s=a(52),u=a(47),d=a(53),f=a(16),p=a.n(f),v=a(108),h=a(51),g=a.n(h),E=a(109),I=a(116),b=a(114),y=a(49),k=a.n(y),w=a(50),C=a.n(w),j=a(113),x=Object(j.a)({done:{"text-decoration":"line-through"},standard:{}}),F=function(e){var t=e.item,a=e.toggleComplete,n=e.deleteItem,i=x();return r.a.createElement(v.a,{item:!0},r.a.createElement(v.a,{item:!0},r.a.createElement(I.a,{control:r.a.createElement(b.a,{icon:r.a.createElement(k.a,{fontSize:"small"}),checkedIcon:r.a.createElement(C.a,{fontSize:"small"}),value:"checkedI",checked:t.completed,onClick:function(){return a(t.id)}}),label:t.text,className:t.completed?i.done:i.standard}),r.a.createElement(E.a,{"aria-label":"delete",className:"makeStyles-margin-36",onClick:function(){return n(t.id)}},r.a.createElement(g.a,{fontSize:"small"}))))},S=function(e){var t=e.items,a=e.toggleComplete,n=e.deleteItem;return r.a.createElement(v.a,{container:!0,justify:"center",alignItems:"center",direction:"column",wrap:"nowrap",spacing:3},t.map(function(e){return r.a.createElement(F,{key:e.id,item:e,toggleComplete:a,deleteItem:n})}))},O=a(112),P=function(e){var t=e.onKeyPress;return r.a.createElement(v.a,{item:!0},r.a.createElement(O.a,{multiline:!0,rowsMax:"2",onKeyPress:function(e){return t(e,void 0)},helperText:"press Enter to add new one"}))};P.defaultProps={addItem:function(){}};var z=P,K=a(111),N=a(110),J=a(115),A=[{id:p.a.v4(),name:"all"},{id:p.a.v4(),name:"active"},{id:p.a.v4(),name:"completed"}],B=function(e){var t=e.amount,a=e.activeFilter,n=e.changeFilter;return r.a.createElement(v.a,{item:!0},r.a.createElement(J.a,{inputProps:{value:"Number of items: "+t}}),r.a.createElement(N.a,{size:"small","aria-label":"small outlined button group"},A.map(function(e){var t=e.id,i=e.name;return r.a.createElement(K.a,{disabled:i===a,onClick:function(){return n(i)},key:t},i)})))};B.defaultProps={amount:0,activeFilter:"all",changeFilter:function(){}};var M=B,T=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:[{id:p.a.v4(),text:"visit doctor",completed:!1},{id:p.a.v4(),text:"buy milk",completed:!0},{id:p.a.v4(),text:"play mario",completed:!0}],filter:"all"},a.toggleComplete=function(e){a.setState({items:a.state.items.map(function(t){return e===t.id&&(t.completed=!t.completed),t})})},a.addItem=function(e,t){if("Enter"===e.key){var n=e.target.value.trim();if(""!==n){var r={id:p.a.v4(),text:n,completed:!1};e.target.value="",a.setState({items:[].concat(Object(c.a)(a.state.items),[r]),filter:a.state.filter})}}},a.deleteItem=function(e){a.setState({items:a.state.items.filter(function(t){return t.id!==e})})},a.filterItems=function(e){switch(e){case"active":return a.state.items.filter(function(e){return!e.completed});case"completed":return a.state.items.filter(function(e){return e.completed});default:return a.state.items}},a.changeFilter=function(e){a.setState({filter:e})},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.state.filter,t=this.filterItems(e);return r.a.createElement(v.a,{container:!0,direction:"column",justify:"space-between",alignItems:"center"},r.a.createElement(z,{onKeyPress:this.addItem,handleEnter:this.handleEnter}),r.a.createElement(S,{items:t,addItem:this.addItem,toggleComplete:this.toggleComplete,deleteItem:this.deleteItem}),r.a.createElement(M,{amount:t.length,activeFilter:this.state.filter,changeFilter:this.changeFilter}))}}]),t}(n.Component),q=function(){return r.a.createElement(T,null)};l.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.a103d056.chunk.js.map