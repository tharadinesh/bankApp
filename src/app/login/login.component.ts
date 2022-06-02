import { Component, OnInit } from '@angular/core';
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
//database

//dependency injection
  constructor(private router:Router,private ds :DataService) {



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
    var acno=this.acno
    var pswd=this.pwd
  const result =this.ds.login(acno,pswd)
   
   if(result)
   { 
        alert("login successfully")
        this.router.navigateByUrl('dashboard')
   }
   


  }
}
