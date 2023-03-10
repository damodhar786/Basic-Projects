let billAmount = document.getElementById("bill-amount");
let guests = document.getElementById("guests");
let serviceQuality = document.getElementById("service-quality");
let tipAmount = document.getElementById("tip-amount");

const calculateTip = () => {
    let tip = ((billAmount.value * serviceQuality.value) / (guests.value)).toFixed(2);

    billAmount.value = '';
    serviceQuality.value = '';
    guests.value = '';

    if (tip === 'NaN') {
        tipAmount.innerHTML = 'Tip is ₹0 each';
        showTipAmount();
    }
    else {
        tipAmount.innerHTML = 'Tip ₹' + tip + ' each';
        showTipAmount();
    }
}

const showTipAmount = () => {
    let x = tipAmount;
    x.className = 'show';
    setTimeout(function () {
        x.className = x.className.replace('show', '');
    }, 3000);
}