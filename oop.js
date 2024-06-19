"use strict";
//! Class ...................................................................
// class is a term of oop which is a blueprint of an object
class Persons {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `I am ${this.name} and I am ${this.age} now. I love ${this.hobbies.join(", ")}.`;
    }
}
const persons1 = new Persons("Mobin", 33, ["reading", "playing"]);
// console.log(persons1.hobbies);
const persons2 = new Persons("Efra", 1.5, ["Eating", "playing"]);
// console.log(persons2.introduce());
//! Inheritance .................................................................
// inheritance is a mechanism of oop for acquiring properties of another class
class Students extends Persons {
    id;
    grade;
    constructor(name, age, hobbies, id, grade) {
        super(name, age, hobbies);
        //* super used for getting parent property
        this.id = id;
        this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} I am in grade ${this.grade}`;
    }
}
const students1 = new Students("Juyena", 16, ["coking", "playing"], 1001, "A+");
// console.log(students1.introduce());
//! public, private, protected (access modifier) ..................................
// by default every property/method is public
//? public can be used inside or outside the class
//? private can be used only in class who declare the property
//? protected can be used in parent and child class, not outside the class
class Persons2 {
    name;
    age;
    hobbies;
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    introduce() {
        return `I am ${this.name} and I am ${this.age} now. I love ${this.hobbies.join(", ")}.`;
    }
}
const persons21 = new Persons2("Mobin", 33, ["reading", "playing"]);
//console.log(persons21.hobbies) //? here throw an error
//console.log(persons21.introduce()) //? here throw an error
class Students2 extends Persons2 {
    id;
    grade;
    constructor(name, age, hobbies, id, grade) {
        super(name, age, hobbies);
        //* super used for getting parent property
        this.id = id;
        this.grade = grade;
    }
    introduce2() {
        // return `${super.introduce()} I am in grade ${this.grade}`; //? here throw an error
        return `I am ${this.name} and I am ${this.age} now. I love ${this.hobbies.join(", ")}. I am in grade ${this.grade}`;
    }
}
const students12 = new Students2("Juyena", 16, ["coking", "playing"], 1001, "A+");
//console.log(students12.hobbies) //? here throw an error
// console.log(students12.introduce2());
//! shorthand property ...........................................................
class Persons3 {
    name;
    age;
    hobbies;
    //? no need to declare theme
    // name: string;
    // age: number;
    // hobbies: string[];
    //? it is important to define access modifier in constructor
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        // this.name = name;
        // this.age = age;
        // this.hobbies = hobbies;
        //? no need to define value
    }
    introduce() {
        return `I am ${this.name} and I am ${this.age} now. I love ${this.hobbies.join(", ")}.`;
    }
}
const persons13 = new Persons3("Mobin", 33, ["reading", "playing"]);
// console.log(persons13.hobbies);
const persons24 = new Persons3("Efra", 1.5, ["Eating", "playing"]);
// console.log(persons23.introduce());
class Students3 extends Persons3 {
    id;
    grade;
    constructor(name, age, hobbies, id, grade) {
        super(name, age, hobbies);
        this.id = id;
        this.grade = grade;
        // this.id = id;
        // this.grade = grade;
    }
    introduce() {
        return `${super.introduce()} I am in grade ${this.grade}`;
    }
}
//! Getter and Setter ..............................................................
