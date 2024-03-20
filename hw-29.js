// let age = prompt('How old are you?');
let city = prompt('What is your current city?');
// let sport = prompt('What kind of sport do you love?');

const currentLocation = {
    Kyiv: 'Ukriane',
    Vashington: 'USA',
    London: 'The UK'
}

function showUserInfo() {
    for(let item in currentLocation) {
        if(item.trim().toLowerCase() === city.trim().toLowerCase()) {
           return console.log(`If ${city} is the capital of your county, you are living in ${currentLocation[item]}`);
        }
    }
}

showUserInfo();