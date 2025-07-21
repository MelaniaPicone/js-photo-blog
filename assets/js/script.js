// recupero del dom in cui inserire il risultato della chiamata ajax
const postCards = document.getElementById('postcard');

// chiamata ajax
axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then ((resp) => {

// racchiudo il risultato in una variabile
const travelCards = resp.data;
 console.log(travelCards);

// ciclo for degli elementi
for (let i=0; i<6 ; i++){

postCards.innerHTML += `

<div class="col-sm-12 col-md-6 col-lg-4 mt-2 mb-2">
<div class="card p-4" style="width: 18rem;">
  <img src="${travelCards[i].img}" class="img" alt="...">
  <div class="card-body">
  <div class="id"><h2>${travelCards[i].id}</h2></div>
  <div class="title"><h5>${travelCards[i].title}</h5></div>
  <div class="date"><h6>${travelCards[i].date}</h6></div>
  
  </div>
</div>
</div>


`


}



})