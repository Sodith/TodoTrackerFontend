import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CardfetchService } from '../cardfetch.service';


@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {
  errorMessage: any;
  email: any
  constructor(private fetch:CardfetchService,private route:Router) { }
  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    console.log(this.email);
  }

  AddTaskform = new FormGroup({
    taskTitle: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  })


  Add(): void {


  //   this.fetch.addProductAdmin(this.AddTaskform.value.taskTitle, this.AddTaskform.value.category,
  //     this.AddTaskform.value.description, this.AddTaskform.value.priority,
  //     this.AddTaskform.value.date, this.email).subscribe({
  //       next: data => {
  //         console.log(data);
  //         location.reload();
  //       },
  //       error: err => {
  //         this.errorMessage = err.error.message;

  //       }
  //     });
  // }

  this.fetch.addProductAdmin(this.AddTaskform.value.taskTitle, this.AddTaskform.value.category,
    this.AddTaskform.value.description, this.AddTaskform.value.priority,
    this.AddTaskform.value.date).subscribe({
      next: data => {
        console.log(data);
        location.reload();
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
}
  
}
