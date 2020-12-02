// $(".book_now")[0].addEventListener('click', function(){
//   setTimeout(function(){window.location="book.html";}, 3000)
// })

// setTimeout(function(){window.location="book.html";}, 3000)



function plus_minus() {
  for (var i =0; i<$('.minus').length; i++){
    $('.minus')[i].addEventListener("click"  , function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      quantityChangeFunction();
      return false;

    });
    $('.minus')[i].addEventListener("tap"  , function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      quantityChangeFunction();
      return false;

    });
  }

  for (var i =0; i<$('.minus').length; i++){
    $('.plus')[i].addEventListener("click", function () {

      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();

      quantityChangeFunction();
      return false;


    });


    $('.plus')[i].addEventListener("tap", function () {

      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();

      quantityChangeFunction();
      return false;
    });
  }

}



// Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 var firebaseConfig = {
   apiKey: "AIzaSyAbwiGQ4qu1EDLDv6h112c-fP_rwfDxKW8",
   authDomain: "barbera-592f4.firebaseapp.com",
   databaseURL: "https://barbera-592f4.firebaseio.com",
   projectId: "barbera-592f4",
   storageBucket: "barbera-592f4.appspot.com",
   messagingSenderId: "799959754313",
   appId: "1:799959754313:web:1cc1a9405c320715680198",
   measurementId: "G-9XMDWD517K"
 };


 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var db = firebase.firestore();
 db.collection("Men\'s Salon").orderBy("index").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      var position = document.getElementById(doc.data().index);

      var title = position.querySelector(".title").innerText = doc.data().Service_title;
      var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
      var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
      var imgSrc = position.querySelector(".card-img").src = doc.data().icon


    });
});



db.collection("Women\'s Salon").orderBy("index").get().then((querySnapshot) => {
   querySnapshot.forEach((doc) => {

    if(doc.data().index !== 114){
      var position = document.getElementById(doc.data().index);

      var title = position.querySelector(".title").innerText = doc.data().Service_title;
      var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
      var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
      var imgSrc = position.querySelector(".card-img").src = doc.data().icon
    }



   });
});






function off_men() {
  document.getElementById("overlay_men").style.display = "none";
  document.getElementById("overlay_women").style.display = "block";
  document.getElementById("men").style.width = "80%";
  document.getElementById("women").style.width = "20%";
  document.getElementById("overlay_women").style.width = "20%";
  document.getElementById("overlay_women").style.left = "80%";
  document.getElementById("overlay_women").style.padding = "20% 0";
  // document.getElementsById("overlay_women .woman_logo").style.width = "10rem"
  $('#men .owl-carousel').owlCarousel({
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

  $('#women .owl-carousel').owlCarousel({
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







// --------------------------------------------cart.html----------------------------------------------------

function change_cart_item_number(){
var changeCartItemNumber = $(".cart_item");
for (var i = 0; i < changeCartItemNumber.length; i++) {
  changeCartItemNumber[i].addEventListener("click", addItemToLocalStorage);

}
}

function onLoadCartNumber() {
  var previousItemsCount = parseInt(localStorage.getItem('cartItemNumbers'));
  if (previousItemsCount > 0) {
    $(".cart span")[0].textContent = previousItemsCount;
  }
  else if(previousItemsCount <= 0){
    $(".cart span")[0].textContent = 0;
    localStorage.setItem('cartItemNumbers', 0);
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
  var imageLocation = parent.parentElement.getElementsByClassName("card-img")[0].src
  var title = parent.getElementsByClassName("title")[0].innerText;
  var price = parent.getElementsByClassName("card-text")[0].innerText;
  var quantity = 1;

  var itemToList = {
    image_location: imageLocation,
    title_name: title,
    price_value: price,
    quantity_value: quantity
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
        <td style="width:20%;">  <img  class="card-img" src=${item.image_location} alt="Suresh Dasari Card">
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
  plus_minus()

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
      var key = event.target.parentElement.parentElement.parentElement.getElementsByClassName("product_heading")[0].innerText;

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


  var quantityTotalTitle = parentInput.getElementsByClassName("product_heading")[0].innerText;
  var cartItems = localStorage.getItem('itemList');
  cartItems = JSON.parse(cartItems);
  cartItems[quantityTotalTitle].quantity_value = quantity;

localStorage.setItem('itemList', JSON.stringify(cartItems));


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




firebase.auth().languageCode = 'it';

function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  recaptchaVerifier.render();
}

render()

function phoneAuth(){
  var number ="+91 " + document.getElementsByClassName('MobileNumberVerificationInput')[0].value;
  var appVerifier = window.recaptchaVerifier;
  firebase.auth().signInWithPhoneNumber(number, appVerifier).then(function(confrimationResult){
    window.confrimationResult = confrimationResult;
    coderesult = confrimationResult;
    console.log(coderesult);
    alert("Message sent")
  }).catch(function(error){
    alert(error.message)
  })

}

function codeverify(){
  var code = document.getElementById('VerificationCode').value;
  coderesult.confirm(code).then(function(result){
    alert("successfully register")
    var user = result.user;
    console.log(user);
  }).catch(function(error){
    alert(error.message)
  })
}
