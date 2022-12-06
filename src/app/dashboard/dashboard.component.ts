import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //deposit
  acno = "";
  pswd = "";
  amount = "";
  //withdraw

  acno1 = "";
  pswd1 = "";
  amount1 = "";

  //currentUser
  user = "";

  //System date
  sdate:any;

  //for reactive forms.. deposit

  depositForm = this.fb.group({ //group
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],//array   ....for validation add inside array
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  })

  //for reactive forms.. withdrawal

  withdrawForm = this.fb.group({ //group
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]],//array   ....for validation add inside array
    acno1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z]*')]]
  })



  constructor(private ds: DataService, private fb: FormBuilder, private router: Router ) {
    this.user = this.ds.currentUser
    this.sdate= new Date();
  }


  ngOnInit(): void {
    if(!localStorage.getItem('CurrentAcno'))
    {
      alert('Please login first')
      this.router.navigateByUrl('');
    }
  }
  deposit() {
    var acno = this.depositForm.value.acno;
    var pswd = this.depositForm.value.pswd;
    var amount = this.depositForm.value.amount;

    if (this.depositForm.valid) {
      const result = this.ds.deposit(acno, pswd, amount);
      if (result) {
        alert(`${amount} is created...Availabe balance is ${result}`)
      }
      else {
        alert('Transaction Error');
      }
    } else {
      alert('Invalid form')
    }
  }


  withdraw() {

    var acno = this.withdrawForm.value.acno1;
    var pswd = this.withdrawForm.value.pswd1;
    var amount = this.withdrawForm.value.amount1;

    if (this.withdrawForm.valid) 
    {
      const result1 = this.ds.withdraw(acno, pswd, amount);
      if (result1) {
        alert(`${amount} is debited...Availabe balance is ${result1}`)
      }
      else {
        alert('Transaction Error');
      }
    } else {
      alert('Invalid form')
    }

  }

  logout(){
    //remove current acno current user
    localStorage.removeItem('CurrentAcno')
    localStorage.removeItem('CurrentUser')
    this.router.navigateByUrl('')
  }
 
  //initially alert is given...but once delete is clicked i need that msg to display ie. whether to delelte this ....
  delete(){
    // alert('clicked')

    this.acno=JSON.parse(localStorage.getItem('CurrentAcno')||'');
  }

//user defined...once delete-> no is clicked then it will come to same page
  onCancel()
  {
    this.acno='';
  }
}
