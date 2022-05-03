class Tanks extends Vehicles{ 

    constructor(name, type, producer, yop, suspension, cost, speed, isRetired, armour){ 

        super(name, producer, yop, cost, speed, isRetired, 30);
        this.suspension = suspension;  
        this.armour = armour;    
        this.type = type; 
 
    }

    tankToString(){ 
        
        const type = this.type === 't' ? 'Tank' : 'Self-Propelled Gun'; 
        const suspension = this.suspension === 'w' ? 'Wheeled' : 'Tracked'; 

    
        const tankString = super.toString() + '\n' +
                           'Suspension: ' + suspension + '\n' + 
                           'Armour: ' + this.armour + '\n'
                           'Type: ' + type;


        return tankString;
    }

}