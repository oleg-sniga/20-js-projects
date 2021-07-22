
let apiQuotes = []

// Show New Quote

let newQuote = () => {
  let idRandom = Math.floor(Math.random() * apiQuotes.length)
  return apiQuotes[idRandom]
}

// Get Qoutes From API
async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes'
  try {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    
    console.log(newQuote())
  } catch (error) {

    // Catch Error Here
  }
}

// On Load
getQuotes()