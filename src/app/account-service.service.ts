import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  constructor(private http:HttpClient) { }


  registerUrl="http://localhost:9000/api/v2/user";
  storeUser(name: string,email: string,password: string,phoneNo: number): Observable<any>{
    return this.http.post<any>(`${this.registerUrl}`,{name,email,password,phoneNo});
   }

   loginUrl="http://localhost:9000/api/v1/login";
   checkUser(loginData:any):Observable<any>{
    return this.http.post<any>(`${this.loginUrl}`,loginData)
   }

   loginAdminUrl="http://localhost:9000/api/v3/adminlogin";
   checkAdmin(logData:any):Observable<any>{
    return this.http.post<any>(`${this.loginAdminUrl}`,logData)
   }
}
