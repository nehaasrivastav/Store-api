
const cont = document.querySelector('.container')
function fetchApiData() {
    const url = 'https://fakestoreapi.com/products'
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            createCards(data)
        })
}


fetchApiData();

function createCards(data) {
    data.forEach((value) => {
        const div = document.createElement('div')
        div.classList.add('card')

        const img = document.createElement('img')
        img.src = value.image

        const heading = document.createElement('h3')
        heading.innerHTML = value.title

        const price = document.createElement('p')
        price.innerHTML = `Price:  ${value.price}`


        const rate = document.createElement('p')
        rate.innerHTML = `Rating:  ${value.rating.rate}`

        const button = document.createElement('button')
        button.innerHTML = ("Add to cart")

        const icon = document.createElement('div')
        icon.classList.add('heart-icon')



        div.appendChild(img);
        div.appendChild(heading);
        div.appendChild(price);
        div.appendChild(rate);
        div.appendChild(button);
        div.appendChild(icon);
        cont.appendChild(div);
    })
}
