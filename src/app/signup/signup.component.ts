import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private sessionService:SessionService,private tsService:ToastrService,private route:Router){      
  }

  signup(){
    console.log(this.firstName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.gender);

    let user = {
      "firstName": this.firstName,
      "email": this.email,
      "password": this.password,
      "gender": this.gender
    }
 
    this.sessionService.signupApi(user).subscribe(success=>{
      if(success){
        // this.tsService.success(success.msg)
        this.tsService.success("Signup Done")
        this.route.navigateByUrl("/login")
      }
    },err=>{
      this.tsService.error("Something Went Wrong")
    })
  }
}
