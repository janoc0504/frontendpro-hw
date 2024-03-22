// let sport = prompt('What kind of sport do you love?');
// let city = prompt('What is your current city?');


function getAge(yearBirth) {
    const currentYear = new Date().getFullYear();
    let age = currentYear - yearBirth;
    return age;
}

function currentInformation() {
    let yearBirth = +prompt('What is your year of birth?');
    let sport = prompt('What kind of sport do you love?');
    let city = prompt('What is your current city?');

    const age = getAge(yearBirth);
    const currentLocation = document.querySelector('#location');
    const currentSports = document.querySelector('#sports');
    
    if(yearBirth === null || city === null || sport === null) {
        currentLocation.innerHTML = `<p>BADLY BAD</p>`;
        return
    }
console.log(yearBirth);
    currentLocation.innerHTML = '';
    if(!isNaN(age) && yearBirth !== 0) {
        switch (city.toLowerCase()) {
            case 'Kiev':
                currentLocation.innerHTML = `<p>You are ${age} years old.</p><p>You are living in the capital of Ukraine.</p>`;
                break;
            case 'London':
                currentLocation.innerHTML = `<p>You are ${age} years old.</p><p>You are living in the capital of Great Britain.</p>`;
                break;
            case 'Washington':
                currentLocation.innerHTML = `<p>You are ${age} years old.</p><p>You are living in the capital of USA.</p>`;
                break;
            default:
                currentLocation.innerHTML = `<p>You are ${age} years old.</p><p>You are living in ${city}.</p>`;
        }
    } else {
        currentLocation.innerHTML = `<p>Uuups!</p>`;
    }
    currentSports.innerHTML = '';
    switch (sport.toLowerCase()) {
        case 'Football':
            currentSports.innerHTML = `<p>Do you want to be as Pele?</p>`;
            break;
        case 'Boxing':
            currentSports.innerHTML = `<p>Do you want to be as Klichko?</p>`;
            break;
        case 'GYM':
            currentSports.innerHTML = `<p>Do you want to be as Shvarzenegger?</p>`;
            break;
    }
}

currentInformation();