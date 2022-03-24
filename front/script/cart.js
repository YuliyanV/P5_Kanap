const cartItemTemplate = document.getElementById("cart__items__template");
// console.log("cartItemTemplate", cartItemTemplate);

const cartItemSection = document.getElementById("cart__items");
// console.log("cartItemSection", cartItemSection);




async function main() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(cart);

    let totalPrice = 0;
    let totalQuantity = 0;

    for (let cartItem of cart) {
        const response = await fetch("http://localhost:3000/api/products/" + cartItem.id);
        const item = await response.json();
        console.log(item);




        const articleElement = cartItemTemplate.content.cloneNode(true);
        console.log("articleElement", articleElement);

        articleElement.querySelector(".cart__item__img img").src = item.imageUrl;
        articleElement.querySelector(".cart__item__content__name").innerText = item.name;
        articleElement.querySelector(".cart__item__content__price").innerText = item.price;
        articleElement.querySelector(".cart__item__content__color").innerText = cartItem.color;
        articleElement.querySelector(".itemQuantity").value = cartItem.quantity;


        // addEventListener -> "Change"

        cartItemSection.append(articleElement);

        totalQuantity += cartItem.quantity;
        totalPrice += item.price * cartItem.quantity;
    }

    document.querySelector("#totalQuantity").innerText = totalQuantity;
    document.querySelector("#totalPrice").innerText = totalPrice;

    console.log(totalQuantity);
}
main();