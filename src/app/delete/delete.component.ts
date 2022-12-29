import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

@Input() item:string|undefined  // item-> ngif-> acno in item
//input-> is used to hold data from parent...its a decorator
//ie. if delete button is clicked the data or page of this delete html should come
 // after tat assign the item=acno in dashboard html and do property binding ie copy item and bind in html of delete

 @Output() onCancel= new EventEmitter();
//output is used to hold data from child component

@Output() onDelete= new EventEmitter();

constructor() { }

  ngOnInit(): void {
  }

  cancel()
  {
    //alert('clicked')
//onCancel is user defined event....emit-> emits the value inside the event
    this.onCancel.emit() // this onCancel is generated from EventEmitter class above
  
    //now call this fn in dashboard html and then add to it to its ts also
  }

  delete() // this is child of dashboard so now in dashboard html denote it
  {
    // alert('clicked')
    this.onDelete.emit(this.item)
  }


}
