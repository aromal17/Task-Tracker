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
  
    this.authService.authState.subscribe((user: SocialUser) => {
      this.user = user;
    })
  }

  signInWithGoogle() : any {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
  }

  signOut() : any {
    this.authService.signOut();
  }
 
  


}
 