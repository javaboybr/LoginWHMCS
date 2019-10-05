import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public login: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
    ) {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  ngSubmit() {
    console.log(this.login);
    this.loginService.toPostLogin(this.login.value)
    .subscribe(
      resp => {
        console.log(resp);
        this.router.navigate(['/cliente']);
      },
      err => {
        console.log(err);
      }
    );
  }

}
