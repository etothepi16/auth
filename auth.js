(function(){
  var config = {
  apiKey: "AIzaSyBAef0T-l7_v93nimB-Ep450kKHbiOJg-A",
  authDomain: "sample-project-27b1e.firebaseapp.com",
  databaseURL: "https://sample-project-27b1e.firebaseio.com",
  projectId: "sample-project-27b1e",
  storageBucket: "sample-project-27b1e.appspot.com",
  messagingSenderId: "571422569855"
  };
  $(document).ready(init);
  function init(){
  firebase.initializeApp(config);
  $('#signup').on('click',signup);
  $('#login').on('click',login);
};

function signup(){
  var auth = firebase.auth();
  var email = $('#email').val();
  var pass = $('#password').val();
  auth.createUserWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;});
  stateChanged();
};

function login(){
  var auth = firebase.auth();
  var email = $('#email').val();
  var pass = $('#password').val();
  auth.signInWithEmailAndPassword(email, pass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;});
  stateChanged();
};

function stateChanged(){
  firebase.auth().onAuthStateChanged(firebaseUser=>{
    if(firebaseUser){
      console.log(firebaseUser);
      return;
    }else{
      console.log("Not logged in");
      }
    });
  };
})();
