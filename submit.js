function dsisplayFinalCart(){
  var finalTable = document.getElementsByClassName("final_product_table")[0];

  var cartItems = localStorage.getItem("itemList");
  cartItems = JSON.parse(cartItems);
  var totalPayableMoney = 0;
  Object.values(cartItems).map(item => {
    var quantityNumber = parseFloat(item.quantity_value);
    var priceNumber = parseFloat(item.price_value.replace("Rs ", ""));

    var totalPriceOfItem =priceNumber*quantityNumber ;
    totalPayableMoney += totalPriceOfItem;
    finalTable.innerHTML +=`
    <tr>

      <td class="table_content" style="width:55%;"> <h5 class="final_product_heading">${item.title_name}</h5>
      <h5 class="final_product_price">${item.price_value}</h5>

     </td>

     <td class="final_quantity_value" style="width:25%;"> ${item.quantity_value} </td>
     <td class="final_item_total_price" style="width:20%;">Rs ${totalPriceOfItem} </td>

    </tr>
    `

  });
  $(".final-price span")[0].innerText = "Rs " + totalPayableMoney
}

dsisplayFinalCart()



var date = new Date();
var d;
var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

$('.datepicker').datepicker({
  onSelect: function (selectedDate) {
    d = selectedDate;   },
  dateFormat: "dd/mm/yy",

    minDate: today
});






$('.submitButton')[0].addEventListener('click', function(){
  var cartItemNumbers = localStorage.getItem("cartItemNumbers");
  cartItemNumbers = JSON.parse(cartItemNumbers)
  var cartItems = localStorage.getItem("itemList");
  cartItems = JSON.parse(cartItems);



  var name = $('.name')[0].value;
  var mobileNumber = $('.mobile')[0].value;
  var address = $('.address')[0].value;
  var date = d;
  var time = $('.timepicker')[0].value;

  if(cartItemNumbers === 0){
    alert("Please select some items")
  }
  else{
    if(name.length ===0){
      alert("Please enter the name")
    }
    else{
      if(mobileNumber.length !== 10 ){
        alert("Please enter valid mobile number")
      }
      else{
        if(address.length === 0){
          alert("Please enter valid address")
        }
        else{
          if(date === undefined){
            alert("Please enter valid date")
          }
          else{
            if(time === ""){
              alert("Please enter valid time")
            }
          }
        }
      }
    }
  }






  if(name.length !==0 && mobileNumber.length === 10  && address.length !==0 && time !==""){

    var totalPayableMoney = 0;
    Object.values(cartItems).map(item => {
      var quantityNumber = parseFloat(item.quantity_value);
      var priceNumber = parseFloat(item.price_value.replace("Rs ", ""));

      var totalPriceOfItem =priceNumber*quantityNumber ;
      totalPayableMoney += totalPriceOfItem;

      console.log(item.title_name);
      console.log(item.price_value);
      console.log(item.quantity_value);
      console.log(totalPriceOfItem);

    })

    
    console.log(name);
    console.log(mobileNumber);
    console.log(address);
    console.log(date);
    console.log(time);

    if(cartItems != null){
      cartItems = {}

      localStorage.setItem('itemList', JSON.stringify(cartItems));
    }



    cartItemNumbers = 0;

    localStorage.setItem('cartItemNumbers', JSON.stringify(cartItemNumbers));

  }


})
