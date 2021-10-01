import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = {
    email: "",
    password: ""
  };
  @Output() featureselected= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  onselect(feature:string){
       this.featureselected.emit(feature);
  }

}
