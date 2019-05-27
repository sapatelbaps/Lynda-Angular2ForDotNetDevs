import { Component } from '@angular/core';
import { MovieListComponent } from "./movies/movie-list.component";
import { MovieService } from "./movies/movie.service";
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
<div>
    <nav class='navbar navbar-default'>
        <div class='container-fluid'>
            <a class='navbar-brand'>{{pageTitle}}</a>
            <ul class='nav navbar-nav'>
                <li><a [routerLink]="['welcome']">Home</a></li>
                <li><a [routerLink]="['movies']">Movie List</a></li>
            </ul>
        </div>
    </nav>
    <div class='container'>
        <router-outlet></router-outlet>
    </div>
</div>
 `,
    directives: [MovieListComponent],
    providers: [MovieService, HTTP_PROVIDERS]

})

export class AppComponent {
    welcomeMessage: string = "Welcome to My First Angular Project in VS 2015!";
}