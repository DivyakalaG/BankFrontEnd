import { Component, OnInit } from '@angular/core';
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
  user="";

  constructor(private ds: DataService) { 
    this.user=this.ds.currentUser
  }


  ngOnInit(): void {

  }
  deposit() {
    var acno = this.acno;
    var pswd = this.pswd;
    var amount = this.amount;
    const result = this.ds.deposit(acno, pswd, amount);
    if (result) {
      alert(`${amount} is created...Availabe balance is ${result}`)
    }
    else {
      alert('Transaction Error');
    }
  }

  withdraw() {
    var acno = this.acno1;
    var pswd = this.pswd1;
    var amount = this.amount1;
    const result1 = this.ds.withdraw(acno, pswd, amount);
    if (result1) {
      alert(`${amount} is debited...Availabe balance is ${result1}`)
    }
    else {
      alert('Transaction Error');
    }
  }

}
