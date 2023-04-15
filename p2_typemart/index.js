"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'fanny pack';
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = "500 Broadway, Vancouver BC";
var product = products_1.default.filter(function (product) { return product.name === productName; })[0];
// const product = products.find(product => product.name === productName);
// console.log(product)
if (product.preOrder) {
    console.log('We will send you a message when your product is on its way.');
}
if (product.price > 25) {
    console.log("This item will receive free shipping.");
    shipping = 0;
}
else {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = product.price * taxPercent;
total = product.price + taxTotal + shipping;
console.log("\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    $").concat(product.price, "\nTax:      $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping.toFixed(2), "\nTotal:    $").concat(total.toFixed(2), "\n"));
