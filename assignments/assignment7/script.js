const toggleNav = () => {
    document.getElementById("nav-items").classList.toggle("hide");
};

const showEx1 = () => {
    document.getElementById("exercise-1").classList.remove("hide");
    document.getElementById("ex1-button").classList.add("underline");
    document.getElementById("exercise-2").classList.add("hide");
    document.getElementById("ex2-button").classList.remove("underline");

};

const compareAges = () => {
    const nameOne = document.getElementById("txt-name-one").value;
    const ageOne = parseInt(document.getElementById("txt-age-one").value);
    const nameTwo = document.getElementById("txt-name-two").value;
    const ageTwo = parseInt(document.getElementById("txt-age-two").value);
    const nameThree = document.getElementById("txt-name-three").value;
    const ageThree = parseInt(document.getElementById("txt-age-three").value);

    const error = document.getElementById("error");
    const comparison = document.getElementById("comparison");

    error.classList.add("hide");
    comparison.classList.add("hide");

    if (nameOne && nameTwo && nameThree && ageOne && ageTwo && ageThree) {
        comparison.classList.remove("hide");
        if ((ageOne > ageTwo) && (ageTwo > ageThree)) {
            comparison.innerHTML = `${nameOne}, ${nameTwo}, ${nameThree}`;
        } else if ((ageOne > ageThree) && (ageThree > ageTwo)) {
            comparison.innerHTML = `${nameOne}, ${nameThree}, ${nameTwo}`;
        } else if ((ageTwo > ageThree) && (ageThree > ageOne)) {
            comparison.innerHTML = `${nameTwo}, ${nameThree}, ${nameOne}`;
        } else if ((ageTwo > ageOne) && (ageOne > ageThree)) {
            comparison.innerHTML = `${nameTwo}, ${nameOne}, ${nameThree}`;
        } else if ((ageThree > ageTwo) && (ageTwo > ageOne)) {
            comparison.innerHTML = `${nameThree}, ${nameTwo}, ${nameOne}`;
        } else if ((ageThree > ageOne) && (ageOne > ageTwo)) {
            comparison.innerHTML = `${nameThree}, ${nameOne}, ${nameTwo}`;
        }
    } else {
        error.classList.remove("hide");
        error.innerHTML = "* Not a valid input";
    }
};

const showEx2 = () => {
    document.getElementById("exercise-1").classList.add("hide");
    document.getElementById("ex1-button").classList.remove("underline");
    document.getElementById("exercise-2").classList.remove("hide");
    document.getElementById("ex2-button").classList.add("underline");
};

const thermometerGradient = () => {
    document.getElementById("thermometer").classList.remove("gradient");
    const grade = parseFloat(document.getElementById("txt-funds-raised").value);
    const root = document.querySelector(":root");
    const percentRaised = (grade/10000)*100;

    if (percentRaised < 25) {
        root.style.setProperty("--num", 0+"%");
    } else if (percentRaised >= 25 && percentRaised < 50) {
        root.style.setProperty("--num", 25+"%");
    } else if (percentRaised >= 50 && percentRaised < 75) {
        root.style.setProperty("--num", 50+"%");
    } else if (percentRaised >= 75 && percentRaised < 100) {
        root.style.setProperty("--num", 75+"%");
    } else if (percentRaised = 100) {
        root.style.setProperty("--num", 100+"%");
    }
    document.getElementById("thermometer").classList.add("gradient");
}

window.onload = () => {
    document.getElementById("hamburger").onclick = toggleNav;
    document.getElementById("ex1-button").onclick = showEx1;
    document.getElementById("ex2-button").onclick = showEx2;
    document.getElementById("compare-button").onclick = compareAges;
    document.getElementById("display-button").onclick = thermometerGradient;
};