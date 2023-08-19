let bill = 0;
let persenan = 0;
let orang = 1;
let oneTip = 0;
let totalBill = 0;

function captureBill() {
    // di parseFloat biar value string nya jadi integer, bisa dikasih operasi matematika
    bill = parseFloat(document.getElementById("bill").value);
  }

function getPersenan(percent) {
    persenan=parseInt(percent);
    countTipPerPerson();
    countTotalBill();
    enablereset();
}

function countTotalTip() {
    orang = document.getElementById("orang").value;
    if (orang == 0){
        errorHandle();
    }
    else {
        countTipPerPerson();
        countTotalBill();
        removeError();
    }
   
}

function countTipPerPerson() {
    // toFixed bikin hasil di bulatkan jadi 2 decimal place
    oneTip = (((bill*persenan)/100)/orang).toFixed(2);
    document.getElementById("result").value = "$" + oneTip;
}

function countTotalBill() {
    totalBill = (((bill*(100+persenan))/100)/orang).toFixed(2);
    document.getElementById("totalresult").value = "$" + totalBill;
}

function reset() {
    bill = "";
    persenan = 0;
    orang = 1;
    oneTip = 0;
    totalBill = 0;
    document.getElementById("bill").value=bill;
    document.getElementById("custom").value="";
    document.getElementById("orang").value ="";
    document.getElementById("result").value = "$" + "0.00";
    document.getElementById("totalresult").value = "$" + "0.00";
    document.getElementById('reset').setAttribute('disabled', 'true');
    removeError();
}

function enablereset() {
    document.getElementById('reset').removeAttribute('disabled');
}

function errorHandle() {
    document.getElementById("error").innerHTML = "Can't be Zero";
    document.getElementById("orang").classList.add("error-input");
}

function removeError() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("orang").classList.remove("error-input");
}