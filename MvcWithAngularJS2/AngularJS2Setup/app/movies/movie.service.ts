import { Injectable } from '@angular/core';
import { IMovie } from './movie';

@Injectable()
export class MovieService {
    getMovies(): IMovie[] {
        return [{
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
    }
}