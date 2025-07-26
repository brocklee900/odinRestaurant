import "./styles.css";
import { createHomePage } from "./homePage.js";
import { createMenuPage } from "./menuPage.js";
import { createContactPage } from "./contactPage.js";
import { updateButtons } from "./helperFunc.js";



createHomePage();
const contentDiv = document.querySelector("#content");

const buttons = [document.querySelector("#homebtn"), document.querySelector("#menubtn"), document.querySelector("#contactbtn")];
let activebtn = 0;

//Homebutton
buttons[0].addEventListener("click", function (e) {
    while (contentDiv.lastElementChild) {
        contentDiv.removeChild(contentDiv.lastElementChild);
    };

    createHomePage();

    activebtn = updateButtons(0, activebtn, buttons);
});

//Menubutton
buttons[1].addEventListener("click", function (e) {
    while (contentDiv.lastElementChild) {
        contentDiv.removeChild(contentDiv.lastElementChild);
    };

    createMenuPage();

    activebtn = updateButtons(1, activebtn, buttons);
})

//Contactbutton
buttons[2].addEventListener("click", function (e) {
    while (contentDiv.lastElementChild) {
        contentDiv.removeChild(contentDiv.lastElementChild);
    };

    createContactPage();

    activebtn = updateButtons(2, activebtn, buttons);
})