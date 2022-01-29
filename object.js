var student1 = {
    name: 'mujo',
    age: 25,
    language: ['bangla', 'English']
}
var student2 = {
    name: 'jafar',
    age: 26,
    language: ['bangla']
}
var student3 = {
    name: 'mehedi',
    age: 24,
    language: ['bangla', 'English', 'hindi']
}

// console.log(student1.language);

// adding a constructor (for property template).constructor is one kind of special function which will help you to create template.



function Student(age, name, language) {
    this.name = name;
    this.age = age;
    this.language = language;

    // adding function inside a constructor
    this.display = function () {
        console.log(student1.language);
        console.log(student1.name);
        console.log(student1.age);
    }
}

var student1 = new Student('mehedi', 23, ['bangla', 'English', 'hindi']);
var student2 = new Student('jafar', 25, ['bangla']);
var student3 = new Student('mujammel', 26, ['English', 'hindi']);
var student4 = new Student('khairul', 22, ['bangla']);

student1.display();



