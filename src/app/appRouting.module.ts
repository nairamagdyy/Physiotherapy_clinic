import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { SurveyComponent } from './user/survey/survey.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomepageComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'notfound', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }