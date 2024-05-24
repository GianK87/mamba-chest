import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SupabaseService} from "./services/supabase.service";
import {AccountComponent} from "./components/account/account.component";
import {AuthComponent} from "./components/auth/auth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AccountComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-user-management'

  session = this.supabase.session

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit() {
    this.supabase.authChanges((_, session) => (this.session = session))
  }
}
