import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  firstName: string = ""
  email: string = ""
  password: string = ""

  signup(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
  }
}
