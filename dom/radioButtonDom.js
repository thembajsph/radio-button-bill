//all my element reference on top 
var radioBillAddBtnElem = document.querySelector('.radioBillAddBtn');
var callTotalTwoElem = document.querySelector('.callTotalTwo');
var smsTotalTwoElem = document.querySelector('.smsTotalTwo');
var totalTwoElem = document.querySelector('.totalTwo');

var radioBillInstance = radioFactory();

function calculateBtn() {

  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  //checking if the button is checked what should happen

  if (checkedRadioBtn) {
    //  Getting the value from the radio button 
    var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms';

    //putting back all the results to html
    function appedingToHtml() {
   //   var total = radioBillInstance.calculateBtn(billItemType);


      callTotalTwoElem.innerHTML = radioBillInstance.getTotalcall().toFixed(2);
      smsTotalTwoElem.innerHTML = radioBillInstance.getTotalSms().toFixed(2);
      totalTwoElem.innerHTML = radioBillInstance.Alltotal().toFixed(2);
   }
  
  }
  // var total = radioBillInstance.totalPhoneBill(billString);   
  // styleTotalColor(roundedBillTotal);
  //billTotalElement.innerHTML = roundedBillTotal.toFixed(2);  
  //calling the add color function

 



  colorCode();
  //trigering the click event
  radioBillAddBtnElem.addEventListener('click', calculateBtn)


 //putting the results to html
 appedingToHtml();





  //created a function for coloring my totals.
  function colorCode() {
    if (RadioBillInstance.Alltotal() >= 50) {
      totalTwoElem.classList.add("danger");
    }
    else if (RadioBillInstance.Alltotal() >= 30 && RadioBillInstance.Alltotal() <= 50) {
      totalTwoElem.classList.add("warning");
    }
  }
};
