class Animal {
  constructor(name, legs, speaks) {
    (this.name = name), (this.legs = legs), (this.speaks = speaks);
  }
  static myType() {
    console.log("iam an animal");
  }
  speak() {
    console.log("this animal speaks" + this.speaks);
  }
}

console.log(Animal.myType());
let dog = new Animal("Dog", 4, "Bhow");
console.log(dog);
dog.speak();
