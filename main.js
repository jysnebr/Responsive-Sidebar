const light = document.querySelector(".light");
const night = document.querySelector(".night");
const dark = document.querySelector(".dark");
const sidebarContaider = document.querySelector(".sidebar-container");
const item = document.querySelectorAll(".item-text");
const welcome = document.querySelector(".welcome-text");
const itembtn = document.querySelector(".item");

light.addEventListener("click", () => {
    sidebarContaider.className = "sidebar-container sidebar-light";
    welcome.className = "welcome-text item-text-light";
    for (let i = 0; i <= item.length; i++) {
        let items = item[i];
        items.className = "item-text item-text-light";
    }
});

night.addEventListener("click", () => {
    sidebarContaider.className = "sidebar-container sidebar-night";
    welcome.className = "welcome-text item-text-night";
    for (let i = 0; i <= item.length; i++) {
        let items = item[i];
        items.className = "item-text item-text-night";
    }
});

dark.addEventListener("click", () => {
    sidebarContaider.className = "sidebar-container sidebar-dark";
    welcome.className = "welcome-text item-text-dark";
    for (let i = 0; i <= item.length; i++) {
        let items = item[i];
        items.className = "item-text item-text-dark";
    }
    
});
