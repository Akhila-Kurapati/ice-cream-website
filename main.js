var t1 = gsap.timeline({
    scrollTrigger:{
        trigger: "#s1",
        start: "0% 80%",
        end: "50% 50%",
        markers: true,
        scrub: true,
    }
})

var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: "#s2",
        start: "0% 80%",
        end: "50% 50%",
        markers: true,
        scrub: true,
    }
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#s3",
        start: "0% 80%",
        end: "50% 50%",
        markers: true,
        scrub: true,
    }
})

t1.to(".hero-center-image",{
  top: "123%",
  left: "53%",
  width: "17vw",
  rotate: "0",
})

tl1.to(".hero-center-image",{
  top: "210%",
  left: "27%",
  width: "11vw",
  rotate: "0",
})

tl2.to(".hero-center-image",{
  top: "270%",
  left: "29%",
  width: "19vw",
  rotate: "-54deg",
})
function openModal(type) {
  document.getElementById(type + 'Modal').style.display = 'flex';
}

function closeModal(type) {
  document.getElementById(type + 'Modal').style.display = 'none';
}

function switchModal(current, target) {
  closeModal(current);
  openModal(target);
}

function login() {
  let user = document.getElementById('loginUser').value;
  let pass = document.getElementById('loginPass').value;
  alert("Logged in as: " + user);
  closeModal('login');
}

function register() {
  let user = document.getElementById('regUser').value;
  let email = document.getElementById('regEmail').value;
  let pass = document.getElementById('regPass').value;
  alert("Registered user: " + user + " (" + email + ")");
  closeModal('register');
}
/* Cart Modal */
let cart = [];
let total = 0;

// Add item to cart
function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  cart.forEach((item, index) => {
    cartItems.innerHTML += `
      <li>
        ${item.name} - ₹${item.price}
        <button onclick="removeItem(${index})">Remove</button>
      </li>
    `;
  });
  document.getElementById('cartTotal').innerText = "Total: ₹" + total;
}

// Remove item
function removeItem(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

// Open/Close Cart
function openCart() {
  document.getElementById('cartModal').style.display = 'flex';
}
function closeCart() {
  document.getElementById('cartModal').style.display = 'none';
}

// Checkout (dummy)
function checkout() {
  alert("Thank you for your purchase of ₹" + total);
  cart = [];
  total = 0;
  updateCart();
  closeCart();
}