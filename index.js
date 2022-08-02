let hide = document.querySelector("a.hide");
let filter = document.querySelector("a.filter");
let sidebar = document.querySelector(".side-menu");
let profile = document.querySelector(".dropdown")
let arrow = document.querySelector(".arrow-down")

hide.onclick = () => 
{
    if(sidebar.classList[1] == 'hide')
    {
        sidebar.classList.toggle('hide');
        sidebar.classList.toggle('show');
    }

    else
    {
        sidebar.classList.toggle('hide');
        sidebar.classList.toggle('show');
    }
};

filter.onclick = () =>
{
    if(sidebar.classList[1] == 'show')
    {
        sidebar.classList.toggle('hide');
        sidebar.classList.toggle('show');
    }

    else
    {
        sidebar.classList.toggle('hide');
        sidebar.classList.toggle('show');
    }
}

arrow.onclick = () =>
{
    if (profile.classList[1] == 'hide')
    {
        profile.classList.toggle('drop');
        profile.classList.toggle('hide');
    }

    else {
        profile.classList.toggle('drop');
        profile.classList.toggle('hide');
    }
}