import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-standings',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.css'
})
export class StandingsComponent implements OnInit{
    private auth = inject (AuthService)
    private router = inject (Router)

    ngOnInit() {
        //this.supabase.authChanges((_, session) => (this.session = session))
    }

    async HandleLogOut(){
        //const response = await this.auth.SignOut();
        this.auth.SignOut().then(()=>{
            this.router.navigate(['/login']);
        })
            .catch((err)=>{
                alert(err.message);
            })
    }
}
