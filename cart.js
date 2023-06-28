
fetch(`http://localhost:3000/cart/trip`)
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.newTrip[0].trip[0].departure)
    if(data.result) {
        document.querySelector('#changePart').remove()
        for (let i = 0; i < data.newTrip.length; i++) {
            document.querySelector('#changePart').innerHTML += `<div>
            <div class="divider"></div>
          </div>
          <p class="message">No tickets in your cart.</p>
          <div class=trip>
                    <p> ${data.newTrip[i].trip[i].departure} > ${data.trip[i].arrival} </p>
                    <p>${heure} </p>
                    <p>${data.trip[i].price}&#8364</p>
                    <button id="book">Book</button>
                  </div>`
        }
       
    } else if(!data.result) {
        document.querySelector('#changePart').innerHTML = `<div class="connexionCard" id="cart">
        <div>
          <div class="divider"></div>
        </div>
        <p class="message">No tickets in your cart.</p>
        <p class="message">Why not plan a trip?</p>
    </div>`
    }
    
})


