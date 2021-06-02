import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { LoginService } from "src/app/services/login.service";
import { StorageService } from "src/app/services/storage.service";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

    usernameFormControl = new FormControl('', [
        Validators.required,
    ]);

    passwordFormControl = new FormControl('', [
        Validators.required,
    ]);

    loading = false;
    error = false;

    errorMessage = '';

    constructor(
        private _loginService: LoginService,
        private _router: Router,
        private _storage: StorageService
    ) { }

    onSubmit() {
        this.loading = true;
        this.error = false;
        this.errorMessage = '';

        this._loginService
            .login(
                this.usernameFormControl.value,
                this.passwordFormControl.value,
            )
            .subscribe(
                token => {
                    this._storage.saveToken(token);
                    this.loading = false; 
                    this._router.navigate(['home']);
                },
                (_) => {
                    this.loading = false;
                    this.error = true;
                    this.errorMessage = 'Incorrect username or password.';
                }
            );
    }
}