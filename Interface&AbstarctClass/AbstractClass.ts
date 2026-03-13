abstract class Vehicle1{

    abstract start() : void

    fuel(){
        console.log("Fuel")
    }

}

interface Vehicle2{

    start() : void

}

class Car extends Vehicle1{
    constructor(){
        super()
    }

    start(){}

}

class Bike implements Vehicle2{
    constructor(){}

    start(){}
}