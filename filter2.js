document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");
    const allProducts = Array.from(productList.getElementsByClassName("product"));

    function applyFilters() {
      const categoryFilter = document.getElementById("category-filter").value;
      const typeFilter = document.getElementById("type-filter").value;
      const searchQuery = document.getElementById("search-box").value.toLowerCase();

      allProducts.forEach(product => {
        const category = product.dataset.category || "";
        const type = product.dataset.type || "";
        const name = product.querySelector("h2").textContent.toLowerCase(); // Search based on h2 content (alt)

        // Determine if the product matches the filters
        const matchesCategory = categoryFilter === "all" || category === categoryFilter;
        const matchesType = typeFilter === "all" || type === typeFilter;
        const matchesSearch = name.includes(searchQuery); // Search based on h2 content (alt)

        // Show or hide the product based on filters
        if (matchesCategory && matchesType && matchesSearch) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    }

    // Example product metadata (update your HTML accordingly)
    allProducts.forEach(product => {
      // Add dataset attributes for category and type
      if (product.dataset.id === "PHONE001" || product.dataset.id === "PHONE002") {
        product.dataset.category = "gadget";
        product.dataset.type = "smartphone";
      } else if (product.dataset.id === "PHONE003") {
        product.dataset.category = "gadget";
        product.dataset.type = "smartphone";
      } else if (product.dataset.id === "PHONE004") {
        product.dataset.category = "gadget";
        product.dataset.type = "smartphone";
      } else if (product.dataset.id === "PHONE005") {
        product.dataset.category = "gadget";
        product.dataset.type = "smartphone";
      } else if (product.dataset.id === "SMRTPHN01") {
        product.dataset.category = "gadget";
        product.dataset.type = "smartphone";
      }
    });

    window.applyFilters = applyFilters; // Expose function globally
});
