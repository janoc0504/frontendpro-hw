'use strict';

function getAge(yearBirth) {
    const currentYear = new Date().getFullYear();
    let age = currentYear - yearBirth;
    return age;
}
function currentInformation() {

    let yearBirth = +prompt('What is your year of birth?');
    let city = prompt('What is your current city?');
    let sport = prompt('What kind of sport do you love?');

    const currentYear = new Date().getFullYear();
    const age = getAge(yearBirth);
    const currentAge = document.querySelector('#age');
    const currentLocation = document.querySelector('#location');
    const currentSports = document.querySelector('#sport');

    // console.log(yearBirth);
    // console.log(city);
    // console.log(sport);

    if(!isNaN(age) && yearBirth < currentYear && age !== 0 && yearBirth !== 0) {
        currentAge.innerHTML = `<p>Your age is ${age}.</p>`;
    } else {
        currentAge.innerHTML = `<p>It is a pity you did not want to enter your real year of birth.</p>`;
    }

    if(sport === "football" || sport === "box" ||  sport === "gym" || sport) {
        switch (sport.toLowerCase()) {
            case 'football':
                currentSports.innerHTML = `<p>Do you want to be as Pele?</p>`;
                break;
            case 'box':
                currentSports.innerHTML = `<p>Do you want to be as Klichko?</p>`;
                break;
            case 'gym':
                currentSports.innerHTML = `<p>Do you want to be as Shvarzenegger?</p>`;
                break;
            default:
                currentSports.innerHTML = `<p>Your favorite sport is ${sport}.</p>`;
        }
    } else {
        currentSports.innerHTML = `<p>It is a pity you did not want to enter your love sport.</p>`;
    }

    if(city !== "" && city !== null) {
        switch (city.toLowerCase()) {
            case 'kiev':
                currentLocation.innerHTML = `<p>You are living in the capital of Ukraine.</p>`;
                break;
            case 'london':
                currentLocation.innerHTML = `<p>You are living in the capital of Great Britain.</p>`;
                break;
            case 'washington':
                currentLocation.innerHTML = `<p>You are living in the capital of USA.</p>`;
                break;
            default:
                currentLocation.innerHTML = `<p>You are living in ${city}.</p>`;
        }
    } else {
        currentLocation.innerHTML = `<p>It is a pity you did not want to enter your city.</p>`;
    }
}

currentInformation();