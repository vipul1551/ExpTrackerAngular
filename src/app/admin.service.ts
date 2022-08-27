import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  addCategoryAPI(category:any):Observable<any>{
    return this.http.post(environment.url + "admin/category",category)
  }

  listCategoryAPI():Observable<any>{
    return this.http.get(environment.url + "admin/category")
  }

  deleteCategoryAPI(categoryId:any):Observable<any>{
    return this.http.delete(environment.url + "admin/category/" + categoryId)
  }

  viewCategoryAPI(categoryId:any):Observable<any>{
    return this.http.get(environment.url + "admin/category/" + categoryId)
  }

  getCategoryByIdAPI(categoryId:any):Observable<any>{
    return this.http.get(environment.url + "admin/category/" + categoryId)
  }

  updateCategoryAPI(category:any):Observable<any>{
    return this.http.put(environment.url + "admin/category/",category)
  }
}
