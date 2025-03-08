const API_URL = "https://5lppfbmctk.execute-api.ap-southeast-2.amazonaws.com/dev/products";

async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();
        
        const productList = document.getElementById("product-list");
        productList.innerHTML = ""; // Clear existing data

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.ImageURL}" alt="${product.Name}" style="width:850px; height:600px; ">
                <h3>${product.Name}</h3>
                <p>${product.Description}</p>
                <p><strong>₹${product.Price.toLocaleString()}</strong></p>
                <button class="add-to-cart" data-id="${product.ProductID}">Add to Cart</button>
            `;
            productList.appendChild(productCard);
        });

        // Add event listeners to "Add to Cart" buttons
        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", addToCart);
        });
        document.getElementById("viewCartBtn").addEventListener("click", function () {
            document.getElementById("cart-list").scrollIntoView({ behavior: "smooth" });
        });
        
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// Cart functionality
let cart = [];

function addToCart(event) {
    const productId = event.target.dataset.id;
    const productName = event.target.parentElement.querySelector("h3").textContent;
    
    cart.push({ id: productId, name: productName });
    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    
    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(cartItem);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Load products when page loads
document.addEventListener("DOMContentLoaded", fetchProducts);
