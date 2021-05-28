//get quotes from db.json
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

let apiQuotes = []

const newQoute = () => {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    if(!quote.author){

        authorText.textContent = "Unknown"
    } else {        
        authorText.textContent = quote.author
    }
    //check quote length to determine styles
    if(quote.text.length > 120){
        quoteText.classList.add('long-quote')
        
    } else {
        quoteText.classList.remove('long-quote')
        
    }
    quoteText.textContent = quote.text
}

//fetch api data for quotes
const getQuotes = async () => {
    fetch("./quotes.json")
    .then(r => {
        return r.json()
    })
    .then(data => {
        apiQuotes = data
        newQoute()
    })
}


//tweet quote
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')

}


//event listeners
newQuoteBtn.addEventListener("click", newQoute)
twitterBtn.addEventListener("click", tweetQuote)


//on load
getQuotes()