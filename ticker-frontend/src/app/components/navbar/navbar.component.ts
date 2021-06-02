import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from "src/app/services/storage.service";

@Component({
    selector: 'navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    opened = false;
    darkTheme = true;

    routes = new Map([
       ['home', 'Home'], 
    ]);

    constructor(
        private _router: Router,
        private activatedRoute: ActivatedRoute,
        private _tokenStorage: StorageService,
    ) {}

    get loggedIn() {
        return this._tokenStorage.getToken() != null;
    }

    toggleSidenav(): void {
        this.opened = !this.opened;
    }

    toggleDarkMode(): void {
        this.darkTheme = !this.darkTheme;
    }
}