import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

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
    ) {}

    toggleSidenav(): void {
        this.opened = !this.opened;
    }

    toggleDarkMode(): void {
        this.darkTheme = !this.darkTheme;
    }
}