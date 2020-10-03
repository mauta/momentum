let time = document.querySelector('.time'),
  day = document.querySelector('.day'),
  greeting = document.querySelector('.greeting'),
  bgReload = document.querySelector('.bg-reload');
const blockquote = document.querySelector('blockquote');
const btnQuote = document.querySelector('.btn-quote');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');
const nameInput = document.querySelector('.name_input');
const nameText = document.querySelector('.name_text')
const focusInput = document.querySelector('.focus_input');
const focusText = document.querySelector('.focus_text')
const cityInput = document.querySelector('.city_input');
const cityText = document.querySelector('.city_text')

// localStorage.setItem('city', 'Город');

// выводим время

function showTime() {
  let today = new Date(),
    number = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  day.innerHTML = `${number} ${rusMonth(month)} ${year}`;
  time.innerHTML = `${hour} <span> : </span>${addZerro(min)} <span> : </span>${addZerro(sec)}`

  setTimeout(showTime, 1000);
}

// добавим нолики

function addZerro(n) {
  if (n < 10) {
    return `0${n}`
  } else return n;
}

function rusMonth(monthNumber) {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  return months[monthNumber];

}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 5 || hour > 21) {
    document.body.style.backgroundImage = `url(images/night/${Math.floor(Math.random()*20 + 1)}.jpg)`;
    // document.body.style.color = "white";
    greeting.textContent = 'Бурной ночи,  ';
  } else if (hour < 11) {
    document.body.style.backgroundImage = `url(images/morning/${Math.floor(Math.random()*20 + 1)}.jpg)`;
    greeting.textContent = 'Доброе утречко,  ';
  } else if (hour < 17) {
    document.body.style.backgroundImage = `url(images/day/${Math.floor(Math.random()*20 + 1)}.jpg)`;
    greeting.textContent = 'Хорошего дня,  ';
  } else {
    document.body.style.backgroundImage = `url(images/evening/${Math.floor(Math.random()*20 + 1)}.jpg)`;
    greeting.textContent = 'Веселого вечера,  ';
  }
}

function setFocus(el) {
  console.log('вошли в фокус')
  if (el.type === 'keypress') {
    if (el.keyCode === 13) {
      console.log('нажали ентер')
      localStorage.setItem('focus', focusInput.value);
      focusText.innerText = localStorage.getItem('focus')
      focusInput.classList.add('hidden')
      focusText.classList.remove('hidden')
      focusInput.blur();
    }
  } else {
    console.log('вводим данные')
    focusText.classList.add('hidden')
    focusInput.classList.remove('hidden')
    localStorage.setItem('focus', focusInput.value);
  }
}

function setName(el) {
  if (el.type === 'keypress') {    
    if (el.keyCode === 13) { 
      localStorage.setItem('name', nameInput.value);
      nameText.innerText = localStorage.getItem('name')
      nameInput.classList.add('hidden')
      nameText.classList.remove('hidden')
      nameInput.blur();
    }
  } else {
    nameText.classList.add('hidden')
    nameInput.classList.remove('hidden')
    localStorage.setItem('name', nameInput.value);
  }
}

function newName(el){
  localStorage.setItem('name', '');
  nameInput.value = ''
  setName(el)
}

function blurName(){
  nameInput.classList.add('hidden')
  nameText.classList.remove('hidden')
  nameInput.blur();
}

function newFocus(el){
  console.log('кликнула')
  localStorage.setItem('focus', '');
  focusInput.value = ''
  setFocus(el)
}

function blurFocus(){
  focusInput.classList.add('hidden')
  focusText.classList.remove('hidden')
  focusInput.blur();
}

function newCity(el){
  console.log('кликнула')
  localStorage.setItem('city', '');
  cityInput.value = ''
  setCity(el)
}

function blurCity(){
  cityInput.classList.add('hidden')
  cityText.classList.remove('hidden')
  cityInput.blur();
}


function setName(el) {
  if (el.type === 'keypress') {    
    if (el.keyCode === 13) { 
      localStorage.setItem('name', nameInput.value);
      nameText.innerText = localStorage.getItem('name')
      nameInput.classList.add('hidden')
      nameText.classList.remove('hidden')
      nameInput.blur();
    }
  } else {
    nameText.classList.add('hidden')
    nameInput.classList.remove('hidden')
    localStorage.setItem('name', nameInput.value);
  }
}

function setCity(el) {
   if (el.type === 'keypress') {
    if (el.keyCode === 13) { 
      localStorage.setItem('city', cityInput.value);
      cityText.innerText = localStorage.getItem('city')
      cityInput.classList.add('hidden')
      cityText.classList.remove('hidden')
      cityInput.blur();
    }
  } else {
    cityText.classList.add('hidden')
    cityInput.classList.remove('hidden')
    localStorage.setItem('city', cityInput.value);
  }
  getWeather();
}

function getFocus() {
  if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
    focusText.classList.add('hidden')
    focusInput.classList.remove('hidden')
  } else {
    focusInput.classList.add('hidden')
    focusText.classList.remove('hidden')
    focusText.textContent = localStorage.getItem('focus');
  }
}

function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') { 
  nameText.classList.add('hidden')
  nameInput.classList.remove('hidden')
  } else {
    nameInput.classList.add('hidden')
    nameText.classList.remove('hidden')
    nameText.textContent = localStorage.getItem('name');
  }
}

function getCity() {
  if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
    cityText.classList.add('hidden')
    cityInput.classList.remove('hidden')
  } else {
    cityInput.classList.add('hidden')
    cityText.classList.remove('hidden')
    cityText.textContent = localStorage.getItem('city');
  }
}


function changeBgr() {
  if (document.body.style.backgroundImage.includes('morning')) {   
    document.body.style.backgroundImage = `url(images/day/${Math.floor(Math.random()*20 + 1)}.jpg)`;   
  } else if (document.body.style.backgroundImage.includes('day')) {    
    document.body.style.backgroundImage = `url(images/evening/${Math.floor(Math.random()*20 + 1)}.jpg)`;
  } else if (document.body.style.backgroundImage.includes('evening')) {   
    document.body.style.backgroundImage = `url(images/night/${Math.floor(Math.random()*20 + 1)}.jpg)`; 
  } else if (document.body.style.backgroundImage.includes('night')) {    
    document.body.style.backgroundImage = `url(images/morning/${Math.floor(Math.random()*20 + 1)}.jpg)`; 
  }
}

async function getQuote() {
  const url = `quote.json`;
  const res = await fetch(url);
  const data = await res.json();
  blockquote.textContent = data.quoteText[Math.floor(Math.random() * data.quoteText.length)];
 
}

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `темпер ${data.main.temp}°C`;
  wind.textContent = `ветер ${data.wind.speed} м/с`;
  humidity.textContent = `влажность ${data.main.humidity} %`;
  weatherDescription.textContent = data.weather[0].description;
}



showTime();
setBgGreet();
getName();
getFocus();
getQuote();
getCity()




bgReload.addEventListener('click', changeBgr);
btnQuote.addEventListener('click', getQuote);
document.addEventListener('DOMContentLoaded', getWeather);
nameInput.addEventListener('keypress', setName)
nameInput.addEventListener('blur', blurName)
nameText.addEventListener('click', newName)
cityInput.addEventListener('keypress', setCity)
cityInput.addEventListener('blur', blurCity)
cityText.addEventListener('click', newCity)
focusInput.addEventListener('keypress', setFocus)
focusInput.addEventListener('blur', blurFocus)
focusText.addEventListener('click', newFocus)