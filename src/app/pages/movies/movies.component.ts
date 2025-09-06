import { Component, OnInit } from "@angular/core";
import { Movie } from "../../models/movie.model";
import { MoviesService } from "src/app/services/movies.service";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";

@Component({
    selector: "app-movies",
    templateUrl: "./movies.component.html",
    styleUrls: ["./movies.component.scss"]
})
export class MoviesComponent implements OnInit {
    movies: Movie[] = [];
    public genreid: string | null = null;
    searchValue: string | null = null;

    constructor(
        private movieService: MoviesService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(take(1)).subscribe(({ genreid }) => {
            if (genreid) {
                this.genreid = genreid;
                this.getMoviesById(genreid, 1);
                console.log(genreid);
            } else {
                this.getpgMovies(1);
            }
        });
    }

    getpgMovies(page: number, searchKeyword?: string) {
        this.movieService
            .searchMovies(page, searchKeyword)
            .subscribe((movies) => {
                this.movies = movies;
            });
    }

    getMoviesById(genreId: string, page: number) {
        this.movieService
            .getMoviesbyGenre(genreId, page)
            .subscribe((movies) => {
                this.movies = movies;
            });
    }

    paginate(event: any) {
        const pageNumber = event.page + 1;
        if (this.genreid) {
            this.getMoviesById(this.genreid, pageNumber);
        } else {
            if (this.searchValue) {
                this.getpgMovies(pageNumber, this.searchValue);
            } else {
                this.getpgMovies(pageNumber);
            }
        }
    }

    searchChanged() {
        if (this.searchValue) {
            this.getpgMovies(1, this.searchValue);
            console.log(this.searchValue);
        }
    }
}
