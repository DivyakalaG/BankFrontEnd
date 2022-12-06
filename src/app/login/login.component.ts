import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

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

//for reactive forms
loginForm = this.fb.group({ //group
  
  //array   ....for validation add inside array
  acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
})



//class -> Collection of properties and mtds

// Class execution--> 1st constructor, then ngOnInit, then class, then userdefined mtds


//properties/variables
//userdefined mtds --> 4th execution happen from userdefined mtd






//dependency injection
  constructor(private ds:DataService, private router:Router, private fb: FormBuilder) {
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

  // signin(a:any,p:any)
  // {
  //   //alert('Login clicked')
     
  // var acno=a.value;
  // var pswd=p.value;
  // var userDetails=this.userDetails;
  
  // if(acno in userDetails)
  // {
  //   if(pswd==userDetails[acno]['password'])
  //   {
  //     alert('Login successfull');
  //   }
  //   else{
  //     alert('Invalid password');
  //   }
  // }
  // else{
  //   alert('Invalid user details');
  // }

  // }

  signin()
  {
    //alert('Login clicked')
     
  var acno=this.loginForm.value.acno;
  var pswd=this.loginForm.value.pswd;
  // var userDetails=this.ds.userDetails;

  if (this.loginForm.valid) {

  const result=this.ds.login(acno,pswd)
  if(result)
  {
    alert('Login Successfull')
    this.router.navigateByUrl('dashboard')  //dependency injection
  }
  else{
    alert('Login Failed')
  }
}else{
  alert('Invalid form')
}
  
  // if(acno in userDetails)
  // {
  //   if(pswd==userDetails[acno]['password'])
  //   {
  //     alert('Login successfull');
  //     this.router.navigateByUrl('dashboard')
  //   }
  //   else{
  //     alert('Invalid password');
  //   }
  // }
  // else{
  //   alert('Invalid user details');
  // }

  }

}
