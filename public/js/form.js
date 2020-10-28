const selected = document.querySelector(".selected");
const selected1 = document.querySelector(".selected1");
const selected2 = document.querySelector(".selected2");
const selected3 = document.querySelector(".selected3");
const selected4 = document.querySelector(".selected4");
const selected5 = document.querySelector(".selected5");
const selected6 = document.querySelector(".selected6");

const optionsContainer = document.querySelector(".options-container");
const optionsContainer1 = document.querySelector(".options-container1");
const optionsContainer2 = document.querySelector(".options-container2");
const optionsContainer3 = document.querySelector(".options-container3");
const optionsContainer4 = document.querySelector(".options-container4");
const optionsContainer5 = document.querySelector(".options-container5");
const optionsContainer6 = document.querySelector(".options-container6");

const enable_form1 = document.querySelector(".enable-form1");
const enable_form2 = document.querySelector(".enable-form2");

const optionsList = document.querySelectorAll(".option");
const optionsList1 = document.querySelectorAll(".option1");
const optionsList2 = document.querySelectorAll(".option2");
const optionsList3 = document.querySelectorAll(".option3");
const optionsList4 = document.querySelectorAll(".option4");
const optionsList5 = document.querySelectorAll(".option5");
const optionsList6 = document.querySelectorAll(".option6");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});
selected1.addEventListener("click", () => {
    optionsContainer1.classList.toggle("active");
});
selected2.addEventListener("click", () => {
    optionsContainer2.classList.toggle("active");
});
selected3.addEventListener("click", () => {
    optionsContainer3.classList.toggle("active");
});

optionsList.forEach((o) => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});
optionsList1.forEach((o) => {
    o.addEventListener("click", () => {
        selected1.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer1.classList.remove("active");
    });
});
optionsList2.forEach((o) => {
    o.addEventListener("click", () => {
        selected2.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer2.classList.remove("active");
    });
});
optionsList3.forEach((o) => {
    o.addEventListener("click", () => {
        selected3.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer3.classList.remove("active");
    });
});
