(()=>{"use strict";var e={370:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},14:(e,t,n)=>{e.exports=n.p+"assets/icons/help_icon.svg"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,n),c.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(370),t=n.n(e),r=new URL(n(14),n.b);t()(r);function o(){var e=0,t=0,n=10,r=[];function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"finish";"start"===e?(document.querySelector("#play").remove(),document.querySelector("div.game_bottom").innerHTML='\n                    <div class="game_input">\n                        <input type="text" autofocus autocomplete="off">\n                        <button class="play_button" >проверить</button>\n                      </div>',document.querySelector("button.play_button").addEventListener("click",a)):(document.querySelector("div.game_bottom").innerHTML='\n                                        <button id="play" class="play_button">\n                                        <span>играть</span></button>',document.querySelector("#play").addEventListener("click",o))}function a(){var o,a,u=(o="input[type=text]",document.querySelector(o).value.split(""));(u=function(e){if(4==e.length){for(var t=[],n=0;n<4;n++){if(""==e[n]||" "==e[n]||isNaN(e[n]))return!1;if(t.includes(+e[n]))return!1;t.push(+e[n])}return t}return!1}(u))?(document.querySelector("input[type=text]").value="",n--,function(n,r){t=0,e=0,n.forEach((function(o){r.includes(o)&&(r.indexOf(o)===n.indexOf(o)?t+=1:e+=1)}))}(u,r),function(e,t,n,r){var o=document.querySelector("div.game_table"),c=document.createElement("div");c.classList.add("game_raw"),c.innerHTML='<div class="raw_col">\n                        <span>'.concat(r+1,'</span>\n                    </div>\n                    <div class="raw_col">\n                        <span>').concat(e.join(""),'</span>\n                    </div>\n                    <div class="raw_col">\n                        <img src="assets/icons/cow.svg" alt="cow.swg">\n                        <span>').concat(t,'</span>\n                    </div>\n                    <div class="raw_col">\n                        <img src="assets/icons/bull.svg" alt="bull.swg">\n                        <span>').concat(n,"</span>\n                    </div>"),o.append(c)}(u,e,t,n),0!=n&&4!=t||(c(),i(4==t?"win":"loose"))):((a=document.querySelector("input[type=text]")).classList.add("error"),setTimeout((function(){a.classList.remove("error"),a.value=""}),1e3))}function i(e){var t=document.createElement("div");if(t.classList.add("result"),"win"==e){var r=10-n,o="ход";r>1&&r<5&&(o+="а"),r>=5&&(o+="ов"),t.innerHTML="<p>ПОБЕДА! За ".concat(r," ").concat(o,"</p>")}else t.innerHTML="<p>LOOOOOOSEEEER</p>";document.querySelector("div.game_container").prepend(t)}(function(){document.querySelector("div.game_table").innerHTML="";var e=document.querySelector("div.result");e&&e.remove()})(),r=function(){for(var e=[];e.length<4;){var t=Math.floor(10*Math.random());e.includes(t)||e.push(t)}return e}(),c("start")}window.addEventListener("DOMContentLoaded",(function(){document.querySelector("#help").addEventListener("click",(function(){document.querySelector(".popup").style.display="block"})),document.querySelector(".popup").addEventListener("click",(function(e){console.log(e.target),document.querySelector(".popup").style.display=""})),document.querySelector("#play").addEventListener("click",o)}))})()})();