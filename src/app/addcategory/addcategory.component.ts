import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {

  categoryName : string = ""

  constructor(private adminService:AdminService,private toastr:ToastrService,private route:Router) { }

  ngOnInit(): void {
  }

  addCategory(){
    let category = {
      "categoryName": this.categoryName
    }

    this.adminService.addCategoryAPI(category).subscribe(resp=>{
    this.toastr.success("Category Added")
    this.route.navigateByUrl("/admin/dashboard")
    },err=>{
      this.toastr.error("Something went wrong")
    })
  }
}
