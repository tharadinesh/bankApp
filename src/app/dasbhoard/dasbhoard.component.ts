import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dasbhoard',
  templateUrl: './dasbhoard.component.html',
  styleUrls: ['./dasbhoard.component.css']
})
export class DasbhoardComponent implements OnInit {

user:any
lDate:any
acno:any

  constructor(private ds:DataService ,private fb:FormBuilder,private router:Router) {

this.user=localStorage.getItem('currentUser')
this.lDate=new Date()
   }
  

  ngOnInit(): void {
    // if(!localStorage.getItem("CurrentAcno"))
    // {
    //   alert("please log In")
    //   this.router.navigateByUrl("")
    // }
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
  this.ds.deposit(acno,pswd,amt)
  .subscribe((result:any)=>{
    if(result){
      alert(result.message)
    }
  },
  result=>{
    alert(result.error.message)
  })
}
else
{
  alert("invalid Form")
}
}
  
withdraw()
{
  var acno=this.withdrawForm.value.acno
  var pswd=this.withdrawForm.value.pswd
  var amt=this.withdrawForm.value.amt
  if(this.withdrawForm.valid){

  this.ds.withdraw(acno,pswd,amt)
  .subscribe((result:any)=>{
 if(result){
    alert(result.message)
  }

},
result=>{
  alert(result.error.message)
})
 
}
else{
  alert("invalid form")
}
}
logout()
{
  localStorage.removeItem("CurrentAcno")
  localStorage.removeItem("CurrentUser")
  this.router.navigateByUrl("")

}
deleteAccount()
{
  this.acno=JSON.parse(localStorage.getItem("CurrentAcno")||'')

}
cancel()
{
  this.acno=""
}
}