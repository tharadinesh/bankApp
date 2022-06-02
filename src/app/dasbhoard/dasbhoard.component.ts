import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dasbhoard',
  templateUrl: './dasbhoard.component.html',
  styleUrls: ['./dasbhoard.component.css']
})
export class DasbhoardComponent implements OnInit {

  acno=""
  pswd=""
  amt=""
  acno1=""
  pswd1=""
  amt1=""
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

deposit()
{
  var acno=this.acno
  var pswd=this.pswd
  var amt=this.amt
  const result=this.ds.deposit(acno,pswd,amt)
  if(result){
    alert(amt+" deposited successfully and new balance is "+result)
  }
}
  
withdraw()
{
  var acno=this.acno1
  var pswd=this.pswd1
  var amt=this.amt1
  const result=this.ds.withdraw(acno,pswd,amt)
  if(result){
    alert(amt+" successfully withdrawed and new balance is "+result)
  }
}
}
