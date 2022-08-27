import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditcategoryComponent implements OnInit {

  categoryId = 0
  categoryName : string = ""
  constructor(private aroute:ActivatedRoute,private adminService:AdminService,private toastr:ToastrService,private route:Router) { }

  ngOnInit(): void {
    this.categoryId = this.aroute.snapshot.params["categoryId"]
    this.getCategoryById()
  }

  getCategoryById(){
    this.adminService.getCategoryByIdAPI(this.categoryId).subscribe(resp=>{
      console.log(resp);      
      this.categoryName = resp.categoryName
    })
  }

  updateCategory(){
    let category = {"categoryId":this.categoryId,"categoryName":this.categoryName}
    this.adminService.updateCategoryAPI(category).subscribe(resp=>{
      this.toastr.success("Category Updated")
      this.route.navigateByUrl("/admin/listcategory")
    },err=>{
      this.toastr.error("Something went wrong")
    })
  }
}
