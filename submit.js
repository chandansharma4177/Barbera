



if($('.submitButton')[0]){
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




var realTime =(date.getHours() + 1)*100 + date.getMinutes()

var month = parseInt(date.getMonth()) +1
var todayDate =date.getDate() + "/"+ month + "/" +date.getFullYear()

console.log(todayDate);


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

  var hour = time[0] + time[1];
  var minute = time[3]+time[4];
  hour = parseInt(hour);
  minute = parseInt(minute)

  var selectedTime = hour*100 + minute
  var flag = 0
  if(cartItemNumbers === 0){
    alert("Please select some items")
    return false
  }
  else{
    if(name.length ===0){
      alert("Please enter the name")
      return false
    }
    else{
      if(mobileNumber.length !== 10 ){
        alert("Please enter valid mobile number")
        return false
      }
      else{
        if(address.length === 0){
          alert("Please enter valid address")
          return false
        }
        else{
          if(date === undefined){
            alert("Please enter valid date")
            return false
          }
          else{
            if(time === "" || hour<8 || hour > 18){
              alert("Please enter time between 8 a.m. to 7 p.m.")
              return false
          }else if(selectedTime <= realTime && date === todayDate ){
              alert("please choose time 1 hour from current time")
              return false
            }
            else{
              flag = 1;
            }
          }
        }
      }
    }
  }

    if(flag === 1){
      var finalItemList = ""

    var totalPayableMoney = 0;
    Object.values(cartItems).map(item => {
      var quantityNumber = parseFloat(item.quantity_value);
      var priceNumber = parseFloat(item.price_value.replace("Rs ", ""));

      var totalPriceOfItem =priceNumber*quantityNumber ;
      totalPayableMoney += totalPriceOfItem;

      var itemString = item.title_name + "        " + item.price_value + "   x    " + item.quantity_value +"\n"
      finalItemList+=itemString


    })


    var changedDate ="date = " + date[0]+date[1]+"/"  + date[3]+date[4]+"/" + date[6]+date[7]+date[8]+date[9]

    var changedTime = "time = " + time;

    var identity = mobileNumber+date+time

    fetch("https://api.apispreadsheets.com/data/4353/", {
    	method: "POST",
    	body: JSON.stringify({"data": {"ID":identity , "Mobile_Number":mobileNumber,"Name":name,"Address":address,"Date":changedDate,"Time":changedTime, "Items":finalItemList, "Total Amount": totalPayableMoney}}),
    }).then(res =>{
    	if (res.status === 201){

        location.href = 'index.html'
    	}
    	else{
        alert("Error")
    	}
    })

    if(cartItems != null){
      cartItems = {}

      localStorage.setItem('itemList', JSON.stringify(cartItems));
    }

    cartItemNumbers = 0;

    localStorage.setItem('cartItemNumbers', JSON.stringify(cartItemNumbers));
}

})
}






// -------------------------------------------myBookings.js------------------------------------------
var enteredMobileNo

if($(".LogIn")[0]){

  // firebase.auth().languageCode = 'it';


  $(".LogIn")[0].addEventListener('click' , function(){
    var number = $(".MobileNumberVerificationInput")[0].value;
    localStorage.setItem('MobileNumberVerification', JSON.stringify(number));
  })
}

enteredMobileNo = localStorage.getItem("MobileNumberVerification")
enteredMobileNo = JSON.parse(enteredMobileNo)
enteredMobileNo = parseInt(enteredMobileNo)

if($(".BookedItems")[0]){

  var myVar;

  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }

  function showPage() {
  document.getElementById("loader").style.display = "none";
}

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const url = 'https://script.google.com/macros/s/AKfycbxEg24SJ1erQD7yx4NiRPicSVcSu1F64j0_tibYpA/exec';

var bookTable = $(".BookedItems")[0];

