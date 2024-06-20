//! Class ...................................................................
// class is a term of oop which is a blueprint of an object
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Persons.prototype.introduce = function () {
        return "I am ".concat(this.name, " and I am ").concat(this.age, " now. I love ").concat(this.hobbies.join(", "), ".");
    };
    return Persons;
}());
var persons1 = new Persons("Mobin", 33, ["reading", "playing"]);
// console.log(persons1.hobbies);
var persons2 = new Persons("Efra", 1.5, ["Eating", "playing"]);
// console.log(persons2.introduce());
//! Inheritance .................................................................
// inheritance is a mechanism of oop for acquiring properties of another class
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, age, hobbies, id, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        //* super used for getting parent property
        _this.id = id;
        _this.grade = grade;
        return _this;
    }
    Students.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), " I am in grade ").concat(this.grade);
    };
    return Students;
}(Persons));
var students1 = new Students("Juyena", 16, ["coking", "playing"], 1001, "A+");
// console.log(students1.introduce());
//! public, private, protected (access modifier) ..................................
// by default every property/method is public
//? public can be used inside or outside the class
//? private can be used only in class who declare the property
//? protected can be used in parent and child class, not outside the class
var Persons2 = /** @class */ (function () {
    function Persons2(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    Persons2.prototype.introduce = function () {
        return "I am ".concat(this.name, " and I am ").concat(this.age, " now. I love ").concat(this.hobbies.join(", "), ".");
    };
    return Persons2;
}());
var persons21 = new Persons2("Mobin", 33, ["reading", "playing"]);
//console.log(persons21.hobbies) //? here throw an error
//console.log(persons21.introduce()) //? here throw an error
var Students2 = /** @class */ (function (_super) {
    __extends(Students2, _super);
    function Students2(name, age, hobbies, id, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        //* super used for getting parent property
        _this.id = id;
        _this.grade = grade;
        return _this;
    }
    Students2.prototype.introduce2 = function () {
        // return `${super.introduce()} I am in grade ${this.grade}`; //? here throw an error
        return "I am ".concat(this.name, " and I am ").concat(this.age, " now. I love ").concat(this.hobbies.join(", "), ". I am in grade ").concat(this.grade);
    };
    return Students2;
}(Persons2));
var students12 = new Students2("Juyena", 16, ["coking", "playing"], 1001, "A+");
//console.log(students12.hobbies) //? here throw an error
// console.log(students12.introduce2());
//! shorthand property ...........................................................
var Persons3 = /** @class */ (function () {
    //? no need to declare theme
    // name: string;
    // age: number;
    // hobbies: string[];
    //? it is important to define access modifier in constructor
    function Persons3(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
        // this.name = name;
        // this.age = age;
        // this.hobbies = hobbies;
        //? no need to define value
    }
    Persons3.prototype.introduce = function () {
        return "I am ".concat(this.name, " and I am ").concat(this.age, " now. I love ").concat(this.hobbies.join(", "), ".");
    };
    return Persons3;
}());
var persons13 = new Persons3("Mobin", 33, ["reading", "playing"]);
// console.log(persons13.hobbies);
var persons24 = new Persons3("Efra", 1.5, ["Eating", "playing"]);
// console.log(persons23.introduce());
var Students3 = /** @class */ (function (_super) {
    __extends(Students3, _super);
    function Students3(name, age, hobbies, id, grade) {
        var _this = _super.call(this, name, age, hobbies) || this;
        _this.id = id;
        _this.grade = grade;
        return _this;
        // this.id = id;
        // this.grade = grade;
    }
    Students3.prototype.introduce = function () {
        return "".concat(_super.prototype.introduce.call(this), " I am in grade ").concat(this.grade);
    };
    return Students3;
}(Persons3));
//! Getter and Setter ..........................................................
//? getter method allow you to get/retrieve the value of a class property
//? setter method allow you to set a value of a class property with condition or validation
var Persons4 = /** @class */ (function () {
    function Persons4(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    Object.defineProperty(Persons4.prototype, "age", {
        get: function () {
            if (this._age === undefined) {
                throw new Error("Age is not define!");
            }
            return this._age;
        },
        set: function (age) {
            if (age > 150 || age < 0) {
                throw new Error("Age is invalid!");
            }
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Persons4.prototype.introduce = function () {
        return "I am ".concat(this.name, " and I am ").concat(this._age, " now. I love ").concat(this.hobbies.join(", "), ".");
    };
    return Persons4;
}());
var persons4 = new Persons4("Mobin", ["reading", "playing"]);
persons4.age = 12;
// console.log(persons4.introduce());
// console.log(persons4.age);
//! Static property ..............................................................
//? static properties allow you to use them without create any instance of the class
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.sum = function (num1, num2) {
        return num1 + num2;
    };
    MathOperations.sub = function (num1, num2) {
        return num1 - num2;
    };
    MathOperations.Pi = Math.PI;
    return MathOperations;
}());
// console.log(MathOperations.sum(12, 18));
// console.log(MathOperations.sub(30, 18));
//! Abstract classes ...............................................................
//? Abstract class provide a way to define common properties and methods that multiple classes can share. It focus on inheritance. You cannot create any instance of abstract class.
var Shape = /** @class */ (function () {
    function Shape(color) {
        this.color = color;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, radius) {
        var _this = _super.call(this, color) || this;
        _this.color = color;
        _this.radius = radius;
        _this.displayArea = function () {
            console.log("This is a ".concat(_this.color, " circle with the radius ").concat(_this.radius, " and area is: ").concat(_this.calculateArea()));
        };
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    return Circle;
}(Shape));
var circle = new Circle("red", 5);
console.log(circle.calculateArea());
circle.displayArea();
