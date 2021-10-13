import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  AUTH_API = 'http://localhost:44319/Magdy/Patient';

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
}