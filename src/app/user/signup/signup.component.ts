import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form = {
    firstname: "",
    lastname : "",
    username: "",
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
