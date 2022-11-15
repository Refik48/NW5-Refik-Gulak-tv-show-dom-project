//You can edit ALL of the code here

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}
const main = document.getElementById("root");
const episodeCard = document.querySelector(".card");
const episodeTitle = document.getElementById("title");
const episodeImg = document.getElementById("image");
const episodeSum = document.getElementById("summary");
const seasonNum = document.getElementById("seriNum");
const episodeNum = document.getElementById("epNum");

function makePageForEpisodes(episodeList) {
  // const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach(function (episode) {
    episodeTitle.textContent = episode.name;
    seasonNum.textContent = episode.season;
    seasonNum.textContent = episode.number;
    episodeImg.setAttribute("src", episode.image.medium);
    episodeSum.textContent = episode.summary;
  });
}

window.onload = setup;
