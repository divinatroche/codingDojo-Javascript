
//Problema 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars //se le asigna Tesla
const [ ,otherRandomCar ] = cars //se le asigna Mercedes
//Predict the output
console.log(randomCar) //imprime el primer valor de cars -> Tesla
console.log(otherRandomCar) // imprime el segundo valro de cars -> Mercedes

//Problema 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name); // Imprime error porque no tiene acceso, deberia employee.name sin destructurar
console.log(otherName); //Elon

//Problema 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); // imprime 12345
console.log(hashedPassword); //imprime undefined porque no esta definido password dentro de person

//Problema 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //se asigna valor 2
const [,,,second] = numbers;//se asigna valor 5
const [,,,,,,,,third] = numbers;//se asigna valor 2
//Predict the output
console.log(first == second);//false
console.log(first == third);//true



//Problema 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //se asigna valor value
const { secondKey } = lastTest; //se asigna todo el array secondkey
const [ ,willThisWork] = secondKey; //se asigna 5
//Predict the output
console.log(key);//value
console.log(secondKey);//[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]);//1
console.log(willThisWork);//5

