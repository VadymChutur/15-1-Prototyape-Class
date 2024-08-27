'use strickt';
console.log('Hello world');

// const user = {
//   name: 'Test User a',
//   age: 18,
//   sayHello() {
//     console.log(this.name);
//   },
//   showAge() {
//     console.log(`My age ${this.age}`);
//   },
// };

// const user1 = Object.create(user);
// user1.name = 'test user 1';
// user1.sayHello();
// const user2 = Object.create(user);
// user2.age = 23;
// user2.showAge();

// console.log('User 1: ', user1);
// console.log('User 2: ', user2);

// const user = {
//   name: 'Test User a',
//   sayHello() {
//     console.log(this.name);
//   },
// };

// const admin = Object.create(user);
// admin.age = 19;
// admin.showAge = function () {
//   console.log(this.age);
// };

// console.log(admin);
// const practiceOwner = Object.create(admin);
// practiceOwner.name = 'Owner';
// practiceOwner.age = 35;
// console.log(practiceOwner);
// practiceOwner.sayHello();
// practiceOwner.showAge();

class User {
  #location;
  constructor({ name, email, age = 18, location = 'World', password }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.#location = location;
    this.password = password;
  }
  sayHello() {
    console.log(`Hello ${this.name}`);
  }
  get getLocatiton() {
    return this.#location;
  }
  set getLocatiton(city) {
    // const value = prompt('Enter password');
    // if (value === this.password) {
    //   this.#location = city;
    //   console.log(this.#location);
    // } else {
    //   console.log('Wrong password');
    // }
    console.log((this.#location = city));
  }
}

const test = new User({
  name: 'User A',
  email: 'test@gmail.com',
  location: 'Kyev',
  password: 'qwerty123',
});
const test1 = new User({
  name: 'User B',
  email: 'mail@gmail.com',
  age: 25,
});
console.log(test);
console.log(test1);
test.sayHello();
// test.getLocation = function () {
//   console.log(this.location);
// };
console.log(test);
console.log(test.getLocatiton);
test.getLocatiton = 'London';
