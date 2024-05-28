import {Component, inject} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  private auth = inject (AuthService)

  async HandleLogOut(){
    const response = await this.auth.SignOut();
  }
}
