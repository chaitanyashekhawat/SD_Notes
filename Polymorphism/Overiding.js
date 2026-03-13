var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Payment = /** @class */ (function () {
    function Payment() {
    }
    Payment.prototype.processPayment = function () {
        return "Done";
    };
    return Payment;
}());
var CreditCard = /** @class */ (function (_super) {
    __extends(CreditCard, _super);
    function CreditCard() {
        return _super.call(this) || this;
    }
    CreditCard.prototype.processPayment = function () {
        return ("Payment successful");
    };
    return CreditCard;
}(Payment));
var UPI = /** @class */ (function (_super) {
    __extends(UPI, _super);
    function UPI() {
        return _super.call(this) || this;
    }
    UPI.prototype.processPayment = function () {
        return ("Payment successful");
    };
    return UPI;
}(Payment));
console.log(new CreditCard().processPayment());
console.log(new UPI().processPayment());
