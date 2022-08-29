import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthtokenService } from '../authtoken.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router,private toastr:ToastrService,private authTokenService:AuthtokenService) { }

  ngOnInit(): void {
    // this.authTokenService.authToken = ""
    // localStorage.setItem("authToken","")
    this.route.navigateByUrl("/login")
    this.toastr.success("Logged out")
  }

}
