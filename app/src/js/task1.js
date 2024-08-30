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
