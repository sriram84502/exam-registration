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

        const nameParagraph = document.createElement('p');
        nameParagraph.classList.add('nameo');
        nameParagraph.textContent = 'Name: '+user.name;

        const emailParagraph = document.createElement('p');
        emailParagraph.classList.add('emailo');
        emailParagraph.textContent = 'Email: '+user.email;

        const centerParagraph = document.createElement('p');
        centerParagraph.classList.add('center');
        centerParagraph.textContent = 'center: '+user.city;

        userCard.appendChild(nameParagraph);
        userCard.appendChild(emailParagraph);
        userCard.appendChild(centerParagraph);

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
    let checkuser = users.filter((useri) => {
        return user.email == useri.email;
    });
    if(checkuser.length == 0){
        users.push(user);
    }
    else{
        alert('user already registered');
    }
    displayUsers();
    console.log(users);
}