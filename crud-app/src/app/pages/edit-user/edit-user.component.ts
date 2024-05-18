import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  editUserForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.editUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  ngOnInit() {
    const user = history.state.user;
    if (user) {
      this.editUserForm.patchValue(user);
    }
  }

  onSubmit() {
    if (this.editUserForm.valid) {
      console.log('Usuário editado:', this.editUserForm.value);
      this.router.navigate(['/app/users']);
    }
  }
}
