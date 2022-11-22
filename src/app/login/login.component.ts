import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {// 3rd execution happen from class its properties and all

  //String Interpolation-->{{aim}} in html file
aim="Your perfect banking Partner";

//Property Binding-->[placeholder]="account" in html file
account="Enter your Account here";

acno='';
pswd='';




//class -> Collection of properties and mtds

// Class execution--> 1st constructor, then ngOnInit, then class, then userdefined mtds


//properties/variables
//userdefined mtds --> 4th execution happen from userdefined mtd
userDetails:any={
  1000: {acno:1000, username:'Divya', password:1000, balance:2000},
  1001: {acno:1001, username:'Gokul', password:1001, balance:2000},
  1002: {acno:1002, username:'Tejasswi',password:1002, balance:2000} 
}






  constructor() {
// 1st execution happen from constructor
// It automatically invokes when the obj is created

   }

  ngOnInit(): void {
// 2nd execution happen from ng oninit

// For initial process of the component
// Life cycle hook of Angular
  }

  

  acnoChange(event:any)
  {
    console.log(event);
    
   this.acno=event.target.value;
   console.log(this.acno);
   
  }

  pswdChange(event:any)
  {
    this.pswd= event.target.value;
    console.log(this.pswd);
    
  }

  signin(a:any,p:any)
  {
    //alert('Login clicked')
     
  var acno=a.value;
  var pswd=p.value;
  var userDetails=this.userDetails;
  
  if(acno in userDetails)
  {
    if(pswd==userDetails[acno]['password'])
    {
      alert('Login successfull');
    }
    else{
      alert('Invalid password');
    }
  }
  else{
    alert('Invalid user details');
  }

  }

}
