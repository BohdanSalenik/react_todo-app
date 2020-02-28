(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),r=a.n(o),c=(a(16),a(17),a(7)),i=a(10),d=a(2),s=a(3),u=a(5),m=a(4),p=a(6),h=a(1),f=a.n(h),g=a(20),b=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",error:!1},a.handleChange=function(e){a.setState({title:e.target.value.replace(/^\s/,"")})},a.handleSubmit=function(e){e.preventDefault();var t=a.state.title;if(a.state.title.length<7)a.setState({error:!0});else{var n={title:t,id:Object(g.a)(),completed:!1};a.props.addTodo(n),a.setState({title:"",error:!1})}},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.error;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",onChange:this.handleChange,value:t}),l.a.createElement("p",{className:f()("error",{"error--detected":a})},"Enter todo length more 6 char"))}}]),t}(n.Component),E=function(e){var t=e.todo,a=e.deleteTodo,n=e.toggleComplited,o=t.id,r=t.title,c=t.completed;return l.a.createElement("li",null,l.a.createElement("div",{className:"view"},l.a.createElement("input",{type:"checkbox",checked:c,className:"toggle",id:o,onChange:n}),l.a.createElement("label",{htmlFor:o},r),l.a.createElement("button",{type:"button",className:"destroy",onClick:a})),l.a.createElement("input",{type:"text",className:"edit"}))},C=function(e){var t=e.todos,a=e.deleteTodo,n=e.toggleComplited,o=e.handleCheckedAll;return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:t.length&&t.every((function(e){return e.completed})),onClick:o}),l.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),t.length>0&&l.a.createElement("ul",{className:"todo-list"},t.map((function(e){return l.a.createElement(E,{key:e.id,todo:e,deleteTodo:function(){return a(e.id)},toggleComplited:function(){return n(e.id)}})}))))},v=function(e){var t=e.notFinishedTodo;return l.a.createElement("span",{className:"todo-count"},"".concat(t.length," items left"))},k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={todos:[],filter:"all"},a.addTodo=function(e){a.setState((function(t){return{todos:[].concat(Object(i.a)(t.todos),[e])}}))},a.deleteTodo=function(e){a.setState((function(t){return{todos:t.todos.filter((function(t){return t.id!==e}))}}))},a.toggleComplited=function(e){a.setState((function(t){return{todos:t.todos.map((function(t){return t.id===e?Object(c.a)({},t,{completed:!t.completed}):t}))}}))},a.handleCheckedAll=function(e){e.target.checked?a.setState((function(e){return{todos:e.todos.map((function(e){return Object(c.a)({},e,{completed:!0})}))}})):a.setState((function(e){return{todos:e.todos.map((function(e){return Object(c.a)({},e,{completed:!1})}))}}))},a.clearCompleted=function(){a.setState((function(e){return{todos:e.todos.filter((function(e){return!e.completed}))}}))},a.changeFilter=function(e){a.setState({filter:e.target.getAttribute("data-filter")})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.todos,a=e.filter,n=t.filter((function(e){return!e.completed})),o=function(e,t){switch(t){case"active":return e.filter((function(e){return!1===e.completed}));case"completed":return e.filter((function(e){return!0===e.completed}));default:return e}}(t,a);return l.a.createElement("section",{className:"todoapp"},l.a.createElement("header",{className:"header"},l.a.createElement("h1",null,"todos"),l.a.createElement(b,{addTodo:this.addTodo})),l.a.createElement("section",{className:"main"},l.a.createElement(C,{todos:o,deleteTodo:this.deleteTodo,toggleComplited:this.toggleComplited,handleCheckedAll:this.handleCheckedAll})),l.a.createElement("footer",{className:"footer"},l.a.createElement(v,{notFinishedTodo:n}),l.a.createElement("ul",{className:"filters"},l.a.createElement("li",null,l.a.createElement("button",{type:"button","data-filter":"all",className:f()({selected:"all"===a}),onClick:this.changeFilter},"All")),l.a.createElement("li",null,l.a.createElement("button",{type:"button","data-filter":"active",className:f()({selected:"active"===a}),onClick:this.changeFilter},"Active")),l.a.createElement("li",null,l.a.createElement("button",{type:"button","data-filter":"completed",className:f()({selected:"completed"===a}),onClick:this.changeFilter},"Completed"))),l.a.createElement("button",{type:"button",className:"clear-completed",onClick:this.clearCompleted},"Clear completed")))}}]),t}(n.Component);r.a.render(l.a.createElement(k,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.a793b71c.chunk.js.map