getNews()

function getNews() {

    var query = document.getElementById("txt").value

    if (query.length === 0) {
        query = 'latest';
        var url = ["https://newsapi.org/v2/everything?q=latest&apiKey=849d2cb9e9374f189b01d27bfee7d4db"]

    } else {
        var url = [`https://newsapi.org/v2/everything?q=${query}&apiKey=849d2cb9e9374f189b01d27bfee7d4db`]
        console.log(query);
    }











    fetch(url)
        .then((apidata) => {
            return apidata.json()

        }).then((actualdata) => {
            // console.log(actualdata.articles);   
            document.querySelector(".news").innerHTML = ''
            createCards(actualdata)
        })


}

function createCards(actualdata) {
    for (i = 0; i < 10; i++) {
        console.log();

        // document.querySelector("#search").addEventListener("click",lol())

        //creation 
        const card = document.createElement("div")
        const h3 = document.createElement("h3")
        const p = document.createElement("p")
        const img = document.createElement("img")
        const txt = document.createElement("div")
        const button = document.createElement("button")
        const a = document.createElement("a")




        const src = actualdata.articles[i].urlToImage
        const href = actualdata.articles[i].url


        button.append(a)

        //ADDING CONTENT
        h3.innerHTML = actualdata.articles[i].title;
        p.innerHTML = actualdata.articles[i].description
        img.setAttribute("src", src)
        a.innerHTML = "Read more"
        a.setAttribute("href", href)
        card.classList.add("card")
        txt.classList.add("txt")
        img.classList.add("card-img0")
        button.classList.add("button-86")

        txt.append(h3, p, button)
        card.append(img, txt)
        document.querySelector(".news").append(card)
    }
}