const params = new URL(window.location).searchParams;
console.log(params.get("id"));



async function main() {
    const response = await fetch("http://localhost:3000/api/products/" + params.get("id"));
    const articles = await response.json();
    // console.log('articles', articles);


    //Create and get image for product page
    const productImage = document.createElement("img")
    document.querySelector(".item__img").appendChild(productImage);
    productImage.src = articles.imageUrl;
    productImage.alt = articles.altTxt;

    // Get title for product page
    const productTitle = document.getElementById("title");
    productTitle.innerText = articles.name;

    // Get price for product page
    const productPrice = document.getElementById("price");
    productPrice.innerText = articles.price;

    // Get description for product page
    const productDescription = document.getElementById("description")
    productDescription.innerText = articles.description;


    // Color choice
    const selectColor = document.getElementById("colors");
    for (let color of articles.colors) {
        console.log(color);

        const option = document.createElement("option")
        option.innerText = color;
        selectColor.append(option);
    }

    // Number of articles
    const quantity = document.getElementById("quantity");

    // Get button addToCart
    const buttonAddToCart = document.getElementById("addToCart");

    // Add product to the cart
    buttonAddToCart.addEventListener('click', function (event) {
        // console.log(event);
        // console.log(articles);

        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        // console.log(cart);


        let itemsInTheCart = null;

        for (let item of cart) {
            if (item.id === articles._id || item.color === selectColor.value) {
                itemsInTheCart = item;
            }
        }

        if (itemsInTheCart === null) {
            itemsInTheCart = {
                id: articles._id,
                color: selectColor.value,
                quantity: 0
            }
            cart.push(itemsInTheCart);
        }



        itemsInTheCart.quantity += parseInt(quantity.value);
        console.log(cart, itemsInTheCart);

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(localStorage.getItem('cart'));
        console.table(cart);
    })
}
main();