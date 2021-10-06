import { OnInit} from '@angular/core';
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";

// import Swiper core and required modules
import SwiperCore, { Parallax, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation]);


@Component({
  selector: 'app-swiper',
  templateUrl:'./swiper.component.html',
  styleUrls: ["./swiper.components.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent{}
