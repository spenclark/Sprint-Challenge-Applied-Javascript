// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createCard(headline, authorPhoto, authorName) {
    // card div
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')

    // div headiline
    const cardHead = document.createElement('div')
    cardHead.classList.add('headline')
    cardHead.textContent = headline;
    cardDiv.appendChild(cardHead)

    // div author
    const cardAut = document.createElement('div')
    cardAut.classList.add('author')
    cardDiv.appendChild(cardAut)

    // div img
    const cardImgDiv = document.createElement('div')
    cardImgDiv.classList.add('img-container')
    cardAut.appendChild(cardImgDiv)

    // img appended to div img
    const cardImg = document.createElement('img')
    cardImg.src = authorPhoto
    cardImgDiv.appendChild(cardImg)

    // span appended to author
    const cardAuthor = document.createElement('span')
    cardAuthor.textContent = authorName
    cardAut.appendChild(cardAuthor)

    return cardDiv
}

// http request
axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then((response) => {

        console.log(response.data)
        
        response.data.articles['bootstrap'].forEach((article) => {
            var addCard = createCard(article.headline, article.authorPhoto, article.authorName)
            console.log(addCard)
            articleContainer.appendChild(addCard)
        })
        response.data.articles['technology'].forEach((article) => {
            var addCard = createCard(article.headline, article.authorPhoto, article.authorName)
            articleContainer.appendChild(addCard)
        })
        response.data.articles['jquery'].forEach((article) => {
            var addCard = createCard(article.headline, article.authorPhoto, article.authorName)
            articleContainer.appendChild(addCard)
        })
        response.data.articles['node'].forEach((article) => {
            var addCard = createCard(article.headline, article.authorPhoto, article.authorName)
            articleContainer.appendChild(addCard)
        })
        
    })
   
// grab card container
const articleContainer = document.querySelector('cards-container')
