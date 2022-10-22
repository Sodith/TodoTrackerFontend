import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardfetchService {

  public search = new BehaviorSubject<string>("");
  constructor(private http:HttpClient) { }


 
  AUTH_API2="http://localhost:9000/api/v2/addtotask/"

  AUTH_AP1="http://localhost:9000/api/v2/getfromtask/"

  getTaskFromToDo(email:any){
    return this.http.get(this.AUTH_AP1+email)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  AUTH_AP5="http://localhost:9000/api/v4/trash/"
  getTaskFromTrash(email:any){
    return this.http.get(this.AUTH_AP5+email)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  addProductAdmin(taskTitle:any,category:any,description:any,priority:any,date:any): Observable<any> {
    let email = window.localStorage.getItem('email');
    var taskId =new Date().getTime();
    console.log(taskId);
   return this.http.put( this.AUTH_API2 +email,  {taskId,taskTitle,category,description,priority,date}
   );
  }



// addProductAdmin(taskTitle:any,category:any,description:any,priority:any,date:any,email:any): Observable<any> {
//  return this.http.put( this.AUTH_API2 +email,  { taskTitle,category,description,priority,date,email}
//  );

// }
deleteTaskFromTodo(email:any,taskId:any){
  return this.http.delete("http://localhost:9000/api/v2/deletefromtask/"+email+"/"+taskId);
}
gettaskData(email:any,taskId:any): Observable<any> {
  return this.http.get<any>(this.AUTH_AP1 + email+ '/' + taskId);
}
url5:string  = "http://localhost:9000/api/v4/trash/"
deleteTask(task:any){
  let email = window.localStorage.getItem('email');
  return this.http.put<any>(this.url5+email,task);
}
deleteTaskFromTrash(email:any,taskId:any){
  return this.http.delete("http://localhost:9000/api/v4/deletefromtrash/"+email+"/"+taskId);
}


}
