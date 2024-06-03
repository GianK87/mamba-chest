import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-standings',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        NgIf
    ],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.css'
})
export class StandingsComponent implements OnInit{
    private auth = inject (AuthService)
    private router = inject (Router)
    isLoggedIn = false;

    constructor(private authService: AuthService) {
        this.authService.getCurrentUser().subscribe((user) => {
            if (user) {
                this.isLoggedIn = true;
            }else{
                this.isLoggedIn = false;
            }
            console.log(user);
            console.log("IsloggedInvariable", this.isLoggedIn);
        })
    }
    ngOnInit() {
        //this.supabase.authChanges((_, session) => (this.session = session))
    }

    async HandleLogOut(){
        //const response = await this.auth.SignOut();
        this.auth.SignOut().then(()=>{
            //this.router.navigate(['/login']);
        })
            .catch((err)=>{
                alert(err.message);
            })
    }
}
