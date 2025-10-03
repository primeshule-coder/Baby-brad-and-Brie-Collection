// Replace with your Firebase project config later
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MSG_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function signUp() {
  const email = document.getElementById("newEmail").value;
  const password = document.getElementById("newPassword").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("User Registered!"))
    .catch(error => alert(error.message));
}

function signIn() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Signed In!"))
    .catch(error => alert(error.message));
}
