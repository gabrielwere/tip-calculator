//GET BILL AMOUNT
let billInput = document.getElementById("billAmount");
let billAmount = 0


//GET TIP VALUES
let customInput = document.getElementById("custom")
let custom = 0

let tipPercentage = 0

let five = document.getElementById("five")
five.addEventListener("click",()=>{
    changeClass()
    five.classList.remove("box")
    five.classList.add("box-active")

    tipPercentage = 5/100
    customInput.value = ""
    calculateTips()
})

let ten = document.getElementById("ten")
ten.addEventListener("click",()=>{
    changeClass()
    ten.classList.remove("box")
    ten.classList.add("box-active")

    tipPercentage = 10/100
    customInput.value = ""
    calculateTips()
})


let fifteen = document.getElementById("fifteen")
fifteen.addEventListener("click",()=>{
    changeClass()
    fifteen.classList.remove("box")
    fifteen.classList.add("box-active")

    tipPercentage = 15/100
    customInput.value = ""
    calculateTips()
})


let twentyFive = document.getElementById("twentyFive")
twentyFive.addEventListener("click",()=>{
    changeClass()
    twentyFive.classList.remove("box")
    twentyFive.classList.add("box-active")

    tipPercentage = 25/100
    customInput.value = ""
    calculateTips()
})


let fifty = document.getElementById("fifty")
fifty.addEventListener("click",()=>{
    changeClass()
    fifty.classList.remove("box")
    fifty.classList.add("box-active")
   

    tipPercentage = 50/100
    customInput.value = ""
    calculateTips()
})


//GET NUMBER OF PEOPLE
let numberOfPeopleInput = document.getElementById("numberOfPeople");
let numberOfPeople = 0


//CHANGE BACKGROUND COLOR
function changeClass(){
    let tipValues = document.querySelectorAll(".box-active")

    tipValues.forEach((value)=>{
        value.classList.remove("box-active")
        value.classList.add("box")
    })
}


billInput.addEventListener("input",calculateTips)
numberOfPeopleInput.addEventListener("input",()=>{

    let notZero = document.getElementById("notZero")
    let content = document.getElementById("content")

    if(numberOfPeopleInput.value == "0"){
        notZero.style.display = "block"
        content.style.border = "2px solid #E17052"
        return
    }
    notZero.style.display="none"
    content.style.border="none"
    calculateTips()
})

customInput.addEventListener("input",()=>{
    custom = parseFloat(customInput.value)
    tipPercentage = custom/100
    changeClass()
    calculateTips()
})

let tipPerPerson = document.getElementById("amountPerPerson")
let totalPerPerson = document.getElementById("total")


function calculateTips(){
    billAmount = parseFloat(billInput.value)
    numberOfPeople = parseFloat(numberOfPeopleInput.value)

    if(!isNaN(billAmount) && !isNaN(numberOfPeople) && !isNaN(tipPercentage) && billAmount != 0 && numberOfPeople != 0 && tipPercentage != 0){
        resetButton.classList.remove("reset")
        resetButton.classList.add("reset-active")
       

        let tip = parseFloat(billAmount * tipPercentage)
        let tipAmountPerPerson = parseFloat((tip/numberOfPeople)).toFixed(2)
        let totalAmountPerPerson = ((billAmount/numberOfPeople) + parseFloat(tipAmountPerPerson)).toFixed(2)

        tipPerPerson.textContent = tipAmountPerPerson
        totalPerPerson.textContent = totalAmountPerPerson
    }else{
        resetButton.classList.remove("reset-active")
        resetButton.classList.add("reset")
        reset()
    }
}

let resetButton = document.getElementById("reset")
resetButton.addEventListener("click",reset)

function reset(){
    tipPerPerson.textContent = "0.00"
    totalPerPerson.textContent = "0.00"
}


