// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }

    attack(){
        return this.strength;
    }

    receiveDamage(damage){
        this.health-=damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    
    attack(){
        return this.strength;
    }
    
    receiveDamage(damage){
        this.health-=damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }
        return `${this.name} has died in act of combat`;
    }

    battleCry(){
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
    }

    receiveDamage(damage){
        this.health-=damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }
        return `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking){
        this.vikingArmy.push(Viking);
    }

    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }

    vikingAttack(){
        let ataque = this.saxonArmy[0].receiveDamage(this.vikingArmy[0].attack());
        if(this.saxonArmy[0].health <= 0){
            this.saxonArmy.splice(0,1);
        }
        return ataque;
    }
    saxonAttack(){
        let ataque = this.vikingArmy[0].receiveDamage(this.saxonArmy[0].attack());
        if (this.vikingArmy[0].health <= 0){
            this.vikingArmy.splice(0,1);
        }
        return ataque;
    }

    showStatus(){
        if (this.saxonArmy.length <= 0){
            return `Vikings have won the war of the century!`;
        } else if (this.vikingArmy.length <= 0){
            return "Saxons have fought for their lives and survived another day...";
        } else if (this.saxonArmy.length && this.vikingArmy.length > 0){
            return "Vikings and Saxons are still in the thick of battle.";
        }
    }
}
