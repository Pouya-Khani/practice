"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
	// console.log(data);
	const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
				+data.population / 1000000
			).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${
				Object.values(data.languages)[0]
			}</p>
      <p class="country__row"><span>💰</span>${[
				Object.entries(data.currencies)[0][1].name,
			]}</p>
    </div>
  </article>
  `;
	countriesContainer.insertAdjacentHTML("beforeend", html);
	// countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
	countriesContainer.insertAdjacentText("beforeend", msg);
	// countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = "Something went wrong") {
	return fetch(url).then((response) => {
		if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

		return response.json();
	});
};
/*
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
      <p class="country__row"><span>💰</span>${[
				Object.entries(data.currencies)[0][1].name,
			]}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');
*/

///////////////////////////////////////
// Welcome to Callback Hell

/*
const getCountryAndNeighbour = function (country) {
	// AJAX call country 1
	const request = new XMLHttpRequest();
	request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
	request.send();

	request.addEventListener("load", function () {
		const [data] = JSON.parse(this.responseText);
		console.log(data);

		// Render country 1
		renderCountry(data);

		// Get neighbour country (2)
		const [neighbour] = data.borders;
		console.log(neighbour);
		if (!neighbour) return;

		// AJAX call country 2
		const request2 = new XMLHttpRequest();
		request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
		request2.send();

		request2.addEventListener("load", function () {
			let data2 = JSON.parse(this.responseText);
			data2 = data2[0];
			console.log(data2);
			renderCountry(data2, "neighbour");
		});
	});
};

// getCountryAndNeighbour("portugal");
getCountryAndNeighbour("usa");

// setTimeout(() => {
// 	console.log("1 second passed");
// 	setTimeout(() => {
// 		console.log("2 seconds passed");
// 		setTimeout(() => {
// 			console.log("3 second passed");
// 			setTimeout(() => {
// 				console.log("4 second passed");
// 			}, 1000);
// 		}, 1000);
// 	}, 1000);
// }, 1000);
*/

///////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually

// const getCountryData = function (country) {
// 	fetch(`https://restcountries.com/v3.1/name/${country}`)
// 		.then(function (response) {
// 			console.log(response);
// 			return response.json();
// 		})
// 		.then(function (data) {
// 			console.log(data);
// 			renderCountry(data[0]);
// 		});
// };

const getCountryData = function (country) {
	fetch(`https://restcountries.com/v3.1/name/${country}`)
		.then((response) => response.json())
		.then((data) => {
			renderCountry(data[0]);
			const neighbour = data[0].borders?.[0];

			if (!neighbour) return;

			return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
		})
		.then((response) => response.json())
		.then((data) => renderCountry(data[0], "neighbour"))
		.catch((err) => {
			console.error(`${err} 💥💥💥`);
			renderError(`Something went wrong 💥💥 ${err.message}. Try Again!`);
		})
		.finally(() => {
			countriesContainer.style.opacity = 1;
		});
};

btn.addEventListener("click", function () {
	getCountryData("portugal");
});

// getCountryData("united kingdom");
