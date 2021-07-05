import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hasSubmitted = false;
  inValidCredentials = false;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ["", Validators.required],
      password: ["", Validators.required],
    });

    setTimeout(() => this.loginService.isLoggedIn = false)

  }

  logIn() {
    this.hasSubmitted = true;
    if (this.loginForm.status === "INVALID") {
      return;
    }

    const sub = this.loginService
      .getUser(this.loginForm.value["userName"])
      .subscribe(
        (arg: any) => {
          if (
            arg.hasOwnProperty("password") &&
            arg["password"] === this.loginForm.value["password"]
          ) {
            this.loginService.isLoggedIn = true;
            this.router.navigate(["/home"]);
          }
          sub.unsubscribe();
        },
        (error) => (this.inValidCredentials = true)
      );
  }
}
