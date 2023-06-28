document.querySelector('.connexionCard').addEventListener('mouseover', function(){
fetch(`http://localhost:3000/cart/booked`)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    for(let i=0; i< data.trip.length; i++){
        let heure = new Date(data.trip[i].date);
        heure = moment(heure).format('h:mm');
    document.querySelector('.connexionCard').innerHTML = `
        <div class="divider">
            </div>
            <p class="title">My bookings</p>
            <div class="divider4">
                </div>
                <div class=trip>
                    <p> ${data.trip[i].departure} > ${data.trip[i].arrival} </p>
                    <p>${heure} </p>
                    <p>${data.trip[i].price}&#8364</p>
                    <p>Departure in ...</p>
                </div>
                <p><HR ALIGN=CENTER WIDTH="170" color="black"></p>
                <p class="thanks">Enjoy your travel with Tickethacks!</p>
                </div>
        </div>
    `
}
});
});