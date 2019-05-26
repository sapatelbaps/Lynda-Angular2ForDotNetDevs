import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieFilterPipe } from './movie-filter.pipe'
import { ReviewComponent } from '../shared/review.component'
import { MovieService } from "./movie.service";

@Component({
    selector: 'mm-movies',
    templateUrl: 'app/movies/movie-list.component.html',
    styleUrls: ['app/movies/movie-list.component.css'],
    pipes: [MovieFilterPipe],
    directives: [ReviewComponent]
})

export class MovieListComponent implements OnInit {
    pageTitle: string = 'Movie List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    seePoster: boolean = false;
    listFilter: string;
    errorMessage: string;
    movies: IMovie[];

    constructor(private _movieService: MovieService) {

    }

    toggleImage(): void {
        this.seePoster = !this.seePoster;
    }

    ngOnInit(): void {
        // After implementing observables we cannot directly just call the service.
        // this.movies = this._movieService.getMovies();

        // When we are using observables we have to summon the service by invoking the subscribe method.
        this._movieService.getMovies()
            .subscribe(movies => this.movies = movies,
                error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Movie List: ' + message;
    }
}

