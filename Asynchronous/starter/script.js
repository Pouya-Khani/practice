"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const getCountryData = function (country) {
	const request = new XMLHttpRequest();
	request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
	request.send();

	request.addEventListener("load", function () {
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		const currency = [Object.entries(data.currencies)[0][1].name];
		console.log(currency);

		const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
				+data.population / 1000000
			).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(
				data.languages
			)}</p>
      <p class="country__row"><span>💰</span>${currency}</p>
    </div>
  </article>
  <br/>
  `;
		countriesContainer.insertAdjacentHTML("beforeend", html);
		countriesContainer.style.opacity = 1;
	});
};

getCountryData("usa");
getCountryData("iran");
getCountryData("germany");
getCountryData("canada");
getCountryData("france");
getCountryData("portugal");
getCountryData("spain");
getCountryData("United Kingdom of Great Britain and Northern Ireland");
getCountryData("uae");
