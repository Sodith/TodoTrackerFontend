import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';
import { EmailserviceService } from '../emailservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  logindata?:any;
  messageOnSubmit:any;
  isloggedin:boolean | undefined;
subject="Login Successful";
message="You have successfully login in our portal. If you have not done it Contact immediately. ";

  constructor(private route:Router,private api:AccountServiceService,private email:EmailserviceService,private snackbar:MatSnackBar) {
    window.localStorage.clear();
   }

   loginFormGroup = new FormGroup({
    "email": new FormControl('',[Validators.required , Validators.email]),
    "password": new FormControl('',[Validators.required,Validators.minLength(3)])
  });
  
  
  loginCheck(){
    this.logindata= this.loginFormGroup.value;
    console.log(this.logindata);
    this.api.checkUser(this.logindata).subscribe(
      response => {
        console.log("Login Successfull");
        console.log(this.logindata);
        this.email.sendMail(this.logindata.email,this.subject,this.message).subscribe();
        window.localStorage.setItem('email', this.logindata.email);
        console.log(this.logindata.email);
        this.snackbar.open("Login Successfull",'',{duration:3000, verticalPosition:'top'});
        this.route.navigate(['dashboard']);
      },
      error => {
        console.log("Login error ");
        console.log(error);
        window.alert("Invalid Credentials Entered");
        location.reload();
        return;
      }
    );
  }

  get password() {
    return this.loginFormGroup.get('password')
  }

  get emailId() {
    return this.loginFormGroup.get('email')
  }
  ngOnInit(): void {
  }
  saveUserEmail() {
    console.log(this.loginFormGroup.value.email);
    let valueofEmail:any = this.loginFormGroup.value.email;
    console.log(valueofEmail)
    localStorage.setItem('email', valueofEmail);// it will take key,value pair
  }
}
