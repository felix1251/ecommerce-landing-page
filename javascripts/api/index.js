async function showCartFromApi() {
    const cartDropdownHolder = document.getElementById("cart-dropdown-holder");
    const cartCheckOutSection = document.getElementById("cart-checkout");

    if (cartDropdownHolder.classList.contains("hidden")) {
        cartDropdownHolder.classList.remove("hidden");
    } else {
        cartDropdownHolder.classList.add("hidden");
        return;
    }

    cartCheckOutSection.classList.remove("hidden");

    const response = await fetch("/api/cart");
    const carts = await response.json();

    const cartDropdownEl = await fetch(
        componentPath.atoms + "/cart_dropdown.html"
    ).then((data) => data.text());

    const cartDropdown = document.getElementById("cart-dropdown-main");

    // create new bought list element
    const newCartDropDownEl = document.createElement("div");
    newCartDropDownEl.setAttribute("class", "divide-y flex-col gap-3 w-full");
    newCartDropDownEl.setAttribute("id", "cart-dropdown-main");
    newCartDropDownEl.innerHTML = "";

    let prevEl = null;
    let total = 0;
    await carts.map(async (cart, index) => {
        const newElement = htmlToElement(cartDropdownEl);
        newElement.getElementById("item-image").src = cart.img;
        newElement.getElementById("item-title").innerHTML = cart.title;
        newElement.getElementById("item-category").innerHTML = cart.category;
        newElement.getElementById("item-size").innerHTML = "Size: " + cart.size;
        newElement.getElementById("item-color").innerHTML =
            "Color: " + cart.color;
        newElement.getElementById("item-qty").innerHTML = "Qty: " + cart.qty;
        newElement.getElementById("item-price").innerHTML = cart.price + " lei";

        await newCartDropDownEl.insertBefore(
            newElement,
            prevEl ? newCartDropDownEl.children[prevEl] : null
        );
        prevEl = index;
        total = total + cart.price;
    });

    document.getElementById(
        "cart-item-count"
    ).innerHTML = `My Bag (${carts.length})`;
    document.getElementById("cart-total-price").innerHTML = `${total.toFixed(
        2
    )} lei`;

    cartDropdown.replaceWith(newCartDropDownEl);
}
