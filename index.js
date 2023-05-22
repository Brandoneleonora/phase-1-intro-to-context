// Your code here

const createEmployeeRecord = (card) => {
    let employeeRecord = {
        firstName:NaN, 
        familyName:NaN, 
        title:NaN, 
        payPerHour:NaN,
        timeInEvents:[],
        timeOutEvents:[]}

    employeeRecord.firstName = card[0]
    employeeRecord.familyName = card[1]
    employeeRecord.title = card[2]
    employeeRecord.payPerHour = card[3]

        
        return employeeRecord
}

const createEmployeeRecords = (arrayOfArrays) => {
    let cards = []
    arrayOfArrays.forEach(array => cards.push(createEmployeeRecord(array)))
    return cards
}

let inEvent =[]
const createTimeInEvent = (object, dayte) => {
    
  
    object.timeInEvents.push({type:"TimeIn", hour:parseInt(dayte.substr(11,14)), date:dayte.substr(0, 10)})
    //object.timeInEvents = inEvent
    return object
}

let outEvent =[]
const createTimeOutEvent = (object, dayte) => {
    
    object.timeOutEvents.push({type:"TimeOut", hour:parseInt(dayte.substr(11,14)), date:dayte.substr(0, 10)})
    //object.timeOutEvents = outEvent
    
    return object
}


const hoursWorkedOnDate = (arg1, arg2) => {
    let cardIn;
    let cardOut;
    arg1.timeInEvents.forEach(timeIn =>{
        if(timeIn.date == arg2){
            cardIn = timeIn
        }else{}
    })
    arg1.timeOutEvents.forEach(timeOut =>{
        if(timeOut.date == arg2){
            cardOut = timeOut
        }else{}
    })
  
    return (cardOut.hour - cardIn.hour)/100
   
   
}

const wagesEarnedOnDate = (arg1, arg2) => {
    return  hoursWorkedOnDate(arg1, arg2) * arg1.payPerHour
 }

 
 const allWagesFor = (arg1) => {

    const totalArray = arg1.timeInEvents.reduce((total,timeIn) => {
        return total + wagesEarnedOnDate(arg1, timeIn.date)
    }, 0)

    
    return totalArray
     
 }


 const calculatePayroll = (arg1) => {
    let whole = []
    //need something to iterate through the array of peoples cards
    const hi1 = arg1.forEach(card =>{
    // This calculates a persons wages for a certain day 
        whole.push(card.timeInEvents.reduce((total, timeIn) => {
            const hi = total + wagesEarnedOnDate(card, timeIn.date)
            return hi
        }, 0) )
    })

    //Needs to add an array the whole array with the numbers together
    let total = 0
    for (let number of whole){
        total += number
    }

    return total
}