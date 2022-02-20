
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCqQ21oK1UxZ5o48IyZJ4kEzcqdCQ0oh2k",
      authDomain: "twitter-ripoff-called-kwitter.firebaseapp.com",
      projectId: "twitter-ripoff-called-kwitter",
      storageBucket: "twitter-ripoff-called-kwitter.appspot.com",
      messagingSenderId: "554638102929",
      appId: "1:554638102929:web:8d2119e07172ec20a60a30"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });
});}


getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}