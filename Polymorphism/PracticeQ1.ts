// Compile-Time (Method Overloading)

class Printer{
    a : any;
    count : number;


    constructor(a:number)
    constructor(a:string)
    constructor(a:number,count:number)

    constructor(a:any,count?:number){
        this.a=a
        this.count=count||1
        
        console.log(a)
    }
}


console.log(new Printer("Hello"))
console.log(new Printer(2,7))
