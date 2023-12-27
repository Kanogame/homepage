import data from "../config/links.json" assert {type: 'json'};

function createNewTab(tabName) {
    const tab = document.createElement("div");
    const tabText = document.createElement("div");
    tabText.classList.add("path");
    tab.classList.add("section");
    tab.appendChild(tabText.appendChild(document.createTextNode(tabName)));
    return tab
}