const main = document.querySelector('main');
let sortMethod = true
 let animes = [];
async function fetchAnimes (){
        await fetch (`https://api.jikan.moe/v4/anime?q=${searchInput.value}`)
        .then((res) => res.json())
        .then((data) => 
        {animes = data.data;
          console.log(animes);
          displayAnimes();
        }
          );
       
 };

 const displayAnimes = () => {
        
  main.innerHTML = "";
   animes
   .sort((a, b) =>  sortMethod ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title))
   .slice(0, rangeInput.value)
   .map((d)=>{

     main.innerHTML += `
     <div class="card-container">
     <div class="card">
     <span class="name">${d.title}</span>
     <img src="${d.images.jpg.image_url}" alt="Anima" />
     <div class="description">
     ${d.synopsis}
     </div>
     <h2>source:${d.score}<h2>
     <a href="${d.trailer.url}">Watch Tailer</a>
     </div>
     </div>`
    })
};
searchInput.addEventListener('input' ,(e) =>{
  fetchAnimes();
  alert('ok');
});

rangeInput.addEventListener('input',(e) => {
  rangeDisplay.textContent = rangeInput.value
  displayAnimes();
});
 tri.addEventListener('click', (e) => {
 sortMethod = !sortMethod;
   const textTri = tri.textContent;
   if (textTri == 'Ascendant') e.target.textContent = 'Descendant';
     else  e.target.textContent = 'Ascendant';
     displayAnimes();
    });


fetchAnimes();


 

