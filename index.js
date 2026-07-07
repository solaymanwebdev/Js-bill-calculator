let itemPrice = 100;
let quantity = 3;
let dicountPercent = 20;

let subTotal = itemPrice * quantity;
let off = (subTotal * dicountPercent) /100;
let finalPay = subTotal - off;

document.getElementById('productAmount').textContent = `Item Price : ${itemPrice}`;
document.getElementById('subTotal').textContent = `Sub Total : ${subTotal}`;
document.getElementById('discount').textContent = `Discount Price : ${off}`;
document.getElementById('finalTotal').textContent = `Total Cash : ${finalPay}`