import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {ScreenSizeService, ScreenType} from "../../services/screen-size.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  screenType: ScreenType = ScreenType.mobile

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenType = this.screenSizeService.getScreenType(window.innerWidth)
  }

  constructor(public screenSizeService: ScreenSizeService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onResize()
  }

}
