var firebaseConfig = {
      apiKey: "AIzaSyC6gEVCy4oQAAahl-0F-GpT7aMQ7DwMIyo",
      authDomain: "kwitter-5de41.firebaseapp.com",
      databaseURL: "https://kwitter-5de41-default-rtdb.firebaseio.com",
      projectId: "kwitter-5de41",
      storageBucket: "kwitter-5de41.appspot.com",
      messagingSenderId: "400806321414",
      appId: "1:400806321414:web:738f1533862cecad065287"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name;

    function add_room(){
      room_name=document.getElementById("room_name").value;
      localStorage.setItem("room_name",room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose:"Hi Have a good day"
      });
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log (Room_names);
      //Start code
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log (name);
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location="index.html";
}