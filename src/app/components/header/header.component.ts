import {Component, Input, OnInit, } from '@angular/core';
import {ScreenSizeService, ScreenType} from "../../services/screen-size.service";

export const ANIMATION_DURATION = 250

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  menuItems: MenuItem[] = [
    {
      route: '/story',
      label: 'La nostra storia'
    },
    {
      route: '/info',
      label: 'Viaggio e alloggio'
    },
    {
      label: 'Lista Nozze'
    },
    {
      route: '/backoffice',
      label: 'Backoffice'
    },
    {
      route: '/invites',
      label: 'RSVP'
    },
  ]

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
interface MenuItem {
  route?: string,
  label: string
}
