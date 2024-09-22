// Variables for persona 1
let fullName1persona = "Maria Delos Santos Las Marias"; // Full name of persona 1
let age1persona = 25; // Age of persona 1
let address1persona = "Upper Session Road, Baguio City, Benguet"; // Address of persona 1

// Variables for persona 2
let fullName2persona = "Juan Gamoso Dela Cruz"; // Full name of persona 2
let age2persona = 28; // Age of persona 2
let address2persona = "San Nicolas, Candon City, Ilocos Sur"; // Address of persona 2

// Function to rearrange the name in "Last Name, First Name Middle Names" format
function rearrangeName(name) {
    let parts = name.split(" "); // Split the name into an array of words
    return parts.slice(-1) + ", " + parts[0] + " " + parts.slice(1, -1).join(" "); // Return "Last, First Middle"
}

// Get the length of full names and addresses
const fullName1personaLength = fullName1persona.length; // Length of full name 1
const fullName2personaLength = fullName2persona.length; // Length of full name 2
const address1personaLength = address1persona.length; // Length of address 1
const address2personaLength = address2persona.length; // Length of address 2

// Output the rearranged name, age, and address for both personas
console.log(rearrangeName(fullName1persona) + ", " + age1persona + ", " + address1persona); 
console.log(rearrangeName(fullName2persona) + ", " + age2persona + ", " + address2persona);

// Sum of numeric values: ages, full name lengths, and address lengths
let sumOfNumericValues = age1persona + age2persona + fullName1personaLength + fullName2personaLength + address1personaLength + address2personaLength;
console.log(sumOfNumericValues); // Output the sum of numeric values

// Calculate a formula: (sum of ages - full name 1 length) * full name 2 length
let result2 = (age1persona + age2persona - fullName1personaLength) * fullName2personaLength;
console.log(result2); // Output result2

// Calculate the power of address 1 length raised to the address 2 length
let result3 = Math.pow(address1personaLength, address2personaLength);
console.log(result3); // Output result3 (this number may be extremely large!)
