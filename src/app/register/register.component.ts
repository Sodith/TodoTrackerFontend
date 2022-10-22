import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';
import { EmailserviceService } from '../emailservice.service';



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
   
   subject="TODO Registration Successful";
   message="You have successfully registered your email id with our todo application.";

  constructor(private api:AccountServiceService,private route:Router,private email:EmailserviceService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }
  onSubmit(): void { 
    const { name, email, password ,phoneNo} = this.form;
    this.api.storeUser(name,email,password,phoneNo).subscribe({
      next: data=>{
        console.log(data);
        this.email.sendMail(this.form.email,this.subject,this.message).subscribe();
        this.snackbar.open("Registration Successfull",'',{duration:3000, verticalPosition:'top'});
        this.snackbar.open("Redirecting to Login Page",'',{duration:2000, verticalPosition:'top'});
        this.route.navigate(['login'])
      },error: err=>{
             console.log("err")
      }
    })
    }
   
 
}
