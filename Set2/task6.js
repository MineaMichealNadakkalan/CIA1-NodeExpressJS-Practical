
let patients = [
  { id: 101, name: "Ravi Kumar", age: 45, gender: "Male", disease: "Diabetes" },
  { id: 102, name: "Anita Sharma", age: 30, gender: "Female", disease: "Fracture" },
  { id: 103, name: "John Mathew", age: 65, gender: "Male", disease: "Hypertension" },
  { id: 104, name: "Priya Nair", age: 12, gender: "Female", disease: "Fever" }
];
 
for (let i = 0; i < patients.length; i++) {
  console.log(
    `ID: ${patients[i].id}, Name: ${patients[i].name}, Age: ${patients[i].age}, Gender: ${patients[i].gender}, Disease: ${patients[i].disease}`
  );
}
 