const productRow = document.querySelector("#productRow");
const cartTotal = document.querySelector("#cartCount");
const loader = document.querySelector(".loader");

const url = "https://fakestoreapi.com/products";

async function show() {
  try {
    const res = await fetch(url);
    data = await res.json();

    let result = "";

    data.map((items, index) => {
      loader.style.display = "none";

      result += `
            <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card shadow-sm">
                      <img src="${items.image}" class="card-img-top p-5" alt="...">
                      <div class="card-body">
                        <p class="card-title h5 text-truncate">${items.title}</p>
                        <p class="card-text text-truncate">${items.description}</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                         <div class="d-flex justify-content-between align-items-center">
                          <label class="fw-bold text-uppercase">Buy now</label>
                          <button class="btn btn-outline-primary text-uppercase rounded-pill" onclick="addcart(${index})">$${items.price}</button>
                         </div>
                      </div>
                    </div>
                  </div>
            `;
      productRow.innerHTML = result;
    });
  } catch (error) {
    console.log(error);
  }
}
show();

// cart count function
function cartCount() {
    const products = JSON.parse(localStorage.getItem("cart")) || [];
    if (products == "") {
        cartTotal.style.display = "none"
    } else {
        const cartCountTotal = products.length;
    cartTotal.innerHTML = cartCountTotal;
    cartTotal.style.display = "block";
    }
  }
  cartCount();

// set data for cart in localStorage function code

function addcart(id) {
  try {
    const products = JSON.parse(localStorage.getItem("cart")) || [];

    products.push(data[id]);

    localStorage.setItem("cart", JSON.stringify(products));
    alert(`${data[id].title} has been added to cart`);
    cartCount()
    
  } catch (error) {
    console.log(error);
  }
}
