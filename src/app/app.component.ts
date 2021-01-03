import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstDemoApp';
email:String;
password:String;
remail:String;
rpassword:String;
rcpassword:String;

  register(){


  }

  login(){
    if(this.email=="Admin" && this.password=="Admin"){

    }else{
      
    }
  }
}


