import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
    TvShDto,
    TvShow,
    TvShowCredits,
    TvShowImages,
    TvShowVideosDto
} from "../models/tvShow.model";
import { switchMap } from "rxjs/operators";
import { of } from "rxjs";
import { GenresDto } from "../models/genre.model";
import { MovieDto } from "../models/movie.model";
@Injectable({
    providedIn: "root"
})
export class TvshowService {
    dpUrl: string = "https://api.themoviedb.org/3";
    apiKey: string = "806306a710ed06b2d71e02fd0742c7d9";
    constructor(private http: HttpClient) {}

    getTvShowes(type: string = "topRated", count: number = 12) {
        return this.http
            .get<TvShDto>(`${this.dpUrl}/tv/${type}?api_key=${this.apiKey}`)
            .pipe(
                switchMap((res) => {
                    return of(res.results.slice(0, count));
                })
            );
    }

    getTvShow(id: string) {
        return this.http.get<TvShow>(
            `${this.dpUrl}/tv/${id}?api_key=${this.apiKey}`
        );
    }

    searchTvShows(page: number, searchValue?: string) {
        const uri = searchValue ? "/search/tv" : "/tv/popular";
        return this.http
            .get<TvShDto>(
                `${this.dpUrl}${uri}?&page=${page}&query=${searchValue}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getTvShowVideos(id: string) {
        return this.http
            .get<TvShowVideosDto>(
                `${this.dpUrl}/tv/${id}/videos?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }

    getTvShowImages(id: string) {
        return this.http.get<TvShowImages>(
            `${this.dpUrl}/tv/${id}/images?api_key=${this.apiKey}`
        );
    }
    getTvShoweCredits(id: string) {
        return this.http.get<TvShowCredits>(
            `${this.dpUrl}/tv/${id}/credits?api_key=${this.apiKey}`
        );
    }

    getTvShowGenres() {
        return this.http
            .get<GenresDto>(
                `${this.dpUrl}/genre/tv/list?api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.genres);
                })
            );
    }

    gettvShowsbyGenre(genreId: string, pageNumber: number) {
        return this.http
            .get<TvShDto>(
                `${this.dpUrl}/discover/tv?with_genres=${genreId}&page=${pageNumber}&api_key=${this.apiKey}`
            )
            .pipe(
                switchMap((res) => {
                    return of(res.results);
                })
            );
    }
}
