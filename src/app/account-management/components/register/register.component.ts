import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AccountManagementService} from "../../service/account-management.service";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AccountManagementService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      const userPlan = 'freemium'; // Set the userPlan to 'freemium' by default

      this.authService.register({ name, email, password, userPlan }).subscribe({
        next: (response) => {
          console.log('Registered successfully!', response);
          alert('Registered successfully!');
        },
        error: (error) => {
          console.error('Registration failed', error);
          alert('Failed to register.');
        }
      });
    }
  }
}
