const run = () => {
    document.getElementById("man").src="running.png";
    move();
}

const move = () => {
    document.getElementById("man").classList.add("move");
}

const thermometerGradient = () => {
    document.getElementById("thermometer").classList.remove("gradient");
    const grade = document.getElementById("txt-funds-raised").value;
    const root = document.querySelector(":root");
    const percentRaised = (grade/10000)*100;
    root.style.setProperty("--num", percentRaised+"%");
    document.getElementById("thermometer").classList.add("gradient");
}

window.onload = () => {
    document.getElementById("man").onclick = run;
    document.getElementById("display-button").onclick = thermometerGradient;
};