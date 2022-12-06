import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { 
    this.getDetails();
  }

  //saveDetails() - to store data in the local storage

  saveDetails(){
    if(this.userDetails)
    {
      localStorage.setItem('Database',JSON.stringify(this.userDetails))
    }
    if(this.currentUser)
    {
      localStorage.setItem('CurrentUser',JSON.stringify(this.currentUser))
    }
    if(this.currentAcno)
    {
      localStorage.setItem('CurrentAcno',JSON.stringify(this.currentAcno))
    }
  }

  getDetails()
  {
    if(this.userDetails)
    {
      this.userDetails=JSON.parse(localStorage.getItem('Database')||'')
    }
    if(this.currentUser)
    {
      this.currentUser=JSON.parse(localStorage.getItem('CurrentUser')||'')
    }
    if(this.currentAcno)
    {
      this.currentAcno=JSON.parse(localStorage.getItem('CurrentAcno')||'')
    }
  }

  //current user
  currentUser="";

  //current acno
  currentAcno="";

  //database
  userDetails:any={
    1000: {acno:1000, username:'Divya', password:1000, balance:2000, transaction:[]},
    1001: {acno:1001, username:'Gokul', password:1001, balance:2000, transaction:[]},
    1002: {acno:1002, username:'Tejasswi',password:1002, balance:2000, transaction:[]} 
  }

  register(acno:any, username:any, password:any)
  {
    let userDetails = this.userDetails
    if(acno in userDetails)
    {
      return false;
    }
    else{
      userDetails[acno]={
        acno:acno,
        username:username,
        password:password,
        balance:0,
        transaction:[]
      }
      console.log(userDetails);
      this.saveDetails();
      
      return true;
    }
  }

  login(acno:any, pswd:any)
  {
 let userDetails= this.userDetails
 if(acno in userDetails)
 {
 if(pswd==userDetails[acno]['password'])

 {
  this.currentUser=userDetails[acno]['username']
  this.currentAcno=acno; 
  this.saveDetails();//for transaction history
  return true;
 }
 else{
  return false;
 }
 }
 else{
  return false;
 }
  }


deposit(acno:any,pswd:any,amt:any){
 let userDetails = this.userDetails;
 var amount=parseInt(amt)
 if(acno in userDetails)
 {
  if(pswd==userDetails[acno]['password'])
  {
    userDetails[acno]['balance'] += amount;
    userDetails[acno]['transaction'].push({
      TYPE: 'CREDIT', //give the way yu hav given in html 
      AMOUNT:amount

    })
    console.log(userDetails);
    this.saveDetails();
    
    return  userDetails[acno]['balance']
  }
  else{
    alert('Password incorrect')
  }

 }
 else{
  alert('Invalid UserDetails')
  return false;
 }

  }

withdraw(acno:any,pswd:any,amt:any)
{
  let userDetails = this.userDetails;
  var amount= parseInt(amt)
  if(acno in userDetails)
 {
  if(pswd==userDetails[acno]['password'])
  {
    if(userDetails[acno]['balance']>amount)
    {
    userDetails[acno]['balance'] -= amount;
    userDetails[acno]['transaction'].push({
      TYPE: 'DEBIT',
      AMOUNT:amount

    })
    this.saveDetails();
    return  userDetails[acno]['balance']
  }
  else{
    alert('Insufficient Fund')
  }
  }
  else{
    alert('Password incorrect')
  }

 }
 else{
  alert('Invalid UserDetails')
  return false;
 }
}

getTransaction(acno:any)
{
 return this.userDetails[acno]['transaction']
}
}
