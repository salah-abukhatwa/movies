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
    searchMovies(page: number) {
        return this.http
            .get<MovieDto>(
                `${this.dpUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`
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
}
