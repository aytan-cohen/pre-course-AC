const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const firstName = "Aytan";
const lastName = "Cohen";

const sentence1 = "Hello " + firstName + " " + lastName +"! Welcome!?";
console.log(sentence1);

const sentence2 = `Hello ${firstName} ${lastName}! How are you!?`;
console.log(sentence2);

const isTheSkyBlue = false;

if (isTheSkyBlue) {
    console.log("The skty is blue!");
    console.log("lol");
} else {
    console.log("The sky is ... not blue?");
}
console.log(isTheSkyBlue);

let greeting 
if (isTheSkyBlue) {
    greeting = 'It must be nice weather';
} else {
    greeting = 'It must be bad weather'
}

console.log(greeting);

if (2 + 2 === 5) {
    console.log("Hooray! Math still works.");
} else {
    console.log("Uh, panic?");
}

const friendsAtYourParty = 3;

if (friendsAtYourParty === 0) {
    console.log("Cool, now I have all the nachos to myself");
} else if (friendsAtYourParty <=4) {
    console.log("Perfect amount to play some Mario Kart!");
} else {
    console.log("Wooooow, play the dance music");
}