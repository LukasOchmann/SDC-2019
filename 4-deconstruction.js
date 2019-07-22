const person = {
  name: 'Lukas',
  age: 22,
  job: {
    name: 'Entwickler',
    company: 'SEITENBAU'
  },
  hobbys: ['Archery', 'Dancing']
};

/**
 *
 * @param {string} name
 * @param {object} additional  age: int, hobbys:array , JobName: string
 */
function renderActiveUser(name, additional) {
  console.log(name, additional);
  return true;
}

renderActiveUser(person.name, { hobbys: person.hobbys, age: person.age });
const {name , ...rest} = person;
renderActiveUser(name, rest)

