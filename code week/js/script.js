const quotegen = () => {
    const wrapperEl = document.createElement("div")
    const titleEl = document.createElement("header")
    const contentEl= document.createElement("div")
    const quoteAreaEl=document.createElement("div")
    const quoteEl = document.createElement("p")
    const authorDivEl = document.createElement("div")
    const authorEl = document.createElement("p")
    const buttonsEl = document.createElement("div")
    const buttonEl = document.createElement("button")
    
    
    wrapperEl.className="wrapper"
    titleEl.className="title"
    contentEl.className="content "
    quoteAreaEl.className="quote-area "
    quoteEl.className="quote"
    authorDivEl.className="author"
    authorEl.className="name"
    buttonsEl.className="buttons"
    buttonEl.className="button"
    
    
    
    titleEl.textContent="Quote of the day"
    quoteEl.textContent=""
    authorEl.textContent=""
    buttonEl.textContent="New quote"

    quoteAreaEl.append(quoteEl)
    authorDivEl.appendChild(authorEl)
    buttonsEl.appendChild(buttonEl)
    contentEl.append(quoteAreaEl,authorDivEl,buttonsEl)
    wrapperEl.append(titleEl,contentEl)
    
    
    
    
   

    return wrapperEl
    


}
const root = document.querySelector(".root")
root.appendChild(quotegen())
const quoteEl = document.querySelector(".quote")
const author = document.querySelector(".author")
const Button = document.querySelector("button");
const randomQuote = () =>  {
    fetch('https://api.quotable.io/quotes/random')
    .then((res) => res.json())
    .then(result =>{
        console.log(result);
       quoteEl.textContent = `"${result[0].content}"`;
       author.textContent = `- ${result[0].author}`;
    });
}
randomQuote()
Button.addEventListener("click",randomQuote)