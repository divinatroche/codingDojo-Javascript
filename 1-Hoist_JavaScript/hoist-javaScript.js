/******1**********/
console.log(hello);                                   
var hello = 'world';                                 
//imprime undefinend porque var hello esta declarado despues de la impresion
//AFTER HOISTING BY THE INTERPRETER
var hello; 
console.log(hello);//imprime undefined
hello = 'world'; 

/******2**********/
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//Imprime marget como valor de needel porque se declara adentro 
test();
function test(){
    var needle = 'magnet';
    console.log(needle);//imprime marget
}
var needle = 'haystack';


/******3**********/
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//AFTER HOISTING BY THE INTERPRETER
var brendan = 'super cool';
console.log(brendan); // imprime super cool, no se llama a la funcion en ningun lugar


/******4**********/
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//imprime super cool como valor de food ya que es el valor que esta declarado dentro de la funcion antes de llamar al console log


/******5**********/
mean();
console.log(food);//aca estamos imprimiendo una varible que no esta definida
var mean = function() { //aca la declaracion esta mal por eso imprime un error, declara como una variable mean
    food = "chicken"; // esta usando pero no esta aun declaro
    console.log(food);
    var food = "fish"; //recien aca se declara
    console.log(food);
}
console.log(food); //aca se vuelve a usar una variable que no esta definida


/******6**********/
console.log(genre); //aca se imprime una variable sin valor
var genre = "disco"; //se declara genre como disco
rewind();
function rewind() {
    genre = "rock";//esta es la variable interna de rewind
    console.log(genre);// este es el valor de la variable interna de genre por es o imprimer rock
    var genre = "r&b"; //aca declara otra variable con ese nombre 
    console.log(genre); //por eso imprime el valor de r&b pero solo tiene scope dentro de la funcion rewind
}
console.log(genre); //aca se quedo el valor de la variable disco de la declaracion fuera de la funcion

//AFTER HOISTING BY THE INTERPRETER
var genre;
console.log(genre); //aca se imprime una variable sin valor
genre = "disco"; //se declara genre como disco
rewind();
function rewind() {
    var genre;
    genre = "rock";//esta es la variable interna de rewind
    console.log(genre);// este es el valor de la variable interna de genre por es o imprimer rock
    genre = "r&b"; //aca declara otra variable con ese nombre 
    console.log(genre); //por eso imprime el valor de r&b pero solo tiene scope dentro de la funcion rewind
}
console.log(genre); //aca se quedo el valor de la variable disco de la declaracion fuera de la funcion

/******7**********/
dojo = "san jose";
console.log(dojo);//imprime el valor declarada en la linea anterior
learn();//se llama a la funcion
function learn() {//declaracion de la funcion
    dojo = "seattle"; //variable interna de learn
    console.log(dojo); // imprime el valor de seatle
    var dojo = "burbank"; // declaracion de la varialbe
    console.log(dojo); // imprime dojo
}
console.log(dojo); //aca imprime otro vez el valor san jose porque es la variable dojo externa

san jose
seattle
burbank
san jose
//AFTER HOISTING BY THE INTERPRETER
var dojo;
dojo = "san jose";
console.log(dojo);//imprime el valor declarada en la linea anterior
learn();//se llama a la funcion
function learn() {//declaracion de la funcion
    var dojo;
    dojo = "seattle"; //variable interna de learn
    console.log(dojo); // imprime el valor de seatle
    dojo = "burbank"; // declaracion de la varialbe
    console.log(dojo); // imprime el valor burbank
}
console.log(dojo); //aca imprime otro vez el valor san jose porque es la variable dojo externa


/******8**********/
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//AFTER HOISTING BY THE INTERPRETER
//imprime solo el primer valor de chicago, 65 y hiring true para la primera llamada y luego da un error porque trata de cambiar el valor a una constante