import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
currentUser:any
currentAcno:any
db:any={
  1000:{"acno":1000,"username":"Ram","password":1000,"balance":5000,transaction:[]},
  1001:{"acno":1001,"username":"Raju","password":1001,"balance":10000,transaction:[]},
  1002:{"acno":1002,"username":"Tom","password":1002,"balance":25000,transaction:[]}
}
  constructor() {

this.getdetails()

  }
//getdetails


getdetails()
{
  if(localStorage .getItem("database"))
  {
    this.db=JSON.parse(localStorage.getItem("database")||' ')
    
  }
  if(localStorage .getItem("CurrentUser"))
  {
    this.currentUser=JSON.parse(localStorage.getItem("CurrentUser")||' ')
    
  }
  if(localStorage .getItem("CurrentAcno"))
  {
    this.currentAcno=JSON.parse(localStorage.getItem("CurrentAcno")||' ')
    
  }

}




//savedetails()
saveDetails(){
  if(this.db){
    localStorage.setItem("database",JSON.stringify(this.db))
  }
  if(this.currentUser){
    localStorage.setItem("CurrentUser",JSON.stringify(this.currentUser))
  }
  if(this.currentAcno){
    localStorage.setItem("CurrentAcno",JSON.stringify(this.currentAcno))
  }
  
}

   
 
  login(acno:any,pswd:any)
  {
  
   let db = this.db
   if(acno in db)
   {
    //console.log(db[acno]["password"])
    
     if(pswd == db[acno]["password"])
     {
      this.currentUser=db[acno]["username"]
      this.currentAcno=acno
      this.saveDetails()
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
         "balance":0,
         transaction:[]

        }
        console.log(db)
        this.saveDetails()
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
              db[acno].transaction.push({
                type:"credit",
                amount:amount
              })
              this.saveDetails()
              return db[acno]["balance"]
             
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
  withdraw(acno:any,pswd:any,amt:any)
  {let db=this.db
    //console.log(acno)

    var amount=parseInt(amt)
    if(acno in db)
    {
      if(pswd ==db[acno]["password"])
            {
              if(db[acno]["balance"]>amount)
              {
                db[acno]["balance"]-=amount;
                db[acno].transaction.push({
                  type:"debit",
                  amount:amount
                })
                this.saveDetails()
                return db[acno]["balance"]
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

  getTransaction(acno:any)
  {
    return(this.db[acno].transaction);
  }
}

