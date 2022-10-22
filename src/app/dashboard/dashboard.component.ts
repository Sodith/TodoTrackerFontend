import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AccountServiceService } from '../account-service.service';
import { CardfetchService } from '../cardfetch.service';
import { MainCompComponent } from '../main-comp/main-comp.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email:any;
  searchKey: any;
  public searchTerm !: string;
  constructor(public dailog:MatDialog,private breakpointObserver: BreakpointObserver,private fetch:CardfetchService,private route:Router) { }
  ngOnInit() {
    this.email=localStorage.getItem("email");
    console.log(this.email);


    this.fetch.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  
  value = '';
  @ViewChild('sidenav') sidenav: MatSidenav | undefined ;
  isExpanded = false;
  isShowing = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.fetch.search.next(this.searchTerm);
  }
  
  



}
