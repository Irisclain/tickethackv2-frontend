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
                <button id="book">Book</button>
              </div>
            </div>      
          `
          }
        } else if (!data.result){
          document.querySelector('#changePart').innerHTML = `
            <div class="divider3">
              </div>
                <img class="notfound" src="/Users/irisclain/Desktop/lacapsule-fullstack/week4/tickethack/images/notfound.png"/>
                <p><HR ALIGN=CENTER WIDTH="220" color="#4ea891"></p>
                <p class="message">No trip found.</p>
            </div>
          `
      }
    });    
  })
}
findTrip();
