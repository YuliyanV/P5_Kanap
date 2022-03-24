const templateArticles = document.getElementById("article");
// console.log("templateArticles", templateArticles);

const productItems = document.getElementById("items");
// console.log("item", productItems);




async function main() {

    const response = await fetch("http://localhost:3000/api/products");
    const articles = await response.json();
    // console.log('articles', articles);


    for (let article of articles) {
        console.log(article);
        const articleElement = templateArticles.content.cloneNode(true);
        console.log(articleElement);
        articleElement.querySelector(".image").src = article.imageUrl;
        articleElement.querySelector(".productName").innerText = article.name;
        articleElement.querySelector(".productDescription").innerText = article.name;
        articleElement.querySelector(".article-link").href = "./product.html?id=" + article._id;
        productItems.append(articleElement);
    }
}
main();