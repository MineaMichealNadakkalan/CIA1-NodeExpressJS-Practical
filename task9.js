let patients = [
  { id: 101, name: "Ravi Kumar", age: 45, gender: "Male", disease: "Diabetes" },
  { id: 102, name: "Anita Sharma", age: 30, gender: "Female", disease: "Fracture" },
  { id: 103, name: "John Mathew", age: 65, gender: "Male", disease: "Hypertension" },
  { id: 104, name: "Priya Nair", age: 12, gender: "Female", disease: "Fever" },
  { id: 105, name: "Suresh Iyer", age: 72, gender: "Male", disease: "Arthritis" }
];
 

let removedPatient = patients.pop();
console.log(`Removed patient (via pop()): ${removedPatient.name}`);
 

patients.sort((a, b) => a.age - b.age);
 
console.log("Patients sorted by age (ascending):");
for (let i = 0; i < patients.length; i++) {
  console.log(`- ${patients[i].name} (Age: ${patients[i].age})`);
}