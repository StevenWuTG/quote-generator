//get quotes from db.json


async function getQuotes() {
    fetch("./quotes.json")
    .then(r => {
        return r.json()
    })
    .then(data => {
        console.log(data)
    })
}

//on load

getQuotes()