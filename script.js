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
        const heure = new Date(data.trip[0].date).getHours();
        if (data.result) {
          document.querySelector('#changePart').innerHTML = `
            <div class="divider4">
              <div class=trip>
                <p> ${data.trip[0].departure} > ${data.trip[0].arrival} </p>
                <p>${heure} </p>
                <p>${data.trip[0].price}&#8364</p>
                <button id="book">Book</button>
              </div>
            </div>         
          `
        } else {
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

/*document.querySelector('#search').addEventListener("click", function() {
    console.log('click ok');
  document.querySelector('#changePart').innerHTML = `
    <div class="divider3"></div>
              </div>
              <img class="notfound" src="/Users/irisclain/Desktop/lacapsule-fullstack/week4/tickethack/images/notfound.png"/>
              <p><HR ALIGN=CENTER WIDTH="220" color="#4ea891"></p>
              <p class="message">No trip found.</p>
    </div>
  `
<<<<<<< HEAD
});*/
=======
});
//
document.querySelector('#changePart').addEventListener("mouseover", function() {
    console.log('click ok');
  document.querySelector('#changePart').innerHTML = `
    <div class="divider4">
    <div class=trip>
    <p> a >  b </p>
    <p>heure </p>
    <p>prix </p>
    <button id="book">Book</button>
    </div>
    <div class=trip>
    <p> a >  b </p>
    <p>heure </p>
    <p>prix </p>
    <button id="book">Book</button>
    </div>
    </div>         
  `
});
>>>>>>> 481dbbe1c3dd2d7596458b56841b29a1c33a6f6a
