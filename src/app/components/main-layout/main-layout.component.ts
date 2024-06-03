import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {SideNavigationComponent} from "../side-navigation/side-navigation.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SideNavigationComponent,
    HeaderComponent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
