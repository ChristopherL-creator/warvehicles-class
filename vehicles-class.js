class Vehicles{ 

    constructor(name, type, producer, yop, speed, isRetired){ 

        this.name = name; 
        this.type = type; 
        this.producer = producer; 
        this.yop = yop; 
        this.speed = speed;
        this.isRetired = isRetired;
    }
     
    getAge(){ 
        const now = new Date(); 
        const year = now.getFullYear(); 
        const age = year - this.yop; 
        return age;
    } 

    avgMaxSpeed(speed){ 

        let maxSpeed = 0;
                
        for (const speeds of this.speed) {
                    
            if (maxSpeed < speeds) {
                maxSpeed = speeds;
            }
        } 
            
        return maxSpeed;
    } 

    toString(){ 
        
        const type = this.type === 't' ? 'tank' : 'aircraft'; 
        const retired = this.isRetired ==='y' ? 'Yes': 'No';
    
        const vehicleString = 'Name: ' + this.name + '\n' + 
                              'type: ' + type + '\n' + 
                              'Producer: ' + this.producer + '\n' + 
                              'Year of Production: ' + this.yop + '\n'+  
                              'Service: ' + this.getAge() + '\n' + 
                              'Speed: ' + this.avgMaxSpeed() + ' km/h' + '\n' + 
                              'Retired: ' + retired;
        return vehicleString;
    }

}