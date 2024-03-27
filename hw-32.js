//Створити клас Людина.
class Human {
  name = 'Name';
  gender = 'Gender';

  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

//декілька екземплярів класу Людина;
const Jon = new Human('Jon', 'Male');
console.log(Jon.name, Jon.gender);
const Jaeni = new Human('Jaeni', 'Female');
console.log(Jaeni.name, Jaeni.gender);
const Jack = new Human('Jack', 'Male');
console.log(Jack.name, Jack.gender);
const Caty = new Human('Caty', 'Female');
console.log(Caty.name, Caty.gender);
const Bob = new Human('Bob', 'Male');
console.log(Bob.name, Bob.gender);
const Anna = new Human('Anna', 'Female');
console.log(Anna.name, Anna.gender);

//Створити клас Квартира.
class Unit {
  neighbours = [];

  addNeighbuor(human) {
    this.neighbours.push(human);
  }
}

//декілька екземплярів класу Квартира;
const unit1 = new Unit();
const unit2 = new Unit();

//додадити екземпляри класу Людина до екземплярів класу Квартира;
unit1.addNeighbuor(Jon);
unit1.addNeighbuor(Bob);
unit1.addNeighbuor(Jack);
//get the array of neighbours
unit1.neighbours.forEach(neighbours => {
  console.log(`${neighbours.gender} ${neighbours.name} are living in the unit1.`);
})

unit2.addNeighbuor(Caty);
unit2.addNeighbuor(Jaeni);
unit2.addNeighbuor(Anna);
//get the array of neighbours
unit2.neighbours.forEach(neighbours => {
  console.log(`${neighbours.gender} ${neighbours.name} are living in the unit2.`);
})

//Створити клас Будинок.
class House {
  units = [];

  constructor(maxUnits) {
    this.maxUnits = maxUnits;
  }

  addUnit(unit) {
    if (this.units.length < this.maxUnits) {
      this.units.push(unit);
    } else {
      for (let i = 1; i <= this.maxUnits; i++) {
        console.log(`Add unit N ${i}`);
      }
      console.log('This is the maximum of units.');
    }
  }
}

//екземпляр класу Будинок;
const house1 = new House(4);

//додадити екземпляри класу Квартира до екземплярів класу Будинок.
house1.addUnit(); //Add unit
house1.addUnit(); //Add unit
house1.addUnit(); //Add unit
house1.addUnit(); //Add unit
house1.addUnit(); //This is the maximum of units.