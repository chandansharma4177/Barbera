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
var trendingInMenContent = document.querySelector("#trendingInMen");
trendingInMenContent.classList.add("owl-carousel")
trendingInMenContent.classList.add("owl-theme")


var shavingContainer = [8, 9];
var shavingContent = document.querySelector("#Shaving")
shavingContent.classList.add("owl-carousel")
shavingContent.classList.add("owl-theme")


var facialAndFaceCleanupContainer = [17, 18, 19, 20, 21]
var facialAndFaceCleanupContent = document.querySelector("#FacialAndFaceCleanup")
facialAndFaceCleanupContent.classList.add("owl-carousel")
facialAndFaceCleanupContent.classList.add("owl-theme")


var offersContainer = [23, 24, 25]
var offersContent = document.querySelector("#SpecialOffers")
offersContent.classList.add("owl-carousel")
offersContent.classList.add("owl-theme")


 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var db = firebase.firestore();
 db.collection("Men\'s Salon").orderBy("index").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      if (trendingInMenContent){
        for (var i=0; i<trendingInMenContainer.length; i++){

          if(doc.data().index === trendingInMenContainer[i]){

            trendingInMenContent.innerHTML +=`
            <div class="card mb-2 ">
              <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
              <div class="card-body">
                <h4 class="title">${doc.data().Service_title}</h4>

                <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
                <span><del>Rs ${doc.data().cut_price}</del></span>
                <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
              </div>
            </div>
            `
          }
        }
      }


      for (var i=0; i<shavingContainer.length; i++){
        if(doc.data().index === shavingContainer[i]){
          shavingContent.innerHTML +=`
          <div class="card mb-2 ">
            <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
            <div class="card-body">
              <h4 class="title">${doc.data().Service_title}</h4>

              <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
              <span><del>Rs ${doc.data().cut_price}</del></span>
              <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
            </div>
          </div>
          `
        }
      }

      for (var i=0; i<facialAndFaceCleanupContainer.length; i++){
        if(doc.data().index === facialAndFaceCleanupContainer[i]){
          facialAndFaceCleanupContent.innerHTML +=`
          <div class="card mb-2 ">
            <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
            <div class="card-body">
              <h4 class="title">${doc.data().Service_title}</h4>

              <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
              <span><del>Rs ${doc.data().cut_price}</del></span>
              <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
            </div>
          </div>
          `
        }
      }

      for (var i=0; i<offersContainer.length; i++){
        if(doc.data().index === offersContainer[i]){
          offersContent.innerHTML +=`
          <div class="card mb-2 ">
            <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
            <div class="card-body">
              <h4 class="title">${doc.data().Service_title}</h4>

              <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
              <span><del>Rs ${doc.data().cut_price}</del></span>
              <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
            </div>
          </div>
          `
        }
      }

    });
});

var trendingInWomenList = [34, 35, 38, 39, 44, 43, 42, 47, 51, 56, 76, 79, 83, 87, 104, 108]
var trendingInWomenContent = document.querySelector("#TrendingInWomen");
trendingInWomenContent.classList.add("owl-carousel")
trendingInWomenContent.classList.add("owl-theme")

var hairStylingList = [36, 37, 38, 45, 46, 47, 48, 49, 50, 40, 41]
var hairStylingContent = document.querySelector("#hair_styling");
hairStylingContent.classList.add("owl-carousel")
hairStylingContent.classList.add("owl-theme")

var threadingList = [51, 52, 53, 54, 55]
var threadingContent = document.querySelector("#threading");
threadingContent.classList.add("owl-carousel")
threadingContent.classList.add("owl-theme")

var normalWaxingList = [56, 57, 58, 59, 60, 61, 62]
var normalWaxingContent = document.querySelector("#normalWaxing");
normalWaxingContent.classList.add("owl-carousel")
normalWaxingContent.classList.add("owl-theme")

var milkWaxingList = [63, 64, 65, 66, 67, 68]
var milkWaxingContent = document.querySelector("#milkWaxing");
milkWaxingContent.classList.add("owl-carousel")
milkWaxingContent.classList.add("owl-theme")

var ricaWaxingList = [69, 70, 71, 72, 73, 74]
var ricaWaxingContent = document.querySelector("#ricaWaxing");
ricaWaxingContent.classList.add("owl-carousel")
ricaWaxingContent.classList.add("owl-theme")

