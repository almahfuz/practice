
const LoadRefresh =()=>{
    fetch('https://api.kanye.rest')
    .then(response => response.json())
    .then(data => displayQuote(data))
}

const displayQuote = quote=>{
    const blockQuote = document.getElementById('quotes');
    console.log(quote);
    blockQuote.innerHTML=quote.quote;
}


LoadRefresh();
