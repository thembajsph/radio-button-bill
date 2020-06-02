function radioFactory()  {
//declare my totals variable on global scope 
var callsTotal = 0;
var smsTotal = 0;
var total = 0;
  
//calculate the totals 
function calculateBtno(billItemType){
  
    

    if (billItemType === 'call'){
      callsTotal += 2.75;
    }
     if (billItemType === 'sms'){
    smsTotal += 0.75
}

 } 
  
 function getTotalcall() {
return callsTotal
  }

function getSmsTotal() {
return smsTotal
}
function allTotal() {
//calculating the total of both calls and sms 
return  total = callsTotal + smsTotal
}

return {
    calculateBtno,
    getTotalcall,
    getSmsTotal,
    allTotal
}
};


