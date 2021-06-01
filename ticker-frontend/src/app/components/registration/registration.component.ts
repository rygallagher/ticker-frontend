import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RegistrationService } from "src/app/services/registration.service";

@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
    
    usernameFormControl = new FormControl('', [
        Validators.required,
    ]);

    passwordFormControl = new FormControl('', [
        Validators.required,
    ]);

    confirmPasswordFormControl = new FormControl('', [
        Validators.required,
    ]);

    saving = false;
    error = false;

    constructor(
        private _registrationService: RegistrationService,
        private _router: Router,
    ) { }

    onSubmit(): void {
        this.error = true;
        this.saving = true;

        this._registrationService
            .register(
                this.usernameFormControl.value,
                this.passwordFormControl.value,
            )
            .subscribe(
                (_) => {
                    this.saving = false; 
                    this._router.navigate(['home']);
                },
                (_) => {
                    this.saving = false;
                    this.error = true;
                }
            );
    }
}