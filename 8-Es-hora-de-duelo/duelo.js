class Card{
    constructor (name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor (name, cost, power, resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;
    }

    showInformation(){
        console.log(`El Ninja es ${this.name}, tine ${this.power} de poder, tiene ${this.resilience}`)
    }

    atack (target){
        if( target instanceof Unit ) {
            target.resilience = target.resilience - this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Efect extends Card{
    constructor (name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play (target){
        if( target instanceof Unit ) {
            target.resilience = target.resilience + this.magnitude;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

//Efects
let difficultAlgorimth = new Efect ("Algoritmo Difícil", 2, "aumentar la resistencia del objetivo en 3", "Resiliencia", 3);
let promiseRejection = new Efect("Rechazo de promesa no manejado", 1, "	reducir la resistencia del objetivo en 2", "Resiliencia", -2);
let pairProgramming = new Efect ("Programación en pareja", 3, "aumentar el poder del objetivo en 2", "poder", 2);




//TURNO 1
console.log("El jugador 1 convoca a Ninja Cinturón Rojo")
let ninjaCinturonRojo = new Unit ("Ninja Cinturon Rojo", 3,3,4);
ninjaCinturonRojo.showInformation();

console.log ("El jugador 1 juega Algoritmo duro en Ninja Cinturón Rojo");
difficultAlgorimth.play(ninjaCinturonRojo);
ninjaCinturonRojo.showInformation();

//TURNO 2
console.log ("El jugador 2 convoca a Ninja Cinturón Negro");
let ninjaCinturonNegro = new Unit ("Ninja Cinturon Negro", 4,5,4);
ninjaCinturonNegro.showInformation();

console.log("El jugador 2 juega Rechazo de promesa no controlada en Ninja Cinturón Rojo");
promiseRejection.play(ninjaCinturonRojo)
ninjaCinturonRojo.showInformation();

//Turno 3
console.log("El jugador 1 juega Programación en pareja en Ninja Cinturón Rojo");
pairProgramming.play(ninjaCinturonRojo)
ninjaCinturonRojo.showInformation();

console.log("El jugador 1 tiene el ataque Ninja Cinturón Rojo a Ninja Cinturón Negro");
ninjaCinturonRojo.atack(ninjaCinturonNegro)
ninjaCinturonNegro.showInformation();