// if(document.readyState == "loading"){
//   document.addEventListener('DOMContentLoaded' , ready)
// }else{
//   ready();
// }

// book.html




function off_men() {
  document.getElementById("overlay_men").style.display = "none";
  document.getElementById("overlay_women").style.display = "block";
  document.getElementById("men").style.width = "80%";
  document.getElementById("women").style.width = "20%";
  document.getElementById("overlay_women").style.width = "20%";
  document.getElementById("overlay_women").style.left = "80%";
  document.getElementById("overlay_women").style.padding = "20% 0";
  // document.getElementsById("overlay_women .woman_logo").style.width = "10rem"
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

}



function off_women() {
  document.getElementById("overlay_women").style.display = "none";
  document.getElementById("overlay_men").style.display = "block";
  document.getElementById("women").style.width = "80%";
  document.getElementById("men").style.width = "20%";
  document.getElementById("overlay_men").style.width = "20%";
  document.getElementById("overlay_men").style.right = "80%";
  document.getElementById("overlay_men").style.padding = "20% 0";
}


// --------------------------------------------cart.html----------------------------------------------------


var changeCartItemNumber = $(".cart_item");
for (var i = 0; i < changeCartItemNumber.length; i++) {
  changeCartItemNumber[i].addEventListener("click", addItemToLocalStorage);

}

function onLoadCartNumber() {
  var previousItemsCount = parseInt(localStorage.getItem('cartItemNumbers'));
  if (previousItemsCount) {
    $(".cart span")[0].textContent = previousItemsCount;
  }
  else if(previousItemsCount === 0){
    $(".cart span")[0].textContent = previousItemsCount;
  }
}

function changeCartNumber() {
  var previousItemsCount = parseInt(localStorage.getItem('cartItemNumbers'));
  if (previousItemsCount) {
    localStorage.setItem('cartItemNumbers', previousItemsCount + 1)
    $(".cart span")[0].textContent = previousItemsCount + 1;
  } else {
    localStorage.setItem('cartItemNumbers', 1)
    $(".cart span")[0].textContent = 1;
  }
}




function addItemToLocalStorage(event) {
  var input = event.target;
  var parent = input.parentElement;
  var title = parent.getElementsByClassName("title")[0].innerText;
  var price = parent.getElementsByClassName("card-text")[0].innerText;

  var itemToList = {
    title_name: title,
    price_value: price
  }

  var cartItems = localStorage.getItem('itemList');
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[title] == undefined) {

      cartItems = {
        ...cartItems,
        [title]: itemToList
      }
      changeCartNumber()
    } else {
      alert("Item already exist in the cart")
    }
  } else {
    cartItems = {
      [title]: itemToList
    }
    changeCartNumber()
  }

  localStorage.setItem('itemList', JSON.stringify(cartItems));
  displayCart()


}


function displayCart() {
  var cartItems = localStorage.getItem("itemList");
  cartItems = JSON.parse(cartItems);
  var productContainer = document.querySelector(".products");
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product_item">
      <div class="product"><img class="cart_image" src="images/hair_cut.png" alt="Suresh Dasari Card">${item.title_name}</div>
      <div class="product_price">${item.price_value}</div>

      <div class="product_quantity">
        <input type="number" class="quant" value="1" min="1" style="width:48px; margin-right:2rem;">
        <button class="btn btn-danger remove_button">Remove</button>
       </div>

       <div class="product_total item_total">
        <span> ${item.price_value}</span>
       </div>
      </div>

      `
    })
  }
  quantityChangeFunction()
  removeButtonFunction()
  totalPrice()

}


// ----------------------updating price by updating quantity -----------------------

function quantityChangeFunction(){
  var quantityChanged = $(".quant");
  for (var i = 0; i < quantityChanged.length; i++) {

    quantityChanged[i].addEventListener('change', updateQuantity);
  }
}



// ------------------------------------------function removeButton ------------------------------------------------------

function removeButtonFunction(){
  var removeButtonClicked = $(".btn-danger")
  for (var i = 0; i < removeButtonClicked.length; i++) {
    removeButtonClicked[i].addEventListener("click", function(event) {

      event.target.parentElement.parentElement.remove();
      var key = event.target.parentElement.parentElement.getElementsByClassName("product")[0].innerText;


      var cartItems = localStorage.getItem('itemList');
      cartItems = JSON.parse(cartItems)
      delete cartItems[key];    //removing item from local storage
      localStorage.setItem('itemList', JSON.stringify(cartItems));  //pushing the updated cartItems list to local storage



  // --------------------------------------------Updating the cartItemNumber--------------------------------------------
      var cartItemNumber = localStorage.getItem('cartItemNumbers')
      cartItemNumber = parseInt(cartItemNumber) -1;

      localStorage.setItem('cartItemNumbers', JSON.stringify(cartItemNumber));
      onLoadCartNumber()
      totalPrice()
    })
  }


}


function updateQuantity(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }

  var parentInput = this.parentElement.parentElement
  var itemTotal = parentInput.getElementsByClassName("item_total")[0];
  var priceValue = parseFloat(parentInput.getElementsByClassName("product_price")[0].innerText.replace("Rs ", ""));
  var quantity = parentInput.getElementsByClassName("quant")[0].value;
  var total = 0;
  total = priceValue * quantity;
  itemTotal.innerText = "Rs " + total;
  totalPrice()

}

function totalPrice(){
  var totalPricePerItem = $(".item_total")
  var total_price = 0;
  for(var i=0; i<totalPricePerItem.length; i++){
      total_price += parseInt(totalPricePerItem[i].innerText.replace("Rs ", ""));
  }
  $(".total-price span")[0].innerText = "Rs "+ total_price;
}


displayCart()
onLoadCartNumber()
