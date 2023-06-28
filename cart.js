
fetch(`http://localhost:3000/cart/trip`)
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.newTrip[0].trip[0].departure)
    if(data.result) {
        document.querySelector('.connexionCard').innerHTML = `<div class="divider">
        </div>
        <p class="title">My cart</p>`
        let sum = 0
        for (let i = 0; i < data.newTrip.length; i++) {
            for (let n = 0; n < data.newTrip[i].trip.length; n++) {
            let heure = new Date(data.newTrip[i].trip[n].date);
            heure = moment(heure).format('h:mm');
            
            document.querySelector('.connexionCard').innerHTML += `
            <div class="divider4">
                </div>
                <div class=trip>
                    <p> ${data.newTrip[n].trip[n].departure} > ${data.newTrip[i].trip[n].arrival}</p>
                    <p>${heure}</p>
                    <p>${data.newTrip[n].trip[n].price}&#8364</p>
                    
                    <button id="delete">X</button>
                </div>
                `
                sum+= data.newTrip[n].trip[n].price
                }}
                document.querySelector('.connexionCard').innerHTML+=`<p><HR ALIGN=CENTER WIDTH="170" color="black"></p>
                <div id="totalContainer"><p id="total">Total : ${sum}&#8364</p>
                <a href="./bookings.html" id="linkButton"><button type="button" id="purchase">Purchase</button></a>
                </div>
                </div>
                </div>`
       
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


function deleteCart() {
    
}