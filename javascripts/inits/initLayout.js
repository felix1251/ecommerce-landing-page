// This function initialized and load header content via changing the header component with the id="header"
const initHeader = async () => {
    const htmlHeader = await fetch(
        componentPath.molecules + "/header.html"
    ).then((data) => data.text());

    const toElement = htmlToElement(htmlHeader);
    document.getElementById("header").replaceWith(toElement);
};

// This function initialized and load footer content via changing the footer component with the id="footer"
const initFooter = async () => {
    const htmlFooter = await fetch(
        componentPath.molecules + "/footer.html"
    ).then((data) => data.text());

    const toElement = htmlToElement(htmlFooter);
    document.getElementById("footer").replaceWith(toElement);
};

// This function initialized and load promotion content via changing the promotion component with the id="promotions"
const initPromotions = async () => {
    const htmlPromotions = await fetch(
        componentPath.molecules + "/promotions.html"
    ).then((data) => data.text());

    const toElement = htmlToElement(htmlPromotions);
    document.getElementById("promotions").replaceWith(toElement);
};

// load the functions at first start
initHeader();
initPromotions();
initFooter();
