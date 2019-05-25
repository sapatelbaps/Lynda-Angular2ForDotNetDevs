import { Component } from '@angular/core';

@Component({
    selector: 'mm-movies',
    templateUrl: 'app/movies/movie-list.component.html'
})

export class MovieListComponent {
    pageTitle: string = 'Movie List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    seePoster: boolean = false;

    movies: any[] = [
        {
            "movieId": 2,
            "movieName": "Titanic!",
            "movieStar": "DiCaprio",
            "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            "releaseDate": "3/13/2016",
            "price": 8.00,
            "starRating": 4.5,
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
            "imageUrl": "http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SY1000_CR0,0,666,1000_AL_.jpg"
        }];

    toggleImage(): void {
        this.seePoster != this.seePoster;
    }

}

