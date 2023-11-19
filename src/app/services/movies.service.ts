import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class MoviesService {
    constructor(private http: HttpClient) {}
    getMovies() {
        return this.http.get(
            "https://api.themoviedb.org/3/movie/upcoming?api_key=806306a710ed06b2d71e02fd0742c7d9"
        );
    }
}
