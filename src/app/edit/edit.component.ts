import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CardfetchService } from '../cardfetch.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  errorMessage: any;
  email: any
  constructor(public dailog:MatDialog,private fetch:CardfetchService,private route:Router,private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

    // UpdateTaskform = new FormGroup({
    //   taskId:new FormControl('',[Validators.required]),
    //   taskTitle: new FormControl('', [Validators.required]),
    //   category: new FormControl('', [Validators.required]),
    //   description: new FormControl('', [Validators.required]),
    //   priority: new FormControl('', [Validators.required]),
    //   date: new FormControl('', [Validators.required])
    // })
  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    console.log(this.email);

    // this.activatedRoute.paramMap.subscribe(params => {
    //   let taskId = params.get('taskId') ?? 0;
    //   this.fetch.getProductData(this.email,taskId).subscribe(data => {
    //   this.UpdateTaskform.setValue(data)

    //   })
    // })
  }

  studentToUpdate = {
    taskId:"",
    taskTitle:"",
    category:"",
    description:"",
    priority:"",
    date:""
  }
  updateStudent(){}
    
  

 

  UpdateTaskData()
  {



  }

}
