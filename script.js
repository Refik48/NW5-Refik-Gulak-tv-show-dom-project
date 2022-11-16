//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  episodeList.map(function (episode,index) {
    const main = document.getElementById("root");
    // const episodeCard = document.querySelector(".card");
    // const episodeTitle = document.getElementById("title");
    // const episodeImg = document.getElementById("image");
    // const episodeSum = document.getElementById("summary");
    // const seasonNum = document.getElementById("seriNum");
    // const episodeNum = document.getElementById("epNum");
    const episodeCard = document.createElement("div");
    episodeCard.className = "card";

    const cardHead = document.createElement("div");
    cardHead.id = "cardHead";
    episodeCard.appendChild(cardHead);

    const episodeTitle = document.createElement("h3");
    episodeTitle.id = "name";
    cardHead.appendChild(episodeTitle);

    const seasonNum = document.createElement("h4");
    seasonNum.id = "seriNum";
    episodeTitle.appendChild(seasonNum);

    const episodeImg = document.createElement("img");
    episodeImg.id = "image";
    episodeCard.appendChild(episodeImg);

    const episodeSum = document.createElement("p");
    episodeSum.id = "summary";
    episodeCard.appendChild(episodeSum);

    episodeTitle.textContent = episode.name;
    // seasonNum.textContent = episode.season;
    // seasonNum.textContent = episode.number;
    seasonNum.textContent = `S${episode.season
      .toString()
      .padStart(2, "0")}E${episode.number.toString().padStart(2, "0")}`;
    episodeImg.setAttribute("src", episode.image.medium);
    episodeSum.textContent = episode.summary;
    episodeCard.id = "card" + index;
    main.appendChild(episodeCard);
  });
}



window.onload = setup;
