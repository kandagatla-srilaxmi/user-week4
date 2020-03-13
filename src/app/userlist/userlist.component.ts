import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  @Input('child') public data:[];

  @Output() sendBack = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  delete(name){
    
    this.sendBack.emit(name);
  }
}
