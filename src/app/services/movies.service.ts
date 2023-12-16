import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
    Movie,
    MovieDto,
    MovieVideosDto,
    movieCredits,
    movieImages
} from "../models/movie.model";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { GenresDto } from "../models/genre.model";

@Injectable({
    providedIn: "root"
})
export class MoviesService {
    dpUrl: string = "https://api.themoviedb.org/3";
    apiKey: string = "806306a710ed06b2d71e02fd0742c7d9";

    constructor(private http: HttpClient) {}

    getMovies(type: string = "upcoming", count: number = 12) {
        return this.http
            .get<MovieDto>(`${this.dpUrl}/movie/${type}?api_key=${this.apiKey}`)
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(0, count));
                })
            );
    }
    getMovie(id: string) {
        return this.http.get<Movie>(
            `${this.dpUrl}/movie/${id}?api_key=${this.apiKey}`
        );
    }
    searchMovies(page: number, searchValue?: string) {
        const uri = searchValue ? "/search/movie" : "/movie/popular";
        return this.http
            .get<MovieDto>(
                `${this.dpUrl}${uri}?&page=${page}&query=${searchValue}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getMoviesVideos(id: string) {
        return this.http
            .get<MovieVideosDto>(
                `${this.dpUrl}/movie/${id}/videos?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getMovieImages(id: string) {
        return this.http.get<movieImages>(
            `${this.dpUrl}/movie/${id}/images?api_key=${this.apiKey}`
        );
    }
    getMovieCredits(id: string) {
        return this.http.get<movieCredits>(
            `${this.dpUrl}/movie/${id}/credits?api_key=${this.apiKey}`
        );
    }

    getMoviesGenres() {
        return this.http
            .get<GenresDto>(
                `${this.dpUrl}/genre/movie/list?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.genres);
                })
            );
    }

    getMoviesbyGenre(genreId: string, pageNumber: number) {
        return this.http
            .get<MovieDto>(
                `${this.dpUrl}/discover/movie?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }
}
