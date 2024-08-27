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
  constructor() {
    console.log(this);
  }
}

const test = new User();
