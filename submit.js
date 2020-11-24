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


// var date = new Date();
// date.setDate(date.getDate()-1);
//
// console.log(date);
// // $(".datepicker").value = date;
// $('.datepicker').datepicker({
//   format: "mm/dd/yyyy",
//   startDate:date
// });

var date = new Date();

var today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

$('.datepicker').datepicker({
  dateFormat: "dd/mm/yy",

    minDate: today
});


$(".dateDisplay")[0].innerText = $(".datepicker")[0].value


$('.timepicker').wickedpicker();
