/* This is how a normal function looks
const loadFunction = () => {
    
}
*/

const changeText = () => {
    const helloP = document.getElementById("date");
    helloP.innerHTML = "Hi to you danai";
    helloP.classList.add("special");
}

const showJasper = () => {
    document.getElementById("jasper").classList.remove("hide");
}

const hideJasper = () => {
    document.getElementById("jasper").classList.add("hide");
}

/* Anonymous Function - executes when the html page is loaded */
window.onload = () => {
    // get button, tie function to clicking
    document.getElementById("button-click").onclick = changeText;
    /* Could also have been written as:
    document.getElementById("button-click").onclick = changeText = () => {
        const helloP = document.getElementById("date");
        helloP.innerHTML = "Hi";
    }
    but that is ugly. */

    document.getElementById("button-show").onclick = showJasper;
    document.getElementById("button-hide").onclick = hideJasper;
};

