// This function initialized and load header content via changing the header component with the id="header"
const initHeader = async () => {
    const htmlHeader = await fetch(
        componentPath.molecules + "/header.html"
    ).then((data) => data.text());

    document.getElementById("header").outerHTML = htmlHeader;
};

// This function initialized and load footer content via changing the footer component with the id="footer"
const initFooter = async () => {
    const htmlHeader = await fetch(
        componentPath.molecules + "/footer.html"
    ).then((data) => data.text());
    document.getElementById("footer").outerHTML = htmlHeader;
};

initHeader();
initFooter();
