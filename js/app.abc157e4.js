(function(t){function e(e){for(var n,d,l=e[0],a=e[1],s=e[2],u=0,f=[];u<l.length;u++)d=l[u],Object.prototype.hasOwnProperty.call(r,d)&&r[d]&&f.push(r[d][0]),r[d]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,s||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,l=1;l<o.length;l++){var a=o[l];0!==r[a]&&(n=!1)}n&&(i.splice(e--,1),t=d(d.s=o[0]))}return t}var n={},r={app:0},i=[];function d(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,d),o.l=!0,o.exports}d.m=t,d.c=n,d.d=function(t,e,o){d.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},d.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},d.t=function(t,e){if(1&e&&(t=d(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(d.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)d.d(o,n,function(e){return t[e]}.bind(null,n));return o},d.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return d.d(e,"a",e),e},d.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},d.p="/vue-testing-demo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var c=a;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],d={name:"App",components:{}},l=d,a=o("2877"),s=Object(a["a"])(l,r,i,!1,null,null,null),c=s.exports,u=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"todoapp"},[o("TodoHeader",{on:{"new-todo":t.handleNewTodo}}),o("section",{staticClass:"main"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.toggleAll,expression:"toggleAll"}],staticClass:"toggle-all",attrs:{"data-testid":"toggle-all",id:"toggle-all",type:"checkbox"},domProps:{checked:Array.isArray(t.toggleAll)?t._i(t.toggleAll,null)>-1:t.toggleAll},on:{change:function(e){var o=t.toggleAll,n=e.target,r=!!n.checked;if(Array.isArray(o)){var i=null,d=t._i(o,i);n.checked?d<0&&(t.toggleAll=o.concat([i])):d>-1&&(t.toggleAll=o.slice(0,d).concat(o.slice(d+1)))}else t.toggleAll=r}}}),o("label",{attrs:{for:"toggle-all"}},[t._v("Mark all as complete")]),o("ul",{staticClass:"todo-list"},t._l(t.filterTodos,(function(e){return o("TodoItem",{key:e.id,attrs:{todo:e},on:{"delete-todo":t.handleDelteTodo,"edit-todo":t.handleEditTodo}})})),1)]),o("TodoFooter",{attrs:{todos:t.todos},on:{"clear-completed":t.handleClearCompleted}})],1)},p=[],h=(o("159b"),o("4de4"),o("c740"),o("a434"),o("7db0"),o("498a"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("todos")]),o("input",{staticClass:"new-todo",attrs:{placeholder:"What needs to be done?",autofocus:"","data-testid":"new-todo"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleNewTodo(e)}}})])}),m=[],v={name:"TodoHeader",methods:{handleNewTodo:function(t){var e=t.target.value.trim();e.length&&(this.$emit("new-todo",e),t.target.value="")}}},g=v,y=Object(a["a"])(g,h,m,!1,null,null,null),k=y.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer"},[o("span",{staticClass:"todo-count"},[o("strong",{attrs:{"data-testid":"done-todos-count"}},[t._v(t._s(t.doneTodosCount))]),t._v(" item left")]),o("ul",{staticClass:"filters"},[o("li",[o("router-link",{attrs:{"data-testid":"link-all",exact:"",to:"/"}},[t._v("All")])],1),o("li",[o("router-link",{attrs:{"data-testid":"link-active",to:"/active"}},[t._v("Active")])],1),o("li",[o("router-link",{attrs:{"data-testid":"link-completed",to:"/completed"}},[t._v("Completed")])],1)]),t.isClearCompletedShow?o("button",{staticClass:"clear-completed",attrs:{"data-testid":"clear-completed"},on:{click:function(e){return t.$emit("clear-completed")}}},[t._v("Clear completed ")]):t._e()])},_=[],C={name:"TodoFooter",props:{todos:{type:Array,required:!0}},computed:{doneTodosCount:function(){return this.todos.filter((function(t){return!t.done})).length},isClearCompletedShow:function(){return this.todos.find((function(t){return t.done}))}}},w=C,x=Object(a["a"])(w,b,_,!1,null,null,null),T=x.exports,A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{class:{completed:t.todo.done,editing:t.isEditing},attrs:{"data-testid":"todo-item"}},[o("div",{staticClass:"view"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todo.done,expression:"todo.done"}],staticClass:"toggle",attrs:{"data-testid":"todo-done",type:"checkbox"},domProps:{checked:Array.isArray(t.todo.done)?t._i(t.todo.done,null)>-1:t.todo.done},on:{change:function(e){var o=t.todo.done,n=e.target,r=!!n.checked;if(Array.isArray(o)){var i=null,d=t._i(o,i);n.checked?d<0&&t.$set(t.todo,"done",o.concat([i])):d>-1&&t.$set(t.todo,"done",o.slice(0,d).concat(o.slice(d+1)))}else t.$set(t.todo,"done",r)}}}),o("label",{attrs:{"data-testid":"todo-text"},on:{dblclick:function(e){t.isEditing=!0}}},[t._v(t._s(t.todo.text))]),o("button",{staticClass:"destroy",attrs:{"data-testid":"delete"},on:{click:function(e){return t.$emit("delete-todo",t.todo.id)}}})]),o("input",{directives:[{name:"focus",rawName:"v-focus",value:t.isEditing,expression:"isEditing"}],staticClass:"edit",attrs:{"data-testid":"todo-edit"},domProps:{value:t.todo.text},on:{blur:function(e){t.isEditing=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleEditTodo(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.handleCancelEdit(e)}]}})])},E=[],O={name:"TodoItem",props:{todo:{type:Object,required:!0}},directives:{focus:function(t,e){e.value&&t.focus()}},data:function(){return{isEditing:!1}},methods:{handleEditTodo:function(t){this.$emit("edit-todo",{id:this.todo.id,text:t.target.value}),this.isEditing=!1},handleCancelEdit:function(){this.isEditing=!1}}},j=O,$=Object(a["a"])(j,A,E,!1,null,null,null),P=$.exports,S={name:"TodoApp",components:{TodoHeader:k,TodoFooter:T,TodoItem:P},data:function(){return{todos:[]}},computed:{toggleAll:{get:function(){return this.todos.length&&this.todos.every((function(t){return t.done}))},set:function(t){this.todos.forEach((function(e){e.done=t}))}},filterTodos:function(){var t=this.$route.path,e=this.todos;switch(t){case"/active":e=this.todos.filter((function(t){return!t.done}));break;case"/completed":e=this.todos.filter((function(t){return t.done}));break}return e}},methods:{handleNewTodo:function(t){var e=this.todos[this.todos.length-1];this.todos.push({id:e?e.id+1:1,text:t,done:!1})},handleDelteTodo:function(t){var e=this.todos.findIndex((function(e){return e.id===t}));-1!==e&&this.todos.splice(e,1)},handleEditTodo:function(t){var e=t.id,o=t.text,n=this.todos.find((function(t){return t.id===e}));if(n)return o.trim().length?void(n.text=o):this.handleDelteTodo(e)},handleClearCompleted:function(){for(var t=0;t<this.todos.length;t++)this.todos[t].done&&(this.todos.splice(t,1),t--)}}},N=S,M=Object(a["a"])(N,f,p,!1,null,null,null),I=M.exports;n["a"].use(u["a"]);var D=[{path:"/",component:I},{path:"/active",component:I},{path:"/completed",component:I}],F=new u["a"]({routes:D,linkActiveClass:"selected"}),H=F,q=o("2f62");n["a"].use(q["a"]);var J=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}});o("5717");n["a"].config.productionTip=!1,new n["a"]({router:H,store:J,render:function(t){return t(c)}}).$mount("#app")},5717:function(t,e,o){}});
//# sourceMappingURL=app.abc157e4.js.map