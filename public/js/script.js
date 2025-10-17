const cartSubmit = document.querySelectorAll('.cart-btn');
const quanBtn = document.querySelectorAll('.quantity-content');
const imageCard = document.querySelectorAll('.product-image');
const imgCard = document.querySelectorAll('.product-image-tablet');
const cardImage = document.querySelectorAll('.product-image-desktop')
const insertBtn = document.querySelectorAll('.increase-btn');
const deleteBtn = document.querySelectorAll('.decrease-btn');
const imageCart = document.querySelector('.cart-placeholder-content');

const cartItems = [ 
  {
     "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },]


// this function sends the item to the cart
function addItemToCart(index) {
  const output = document.querySelectorAll('#output')[index];
  const result = Number(output.innerText) + 1;
  
  if (result > 10) {
    result = 0
  }

  output.innerText = result
  const addProduct = document.querySelector('.cart-section');


  if (insertBtn === 'block') {
    imageCart.style.display = 'none'
  } else {
    imageCart.style.display ='block'
  }

  imageCart.style.display = 'none'
  quanBtn[index].style.display = 'block'
  imageCard[index].style.border = '2px solid #C73B0F'
  imgCard[index].style.border = '3px solid #C73B0F'
  cardImage[index].style.border = '3px solid #C73B0F'

}



// this function removes an item from the cart
function removeItemFromCart(index) {
  const output = document.querySelectorAll('#output')[index];
  const removeProduct = document.querySelector('.cart-section')
  const result = Number(output.innerText) - 1;

  if (result < 0) {
    result = 0;
  }

  output.innerText = result

  if (result === 0) {
    quanBtn[index].style.display = 'none'
    imageCard[index].style.border = 'none'
    imgCard[index].style.border = 'none'
    cardImage[index].style.border = 'none'
  }
}



// this eventlistener is for the cart button
cartSubmit.forEach(function(button, index){
  button.addEventListener('click', function(){
    addItemToCart(index)
  })
})


// this eventlistener is for when the quantity button is clicked
insertBtn.forEach(function(add, index){
  add.addEventListener('click', function(){
    addItemToCart(index)
  })
})


// this eventlistener is for when the quantity button is clicked
deleteBtn.forEach(function(del, index){
  del.addEventListener('click', function(){
    removeItemFromCart(index)
  })
})


