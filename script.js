const products = [
  {
    "id": "p1",
    "name": "Fiber Optic Cable",
    "category": "telecom",
    "tag": "Telecom",
    "description": "Outdoor fiber cable for backbone and access network projects.",
    "price": 120,
    "image": "images/Fiber Optic Cable.jpg",
    "title": "fiber optic cable outdoor fiber cable for backbone and access network projects. cable reel"
  },
  {
    "id": "p2",
    "name": "ODF Cabinet",
    "category": "telecom",
    "tag": "Telecom",
    "description": "Optical distribution frame for fiber termination and management.",
    "price": 260,
    "image": "images/ODF Cabinet.jpg",
    "title": "odf cabinet optical distribution frame for fiber termination and management. odf cabinet"
  },
  {
    "id": "p3",
    "name": "FTTH Distribution Box",
    "category": "telecom",
    "tag": "Telecom",
    "description": "Wall-mounted box for last-mile customer fiber distribution.",
    "price": 48,
    "image": "images/FTTH Distribution Box.jpg",
    "title": "ftth distribution box wall-mounted box for last-mile customer fiber distribution. ftth box"
  },
  {
    "id": "p4",
    "name": "Fiber Patch Cord",
    "category": "telecom",
    "tag": "Telecom",
    "description": "Single-mode patch cord for ODF, rack, and FTTH connections.",
    "price": 10,
    "image": "images/Fiber Patch Cord.jpg",
    "title": "fiber patch cord single-mode patch cord for odf, rack, and ftth connections. patch cord"
  },
  {
    "id": "p5",
    "name": "Fiber Splice Closure",
    "category": "telecom",
    "tag": "Telecom",
    "description": "Waterproof closure for outdoor fiber cable joints.",
    "price": 85,
    "image": "images/Fiber Splice Closure.jpg",
    "title": "fiber splice closure waterproof closure for outdoor fiber cable joints. splice closure"
  },
  {
    "id": "p6",
    "name": "Telecom Manhole",
    "category": "civil",
    "tag": "Civil Work",
    "description": "Heavy-duty telecom manhole for underground network routes.",
    "price": 430,
    "image": "images/Telecom Manhole.jpg",
    "title": "telecom manhole heavy-duty telecom manhole for underground network routes. manhole"
  },
  {
    "id": "p7",
    "name": "HDPE Duct",
    "category": "civil",
    "tag": "Civil Work",
    "description": "Underground duct for fiber cable protection and routing.",
    "price": 75,
    "image": "images/HDPE Duct.jpg",
    "title": "hdpe duct underground duct for fiber cable protection and routing. hdpe duct"
  },
  {
    "id": "p8",
    "name": "Steel Mounting Pole",
    "category": "civil",
    "tag": "Civil Work",
    "description": "Galvanized pole for telecom and outdoor equipment mounting.",
    "price": 260,
    "image": "images/Steel Mounting Pole.jpg",
    "title": "steel mounting pole galvanized pole for telecom and outdoor equipment mounting. steel pole"
  },
  {
    "id": "p9",
    "name": "Concrete Base Kit",
    "category": "civil",
    "tag": "Civil Work",
    "description": "Concrete foundation base for poles, cabinets, and civil work.",
    "price": 350,
    "image": "images/Concrete Base Kit.jpg",
    "title": "concrete base kit concrete foundation base for poles, cabinets, and civil work. concrete base"
  },
  {
    "id": "p10",
    "name": "Cable Warning Tape",
    "category": "civil",
    "tag": "Civil Work",
    "description": "Underground warning tape for fiber and telecom routes.",
    "price": 18,
    "image": "images/Cable Warning Tape.jpg",
    "title": "cable warning tape underground warning tape for fiber and telecom routes. warning tape"
  },
  {
    "id": "p11",
    "name": "Fiber Splicing Kit",
    "category": "tools",
    "tag": "Tools",
    "description": "Complete toolkit for fiber cable preparation and installation.",
    "price": 180,
    "image": "images/Fiber Splicing Kit.jpg",
    "title": "fiber splicing kit complete toolkit for fiber cable preparation and installation. splicing kit"
  },
  {
    "id": "p12",
    "name": "Fusion Splicer",
    "category": "tools",
    "tag": "Tools",
    "description": "Professional machine for accurate fiber optic splicing.",
    "price": 1450,
    "image": "images/Fusion Splicer.jpg",
    "title": "fusion splicer professional machine for accurate fiber optic splicing. fusion splicer"
  },
  {
    "id": "p13",
    "name": "Fiber Cleaver",
    "category": "tools",
    "tag": "Tools",
    "description": "High-precision cleaver for fiber cable preparation.",
    "price": 220,
    "image": "images/Fiber Cleaver.jpg",
    "title": "fiber cleaver high-precision cleaver for fiber cable preparation. fiber cleaver"
  },
  {
    "id": "p14",
    "name": "Cable Stripper",
    "category": "tools",
    "tag": "Tools",
    "description": "Tool for removing fiber and copper cable jackets.",
    "price": 18,
    "image": "images/Cable Stripper.jpg",
    "title": "cable stripper tool for removing fiber and copper cable jackets. cable stripper"
  },
  {
    "id": "p15",
    "name": "Crimping Tool",
    "category": "tools",
    "tag": "Tools",
    "description": "Network crimper for RJ45 and telecom connectors.",
    "price": 24,
    "image": "images/Crimping Tool.png",
    "title": "crimping tool network crimper for rj45 and telecom connectors. crimping tool"
  },
  {
    "id": "p16",
    "name": "PPE Safety Kit",
    "category": "safety",
    "tag": "Safety",
    "description": "Helmet, gloves, vest, safety shoes, and field protection items.",
    "price": 95,
    "image": "images/PPE Safety Kit.jpg",
    "title": "ppe safety kit helmet, gloves, vest, safety shoes, and field protection items. ppe kit"
  },
  {
    "id": "p17",
    "name": "Safety Helmet",
    "category": "safety",
    "tag": "Safety",
    "description": "Impact-resistant helmet for telecom field work.",
    "price": 18,
    "image": "images/Safety Helmet.jpg",
    "title": "safety helmet impact-resistant helmet for telecom field work. safety helmet"
  },
  {
    "id": "p18",
    "name": "Safety Harness",
    "category": "safety",
    "tag": "Safety",
    "description": "Full body harness for tower and height work.",
    "price": 75,
    "image": "images/Safety Harness.jpg",
    "title": "safety harness full body harness for tower and height work. safety harness"
  },
  {
    "id": "p19",
    "name": "Safety Gloves",
    "category": "safety",
    "tag": "Safety",
    "description": "Protective gloves for cable, civil, and field operations.",
    "price": 9,
    "image": "images/Safety Gloves.jpg",
    "title": "safety gloves protective gloves for cable, civil, and field operations. safety gloves"
  },
  {
    "id": "p20",
    "name": "Traffic Cone",
    "category": "safety",
    "tag": "Safety",
    "description": "Road safety cone for telecom installation and civil work sites.",
    "price": 16,
    "image": "images/Traffic Cone.jpg",
    "title": "traffic cone road safety cone for telecom installation and civil work sites. traffic cone"
  },
  {
    "id": "p21",
    "name": "OTDR Tester",
    "category": "testing",
    "tag": "Testing",
    "description": "Optical time-domain reflectometer for fiber network testing.",
    "price": 850,
    "image": "images/OTDR Tester.jpg",
    "title": "otdr tester optical time-domain reflectometer for fiber network testing. otdr tester"
  },
  {
    "id": "p22",
    "name": "Optical Power Meter",
    "category": "testing",
    "tag": "Testing",
    "description": "Power meter for fiber signal measurement and verification.",
    "price": 120,
    "image": "images/Optical Power Meter.jpg",
    "title": "optical power meter power meter for fiber signal measurement and verification. power meter"
  },
  {
    "id": "p23",
    "name": "Visual Fault Locator",
    "category": "testing",
    "tag": "Testing",
    "description": "Red light fiber fault locator for field troubleshooting.",
    "price": 35,
    "image": "images/Visual Fault Locator.jpg",
    "title": "visual fault locator red light fiber fault locator for field troubleshooting. fault locator"
  },
  {
    "id": "p24",
    "name": "Network Cable Tester",
    "category": "testing",
    "tag": "Testing",
    "description": "Tester for RJ45 network cable continuity checks.",
    "price": 25,
    "image": "images/Network Cable Tester.jpg",
    "title": "network cable tester tester for rj45 network cable continuity checks. cable tester"
  },
  {
    "id": "p25",
    "name": "Digital Multimeter",
    "category": "testing",
    "tag": "Testing",
    "description": "Electrical measurement device for telecom field teams.",
    "price": 45,
    "image": "images/Digital Multimeter.jpg",
    "title": "digital multimeter electrical measurement device for telecom field teams. multimeter"
  },
  {
    "id": "p26",
    "name": "Electrical Cable Roll",
    "category": "electrical",
    "tag": "Electrical",
    "description": "Power cable roll for telecom cabinets, panels, and site electrical work.",
    "price": 140,
    "image": "images/Electrical Cable Roll.jpg",
    "title": "electrical cable roll power cable roll for telecom cabinets, panels, and site electrical work. power cable"
  },
  {
    "id": "p27",
    "name": "Copper Cable Lugs",
    "category": "electrical",
    "tag": "Electrical",
    "description": "Copper lugs for cable termination, grounding, and power connections.",
    "price": 22,
    "image": "images/Copper Cable Lugs.jpg",
    "title": "copper cable lugs copper lugs for cable termination, grounding, and power connections. cable lugs"
  },
  {
    "id": "p28",
    "name": "Grounding Cable",
    "category": "electrical",
    "tag": "Electrical",
    "description": "Copper grounding cable for telecom sites, cabinets, and towers.",
    "price": 65,
    "image": "images/Grounding Cable.jpg",
    "title": "grounding cable copper grounding cable for telecom sites, cabinets, and towers. ground cable"
  },
  {
    "id": "p29",
    "name": "Circuit Breaker",
    "category": "electrical",
    "tag": "Electrical",
    "description": "Electrical protection breaker for telecom power panels and cabinets.",
    "price": 38,
    "image": "images/Circuit Breaker.jpg",
    "title": "circuit breaker electrical protection breaker for telecom power panels and cabinets. breaker"
  },
  {
    "id": "p30",
    "name": "Cable Glands Pack",
    "category": "electrical",
    "tag": "Electrical",
    "description": "Cable glands for secure cable entry into panels and enclosures.",
    "price": 18,
    "image": "images/Cable Glands Pack.jpg",
    "title": "cable glands pack cable glands for secure cable entry into panels and enclosures. cable glands"
  }
];

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const productGrid = document.getElementById("productGrid");
const cartCount = document.getElementById("cartCount");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const paginationControls = document.getElementById("paginationControls");
const pageNumbers = document.getElementById("pageNumbers");
const prevPageBtn = document.getElementById("prevPageBtn");
const nextPageBtn = document.getElementById("nextPageBtn");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutNote = document.getElementById("checkoutNote");

