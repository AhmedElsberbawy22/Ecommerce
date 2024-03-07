let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    searchItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchItem.classList.remove('active');
}

let searchItem = document.querySelector('.search-items-container');
document.querySelector('#inner-search-btn').onclick = () =>{
    searchItem.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    searchItem.classList.remove('active');
}


const products = [
    {
        id: 1,
        name: "Pure Super",
        price: 75,
        image: "../images/menu-1.jpg",
    },
    {
        id: 2,
        name: "Arabic Coffee",
        price: 214,
        image: "../images/menu-2.png",
    },
    {
        id: 3,
        name: "French Coffee",
        price: 175,
        image: "../images/menu-3.png",
    },
    {
        id: 4,
        name: "Green Coffee",
        price: 213,
        image: "../images/menu-4.png",
    },
    {
        id: 5,
        name: "Espresso",
        price: 94,
        image: "../images/menu-5.png",
    },
    {
        id: 6,
        name: "Hot Chocolate Classic",
        price: 175,
        image: "../images/menu-6.png",
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('inner-search-btn');
    const searchBox = document.getElementById('search-box');
    const searchItemsContainer = document.querySelector('.search-items-container');

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchBox.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
        displayProducts(filteredProducts);
    });

    function displayProducts(products) {
        searchItemsContainer.innerHTML = '';

        products.forEach(product => {
            const item = document.createElement('div');
            item.classList.add('search-item');
            item.innerHTML = `
                <img src="${product.image}" alt="">
                <div class="content">
                    <h3>${product.name}</h3>
                    <div class="price">${product.price} EGP</div>
                </div>
            `;
            searchItemsContainer.appendChild(item);
        });
    }
});