
export class MathLog{
    constructor(attack, distance) {
        this.attack = attack;
        this.distance = distance;
    }

    set stoned(value) {
        this._stoned = value;
    }

    get stoned() {
        return this._stoned;
    }

    set attack(value) {
        this._attack = value;
    }

    get attack() {
        let calcAttac = this._attack * (1 - (this.distance - 1) / 10 );
        if(this.stoned) {
            calcAttac -= Math.log2(this.distance) * 5;
        }
       return Math.round(calcAttac);
    }
}


export class Magician extends MathLog {
    constructor(distance) {
        super()
        this.distance = distance;
        this.attack = 100;
        this.stoned = true;
    }

}

export class Undead extends MathLog {
    constructor(distance) {
        super()
        this.distance = distance;
        this.attack = 200; 
        this.stoned = false;
    }

}

// export {Math, Magician, Undead}
  