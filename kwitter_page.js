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
room_name=localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,like:0
    });
    document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
name=message_data["name"];
message=message_data["message"];
like=message_data["like"];
name_with_tag="<h4>"+name+" <img src='tick.png' class='user_tick'> </h4> ";
message_with_tag="<h4 class='message_h4' >"+message+" </h4> ";
like_button="<button class='btn btn-success' id='"+firebase_message_id+"' value='"+like+"' onclick='updatelike(this.id)' >";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'> like: "+like+"</span> </button> <hr>";

row=name_with_tag+message_with_tag+like_button+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
    } });  }); }
getData();

function updatelike(message_id)
{console.log(message_id);
button_id=message_id;
likes=document.getElementById(button_id).value;
updated_likes=Number(likes)+1;
firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
});

}



function logout(){
    localStorage.removeItem("room_name");
    window.location="kwitter_room.html";
}
