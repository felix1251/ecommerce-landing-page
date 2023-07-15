const initHeader = async () => {
    const htmlHeader = await fetch("../components/molecules/header.html").then(
        (data) => data.text()
    );
    document.getElementById("header").outerHTML = htmlHeader;
};

// const initFooter = async () => {
//     const htmlHeader = await fetch("../components/molecules/header.html").then(
//         (data) => data.text()
//     );
//     document.getElementById("header").outerHTML = htmlHeader;
// };

initHeader();
// initFooter();
