(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=(n(18),n(3)),s=n(12),l=n(4),d=n(5),u=n(7),b=n(6),j=(n(19),n(13)),m=n(10),h=n.n(m),p=n(2),f=n(0);var x=Object(p.a)("div",{target:"eoa2at53"})({name:"1ppwr9f",styles:"display:flex;flex-direction:column;padding:20px;border:1px solid black;border-radius:5px;width:max-content;align-items:center"}),g=Object(p.a)("form",{target:"eoa2at52"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),O=Object(p.a)("label",{target:"eoa2at51"})({name:"1fttcpj",styles:"display:flex;flex-direction:column"}),v=Object(p.a)("button",{target:"eoa2at50"})({name:"1ev37ey",styles:"display:block;padding:5px;margin:10px 0px;width:max-content;coursor:pointer;margin:20px auto"});function y(t){var e=t.text;return Object(f.jsx)(v,{children:e})}var C=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.submitContacts=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit(a,c),t.setState({name:"",number:""})},t.handlechange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(o.a)({},a,c))},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(x,{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsxs)(g,{onSubmit:this.submitContacts,children:[Object(f.jsxs)(O,{children:["Name",Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Put the name here",autoComplete:"off",value:e,onChange:this.handlechange,required:!0})]}),Object(f.jsxs)(O,{children:["Number",Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"Put the number here",autoComplete:"off",value:n,onChange:this.handlechange,required:!0})]}),Object(f.jsx)(y,{type:"submit",text:"Add contact"})]})]})})}}]),n}(a.Component);g.propTypes={onSubmit:h.a.func.isRequired};var S=Object(p.a)("ul",{target:"e1atahej1"})({name:"1xclg2i",styles:"margin:0;padding:0"}),k=Object(p.a)("h2",{target:"e1atahej0"})({name:"1azakc",styles:"text-align:center"});var w=Object(p.a)("div",{target:"ef7mz23"})({name:"zjik7",styles:"display:flex"}),z=Object(p.a)("li",{target:"ef7mz22"})(""),A=Object(p.a)("button",{target:"ef7mz21"})({name:"11v8gox",styles:"width:max-content;padding:3px 5px"}),D=Object(p.a)("p",{target:"ef7mz20"})({name:"1hwrxlv",styles:"display:block;width:250px;margin:0"});function q(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)(S,{children:[0===e.length?Object(f.jsx)(k,{children:"Can not find the Contact"}):Object(f.jsx)(k,{children:"Contacts"}),e.map((function(t){return Object(f.jsx)(z,{children:Object(f.jsxs)(w,{children:[Object(f.jsxs)(D,{children:[t.name,": ",t.number]}),Object(f.jsx)(A,{onClick:function(){return n(t.id)},type:"button",children:"Delete"})]})},t.id)}))]})})}var J=Object(p.a)("div",{target:"e1ug1yup0"})({name:"1y2thb4",styles:"display:flex;flex-direction:column;align-items:center;padding:20px"});var N=Object(p.a)("label",{target:"e1j5qz3a2"})(""),F=Object(p.a)("p",{target:"e1j5qz3a1"})({name:"48s3pj",styles:"font-weight:500;font-style:italic"}),I=Object(p.a)("input",{target:"e1j5qz3a0"})("");function M(t){var e=t.filter,n=t.onChange;return Object(f.jsxs)(N,{children:[Object(f.jsx)(F,{children:"Find contact by name"}),Object(f.jsx)(I,{type:"text",name:"filter",autoComplete:"off",value:e,onChange:n})]})}var P=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){if(t.state.contacts.find((function(t){return t.name===e})))return alert("".concat(e," is already in contacts")),!1;t.setState((function(t){return{contacts:[{id:Object(j.a)(),name:e,number:n}].concat(Object(s.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(o.a)({},a,c))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLowerCase(),c=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(f.jsxs)(J,{children:[Object(f.jsx)(C,{onSubmit:this.addContact}),Object(f.jsx)(M,{filter:n,onChange:this.handleChange}),0===n.length?0===e.length?Object(f.jsx)("h1",{children:"You have not contacts saved"}):Object(f.jsx)(q,{contacts:e,onDeleteContact:this.deleteContact}):Object(f.jsx)(q,{contacts:c,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.89b87e78.chunk.js.map