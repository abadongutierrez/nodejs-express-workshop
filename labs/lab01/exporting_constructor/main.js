var Product = require('./product'),
    productId = 1235464234241223332211,
    myProduct = new Product('This is the name of the product', productId);

console.log('Product Name: ' + myProduct.name());
console.log('Product Id: ' + myProduct.id());