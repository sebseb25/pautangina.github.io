document.addEventListener("DOMContentLoaded", function() {
    const productList = document.getElementById("product-list");

    // Function to apply filters based on category, type, and search query
    function applyFilters() {
      const categoryFilter = document.getElementById("category-filter").value;
      const typeFilter = document.getElementById("type-filter").value;
      const searchQuery = document.getElementById("search-box").value.toLowerCase();

      // Loop through each product and apply the filters
      const allProducts = Array.from(productList.getElementsByClassName("product"));

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

    // Listen for filter changes
    document.getElementById("category-filter").addEventListener("change", applyFilters);
    document.getElementById("type-filter").addEventListener("change", applyFilters);
    document.getElementById("search-box").addEventListener("input", applyFilters);

    window.applyFilters = applyFilters; // Expose function globally

});
