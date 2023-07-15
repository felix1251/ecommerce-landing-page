const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    if (window.location.href != event.target.href) {
        window.history.pushState({}, "", event.target.href);
        handleLocation();
    }
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
