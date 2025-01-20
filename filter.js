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
      const name = product.querySelector("h2").textContent.toLowerCase();

      // Determine if the product matches the filters
      const matchesCategory = categoryFilter === "all" || category === categoryFilter;
      const matchesType = typeFilter === "all" || type === typeFilter;
      const matchesSearch = name.includes(searchQuery);

      // Show or hide the product based on filters
      if (matchesCategory && matchesType && matchesSearch) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  window.applyFilters = applyFilters; // Expose function globally
});
