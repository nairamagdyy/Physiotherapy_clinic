import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  content: any;
  
 API_URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
    this.http.get(this.API_URL).subscribe(
        data=>{
            this.content = data;
        }
    );
}
}