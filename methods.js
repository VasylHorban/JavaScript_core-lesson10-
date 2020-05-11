//Class Student
function Student(name, sex, age) {
    this.name = name;
    this.sex = sex;
    this.age = age;
}

let students = [
    new Student('Ivan', 'male', 21),
    new Student('Petro', 'male', 19),
    new Student('Oksana', 'female', 18),
    new Student('Alex', 'male', 18),
    new Student('Veronika', 'female', 20),
];
console.log(students);


//filter by age and gender
let filterStudents = students.filter((obj) => obj.age < 21 && obj.sex == 'male');
console.log(filterStudents);


//add value "yearsUnderAg"
filterStudents = filterStudents.map((obj) => {
    obj['yearsUnderAg'] = 21 - obj.age
    return obj;
});
console.log(filterStudents);


//check the sort type
function checkSort(a, b) {
    if (a.age == b.age) {
        return sortByName(a, b);
    } else {
        return sortByAge(a, b);
    }
}

//by age
function sortByAge(a, b) {
    return a.age - b.age;
}

//by name
function sortByName(a, b) {
    let aName = a.name.toLowerCase();
    let bName = b.name.toLowerCase();
    if (aName > bName) {
        return 1;
    } else {
        return -1;
    }
}
students.sort(checkSort);
console.log(students);
