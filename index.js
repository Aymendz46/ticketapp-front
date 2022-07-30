let hide = document.querySelector("a.hide");
let filter = document.querySelector("a.filter");
let sidebar = document.querySelector(".side-menu");

hide.onclick = () => 
{
    sidebar.style.transform = "translateX(-800px)";
};

filter.onclick = () =>
{
    sidebar.style.transform = "translateX(0px)";
}