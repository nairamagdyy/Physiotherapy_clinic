import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './appRouting.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { authInterceptorProviders } from './auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { SurveyComponent } from './user/survey/survey.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './user/sidenav/sidenav.component';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    PagenotfoundComponent,
    UserComponent,
    SurveyComponent,
    FooterComponent,
    SidenavComponent,
    SwiperComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
