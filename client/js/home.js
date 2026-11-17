/* =========================================================
   NEIGHBOURLY - HOME PAGE
   Shows the featured listings on the home page.
   ========================================================= */

// 1. Find the empty box in index.html where the cards should go
const featuredGrid = document.getElementById("featuredGrid");

// 2. Keep only the listings marked as featured
const featuredListings = LISTINGS.filter(listing => listing.featured);

// 3. Turn each listing into card HTML, join them together, and put them in the box
featuredGrid.innerHTML = featuredListings.map(createListingCard).join("");