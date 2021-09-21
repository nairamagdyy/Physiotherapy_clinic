import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent {
 /* //name1='';
  //password='';
  username='';
  showsecret = false;
  log:number[] = [];

  onToggleDetails() {
    this.showsecret = !this.showsecret;
    this.log.push(this.log.length + 1);
  }*/
  serverElements =[{type:'server',name:'hi',content:'test it'}];

}
