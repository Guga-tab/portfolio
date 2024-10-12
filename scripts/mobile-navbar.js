const btn = document.querySelector("#btn-responsive")
const navList = document.querySelector(".nav-list")

btn.addEventListener("click", () => {
    navList.classList.toggle("flex");
});