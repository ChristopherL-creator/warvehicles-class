// const tank1 = new Tanks('Panzerkampfwagen IV', 't', 'Krupp', '1935', 't', 50000, [43, 37], 'y', 'steel')
// console.log(tank1.tankToString()); 

// const aircraft1 = new Aircraft('B-52', 'a', 'Boeing', '1950', 15000, 9250000, [850, 700], 'n')
// console.log(aircraft1.aircraftToString());  

//  correzione: 
const tank = new Tank('Panzer IV', 't', 'Krupp', 1935, 't', 50000, [43, 37], true, 'Acciao');

console.log(tank.toString());


const aircraft = new Aircraft('B52', 'b', 'Boeing', 1950, 9250000, [850, 700], false, 11000);


console.log(aircraft.toString());