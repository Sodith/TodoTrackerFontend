import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { __makeTemplateObject } from 'tslib';

import { CardfetchService } from '../cardfetch.service';
import { MainCompComponent } from '../main-comp/main-comp.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  
  email:any;
  productList: any[]=[];
  tasks=this.productList;
  errorMessage: any;
  filterCategory: any;
  searchKey: string = "";
  public searchTerm !: string;
  constructor(public dailog:MatDialog,private breakpointObserver: BreakpointObserver,private fetch:CardfetchService,private route:Router,private snackbar:MatSnackBar) { }

  ngOnInit() {
    this.email=localStorage.getItem("email");
    console.log(this.email);
    this.fetch.getTaskFromToDo(this.email).subscribe(res=>{
      this.productList =res ;
    }
    );
    this.fetch.getTaskFromToDo(this.email)
    .subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      console.log(this.productList)
    });
    this.fetch.search.subscribe((val: any) => {
      this.searchKey = val;
    })
    
  }
  openDailog(){
    const dailogRef= this.dailog.open(MainCompComponent,{width:'25%',panelClass:'bg-color'});
   }
   deletetaskFromToDo(email: any, taskId: any) {
    this.fetch.deleteTaskFromTodo(email, taskId).subscribe({
      next: data => {
        console.log(data);
        location.reload();
      },
      error: err => {
        this.errorMessage = err.error.message;

      }
    });
  }
  deletetask(item:any) {
    this.fetch.deleteTask(item).subscribe(
      response=> {
        console.log(item)
        this.snackbar.open("Sent to Trash",'',{duration:3000});
        
        location.reload();
        console.log(response);
      },
      error => {
        console.log(item)
        console.log("Something Went Wrong")
        console.log(error);
      }
    );
  }




  filter(category:string){
    this.filterCategory = this.productList
    .filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }



}
