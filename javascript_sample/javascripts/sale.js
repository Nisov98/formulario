function calc() {
    console.log(document.getElementById("product"));
}
function calc() {
    console.log(document.getElementById("product").value);  //.valueをañadir
  }
  function calc() {
    const price = document.getElementById("product").value;
    const number = document.getElementById("number").value;
    window.alert(`${price}círculoPero${number}個。小計Es${price * number}círculoes`);
  }
  const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  let purchase = {
    price: price,
    number: number,
  };
  purchases.push(purchase);
}

function calc() {
  let sum = 0;
  for(let index = 0; index < purchases.length; index++) {
    sum += purchases[index].price * purchases[index].number;
  }
  window.alert(`El total es de${sum}Círculo.`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}
const products = [
  { id: 500, name: "オリジナルブレンド200g", price: 500 },
  { id: 900, name: "オリジナルブレンド500g", price: 900 },
  { id: 700, name: "スペシャルブレンド200g", price: 700 },
  { id: 1200, name: "スペシャルブレンド500g", price: 1200 }
];

function add() {
  const productId = parseInt(priceElement.value);
  const selectedProduct = products.find(product => product.id === productId);

  if (!selectedProduct) {
    alert("Por favor, seleccione un producto válido.");
    return;
  }

  const quantity = parseInt(numberElement.value);

  let purchase = {
    id: selectedProduct.id,
    name: selectedProduct.name,
    price: selectedProduct.price,
    quantity: quantity
  };

  purchases.push(purchase);
}

function calc() {
  let totalAmount = 0;
  let content = "Detalles de la compra:\n";

  for (let i = 0; i < purchases.length; i++) {
    const purchase = purchases[i];
    const subtotal = purchase.price * purchase.quantity;
    content += `Producto: ${purchase.name}\nCantidad: ${purchase.quantity}\nSubtotal: ${subtotal} yenes\n\n`;
    totalAmount += subtotal;
  }

  let shippingCost = 0;
  if (totalAmount < 2000) {
    shippingCost = 500;
  } else if (totalAmount < 3000) {
    shippingCost = 250;
  }

  const finalTotal = totalAmount + shippingCost;
  content += `Gastos de envío: ${shippingCost} yenes\nImporte total: ${finalTotal} yenes`;

  alert(content);

  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}
