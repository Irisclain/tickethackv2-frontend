function findTrip() {
  document.querySelector('#search').addEventListener('click', function () {
    console.log('clik ok');
    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;
    const date = document.querySelector('#date').value;
    fetch(`http://localhost:3000/${departure}/${arrival}/${date}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.result) {
          document.querySelector('#changePart').innerHTML ='<div id="scroll"></div>';
          for(let i=0; i< data.trip.length; i++){
            let heure = new Date(data.trip[i].date);
            heure = moment(heure).format('h:mm');
          document.querySelector('#scroll').innerHTML += ` 
          <div class="divider4">
            </div>
              <div class=trip>
                <p> ${data.trip[i].departure} > ${data.trip[i].arrival} </p>
                <p>${heure} </p>
                <p>${data.trip[i].price}&#8364</p>
                <a href="./cart.html"><button class="book" id="${data.trip[i]._id}">Book</button></a>
              </div>
            </div>     
            <div class="space">
            </div> 
          `
          addTriptoCart()
          }
        } else if (!data.result){
          document.querySelector('#changePart').innerHTML = `
            <div class="divider3">
              </div>
                <img class="notfound" src="./images/notfound.png"/>
                <p><HR ALIGN=CENTER WIDTH="220" color="#4ea891"></p>
                <p class="message">No trip found.</p>
            </div>
          `
      }
    });    
  })
}
function addTriptoCart() {
  for (let i = 0; i < document.querySelectorAll('.book').length;i++){
    document.querySelectorAll('.book')[i].addEventListener('click',function() {
      console.log('clickdetected')
      const id = this.id
      fetch(`http://localhost:3000/cart/newTrip`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({id})
      })
    })
  }
  
}
findTrip()
addTriptoCart();


