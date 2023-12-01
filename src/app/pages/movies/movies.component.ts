import { Component, OnInit } from "@angular/core";
import { Movie } from "../../models/movie.model";
import { MoviesService } from "src/app/services/movies.service";

@Component({
    selector: "app-movies",
    templateUrl: "./movies.component.html",
    styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
    movies: Movie[] = [];

    constructor(private movieService: MoviesService) {}

    ngOnInit(): void {
        this.getpgMovies(1);
    }

    getpgMovies(page: number) {
        this.movieService.searchMovies(page).subscribe((movies) => {
            this.movies = movies;
        });
    }

    paginate(event: any) {
        this.getpgMovies(event.page + 1);
    }
}
