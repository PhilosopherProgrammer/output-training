(()=>{"use strict";const e=function(){return(0,React.createElement)("button",{onClick:function(){return console.log("Like")}},"Like")},t=function(){return React.createElement,React.createElement("button",{onClick:function(){return console.log("JSX!!")}},"Like By JSX")};var n=document.getElementById("root"),c=React.createElement("div",null,React.createElement(e,null),React.createElement(t,null));ReactDOM.render(c,n)})();