class Ninja {
    constructor(nombre, salud){
        this.nombre = nombre;
        this. salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
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
const ninja1 = new Ninja("Divina");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.drinkSake();