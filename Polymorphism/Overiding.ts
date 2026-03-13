class Payment{
    constructor(){}
    processPayment(){
        return "Done"
    }
}
class CreditCard extends Payment{
    constructor(){
        super()
    }
    processPayment(){
        return ("Payment successful")
    }
    // processPayment(){}
}
class UPI extends Payment{
    constructor(){
        super()
    }
    processPayment(){
        return ("Payment successful")
    }
}

console.log(new CreditCard().processPayment())
console.log(new UPI().processPayment())
