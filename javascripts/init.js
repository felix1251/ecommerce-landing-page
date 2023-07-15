// we componentPath from constants.js

const initHeader = async () => {
    const htmlHeader = await fetch(
        componentPath.molecules + "/header.html"
    ).then((data) => data.text());

    document.getElementById("header").outerHTML = htmlHeader;
};

const initFooter = async () => {
    const htmlHeader = await fetch(
        componentPath.molecules + "/footer.html"
    ).then((data) => data.text());
    document.getElementById("footer").outerHTML = htmlHeader;
};

initHeader();
initFooter();
