import { Component, OnInit } from '@angular/core';
import {MENU_LINKS, MenuItem} from "../header/header.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menuItems: MenuItem[] = MENU_LINKS

  constructor() { }

  ngOnInit(): void {
  }

}
