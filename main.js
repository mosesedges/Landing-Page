const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const amPm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)+ amPm}`;
    setTimeout(showTime, 1000);
}

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// set background greeting 
function setBg() {
    let today = new Date();
    hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = "Good Morning";
        document.body.style.color = "cornsilk"
        document.body.style.textShadow = "1px 1px 3px navy"
    } else if (hour < 18) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
        document.body.style.color = "white"
        document.body.style.textShadow = "1px 1px 1px green"
    } else {

        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = "Good Evening";
        document.body.style.color = "white";
    }
}
// get name

function getName() {
    if (localStorage.getItem("name") === null) {
        name.textContent = "[Enter Text]";
    } else {
        name.textContent = localStorage.getItem("name");
    }
}

// setName
function setName(e) {
    if (e.type === "keypress") {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("name", e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem("name", e.target.innerText)
    }
}


// get focus
function getFocus() {
    if (localStorage.getItem("focus") === null) {
        focus.textContent = "[Enter Focus]";
    } else {
        focus.textContent = localStorage.getItem("focus");
    }
}

//set focus
function setFocus(e) {
    if (e.type === "keypress") {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem("focus", e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem("focus", e.target.innerText)
    }
}

name.addEventListener("keypress", setName);
name.addEventListener(blur, setName);
focus.addEventListener("keypress", setFocus);
focus.addEventListener(blur, setFocus);


showTime();
setBg();
getName();
getFocus();
setName();
setFocus();