let itemPrice = Number(prompt(`How much item ?`)) ;
let quantity = Number(prompt(`How many quantity ?`)) ;
let dicountPercent = Number(prompt(`How many discount ?`)) ;

let subTotal = itemPrice * quantity;
let off = (subTotal * dicountPercent) /100;
let finalPay = subTotal - off;

document.getElementById('productAmount').textContent = `Item Price : ${itemPrice}`;
document.getElementById('subTotal').textContent = `Sub Total : ${subTotal}`;
document.getElementById('discount').textContent = `Discount Price : ${off}`;
document.getElementById('finalTotal').textContent = `Total Cash : ${finalPay}`


//let learners = 30;

//learners = learners +1 ;
//learners = learners -1;
//learners = learners *2;
//learners = learners /2;
//learners = learners **2;
//learners = learners % 2;

//console.log(learners);