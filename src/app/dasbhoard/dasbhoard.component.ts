import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dasbhoard',
  templateUrl: './dasbhoard.component.html',
  styleUrls: ['./dasbhoard.component.css']
})
export class DasbhoardComponent implements OnInit {

user:any

  constructor(private ds:DataService ,private fb:FormBuilder) {

this.user=this.ds.currentUser
   }

  ngOnInit(): void {
  }
  //dashboard form means deposit form
  dashboardForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]],
    
    
  
  })
 
  withdrawForm=this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    amt:['',[Validators.required,Validators.pattern('[0-9]*')]]
  
  })
  
deposit()
{
  var acno=this.dashboardForm.value.acno
  var pswd=this.dashboardForm.value.pswd
  var amt=this.dashboardForm.value.amt
  if(this.dashboardForm.valid){
  const result=this.ds.deposit(acno,pswd,amt)
  if(result){
    alert(amt+" deposited successfully and new balance is "+result)
  }
}
else
{
  alert("invalid Form")
}
}
  
withdraw()
{
  var acno=this.withdrawForm.value.acno1
  var pswd=this.withdrawForm.value.pswd1
  var amt=this.withdrawForm.value.amt1
  if(this.withdrawForm.valid){

  const result=this.ds.withdraw(acno,pswd,amt)
  if(result){
    alert(amt+" successfully withdrawed and new balance is "+result)
  }
}
else{
  alert("invalid form")
}
}


}
