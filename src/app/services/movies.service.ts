import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MovieDto } from "../models/movie.model";
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
}
