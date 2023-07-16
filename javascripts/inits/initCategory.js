const initCategory = async () => {
    // get category_card.html from directory
    const htmlCategory = await fetch(
        componentPath.atoms + "/category_card.html"
    ).then((data) => data.text());

    // initial category in index.html
    const categoryContainer = document.getElementById("category-container");

    // create new category elemet
    const newCategoryContainer = document.createElement("div");
    newCategoryContainer.setAttribute(
        "class",
        "px-2 py-5 grid grid-cols-4 gap-10"
    );

    // Iterate category list to display
    let prevEl = null;
    categoryList
        .map(async (cat, idx) => {
            const categoryCard = htmlToElement(htmlCategory);
            categoryCard.getElementById("category-card");
            categoryCard.getElementById("category-image").src = cat.img;
            categoryCard.getElementById("category-label").innerHTML = cat.label;
            await newCategoryContainer.insertBefore(
                categoryCard,
                prevEl ? newCategoryContainer.children[prevEl] : null
            );
            prevEl = idx;
        })
        .reverse();

    categoryContainer.replaceWith(newCategoryContainer);
};

initCategory();
