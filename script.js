document.addEventListener("DOMContentLoaded", () => {
alert('Welcome to the profile page of dream team!');

const modeBtn = document.querySelector('#mode'); //find button
const body = document.querySelector('body');    //find body element

const btnSurprise = document.querySelector('#btnSurprise');
const factOutput = document.querySelector('#factOutput');
const facts = document.getElementById("btnSurprise");


//Surprise me bunotton
const funFacts = [
    "I ran my first marathon in Paris.",
    "My biggest phobia is spiders.",
    "I don't eat olives.",
    "I love higher states of conciousness.",
    "I study French just for fun.",
    "I can't fall asleep without reading a book.",
    "Easy run is my religion."
];

btnSurprise.addEventListener("click",() => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    const randomFact = funFacts[randomIndex];
    alert("Surprise fact: " + funFacts[randomIndex]);
});
    
    
modeBtn.addEventListener('click', function(){  //add event listener
    body.classList.toggle('dark-mode');   
    
    if (body.classList.contains('dark-mode')) {
        modeBtn.textContent = 'Light mode';
    }else {
        modeBtn.textContent = 'Dark mode';
    }}
);

});