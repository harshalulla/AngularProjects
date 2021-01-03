import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FirstDemoApp';
  email: String;
  password: String;
  remail: String;
  rpassword: String;
  rcpassword: String;
  provider: any;
  user: any;
  constructor() {

  }

  ngOnInit(): void {
    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
    firebase.auth().onAuthStateChanged(user=> {
     this.user=user;
    });
  }

  register() {


  }

  logout(){
    firebase.auth().signOut().then(function() {
     console.log("sign out");
     
    }).catch(function(error) {
      // An error happened.
    });
  }
 

  login() {
    if (this.email == "Admin" && this.password == "Admin") {

    } else {

    }
  }

  loginWithGmail() {
    firebase.auth()
      .signInWithPopup(this.provider)
      .then((result) => {

        // The signed-in user info.
        var user = result.user;
        console.log(user.email);
        // ...
      }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

  }
}


