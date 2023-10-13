const toggleNav = () => {
    document.getElementById("nav-in-nav-b").classList.toggle("hide");
}

window.onload = () => {
    document.getElementById("burger").onclick = toggleNav;
}