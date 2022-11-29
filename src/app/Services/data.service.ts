import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

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
  this.currentAcno=acno; //for transaction history
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
