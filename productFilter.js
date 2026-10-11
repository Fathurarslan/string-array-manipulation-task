// Case 2: Ecommerce Product Filter (Array of Objects)

const products = [
  { name: "Laptop", price: 1000, active: true },
  { name: "Mouse", price: 20, active: false },
  { name: "Keyboard", price: 50, active: true },
];

// 1. Saring produk yang active: true
const activeProducts = products.filter((product) => {
  return product.active === true;
});

// 2. Array nama produk aktif dengan huruf kapital semua
const newArray = activeProducts.map((product) => {
  return product.name.toUpperCase();
});

// 3. Total harga semua produk aktif
const totalPrice = activeProducts.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log("Produk aktif:", activeProducts);
console.log("Nama produk:", newArray);
console.log("Total harga:", totalPrice);