window.addEventListener('DOMContentLoaded', () => {
     // Card button add and colose
     const troly = document.querySelector(".fa-cart-shopping");
     const close = document.querySelector(".fa-circle-xmark");
     const csrdItem = document.querySelector(".addCard");

     troly.addEventListener("click", () => {
          csrdItem.classList.add('cardActive');
     })
     close.addEventListener("click", () => {
          csrdItem.classList.remove('cardActive');
     })

     // Products dispaly
     let arrProducts = [
          {
               id: 1,
               titel: "Lorem ipsum",
               des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, at!",
               image: "cover-1.jpg",
               price: 250.
          },
          {
               id: 2,
               titel: "Lorem ipsum",
               des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, at!",
               image: "cover-2.png",
               price: 250.
          },
          {
               id: 3,
               titel: "Lorem ipsum",
               des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, at!",
               image: "cover-3.png",
               price: 250.
          },
          {
               id: 4,
               titel: "Lorem ipsum",
               des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, at!",
               image: "Cover-4.jpg",
               price: 250.
          },
          {
               id: 5,
               titel: "Lorem ipsum",
               des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, at!",
               image: "covver-5.png",
               price: 250.
          },
          {
               id: 6,
               titel: "Lorem ipsum",
               des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, at!",
               image: "cover-6.jpg",
               price: 250.
          },
          {
               id: 7,
               titel: "Lorem ipsum",
               des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, at!",
               image: "cover-7.jpeg",
               price: 250.
          },
          {
               id: 8,
               titel: "Lorem ipsum",
               des: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, at!",
               image: "cover-8.jpg",
               price: 250.
          },
     ];
     let cardList = [];
     const productsContainer = document.querySelector('.flex-box');
     if (arrProducts.length > 0) {
          arrProducts.forEach(product => {
               // console.log(product);
               const productsCard = document.createElement('div');
               productsCard.setAttribute("id", product.id);
               productCard.innerHTML = `
               <div class="card text-left">
                    <img src=${product.image}>
                    <div class="cardContent">
                         <h2>${product.titel} </h2>
                         <p>${product.des}</p>
                         <p class="price">$${product.price}</p>
                    </div>
                <i class="fa-solid fa-arrow-right arrow"></i>
               </div>
                `
                productsContainer.appendChild(productCard);
          })
     }
});

