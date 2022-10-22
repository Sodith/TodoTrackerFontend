import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
hide=true;
  logForm:FormGroup;
  constructor(private api:AccountServiceService,private router:Router) {this.logForm=new FormGroup({
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
    },
    );}

  ngOnInit(): void {
  }
  checkData(){
    const logData = this.logForm.value;
      console.log(logData);
      this.api.checkAdmin(logData).subscribe(()=>{
        alert("Login Successfully");
    
      },error=>{
        alert("Wrong Id Or Password")
      });
      
  }
}
