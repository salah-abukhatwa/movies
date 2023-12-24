import { Component } from "@angular/core";
import { Genre } from "src/app/models/genre.model";
import { TvshowService } from "src/app/services/tvshow.service";

@Component({
    selector: "app-tv-genres",
    templateUrl: "./tv-genres.component.html",
    styleUrl: "./tv-genres.component.scss"
})
export class TvGenresComponent {
    genres: Genre[] = [];

    constructor(private tvService: TvshowService) {}
    ngOnInit(): void {
        this.tvService.getTvShowGenres().subscribe((genresData) => {
            this.genres = genresData;
        });
    }
}