var manicurePedicureList = [75, 76, 77, 78, 79, 80]
var manicurePedicureContent = document.querySelector("#manicure_pedicure");
manicurePedicureContent.classList.add("owl-carousel")
manicurePedicureContent.classList.add("owl-theme")

var arabicMehandiList = [81, 82, 83, 84, 85, 94, 98, 96]
var arabicMehandiContent = document.querySelector("#arabicMehandi");
arabicMehandiContent.classList.add("owl-carousel")
arabicMehandiContent.classList.add("owl-theme")

var roundMehandiList = [86, 87, 88, 89, 97, 95, 99]
var roundMehandiContent = document.querySelector("#roundMehandi");
roundMehandiContent.classList.add("owl-carousel")
roundMehandiContent.classList.add("owl-theme")

var bharvaMehandiList = [ 91, 92, 93, 100, 101, 102]
var bharvaMehandiContent = document.querySelector("#bharvaMehandi");
bharvaMehandiContent.classList.add("owl-carousel")
bharvaMehandiContent.classList.add("owl-theme")

var bleachFacialList = [103, 104, 105, 106, 107, 108, 109, 110, 111]
var bleachFacialContent = document.querySelector("#bleach_facial");
bleachFacialContent.classList.add("owl-carousel")
bleachFacialContent.classList.add("owl-theme")

var womenOffersList = [112, 113, 115, 116, 117, 118, 119]
var womenOffersContent = document.querySelector("#womenOffers");
womenOffersContent.classList.add("owl-carousel")
womenOffersContent.classList.add("owl-theme")


db.collection("Women\'s Salon").orderBy("index").get().then((querySnapshot) => {
   querySnapshot.forEach((doc) => {

       for (var i=0; i<trendingInWomenList.length; i++){

         if(doc.data().index === trendingInWomenList[i]){

           trendingInWomenContent.innerHTML +=`
           <div class="card mb-2 ">
             <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
             <div class="card-body">
               <h4 class="title">${doc.data().Service_title}</h4>

               <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
               <span><del>Rs ${doc.data().cut_price}</del></span>
               <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
             </div>
           </div>
           `
         }
       }

     for (var i=0; i<hairStylingList.length; i++){
       if(doc.data().index === hairStylingList[i]){
         hairStylingContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
       }
     }

     for (var i=0; i<threadingList.length; i++){
       if(doc.data().index === threadingList[i]){
         threadingContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
       }
     }

     for (var i=0; i<normalWaxingList.length; i++){
       if(doc.data().index === normalWaxingList[i]){
         normalWaxingContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
       }
     }

     for (var i=0; i<milkWaxingList.length; i++){
       if(doc.data().index === milkWaxingList[i]){
         milkWaxingContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
       }
     }

     for (var i=0; i<ricaWaxingList.length; i++){
       if(doc.data().index === ricaWaxingList[i]){
         ricaWaxingContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
       }
     }

     for (var i=0; i<manicurePedicureList.length; i++){
       if(doc.data().index === manicurePedicureList[i]){
         manicurePedicureContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
       }
     }

     for (var i=0; i<arabicMehandiList.length; i++){
       if(doc.data().index === arabicMehandiList[i]){
         arabicMehandiContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
       }
     }

     for (var i=0; i<roundMehandiList.length; i++){
       if(doc.data().index === roundMehandiList[i]){
         roundMehandiContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
       }
     }

     for (var i=0; i<bharvaMehandiList.length; i++){
       if(doc.data().index === bharvaMehandiList[i]){
         bharvaMehandiContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
       }
     }

     for (var i=0; i<bleachFacialList.length; i++){
       if(doc.data().index === bleachFacialList[i]){
         bleachFacialContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
       }
     }

     for (var i=0; i<womenOffersList.length; i++){
       if(doc.data().index === womenOffersList[i]){
         womenOffersContent.innerHTML +=`
         <div class="card mb-2 ">
           <img class="card-img" src="${doc.data().icon}" alt="Suresh Dasari Card">
           <div class="card-body">
             <h4 class="title">${doc.data().Service_title}</h4>

             <p class="card-text"><strong>Rs ${doc.data().price} </strong> </p>
             <span><del>Rs ${doc.data().cut_price}</del></span>
             <button class="btn btn-primary cart_item" onclick = "change_cart_item_number()">Add to cart</button>
           </div>
         </div>
         `
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
