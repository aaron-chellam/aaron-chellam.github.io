let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/Alexander_the_Great-British_Museum.jpg') {
        myImage.setAttribute('src', 'images/alexander2.jpg');
    } else {
        myImage.setAttribute('src', 'images/Alexander_the_Great-British_Museum.jpg')
    }
}

let myButton = document.querySelector('button');
myButton.onclick = function () {
    setUserName();
}

let myHeading = document.querySelector('h1');

function setUserName () {
    let myName = prompt('Please enter your name.');

    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to this tribute page, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to this tribute page, ' + storedName;
}