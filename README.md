# Quote_Generator
## Date:
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Quote Generator</title>
</head>
<body>
    <div>
        <h1>Inspire Me</h1>
        <p id="quote"></p>
        <p id="author"></p>
        <button id="new-quote" onclick=generate()>Get Quote</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```css
body{
    font-family: Roboto,sans-serif;
    box-sizing: border-box;
    background-color: rgb(151, 224, 224);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    color: rgb(60, 72, 82);
}
div{
    width:30%;
    border-radius: 5%;
    padding: 1rem;
    box-shadow: 0px 0px 18px rgba(0,0,0,0.2);
    background-color: rgb(97, 233, 233);
}

h1{
    text-align: center;
    margin: 0;
    padding: 1rem;
}

p{
    margin: 1vh;
    font-weight: 700;
    padding: 1em;
    font-size: 1.5rem;
    font-style: italic;
    text-shadow: 1px 1px #000 ;
}

button{
    justify-self: center;
    display: flex;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: medium;
    font-weight: 600;
    background-color: rgb(150, 220, 196);
}

button:hover{
    background-color: rgb(2, 237, 179);
    box-shadow: 0px 0px 10px rgba(5, 96, 97, 0.2);
}

```
## JS Code:
```js
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
```
## Output:
<img width="1218" height="695" alt="image" src="https://github.com/user-attachments/assets/9c7da8c0-89a7-4668-b403-888a90fe051a" />

## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
