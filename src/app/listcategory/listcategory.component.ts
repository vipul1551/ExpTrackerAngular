import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listcategory',
  templateUrl: './listcategory.component.html',
  styleUrls: ['./listcategory.component.css']
})
export class ListcategoryComponent implements OnInit {

  category : Array<any> = []
  categoryName : string = ""
  categoryId = -1
  display = false
  constructor(private adminService:AdminService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.getAllCategory()
  }

  getAllCategory(){  
      this.adminService.listCategoryAPI().subscribe(resp=>{
        this.category = resp
      },err=>{
        console.log(err);
        
      })
  }

  deleteCategory(id:any){
    this.adminService.deleteCategoryAPI(id).subscribe(resp=>{
      this.toastr.success("Category Deleted")
      this.category = this.category.filter(c => c.categoryId != id)
    },err=>{
      this.toastr.error("Something went wrong! Please Try again later")
    })
  }

  viewCategory(categoryId:any){
    this.adminService.viewCategoryAPI(categoryId).subscribe(resp=>{
      this.categoryId = resp.categoryId
      this.categoryName = resp.categoryName
      this.display = true
    },err=>{
      this.toastr.error("Something went wrong! Please Try again later")
    })
  }

  editCategory(categoryId:any){

  }

}
