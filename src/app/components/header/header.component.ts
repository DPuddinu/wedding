import {Component, Input, OnInit, } from '@angular/core';
import {ScreenSizeService, ScreenType} from "../../services/screen-size.service";

export const ANIMATION_DURATION = 250
export const MENU_LINKS = [
  {
    route: '/story',
    label: 'La nostra storia'
  },
  {
    route: '/info',
    label: 'Viaggio e alloggio'
  },
  {
    route: '/gifts',
    label: 'Lista Nozze'
  },
  {
    route: '/invites',
    label: 'RSVP'
  },
]
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  menuItems: MenuItem[] = MENU_LINKS

  menuOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  openCloseMenu(value? :boolean){

    const trigger = () => this.menuOpen = value? value : !this.menuOpen
    const openClose = this.menuOpen ? () => setTimeout(()=> trigger(), ANIMATION_DURATION) : trigger  //using a timeout on close to syncronize the closing animation

    openClose()
  }
}
export interface MenuItem {
  route?: string,
  label: string
}
