import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from "../../services/movies.service";
import {
    Movie,
    MovieVideo,
    movieCredits,
    movieImages
} from "src/app/models/movie.model";
import { IMAGES_SIZES } from "src/app/constants/images-sizes";
import { first } from "rxjs";

@Component({
    selector: "app-movie",
    templateUrl: "./movie.component.html",
    styleUrl: "./movie.component.scss"
})
export class MovieComponent implements OnInit {
    movie: Movie | null = null;
    movieVideos: MovieVideo[] = [];
    movieImages: movieImages | null = null;
    movieCredits: movieCredits | null = null;
    imagesSizes = IMAGES_SIZES;

    constructor(
        private route: ActivatedRoute,
        private moviesService: MoviesService
    ) {}

    ngOnInit(): void {
        this.route.params.pipe().subscribe(({ id }) => {
            this.getMovie(id);
            this.getmovieVideo(id);
            this.getmovieImages(id);
            this.getmovieCredits(id);
        });
    }

    getMovie(id: string) {
        this.moviesService.getMovie(id).subscribe((movieData) => {
            this.movie = movieData;
        });
    }

    getmovieVideo(id: string) {
        this.moviesService.getMoviesVideos(id).subscribe((videoData) => {
            this.movieVideos = videoData;
        });
    }
    getmovieImages(id: string) {
        this.moviesService.getMovieImages(id).subscribe((imageData) => {
            this.movieImages = imageData;
        });
    }
    getmovieCredits(id: string) {
        this.moviesService.getMovieCredits(id).subscribe((creditData) => {
            this.movieCredits = creditData;
        });
    }
}
