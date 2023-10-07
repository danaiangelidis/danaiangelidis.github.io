const quoteLoop = () => {
    let quotes = ["You only live once, but if you do it right, once is enough. - Mae West", 
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "If you tell the truth, you don't have to remember anything. - Mark Twain",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. - Maya Angelou"];

    const slideQuotes = document.getElementById("slidequotes");

    count = 1;
    setInterval(() => {
        if (count > 4) {
            count = 0;
        }
        const currentQuote = quotes[count];
        slideQuotes.innerHTML = `${currentQuote} <br><br>`;
        count++;
    }, 2000);
}

const drawRainbow = () => {
    document.getElementById("red").classList.add("hidden");
    document.getElementById("orange").classList.add("hidden");
    document.getElementById("yellow").classList.add("hidden");
    document.getElementById("green").classList.add("hidden");
    document.getElementById("blue").classList.add("hidden");
    document.getElementById("purple").classList.add("hidden");
    document.getElementById("pot").classList.add("hidden");

    document.getElementById("red").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("orange").classList.remove("hidden");
    }, 1000);
    setTimeout(() => {
        document.getElementById("yellow").classList.remove("hidden");
    }, 2000);
    setTimeout(() => {
        document.getElementById("green").classList.remove("hidden");
    }, 3000);
    setTimeout(() => {
        document.getElementById("blue").classList.remove("hidden");
    }, 4000);
    setTimeout(() => {
        document.getElementById("purple").classList.remove("hidden");
    }, 5000);
    setTimeout(() => {
        document.getElementById("pot").classList.remove("hidden");
    }, 6000);
};

window.onload = () => {
    quoteLoop();
    document.getElementById("rainbow-button").onclick = drawRainbow;
};