import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: User[] = [
    { name: 'Alice', email: 'alice@example.com', role: 'FE' },
    { name: 'Bob', email: 'bob@example.com', role: 'BE' }
  ];

  constructor(private router: Router) {}

  onAddUser() {
    this.router.navigate(['/app/add-user']);
  }

  onEditUser(user: User) {
    this.router.navigate(['/app/edit-user'], { state: { user } });
  }

  onDeleteUser(user: User) {
    this.users = this.users.filter(u => u !== user);
  }
}
