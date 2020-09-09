import { Injectable } from '@angular/core';
import { Http , Headers} from "@angular/http";
import { map, catchError } from "rxjs/operators";
import { HttpCallServieService } from "../../../services/http-call-servie.service";
import { setting } from "../../../setting";


@Injectable({
  providedIn: 'root'
})
export class PoliticiantestimonialService {

  constructor(  
    // private http: Http
    private _HttpCallServieService_: HttpCallServieService
     ) { 
 
  }


       //private BaseUrl: any="http://localhost:8080";
      //private APIHeaders: any = new Headers({
     // "Authorization" : "bearer a9e88d9d-8df7-48b4-86d6-d31594eb4f29"
    //})


    get() {
      var postData = {
        service_NAME: setting.service_NAME,
        request_TYPE: "GET",
        request_URI: "politiciantestimonial",
        request_BODY: ""
      }
      return this._HttpCallServieService_.api(postData);
    }
  
    getAll() {
      var postData = {
        service_NAME: setting.service_NAME,
        request_TYPE: "GET",
        request_URI: "politiciantestimonial/all",
        request_BODY: ""
      }
      return this._HttpCallServieService_.api(postData);
    }
  
  
    getOne(id) {
      var postData = {
        service_NAME: setting.service_NAME,
        request_TYPE: "GET",
        request_URI: "politiciantestimonial/" + id,
        request_BODY: ""
      }
      return this._HttpCallServieService_.api(postData);
    }
  
    add(data) {
      var postData = {
        service_NAME: setting.service_NAME,
        request_TYPE: "POST",
        request_URI: "politiciantestimonial",
        request_BODY: JSON.stringify(data)
      }
      return this._HttpCallServieService_.api(postData);
    }
  
    update(data, id) {
      var postData = {
        service_NAME: setting.service_NAME,
        request_TYPE: "PUT",
        request_URI: "politiciantestimonial/" + id,
        request_BODY: JSON.stringify(data)
  
      }
      return this._HttpCallServieService_.api(postData);
    }
  
    delete(id) {
      var postData = {
        service_NAME: setting.service_NAME,
        request_TYPE: "DELETE",
        request_URI: "politiciantestimonial/" + id,
        request_BODY: ""
      }
      return this._HttpCallServieService_.api(postData);
    }
  
    search(data) {
      var postData = {
        service_NAME: setting.service_NAME,
        request_TYPE: "POST",
        request_URI: "politiciantestimonial/search",
        request_BODY: JSON.stringify(data)
  
      }
      return this._HttpCallServieService_.api(postData);
    }
  
    searchAll(data) {
      var postData = {
        service_NAME: setting.service_NAME,
        request_TYPE: "POST",
        request_URI: "politiciantestimonial/search/all",
        request_BODY: JSON.stringify(data)
      }
      return this._HttpCallServieService_.api(postData);
    }
  
    advancedSearch(data) {
      var postData = {
        service_NAME: setting.service_NAME,
        request_TYPE: "POST",
        request_URI: "politiciantestimonial/advancedsearch",
        request_BODY: JSON.stringify(data)
      }
      return this._HttpCallServieService_.api(postData);
    }
  
    advancedSearchAll(data) {
      var postData = {
        service_NAME: setting.service_NAME,
        request_TYPE: "POST",
        request_URI: "politiciantestimonial/advancedsearch/all",
        request_BODY: JSON.stringify(data)
      }
      return this._HttpCallServieService_.api(postData);
    }
  
    

/*
  get(){
    return this.http.get(
      this.BaseUrl+ "politiciantestimonial", {headers : this.APIHeaders}).pipe(map(res => res.json()));
    
  }

  getAll(){
    return this.http.get(
      this.BaseUrl+ "politiciantestimonial/all" , {headers : this.APIHeaders}).pipe(map(res => res.json()));
    
  }

  getOne(id){
    return this.http.get(
      this.BaseUrl+ "politiciantestimonial/"+ id , {headers : this.APIHeaders}).pipe(map(res => res.json()));
    
  }

  add(data){
    return this.http.post(
      this.BaseUrl+ "politiciantestimonial" , data , {headers : this.APIHeaders}).pipe(map(res => res.json()));
    
  }
  
  updata( id,data){
    return this.http.put(
      this.BaseUrl+ "politiciantestimonial"+id  , {headers : this.APIHeaders} , data).pipe(map(res => res.json()));
    
  }

  delete(id){
    return this.http.delete(
      this.BaseUrl+ "politiciantestimonial/"+ id , {headers : this.APIHeaders}).pipe(map(res => res.json()));
    
  }
*/
}
