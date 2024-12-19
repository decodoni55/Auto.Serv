
javascript

// Пример данных о продуктах
const products = [
  { id: 1, name: "Product 1", price: 29.99, image: "https://via.placeholder.com/200" },
  { id: 2, name: "Product 2", price: 49.99, image: "https://via.placeholder.com/200" },
  { id: 3, name: "Product 3", price: 19.99, image: "https://via.placeholder.com/200" },
  { id: 4, name: "Product 4", price: 99.99, image: "https://via.placeholder.com/200" },
];

// Корзина
let cart = [];

// Обновление корзины
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartCount.textContent = cart.length;

  // Очистить текущую корзину
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach((item) => {
    const product = products.find((p) => p.id === item.id);
    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
      <p>${product.name} x ${item.quantity} = $${itemTotal.toFixed(2)}</p>
    `;
    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = total.toFixed(2);
}

// Добавление товара в корзину
function addToCart(productId) {
  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }
  updateCart();
}

// Создание карточек продуктов
function renderProducts() {
  const productList = document.getElementById("product-list");

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productCard);
  });
}

// Модальное окно корзины
document.getElementById("cart-button").addEventListener("click", () => {
  document.getElementById("cart-modal").classList.remove("hidden");
});

document.getElementById("close-cart").addEventListener("click", () => {
  document.getElementById("cart-modal").classList.add("hidden");
});

// Инициализация
renderProducts();
updateCart();


document.querySelector("#top > div.home.home-car-repair > div > div")