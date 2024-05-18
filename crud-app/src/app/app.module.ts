import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/home/components/users/users.component';
import { NavbarComponent } from './pages/home/components/navbar/navbar.component';
import { WelcomeComponent } from './pages/home/components/welcome/welcome.component';
import { TodoListComponent } from './pages/home/pages/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    EditUserComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    NavbarComponent,
    WelcomeComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
