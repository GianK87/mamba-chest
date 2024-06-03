import {inject, Injectable, NgZone} from '@angular/core';
import {createClient, SupabaseClient, User} from "@supabase/supabase-js";
import {environment} from "../../environments/environment.development";
import {Router} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private supabase!: SupabaseClient
    private router = inject(Router)
    private _ngZone = inject(NgZone);
    // @ts-ignore
    private currentUser: BehaviorSubject<User | boolean> = new BehaviorSubject<User | boolean>(null);

    constructor() {
      this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey)

      this.supabase.auth.onAuthStateChange((event, session)=>{
          if(session){
              console.log("event", event);
              console.log("session", session);
              if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
                  console.log('SET USER')

                  this.currentUser.next(session.user)
                  localStorage.setItem('session', JSON.stringify(session?.user));
                  if(session.user){
                      this._ngZone.run(() => {
                          this.router.navigate(['/standings']);
                      });
                  }
              }
          }
          else{
              console.log('no session available')
              this.currentUser.next(false)
          }
      })
    }

    // get isLoggedIn(): boolean{
    //     const user = localStorage.getItem('session') as string;
    //
    //     return user !== 'undefined' //user === 'undefined' ? false : true;
    // }

    async SignInWithGoogle(){
      await this.supabase.auth.signInWithOAuth({
        provider: 'google',
      })
    }

    async signInWithMagicLink(email: string) {
        await this.supabase.auth.signInWithOtp({ email })
    }

    async SignOut(){
      await this.supabase.auth.signOut();
    }

    getCurrentUser(): Observable<User | boolean> {
        return this.currentUser.asObservable()
    }

    getCurrentUserId(): string | null {
        if (this.currentUser.value) {
            return (this.currentUser.value as User).id
        } else {
            return null
        }
    }
}
