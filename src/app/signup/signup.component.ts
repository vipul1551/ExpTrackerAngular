import { Component } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstName: string = ""
  email: string = ""
  password: string = ""
  gender: string = ""

  constructor(private sessionService:SessionService){      
  }

  signup(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);

    let user = {
      "firstName": this.firstName,
      "email": this.email,
      "password": this.password,
      "gender": this.gender
    }
    this.sessionService
  }
}
