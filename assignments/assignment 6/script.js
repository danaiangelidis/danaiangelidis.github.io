const showCat = () => {
    document.getElementById("hidden-cat").classList.remove("hidden");
}

const hideCat = () => {
    document.getElementById("hidden-cat").classList.add("hidden");
}

const animate = () => {
    document.getElementById("dancing-cat").classList.add("move");
}

window.onload = () => {
    document.getElementById("show").onclick = showCat;
    document.getElementById("hide").onclick = hideCat;
    document.getElementById("animate-button").onclick = animate;
};