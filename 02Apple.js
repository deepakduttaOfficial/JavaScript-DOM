let items = document.querySelectorAll(".as-imagegrid-item a span");
let itemsArrary = [];
items.forEach((item) => {
  itemsArrary.push(item.innerText);
});
console.log(itemsArrary);
