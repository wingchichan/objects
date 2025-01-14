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

// Complex Objects

const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};

console.log(blogPost.title);
console.log(blogPost.author.age);
console.log(blogPost.tags.length);
console.log(blogPost.tags[0]);

for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}

blogPost.tags.forEach(function (tag) {
  console.log(tag);
});

for (const tag of blogPost.tags) {
  console.log(tag);
}