fetch("https://api.apispreadsheets.com/data/4366/").then(res=>{
	if (res.status === 200){
		// SUCCESS
		res.json().then(data=>{



      data.data.forEach(function(val){

        if(val.Mobile_Number == enteredMobileNo){

          var dateEntered = val.Date[7]+ val.Date[8] + val.Date[9] +val.Date[10] +val.Date[11] +val.Date[12] +val.Date[13] +val.Date[14] +val.Date[15] +val.Date[16]

          var time = val.Time[7]+val.Time[8]+val.Time[9]+val.Time[10]+val.Time[11]

          var compareTime = val.Time[7]+val.Time[8]+val.Time[10]+val.Time[11]

          var date = new Date();

          var realTime =(date.getHours() + 1)*100 + date.getMinutes()

          var month = parseInt(date.getMonth()) +1
          var todayDate =date.getDate() + "/"+ month + "/" +date.getFullYear()

          var compareDate =val.Date[13] +val.Date[14] +val.Date[15] +val.Date[16]+val.Date[10] +val.Date[11] + val.Date[7]+ val.Date[8]
          compareDate = parseInt(compareDate)

          var compareTodayDate = todayDate[6]+todayDate[7]+todayDate[8]+todayDate[9]+todayDate[3]+todayDate[4]+todayDate[0]+todayDate[1]
          compareTodayDate = parseInt(compareTodayDate)

          console.log(compareDate);
          console.log(compareTodayDate);

          bookTable.innerHTML += `
          <tr>
            <td class="bookedDate">${dateEntered}</td>
            <td class="bookedTime">${time}</td>
            <td>${val.Items}

          `

          if(compareDate < compareTodayDate){
            bookTable.innerHTML += `

              <br>
              <br>
              <button type="button" class="btn btn-success " name="button">Completed</button>
            </td>
          </tr>`
          }

          else if(compareDate >= compareTodayDate ){
            bookTable.innerHTML += `

              <br>
              <br>
              <button type="button" class="btn btn-danger cancelBooking" data-toggle="modal"  data-target="#cancelModel" name="button">Cancel</button>
            </td>
          </tr>`
          }
          else if(dateEntered == todayDate && compareTime >realTime){
            bookTable.innerHTML += `

              <br>
              <br>
              <button type="button" class="btn btn-danger cancelBooking" data-toggle="modal"  data-target="#cancelModel" name="button">Cancel</button>
            </td>
          </tr>`
          }
          else if(dateEntered == todayDate && compareTime <realTime){
            bookTable.innerHTML += `

              <br>
              <br>
              <button type="button" class="btn btn-success " name="button">Completed</button>
            </td>
          </tr>`
          }
        }

      })

      var cancelBookigClicked =document.getElementsByClassName('cancelBooking')


      for(var i=0; i<cancelBookigClicked.length; i++){

        cancelBookigClicked[i].addEventListener('click', update_value)
      }

		}).catch(err => console.log(err))
	}
	else{
		// ERROR
	}
})



function update_value(event){

	var input = event.target
  // console.log(input.parentElement);
  var selectedDateValue = input.parentElement.parentElement.getElementsByClassName('bookedDate')[0].innerText
  var selectedTimeValue = input.parentElement.parentElement.getElementsByClassName('bookedTime')[0].innerText
var id1=	enteredMobileNo + selectedDateValue + selectedTimeValue
	var item= input.parentElement.innerText
  var update_url = proxyUrl + url+"?callback=ctrlq&Items="+item+"&ID="+id1+"&action=update";

  fetch("https://api.apispreadsheets.com/data/4383/", {
  	method: "POST",
  	body: JSON.stringify({"data": {"ID":id1,"Items":item}}),
  }).then(res =>{
  	if (res.status === 201){
  		// SUCCESS
  	}
  	else{
  		// ERROR
  	}
  })


fetch("https://api.apispreadsheets.com/data/4366/?query=deletefrom4366whereID="+ "'" +id1 + "'").then(res=>{
	if (res.status === 200){
		// SUCCESS

      location.reload();
	}
	else{
		// ERROR
	}
})


  }

}
