alert("Meet the dream team behind this project!");

document.body.addEventListener('mouseover', e => {
  let button = e.target.closest('button');
  if (!button) { return; }
  button.style.backgroundColor = 'purple';
});

document.body.addEventListener('mouseout', e => {
  let button = e.target.closest('button');
  if (!button) { return; }
  button.style.backgroundColor = '';
});
//get the toggle buttom element
const modeToggle = document.getElementById('mode');

//function to toggle to dark mode

function toggleDarkMode(){
    document.body.classList.toggle('dark-mode');
    };

//event listener for toggle

modeToggle.addEventListener('click', toggleDarkMode);

document.getElementById("randomFactBtn");

const myArray =["Australia is wider than the Moon.",
  "In the 1800s, ketchup was sold as a medicine.",
  "Sloths can hold their breath longer than dolphins.",
  "The only letter that does not appear in any U.S. state name is 'Q'.",
  "The opposite sides of a standard six-sided die will always add up to 7.",
  "A single strand of spaghetti is called a 'spaghetto'.",
  "Wombat feces are cube-shaped.",
  "Octopuses have three hearts.",
  "Before alarm clocks, people would pay 'knocker-uppers' to tap on their windows to wake them up.",
  "It's illegal to own just one guinea pig in Switzerland because they get lonely."];

const myButton = document.getElementById("randomFactBtn");
myButton.onclick = function() {

    alert(myArray[Math.floor(Math.random() * myArray.length)]);

};











