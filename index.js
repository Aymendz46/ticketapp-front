let hide = document.querySelector("a.hide");
let filter = document.querySelector("a.filter");
let sidebar = document.querySelector(".side-menu");
let profile = document.querySelector(".dropdown")
let arrow = document.querySelector(".arrow-down")

hide.onclick = () => 
{
    sidebar.style.transform = "translateX(-800px)";
};

filter.onclick = () =>
{
    sidebar.style.transform = "translateX(0px)";
}

arrow.onclick = () =>
{
    profile.style.height = "220px";
    profile.style.display = "flex";
}