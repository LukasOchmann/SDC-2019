() => 1 + 1; // return 2

name => `Hallo, ich bin ${name}`; // return Hallo, ich bin +name

(name, age) => `Hallo, ich bin ${name} und ${age} Jahre alt`;  // return `Hallo, ich bin +name+ und +age+ Jahre alt`

call => {
  call(1);
  call(2);
  call(3);
};

call => {
  call(1);
  call(2);
  call(3);
  return 4;
};
