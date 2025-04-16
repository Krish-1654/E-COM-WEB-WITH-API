// const productRow = document.querySelector("#productRow")
const totalPriceList = document.querySelector("#totalprice");

// console.log(productRow);

function showcart() {
  const products = JSON.parse(localStorage.getItem("cart")) || [];

  let result = "";

  if (products == "") {
    result += `
            <div class="col-lg-12 mb-4 text-center">
                    
            <p class="text-danger text-uppercase h4 mt-4">nothing in cart</p>

            <a class="text-decoration-none h4 btn btn-outline-info text-uppercase fw-bold mt-4" href="index.html">buy now</a>
                   
                  </div>
            `;
    productRow.innerHTML = result;
  } else {
    products.map((items, index) => {
      // price = items.price

      result += `
            <div class="col-lg-3 col-md-6 mb-4">
                    <div class="card shadow-sm">
                      <img src="${items.image}" class="card-img-top p-5" alt="...">
                      <div class="card-body">
                        <p class="card-title h5 text-truncate">${items.title}</p>
                        <p class="card-text text-truncate">${items.description}</p>
                        <p class="card-text text-truncate">Price : $${items.price}</p>
                        <p class="card-text text-truncate">Rating : ${items.rating.rate}</p>
                        <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                         <div class="d-flex justify-content-between align-items-center">
                          <label class="fw-bold text-uppercase">remove :</label>
                          <button class="btn btn-outline-danger text-uppercase rounded-pill" onclick="remove(${index})">Remove</button>
                         </div>
                      </div>
                    </div>
                  </div>
            `;
      productRow.innerHTML = result;
    });
  }
}

showcart();

function remove(id) {
  const products = JSON.parse(localStorage.getItem("cart")) || [];

  products.splice(id, 1);

  localStorage.setItem("cart", JSON.stringify(products));
  alert("Product removed from cart");
  location.reload();
}

function totalPrice() {
  const products = JSON.parse(localStorage.getItem("cart")) || [];

  const pricelist = [];
  products.map((items) => {
    pricelist.push(items.price);
  });
  const totalValue = 0;
  const pricecheck = pricelist.reduce(
    (total, current) => total + current,totalValue
  )
  const finalprice = Math.floor(pricecheck)  

  // const pricelist = [price * products.length]
  totalPriceList.innerHTML =`$ ${finalprice} /-`
}
totalPrice();
