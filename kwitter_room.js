
var firebaseConfig = {
      apiKey: "AIzaSyCKFHQY8E8fiR-0E5wdoiWDxPPMJGWhRts",
      authDomain: "class-93-3b2c9.firebaseapp.com",
      databaseURL: "https://class-93-3b2c9-default-rtdb.firebaseio.com",
      projectId: "class-93-3b2c9",
      storageBucket: "class-93-3b2c9.appspot.com",
      messagingSenderId: "1033646695273",
      appId: "1:1033646695273:web:f16aca751a95aa659cd3f8"
    };
    
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      });});}
getData();
