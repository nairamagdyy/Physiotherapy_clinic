import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[AuthService]
})
export class SignupComponent implements OnInit {
  form = {
    Name:"", Occupation:"", Age:0,
      Length:0, Weight:0, BloodPressure:"", 
      RBS:"", MobileNumber:"", Email:""
  };

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { Name, Occupation, Age,
      Length, Weight, BloodPressure, 
      RBS, MobileNumber, Email} = this.form;

    this.authService.register(Name, Occupation, Age,
      Length, Weight, BloodPressure, 
      RBS, MobileNumber, Email).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error_ => {
        this.errorMessage = error_.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
