
// about.html

const quote = document.querySelector('.quote');
const quoteAuthor=document.querySelector('.quote-author')
const newQutoeBtn=document.querySelector('.new-quote-btn')

const getQuote = async () => {
    try{
    const rand = Math.floor(Math.random() * 1644)
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    quote.innerHTML=data[rand].text;
    quoteAuthor.innerHTML=`-${data[rand].author}`;
    }
    catch{
        quote.innerHTML="Something went wrong";
    }
}

newQutoeBtn.addEventListener('click',()=>{
    getQuote();
})

// window.addEventListener('load',()=>{
//     getQuote();
// })

// 