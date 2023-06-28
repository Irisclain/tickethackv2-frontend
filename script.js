

document.querySelector('#search').addEventListener("click", function() {
    console.log('click ok');
  document.querySelector('#changePart').innerHTML = `
    <div class="divider3"></div>
              </div>
              <img class="notfound" src="/Users/irisclain/Desktop/lacapsule-fullstack/week4/tickethack/images/notfound.png"/>
              <p><HR ALIGN=CENTER WIDTH="220" color="#4ea891"></p>
              <p class="message">No trip found.</p>
    </div>
  `
});

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