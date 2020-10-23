//Global variable for starting page
var currentPageId = "page-home";
var currentSelectorId = "home";

//Function for getting the button ids
function getButtons() {
    //List of button ids
    var list = ["home", "feed", "create", "news", "account"];
    return list;
}

//Make sure the window is loaded before we add listeners
window.onload = function () {
    var pageIdList = getButtons();
    //Add an event listener to each button
    pageIdList.forEach(function (page) {
        document.getElementById(page).addEventListener("click", changePage, false);
    });
};

function changePage() {
    var currentSelector = document.getElementById(currentSelectorId);
    var currentPage = document.getElementById(currentPageId);
    var pageId = "page-" + this.id;
    var page = document.getElementById(pageId);
    var pageSelector = document.getElementById(this.id);

    if (page.classList.contains("active")) {
        return;
    }

    currentSelector.classList.remove("button-active");
    currentSelector.classList.add("button-inactive");
    currentPage.classList.remove("active");
    currentPage.classList.add("inactive");

    pageSelector.classList.remove("button-inactive");
    pageSelector.classList.add("button-active");

    page.classList.remove("inactive");
    page.classList.add("active");

    //Need to reset the scroll
    window.scrollTo(0, 0);

    currentSelectorId = this.id;
    currentPageId = pageId;
}

function myFunction1() {
    home.style.cssText = `border-top: 2px solid var(--text-card);`;
    feed.style.cssText = `border-top: none`;
    create.style.cssText = `border-top: none`;
    news.style.cssText = `border-top: none`;
    account.style.cssText = `border-top: none`;

    block1.style.cssText = `display:none !important;`;
    block2.style.cssText = `display:none !important;`;
    block3.style.cssText = `display:none !important;`;
    block4.style.cssText = `display:none !important;`;
    block5.style.cssText = `display:none !important;`;
    block6.style.cssText = `display:none !important;`;

    block7.style.cssText = `display:block !important;`;
    block8.style.cssText = `display:block !important;`;
}
function myFunction2() {
    feed.style.cssText = `border-top: 2px solid var(--text-card);`;
    home.style.cssText = `border-top: none`;
    create.style.cssText = `border-top: none`;
    news.style.cssText = `border-top: none`;
    account.style.cssText = `border-top: none`;

    block1.style.cssText = `display:block !important;`;
    block2.style.cssText = `display:block !important;`;
    block3.style.cssText = `display:block !important;`;
    block4.style.cssText = `display:block !important;`;
    block5.style.cssText = `display:block !important;`;
    block6.style.cssText = `display:block !important;`;
    block7.style.cssText = `display:none !important;`;
    block8.style.cssText = `display:block !important;`;
}

function myFunction3() {
    feed.style.cssText = `border-top: none`;
    home.style.cssText = `border-top: none`;
    create.style.cssText = `border-top: 2px solid var(--text-card);`;
    news.style.cssText = `border-top: none`;
    account.style.cssText = `border-top: none`;

    block1.style.cssText = `display:none !important;`;
    block2.style.cssText = `display:none !important;`;
    block3.style.cssText = `display:none !important;`;
    block4.style.cssText = `display:none !important;`;
    block5.style.cssText = `display:none !important;`;
    block6.style.cssText = `display:none !important;`;
    block7.style.cssText = `display:none !important;`;
    block8.style.cssText = `display:none !important;`;
}
function myFunction4() {
    feed.style.cssText = `border-top: none`;
    home.style.cssText = `border-top: none`;
    create.style.cssText = `border-top: none`;
    news.style.cssText = `border-top: 2px solid var(--text-card);`;
    account.style.cssText = `border-top: none`;

    block1.style.cssText = `display:none !important;`;
    block2.style.cssText = `display:none !important;`;
    block3.style.cssText = `display:none !important;`;
    block4.style.cssText = `display:none !important;`;
    block5.style.cssText = `display:none !important;`;
    block6.style.cssText = `display:none !important;`;
    block7.style.cssText = `display:none !important;`;
    block8.style.cssText = `display:none !important;`;
}
function myFunction5() {
    feed.style.cssText = `border-top: none`;
    home.style.cssText = `border-top: none`;
    create.style.cssText = `border-top: none`;
    news.style.cssText = `border-top: none`;
    account.style.cssText = `border-top: 2px solid var(--text-card);`;

    block1.style.cssText = `display:none !important;`;
    block2.style.cssText = `display:none !important;`;
    block3.style.cssText = `display:none !important;`;
    block4.style.cssText = `display:none !important;`;
    block5.style.cssText = `display:none !important;`;
    block6.style.cssText = `display:none !important;`;
    block7.style.cssText = `display:none !important;`;
    block8.style.cssText = `display:none !important;`;
}

function block() {
    block1.style.cssText = `display:none !important;`;
    block2.style.cssText = `display:none !important;`;
    block3.style.cssText = `display:none !important;`;
    block4.style.cssText = `display:none !important;`;
    block5.style.cssText = `display:none !important;`;
    block6.style.cssText = `display:none !important;`;
    block7.style.cssText = `display:none !important;`;
    block8.style.cssText = `display:none !important;`;
}
