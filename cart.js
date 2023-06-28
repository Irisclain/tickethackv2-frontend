
fetch(`http://localhost:3000/cart/trip`)
.then(response => response.json())
.then(data => {
    console.log(data)
})

document.querySelector('#connexionCard').innerHTML = `
`