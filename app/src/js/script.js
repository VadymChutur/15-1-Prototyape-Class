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
  static counter = 0;
  static addUser() {
    this.counter += 1;
    // User.counter += 1;
    console.log(`Number of users ${this.counter}`);
  }

  #location;
  constructor({
    name,
    email,
    age = 18,
    location = 'World',
    password = '1234567',
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.#location = location;
    this.password = password;
    User.addUser();
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

class Avatar extends User {
  // constructor({ name, email, location, age, password, damage }) {
  //   super({ name, email, age, password, location });
  //   this.damage = damage;
  // }
  constructor({ damage, ...args }) {
    super(args);
    this.damage = damage;
  }

  attack() {
    console.log(`Attack with damage ${this.damage}`);
  }
}

class Human extends User {
  constructor({ speed, ...args }) {
    super(args);
    this.speed = speed;
  }

  dodge() {
    console.log(`Human dodge with ${this.speed} speed`);
  }
}

const test = new Avatar({
  name: 'User A',
  email: 'mail@gmail.com',
  location: 'Kyev',
  damage: 1000,
});

const test2 = new Human({
  name: 'User B',
  email: 'mailB@gmail.com',
  speed: 500,
});
// const test = new User({
//   name: 'User A',
//   email: 'test@gmail.com',
//   location: 'Kyev',
//   password: 'qwerty123',
// });
// const test1 = new User({
//   name: 'User B',
//   email: 'mail@gmail.com',
//   age: 25,
// });
// console.log(test);
// console.log(test1);
// test.sayHello();
// // test.getLocation = function () {
// //   console.log(this.location);
// // };
// console.log(test);
// console.log(test.getLocatiton);
// test.getLocatiton = 'London';

console.log(test);
console.log(test2);
