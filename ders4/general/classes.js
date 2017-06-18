class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const person = new Person('Selçuk');

console.log(person.getName());

class ExamplePerson extends Person {
  constructor(name, lastName) {
    super(name);
    this.lastName = lastName;
  }

  getLastName() {
    return this.lastName;
  }
  getFullName() {
    return `${this.getName()} ${this.getLastName()}`;
  }
}

const person2 = new ExamplePerson('Alpcan', 'Aydın');

console.log(person2.getFullName());
