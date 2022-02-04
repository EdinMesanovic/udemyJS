'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//coding 1.
const renderCountry = function (data) {
  const html = `
    <article class="country ">
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
  //countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
/* const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
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

whereAmI(`19.037`, `72.873`);
 */

////////////////////////////////////////////////////////
// coding 2
const wait = function (seconds) {
  return new Promise(function (reslove) {
    setTimeout(reslove, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (reslove, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      reslove(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};
/*
let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('img 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = `none`;
    return createImage(`img/img-2.jpg`);
  })
  .then(img => {
    currentImg = img;
    console.log('img 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = `none`;
    return createImage(`img/img-3.jpg`);
  })
  .then(img => {
    currentImg = img;
    console.log('img 3 loaded');
    return wait(2);
  })
  .then(() => (currentImg.style.display = `none`))
  .catch(err => console.error(err)); */

/////////////////////////////////////////////////
//coding 3
const loadNPause = async function () {
  try {
    //Load image 1
    let img = await createImage('img/img-1.jpg');
    console.log('img 1 loaded');
    await wait(2);
    img.style.display = `none`;

    //Load image 2
    img = await createImage('img/img-2.jpg');
    console.log('img 2 loaded');
    await wait(2);
    img.style.display = `none`;
  } catch (error) {
    console.log(error);
  }
};

//loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);
    imgsEl.forEach(img => img.classList.add(`parallel`));
  } catch (error) {
    console.log(error);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
