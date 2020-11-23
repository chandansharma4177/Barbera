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

var trendingInMenContainer = [4, 5, 7, 10, 12, 16, 22]

var shavingContainer = [8, 9];

var facialAndFaceCleanupContainer = [17, 18, 19, 20, 21]

var offersContainer = [23, 24, 25]

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var db = firebase.firestore();
 db.collection("Men\'s Salon").orderBy("index").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

        for (var i=0; i<trendingInMenContainer.length; i++){

          if(doc.data().index === trendingInMenContainer[i]){

            var position = document.getElementById(trendingInMenContainer[i]);

            var title = position.querySelector(".title").innerText = doc.data().Service_title;
            var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
            var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
            var imgSrc = position.querySelector(".card-img").src = doc.data().icon
          }
        }



      for (var i=0; i<shavingContainer.length; i++){
        if(doc.data().index === shavingContainer[i]){
          var position = document.getElementById(shavingContainer[i]);

            var title = position.querySelector(".title").innerText = doc.data().Service_title;
            var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
            var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
            var imgSrc = position.querySelector(".card-img").src = doc.data().icon
        }
      }

      for (var i=0; i<facialAndFaceCleanupContainer.length; i++){
        if(doc.data().index === facialAndFaceCleanupContainer[i]){
          var position = document.getElementById(facialAndFaceCleanupContainer[i]);

            var title = position.querySelector(".title").innerText = doc.data().Service_title;
            var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
            var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
            var imgSrc = position.querySelector(".card-img").src = doc.data().icon
        }
      }

      for (var i=0; i<offersContainer.length; i++){
        if(doc.data().index === offersContainer[i]){
          var position = document.getElementById(offersContainer[i]);

            var title = position.querySelector(".title").innerText = doc.data().Service_title;
            var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
            var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                        var imgSrc = position.querySelector(".card-img").src = doc.data().icon
        }
      }

    });
});

var trendingInWomenList = [34, 35, 38, 39, 44, 43, 42, 47, 51, 56, 76, 79, 83, 87, 104, 108]

var hairStylingList = [36, 37, 38, 45, 46, 47, 48, 49, 50, 40, 41]

var threadingList = [51, 52, 53, 54, 55]

var normalWaxingList = [56, 57, 58, 59, 60, 61, 62]

var milkWaxingList = [63, 64, 65, 66, 67, 68]

var ricaWaxingList = [69, 70, 71, 72, 73, 74]

var manicurePedicureList = [75, 76, 77, 78, 79, 80]

var arabicMehandiList = [81, 82, 83, 84, 85, 94, 98, 96]

var roundMehandiList = [86, 87, 88, 89, 97, 95, 99]

var bharvaMehandiList = [ 91, 92, 93, 100, 101, 102]

var bleachFacialList = [103, 104, 105, 106, 107, 108, 109, 110, 111]

var womenOffersList = [112, 113, 115, 116, 117, 118, 119]


db.collection("Women\'s Salon").orderBy("index").get().then((querySnapshot) => {
   querySnapshot.forEach((doc) => {

       for (var i=0; i<trendingInWomenList.length; i++){

         if(doc.data().index === trendingInWomenList[i]){
           var position = document.getElementById(trendingInWomenList[i]);

           var title = position.querySelector(".title").innerText = doc.data().Service_title;
           var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
           var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                      var imgSrc = position.querySelector(".card-img").src = doc.data().icon
         }
       }

     for (var i=0; i<hairStylingList.length; i++){
       if(doc.data().index === hairStylingList[i]){
         var position = document.getElementById(hairStylingList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
     }

     for (var i=0; i<threadingList.length; i++){
       if(doc.data().index === threadingList[i]){
         var position = document.getElementById(threadingList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
     }

     for (var i=0; i<normalWaxingList.length; i++){
       if(doc.data().index === normalWaxingList[i]){
         var position = document.getElementById(normalWaxingList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
     }

     for (var i=0; i<milkWaxingList.length; i++){
       if(doc.data().index === milkWaxingList[i]){
         var position = document.getElementById(milkWaxingList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
     }

     for (var i=0; i<ricaWaxingList.length; i++){
       if(doc.data().index === ricaWaxingList[i]){
         var position = document.getElementById(ricaWaxingList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
     }

     for (var i=0; i<manicurePedicureList.length; i++){
       if(doc.data().index === manicurePedicureList[i]){
         var position = document.getElementById(manicurePedicureList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
     }

     for (var i=0; i<arabicMehandiList.length; i++){
       if(doc.data().index === arabicMehandiList[i]){
         var position = document.getElementById(arabicMehandiList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
     }

     for (var i=0; i<roundMehandiList.length; i++){
       if(doc.data().index === roundMehandiList[i]){
         var position = document.getElementById(roundMehandiList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
     }

     for (var i=0; i<bharvaMehandiList.length; i++){
       if(doc.data().index === bharvaMehandiList[i]){
         var position = document.getElementById(bharvaMehandiList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
     }

     for (var i=0; i<bleachFacialList.length; i++){
       if(doc.data().index === bleachFacialList[i]){
         var position = document.getElementById(bleachFacialList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
     }

     for (var i=0; i<womenOffersList.length; i++){
       if(doc.data().index === womenOffersList[i]){
         var position = document.getElementById(womenOffersList[i]);

         var title = position.querySelector(".title").innerText = doc.data().Service_title;
         var price = position.querySelector(".card-text").innerText = "Rs "+ doc.data().price;
         var cut_price = position.querySelector("del").innerText = "Rs " + doc.data().cut_price;
                  var imgSrc = position.querySelector(".card-img").src = doc.data().icon
       }
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
