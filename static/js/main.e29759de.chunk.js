(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,a,t){e.exports={todo_container:"Affairs_todo_container__cN4Bm",todo_item:"Affairs_todo_item__1J8sg"}},function(e,a,t){e.exports={input:"Greeting_input__IXTiy",wrapper:"Greeting_wrapper__3eSuW",active:"Greeting_active__2U8YE",error:"Greeting_error__kHo7v",button:"Greeting_button__2lD6x",counter:"Greeting_counter__1-R55"}},,function(e,a,t){e.exports={container:"Message_container__2TZYB",image:"Message_image__3XeMj",title:"Message_title__2kbfN",text:"Message_text__3j9Y3",time:"Message_time__2iLZ6"}},function(e,a,t){e.exports={item:"Affair_item__d7z-z",wrapper:"Affair_wrapper__11Faa",title:"Affair_title__xJ8nk",subtitle:"Affair_subtitle__1fZoh"}},,,function(e,a,t){e.exports={nav_container:"Header_nav_container__3H0CJ",nav_wrapper:"Header_nav_wrapper__LQIpD",link:"Header_link__1J0XD",active:"Header_active__1KAsO"}},function(e,a,t){e.exports={input:"SuperInputText_input__1uawi",superInput:"SuperInputText_superInput__tXCaf",errorInput:"SuperInputText_errorInput__1C8FE",error:"SuperInputText_error__3dF8z"}},function(e,a,t){e.exports={wrapper:"HW8_wrapper__2vLID",item:"HW8_item__2Ac2W"}},function(e,a,t){e.exports={error_container:"Error404_error_container__SFj9o",error_status:"Error404_error_status__3f5t6",error_text:"Error404_error_text__2kJhU",error_img:"Error404_error_img__9NEJ5"}},function(e,a,t){e.exports={button:"SuperButton_button__3Sz9y",red:"SuperButton_red__2MqSP",remove:"SuperButton_remove__3J4vG"}},function(e,a,t){e.exports={blue:"HW4_blue__20qCY",column:"HW4_column__3M66e",testSpanError:"HW4_testSpanError__1S5O7",input:"HW4_input__1_EbA"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__2oIsl",checkbox:"SuperCheckbox_checkbox__QZWq-",spanClassName:"SuperCheckbox_spanClassName__2U82j"}},function(e,a,t){e.exports={app:"App_app__3exP5",app_title:"App_app_title__CqyYn"}},function(e,a,t){e.exports={select:"SuperSelect_select__r0WF7",option:"SuperSelect_option__3PUww"}},function(e,a,t){e.exports={radio_label:"SuperRadio_radio_label__2hOUn"}},,,,function(e,a,t){e.exports={title:"SuperEditableSpan_title__3S6Y4"}},function(e,a,t){e.exports=t(33)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),c=t.n(l),o=(t(32),t(20)),u=t.n(o),i=t(5),s=t(13),m=t.n(s),p=t(1),_=t(9),E=t.n(_);var d=function(e){return r.a.createElement("div",{className:E.a.container},r.a.createElement("img",{className:E.a.image,src:e.avatar,alt:""}),r.a.createElement("p",{className:E.a.title},e.name),r.a.createElement("p",{className:E.a.text},e.message),r.a.createElement("div",{className:E.a.time},e.time))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Aleksandr Saponchik",v="Did my homework \u21161",b="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Homeworks 1"),r.a.createElement(d,{avatar:f,name:h,message:v,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},N=t(2),k=t(10),C=t.n(k),O=t(4),x=t(17),j=t.n(x),y=function(e){var a=e.red,t=e.remove,n=e.className,l=Object(O.a)(e,["red","remove","className"]),c="".concat(j.a.button," ").concat(a?j.a.red:""," ").concat(t?j.a.remove:""," ").concat(n);return r.a.createElement("button",Object.assign({className:c},l))};var S=function(e){return r.a.createElement("ul",{className:C.a.item},r.a.createElement("li",{className:C.a.wrapper},r.a.createElement("span",{className:C.a.title},e.affair.name),r.a.createElement("span",{className:C.a.subtitle},e.affair.priority),r.a.createElement(y,{remove:!0,className:C.a.button_remove,onClick:function(){return e.deleteAffairCallback(e.affair._id)}},"x")))},w=t(6),H=t.n(w);var A=function(e){var a=e.data,t=e.setFilter,n=e.deleteAffairCallback,l=a.map((function(e){return r.a.createElement(S,{key:e._id,affair:e,deleteAffairCallback:n})}));return r.a.createElement("div",{className:H.a.todo_container},r.a.createElement("div",{className:H.a.todo_item},r.a.createElement(y,{className:H.a.button,onClick:function(){return t("all")}},"All"),r.a.createElement(y,{className:H.a.button,onClick:function(){return t("high")}},"High"),r.a.createElement(y,{className:H.a.button,onClick:function(){return t("middle")}},"Middle"),r.a.createElement(y,{className:H.a.button,onClick:function(){return t("low")}},"Low")),l)},T=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var I=function(){var e=Object(n.useState)(T),a=Object(N.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(N.a)(c,2),u=o[0],i=o[1],s=function(e,a){switch(a){case"all":return e;case"low":return e.filter((function(e){return"low"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"high":return e.filter((function(e){return"high"===e.priority}));default:return e}}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Homeworks 2"),r.a.createElement(A,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=t(12),F=t(7),P=t.n(F),W=t(14),B=t.n(W),U=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(O.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(B.a.error," ").concat(u||""),m="".concat(B.a.input," ").concat(c?B.a.errorInput:B.a.superInput," ").concat(o||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},M=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.onKeyPressHandler,u=e.setError,i=l?P.a.error:P.a.active;return r.a.createElement("div",{className:P.a.wrapper},r.a.createElement("div",{className:P.a.input},r.a.createElement(U,{error:l,value:a,onKeyPress:o,onChange:t,className:i,onBlur:function(){return u&&u("")}})),r.a.createElement(y,{className:P.a.button,onClick:n},"add"),r.a.createElement("span",{className:P.a.counter},"Users: ",c))},G=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(N.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(N.a)(i,2),m=s[0],p=s[1],_=function(){o?(t(o),u(""),alert("Hello  ".concat(o,"!"))):p("Name is require!")},E=a.length;return r.a.createElement(M,{name:o,setNameCallback:function(e){u(e.currentTarget.value.replace(/[^a-z\u0430-\u044f\u0451]/gi,"")),p("")},addUser:_,error:m,totalUsers:E,onKeyPressHandler:function(e){"Enter"===e.key&&_()},setError:p})},D=t(36);var K=function(){var e=Object(n.useState)([]),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Homeworks 3"),r.a.createElement(G,{users:t,addUserCallback:function(e){l([{_id:Object(D.a)(),name:e}].concat(Object(J.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},Y=t(18),q=t.n(Y),z=t(19),L=t.n(z),R=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=e.spanClassName,c=e.children,o=Object(O.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),u="".concat(L.a.checkbox," ").concat(n||""),i="".concat(L.a.spanClassName," ").concat(l||"");return r.a.createElement("label",{className:L.a.label},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:u},o)),c&&r.a.createElement("span",{className:i},c))};var X=function(){var e=Object(n.useState)(""),a=Object(N.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):(alert(t),l(""))},u=Object(n.useState)(!1),i=Object(N.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Homeworks 4"),r.a.createElement("div",{className:q.a.column},r.a.createElement(U,{value:t,onChangeText:l,onEnter:o,error:c,className:q.a.input}),r.a.createElement(U,{className:q.a.blue}),r.a.createElement(y,null,"default"),r.a.createElement(y,{red:!0,onClick:o},"delete "),r.a.createElement(y,{disabled:!0},"disabled"),r.a.createElement(R,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(R,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Z=t(37),Q=t(26),$=t.n(Q),V=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(O.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(N.a)(o,2),i=u[0],s=u[1],m=l||{},p=m.children,_=m.onDoubleClick,E=m.className,d=Object(O.a)(m,["children","onDoubleClick","className"]),f="".concat($.a.title," ").concat(E);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(U,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),_&&_(e)},className:f},d),p||c.value),r.a.createElement(Z.a,null)))};function ee(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ae(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}ee("test",{x:"A",y:1});ae("test",{x:"",y:0});var te=function(){var e=ae("editable-span-value",{text:""}),a=Object(n.useState)(e.text),t=Object(N.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Homeworks 6"),r.a.createElement("div",null,r.a.createElement(V,{value:l,onChangeText:c,spanProps:{children:l?void 0:"enter text..."}})),r.a.createElement(y,{onClick:function(){return ee("editable-span-value",{text:l})},style:{marginRight:"1rem"}},"save"),r.a.createElement(y,{onClick:function(){return c(e.text)}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(I,null),r.a.createElement(K,null),r.a.createElement(X,null),r.a.createElement(te,null))},re=t(21),le=t.n(re),ce=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=e.className,c=Object(O.a)(e,["options","onChange","onChangeOption","className"]),o=a?a.map((function(e,a){return r.a.createElement("option",{key:a,value:e,className:le.a.option},e)})):[],u=le.a.select+(l?" "+l:"");return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},c,{className:u}),o)},oe=t(22),ue=t.n(oe),ie=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.className,c=e.onChange,o=e.onChangeOption,u=Object(O.a)(e,["type","name","options","value","className","onChange","onChangeOption"]),i=function(e){c&&c(e),o&&o(e.currentTarget.value)},s=ue.a.super_radio+(l?" "+l:""),m=t?t.map((function(e,t){return r.a.createElement("label",{key:a+"-"+t,className:ue.a.radio_label},r.a.createElement("input",Object.assign({type:"radio",name:a,checked:n===e,value:e,onChange:i,className:s},u)),e)})):[];return r.a.createElement(r.a.Fragment,null,m)},se=["x","y","z"];var me=function(){var e=Object(n.useState)(se[1]),a=Object(N.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Homeworks 7"),r.a.createElement("div",null,r.a.createElement(ce,{options:se,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ie,{name:"radio",options:se,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},pe=t(23),_e=function(e,a){switch(a.type){case"sort":switch(a.payload){case"up":return Object(J.a)(e.map((function(e){return Object(pe.a)({},e)})).sort((function(e,a){return e.name<a.name?-1:1})));case"down":return Object(J.a)(e.map((function(e){return Object(pe.a)({},e)})).sort((function(e,a){return e.name>a.name?-1:1})))}case"check":return console.log(e),e.filter((function(e){return e.age>a.payload}));default:return e}},Ee=t(15),de=t.n(Ee),fe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(n.useState)(fe),a=Object(N.a)(e,2),t=a[0],l=a[1],c=t.map((function(e){return r.a.createElement("div",{key:e._id,className:de.a.item},r.a.createElement("div",{className:de.a.item_name},r.a.createElement("b",null,"Name:")," ",e.name),r.a.createElement("div",{className:de.a.item_age},r.a.createElement("b",null,"Age:")," ",e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("h2",null,"Homeworks 8"),r.a.createElement("div",{className:de.a.wrapper},c),r.a.createElement("div",null,r.a.createElement(y,{onClick:function(){return l(_e(fe,{type:"sort",payload:"up"}))}},"sort up")),r.a.createElement("div",null,r.a.createElement(y,{onClick:function(){return l(_e(fe,{type:"sort",payload:"down"}))}},"sort down")),r.a.createElement("div",null,r.a.createElement(y,{onClick:function(){return l(_e(fe,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ve=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Junior"),r.a.createElement(me,null),r.a.createElement(he,null))};var be=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Junior+"))},ge=t(16),Ne=t.n(ge);var ke=function(){return r.a.createElement("div",{className:Ne.a.error_container},r.a.createElement("div",{className:Ne.a.error_status},"404"),r.a.createElement("div",{className:Ne.a.error_text},"Page not found!"),r.a.createElement("div",{className:Ne.a.error_img},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},Ce="/pre-junior",Oe="/junior",xe="/junior-upper";var je=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",element:r.a.createElement(p.a,{to:Ce})}),r.a.createElement(p.b,{path:Ce,element:r.a.createElement(ne,null)}),r.a.createElement(p.b,{path:Oe,element:r.a.createElement(ve,null)}),r.a.createElement(p.b,{path:xe,element:r.a.createElement(be,null)}),r.a.createElement(p.b,{path:"/*",element:r.a.createElement(ke,null)})))},ye=function(){var e=function(e){return e.isActive?m.a.active:m.a.link};return r.a.createElement("div",{className:m.a.nav_container},r.a.createElement("nav",{className:m.a.nav_wrapper},r.a.createElement(i.b,{to:Ce,className:e},"PreJunior"),r.a.createElement(i.b,{to:Oe,className:e},"Junior"),r.a.createElement(i.b,{to:xe,className:e},"Junior+")))};var Se=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(ye,null),r.a.createElement(je,null)))};var we=function(){return r.a.createElement("div",{className:u.a.app},r.a.createElement("h1",{className:u.a.app_title},"React homeworks:"),r.a.createElement(Se,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[27,1,2]]]);
//# sourceMappingURL=main.e29759de.chunk.js.map