import { Component, OnInit } from "@angular/core";
import { TvShow } from "../../models/tvShow.model";
import { TvshowService } from "src/app/services/tvshow.service";
import { ActivatedRoute } from "@angular/router";
import { take } from "rxjs";

@Component({
    selector: "app-tv-shows",
    templateUrl: "./tv-shows.component.html",
    styleUrl: "./tv-shows.component.scss"
})
export class TvShowsComponent implements OnInit {
    tvShows: TvShow[] = [];
    public genreid: string | null = null;
    searchValue: string | null = null;

    constructor(
        private tvShowService: TvshowService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(take(1)).subscribe(({ genreid }) => {
            if (genreid) {
                this.genreid = genreid;
                this.getTvShowsById(genreid, 1);
                console.log(genreid);
            } else {
                this.getpgTvShows(1);
            }
        });
    }

    getpgTvShows(page: number, searchKeyword?: string) {
        this.tvShowService
            .searchTvShows(page, searchKeyword)
            .subscribe((tvshows) => {
                this.tvShows = tvshows;
            });
    }

    getTvShowsById(genreId: string, page: number) {
        this.tvShowService
            .gettvShowsbyGenre(genreId, page)
            .subscribe((tvshows) => {
                this.tvShows = tvshows;
            });
    }

    paginate(event: any) {
        this.getpgTvShows(event.page + 1);
    }

    searchChanged() {
        if (this.searchValue) {
            this.getpgTvShows(1, this.searchValue);
            console.log(this.searchValue);
        }
    }
}
