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
     // show 
     const productContainer = document.getElementById('product-container')
     if(products.length >0){
       products.forEach(product =>{
       const productCard = document.createElement('div')
       productCard.setAttribute('id',product.SKU)
       productCard.innerHTML=`
       
       
        <div class="border bg-slate-200 flex flex-col gap-4 rounded-lg border-slate-300 shadow shadow-black overflow-hidden  min-h-[400px]">
       
          <img src=${product.imageURL} class="aspect-square object-cover h-[150px] md:h-[200px]" >
         <h2 class="font-semibold  text-center ">${product.productName}</h2>
         <div class="flex mx-auto px-4 flex-col ">
           <div class="flex gap-1">
             <span class="text-neutral-600 font-semibold ">Brand: </span>
             <span>${product.brand}</span>
           </div>
       
           <div class="flex gap-1">
             <span class="text-neutral-600 font-semibold ">Stock:</span>
             <span id='product-stock'>${product.stockquantity}</span>
           </div>
         </div>
         
         <div class="">
           <p id="price" class="text-xl font-semibold text-rose-600 text-center">$${product.price.toLocaleString('en',{
             currency:'usd',
             maximumFractionDigits:2,
             minimumFractionDigits:2
           })}</p>
         </div>
         <button 
     
         id='add-to-cart-btn'
         class="bg-neutral-600 p-2 rounded text-white text-center w-[70%]  mx-auto mb-4 ">Add to cart</button>
       
       
        
       </div> 
     
       
       `
       productContainer.appendChild(productCard)
     })
     }
});
