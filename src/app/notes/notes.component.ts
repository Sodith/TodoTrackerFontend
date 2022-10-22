import { BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CardfetchService } from '../cardfetch.service';
import { EditComponent } from '../edit/edit.component';
import { MainCompComponent } from '../main-comp/main-comp.component';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  email: any;
  productList: any[] = [];
  errorMessage: any;
  // public productList: any;
  // email: any;
  // errorMessage: any;
  filterCategory: any;
  searchKey: string = "";
  public searchTerm !: string;
  UpdateTaskform: any;
  data!: number;
  constructor(public dailog: MatDialog, private breakpointObserver: BreakpointObserver, private fetch: CardfetchService, private route: Router, private http: HttpClient,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.email = localStorage.getItem("email");
    console.log(this.email);


    // this.activatedRoute.paramMap.subscribe(params => {
    //   let taskId = params.get('Priority') ?? 0;
    //   console.log(taskId)
    //   this.fetch.gettaskData(this.email, taskId).subscribe(data => {
    //     this.UpdateTaskform.setValue(data)

    //   })
    // })

  
    this.fetch.getTaskFromToDo(this.email).subscribe(res => {
      this.productList = res;
    //   console.log  (res.value.taskId)
    // console.log  (res.taskTitle)
    // console.log  (this.productList.values.bind)  

    });

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

  p:any;




  openDailog() {
    const dailogRef = this.dailog.open(MainCompComponent, { width: '25%' });
  }

  // openDailogForedit() { const dailogRef = this.dailog.open(EditComponent, { width: '25%' }); }

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
  deletetask(item: any) {
    this.fetch.deleteTask(item).subscribe(
      response => {
        console.log(item)
        alert("send to trash Suucessfully")
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
  taskCompleted(item: any) {
    this.fetch.taskCompleted(item).subscribe(
      response => {
        console.log(item)
        alert("send to archive Suucessfully")
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






  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.category == category || category == '') {
          return a;
        }
      })
  }

 
 
  PageForm = new FormGroup({
   
    numberofcards: new FormControl('')
  })
  
  OnPageCard(){
    console.log(this.PageForm.value.numberofcards)
    const data=this.PageForm.value.numberofcards
    return data
  }
  









  edit() {
    // this.studentToUpdate = studuent;
  }

  updateStudent() { }














}
