import { Component, OnInit } from "@angular/core";
import { TvShow } from "../../models/tvShow.model";
import { TvshowService } from "src/app/services/tvshow.service";

@Component({
    selector: "app-tv-shows",
    templateUrl: "./tv-shows.component.html",
    styleUrl: "./tv-shows.component.scss"
})
export class TvShowsComponent implements OnInit {
    tvShows: TvShow[] = [];

    constructor(private tvShowService: TvshowService) {}

    ngOnInit(): void {
        this.getpgTvShows(1);
    }

    getpgTvShows(page: number) {
        this.tvShowService.searchTvShows(page).subscribe((tvshows) => {
            this.tvShows = tvshows;
        });
    }

    paginate(event: any) {
        this.getpgTvShows(event.page + 1);
    }
}
