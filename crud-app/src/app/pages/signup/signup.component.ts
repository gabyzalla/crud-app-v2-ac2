import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      passwordConfirmation: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log("New user added with success!");
      console.log(this.signupForm.value);
      this.router.navigate(['/']);
    }
  }
}
