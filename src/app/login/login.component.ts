import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthtokenService } from '../authtoken.service';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email : string = ""
  password : string = ""

  constructor(private sessionService:SessionService,private toastr:ToastrService,private router:Router,private authTokenService:AuthtokenService){}

  login(){
    console.log(this.email);
    console.log(this.password);

    let user = {
      "email" : this.email,
      "password" : this.password
    }
    this.sessionService.loginApi(user).subscribe(resp=> {
      let authToken = resp.data.user.authToken
      localStorage.setItem("authToken",authToken)
      console.log(resp);
      
      this.toastr.success("Login successfully");
      this.authTokenService.authToken = resp.data.user.authToken
      if(resp.data.user.role.roleName == "user") {
        
        this.router.navigateByUrl("/user/home")
      }else if(resp.data.user.role.roleName == "admin"){

        this.router.navigateByUrl("/admin/dashboard")
      }
    },err=>{
      this.toastr.error("Invalid Credentials")
    })
    
  }

}
