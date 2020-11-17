$(document).ready(function() {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      quantityChangeFunction();
      return false;

    });
    $('.plus').click(function () {

      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();

      quantityChangeFunction();
      return false;


    });
  });


// // Your web app's Firebase configuration
//  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  var firebaseConfig = {
//    apiKey: "AIzaSyAbwiGQ4qu1EDLDv6h112c-fP_rwfDxKW8",
//    authDomain: "barbera-592f4.firebaseapp.com",
//    databaseURL: "https://barbera-592f4.firebaseio.com",
//    projectId: "barbera-592f4",
//    storageBucket: "barbera-592f4.appspot.com",
//    messagingSenderId: "799959754313",
//    appId: "1:799959754313:web:1cc1a9405c320715680198",
//    measurementId: "G-9XMDWD517K"
//  };
//  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
//
// var database = firebase.database();
//  var ref = database.ref("")
// ref.on('value' , gotData)
//
// function gotData(data){
//   console.log(data);
// }



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
    margin:10,
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

  var productContainer = document.querySelector("table");
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `

      <tr>
        <td style="width:20%;">  <img class="card-img" src="images/hair_cut.png" alt="Suresh Dasari Card">
           </td>
        <td class="table_content"> <h5 class="product_heading">${item.title_name}</h5>
        <h5 class="procuct_price">${item.price_value}</h5>


        <span class="minus ">-</span>
        <input type="number" value="1" class="quant"/>
        <span class="plus">+</span>

        <button class="btn btn-danger remove_button"> <span>Remove</span> </button>
       </td>
       <td class="item_total_price"><h5 class="item_total">${item.price_value}</h5> </td>

      </tr>

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

    updateQuantity(quantityChanged[i]);
  }
}



// ------------------------------------------function removeButton ------------------------------------------------------

function removeButtonFunction(){
  var removeButtonClicked = $(".btn-danger")
  for (var i = 0; i < removeButtonClicked.length; i++) {
    removeButtonClicked[i].addEventListener("click", function(event) {

      event.target.parentElement.parentElement.parentElement.remove();
      var key = event.target.parentElement.parentElement.parentElement.getElementsByClassName("product_heading")[0];

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


function updateQuantity(input) {



  var parentInput = input.parentElement.parentElement
  var itemTotal = parentInput.getElementsByClassName("item_total")[0];

  var priceValue = parseFloat(parentInput.getElementsByClassName("procuct_price")[0].innerText.replace("Rs ", ""));

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
