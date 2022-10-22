import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailserviceService {

  constructor(private http:HttpClient) { }

  emailUrl="http://localhost:9000/api/v5/sendemail";
  sendMail(to:string,subject:string,message:string):Observable<any>{
    return this.http.post<any>(`${this.emailUrl}`,{to,subject,message});
  }
}
