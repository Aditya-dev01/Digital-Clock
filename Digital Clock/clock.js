let hrs = document.querySelector("#HRS");
let min = document.querySelector("#MIN");
let sec = document.querySelector("#SEC");
setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();

}, 1000);

