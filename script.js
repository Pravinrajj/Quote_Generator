const quotes = [
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" }
    ];

    const quoteText = document.getElementById("quote");
    const authorText = document.getElementById("author");
    const button = document.getElementById("new-quote");

    function generate() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteText.innerText = `"${randomQuote.text}"`;
    authorText.innerText = `" ${randomQuote.author}`;
}

button.addEventListener("click", generate);

generate();