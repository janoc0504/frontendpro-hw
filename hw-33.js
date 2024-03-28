//Створити сутність "Людина".
class Human {
  name = 'Name';
  age = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  humanInfo() {
    console.log(this.name, this.age);
  }
}

//Створити сутність "Автомобіль".
class Car {

  constructor(brand, model, year, plateNumber) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.plateNumber = plateNumber;
    this.owner = null;
  }

  assaignOwner(owner) {
    if (owner.age < 18) {
      console.log('==============================');
      console.log('The owner yanger then 18 years.');
    } else {
      this.owner = owner;
    }
  }

  aboutCar() {
    console.log("Car Information:");
    console.log(this.brand);
    console.log(this.model);
    console.log(this.year);
    console.log(this.plateNumber);
    // console.log(this.owner.name, this.owner.age);

    if (this.owner !== null) {
      console.log("Owner Information:");
      console.log("Name:", this.owner.name);
      console.log("Age:", this.owner.age);
    } else {
      console.log("This car doesn't have an owner.");
      console.log('==============================');
    }
  }
}

const owner1 = new Human('Jack', 33);
const auto1 = new Car('Toyota', 'Camry', 2023, 'AA7107CX');
auto1.assaignOwner(owner1);
auto1.aboutCar();

const owner2 = new Human('Jon', 17);
const auto2 = new Car('Opel', 'Zafira', 2010, 'AA1803TX');
auto2.assaignOwner(owner2);
auto2.aboutCar();

const owner3 = new Human('Jaeni', 19);
const auto3 = new Car('BMW', 'Mini', 2010, 'AX1333CT');
auto3.assaignOwner(owner3);
auto3.aboutCar();