
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/random";

async function getqoute(url) {
    const responce = await fetch(url);
    var data = await responce.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = data.content;
}

getqoute(api_url);