const searchIcon = document.getElementById("searchIcon")
const searchText = document.getElementById("searchText")

// Search Icon Event Listner
searchIcon.addEventListener('click', () => {
    if (searchText.style.display === "") {
        searchText.style.display = "block";
    }
    else {
        searchText.style.display = "";
    }
})

const menu = document.getElementById("menu")
const fixedBar = document.getElementById("fixed")

// Menu Icon Event Listner
menu.addEventListener('click', () => {
    if (fixedBar.style.display === "") {
        fixedBar.style.display = "flex";
    } else {
        fixedBar.style.display = "";
    }
})