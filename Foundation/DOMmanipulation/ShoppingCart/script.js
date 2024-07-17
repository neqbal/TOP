const cartList = document.querySelector("ul");
const itemToPutInCart = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    var item = itemToPutInCart.value;
    itemToPutInCart.value = '';

    const li = document.createElement('li');
    const span = document.createElement("span");
    const del = document.createElement("button");

    span.textContent = item;
    del.textContent = 'Delete';

    li.appendChild(span);
    li.appendChild(del);
    
    cartList.appendChild(li);

    del.addEventListener("click", function (e) {
        cartList.removeChild(this.parentNode);
    });
} );
