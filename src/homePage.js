
import foodImage from "./rachel-park-hrlvr2ZlUNk-unsplash.jpg"


function createElementWithText(element, text, parent) {
    let temp = document.createElement(element);
    temp.textContent = text;
    parent.appendChild(temp);
}

const createHomepage = function () {
    const contentDiv = document.querySelector("div#content");

    //Create Title/Header
    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("id", "title");
    createElementWithText("h1", "~~Restaurant Name~~", titleDiv);

    contentDiv.appendChild(titleDiv);

    //Create Image
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("id", "homeImage");
    let image = document.createElement("img");
    image.src = foodImage;
    image.alt = "Food Picture by Rachel Park on Unsplash";
    imageDiv.appendChild(image);

    contentDiv.appendChild(imageDiv);
    
    //Create Content Cards
    let contentCardsDiv = document.createElement("div");
    contentCardsDiv.setAttribute("id", "contentCards");

    //Create About Card
    let aboutDiv = document.createElement("div");
    aboutDiv.setAttribute("id", "about");
    aboutDiv.classList.add("card");
    let tempText = "This is my really cool restaurant. This restaurant serves really good food. What kind of food does this restaurant serve? I HAVE NO IDEA. But the food is good. Trust. Pick and choose whichever item you want to try and get it for an affordable price.";
    createElementWithText("p", tempText, aboutDiv);
    contentCardsDiv.appendChild(aboutDiv);

    //Create Schedule Card
    let scheduleDiv = document.createElement("div");
    scheduleDiv.setAttribute("id", "schedule");
    scheduleDiv.classList.add("card");
    let ulist = document.createElement("ul");
    createElementWithText("li", "Mon: 11am-9pm", ulist);
    createElementWithText("li", "Tue: 11am-9pm", ulist);
    createElementWithText("li", "Wed: 11am-7pm", ulist);
    createElementWithText("li", "Thu: 11am-9pm", ulist);
    createElementWithText("li", "Fri: 11am-9pm", ulist);
    createElementWithText("li", "Sat: 12pm-11pm", ulist);
    createElementWithText("li", "Sun: 12pm-11pm", ulist);
    scheduleDiv.appendChild(ulist);
    contentCardsDiv.appendChild(scheduleDiv);

    contentDiv.appendChild(contentCardsDiv);

    //Create Footer
    let footerDiv = document.createElement("div");
    footerDiv.setAttribute("id", "footer");
    createElementWithText("p", "~~Restaurant Name~~", footerDiv);
    createElementWithText("p", "Cool bottom text", footerDiv);
    createElementWithText("p", "More cool bottom text", footerDiv);

    contentDiv.appendChild(footerDiv);
}

export {createHomepage};