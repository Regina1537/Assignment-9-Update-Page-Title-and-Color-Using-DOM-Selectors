// printing statement 
console.log("Introduction to Javascript");
console.log("javascript Variables");
console.log("var , let ,const");
console.log("Diamond Pattern generator using Javascript");
console.log("Discount Eligibility Checker Using JavaScript");

console.log("Assignment 9");
console.log("Update Page Title and Color Using DOM Selectors");

console.log("Page Title and Color");
console.log("Functions and Conditions");


console.log(Document);

document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0.00%, 14.90%)";
console.dir(Document);

// DOM - Document Object Model

var user = {
    name: "Regina",
    role: "Web Designer",
    Company: "Entri",
    totalbatches: "7"
};

console.log(typeof user); // 👈 This line produces output

// Advanced object Creation
var Products = {
    ProductName: "Baby Toys",       // String
    productclass: "kids Tricycle",  // String
    Productprice: 1188,             // Number
    isStock: true,                  // Boolean
    negativecomment: undefined,     // Undefined
    size: ["2 year", "3 year", "4 year"], // Array
    packof: [2]                     // Array with one element
};

console.log(Products);

console.log("Javascript Operators");
// 1.document getElementById
const username = "Bro code";
const welcomemsg = document.getElementById("Welcome-msg");

welcomemsg.textcontent += username === "" ? `guest` : username;

const button = document.getElementById("Update Title and Color");
const title = document.getElementById("DOM Using Selectors");

// Event for button using addEventListener

button.addEventListener("Click", function (){
    title.textContent = "Welcome to JavaScript";
})

document.addEventListener("DOM Content Loaded" , function () {
const button = document.getElementById("Registrar")
const title = document.getElementById("title");

button.addEventListener("Click" , function () {
    title.textContent = "Welcome to my website";
})
})

// Step-1 | Document loaded
document.addEventListener("DOMContentLoaded", function () {

    // Step-2 | Select all our HTML elements using getElementById
    const Loginform = document.getElementById("loginform");
    const Username = document.getElementById("Username");
    const Password = document.getElementById("Password");
    const errmsg = document.getElementById("errorMsg");

    // Step-3 | Event Creation
    Loginform.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from submitting (important for interview)

        // Condition for input validation
        if (Username.value === "" || Password.value === "") {
            errmsg.textContent = "Both fields are required";
        } else {
            errmsg.textContent = "Login successful";
        }
    });
});

// 2. document.getElementsByClassName
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center"; // Lowercase "center"

console.log(myHeading);

const fruits = document.getElementsByClassName("fruits");

console.log(fruits);

// Individual styling (optional if using the loop below)
fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "orange";
fruits[2].style.backgroundColor = "green";
fruits[3].style.backgroundColor = "violet";

// Looping to apply a uniform style
for (let fruit of fruits) {
    fruit.style.backgroundColor = "yellow"; // This will override individual colors above
}

// Array the list of fruits
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow"
})


// 3. document.getElementByTagName
const myheading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "Center";

console.log(myHeading);

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4elements);

h4Elements[0].style.backgroundColor = "Green";
h4Elements[1].style.backgroundColor = "Yellow";


for(let h4Elements of h4Elements){
    h4Elements.style.backgroundColor = "yellow";
}

for(let liElements of liElements){
    liElements.style.backgroundColor = "Light Green";
}

Array.from(h4Elements).forEach(h4Elements => {
    h4Elements.style.backgroundColor = "yellow";
});

Array.from(liElements).forEach(liElements => {
    liElements.style.backgroundColor = "Light Green";
});

// 4. document.querySelectors

const fruitsElement = document.querySelector(".fruits");
fruitsElement.style.backgroundColor = "yellow";

const h4Element = document.querySelector(".h4");
h4Element.style.backgroundColor = "yellow";

const liElement = document.querySelector(".li");
liElement.style.backgroundColor = "lightgreen";

const ulElement = document.querySelector(".ul");
ulElement.style.backgroundColor = "green";

const olElement = document.querySelector(".ol");
console.log(olElement);

// 5. document.querySelectorAll // NODE LIST

const h4element = document.querySelectorAll(".fruits");

fruits[0].style.backgroundColor = "yellow";
fruits[1].style.backgroundColor = "yellow";
fruits[2].style.backgroundColor = "yellow";
fruits[3].style.backgroundColor = "yellow";
fruits[4].style.backgroundColor = "yellow";

const foods = document.querySelectorAll("li");

foods[0].style.backgroundColor = "Green";
foods[1].style.backgroundColor = "Green";
foods[2].style.backgroundColor = "Green";
foods[3].style.backgroundColor = "Green";
foods[4].style.backgroundColor = "Green";

const foodsforus = document.querySelectorAll("li");

console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "Green";
});













