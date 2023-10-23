
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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

//*************************************************************************google login */
const googleElements = document.querySelectorAll("#google");

// Define the click event handler function
function handleGoogleClick(e) {
    e.preventDefault();

    const provider = new GoogleAuthProvider(app);
    const auth = getAuth();

    signInWithPopup(auth, provider)
        .then((result) => {
            // Handle the sign-in success
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            // ...
        })
        .catch((error) => {
            // Handle sign-in errors
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

// Attach the same click event handler to all "google" elements
googleElements.forEach((element) => {
    element.addEventListener("click", handleGoogleClick);
});

// document.querySelector("#google").addEventListener("click",()=>{
//     console.log("clicked")
// })



//*******************************************************************twitter login */
const Twitter = document.querySelectorAll("#Twitter");

Twitter.forEach((element) => {
    element.addEventListener("click", handleTwitterClick);
});

function handleTwitterClick(e) {

    e.preventDefault();
    const provider = new TwitterAuthProvider();

    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            const credential = TwitterAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const secret = credential.secret;

            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = TwitterAuthProvider.credentialFromError(error);
            // ...
        });

}



var tostBox = document.getElementById("tostBox");

function showtost(cre) {
    var tost = document.createElement("div");
    tost.classList.add("tost");
    tost.innerHTML = "<i class='bx bxs-x-circle'></i>" + cre;
    if (cre.includes('Succesful')) {
        tost.classList.add("sucess");
        tost.innerHTML = "<i class='bx bx-check-circle'></i>" + cre;
    }
    if (cre.includes('invalid')) {
        // tost.classList.add("sucess");
        tost.innerHTML = "<i class='bx bxs-x-circle'></i>" + "Invalid email";
    }
    if (cre.includes('already')) {
        // tost.classList.add("sucess");
        tost.innerHTML = "<i class='bx bxs-x-circle'></i>" + "Email already registered";
    }
    if (cre.includes('least')) {
        // tost.classList.add("sucess");
        tost.innerHTML = "<i class='bx bxs-x-circle'></i>" + "Password should be least 6 character";
    }

    tostBox.appendChild(tost);
    setTimeout(() => {
        tost.remove();
    }, 1500);

}
function goleft() {
    container.classList.remove("right-panel-active");
}