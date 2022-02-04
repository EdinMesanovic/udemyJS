'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, calssName = '') {
  const html = `
    <article class="country ${calssName}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.continents}</h4>
          <p class="country__row"><span>👫</span>${(
            data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${
            Object.values(data.languages)[0]
          }</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
    </div>
  </article>
    `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
/* const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);
    console.log(data);
    //console.log(Object.values(data.currencies)[0].name);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.continents}</h4>
        <p class="country__row"><span>👫</span>${(
          data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.values(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.values(data.currencies)[0].name
        }</p>
  </div>
</article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('bosnia'); */

/*
const getCountryAndNeighbour = function (country) {
  //AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(request.responseText);
    console.log(data);
    //console.log(Object.values(data.currencies)[0].name);

    //Render country 1
    renderCountry(data);

    //Get neighbour country 2
    const [...neighbour] = data.borders;
    console.log(neighbour);

    if (!neighbour) return;

    for (let i = 0; i < neighbour.length; i++) {
      //AJAX call country 2
      const request2 = new XMLHttpRequest();
      request2.open(
        'GET',
        `https://restcountries.com/v3.1/alpha/${neighbour[i]}`
      );
      request2.send();
      console.log(request2);

      request2.addEventListener('load', function () {
        const [data2] = JSON.parse(request2.responseText);
        console.log(data2);
        renderCountry(data2, 'neighbour');
      });
    }
  });
};

getCountryAndNeighbour('bosnia');

 */

/* const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send(); */

/* const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    });
};

getCountryData('bosnia'); */

///////////////////////////////////////////////////////////////
/* const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const getCountryData = function (country) {
  //country 1s
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);

      if (!neighbour) throw new Error(`No neighbour found! ${data.status}`);

      // country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(`${err} 💣`);
      renderError(`Something went wrong 💣💣 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function (e) {
  getCountryData('Germany');
});
 */

/* console.log(`Test start`);
setTimeout(() => console.log(`0 sec timer`), 0);
Promise.resolve(`Resloved promise 1`).then(res => console.log(res));
Promise.resolve(`Resloved promise 2`).then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});

console.log(`Test end`);
 */

/* const lotteryPromise = new Promise(function (reslove, reject) {
  console.log(`Lottery dwar is happening`);
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      reslove(`You WIN`);
    } else {
      reject(new Error(`You lost your money`));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (reslove) {
    setTimeout(reslove, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log(`I waited for 2 secondes`);
    return wait(1);
  })
  .then(() => console.log(`I waited for 1 seconds`));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('problem')).catch(x => console.error(x));
 */

/* const getPosition = function () {
  return new Promise(function (reslove, reject) {
    /*   navigator.geolocation.getCurrentPosition(
      position => reslove(position),
      err => reject(err)
    ); 
    navigator.geolocation.getCurrentPosition(reslove, reject);
  });
};

getPosition().then(pos => console.log(pos.coords));

const whereAmI = function () {
  getPosition()
    .then(pos =>
      fetch(
        `https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json`
      )
    )

    .then(response => {
      if (!response.ok) throw new Error(`Error ${response.status}`);

      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then(response => {
      if (!response.ok) throw new Error(`Error ${response.status}`);
      return response.json();
    })
    .then(data => {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch(err => console.error(err.message))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  whereAmI();
});
 */

/* const getPosition = function () {
  return new Promise(function (reslove, reject) {
    navigator.geolocation.getCurrentPosition(reslove, reject);
  });
};

const whereAmI = async function () {
  try {
    //Geo location
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    //reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok)
      throw new Error(
        renderError(`Problem getting location data ${resGeo.status}`)
      );
    const dataGeo = await resGeo.json();

    //country data
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!res.ok)
      throw new Error(
        renderError(`Problem getting country data ${res.status}`)
      );
    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city} `;
    //countriesContainer.style.opacity = 1;
  } catch (err) {
    console.error(err);
    renderError(` 💣  ${err.message}`);

    //Reject promise returned from async function
    throw err;
  }
};

console.log(`1. Will get location`);
/* const city = whereAmI();
console.log(city); */
/* whereAmI()
  .then(city => console.log(city))
  .catch(err => console.error(`${err.message} 💣`))
  .finally(() => console.log(`3. Finished getting location`));
 
(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (error) {
    console.error(`2:  ${error.message} 💣`);
  }
  console.log(`3. Finished getting location`);
})();
*/
/* try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  console.error(err.message);
}
 */

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};
/*
const get3Countries = async function (c1, c2, c3) {
  try {
    /* const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`); 

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(data => data[0].capital));
  } catch (error) {
    console.error(error);
  }
};

get3Countries(`Bosnia`, `Serbia`, `Usa`);
 */

// Promise.race

/*( async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/germany`),
    getJSON(`https://restcountries.com/v3.1/name/bosnia`),
  ]);
  console.log(res[0]);
})(); */

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long!`));
    }, sec * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(5),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

//Promis.allSettled
Promise.allSettled([
  Promise.resolve(`Success`),
  Promise.reject(`error`),
  Promise.resolve(`another Success`),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

//Promise.any [ES2021]
Promise.any([
  Promise.resolve(`Success`),
  Promise.reject(`error`),
  Promise.resolve(`another Success`),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
