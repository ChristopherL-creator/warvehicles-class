const vehicle1 = new Vehicles('Panzerkampfwagen IV', 't', 'Krupp', '1935', [43, 37], 'y')
console.log(vehicle1); 
console.log('Service: ', vehicle1.getAge()); 
console.log(vehicle1.toString()); 
console.log(vehicle1.avgMaxSpeed(), ' km/h'); 

const vehicle2 = new Vehicles('B-52', 'a', 'Boeing', '1950', [850, 700], 'n')
console.log(vehicle2); 
console.log('Service: ', vehicle2.getAge()); 
console.log(vehicle2.toString()); 
console.log(vehicle2.avgMaxSpeed(), ' km/h'); 