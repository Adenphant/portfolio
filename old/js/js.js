const topnav = document.getElementById('topnav');

topnav.addEventListener("click", function () {
    let elmn = document.getElementById("top");
    elmn.scrollIntoView({
        behavior: "smooth"
    });
});

const work = document.getElementById('worknav');

work.addEventListener("click", function () {
    let elmnt = document.getElementById("work");
    elmnt.scrollIntoView({
        behavior: "smooth"
    });
});

const cont = document.getElementById('contactnav');

cont.addEventListener("click", function () {
    let elmnte = document.getElementById("contact");
    elmnte.scrollIntoView({
        behavior: "smooth"
    });
});