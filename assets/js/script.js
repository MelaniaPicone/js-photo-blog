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
<div class="col-sm-12 col-md-6 col-lg-4 mt-4 mb-3 ">
<div class="card p-1 border-shadow" style="width: 16rem;">
  <img src="${travelCards[i].url}" class="img img-fluid" alt="immagine">
  <div class="card-body" style="height:110px;"">
  <div class="id"><h5>${travelCards[i].id}</h5></div>
  <div class="title"><h5>${travelCards[i].title}</h5></div>
  <div class="date"><h6>${travelCards[i].date}</h6></div>
  
  </div>
</div>
</div>
`
}
})