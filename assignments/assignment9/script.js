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

window.onload = () => {
    quoteLoop();
};