
fetch(`http://localhost:3000/cart/trip`)
.then(response => response.json())
.then(data => {
    console.log(data)
    console.log(data.newTrip[0].trip[0].departure)
    if(data.result) {
        document.querySelector('.connexionCard').innerHTML = `<div class="divider">
        </div>
        <p class="title">My bookings</p>`
        for (let i = 0; i < data.newTrip.length; i++) {
            for (let n = 0; n < data.newTrip[i].trip.length; n++) {
            let heure = new Date(data.newTrip[i].trip[n].date);
            heure = moment(heure).format('h:mm');
            let timetoDeparture =
            document.querySelector('.connexionCard').innerHTML += `
            <div class="divider4">
                </div>
                <div class=trip>
                    <p> ${data.newTrip[n].trip[n].departure} > ${data.newTrip[i].trip[n].arrival}</p>
                    <p></p>
                    <p>${data.newTrip[n].trip[n].price}&#8364</p>
                    <p>${heure}</p>
                </div>
                `
                }}
                document.querySelector('.connexionCard').innerHTML+=`<p><HR ALIGN=CENTER WIDTH="170" color="black"></p>
                <p class="thanks">Enjoy your travel with Tickethacks!</p>
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


