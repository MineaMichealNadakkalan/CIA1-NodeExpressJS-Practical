function checkPatientCategory(name, age) {
  if (age < 18) {
    return `${name} is a Minor.`;
  } else {
    return `${name} is an Adult.`;
  }
}
 
console.log(checkPatientCategory("Priya Nair", 12));
console.log(checkPatientCategory("Ravi Kumar", 45));
 