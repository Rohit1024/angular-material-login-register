import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import Validation from './Validations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  passwordHide = true;
  confirmPasswordHide = true;
  loginMessage = 'Logged In Successfully';
  registerMessage = 'Registered Successfully';
  registerForm = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: Validation.match('password', 'confirmPassword'),
    }
  );

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private fb: NonNullableFormBuilder,
    private snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
