async function showCartFromApi() {
    const cartDropdown = document.getElementById("cart-dropdown");

    if (cartDropdown.classList.contains("hidden")) {
        cartDropdown.classList.remove("hidden");
        cartDropdown.classList.add("flex");
    } else {
        cartDropdown.classList.add("hidden");
        return;
    }

    const response = await fetch("/api/cart");
    const carts = await response.json();

    const cartDropdownEl = await fetch(
        componentPath.atoms + "/cart_dropdown.html"
    ).then((data) => data.text());

    // create new bought list element
    const newCartDropDownEl = document.createElement("div");
    newCartDropDownEl.setAttribute(
        "class",
        "absolute px-4 right-0 z-10 w-80 bg-white border shadow-sm divide-y flex flex-col gap-3"
    );
    newCartDropDownEl.setAttribute("id", "cart-dropdown");

    let prevEl = null;
    carts.map(async (cart, index) => {
        const newElement = htmlToElement(cartDropdownEl);
        newElement.getElementById("item-image").src = cart.img;
        newElement.getElementById("item-title").innerHTML = cart.title;
        newElement.getElementById("item-category").innerHTML = cart.category;
        newElement.getElementById("item-size").innerHTML = "Size: " + cart.size;
        newElement.getElementById("item-color").innerHTML =
            "Color: " + cart.color;
        newElement.getElementById("item-qty").innerHTML = "Qty: " + cart.qty;
        newElement.getElementById("item-price").innerHTML = cart.price;

        await newCartDropDownEl.insertBefore(
            newElement,
            prevEl ? newCartDropDownEl.children[prevEl] : null
        );
        prevEl = index;
    });

    cartDropdown.replaceWith(newCartDropDownEl);
}
