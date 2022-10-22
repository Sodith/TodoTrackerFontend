import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/lib/angular2-signaturepad.component';
import { fabric } from 'fabric';
@Component({
  selector: 'app-sketchpad',
  templateUrl: './sketchpad.component.html',
  styleUrls: ['./sketchpad.component.css']
})
export class SketchpadComponent implements OnInit {

canvas:any;


  constructor() { }

  ngOnInit(): void {

    // this.canvas=new fabric.Canvas('canvas',{
    //   isDrawingMode:true
    // })
   
  }
 

}