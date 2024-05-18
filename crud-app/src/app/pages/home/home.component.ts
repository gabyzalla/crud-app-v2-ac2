import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  email: string;
  role: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[] = [
    { name: 'Alice', email: 'alice@example.com', role: 'FE' },
    { name: 'Bob', email: 'bob@example.com', role: 'BE' },
    { name: 'Charlie', email: 'charlie@example.com', role: 'Data Analyst' },
    { name: 'Dave', email: 'dave@example.com', role: 'Tech Lead' }
  ];
  userCount: number = 0;
  roleCount: { [key: string]: number } = {}; // Especificar o tipo do objeto

  ngOnInit() {
    this.userCount = this.users.length;
    this.roleCount = this.users.reduce((acc: { [key: string]: number }, user: User) => {
      if (acc[user.role]) {
        acc[user.role]++;
      } else {
        acc[user.role] = 1;
      }
      return acc;
    }, {});
  }

  getRoles(): string[] {
    return Object.keys(this.roleCount);
  }
}
