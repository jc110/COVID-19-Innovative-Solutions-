let url =  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=OfajAxClWiZPzQdBGEBCIdN9A7aVvboG"

let headlines = document.getElementById("headlines");

fetch(url).then(response => response.json()).then(data => {
  // console.log(data);

  data.results.map(article => {
    // console.log(article);

    let a = document.createElement("a");
    a.setAttribute('href', article.url);
    a.innerHTML = article.title;

    let img = document.createElement("img");
    img.setAttribute('src', article.multimedia[2].url);

    let p = document.createElement("p");
    p.innerHTML = article.abstract;

    headlines.appendChild(img);
    headlines.appendChild(a);
    headlines.appendChild(p);
  })
})

