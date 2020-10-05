 const time = document.querySelector('.time')
 const day = document.querySelector('.day')
 const greeting = document.querySelector('.greeting')
 const bgReload = document.querySelector('.bg-reload')
 const blockquote = document.querySelector('blockquote')
 const btnQuote = document.querySelector('.btn-quote')
 const weatherIcon = document.querySelector('.weather-icon')
 const temperature = document.querySelector('.temperature')
 const wind = document.querySelector('.wind')
 const humidity = document.querySelector('.humidity')
 const weatherDescription = document.querySelector('.weather-description')
 const city = document.querySelector('.city')
 const nameInput = document.querySelector('.name_input')
 const nameText = document.querySelector('.name_text')
 const focusInput = document.querySelector('.focus_input')
 const focusText = document.querySelector('.focus_text')
 const cityInput = document.querySelector('.city_input')
 const cityText = document.querySelector('.city_text')

 function showTime() {
   const today = new Date()
   const year = today.getFullYear()
   const hour = today.getHours()
   const min = today.getMinutes()
   const sec = today.getSeconds()
   day.innerHTML = `${rusMonth()} ${year}`
   time.innerHTML = `<span class="time_block">  ${hour} </span> <span> : </span><span class="time_block">${addZerro(min)} </span> <span> : </span><span class="time_block"> ${addZerro(sec)} </span>`
   setTimeout(showTime, 1000)
 }

 function addZerro(n) {
   if (n < 10) {
     return `0${n}`
   } else return n
 }

 function rusMonth() {
   const date = new Date()
   const options = {
     day: 'numeric',
     month: 'long'
   }
   return date.toLocaleDateString('ru-RU', options)
 }

 function setBgGreet() {
   let today = new Date(),
     hour = today.getHours()
   if (hour < 5 || hour > 21) {
     document.body.style.backgroundImage = `url(images/night/${Math.floor(Math.random()*20 + 1)}.jpg)`
     greeting.textContent = 'Бурной ночи,  '
   } else if (hour < 11) {
     document.body.style.backgroundImage = `url(images/morning/${Math.floor(Math.random()*20 + 1)}.jpg)`
     greeting.textContent = 'Доброе утречко,  '
   } else if (hour < 17) {
     document.body.style.backgroundImage = `url(images/day/${Math.floor(Math.random()*20 + 1)}.jpg)`
     greeting.textContent = 'Хорошего дня,  '
   } else {
     document.body.style.backgroundImage = `url(images/evening/${Math.floor(Math.random()*20 + 1)}.jpg)`
     greeting.textContent = 'Веселого вечера,  '
   }
 }

 function setFocus(el) {
   if (el.type === 'keypress') {
     if (el.keyCode === 13) {
       localStorage.setItem('focus', focusInput.value)
       focusText.innerText = localStorage.getItem('focus')
       focusInput.classList.add('hidden')
       focusText.classList.remove('hidden')
       focusInput.blur()
     }
   } else {
     focusText.classList.add('hidden')
     focusInput.classList.remove('hidden')
     localStorage.setItem('focus', focusInput.value)
   }
   getFocus() 
 }

 function setName(el) {
   if (el.type === 'keypress') {
     if (el.keyCode === 13) {
       localStorage.setItem('name', nameInput.value)
       nameText.innerText = localStorage.getItem('name')
       nameInput.classList.add('hidden')
       nameText.classList.remove('hidden')
       nameInput.blur()
     }
   } else {
     nameText.classList.add('hidden')
     nameInput.classList.remove('hidden')
     localStorage.setItem('name', nameInput.value)
   }
 }

 function newName(el) {
   localStorage.setItem('name', '')
   nameInput.value = ''
   setName(el)
 }

 function blurName() {
   localStorage.setItem('name', nameInput.value)
   nameText.innerText = localStorage.getItem('name')
   nameInput.classList.add('hidden')
   nameText.classList.remove('hidden')
   getName() 
   nameInput.blur()
 }

 function newFocus(el) {
   localStorage.setItem('focus', '')
   focusInput.value = ''
   setFocus(el)
 }

 function blurFocus() {
   localStorage.setItem('focus', focusInput.value)
   focusText.innerText = localStorage.getItem('focus')
   focusInput.classList.add('hidden')
   focusText.classList.remove('hidden')
   getFocus() 
   focusInput.blur()
 }

 function newCity(el) {
   localStorage.setItem('city', '')
   cityInput.value = ''
   setCity(el)
 }

 function blurCity() {
   localStorage.setItem('city', cityInput.value)
   cityText.innerText = localStorage.getItem('city')
   cityInput.classList.add('hidden')
   cityText.classList.remove('hidden')
   getCity()
   cityInput.blur()
 }

 function setName(el) {
   if (el.type === 'keypress') {
     if (el.keyCode === 13) {
       localStorage.setItem('name', nameInput.value)
       nameText.innerText = localStorage.getItem('name')
       nameInput.classList.add('hidden')
       nameText.classList.remove('hidden')
       nameInput.blur()
     }
   } else {
     nameText.classList.add('hidden')
     nameInput.classList.remove('hidden')
     localStorage.setItem('name', nameInput.value)
   }
   getName() 
 }

 function setCity(el) {
   if (el.type === 'keypress') {
     if (el.keyCode === 13) {
       localStorage.setItem('city', cityInput.value)
       cityText.innerText = localStorage.getItem('city')
       cityInput.classList.add('hidden')
       cityText.classList.remove('hidden')
       cityInput.blur()
     }
   } else {
     cityText.classList.add('hidden')
     cityInput.classList.remove('hidden')
     localStorage.setItem('city', cityInput.value)
   }
   getWeather()
 }

 function getFocus() {
   if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
     focusText.classList.add('hidden')
     focusInput.classList.remove('hidden')
   } else {
     focusInput.classList.add('hidden')
     focusText.classList.remove('hidden')
     focusText.textContent = localStorage.getItem('focus')
   }
 }

 function getName() {
   if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
     nameText.classList.add('hidden')
     nameInput.classList.remove('hidden')
   } else {
     nameInput.classList.add('hidden')
     nameText.classList.remove('hidden')
     nameText.textContent = localStorage.getItem('name')
   }
 }

 function getCity() {
   if (localStorage.getItem('city') === null || localStorage.getItem('city') === '') {
     cityText.classList.add('hidden')
     cityInput.classList.remove('hidden')
   } else {
     cityInput.classList.add('hidden')
     cityText.classList.remove('hidden')
     cityText.textContent = localStorage.getItem('city')
   }
 }

 function changeBgr() {
   const img = document.createElement('img')
   if (document.body.style.backgroundImage.includes('morning')) {
     const src = `images/day/${Math.floor(Math.random()*20 + 1)}.jpg`
     img.src = src
     img.onload = () => {
       document.body.style.backgroundImage = `url(${src})`
     }
   } else if (document.body.style.backgroundImage.includes('day')) {
     const src = `images/evening/${Math.floor(Math.random()*20 + 1)}.jpg`
     img.src = src
     img.onload = () => {
       document.body.style.backgroundImage = `url(${src})`
     }
   } else if (document.body.style.backgroundImage.includes('evening')) {
     const src = `images/night/${Math.floor(Math.random()*20 + 1)}.jpg`
     img.src = src
     img.onload = () => {
       document.body.style.backgroundImage = `url(${src})`
     }
   } else if (document.body.style.backgroundImage.includes('night')) {
     const src = `images/morning/${Math.floor(Math.random()*20 + 1)}.jpg`
     img.src = src
     img.onload = () => {
       document.body.style.backgroundImage = `url(${src})`
     }
   }
 }

 async function getQuote() {
   const url = `quote.json`
   const res = await fetch(url)
   const data = await res.json()
   blockquote.textContent = data.quoteText[Math.floor(Math.random() * data.quoteText.length)]
 }

 async function getWeather() {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=08f2a575dda978b9c539199e54df03b0&units=metric`
   const res = await fetch(url)
   const data = await res.json()
   weatherIcon.className = 'weather-icon owf'
   weatherIcon.classList.add(`owf-${data.weather[0].id}`)
   temperature.textContent = `темпер ${data.main.temp}°C`
   wind.textContent = `ветер ${data.wind.speed} м/с`
   humidity.textContent = `влажность ${data.main.humidity} %`
   weatherDescription.textContent = data.weather[0].description
 }



 showTime()
 setBgGreet()
 getName()
 getFocus()
 getQuote()
 getCity()




 bgReload.addEventListener('click', changeBgr)
 btnQuote.addEventListener('click', getQuote)
 document.addEventListener('DOMContentLoaded', getWeather)
 nameInput.addEventListener('keypress', setName)
 nameInput.addEventListener('blur', blurName)
 nameText.addEventListener('click', newName)
 cityInput.addEventListener('keypress', setCity)
 cityInput.addEventListener('blur', blurCity)
 cityText.addEventListener('click', newCity)
 focusInput.addEventListener('keypress', setFocus)
 focusInput.addEventListener('blur', blurFocus)
 focusText.addEventListener('click', newFocus)