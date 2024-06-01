let count = 0;
let perSecond = 0;

function clickCookie() {
    count++;
    document.getElementById('counter').innerHTML = `쿠키: ${count}`;
}

function updateCookies() {
    count += perSecond;
    document.getElementById('counter').innerHTML = `쿠키: ${count}`;
}

setInterval(updateCookies, 1000);
