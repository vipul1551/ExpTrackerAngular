import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  addCategoryAPI(category:any):Observable<any>{
    // return this.http.post(environment.url + "admin/category",category)
    return this.http.post("http://localhost:9898/admin/category",category)
  }

  listCategoryAPI():Observable<any>{
    // return this.http.get(environment.url + "admin/category")
    return this.http.get("http://localhost:9898/admin/category")
  }

  deleteCategoryAPI(categoryId:any):Observable<any>{
    // return this.http.delete(environment.url + "admin/category/" + categoryId)
    return this.http.delete("http://localhost:9898/admin/category/" + categoryId)
  }

  viewCategoryAPI(categoryId:any):Observable<any>{
    return this.http.get("http://localhost:9898/admin/category/" + categoryId)
  }

  getCategoryByIdAPI(categoryId:any):Observable<any>{
    return this.http.get("http://localhost:9898/admin/category/" + categoryId)
  }

  updateCategoryAPI(category:any):Observable<any>{
    return this.http.put("http://localhost:9898/admin/category/",category)
  }
}
