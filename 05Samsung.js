// Change all button Text
const products = document.querySelectorAll(".diwali-deals-product-sale-pro");
products.forEach((product) => {
  product.children[1].innerHTML = "Check out";
});
