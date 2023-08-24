let users = [];
let name1 = document.getElementById('name');
let email = document.getElementById('email');
const indianCities = ["Mumbai","Delhi","Bangalore","Chennai","Kolkata","Hyderabad","Pune","Ahmedabad","Jaipur","Lucknow"];

function getRandomIndianCity() {
    const randomIndex = Math.floor(Math.random() * indianCities.length);
    return indianCities[randomIndex];
}

function displayUsers() {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerText = '';
    users.forEach((user, index) => {
        const userCard = document.createElement('div');
        userCard.classList.add('card');
        const userIcon = document.createElement('img');
        userIcon.setAttribute('src', 'https://img.icons8.com/material-sharp/24/user.png');
        userIcon.setAttribute('alt', 'user');
        userIcon.setAttribute('width', '24');
        userIcon.setAttribute('style', 'height: 24px');

        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('det');

        const details = document.createElement('div');
        details.classList.add('details');

        const nameParagraph = document.createElement('p');
        nameParagraph.classList.add('nameo');
        nameParagraph.textContent = user.name;

        const emailParagraph = document.createElement('p');
        emailParagraph.classList.add('emailo');
        emailParagraph.textContent = user.email;

        details.appendChild(nameParagraph);
        details.appendChild(emailParagraph);

        const centerParagraph = document.createElement('p');
        centerParagraph.classList.add('center');
        centerParagraph.textContent = user.city;

        detailsContainer.appendChild(details);
        detailsContainer.appendChild(centerParagraph);

        userCard.appendChild(userIcon);
        userCard.appendChild(detailsContainer);

        resultsContainer.appendChild(userCard);
    });
}

function add() {
    const randomIndianCity = getRandomIndianCity();
    let user = {
        name: name1.value,
        email: email.value,
        city: randomIndianCity      
    }
    users.push(user);
    displayUsers();
    console.log(users);
}