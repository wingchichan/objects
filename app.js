const person = {
  name: "Olivia",
  age: 20,
  favColour: "teal",
};

console.log(person);
console.table(person);

console.log(person.age);

person.favFood = "chips";
console.log(person);

const car = {
  make: "Toyota",
  model: "C-HR",
  colour: "black",
  advert: function () {
    console.log(
      `Newest offer! Get your hands on all ${car.colour}, ${car.make} ${car.model}!`
    );
  },
};

console.log(car.advert);
car.advert();
