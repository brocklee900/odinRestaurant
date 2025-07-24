
const createElementWithText = function(element, text, parent) {
    let temp = document.createElement(element);
    temp.textContent = text;
    parent.appendChild(temp);
}

const createMenuItem = function(itemText, priceText, parent) {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menuItem");
    let item = document.createElement("div");
    item.textContent = itemText;
    item.classList.add("item");
    let price = document.createElement("div");
    price.textContent = priceText;
    price.classList.add("price");
    menuItem.appendChild(item);
    menuItem.appendChild(price);
    parent.appendChild(menuItem);
}

const createBoldItalicText = function(text, parent) {
    let title = document.createElement("h1");
    let b = document.createElement("b");
    let em = document.createElement("em");
    em.textContent = text;

    b.appendChild(em);
    title.appendChild(b);
    parent.appendChild(title);
}

export {createElementWithText, createMenuItem, createBoldItalicText};