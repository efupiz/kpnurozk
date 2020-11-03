// check for saved 'addMode' in localStorage
let addMode = localStorage.getItem("addMode");
var addModeid = document.getElementById("player");

const addModeToggle = document.querySelector("#add-mode-toggle");

const enableaddMode = () => {
    // 1. Add the class to the body
    addModeid.classList.add("addMode");
    // 2. Update darkMode in localStorage
    localStorage.setItem("addMode", "enabled");
};

const disableaddMode = () => {
    // 1. Remove the class from the body
    addModeid.classList.remove("addMode");
    // 2. Update addMode in localStorage
    localStorage.setItem("addMode", null);
};

// If the user already visited and enabled addMode
// start things off with it on
if (addMode === "enabled") {
    enableaddMode();
}

// When someone clicks the button
addModeToggle.addEventListener("click", () => {
    // get their addMode setting
    addMode = localStorage.getItem("addMode");

    // if it not current enabled, enable it
    if (addMode !== "enabled") {
        enableaddMode();
        // if it has been enabled, turn it off
    } else {
        disableaddMode();
    }
});
