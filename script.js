const newQouteBtn = document.querySelector("#new-quote");
const quoteText = document.querySelector("#quote");
const authorText = document.querySelector("#author");
// API URL for fetching random quotes
// You can replace this with any other quote API you prefer or use your own quotes
async function getQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    // Update the quote text and author in the HTML
    quoteText.innerText = data.quote;
    authorText.innerText = data.author;
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
}
// Fetch a quote when the page loads
getQuote();
// Add a click event listener to the button to fetch a new quote
newQouteBtn.addEventListener("click", getQuote);
