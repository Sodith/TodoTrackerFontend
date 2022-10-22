import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  form: any = {
    email: null,
    password: null,
    name:null,
   phoneNo:null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  constructor(private api:AccountServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void { 
    const { name, email, password ,phoneNo} = this.form;
    this.api.storeUser(name,email,password,phoneNo).subscribe({
      next: data=>{
        console.log(data);
        alert("Register Successfully");
        alert("Redirecting to Login Portal");
        this.route.navigate(['login'])
      },error: err=>{
             console.log("err")
      }
    })
    }
  // onSubmitArchive(){
  //   const { name, email, password ,phoneNo} = this.form;
  //   this.api.storeUser1(name,email,password,phoneNo).subscribe({
  //     next: data=>{
  //       console.log(data);
  //       // alert("Register Successfully");
  //       // alert("Redirecting to Login Portal");
  //       // this.route.navigate(['login'])
  //     },error: err=>{
  //            console.log("err")
  //     }
  //   })


  
 
}
