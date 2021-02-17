import { Component, OnInit} from '@angular/core';

import { SocialAuthService } from 'angularx-social-login';
import { SocialUser, GoogleLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  user! : SocialUser;
  loggedInStatus! : string;
  admin! : Boolean;

  constructor( private authService : SocialAuthService){}

  ngOnInit(): void{

    this.loggedInStatus = "false";

    if(localStorage.getItem("userType") === "admin"){
      this.admin = true;
    }
    else{
      this.admin = false;
    }
 
    this.authService.authState.subscribe((user: SocialUser) => {
      this.user = user;
     
      if (user) {
        localStorage.setItem('loggedIn','true');
        this.loggedInStatus = JSON.stringify(localStorage.getItem('loggedIn'));
        
        if(localStorage.getItem("userType") === "admin"){
          this.admin = true;
        }
        else{
          this.admin = false;
        }
        
      } else {
        console.log("not available");
        localStorage.setItem('loggedIn','false');
        this.loggedInStatus = JSON.stringify(localStorage.getItem('loggedIn'));

      }
    })
  }

  signInWithGoogle() : any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
  }

  signOut() : any {
    this.authService.signOut();
  }
 
  


}
 