const expenseCollection  =require('../db').db().collection("expense")
const validator = require('validator')


let Expense = function (data) {
    this.data = data
    this.errors = []
}


Expense.prototype.cleanUp = function () {
    if (typeof (this.data.date) != "string") {
        this.data.date = ""

    }
    if (typeof (this.data.catagory) != "string") {
        this.data.catagory = ""

    }
    if (typeof (this.data.description) != "string") {
        this.data.description = ""

    }
    if (typeof (this.data.expenseAmount) != "string") {
        this.data.expenseAmount = ""

    }

   
    //get ride of any bogys properties
    this.data = {
        date: this.data.date,
        catagory: this.data.catagory,
        description: this.data.description,
        expenseAmount: this.data.expenseAmount
    }
}

Expense.prototype.validate =  function(){
    return new Promise(async  (resolve, reject) =>{
        if (this.data.date == "") {
            this.errors.push("You must Provide Date")
    
        }
        if (this.data.catagory == "") {
            this.errors.push("You must Select a catagory")
        }
        if (this.data.description == "") {
            this.errors.push("You must Provide a description")
        }

        if (this.data.expenseAmount == "") {
            this.errors.push("You must Provide a Expense Amount")
        }

        resolve()
    })
    }
Expense.prototype.addExpense = function(){
    return new Promise(async (resolve, reject)=> {
            console.log("expense1")
        this.cleanUp()
        console.log("expense 2")
        await this.validate()
        console.log("expense 3")
       
        if (!this.errors.length) {
            console.log("expense Prototype")
           
            await expenseCollection.insertOne(this.data)
            resolve()
        }else{
            console.log("error")
            reject(this.errors)
        }
        
        })
    }

    module.exports = Expense