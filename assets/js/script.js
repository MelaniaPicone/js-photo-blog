// recupero del dom in cui inserire il risultato della chiamata ajax
const postCards = document.getElementById('postcard');

// chiamata ajax
axios.get(`https://lanciweb.github.io/demo/api/pictures/`).then ((resp) => {

// racchiudo il risultato in una variabile
const travelCards = resp.data;
 console.log(travelCards);

// ciclo for degli elementi che sono 6 da lettura con postman
for (let i=0; i<6 ; i++){

// modifica html interno con tag riferiti all'API e ai dati recuperati con postman
postCards.innerHTML += `
<div class="col-sm-12 col-md-6 col-lg-4 mt-4 mb-3">
<div class="card mx-auto p-2 border-shadow" style="width: 250px;">

  <img src="./assets/img/pin.svg" class="pin">
  <img src="${travelCards[i].url}" class="img img-fluid" alt="immagine">
  <div class="card-body">
  <div class="title"><p>${travelCards[i].title}</p></div>
  <div class="date"><p>${travelCards[i].date}</p></div>
  </div>
</div>
</div>
`
}
})