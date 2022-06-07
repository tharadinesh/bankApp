import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
//properties

aim="Perfect Banking Partner"
accno="Account Number Please"
pswd="Password please"
acno=""
pwd=""


//form group
loginForm=this.fb.group({

  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],

})





//database

//dependency injection
  constructor(private router:Router,private ds :DataService ,private fb:FormBuilder) {



   }

  ngOnInit(): void {
  }
  

  // login(A:any,B:any)
  // { var acno=A.value;
  //   var pswd=B.value
    
  //  let db=this.db
  //  if(acno in db)
  //  {
  //    if(pswd == db[acno]["password"])
  //    {
  //       alert("login successfully")
  //    }
  //    else{
  //      alert("incorrect  password")
  //    }
  //  }
  //  else
  //  {
  //     alert("user not exists")
  //  }
  // }
  

  //userdefined function
  accnochange(event:any)
  {
    this.acno=event.target.value
    console.log(this.acno)

  }
  passwdchange(event:any)
  {
    this.pwd=event.target.value
    console.log(this.pwd)
  }

  //two way
  login()
  {
    var acno=this.loginForm.value.acno
    var pswd=this.loginForm.value.pswd
    if(this.loginForm.valid){
      const result =this.ds.login(acno,pswd)
   
   if(result)
   { 
        alert("login successfully")
        this.router.navigateByUrl('dashboard')
   }
   
  }
  else{
    alert("invalid Form")
  }

  }
}
