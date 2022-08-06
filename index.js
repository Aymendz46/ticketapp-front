const classes = [
    '.hamburger',
    '.close',
    '.links',
    '.login',
    'header',
];

let d = document.querySelectorAll(classes);
let logo = document.querySelector("header svg path");

/* sidebar vars */
let hide = document.querySelector("a.hide");
let filter = document.querySelector("a.filter");
let sidebar = document.querySelector(".side-menu");
let profile = document.querySelector(".dropdown")
let arrow = document.querySelector(".arrow-down")


/* hamburger menu */
d[2].onclick = () =>
{
    if (d[3].classList[1] == 'active')
    {
        d.forEach(el => el.classList.toggle('active'));
        //header.style.background = "#203354";
        //logo.style.fill = "#fff";
    }
    else
    {
        d.forEach(el => el.classList.toggle('active'));
        //header.style.background = "#fff";
        //logo.style.fill = "#203354";
    }
} 

d[1].onclick = () =>
{
    if (d[3].classList[1] == 'active')
    {
        d.forEach(el => el.classList.toggle('active'));
    }
    else
    {
        d.forEach(el => el.classList.toggle('active'));
    }
} 

/* sidebar */

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