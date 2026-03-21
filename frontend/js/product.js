// ADD PRODUCT
async function addProduct() {
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;

  if (!name || !price) {
    alert("All fields required");
    return;
  }

  try {
    await apiRequest("/products", "POST", {
      name,
      price
    });

    alert("Product Added");

  } catch (err) {
    alert(err.message);
  }
}

// LOAD PRODUCTS
async function loadProducts() {
  try {
    const data = await apiRequest("/products");

    let container = document.getElementById("productList");
    container.innerHTML = "";

    data.products.forEach(p => {
      container.innerHTML += `
        <div>
          <h3>${p.name}</h3>
          <p>₹${p.price}</p>
        </div>
      `;
    });

  } catch (err) {
    console.log(err);
  }
}