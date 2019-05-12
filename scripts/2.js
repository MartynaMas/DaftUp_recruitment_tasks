const modal = document.querySelector(".modal");
const btnOpen = document.querySelector(".button--open");
const btnClose = document.querySelector(".button--close");

btnOpen.addEventListener('click', function () {
    modal.classList.remove("modal--active")
});

btnClose.addEventListener('click', function () {
    modal.classList.add("modal--active")
});