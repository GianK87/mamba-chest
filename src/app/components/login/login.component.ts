import {Component, inject} from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loading = false
    private auth = inject (AuthService)

    signInForm = this.formBuilder.group({
        email: '',
    })

    constructor(
        private readonly formBuilder: FormBuilder
    ) {}

    async HandleAuth(){
        const response = await this.auth.SignInWithGoogle();
    }

}
