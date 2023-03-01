import { heroesBase } from "./heroes.js";

const BASE_URL = "https://swapi.dev/api";

const input = document.querySelector(".input");
const container = document.querySelector(".container");
const button = document.querySelector(".btn_info");
const searchInfo = document.querySelector(".search-subinfo");
const planetBox = document.querySelector(".planet-box");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

function $(name) {
  return document.querySelector(name);
}

const start = $(".container-start");
const planets = $(".planets");
const heroes = $(".heroes");
const choosePlanet = $(".container-choose_planets");
const chooseHeroes = $(".container-choose_heroes");
const form = $(".actors_form");

planets.addEventListener("click", () => {
  start.style.display = "none";
  chooseHeroes.style.display = "none";
  choosePlanet.style.display = "block";
});
heroes.addEventListener("click", () => {
  start.style.display = "none";
  form.style.display = "block";
  chooseHeroes.style.display = "block";
  choosePlanet.style.display = "none";
});

let inputValue = "1";
input.addEventListener("input", (e) => {
  inputValue = e.target.value;
});

async function getActorsInfo() {
  const request = await fetch(`${BASE_URL}/films/${inputValue}`);
  const info = await request.json();
  const characters = info.characters;
  characters.forEach((character) => {
    getActors(character);
  });
}
getActorsInfo();

async function getActors(character) {
  const requestActor = await fetch(character);
  const actors = await requestActor.json();

  let actorImg = new Image(70, 70);
  for (const [key, value] of Object.entries(heroesBase)) {
    if (key == actors.name) {
      actorImg.src = value.url;
      actorImg.classList.add("actor_style");
    }
  }

  const actorBlock = document.createElement("div");
  actorBlock.classList.add("actor-block");
  const actorInfo = `
    ${actorImg.outerHTML}
    <h2 class="actor-name"> ${actors.name}</h2>
    <p> Вік: ${actors.birth_year}</p>
    <p> Стать: ${actors.gender}</p>
    `;
  actorBlock.innerHTML = actorInfo;
  container.append(actorBlock);
}
getActors();

async function getMovieInfo() {
  
  if (inputValue > 6) {
    alert("Оберіть частину з 1 по 6 ");
    return;
  }
  const requestMovie = await fetch(`${BASE_URL}/films/${inputValue}`);
  const movieInfo = await requestMovie.json();

  input.classList.add("movie-input");
  searchInfo.innerHTML = `<span>Сюжет: ${movieInfo.opening_crawl}</span>`;
  const allActors = await movieInfo.characters;
  if (inputValue === "") {
    searchInfo.innerHTML = `<span>"Оберіть частину з 1 по 6</span>`;
  } else {
    searchInfo.innerHTML = `<span>Сюжет: ${movieInfo.opening_crawl}</span>`;
  }
  
  await allActors.forEach(getActorsInfo());
}
button.addEventListener("click", () => {
  container.innerHTML = "";
  getMovieInfo();
});

function addPlanetsInfo(planet) {
  const planetsWrapper = document.createElement("div");
  planetsWrapper.classList.add("planet-wrapper");
  const planets = `
  
        <h1>Ім'я: ${planet.name}</h1>
        <p>Населення: ${planet.population} </p>
        <p>Діаметр: ${planet.diameter} </p>
    `;

  planetsWrapper.innerHTML += planets;
  planetBox.append(planetsWrapper);
}

let page = 1;
async function getPlanets() {
  const request = await fetch(`${BASE_URL}/planets/?page=${page}`);
  const data = await request.json();

  const arrPlanets = data.results;
  await arrPlanets.forEach((planet) => {
    addPlanetsInfo(planet);
  });
}
getPlanets();

btnNext.addEventListener("click", function () {
  if (page == 6) {
    page = 1;
  } else {
    page++;
  }
  planetBox.innerHTML = "";
  getPlanets(page);
});

btnPrev.addEventListener("click", function () {
  if (page == 1) {
    page = 6;
  } else {
    page--;
  }
  planetBox.innerHTML = "";
  getPlanets(page);
});
