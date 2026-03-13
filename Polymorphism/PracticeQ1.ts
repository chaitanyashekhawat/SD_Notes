// Compile-Time (Method Overloading)

class Printer{
    a : string
    constructor(a:string){
        this.a=a
        
        console.log(a)
    }
}

console.log(new Printer("We ran our first code"))