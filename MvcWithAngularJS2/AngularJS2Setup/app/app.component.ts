import { Component } from '@angular/core';
import { MovieListComponent } from "./movies/movie-list.component";
import { MovieService } from "./movies/movie.service";


@Component({
    selector: 'my-app',
    template: `<h1>{{ welcomeMessage}}</h1>
                <div>
                    <mm-movies></mm-movies>
                </div>
                `,
    directives: [MovieListComponent],
    providers: [MovieService]

})

export class AppComponent {
    welcomeMessage: string = "Welcome to My First Angular Project in VS 2015!";
}