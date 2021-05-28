//get quotes from db.json
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = []


//show loading
const loading = ( ) => {
    console.log("loading")
    loader.hidden = false
    quoteContainer.hidden = true
}
// hide loading
const complete = () => {
    quoteContainer.hidden = false
    loader.hidden = true
}

//new quote
const newQoute = () => {
    loading()
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
    //set quote, hide loading
    quoteText.textContent = quote.text
    complete()
}

//fetch api data for quotes
const getQuotes = async () => {
    loading()
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