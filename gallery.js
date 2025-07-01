import"./assets/styles-CeI2wy5p.js";import{S as i,i as a}from"./assets/vendor-BrddEoy-.js";const c="51131580-71d1bfd62f4d437a89cc3b2bc",l="https://pixabay.com/api/";function m(e){const o=`${l}?key=${c}&q=${encodeURIComponent(e)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()}).then(r=>{if(r.hits.length===0)throw new Error("No images found");return r.hits}).catch(r=>{throw console.error("Error fetching images:",r),r})}const f=document.querySelector(".search-form"),t=document.querySelector(".gallery-list"),s=document.querySelector("#loader"),h=new i(".gallery a");f.addEventListener("submit",async e=>{e.preventDefault();const o=e.target.elements.searchQuery.value.trim();if(t.innerHTML="",!!o){t.innerHTML="",s.classList.remove("hidden");try{const r=await m(o);if(!o)a.info({title:"No images found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ffff",messageColor:"#fff",progressBarColor:"#B51B1B"});else{const n=r.map(g).join("");t.innerHTML=n,h.refresh()}}catch{a.error({title:"No images found",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#fff",progressBarColor:"#B51B1B",timeout:3e3})}finally{s.classList.add("hidden")}}});function g(e){return`
  <li class="image-card">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
        <div class="info">
          <p><b>Likes</b> ${e.likes}</p>
          <p><b>Views</b> ${e.views}</p>
          <p><b>Comments</b> ${e.comments}</p>
          <p><b>Downloads</b> ${e.downloads}</p>
        </div>
      </a>
      </li>
    `}
//# sourceMappingURL=gallery.js.map
