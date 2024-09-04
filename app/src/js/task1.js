'use strict';

class Blogger {
  constructor({
    name = 'Blogeger',
    age = 18,
    numbersOfPosts = 0,
    topics = [],
  }) {
    this.email = name;
    this.age = age;
    this.numbersOfPosts = numbersOfPosts;
    this.topics;
  }

  getInfo() {
    return `User ${this.email} is ${this.age} years old and has ${this.numbersOfPosts} posts`;
  }

  updatePostCount(value) {
    return (this.numbersOfPosts += value);
  }
}

const mango = new Blogger({
  name: 'mango@mail.com',
  age: 24,
  numbersOfPosts: 20,
  topics: ['tech', 'cooking'],
});

// console.log(mango.getInfo());
// mango.updatePostCount(5);
// console.log(mango.getInfo());

const poly = new Blogger({
  name: 'poly@mail.com',
  age: 19,
  numbersOfPosts: 17,
  topics: ['sports', 'gaming', 'health'],
});

// console.log(poly.getInfo());
// poly.updatePostCount(4);
// console.log(poly.getInfo());

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    if (!this.items.includes(item)) {
      this.items.push(item);
      return;
    }
    console.log('This item already exists');
    return 'This item already exists';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    console.log(index);
    if (!!~index) {
      this.items.splice(index, 1);
    }
  }
}

const storage = new Storage(['🍇', '🍏', '🥝', '🍍']);
const items = storage.getItems();
// console.table(items);

// storage.addItem('🍋');
// console.table(storage.items);

// storage.removeItem('🍇');
// console.table(storage.items);

// // indexOf(index) => -1 || 0
// // ~ (-1) => 1
// // ~ (-0) => 0
// // !! bool
// console.log(!!0); //Boolean(0)

class User {
  #login;
  #email;
  constructor({ login, email }) {
    this.#login = login;
    this.#email = email;
  }

  get login() {
    return this.#login;
  }

  set login(newLogin) {
    if (this.#login !== newLogin) {
      this.#login = newLogin;
    }
  }

  get email() {
    return this.#email;
  }

  set email(newEmail) {
    if (this.#email !== newEmail) {
      this.#email = newEmail;
    }
  }
}

const kiwi = new User({
  login: 'Kiwi',
  email: 'kiwi@mail.com',
});

console.log(kiwi.login);
kiwi.login = 'Kiwidoge';
console.log(kiwi.login);

const ajax = new User({
  login: 'Ajax',
  email: 'ajax@mail.com',
});

console.log(ajax.login);
ajax.login = 'Ajaxdoge';
console.log(ajax.login);

class Notes {
  static Priority = {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high',
  };
  constructor(notes) {
    this.items = notes;
  }

  addNote(note) {
    const inArr = this.items.some(({ text }) => text === note.text);
    if (!inArr) {
      this.items.push(note);
    }
  }

  removeNote(text) {
    const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
    if (!!~idx) {
      this.items.splice(idx, 1);
    }
  }

  updateNote(text, newPriority) {
    const idx = this.items.findIndex(({ text: noteText }) => noteText === text);
    if (!!~idx) {
      this.items[idx].priority = newPriority;
    }
  }
}

const myNotes = new Notes([]);

myNotes.addNote({
  text: 'My first note',
  priority: Notes.Priority.LOW,
});
myNotes.addNote({
  text: 'My first note',
  priority: Notes.Priority.LOW,
});
console.log(myNotes.items);

myNotes.addNote({
  text: 'My second note',
  priority: Notes.Priority.NORMAL,
});
console.log(myNotes.items);

myNotes.removeNote('My first note');
console.log(myNotes.items);

myNotes.updateNote('My second note', Notes.Priority.HIGH);
console.log(myNotes.items);

class ToggleEvent {
  constructor(isOpen = false) {
    this.on = isOpen;
  }

  toggle() {
    if (this.on) {
      this.on = false;
      return this.on;
    } else {
      this.on = true;
      return this.on;
    }
  }
}

const firstToggle = new ToggleEvent({ isOpen: true });
console.group('firstToggle');
console.log(firstToggle);
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
firstToggle.toggle();
console.log(firstToggle.on);
firstToggle.toggle();
console.groupEnd('firstToggle');

const secondToggle = new ToggleEvent();
console.group('secondToggle');
console.log(secondToggle);
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
secondToggle.toggle();
console.log(secondToggle.on);
console.groupEnd('secondToggle');
