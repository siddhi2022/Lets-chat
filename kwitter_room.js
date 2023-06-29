//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBh10F_3_E1Rk8F99E6wTfpTmr1afE3Zp4",
  authDomain: "tic-tac-toe-game-3d040.firebaseapp.com",
  databaseURL: "https://tic-tac-toe-game-3d040-default-rtdb.firebaseio.com",
  projectId: "tic-tac-toe-game-3d040",
  storageBucket: "tic-tac-toe-game-3d040.appspot.com",
  messagingSenderId: "369224684382",
  appId: "1:369224684382:web:e5d46a0894eb3e0eb835cf",
  measurementId: "G-CHEJNXL4S0"
}; // Initialize Firebase 
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}