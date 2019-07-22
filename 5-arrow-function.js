class Person {
  constructor() {
    this.data = {
      name: 'Lukas'
    };
  }

  update() {
    cinst 
    setTimeout(function() {
      this.data = { name: 'Tobias' };
    }.bind(this), 500);
  }
}

const person = new Person();
console.log(person.data);

person.update();

setTimeout(function() {
  console.log(person.data);
}, 600);
