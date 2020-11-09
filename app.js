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
  document.getElementById("overlay_women").style.padding= "20% 0";
  // document.getElementsById("overlay_women .woman_logo").style.width = "10rem"


}



function off_women() {
  document.getElementById("overlay_women").style.display = "none";
  document.getElementById("overlay_men").style.display = "block";
  document.getElementById("women").style.width = "80%";
  document.getElementById("men").style.width = "20%";
  document.getElementById("overlay_men").style.width = "20%";
  document.getElementById("overlay_men").style.right = "80%";
  document.getElementById("overlay_men").style.padding= "20% 0";
}


// cart.html



var changeCartItemNumber = $(".cart_item");
for (var i=0; i<changeCartItemNumber.length; i++){
  changeCartItemNumber[i].addEventListener("click", addItemToLocalStorage);

}

function onLoadCartNumber(){
  var previousItemsCount = parseInt(localStorage.getItem('cartItemNumbers'));
  if(previousItemsCount){
    $(".cart span")[0].textContent = previousItemsCount;
  }
}

function changeCartNumber(){
  var previousItemsCount = parseInt(localStorage.getItem('cartItemNumbers'));
  if(previousItemsCount){
    localStorage.setItem('cartItemNumbers',previousItemsCount + 1)
    $(".cart span")[0].textContent = previousItemsCount +1;
  }else{
    localStorage.setItem('cartItemNumbers', 1)
    $(".cart span")[0].textContent = 1;
  }



}

function addItemToLocalStorage(event){
  var input = event.target;
  var parent = input.parentElement;
  var title = parent.getElementsByClassName("title")[0].innerText;
  var price = parent.getElementsByClassName("card-text")[0].innerText;


  var itemToList = {
    title_name: title,
    price_value: price
  }

  // var cartItems = {
  //   [title]:itemToList
  // }

  var cartItems = localStorage.getItem('itemList');
  cartItems = JSON.parse(cartItems);
  if(cartItems!=null ){
    if(cartItems[title] == undefined ){

      cartItems = {
        ...cartItems,
        [title]:itemToList
      }
      changeCartNumber()
    }
    else{
      alert("Item already exist in the cart")
    }
  }else{
    cartItems = {
      [title]:itemToList
    }
    changeCartNumber()
  }

localStorage.setItem('itemList' , JSON.stringify(cartItems));

}






onLoadCartNumber()

// var removeButtonClicked = $(".btn-danger")
// for (var i = 0; i<removeButtonClicked.length; i++){
//   removeButtonClicked[i].addEventListener("click", function(event){
//
//     event.target.parentElement.parentElement.remove();
//     updateTotal();
//   })
// }
//
// var quantityChanged = $(".quant");
// for (var i =0; i<quantityChanged.length; i++){
//     quantityChanged[i].addEventListener('change', updateQuantity);
// }
//
// var addItemToCart = $(".cart_item");
// for (var i = 0; i<addItemToCart.length; i++){
//   addItemToCart[i].addEventListener("click", addToCart);
// }
//
// function addToCart(event){
//   var input = event.target;
//   var shopItem = input.parentElement;
//   var title = shopItem.getElementsByClassName("title")[0].innerText;
//   var price = shopItem.getElementsByClassName("card-text")[0].innerText;
//   addingToCart(title, price);
//   updateTotal();
//
// }
//
// function addingToCart(title, price){
//   location.assign("cart.html"  )
//   var cartrow = document.createElement("div");
//   cartrow.classList.add("row")
//   cartrow.classList.add("item")
//   var cartRowContent = `
//   <div class="col-lg-4 col-md-4 first_col" >
//     <p>${title}</p>
//   </div>
//   <div class="col-lg-4 col-md-4 second_col">
//     <p class="price">${price}</p>
//   </div>
//   <div class="col-lg-4 col-md-4 third_col" >
//     <input type="number" class="quant" value="1" style="width:48px; margin-right:2rem;">
//     <button class="btn btn-danger">Remove</button>
//   </div>
//    `
//    cartrow.innerHTML =cartRowContent;
//    document.getElementsByClassName("content_cart")[0].append(cartrow);
//
// }
//
// function updateQuantity(event) {
//   var input  = event.target;
//   if(isNaN(input.value) || input.value <=0){
//     input.value = 1;
//   }
//   updateTotal();
// }
//
// function updateTotal(){
//   var total = 0;
//   for(var i=0; i<$(".item").length; i++){
//     var priceValue =parseFloat($(".item")[i].getElementsByClassName("price")[0].innerText.replace("Rs", "")) ;
//     var quantity = $(".item")[i].getElementsByClassName("quant")[0].value;
//
//     total = total + priceValue*quantity;
//   }
//
//   total = Math.round(total*100)/100;
//
//   $(".totalValue")[0].innerText = "Total  Rs "+ total;
// }
