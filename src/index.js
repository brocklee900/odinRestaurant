import "./styles.css";
import { createHomePage } from "./homePage.js";
import { createMenuPage } from "./menuPage.js";
import { createContactPage } from "./contactPage.js";



createHomePage();
const contentDiv = document.querySelector("#content");

//Homebutton
document.querySelector("#homebtn").addEventListener("click", function (e) {
    while (contentDiv.lastElementChild) {
        contentDiv.removeChild(contentDiv.lastElementChild);
    };

    createHomePage();
});

//Menubutton
document.querySelector("#menubtn").addEventListener("click", function (e) {
    while (contentDiv.lastElementChild) {
        contentDiv.removeChild(contentDiv.lastElementChild);
    };

    createMenuPage();
})

//Contactbutton
document.querySelector("#contactbtn").addEventListener("click", function (e) {
    while (contentDiv.lastElementChild) {
        contentDiv.removeChild(contentDiv.lastElementChild);
    };

    createContactPage();
})