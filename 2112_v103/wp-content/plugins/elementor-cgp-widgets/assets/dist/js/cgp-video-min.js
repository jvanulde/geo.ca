function makeVideoControls(e,t,o,n){const a=document.querySelector(".sec-cgp-video .elementor-container"),i=document.createElement("div"),c=document.createElement("div");i.setAttribute("id","cgp-video-controls"),i.className="elementor-container elementor-column-gap-wide cgp-video-controls",c.className="elementor-row cgp-video-controls-row",i.appendChild(c);const d=document.createElement("button");"pause"===n?(e.autoplay=!1,e.pause(),d.innerHTML=t):d.innerHTML=o,d.setAttribute("class","cgp-video-btn cgp-video-play-btn"),c.appendChild(d),a.after(i),makeVideoControlsActions(e,t,o)}function makeVideoControlsActions(e,t,o){const n=document.querySelector(".sec-cgp-video .cgp-video-play-btn");e.addEventListener("pause",(function(){const e=document.querySelector(".sec-cgp-video .cgp-video-play-btn");e.setAttribute("data-video-status","pause"),e.setAttribute("aria-label","Play video / Faire jouer le vidéo"),e.innerHTML=t})),e.addEventListener("play",(function(){const e=document.querySelector(".sec-cgp-video .cgp-video-play-btn");e.setAttribute("data-video-status","play"),e.setAttribute("aria-label","Pause video / Mettez la vidéo en pause"),e.innerHTML=o})),n.addEventListener("click",(function(t){return"pause"==n.getAttribute("data-video-status")?void e.play():void e.pause()}),!1)}document.addEventListener("DOMContentLoaded",(e=>{if(null===document.getElementsByTagName("html")[0])return;const t=document.querySelector(".sec-cgp-video .elementor-html5-video");null!==t&&makeVideoControls(t,'<i class="fas fa-play-circle"></i>','<i class="fas fa-pause-circle"></i>',"play")}));
//# sourceMappingURL=cgp-video-min.js.map