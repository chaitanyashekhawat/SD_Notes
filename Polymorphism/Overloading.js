// Compile-Time (Method Overloading)
var Printer = /** @class */ (function () {
    function Printer(a, count) {
        this.a = a;
        this.count = count || 1;
        console.log(a);
    }
    return Printer;
}());
console.log(new Printer("Hello"));
console.log(new Printer(2, 7));
