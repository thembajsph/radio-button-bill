//all my element reference on top 
var radioBillAddBtnElem = document.querySelector('.radioBillAddBtn'); 
var callTotalTwoElem = document.querySelector('.callTotalTwo');
var smsTotalTwoElem = document.querySelector('.smsTotalTwo');
var totalTwoElem = document.querySelector('.totalTwo');

//declare my totals variable on global scope 
var callsTotal = 0;
var smsTotal = 0;
var total = 0;
  
//calculate the totals 
function calculateBtn(){
  
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
//checking if the button is checked what should happen
if (checkedRadioBtn){
//  Getting the value from the radio button 
    var billItemType = checkedRadioBtn.value;
    // billItemType will be 'call' or 'sms';
    if (billItemType === 'call'){
      callsTotal += 2.75;
    }
     if (billItemType === 'sms'){
    smsTotal += 0.75
}
} 
  //calculating the total of both calls and sms 
  total = callsTotal + smsTotal
 
  //calling the add color function
  colorCode(total)
  //putting the results to html
  appedingToHtml();
 
};

//created a function for coloring my totals.
 function colorCode(total){
    if(total >= 50){
      totalTwoElem.classList.add("danger");
    }
   else if(total>=30 && total<=50){
      totalTwoElem.classList.add("warning");
   }
 }

//putting back all the results to html
function appedingToHtml(){
  
  callTotalTwoElem.innerHTML = callsTotal.toFixed(2);
  smsTotalTwoElem.innerHTML = smsTotal.toFixed(2);
  totalTwoElem.innerHTML = total.toFixed(2);
}
  
//trigering the click event
radioBillAddBtnElem.addEventListener('click', calculateBtn)

