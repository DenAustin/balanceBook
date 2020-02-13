// Date and time
const currentDate = new Date()

const eventDate = currentDate.getDate();
const month = currentDate.getMonth()
const eventMonth = Number(month  + 1)
const eventYear = currentDate.getFullYear()
const eventHour = currentDate.getHours()
const eventMinute= currentDate.getMinutes()
const eventSecond = currentDate.getSeconds() 

const eventTimeStamp = `${eventYear} - ${eventMonth} - ${eventDate}  ${eventHour} :${eventMinute} :"${eventSecond}`
//get html elements
const promptDescription = document.querySelector(".prompt-description");
const promptAmount = document.querySelector(".prompt-amount");
const incomeCostSelectors = document.querySelector(".income-cost-selectors");
const selectIncome = document.querySelector("#select-income");
const selectExpense = document.querySelector("#select-expense");
const addBtn = document.querySelector("#add-btn");
const topDisplayContainer = document.querySelector(".top-display-container");
const expenses = document.querySelector(".expenses");
const expensesTable = document.querySelector(".expenses-table");
const incomeTable = document.querySelector(".income-table");
const lowerContainer = document.querySelector(".lower-container");
const balance = document.querySelector("#balance");
const summaryStatement = document.querySelector("#summary-statement");
const expenseDescription = document.querySelector("#expesnse-descrition");
const incomeDescription = document.querySelector("#income-description");
const expAmount = document.querySelector("#expense-amount");
const incomeAmount = document.querySelector("#income-amount");
const expenseTimeStamp = document.querySelector("#expense-date-time");
const incomeTimeStamp = document.querySelector("#income-date-time");
const incomeDiv= document.querySelector(".domDivWrapIncome")

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
      return this.expenses.reduce((acc, curr) => acc + curr.amount)
  },
  accountBalance: function () {
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


let sumTotal = accountBalance.totalIncome() 
console.log("Happy Joe " + sumTotal)


const incomeSummation = () => {
    let juice = sumTotal += Number(promptAmount.value)
    console.log("Juicy " + juice)
    document.getElementById("sumTotal").innerHTML = juice
}
addBtn.addEventListener("click", incomeSummation);





// do map and reduce to get total income and expenses
//add div with totals to balance by calling the respective functions
//play around to find out the function pararmeters














