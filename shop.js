var cartValue = document.getElementById("cart-value");
var cartButton = document.getElementById("cart");

var addButtons = document.getElementsByClassName("button")

console.log(addButtons[0]);

var items = [
 {
 name: "`Brown plain Paper bag",
 quantity: 0,
 dollars: 2,
 cents: 0,
},
{
 name: "Multicoloured paper bags",
 quantity: 0,
 dollars: 3,
 cents: 0,
},
{
 name: "Designer Paper bags",
 quantity: 0,
 dollars: 5,
 cents: 0,
},
{
 name: "Beautiful Unicorn Paper bags fo kidz",
 quantity: 0,
 dollars: 9,
 cents: 56,
},
{
 name: "Jute pouch",
 quantity: 0,
 dollars: 13,
 cents: 0,
},
{
 name: "Fancy Vegetable jute basket",
 quantity: 0,
 dollars: 19,
 cents: 39,
},
{
 name: "Black and white jute hand bag for women",
 quantity: 0,
 dollars: 15,
 cents: 0,
},
{
 name: "Beige Handcrafted Jute Clutch",
 quantity: 0,
 dollars: 12,
 cents: 49,
},
];

function updateCart() {
 let cart = 0;
 for (index = 0; index < items.length; index++){
   cart = cart + items[index].quantity;
 }
 cartValue.innerHTML = cart;
}

for (let i = 0; i < addButtons.length; i++) {
 addButtons[i].onclick = (e) => {
   items[i].quantity++;
    updateCart();
  };
}
var finalDollers = 0;
var finalCents = 0;

function updatePrice() {
 let totalPriceInCents = 0;

 for(index = 0; index < items.length; index++) {
   totalPriceInCents = totalPriceInCents +
    items[index].quantity* (items[index].dollars*100 + items[index].cents)
 }
     finalDollers = Math.floor(totalPriceInCents / 100);
     finalCents = totalPriceInCents % 100;
}

var whatsappLink = "https://api.whatsapp.com/send?phone=9603527405&text=Order%20details";

function updatewhatsappLink () {
 for (let index = 0; index < items.length; index++) {
   if(items[index].quantity != 0) {
     whatsappLink+="%0A" + items[index].name+"%20" + items[index].quantity;
 } 
}
whatsappLink += 
"%0A"+"Total%20Price:%20$"+finalDollers+"%20"+ finalCents+"c"
}

cartButton.onclick = () => {
updatePrice();
 updatewhatsappLink();
 window.open(whatsappLink, "_blank");
}