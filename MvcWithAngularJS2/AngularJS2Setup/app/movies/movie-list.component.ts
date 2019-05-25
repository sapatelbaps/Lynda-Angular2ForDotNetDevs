import { Component, OnInit } from '@angular/core';
import { IMovie } from './movie';
import { MovieFilterPipe } from './movie-filter.pipe'
import { ReviewComponent } from '../shared/review.component'


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
    listFilter: string = 'Titanic';

    movies: IMovie[] = [
        {
            "movieId": 2,
            "movieName": "Titanic!",
            "movieStar": "DiCaprio",
            "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            "releaseDate": "3/13/2016",
            "price": 8.00,
            "starRating": 3.5,
            "imageUrl": "https://www.baps.org/Data/Sites/1/Media/Linkimage/Thumb_Home_FS_Bhagwan_swaminarayan.png"
        },
        {
            "movieId": 3,
            "movieName": "Jaws!",
            "movieStar": "Shaw",
            "description": "When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and a grizzled fisherman set out to stop it.",
            "releaseDate": "4/13/2016",
            "price": 6.00,
            "starRating": 4.8,
            "imageUrl": "https://www.baps.org/Data/Sites/1/Media/Linkimage/Thumb_Home_FS_Bhagwan_swaminarayan.png"
        }];

    toggleImage(): void {
        this.seePoster = !this.seePoster;
    }

    ngOnInit(): void {
        console.log('Invoked ngonInit.');
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Movie List: ' + message;
    }
}

