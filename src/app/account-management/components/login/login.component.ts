import { Component } from '@angular/core';
import {AccountManagementService} from "../../service/account-management.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData = { email: '', password: '' };
  errorMessage: string = '';


  constructor(private accountService: AccountManagementService, private router: Router) {}

  // Método para manejar el inicio de sesión
  onLogin() {
    this.accountService.login(this.loginData).subscribe(
      (user) => {
        // Inicio de sesión exitoso, redirige al usuario
        this.router.navigate(['/home']);
      },
      (error) => {
        // Muestra el mensaje de error
        this.errorMessage = 'Email or password is incorrect';
      }
    );
  }

  // Navegar al componente de registro
  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
