import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]]

})




  register()
  {
    //console.log(this.registerForm.value.uname)
    var uname=this.registerForm.value.uname
    var acno=this.registerForm.value.acno
    var pswd=this.registerForm.value.pwd
   // console.log(this.registerForm.valid)
    
    if(this.registerForm.valid)
    {
     this.ds.register(uname,acno,pswd)
      .subscribe((result:any)=>{
        if(result)
        {
          alert(result.message)
          this.router.navigateByUrl("")
        }
       
      },
      result=>{
        alert(result.error.message);
    
      }
      )
     
     
    }
    else{
      alert("Inavlid form")
    }
    
  }
}
