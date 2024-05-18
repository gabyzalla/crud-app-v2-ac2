import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.addUserForm.valid) {
      console.log('Novo usuário:', this.addUserForm.value);
      this.router.navigate(['/app/users']);
    }
  }
}
