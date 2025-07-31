import{a as f,S as m,i as c}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g="51566041-17ae6664d6c49a5767f7403ab",y="https://pixabay.com/api/";async function h(o){try{return(await f.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}})).data}catch(r){throw console.error("Error fetching images:",r),r}}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(o){const r=o.map(({webformatURL:a,largeImageURL:s,tags:e,likes:t,views:i,comments:p,downloads:d})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img src="${a}" alt="${e}" loading="lazy" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${t}</p>
            <p><b>Views:</b> ${i}</p>
            <p><b>Comments:</b> ${p}</p>
            <p><b>Downloads:</b> ${d}</p>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",r),b.refresh()}function v(){l.innerHTML=""}function w(){u.classList.add("visible")}function S(){u.classList.remove("visible")}const q=document.querySelector(".form");q.addEventListener("submit",async o=>{o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){c.warning({message:"Please enter a search term.",position:"topRight"});return}v(),w();try{const a=await h(r),{hits:s}=a;s.length===0?c.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(s)}catch{c.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}});const n=document.querySelector(".input");n.addEventListener("input",()=>{n.value.trim()!==""?n.classList.add("has-text"):n.classList.remove("has-text")});
//# sourceMappingURL=index.js.map
