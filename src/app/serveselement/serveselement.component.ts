import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-serveselement',
  templateUrl: './serveselement.component.html',
  styleUrls: ['./serveselement.component.css']
})
export class ServeselementComponent implements OnInit {
 
  @Input() element:{type:string,name:string,content:string}[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
