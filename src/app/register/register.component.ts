import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  uname="";
  acno="";
  pswd="";

//for reactive forms.. registermodel
  registerForm=this.fb.group({ //group
    uname:[''],//array
    acno:[''],
    pswd:['']
  })
  //control -> ts file model linked to html file
  

  constructor(private router:Router, private ds:DataService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register()
  {
    console.log(this.registerForm); // in console new registered value will be empty so in signup change this.uname,etc to form
    
  }
  signup(){
    // alert('clicked');
    var username=this.registerForm.value.uname;
    var password=this.registerForm.value.pswd;
    var acno=this.registerForm.value.acno;
    const result=this.ds.register(acno,username,password);
    
// if true from ds file below will continue
    if(result)
    {
      alert('Register Successfull')
      this.router.navigateByUrl('')
    }
    else{
      alert('Registration failed')
      this.router.navigateByUrl('register')
    }
    
  }
}
