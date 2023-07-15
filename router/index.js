const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
};

const routes = {
    "/": "/pages/index.html",
    "/cart": "pages/cart.html",
    404: "pages/404.html",
};

const handleLocation = async (event) => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main").innerHTML = html;
};

window.route = route;
