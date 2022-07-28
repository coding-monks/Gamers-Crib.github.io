//News_API
//Latest news
fetch(
  "https://newsapi.org/v2/everything?q=new pc games&apiKey=4fe0a28e4d044440936a3af1a44c52d0"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    var check = 0;
    var t = 0;
    while (check != 2) {
      if (data.articles[t].urlToImage != null) {
        document.querySelector(".latestApi").innerHTML += `
        <div class="col-sm-6 ">
                    <div class="card card_space card_color" >
                        <img src="${data.articles[t].urlToImage}" class="card-img-left img_space news_hover" alt="...">
                        <div class="card-body">
                          <p class="card-text "><small class="text-secondary">Last updated ${data.articles[t].publishedAt} | BY ${data.articles[t].author} </small></p>
                          <p class="card-text text-white">${data.articles[t].description}</p>
                          <a target="_blank" href="${data.articles[t].url}"><span class=" btn text-white p-1 rounded bg-secondary">Read More</span></a>
                        </div>
                    </div>
                </div>
        `;
        check++;
      }
      t++;
    }
  });
// Main Content
fetch(
  "https://newsapi.org/v2/everything?q=twitch game news&apiKey=4fe0a28e4d044440936a3af1a44c52d0"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    for (var n = 2; n < 20; n++) {
      if (
        data.articles[n].urlToImage != null &&
        data.articles[n].title != data.articles[n - 1].title
      ) {
        document.querySelector(".newsApi").innerHTML += `
        <li class="list-group-item p-0 bg-dark mb-4">
              <div class="card news_content">
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img src="${data.articles[n].urlToImage}" class="img-fluid rounded-start news_hover" alt="...">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body text-white">
                        <h5 class="card-title"><a href="${data.articles[n].url}" target="_blank">${data.articles[n].title}</a></h5>
                        <p class="card-text">${data.articles[n].description}</p>
                        <p class="card-text"><small class="text-secondary">Last updated ${data.articles[n].publishedAt} | BY ${data.articles[n].author}</small></p>

                      </div>
                    </div>
                  </div>
                </div>
          </li>`;
      }
    }
  });
