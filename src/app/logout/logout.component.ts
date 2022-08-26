import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
    // this.authTokenService.authToken = ""
    this.route.navigateByUrl("/login")
    this.toastr.success("Logged out")
  }

}
