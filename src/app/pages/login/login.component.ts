import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/services/auth.service';
import { users } from 'src/environments/environment';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MessageService]
})
export class LoginComponent {
  signup = false;
  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  signupForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    phone: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private auth: AuthService, public ref: DynamicDialogRef, private messageService: MessageService) { }

  submitLogin() {
    const authUser = users.find(t => (t.email === this.loginForm.value.email && t.password === this.loginForm.value.password));
    if (authUser) {
      this.auth.user = authUser;
      console.log(this.auth.user);
      this.messageService.add({severity: 'success', summary: 'Signed In', detail: `User ${this.auth.user.name} logged in successfully`});
      this.ref.close();
    } else {
      console.log(this.loginForm.value);
      this.messageService.add({key: 'bc', severity: 'danger', summary: 'User Unauthorized', detail: 'User is not found'});
    }
  }

  submitSignup() {
    this.messageService.add({severity:'info', summary: 'Signed Up', detail: `User ${this.auth.user.name} signed up successfully`});
    this.ref.close();
  }

}