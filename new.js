// let sport = prompt('What kind of sport do you love?');
// let city = prompt('What is your current city?');
// let yearBirth = +prompt('What is your year of birth?');

function getAge(yearBirth) {
    const currentYear = new Date().getFullYear();
    let age = currentYear - yearBirth;
    return age;
}
function info() {
    let yearBirth = +prompt('What is your year of birth?');
    let city = prompt('What is your current city?');
    let sport = prompt('What kind of sport do you love?');

    const currentLocation = document.querySelector('#location');
    const currentSports = document.querySelector('#sports');
    const age = getAge(yearBirth);

    if(yearBirth === null || city === null || sport === null) {
        currentLocation.innerHTML = `<p>BADLY BAD</p>`;
        return
    }

    const sportsChampions = {
        "football": "Messi",
        "gym": "Shvarzenegger",
        "box": "Klichko"
    };

    if (sportsChampions.hasOwnProperty(sport.toLowerCase())) {
        currentSports.innerHTML = `<p>Круто! Хочеш стати ${sportsChampions[sport.toLowerCase()]}?</p>`;
    }

    function getCountry() {
        const capitals = {
            "Kiev": "України",
            "Washington": "США",
            "London": "Великої Британії"
        };
        return capitals[city.toLowerCase()];
    }

    if (city.toLowerCase() === "Kiev" || city.toLowerCase() === "Washington" || city.toLowerCase() === "London") {
        currentLocation.innerHTML = `<p>You are ${age} years old. Ти живеш у столиці ${getCountry(city)}, ${city}.</p>`;
    } else {
        currentLocation.innerHTML = `<p>You are ${age} years old. Ти живеш у місті ${city}.</p>`;
    }
}
info();