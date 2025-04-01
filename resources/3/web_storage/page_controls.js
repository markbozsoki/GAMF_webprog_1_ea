let reload_page_button = document.getElementById("reloadPageButton");
reload_page_button.addEventListener("click", () => {
    location.reload();
});

let duplicate_page_button = document.getElementById("duplicatePageButton");
duplicate_page_button.addEventListener("click", () => {
    window.open(location.href).focus();
});

let close_page_button = document.getElementById("closePageButton");
close_page_button.addEventListener("click", () => {
    window.close();
});