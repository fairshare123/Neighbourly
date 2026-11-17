/* =========================================================
   NEIGHBOURLY - SHARED UI CODE
   Small functions that every page uses.
   ========================================================= */

// Turn 25000 into "₩25,000"
function formatPrice(listing) {
  if (listing.priceType === "free") {
    return '<span class="badge badge-free">FREE</span>';
  }
  const amount = "₩" + listing.price.toLocaleString("en-US");
  const unit = listing.priceUnit ? ` <span class="unit">/ ${listing.priceUnit}</span>` : "";
  return amount + unit;
}

// Build the HTML for one listing card
function createListingCard(listing) {
  const category = CATEGORIES[listing.category];

  return `
    <a href="listing.html?id=${listing.id}" class="listing-card">
      <div class="listing-photo">
        <img src="${listing.image}" alt="${listing.title}" loading="lazy"
             onerror="this.outerHTML='<div class=&quot;photo-fallback&quot;>${category.icon}</div>'">
        <span class="category-pill">${category.icon} ${category.name}</span>
      </div>
      <div class="listing-body">
        <div class="listing-price">${formatPrice(listing)}</div>
        <h3 class="listing-title">${listing.title}</h3>
        <div class="listing-meta">
          <span>📍 ${listing.neighborhood}</span>
          <span class="rating">★ ${listing.owner.rating.toFixed(1)}</span>
        </div>
      </div>
    </a>
  `;
}

// Mobile menu: open and close the menu when ☰ is clicked
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuBtn.textContent = isOpen ? "✕" : "☰";
  });
}