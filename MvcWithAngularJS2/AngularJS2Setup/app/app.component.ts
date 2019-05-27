﻿import { Component } from '@angular/core';
import { MovieListComponent } from "./movies/movie-list.component";
import { MovieService } from "./movies/movie.service";
import { HTTP_PROVIDERS } from '@angular/http';
import 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `


 `,
    directives: [MovieListComponent],
    providers: [MovieService, HTTP_PROVIDERS]

})

export class AppComponent {
    welcomeMessage: string = "Welcome to My First Angular Project in VS 2015!";
}