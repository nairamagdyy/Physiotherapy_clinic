import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
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
import { BookingComponent } from './user/booking/booking.component';
import { SlotsComponent } from './slots/slots.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';


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
    SwiperComponent,
    BookingComponent,
    SlotsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SwiperModule,
    ScheduleModule,
    ButtonModule
  ],
  providers: [authInterceptorProviders,DayService, 
    WeekService, 
    WorkWeekService, 
    MonthService,
    AgendaService,
    MonthAgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
