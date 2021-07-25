
const quoteContainer = document.querySelector('#quote-container')
const quoteText = document.querySelector('#quote')
const authorText = document.querySelector('#author')
const twitterBtn = document.querySelector('#twitter')
const newQuoteBtn = document.querySelector('#new-quote')
const loader = document.querySelector('#loader')


let apiQuotes = []

// Show Loading
function loading() {
  loader.hidden = false
  quoteContainer.hidden = true
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false
  loader.hidden = true
}

// Show New Quote
let newQuote = () => {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  loading()
  //Check if Author field is blank and replace it with
  if (!quote.author) {
    authorText.textContent = 'Unknown'
  } else {
    authorText.textContent = quote.author
  }
  
  if (quote.text.length > 120) {
    quoteText.classList.add('long-quote')
  } else {
    quoteText.classList.remove('long-quote')
  }
  quoteText.textContent = quote.text
  complete()
}

// Get Qoutes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes'
  loading()
  try {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    
    newQuote()
  } catch (error) {
    // Catch Error Here
    console.log('No quote', error)
  }
}

//Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
  window.open(twitterUrl, '_blank')
}

//Event Listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

// On Load
getQuotes()