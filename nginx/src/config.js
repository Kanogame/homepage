import data from "../config/links.json" assert {type: 'json'};
const tabList = data.tabs;

const tabsEl = document.createElement("div");
tabsEl.classList.add("activities");
tabsEl.style.display = "none";

for (const tab of tabList) {
    const tabEl = createNewTab(tab.name);
    for (const link of tab.links) {
        const linkEl = createNewLink(link.name, link.link);
        tabEl.appendChild(linkEl); 
    }
    tabsEl.appendChild(tabEl);
}

document.getElementById("activ").appendChild(tabsEl);

function createNewLink(linkText, link) {
    const linkEl = document.createElement("a");
    linkEl.classList.add("el");
    linkEl.href = link; //hope no xss
    linkEl.appendChild(document.createTextNode(linkText));
    return linkEl
}

function createNewTab(tabName) {
    const tab = document.createElement("div");
    const tabText = document.createElement("div");
    tabText.classList.add("path");
    tab.classList.add("section");
    tabText.appendChild(document.createTextNode(tabName));
    tab.appendChild(tabText);
    return tab
}