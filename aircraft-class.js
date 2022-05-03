class Aircraft extends Vehicles{ 

    constructor(name, type, producer, yop, altitude, cost, speed, isRetired){ 
        
        super(name, producer, yop, cost, speed, isRetired, 30);
        this.altitude = altitude; 
        this.type = type; 

    }

    aircraftToString(){ 
        
        const type = this.type === 'p' ? 'Plane' : 'Helicopter'; 
        
        const aircraftString = super.toString() + '\n' + 
                               'Altitude: ' + this.altitude + ' m' + '\n'
                               'Type: ' + type;


        return aircraftString;
    }

}