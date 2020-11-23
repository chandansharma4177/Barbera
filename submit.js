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
      <td style="width:20%;">  <img  class="card-img" src=${item.image_location} alt="Suresh Dasari Card">
         </td>
      <td class="table_content"> <h5 class="product_heading">${item.title_name}</h5>
      <h5 class="procuct_price">${item.price_value}</h5>

     </td>

     <td> ${item.quantity_value} </td>
     <td class="item_total_price"><h5 class="item_total">Rs ${totalPriceOfItem}</h5> </td>

    </tr>
    `

  });
  $(".final-price span")[0].innerText = "Rs " + totalPayableMoney
}

dsisplayFinalCart()
