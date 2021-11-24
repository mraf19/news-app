const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', function () {
    let news = document.querySelector('.news')
    news.innerHTML = ""
    const keyword = document.querySelector('.keyword').value
    fetch('https://newsapi.org/v2/everything?apiKey=0c69b697972d4b79b652debaab75cf47&sortBy=popularity&language=id&q=' + keyword)
        .then(response => response.json())
        .then(res => res.articles.forEach(d => {  
            let card = '' 
            card += `<div class="col-md-3 mr-5">
                        <div class="card mt-5">
                            <img src="${d.urlToImage}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${d.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${d.author} - ${d.publishedAt}</h6>
                                <p class="card-text ">${d.description}</p>
                            </div>
                        </div>
                    </div>`
             news.innerHTML += card
        }))
})