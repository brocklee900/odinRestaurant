
import { createElementWithText } from "./helperFunc";

const createContactPage = function () {

    const contentDiv = document.querySelector("div#content");

    
    //Create Title/Header
    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("id", "title");
    createElementWithText("h1", "~~ Contact ~~", titleDiv);

    contentDiv.appendChild(titleDiv);

    //Create Contacts
    let contactDiv = document.createElement("div");
    contactDiv.setAttribute("id", "contacts");
    contactDiv.classList.add("card");
    createElementWithText("p", "012-345-6789", contactDiv);
    createElementWithText("p", "restaurantEmail@email.com", contactDiv);
    createElementWithText("p", "restaurant address, city, state, zip", contactDiv);
    createElementWithText("p", "--------------------------", contactDiv);
    createElementWithText("p", "WE DO NOT DO TAKE OUT.", contactDiv);
    createElementWithText("p", "Check out the homepage for our hours!", contactDiv);
    createElementWithText("p", "Give us a call with any questions!", contactDiv);

    contentDiv.appendChild(contactDiv);
    
    //Create Footer
    let footerDiv = document.createElement("div");
    footerDiv.setAttribute("id", "footer");
    createElementWithText("p", "~~Restaurant Name~~", footerDiv);
    createElementWithText("p", "Cool bottom text", footerDiv);
    createElementWithText("p", "More cool bottom text", footerDiv);

    contentDiv.appendChild(footerDiv);
    

};

export{ createContactPage };