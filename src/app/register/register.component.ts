import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ds : DataService, private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
uname=""
acno=""
pwd=""
//form group
registerForm=this.fb.group({

  acno:'no',
  pwd:'',
  uname:''
})




  register()
  {
    var uname=this.uname
    var acno=this.acno
    var pswd=this.pwd
    const result=this.ds.register(uname,acno,pswd)
    if(result)
    {
      alert("Successfully registered")
      this.router.navigateByUrl("")
    }
    else{
      alert("Already Existing User..........Please Login!")
      this.router.navigateByUrl("")
    }
  }
}
