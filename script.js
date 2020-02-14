    //  Title: Balance sheet calculator 20200214

// Date and time
const currentDate = new Date()

const eventDate = currentDate.getDate();
const month = currentDate.getMonth()
const eventMonth = Number(month  + 1)
const eventYear = currentDate.getFullYear()
const eventHour = currentDate.getHours()
const eventMinute= currentDate.getMinutes()
const eventSecond = currentDate.getSeconds() 

const eventTimeStamp = `${eventMonth} / ${eventDate} / ${eventYear} ::  ${eventHour} :${eventMinute} :${eventSecond}`

//get html tags and elements
const promptDescription = document.querySelector(".prompt-description");
const promptAmount = document.querySelector(".prompt-amount");
const incomeCostSelectors = document.querySelector(".income-cost-selectors");
const addBtn = document.querySelector("#add-btn");
const summaryStatement = document.querySelector("#summary-statement");
const expenseDescription = document.querySelector("#expesnse-descrition");
const incomeDescription = document.querySelector("#income-description");
const expAmount = document.querySelector("#expense-amount");
const incomeAmount = document.querySelector("#income-amount");
const expenseTimeStamp = document.querySelector("#expense-date-time");
const incomeTimeStamp = document.querySelector("#income-date-time");


//Asabeneh method
const accountBalance = {
  firstName: 'Ase',
  lastName: 'Yeboah',
  incomes: [{
          description: 'Salary',
          amount: 4000
      },
      {
          description: 'Prize',
          amount: 5000
      }
  ],
  expenses: [{
          description: 'Rent',
          amount: 900
      },
      {
          description: 'Transport',
          amount: 100
      }
  ],
  addIncome: function () {
      const description = promptDescription.value;
      const amount = Number(promptAmount.value);
      this.incomes.push({
          description,
          amount
      })
  },
  addExpense: function () {
    const description = promptDescription.value;
    const amount = Number(promptAmount.value);
      this.expenses.push({
          description,
          amount
      })
  },
  totalIncome: function () {
      const total = this.incomes.reduce((acc, curr) => {
          return acc + curr.amount
      }, 0)
      return total
  },
  totalExpense: function () {
    const total = this.expenses.reduce((acc, curr) => {
          return acc + curr.amount
      },0)
      return total
  },
  balanceSheet: function () {
      const balance = this.totalIncome() - this.totalExpense()
      return balance
  }
}
//Div maker for income entries
const expenseDisplay = () => { 
    expenseDescription.innerHTML =""
    expAmount.innerHTML = ""
    expenseTimeStamp.innerHTML =""
    accountBalance.expenses.forEach(entry => {
        expenseDescription.innerHTML += `<div class="innerDivs"> <p>${entry.description}</p></div>`
        expAmount.innerHTML += `<div class="innerDivs"> <p> ${entry.amount}</p></div>`
        expenseTimeStamp.innerHTML += `<div class="innerDivs"><p> ${eventTimeStamp}</p></div>`;
        });
}
expenseDisplay()

//Div maker for income entries
const incomeDisplay= ()=> {  
    incomeDescription.innerHTML ="" 
    incomeAmount.innerHTML =""
    incomeTimeStamp.innerHTML=""
      accountBalance.incomes.forEach(entry => {
        incomeDescription.innerHTML += `<div class="innerDivs"> <p>${entry.description}</p></div>`
        incomeAmount.innerHTML += `<div class="innerDivs"><p> ${entry.amount}</p></div>`;
        incomeTimeStamp.innerHTML += `<div class="innerDivs"><p> ${eventTimeStamp}</p></div>`;

    });
}
incomeDisplay()

// Add evnet listener to select tags

const selectEvent = () => {
    console.log(promptAmount.value)
    if(promptAmount.value !==null &&  promptDescription.value !== null && incomeCostSelectors.value =="income" ){
        accountBalance.addIncome()
        incomeDisplay()
    }else if(promptAmount.value !==null &&  promptDescription.value !== null && incomeCostSelectors.value =="costs"){
        accountBalance.addExpense()
        expenseDisplay()
     
    }else{
        alert("Please select income or expense")
    }
}
addBtn.addEventListener("click", selectEvent);


//To sum and allocate income and expenses
let sumTotal = accountBalance.totalIncome() 
let expnseTotal = accountBalance.totalExpense() 
console.log("Happy Joe " + sumTotal)


const incomeSummation = () => {
    let sales 
    let allSpending
    if(promptAmount.value !==null &&  promptDescription.value !== null && incomeCostSelectors.value =="income"){
        sales = sumTotal += Number(promptAmount.value)
        document.getElementById("sumTotal").innerHTML = sales
    }else if(promptAmount.value !==null &&  promptDescription.value !== null && incomeCostSelectors.value =="costs"){
        allSpending = expnseTotal += Number(promptAmount.value)
        document.getElementById("sum-total-expense").innerHTML = allSpending
     }
    
}
addBtn.addEventListener("click", incomeSummation);

console.log("Ston " + accountBalance.balanceSheetop)
accountBalance.balanceSheet()



