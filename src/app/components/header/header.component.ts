import {Component, Input, OnInit, } from '@angular/core';
import {ScreenSizeService, ScreenType} from "../../services/screen-size.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  @Input() screenSize: ScreenType = ScreenType.desktop;

  constructor(public screenSizeService: ScreenSizeService) { }

  ngOnInit(): void {
  }

}
