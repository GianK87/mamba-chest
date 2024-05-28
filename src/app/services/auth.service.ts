import {inject, Injectable} from '@angular/core';
import {createClient, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../../environments/environment.development";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private supabase!: SupabaseClient
    private router = inject(Router)

    constructor() {
        this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

      this.supabase.auth.onAuthStateChange((event, session)=>{
        console.log("event", event);
        console.log("session", session);

        localStorage.setItem('session', JSON.stringify(session?.user));
        if(session?.user){
           //this.router.navigate(['/standings'])
        }
      })
    }

    get isLoggedIn(): boolean{
        const user = localStorage.getItem('session') as string;

        return user !== 'undefined' //user === 'undefined' ? false : true;
    }

    async SignInWithGoogle(){
      await this.supabase.auth.signInWithOAuth({
        provider: 'google',
      })
    }

    async SignOut(){
      await this.supabase.auth.signOut();
    }
}
