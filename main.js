// debugger;

const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    }
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price of your meal is ${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'Soup', 10);
menu.addDishToCourse('appetizers', 'Ceviche', 15);
menu.addDishToCourse('appetizers', 'Greek Salad', 15);
menu.addDishToCourse('appetizers', 'Papa a la Huancaina', 15);
menu.addDishToCourse('appetizers', 'Tequeños', 13);

menu.addDishToCourse('mains', 'Lasagna', 29);
menu.addDishToCourse('mains', 'Fried Chicken', 25);
menu.addDishToCourse('mains', 'Pizza', 28);
menu.addDishToCourse('mains', 'Tacos', 25);
menu.addDishToCourse('mains', 'Paella', 27);

menu.addDishToCourse('desserts', 'Ice Cream', 12);
menu.addDishToCourse('desserts', 'Chocolate Cake', 14);
menu.addDishToCourse('desserts', 'Banana Split', 11);
menu.addDishToCourse('desserts', 'Tres Leches', 13);
menu.addDishToCourse('desserts', 'Alfajores', 15);

let meal = menu.generateRandomMeal();
console.log(meal)