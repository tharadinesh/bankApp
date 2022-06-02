import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  db:any={
    1000:{"acno":1000,"username":"Ram","password":1000,"balance":5000},
    1001:{"acno":1001,"username":"Raju","password":1001,"balance":10000},
    1002:{"acno":1002,"username":"Tom","password":1002,"balance":25000}
  }
  login(acno:any,pswd:any)
  {
  
   let db = this.db
   if(acno in db)
   {
     if(pswd == db[acno]["password"])
     {
        return true
  
     }
     else{
       alert("incorrect  password")
       return false
     }
   }
   else
   {
      alert("user not exists")
      return false
   }
  
  }
  
  //register
  register(username:any,acno:any,password:any)
  {
      let db =this.db
      if(acno in db)
      {
        return false
        
      }
      else{
        db[acno]={
          acno,
          username,
        password,
         "balance":0
        }
        console.log(db)
        return true
      }
  }
  deposit(acno:any,pswd:any,amt:any)
  {let db=this.db
    var amount=parseInt(amt)
    if(acno in db)
    {
      if(pswd ==db[acno]["password"])
            {
              db[acno]["balance"]+=amount;
              return db[acno]["balance"]
              console.log()

      }
      else
      {
        alert("Incorrect password")
        return false
      }
    }
    else
    {
      alert("user doesnot Exist!")
      return false
    }

  }
  withdraw(acno1:any,pswd1:any,amt1:any)
  {let db=this.db
    var amount=parseInt(amt1)
    if(acno1 in db)
    {
      if(pswd1 ==db[acno1]["password"])
            {
              if(db[acno1]["balance"]>amount)
              {
                db[acno1]["balance"]-=amount;
                return db[acno1]["balance"]
              }
             else{
               alert("insufficient balance")
               return false
             }     

      }
      else
      {
        alert("Incorrect password")
        return false
      }
    }
    else
    {
      alert("user doesnot Exist!")
      return false
    }

  }
  }

