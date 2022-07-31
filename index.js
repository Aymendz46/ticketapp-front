let hide = document.querySelector("a.hide");
let filter = document.querySelector("a.filter");
let sidebar = document.querySelector(".side-menu");
let profile = document.querySelector(".dropdown")
let arrow = document.querySelector(".arrow-down")

hide.onclick = () => 
{
    if(sidebar.classList[1] == 'hide')
        sidebar.classList.toggle = 'hide';

    else
        sidebar.classList.toggle = 'show';
};

filter.onclick = () =>
{
    sidebar.style.transform = "translateX(0px)";
}

arrow.onclick = () =>
{
    if (profile.classList[1] == 'hide')
    {
        profile.classList.toggle('drop');
    }

    else {
        profile.classList.toggle('drop');
    }
}