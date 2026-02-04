(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();const l=document.getElementById("yesBtn"),s=document.getElementById("noBtn"),m=document.getElementById("reminder"),d=document.getElementById("card"),u=document.getElementById("successContent");let c=0;s.addEventListener("click",()=>{c++,m.classList.remove("hidden");const o=1+c*.15;if(l.style.transform=`scale(${o})`,c>2){const t=Math.random()*(window.innerWidth-100),r=Math.random()*(window.innerHeight-50);s.style.position="fixed",s.style.left=`${t}px`,s.style.top=`${r}px`}d.classList.add("shake"),setTimeout(()=>d.classList.remove("shake"),500)});l.addEventListener("click",()=>{d.classList.add("hidden"),u.classList.remove("hidden"),y()});function y(){for(let o=0;o<50;o++){const t=document.createElement("div");t.className="confetti",t.style.left=Math.random()*100+"vw",t.style.backgroundColor=["#ff4d6d","#ff758f","#ffb3c1","#ffffff"][Math.floor(Math.random()*4)],t.style.animationDuration=Math.random()*3+2+"s",t.style.opacity=Math.random(),document.body.appendChild(t),setTimeout(()=>t.remove(),5e3)}}const f=document.createElement("style");f.textContent=`
    .confetti {
        position: fixed;
        width: 10px;
        height: 10px;
        top: -10px;
        z-index: 1000;
        animation: fall linear forwards;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
    
    .shake {
        animation: shake 0.5s ease-in-out;
    }
`;document.head.appendChild(f);
