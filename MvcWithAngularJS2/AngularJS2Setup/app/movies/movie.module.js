"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var movie_list_component_1 = require("./movie-list.component");
var movie_detail_component_1 = require("./movie-detail.component");
var movie_filter_pipe_1 = require("./movie-filter.pipe");
var movie_service_1 = require("./movie.service");
var movie_routing_1 = require("./movie.routing");
var MovieModule = /** @class */ (function () {
    function MovieModule() {
    }
    MovieModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, movie_routing_1.movieRouting],
            declarations: [movie_list_component_1.MovieListComponent, movie_detail_component_1.MovieDetailComponent, movie_filter_pipe_1.MovieFilterPipe],
            providers: [movie_service_1.MovieService]
        })
    ], MovieModule);
    return MovieModule;
}());
exports.MovieModule = MovieModule;
//# sourceMappingURL=movie.module.js.map