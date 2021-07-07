class Ninja{
    constructor(name,health){
        this.name = name;
        this.health = health;
        this.spped = 3;
        this.strength = 3;

    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name,this.strength,this.spped,this.health);

    }
    drinkSake(){
        this.health+=10;
    }
}

class Sensei extends Ninja{
    constructor(name,wisdom){
        super(name,wisdom);
        this.wisdom=10;
        this.health=100;
        
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        this.drinkSake();
    }
}
// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"