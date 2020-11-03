// check for saved 'addMode' in localStorage
let addNews = localStorage.getItem("addNews");
var addNewsid = document.getElementById("news");

const addNewsToggle = document.querySelector("#add-news-toggle");

const enableaddNews = () => {
    // 1. Add the class to the body
    addNewsid.classList.add("addMode");
    // 2. Update darkMode in localStorage
    localStorage.setItem("addNews", "enabled");
};

const disableaddNews = () => {
    // 1. Remove the class from the body
    addNewsid.classList.remove("addMode");
    // 2. Update addMode in localStorage
    localStorage.setItem("addNews", null);
};

// If the user already visited and enabled addMode
// start things off with it on
if (addNews === "enabled") {
    enableaddNews();
}

// When someone clicks the button
addNewsToggle.addEventListener("click", () => {
    // get their addMode setting
    addNews = localStorage.getItem("addNews");

    // if it not current enabled, enable it
    if (addNews !== "enabled") {
        enableaddNews();
        // if it has been enabled, turn it off
    } else {
        disableaddNews();
    }
});
