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
   var total = radioBillInstance.calculateBtno(billItemType);

      callTotalTwoElem.innerHTML = radioBillInstance.getCallTotal().toFixed(2);
      smsTotalTwoElem.innerHTML = radioBillInstance.getSmsTotal().toFixed(2);
      totalTwoElem.innerHTML = radioBillInstance.allTotal().toFixed(2);
      colorCode();
  //trigering the click event 
   }
  }
  
     
  // styleTotalColor(roundedBillTotal);
  //billTotalElement.innerHTML = roundedBillTotal.toFixed(2);  
  //calling the add color function

 
 //putting the results to html
 appedingToHtml();





  //created a function for coloring my totals.
  function colorCode() {
    if (radioBillInstance.allTotal() >= 50) {
      totalTwoElem.classList.add("danger");
    }
    else if(radioBillInstance.allTotal() >=30 && radioBillInstance.allTotal() <= 50){
      totalTwoElem.classList.add("warning");
   }
 }
};
  
  
radioBillAddBtnElem.addEventListener('click', calculateBtn);