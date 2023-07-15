console.log("js started");

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": "./pages/home.html",
    "/cart": "./pages/cart.html",
    404: "./pages/404.html",
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const routePath = routes[path] || routes[404];
    const html = await fetch(routePath).then((data) => data.text());
    document.getElementById("main").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
