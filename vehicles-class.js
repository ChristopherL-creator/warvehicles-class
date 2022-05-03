class Vehicles{ 

    constructor(name, producer, yop, cost, speed, isRetired, tax){ 
        this.name = name; 
        this.producer = producer; 
        this.yop = yop; 
        this.cost = cost;
        this.speed = speed;
        this.isRetired = isRetired; 
        this.tax = tax;

    }

    toString(){ 
        const retired = this.isRetired === 'y' ? 'Yes': 'No'; 

        const vehicleString = 'Name: ' + this.name + '\n' + 
                              'Producer: ' + this.producer + '\n' + 
                              'Year of Production: ' + this.yop + '\n'+ 
                              'Cost: ' + this.getPublicPrice().toFixed(2) + '$' + '\n' + 
                              'Speed: ' + this.avgMaxSpeed() + ' km/h' + '\n' + 
                              'Is Retired: ' + retired; 
        
        return vehicleString;
    } 

    getPublicPrice(){ 
        const tax = this.cost * this.tax / 100; 
        const publicPrice = this.cost + tax; 
        const roundedPublicPrice = this.round(publicPrice, 2); 
        return roundedPublicPrice;
    }

     round(number, decimalPlace){ 
         const roundedString = number.toFixed(decimalPlace); 
         const roundedNumber = parseFloat(roundedString); 
         return roundedNumber;
     } 

     avgMaxSpeed(){ 

        let maxSpeed = 0;
                
        for (const speeds of this.speed) {
                    
            if (maxSpeed < speeds) {
                maxSpeed = speeds;
            }
        } 
            
        return maxSpeed;
    } 
    
}