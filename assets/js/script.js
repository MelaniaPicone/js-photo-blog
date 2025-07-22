// recupero degli elementi nel dom da usare nel js
const postCards = document.getElementById('postcard');
const overLay = document.getElementById('overlay');
const button = document.getElementById('btn');
const openPhoto = document.getElementById('openPhoto');

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
<div class="card mt-4 mx-auto p-2 border-shadow" style="width: 250px;">

  <img src="./assets/img/pin.svg" class="pin">
  <img src="${travelCards[i].url}" class="img img-fluid card-img" alt="immagine">
  <div class="card-body">
  <div class="date mt-2"><p>${travelCards[i].date}</p></div>
  <div class="title"><span>${travelCards[i].title}</span></div>
  
  </div>
</div>
</div>
`
}


// ad ogni immagine è associata la sua apertura in overlay
  const allCardImg = document.querySelectorAll('.card-img');

  allCardImg.forEach((e) => {
    e.addEventListener('click', () => {
      openPhoto.src = allCardImg.src;
    });
  });

  // al clic su ogni card si apre l'overlay
postCards.addEventListener("click", (e) => {
overLay.classList.remove('d-none');
}
)

// al click sul button l'overlay torna in d-none
button.addEventListener("click", (e) => {
overLay.classList.add('d-none');
})


  });