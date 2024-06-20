//! Class ...................................................................
// class is a term of oop which is a blueprint of an object

class Persons {
  name: string;
  age: number;
  hobbies: string[];
  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  introduce(): string {
    return `I am ${this.name} and I am ${
      this.age
    } now. I love ${this.hobbies.join(", ")}.`;
  }
}

const persons1: Persons = new Persons("Mobin", 33, ["reading", "playing"]);
// console.log(persons1.hobbies);
const persons2: Persons = new Persons("Efra", 1.5, ["Eating", "playing"]);
// console.log(persons2.introduce());
//! Inheritance .................................................................
// inheritance is a mechanism of oop for acquiring properties of another class

class Students extends Persons {
  id: number;
  grade: string;
  constructor(
    name: string,
    age: number,
    hobbies: string[],
    id: number,
    grade: string
  ) {
    super(name, age, hobbies);
    //* super used for getting parent property
    this.id = id;
    this.grade = grade;
  }

  introduce(): string {
    return `${super.introduce()} I am in grade ${this.grade}`;
  }
}
const students1: Students = new Students(
  "Juyena",
  16,
  ["coking", "playing"],
  1001,
  "A+"
);
// console.log(students1.introduce());
//! public, private, protected (access modifier) ..................................
// by default every property/method is public
//? public can be used inside or outside the class
//? private can be used only in class who declare the property
//? protected can be used in parent and child class, not outside the class

class Persons2 {
  name: string;
  public age: number;
  protected hobbies: string[];
  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
  }

  private introduce(): string {
    return `I am ${this.name} and I am ${
      this.age
    } now. I love ${this.hobbies.join(", ")}.`;
  }
}
const persons21: Persons2 = new Persons2("Mobin", 33, ["reading", "playing"]);

//console.log(persons21.hobbies) //? here throw an error
//console.log(persons21.introduce()) //? here throw an error

class Students2 extends Persons2 {
  id: number;
  grade: string;
  constructor(
    name: string,
    age: number,
    hobbies: string[],
    id: number,
    grade: string
  ) {
    super(name, age, hobbies);
    //* super used for getting parent property
    this.id = id;
    this.grade = grade;
  }

  introduce2(): string {
    // return `${super.introduce()} I am in grade ${this.grade}`; //? here throw an error
    return `I am ${this.name} and I am ${
      this.age
    } now. I love ${this.hobbies.join(", ")}. I am in grade ${this.grade}`;
  }
}
const students12: Students2 = new Students2(
  "Juyena",
  16,
  ["coking", "playing"],
  1001,
  "A+"
);

//console.log(students12.hobbies) //? here throw an error
// console.log(students12.introduce2());
//! shorthand property ...........................................................
class Persons3 {
  //? no need to declare theme
  // name: string;
  // age: number;
  // hobbies: string[];
  //? it is important to define access modifier in constructor
  constructor(
    public name: string,
    public age: number,
    public hobbies: string[]
  ) {
    // this.name = name;
    // this.age = age;
    // this.hobbies = hobbies;
    //? no need to define value
  }

  introduce(): string {
    return `I am ${this.name} and I am ${
      this.age
    } now. I love ${this.hobbies.join(", ")}.`;
  }
}

const persons13: Persons3 = new Persons3("Mobin", 33, ["reading", "playing"]);
// console.log(persons13.hobbies);
const persons24: Persons3 = new Persons3("Efra", 1.5, ["Eating", "playing"]);
// console.log(persons23.introduce());

class Students3 extends Persons3 {
  constructor(
    name: string,
    age: number,
    hobbies: string[],
    public id: number,
    private grade: string
  ) {
    super(name, age, hobbies);
    // this.id = id;
    // this.grade = grade;
  }

  introduce(): string {
    return `${super.introduce()} I am in grade ${this.grade}`;
  }
}

//! Getter and Setter ..........................................................
//? getter method allow you to get/retrieve the value of a class property
//? setter method allow you to set a value of a class property with condition or validation

class Persons4 {
  private _age: number | undefined;

  constructor(public name: string, public hobbies: string[]) {}

  public set age(age: number) {
    if (age > 150 || age < 0) {
      throw new Error("Age is invalid!");
    }
    this._age = age;
  }

  public get age() {
    if (this._age === undefined) {
      throw new Error("Age is not define!");
    }
    return this._age;
  }

  introduce(): string {
    return `I am ${this.name} and I am ${
      this._age
    } now. I love ${this.hobbies.join(", ")}.`;
  }
}
const persons4: Persons4 = new Persons4("Mobin", ["reading", "playing"]);
persons4.age = 12;
// console.log(persons4.introduce());
// console.log(persons4.age);

//! Static property ..............................................................
//? static properties allow you to use them without create any instance of the class

class MathOperations {
  public static Pi: number = Math.PI;

  public static sum(num1: number, num2: number): number {
    return num1 + num2;
  }
  public static sub(num1: number, num2: number): number {
    return num1 - num2;
  }
}
// console.log(MathOperations.sum(12, 18));
// console.log(MathOperations.sub(30, 18));
//! Abstract classes ...............................................................
//? Abstract class provide a way to define common properties and methods that multiple classes can share. It focus on inheritance. You cannot create any instance of abstract class.

abstract class Shape {
  constructor(protected color: string) {}
  abstract calculateArea(): number;
  abstract displayArea: () => void;
}

class Circle extends Shape {
  constructor(protected color: string, protected radius: number) {
    super(color);
  }
  public calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }

  displayArea: () => void = (): void => {
    console.log(
      `This is a ${this.color} circle with the radius ${
        this.radius
      } and area is: ${this.calculateArea()}`
    );
  };
}

const circle: Circle = new Circle("red", 5);
// console.log(circle.calculateArea());
// circle.displayArea();

class Rectangle extends Shape {
  constructor(
    protected color: string,
    protected length: number,
    protected width: number
  ) {
    super(color);
  }
  public calculateArea(): number {
    return this.length * this.width;
  }

  displayArea: () => void = (): void => {
    console.log(
      `This is a ${this.color} color rectangle with the length ${
        this.length
      } and width ${this.width}. Area is: ${this.calculateArea()}`
    );
  };
}

const rectangle: Rectangle = new Rectangle("orange", 5, 6);
console.log(rectangle.calculateArea());
rectangle.displayArea();
