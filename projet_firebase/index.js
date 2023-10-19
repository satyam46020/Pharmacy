
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyBtmH-AgoimpvhZXvgW36ISKZI8DhVh-BE",
    authDomain: "project1-masai.firebaseapp.com",
    projectId: "project1-masai",
    storageBucket: "project1-masai.appspot.com",
    messagingSenderId: "340253418095",
    appId: "1:340253418095:web:d9275b67bcd9b3a5f6639a",
    measurementId: "G-RG4YFPJRMK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});

let accessToken = localStorage.getItem("accessToken") || null;

document.getElementById("signUp_action").addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("clicked on sign up")

    let email = document.querySelector("#up_email").value;
    let name = document.querySelector("#up_name").value;
    let password = document.querySelector("#up_pass").value;



    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            goleft()

            showtost("Registration Succesful !!")
            
            localStorage.setItem("accessToken", user.accessToken);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorMessage);
            showtost(errorMessage);
        });
});

//login part*********************************************************************

document.getElementById("signIn_action").addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.querySelector("#in_email").value;
    let password = document.querySelector("#in_pass").value;

    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 

    const user = userCredential.user;
    console.log("login Succesful")
    showtost("login Succesful");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


})


var tostBox = document.getElementById("tostBox");

function showtost(cre) {
    var tost = document.createElement("div");
    tost.classList.add("tost");
    tost.innerHTML = "<i class='bx bxs-x-circle'></i>" + cre;
    if (cre.includes('Succesful')) {
        tost.classList.add("sucess");
        tost.innerHTML = "<i class='bx bx-check-circle'></i>" + cre;
    }
    tostBox.appendChild(tost);
    setTimeout(() => {
        tost.remove();
    }, 1500);

}
function goleft() {
    container.classList.remove("right-panel-active");
}