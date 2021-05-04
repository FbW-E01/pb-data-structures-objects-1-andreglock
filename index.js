const person = {
    firstName: 'Mike',
    lastName: 'Smith',
}

for (const value in person) {
    console.log(value, person[value]);
};

const choices = {
    choice1: "tea",
    choice2: "coffee",
    choice3: "milk",
};

const getObjectValues = (object) => {
    let retArray = [];
    for (const value in object) {
        retArray.push(object[value]);
    }
    return retArray;
};

console.log('2:', getObjectValues(choices));

const anotherPerson = {
    firstName: "Michael",
    lastName: "Smith", 
    job: "driver",
    age: 20, 
    city: "Paris",
    printValues() {
        return `${this.firstName} ${this.lastName} is a ${this.age} years old ${this.job} in ${this.city}`;
    }
};

console.log('3:', anotherPerson.printValues());

const objectFour = {
    A: 1,
    B: 2,
    C: 3,
};

const objectFive = {
    cats: 1,
    dogs: 2, 
    turtles: 4
};

const objectToArray = (object) => {
    let retArray = [];
    let key = Object.keys(object);
    for (i = 0; i < Object.keys(object).length; i++) {
        retArray.push([]);
        retArray[i].push(key[i]);
        retArray[i].push(object[key[i]]);
    }
    return retArray;
};

console.log('1 bonus:', objectToArray(objectFour));
console.log('1 bonus:', objectToArray(objectFive));

const student = {
    name: 'Mike',
    class: '4A',
    course: 'Introduction to advanced topics',
};

const listProperties = (object) => {
    return Object.keys(object);
};

console.log('2 bonus:', listProperties(student));

const first = {firstName: 'John'};
const last = {
    //firstName: 'João',
    lastName: 'Smith',
    age: 40,
};

const merge = (objectOne, objectTwo) => {
    let object = objectOne;
    let keys = Object.keys(objectTwo);
    for (let i = 0; i < keys.length; i++) {
        object[keys[i]] = objectTwo[keys[i]];
    }
    return object;
};

console.log('3 bonus:', merge(first, last));

// If there are properties with the same value only one of them will be in the returned value. If there are two identical keys with different values the value of the second object will be returned because of the structure of the function.

const switchedPerson = {
    name: "John", 
    job: "teacher",
};

const switchObject = (object) => {
    let retObject = {};
    let keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        retObject[object[keys[i]]] = keys[i];
    }
    return retObject;
};

console.log('4 bonus:', switchObject(switchedPerson));

const returnArrays = (object) => {
    let retArray = [];
    for (const value in object) {
        retArray.push(object[value]);
    }
    return [Object.keys(object), retArray];
}

console.log('5 bonus:', returnArrays(objectFour));