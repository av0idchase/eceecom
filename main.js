document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { name: "Booster Box 1", price: "$120", img: "images/product1.jpg" },
    { name: "Booster Pack 2", price: "$4", img: "images/product2.jpg" },
    { name: "Graded Card 3", price: "$45", img: "images/product3.jpg" },
  ];

  const renderProducts = (containerId, items) => {
    const container = document.getElementById(containerId);
    items.forEach(item => {
      const product = `
        <div class="col-md-4">
          <div class="card mb-4">
            <img src="${item.img}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.price}</p>
            </div>
          </div>
        </div>`;
      container.innerHTML += product;
    });
  };

  renderProducts('just-posted', products);
  renderProducts('trending-products', products);
  renderProducts('sale-products', products);
});
