import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {ScreenSizeService, ScreenType} from "../../services/screen-size.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  screenType: ScreenType = ScreenType.mobile

  zoom = 12
  coordinates = [
    {
    lat: 40.587418,
    lng: 9.0000463
    },
    {
      lat: 40.6063108,
      lng: 8.9791591
    }
  ]

  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  }

  mapWidth: any
  mapHeight: any

  @ViewChild('imgContainer') container : ElementRef | undefined;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateMapSize()
  }

  constructor(public screenSizeService: ScreenSizeService) {
    this.updateMapSize()
  }

  ngOnInit(): void {
    setTimeout(()=> {
      this.onResize()
    })
  }

  ngAfterViewInit(): void {
    this.onResize()
  }

  //setting map size equal to image
  updateMapSize() {
    this.mapWidth = this.container?.nativeElement.offsetWidth
    this.mapHeight = this.container?.nativeElement.offsetHeight
  }
}
