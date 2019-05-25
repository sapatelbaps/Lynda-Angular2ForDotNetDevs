"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var movie_filter_pipe_1 = require("./movie-filter.pipe");
var review_component_1 = require("../shared/review.component");
var MovieListComponent = /** @class */ (function () {
    function MovieListComponent() {
        this.pageTitle = 'Movie List';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.seePoster = false;
        this.listFilter = 'Titanic';
        this.movies = [
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
            }
        ];
    }
    MovieListComponent.prototype.toggleImage = function () {
        this.seePoster = !this.seePoster;
    };
    MovieListComponent.prototype.ngOnInit = function () {
        console.log('Invoked ngonInit.');
    };
    MovieListComponent.prototype.onRatingClicked = function (message) {
        this.pageTitle = 'Movie List: ' + message;
    };
    MovieListComponent = __decorate([
        core_1.Component({
            selector: 'mm-movies',
            templateUrl: 'app/movies/movie-list.component.html',
            styleUrls: ['app/movies/movie-list.component.css'],
            pipes: [movie_filter_pipe_1.MovieFilterPipe],
            directives: [review_component_1.ReviewComponent]
        })
    ], MovieListComponent);
    return MovieListComponent;
}());
exports.MovieListComponent = MovieListComponent;
//# sourceMappingURL=movie-list.component.js.map