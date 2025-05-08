const changeTextBtn = document.getElementById('changeTextBtn');
const toggleStyleBtn = document.getElementById('toggleStyleBtn');
const addElementBtn = document.getElementById('addElementBtn');
const pageTitle = document.getElementById('pageTitle');
const contentSection = document.getElementById('contentSection');

changeTextBtn.addEventListener('click', function() {
    pageTitle.textContent = 'Text Changed Dynamically!';
});

let styleToggled = false;
toggleStyleBtn.addEventListener('click', function() {
    if (styleToggled) {
        contentSection.style.backgroundColor = '#fff';
        contentSection.style.color = '#333';
    } else {
        contentSection.style.backgroundColor = '#f0f8ff';
        contentSection.style.color = '#000';
    }
    styleToggled = !styleToggled;
});

addElementBtn.addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This is a new element added dynamically!';
    contentSection.appendChild(newElement);
});
