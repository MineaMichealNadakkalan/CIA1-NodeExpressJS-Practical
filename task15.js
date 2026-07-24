let patients = [
  { id: 101, name: "Ravi Kumar", age: 45 },
  { id: 102, name: "Anita Sharma", age: 30 },
  { id: 103, name: "John Mathew", age: 65 },
  { id: 104, name: "Priya Nair", age: 12 }
];
 
let ages = patients.map(p => p.age);
 
let highestAge = Math.max(...ages);
let averageAgeRounded = Math.round(ages.reduce((sum, age) => sum + age, 0) / ages.length);
 
console.log(`Highest patient age (Math.max): ${highestAge}`);
console.log(`Average patient age, rounded (Math.round): ${averageAgeRounded}`);