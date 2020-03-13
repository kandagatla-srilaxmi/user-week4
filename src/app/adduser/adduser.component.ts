import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  @Output() childData = new EventEmitter();

  firstName:string ='';
  lastName:string = '';
  constructor() { }

  ngOnInit(): void {
  }
  
  onClick(){
    this.childData.emit(this.firstName+' '+this.lastName);
    //this.firstName = '';
    //this.lastName = '';
  }
  
  checkButton(){
    if(this.firstName==='' || this.lastName===''){
      return true;
    } else{
      return false;
    }
  }

}
