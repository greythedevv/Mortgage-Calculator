let amountElem = document.getElementById("amount")
let yearsElem = document.getElementById("years")
let rateElem = document.getElementById("rate")

let monthlyRepaymentsElem = document.getElementById("monthly-repayments")
let totalRepaymentElem = document.getElementById("total-repayment")

let btnElem = document.getElementById("calculateBtn")
let clearElem = document.getElementById("clear")
let intrestonlyElem = document.getElementById("intrest-only")

let monthlyRate;

let meee = "hello there"

btnElem.addEventListener("click", function(){
    let anountValue = parseFloat(amountElem.value)
    let yearsValue = parseFloat(yearsElem.value)
    let rateValue = parseFloat(rateElem.value)

    monthlyRate =  rateValue/(100*12)

    let monthlyPayments = yearsValue*12

    let monthlyRepayments = 
  anountValue *
  ((monthlyRate * Math.pow(1 + monthlyRate, monthlyPayments)) /
  (Math.pow(1 + monthlyRate, monthlyPayments) - 1))


    monthlyRepaymentsElem.textContent = "£" + monthlyRepayments.toLocaleString(undefined, { minimumFractionDigits: 2 })

    let totalPayment = monthlyRepayments * monthlyPayments

    totalRepaymentElem.textContent = "£" + totalPayment.toLocaleString(undefined, { minimumFractionDigits: 2 })


})

clearElem.addEventListener("click", function(){
  const allInputs = document.getElementsByTagName('input');

   for (let i = 0; i < allInputs.length; i++) {
        allInputs[i].value = '';
    }

   
})



