function htmlToElement(html) {
    var t = document.createElement("template");
    t.innerHTML = html;
    return t.content;
}
