import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

@Input() item:string|undefined //to hold the value from parent

@Output() onCancel=new EventEmitter()
  constructor() { 
    console.log(this.item)
  }

  ngOnInit(): void {
  }
cancel()
{
  this.onCancel.emit()
}
}
