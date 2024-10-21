document.addEventListener('DOMContentLoaded', () => {
  const products = [
    { name: "Booster Box", price: "$120", img: "images/product1.jpg" },
    { name: "Trainer Box", price: "$50", img: "images/product2.jpg" },
    { name: "Graded Charizard", price: "$400", img: "images/product3.jpg" },
    { name: "Pikachu Pack", price: "$10", img: "images/product4.jpg" },
  ];

  const renderProducts = (containerId) => {
    const container = document.getElementById(containerId);
    products.forEach(product => {
      container.innerHTML += `
        <div class="col-md-3">
          <div class="card">
            <img src="${product.img}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.price}</p>
            </div>
          </div>
        </div>`;
    });
  };

  renderProducts('just-posted');
  renderProducts('trending-products');
});
