(this["webpackJsonpwhatsapp-clonee"]=this["webpackJsonpwhatsapp-clonee"]||[]).push([[0],{177:function(e,t,c){},183:function(e,t,c){},184:function(e,t,c){},482:function(e,t,c){},483:function(e,t,c){},484:function(e,t,c){},485:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(38),o=c.n(s),i=(c(177),c(16)),r=(c(183),c(34)),d=c(505),l=c(501),j=c(499),m=c(500),b=c(502),h=c(503),u=(c(184),c(165)),O=c.n(u),p=c(49),f=Object(p.b)({name:"room",initialState:{roomName:null,roomId:null},reducers:{setRoomDetails:function(e,t){e.roomName=t.payload.roomName,e.roomId=t.payload.roomId}}}),x=f.actions.setRoomDetails,v=function(e){return e.room.roomName},g=function(e){return e.room.roomId},N=f.reducer,w=c(51),S=w.a.initializeApp({apiKey:"AIzaSyACW3RhQQOK9ipQ_MRkZwnu82C-W3quFS0",authDomain:"whatsapp-clone-89b3f.firebaseapp.com",projectId:"whatsapp-clone-89b3f",storageBucket:"whatsapp-clone-89b3f.appspot.com",messagingSenderId:"607745014138",appId:"1:607745014138:web:87de059387bc1341b83ec3",measurementId:"G-PPFBED9F0F"}).firestore(),y=w.a.auth(),C=new w.a.auth.GoogleAuthProvider,_=S,I=(c(188),Object(p.b)({name:"user",initialState:{user:[]},reducers:{LogIn:function(e,t){e.user=t.payload},LogOut:function(e){e.user=null}}})),L=I.actions,R=L.LogIn,k=L.LogOut,D=function(e){return e.user.user},E=I.reducer,F=c(5),U=function(){var e,t,c=Object(a.useState)([]),n=Object(r.a)(c,2),s=n[0],o=n[1],u=Object(i.c)(v),p=Object(i.c)(g),f=Object(a.useState)(""),x=Object(r.a)(f,2),N=x[0],S=x[1],y=Object(i.c)(D);Object(a.useEffect)((function(){p&&_.collection("rooms").doc(p).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){o(e.docs.map((function(e){return e.data()})))}))}),[p]),console.log(s);return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"chat",children:[Object(F.jsxs)("div",{className:"chat_header",children:[Object(F.jsxs)("div",{className:"chat_headerLeft",children:[Object(F.jsx)(d.a,{}),Object(F.jsxs)("div",{className:"chat_headerLeftInfo",children:[Object(F.jsx)("h2",{children:u}),Object(F.jsx)("p",{children:new Date(null===(e=s[0])||void 0===e||null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})]}),Object(F.jsxs)("div",{className:"chat_headerRight",children:[Object(F.jsx)(j.a,{}),Object(F.jsx)(m.a,{})]})]}),Object(F.jsx)("div",{className:"chat_body",children:s.map((function(e){var t;return console.log(e),Object(F.jsxs)("p",{className:"chat_message ".concat((null===y||void 0===y?void 0:y.email)===e.email&&"message_reciever"," "),children:[e.message,Object(F.jsx)("small",{children:new Date(null===(t=e.timestamp)||void 0===t?void 0:t.toDate()).toUTCString()})]})}))}),Object(F.jsxs)("div",{className:"chat_input",children:[Object(F.jsx)(O.a,{fontSize:"large"}),Object(F.jsxs)("form",{children:[Object(F.jsx)("input",{type:"text",value:N,onChange:function(e){return S(e.target.value)},placeholder:"Type a message.."}),Object(F.jsx)(l.a,{disabled:!N,onClick:function(e){e.preventDefault(),p&&_.collection("rooms").doc(p).collection("messages").add({message:N,displayName:y.displayName,timestamp:w.a.firestore.FieldValue.serverTimestamp(),email:y.email,photoURL:y.photoURL}),S("")},type:"submit",children:Object(F.jsx)(b.a,{disabled:!N,fontSize:"large",variant:"contained",color:"primary"})})]}),Object(F.jsx)(h.a,{})]})]})})},A=c(504),B=(c(482),function(){return Object(F.jsx)("div",{className:"login",children:Object(F.jsxs)("div",{className:"login_inner",children:[Object(F.jsx)("img",{src:"https://tse1.mm.bing.net/th?id=OIP.HT81DsS-pt0LE33O5F-_QwHaEK&pid=Api&P=0&w=290&h=164",alt:"logo image"}),Object(F.jsx)("h3",{children:"Sign in whatsapp"}),Object(F.jsx)(A.a,{onClick:function(){y.signInWithPopup(C).catch((function(e){return alert(e.message)}))},children:"Sign in with google"})]})})}),P=(c(483),c(166)),T=c.n(P),W=c(167),z=c.n(W),Q=(c(484),function(e){var t,c,n=e.addNewChat,s=e.id,o=e.content,l=(Object(i.c)(g),Object(a.useState)([])),j=Object(r.a)(l,2),m=j[0],b=j[1],h=Object(i.b)();Object(a.useEffect)((function(){_.collection("rooms").doc(s).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){b(e.docs.map((function(e){return e.data()})))}))}),[]);return n?Object(F.jsx)("div",{onClick:function(){var e=prompt("Enter Room Name:");e&&(console.log(e),_.collection("rooms").add({chatName:e}))},className:"sidebarChat addNewChat",children:Object(F.jsx)("h2",{children:"Add New Chat"})}):Object(F.jsxs)("div",{onClick:function(){s&&h(x({roomName:o,roomId:s}))},className:"sidebarChat",children:[Object(F.jsx)(d.a,{src:null===(t=m[0])||void 0===t?void 0:t.photoURL}),Object(F.jsxs)("div",{className:"sidebarChat_info",children:[Object(F.jsx)("h2",{children:o}),Object(F.jsx)("p",{children:null===(c=m[0])||void 0===c?void 0:c.message})]})]})});var K=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(i.c)(D),o=Object(i.b)();return Object(a.useEffect)((function(){_.collection("rooms").onSnapshot((function(e){n(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("div",{className:"sidebar",children:[Object(F.jsxs)("div",{className:"sidebar_header",children:[Object(F.jsx)(d.a,{onClick:function(){s&&o(k())},src:s.photoURL}),Object(F.jsxs)("div",{className:"sidebar_headerRight",children:[Object(F.jsx)(l.a,{children:Object(F.jsx)(T.a,{})}),Object(F.jsx)(l.a,{children:Object(F.jsx)(z.a,{})})]})]}),Object(F.jsxs)("div",{className:"sidebar_search",children:[Object(F.jsx)(j.a,{}),Object(F.jsx)("input",{placeholder:"Search or start new chat"})]}),Object(F.jsx)("hr",{}),Object(F.jsxs)("div",{className:"sidebarChat_body",children:[Object(F.jsx)(Q,{addNewChat:!0}),c.map((function(e){return Object(F.jsx)(Q,{id:e.id,content:e.data.chatName},e.id)}))]})]})})};var G=function(){var e=Object(i.b)(),t=Object(i.c)(D);return console.log(t),Object(a.useEffect)((function(){y.onAuthStateChanged((function(t){e(R({displayName:t.displayName,email:t.email,photoURL:t.photoURL}))}))}),[]),Object(F.jsx)(F.Fragment,{children:t?Object(F.jsx)("div",{className:"app",children:Object(F.jsxs)("div",{className:"app_body",children:[Object(F.jsx)(K,{}),Object(F.jsx)(U,{})]})}):Object(F.jsx)(B,{})})},H=Object(p.a)({reducer:{user:E,room:N}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(F.jsx)(n.a.StrictMode,{children:Object(F.jsx)(i.a,{store:H,children:Object(F.jsx)(G,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[485,1,2]]]);
//# sourceMappingURL=main.1817e6dd.chunk.js.map