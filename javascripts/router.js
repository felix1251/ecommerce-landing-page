/* 1. Use this function to every <a> tag to handle routing
 * Ex. <a href="/" onclick="route()"></a>.
 * 2. This will avoid realoding page every link clicked.
 */
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    if (window.location.href != event.target.href) {
        window.history.pushState({}, "", event.target.href);
        handleLocation();
    }
};

/* 1. Change main tag content every route
 * 2. This will allow us to navigating page without rendering again the header
 * and footer components evert
 */
const handleLocation = async () => {
    const path = window.location.pathname;
    const routePath = routes[path] || routes[404];
    const html = await fetch(routePath).then((data) => data.text());
    document.getElementById("main").outerHTML = html;
};

const goTo = (path) => {
    if (window.location.pathname != path) {
        window.history.pushState({}, "", path);
        handleLocation();
    }
    const cartDropdownHolder = document.getElementById("cart-dropdown-holder");
    cartDropdownHolder.classList.add("hidden");
};

// handle when browser back and prev buttons are clicked
window.onpopstate = handleLocation;
window.route = route;

// run on first load
handleLocation();
