const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const myTime = document.getElementById('myTime');
const time = new Date();

myTime.innerHTML = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();