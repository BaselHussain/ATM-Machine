#! /usr/bin/env node

import inquirer, { QuestionCollection } from "inquirer"
var myBalance:number=10000;
var pinCode:number=1234;
console.log(`your balance is ${myBalance}`)
var question:QuestionCollection=[{
    name:"PinCode",
    type:"number",
    message:"Enter your Pincode"
}]

var answer=await inquirer.prompt(question);
if(answer.PinCode===pinCode){
    var answer2=await inquirer.prompt([{
        name:"task",
        type:"list",
        message:"What you want to do?",
        choices:["What is your balance?","Withdraw money?","Fast Cash"]
    }]);
    if(answer2.task==="What is your balance?"){
        console.log(`Your balance is ${myBalance}`)
    }
    else if(answer2.task==="Fast Cash"){
        var answer3=await inquirer.prompt([{
            name:"amount",
            type:"list",
            message:"How much money you want to withdraw?",
            choices:[2000,5000,10000,15000,20000]
        }])
        if(answer3.amount>myBalance ){
            console.log(`Sorry you can't withdraw the amount because your account has insufficient balance`)
        }
        else{var leftAmount:number=myBalance-answer3.amount
        console.log(`You have withdrawn ${answer3.amount} now Your balance is ${leftAmount}`)}  
    }
    else{
        var answer4=await inquirer.prompt([{
            name:"amount",
            type:"number",
            message:"How much money you want to withdraw?",
        }])
        if(answer4.amount>myBalance){
            console.log(`Sorry you can't withdraw the amount because your account has insufficient balance`)
        }
        else{var leftAmount2:number=myBalance-answer4.amount
        console.log(`You have withdrawn ${answer4.amount} now Your balance is ${leftAmount2}`)}
    }
}else{
    console.log(`Please enter valid pincode`)
}