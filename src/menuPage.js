
import { createElementWithText, createMenuItem, createBoldItalicText } from "./helperFunc";

const createMenuPage = function () {

    
    const contentDiv = document.querySelector("div#content");
    
    //Create Title/Header
    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("id", "title");
    createElementWithText("h1", "~~ Menu ~~", titleDiv);

    contentDiv.appendChild(titleDiv);
    

    //Create Menu
    let menu = document.createElement("div");
    menu.setAttribute("id", "menuGrid");

    //Entree
    let mainMenu = document.createElement("div");
    mainMenu.setAttribute("id", "mainMenu");
    mainMenu.classList.add("card");
    createBoldItalicText("Entrees", mainMenu);
    createMenuItem("Steak", "$50.00", mainMenu);
    createMenuItem("Spaghetti", "$20.00", mainMenu);
    createMenuItem("Hamburger", "$20.00", mainMenu);
    createMenuItem("Soup", "$15.00", mainMenu);
    createMenuItem("Meatloaf", "$25.00", mainMenu);
    createMenuItem("Ribs", "$35.00", mainMenu);
    createMenuItem("Fish 'N Chips", "$25.00", mainMenu);
    createMenuItem("Pizza", "$20.00", mainMenu);
    menu.appendChild(mainMenu);

    //Sides
    let sideMenu = document.createElement("div");
    sideMenu.setAttribute("id", "sideMenu");
    sideMenu.classList.add("card");
    createBoldItalicText("Sides", sideMenu);
    createMenuItem("French Fries", "$10.00", sideMenu);
    createMenuItem("Macaroni&Cheese", "$10.00", sideMenu);
    createMenuItem("Salad", "$7.00", sideMenu);
    createMenuItem("Chicken Wings", "$15.00", sideMenu);
    menu.appendChild(sideMenu);

    //Drinks
    let drinkMenu = document.createElement("div");
    drinkMenu.setAttribute("id", "drinkMenu");
    drinkMenu.classList.add("card");
    createBoldItalicText("Drinks", drinkMenu);
    createMenuItem("Coke", "$5.00", drinkMenu);
    createMenuItem("Juice", "$4.00", drinkMenu);
    createMenuItem("Beer", "$7.00", drinkMenu);
    createMenuItem("Cocktail", "$10.00", drinkMenu);
    menu.appendChild(drinkMenu);

    contentDiv.appendChild(menu);

    //Create Footer
    let footerDiv = document.createElement("div");
    footerDiv.setAttribute("id", "footer");
    createElementWithText("p", "~~Restaurant Name~~", footerDiv);
    createElementWithText("p", "Cool bottom text", footerDiv);
    createElementWithText("p", "More cool bottom text", footerDiv);

    contentDiv.appendChild(footerDiv);
    

};

export { createMenuPage };