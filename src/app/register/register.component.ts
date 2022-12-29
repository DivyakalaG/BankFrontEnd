import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  uname = "";
  acno = "";
  pswd = "";

  //for reactive forms.. registermodel

  registerForm = this.fb.group({ //group
    uname: ['',[Validators.required, Validators.pattern('[a-zA-Z]*')]],//array   ....for validation add inside array
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  })

  //control -> ts file model linked to html file


  constructor(private router: Router, private ds: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signup() {

    console.log(this.registerForm); // in console new registered value will be empty so in signup change this.uname,etc to form

    // alert('clicked');
    var username = this.registerForm.value.uname;
    var password = this.registerForm.value.pswd;
    var acno = this.registerForm.value.acno;
    if (this.registerForm.valid) {

      console.log(this.registerForm.get('uname')?.errors);
      
       this.ds.register(acno, username, password)

      // if true from ds file below will continue
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('')
      },
      result=>{
        alert(result.error.message)
      })

    //   if (result) {
    //     alert('Register Successfull')
    //     this.router.navigateByUrl('')
    //   }
    //   else {
    //     alert('Registration failed')
    //     this.router.navigateByUrl('register')
    //   }

    // }
    // else {
    //   alert('Invalid form')
    // }
  }
  else{
    alert('Invalid Form')
  }
}}
