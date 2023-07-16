const initBoughtList = async () => {
    // get category_card.html from directory
    const htmlProduct = await fetch(
        componentPath.atoms + "/product_card.html"
    ).then((data) => data.text());

    // initial bought list in index.html
    const boughtListContainer = document.getElementById("recently-bought");

    // create new bought list element
    const newBoughtListContainer = document.createElement("div");
    newBoughtListContainer.setAttribute(
        "class",
        "w-full place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10"
    );

    // Iterate bought list to display
    let prevEl = null;
    recentlyBoughtList
        .map(async (cat, idx) => {
            const productCard = htmlToElement(htmlProduct);
            productCard.getElementById("product-image").src = cat.img;
            productCard.getElementById("product-title").innerHTML = cat.title;
            if (cat.discount) {
                productCard.getElementById("product-price-1").innerHTML =
                    cat.discount;
                productCard.getElementById("product-price-2").innerHTML =
                    cat.price;
            } else {
                productCard.getElementById("product-price-1").remove();
                productCard.getElementById("product-price-2").innerHTML =
                    cat.price;
            }

            // create button element via DOM
            const newButton = document.createElement("button");
            newButton.setAttribute(
                "class",
                "bg-black py-1.4 px-3 text-white font-medium hover:scale-[1.02] h-fit"
            );
            newButton.innerHTML = "Buy";
            productCard.getElementById("product-extra").replaceWith(newButton);

            await newBoughtListContainer.insertBefore(
                productCard,
                prevEl ? newBoughtListContainer.children[prevEl] : null
            );
            prevEl = idx;
        })
        .reverse();

    boughtListContainer.replaceWith(newBoughtListContainer);
};

if (window.location.pathname === "/") {
    initBoughtList();
}
