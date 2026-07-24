
let patients = [
  { id: 101, name: "Ravi Kumar", age: 45, gender: "Male", disease: "Diabetes" },
  { id: 102, name: "Anita Sharma", age: 30, gender: "Female", disease: "Fracture" },
  { id: 103, name: "John Mathew", age: 65, gender: "Male", disease: "Hypertension" },
  { id: 104, name: "Priya Nair", age: 12, gender: "Female", disease: "Fever" }
];
 

patients.push({ id: 105, name: "Suresh Iyer", age: 72, gender: "Male", disease: "Arthritis" });
 
console.log("Patient list after adding new patient (via push()):");
for (let i = 0; i < patients.length; i++) {
  console.log(`- ${patients[i].name} (Age: ${patients[i].age})`);
}
 
let oldestPatient = patients[0];
for (let i = 1; i < patients.length; i++) {
  if (patients[i].age > oldestPatient.age) {
    oldestPatient = patients[i];
  }
}
console.log(`Patient with the highest age: ${oldestPatient.name} (Age: ${oldestPatient.age})`);
 