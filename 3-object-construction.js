let person = {};
console.log(person);

person.name = 'Lukas';
console.log(person);

person['age'] = 22;
console.log(person);

const key = 'hobbys';
person[key] = ['Archery', 'Dancing'];
console.log(person);