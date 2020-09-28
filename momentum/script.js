let time = document.querySelector('.time'),
  day = document.querySelector('.day'),
  greeting = document.querySelector('.greeting'),
  yourName = document.querySelector('.name'),
  yourFocus = document.querySelector('.focus'),
  bgReload = document.querySelector('.bg-reload');

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
  console.log('я запустилась')
  let today = new Date(),
    hour = today.getHours();
  console.log(hour)
  if (hour < 5 || hour > 21) {
    document.body.style.backgroundImage = `url(images/night/${Math.floor(Math.random()*20 + 1)}.jpg)`;
    document.body.style.color = "white";
    greeting.textContent = 'Бурной ночи ';
  } else if (hour < 11) {
    document.body.style.backgroundImage = `url(images/morning/${Math.floor(Math.random()*20 + 1)}.jpg)`;
    greeting.textContent = 'Доброе утречко ';
  } else if (hour < 17) {
    document.body.style.backgroundImage = `url(images/day/${Math.floor(Math.random()*20 + 1)}.jpg)`;
    greeting.textContent = 'Хорошего дня ';
  } else {
    document.body.style.backgroundImage = `url(images/evening/${Math.floor(Math.random()*20 + 1)}.jpg)`;
    greeting.textContent = 'Веселого вечера ';
  }
}

function setName(el) {
  if (el.type === 'keypress') {
    if (el.keyCode === 13) {
      localStorage.setItem('name', el.target.innerText);

      yourName.blur();
    }
  } else {
    localStorage.setItem('name', el.target.innerText);
  }
}

function setFocus(el) {
  if (el.type === 'keypress') {
    if (el.keyCode === 13) {
      localStorage.setItem('focus', el.target.innerText);
      yourFocus.blur();
    }
  } else {
    localStorage.setItem('focus', el.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
    yourFocus.style.color = 'red';
    yourFocus.textContent = 'Напиши дело дня';
  } else {
    yourFocus.textContent = localStorage.getItem('focus');
  }
}

function getName() {
  if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
    yourName.style.color = 'red';
    yourName.textContent = '[как мне к вам обращаться?]';
  } else {

    yourName.textContent = localStorage.getItem('name');
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

yourName.addEventListener('keypress', setName);
yourName.addEventListener('blur', setName);
yourFocus.addEventListener('keypress', setFocus);
yourFocus.addEventListener('blur', setFocus);
bgReload.addEventListener('click', changeBgr);

showTime();
setBgGreet();
getName();
getFocus();