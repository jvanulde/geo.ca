function fixCgpApiSearchUrl(){let e=document.querySelectorAll(".cgp-custom-api-search-form");if(0!==e.length)for(let l of e)l.addEventListener("submit",(function(e){e.preventDefault();let t=l.getAttribute("action"),o=l.querySelector(".cgp-api-keyword-only"),r="en",n=l.querySelector(".cgp-api-lang");null!==n&&(r=n.value);let c,u="",a=l.querySelector(".cgp-api-theme");null!==a&&(u=a.value);let i=l.querySelector(".cgp-api-type");null!==i&&(c=i.value);let p=l.querySelector(".cgp-api-keyword").value,y=`${t}?lang=${r}&theme=${u}&keyword=${p}`;if(""===u&&(y=`${t}?lang=${r}&keyword=${p}`),null!==o){y+=`&keyword_only=${o.value}`}y=decodeURIComponent(y.replace(/\+/g," ")),window.location.href=y}))}
//# sourceMappingURL=cgp-api-sc-search-min.js.map