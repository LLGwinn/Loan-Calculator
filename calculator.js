window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      amount: +(document.getElementById("loan-amount").value),
      years: +(document.getElementById("loan-years").value),
      rate: +(document.getElementById("loan-rate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    let p = document.getElementById("loan-amount");
    let t = document.getElementById("loan-years");
    let i = document.getElementById("loan-rate");
    let pmt = document.getElementById("monthly-payment");
    p.value = 10000;
    t.value = 5;
    i.value = 7.5;
    pmt.value = calculateMonthlyPayment(
        {amount: p.value, 
         years: t.value, 
         rate: i.value
        });  
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    jasmine.createSpy();
    myAlert = spyOn(window, 'alert');
    let numericMsg = "All values should be numeric."
    let zeroMsg = ("Values should be greater than zero.")
    let data = getCurrentUIValues();
    if (isNaN(data.amount)) {
        alert(numericMsg);
        updateMonthly("");
        return;
    }
    if (data.amount < 0) {
        alert(zeroMsg);
        updateMonthly("");
        return;
    }
    if (isNaN(data.years)) {
        alert(numericMsg);
        updateMonthly("");
        return;
    }
    if (data.years <= 0) {
        alert(zeroMsg);
        updateMonthly("");
        return;
    }
    if (isNaN(data.rate)) {
        alert(numericMsg);
        updateMonthly("");
        return;
    }
    if (data.rate < 0) {
        alert(zeroMsg);
        updateMonthly("");
        return;
    }
    let pmt = document.getElementById("monthly-payment");
    pmt.value = calculateMonthlyPayment(
        {amount: data.amount, 
         years: data.years, 
         rate: data.rate
        });
    updateMonthly(pmt.value);
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
      let amt = values.amount;
      let time = values.years * 12;
      let rate = values.rate/12/100;
      let mnthly = (amt * rate) / (1 - Math.pow(1 + rate, 0 - time) );
      if (rate === 0) {
          mnthly = amt/time;
      }
      return `$${mnthly.toFixed(2)}`; 
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    let mnthlyPmt = document.getElementById("monthly-payment");
    mnthlyPmt.innerText = monthly;
  }
  