let cart = JSON.parse(localStorage.getItem("telecomSupplyCart")) || [];
let currentPage = 1;
let currentFilteredProducts = [...products];

function getProductsPerPage() {
  if (window.innerWidth <= 768) {
    return 4;
  }

  return 6;
}

function saveCart() {
  localStorage.setItem("telecomSupplyCart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  if (cartCount) {
    cartCount.textContent = totalItems;
  }
}

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
}

function renderProducts(productList = products) {
  if (!productGrid) return;

  currentFilteredProducts = productList;

  const productsPerPage = getProductsPerPage();
  const totalPages = Math.max(1, Math.ceil(productList.length / productsPerPage));

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const pageProducts = productList.slice(startIndex, endIndex);

  productGrid.innerHTML = pageProducts.map((product) => `
    <article class="product-card" data-category="${product.category}" data-title="${product.title}">
      <div class="product-img" style="background-image: url('${product.image}');"></div>
      <div class="product-info">
        <span class="product-tag">${product.tag}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>

        <div class="product-purchase">
          <div class="product-qty-row">
            <label for="qty-${product.id}">Quantity</label>
            <input id="qty-${product.id}" class="product-qty" type="number" min="1" value="1" />
          </div>

          <div class="product-bottom">
            <strong>$${product.price}</strong>
            <button class="add-cart-btn" data-id="${product.id}">Add to Cart</button>
          </div>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".add-cart-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.id;
      const qtyInput = document.getElementById(`qty-${productId}`);
      const quantity = Math.max(1, Number(qtyInput.value) || 1);

      addToCart(productId, quantity);

      button.textContent = "Added";
      button.classList.add("added");

      setTimeout(() => {
        button.textContent = "Add to Cart";
        button.classList.remove("added");
      }, 1200);
    });
  });

  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  if (!paginationControls || !pageNumbers || !prevPageBtn || !nextPageBtn) return;

  if (totalPages <= 1) {
    paginationControls.style.display = "none";
    return;
  }

  paginationControls.style.display = "flex";

  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === totalPages;

  pageNumbers.innerHTML = "";

  for (let page = 1; page <= totalPages; page += 1) {
    const pageBtn = document.createElement("button");
    pageBtn.className = page === currentPage ? "page-number active" : "page-number";
    pageBtn.textContent = page;

    pageBtn.addEventListener("click", () => {
      currentPage = page;
      renderProducts(currentFilteredProducts);
      scrollToProductsTop();
    });

    pageNumbers.appendChild(pageBtn);
  }
}

function scrollToProductsTop() {
  const productsSection = document.getElementById("products");

  if (productsSection) {
    productsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}

if (prevPageBtn) {
  prevPageBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage -= 1;
      renderProducts(currentFilteredProducts);
      scrollToProductsTop();
    }
  });
}

if (nextPageBtn) {
  nextPageBtn.addEventListener("click", () => {
    const totalPages = Math.max(1, Math.ceil(currentFilteredProducts.length / getProductsPerPage()));

    if (currentPage < totalPages) {
      currentPage += 1;
      renderProducts(currentFilteredProducts);
      scrollToProductsTop();
    }
  });
}

window.addEventListener("resize", () => {
  if (productGrid) {
    currentPage = 1;
    renderProducts(currentFilteredProducts);
  }
});

function getActiveCategory() {
  const activeButton = document.querySelector(".filter-btn.active");
  return activeButton ? activeButton.dataset.category : "all";
}

function filterProducts() {
  if (!productGrid) return;

  const activeCategory = getActiveCategory();
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" ||
      product.category === activeCategory;

    const matchesSearch =
      product.title.includes(searchTerm) ||
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  currentPage = 1;
  renderProducts(filteredProducts);
  scrollToProductsTop();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    filterProducts();
  });
});

if (searchInput) {
  searchInput.addEventListener("input", filterProducts);
}

function addToCart(productId, quantity = 1) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  saveCart();
}

function changeQuantity(productId, action) {
  const item = cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;

  if (action === "increase") {
    item.quantity += 1;
  }

  if (action === "decrease") {
    item.quantity -= 1;
  }

  cart = cart.filter((cartItem) => cartItem.quantity > 0);
  saveCart();
  renderCartPage();
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCartPage();
}

function calculateTotals() {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? 35 : 0;
  const tax = subtotal * 0.10;
  const total = subtotal + shipping + tax;

  return { subtotal, shipping, tax, total };
}

function renderCartPage() {
  if (!cartItemsContainer) return;

  const subtotalPrice = document.getElementById("subtotalPrice");
  const shippingPrice = document.getElementById("shippingPrice");
  const taxPrice = document.getElementById("taxPrice");
  const totalPrice = document.getElementById("totalPrice");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart">
        <h3>Your cart is empty</h3>
        <p>No telecom supply products have been added yet.</p>
        <a href="index.html#products" class="btn btn-primary">Continue Shopping</a>
      </div>
    `;
  } else {
    cartItemsContainer.innerHTML = cart.map((item) => `
      <div class="cart-item">
        <div class="cart-item-img" style="background-image: url('${item.image}');"></div>

        <div>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="cart-item-price">Unit Price: $${item.price.toFixed(2)}</div>
          <div class="cart-item-line-total">Line Total: $${(item.price * item.quantity).toFixed(2)}</div>
        </div>

        <div class="cart-actions">
          <div class="quantity-control">
            <button class="quantity-btn" onclick="changeQuantity('${item.id}', 'decrease')">-</button>
            <strong>${item.quantity}</strong>
            <button class="quantity-btn" onclick="changeQuantity('${item.id}', 'increase')">+</button>
          </div>
          <button class="remove-item-btn" onclick="removeFromCart('${item.id}')">Remove</button>
        </div>
      </div>
    `).join("");
  }

  const totals = calculateTotals();

  if (subtotalPrice) subtotalPrice.textContent = `$${totals.subtotal.toFixed(2)}`;
  if (shippingPrice) shippingPrice.textContent = `$${totals.shipping.toFixed(2)}`;
  if (taxPrice) taxPrice.textContent = `$${totals.tax.toFixed(2)}`;
  if (totalPrice) totalPrice.textContent = `$${totals.total.toFixed(2)}`;
}

if (clearCartBtn) {
  clearCartBtn.addEventListener("click", () => {
    cart = [];
    saveCart();
    renderCartPage();
  });
}

if (checkoutForm) {
  checkoutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      checkoutNote.textContent = "Please add products to your cart before placing an order.";
      checkoutNote.style.color = "#b91c1c";
      return;
    }

    checkoutNote.textContent = "Order submitted successfully. Our supply team will contact you shortly.";
    checkoutNote.style.color = "#16a34a";

    cart = [];
    saveCart();
    renderCartPage();
    checkoutForm.reset();
  });
}

renderProducts();
renderCartPage();
updateCartCount();
