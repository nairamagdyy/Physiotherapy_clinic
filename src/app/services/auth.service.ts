import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  AUTH_API = 'https://jsonplaceholder.typicode.com/users';

  register(Name: string, Occupation: string, Age: number,
     Length: number, Weight: number,
     BloodPressure: string, RBS: string,
     MobileNumber: string, Email: string){
    return this.http.post(this.AUTH_API , {
      Name, Occupation, Age,
      Length, Weight, BloodPressure, 
      RBS, MobileNumber, Email
    });
  }
  login(Name: string, Email: string) {
    return this.http.post(this.AUTH_API , {
      Name,
      Email
    });
  }
}