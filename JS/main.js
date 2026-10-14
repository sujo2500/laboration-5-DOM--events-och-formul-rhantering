"use strict";
/*
 * Laboration 5 - Studentkortsgenerator
 * Namn: Susan johansson
 */

// Hämta element från DOM
const form = document.querySelector("#studentform");
const clearButton = document.querySelector("#clear");

const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const fontSelect = document.querySelector("#font");

const previewFullname = document.querySelector("#previewfullname");
const previewEmail = document.querySelector("#previewemail");
const previewPhone = document.querySelector("#previewphone");

const errorList = document.querySelector("#errorlist");
const historySection = document.querySelector("#history");
const deleteHistoryButton = document.querySelector("#delete");


// Array som används för felmeddelanden
let errors = [];


// Array som innehåller sparade studentkort
let history = [];

/**
 * Validerar formulärets inmatning.
 * @returns {boolean}
 */
function validateForm() {
    // Rensa tidigare felmeddelanden
    errors = [];

    // Kontrollera formulärets obligatoriska fält
    if (fullnameInput.value === "") {
        errors.push("Du måste fylla i namn");

    }
    if (emailInput.value === "") {
        errors.push("Du måste fylla i din e-postadress");
    }

    if (phoneInput.value === "") {
        errors.push("du måste fylla i telefonnummer");
    } 

     // Returnera resultatet (true eller false) av valideringen
    return errors.length === 0;
} 

/**
 * Visar felmeddelanden på sidan.
 */
function displayErrors() {
    errorList.innerHTML = "";

    if (errors.length > 0) {

        for (let i = 0; i < errors.length; i++) {
            const liEl = document.createElement("li");
            liEl.textContent = errors[i];

            errorList.appendChild(liEl);
        } 
    }
    

    // Skriv ut aktuella felmeddelanden till DOM
}


/**
 * Skapar ett studentkort och visar det på sidan.
 */
function createStudentCard() {
        // Hämta information från formuläret
    const user = {
        name: fullnameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    };

    const users = [];
    // Uppdatera studentkortet
previewFullname.textContent = user.name;
previewEmail.textContent = user.email;
previewPhone.textContent = user.phone;

    // Lägg till studentkortet i historiken
    history.push(user);

    // Spara och uppdatera historiken
    saveHistory();
    renderHistory();
}


/**
 * Sparar historiken i localStorage.
 */
function saveHistory() {
    localStorage.setItem("history", JSON.stringify(history));
    // Spara history i localStorage
}


/**
 * Läser in tidigare historik från localStorage.
 */
function loadHistory() {
    // Hämta eventuell sparad historik
    const savedHistory = localStorage.getItem("history");
    // Uppdatera history
    if (savedHistory !== null) {
        history = JSON.parse(savedHistory);
    }
}


/**
 * Visar historiken på sidan.
 */
function renderHistory() {
    // Rensa tidigare visad historik
    historySection.innerHTML = "";
    // Skriv ut innehållet i history till DOM
    for(let i = 0; i < history.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = history[i].name + " " + history[i].email + " " + history[i].phone;
        historySection.appendChild(liEl);
    }
}


/**
 * Rensar formulär, aktuellt studentkort och felmeddelanden.
 */
function clearForm() {
    form.reset();
    previewEmail.textContent = "";
    previewFullname.textContent = "";
    previewPhone.textContent = "";
    errorList.innerHTML = "";
    console.log("clearform körs");
        // Återställ formulär och studentkort
          // Rensa eventuella felmeddelanden
          // När användaren klickar på "Rensa"
}    

clearButton.addEventListener("click", clearForm);
  



/**
 * Raderar hela historiken.
 */
function deleteHistory() {
    // Radera sparad historik

    // Uppdatera history och visningen på sidan
}


// Eventlyssnare



// När formuläret skickas:
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const isValid = validateForm();

    displayErrors();

    if (isValid) {
        createStudentCard();
    }

})

// - validera inmatningen


// - skapa studentkort om valideringen lyckas





// När användaren klickar på "Radera historik"
addEventListener


// När sidan laddas:
// - läs in och visa eventuell tidigare historik