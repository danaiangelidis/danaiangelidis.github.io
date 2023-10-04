const showEx1 = () => {
    document.getElementById("assignments").classList.remove("hide");
    document.getElementById("assign-tab").classList.add("underline");
    document.getElementById("project").classList.add("hide");
    document.getElementById("proj-tab").classList.remove("underline");

};

const showEx2 = () => {
    document.getElementById("assignments").classList.add("hide");
    document.getElementById("assign-tab").classList.remove("underline");
    document.getElementById("project").classList.remove("hide");
    document.getElementById("proj-tab").classList.add("underline");
};

window.onload = () => {
    document.getElementById("assign-tab").onclick = showEx1;
    document.getElementById("proj-tab").onclick = showEx2;
};