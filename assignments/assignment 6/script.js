const showCat = () => {
    document.getElementById("hidden-cat").classList.remove("hidden");
}

const hideCat = () => {
    document.getElementById("hidden-cat").classList.add("hidden");
}

const animate = () => {
    document.getElementById("dancing-cat").classList.add("move");
}

const createDiv = () => {
    const name = document.getElementById("txt-product-name").value;
    const comment = document.getElementById("txt-comment").value;
    const rating = document.getElementById("txt-rating").value;
    const username = document.getElementById("txt-user-name").value;
    console.log(name + " " + comment + " " + rating + " " + username);

    const newDiv = document.createElement("div");

    newDiv.innerHTML = "<h1>" + name + "</h1>" + comment + "<br><br>" + rating + "/5 stars<br><br> by " + username;
    newDiv.classList.add("comment");
    document.getElementById("inputs").appendChild(newDiv);
};

window.onload = () => {
    document.getElementById("show").onclick = showCat;
    document.getElementById("hide").onclick = hideCat;
    document.getElementById("animate-button").onclick = animate;
    document.getElementById("submit-button").onclick = createDiv;
};