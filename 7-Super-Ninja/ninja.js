class Ninja {
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre = nombre;
        this. salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName(){
        console.log(`Soy un ninja y mi nombre es ${this.nombre}.`);
        
    }
    showStats(){
        console.log(`Mi nombre es ${this.nombre}, mi fuerza es ${this.fuerza}, mi velocidad es ${this.velocidad} y mi salud es ${this.salud}`);
    }
    drinkSake(){
        this.salud = this.salud + 10;
    }

}
class Sensei extends Ninja{
    constructor (nombre){
        super(nombre);
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduria = 10;
    }
    speakWisdom(){
        this.drinkSake();
    }
}


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

