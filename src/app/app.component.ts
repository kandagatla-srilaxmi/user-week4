import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  arrayData:any[]= [];

  contactSelected(event){
        this.arrayData.push(event);    
  }

  delete(name){
    for(var i = 0;i<this.arrayData.length;i++){
      if(this.arrayData[i]===name){
        this.arrayData.splice(i,1);
      }
    }
  }
}
