import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { first } from "rxjs";
import { IMAGES_SIZES } from "src/app/constants/images-sizes";
import {
    TvShow,
    TvShowCredits,
    TvShowImages,
    TvShowVideo
} from "src/app/models/tvShow.model";
import { TvshowService } from "src/app/services/tvshow.service";

@Component({
    selector: "app-tv-show",
    templateUrl: "./tv-show.component.html",
    styleUrl: "./tv-show.component.scss"
})
export class TvShowComponent implements OnInit {
    tvShow: TvShow | null = null;
    tvShowVideos: TvShowVideo[] = [];
    tvShowImages: TvShowImages | null = null;
    tvShowCredits: TvShowCredits | null = null;
    imagesSizes = IMAGES_SIZES;

    constructor(
        private route: ActivatedRoute,
        private tvShowService: TvshowService
    ) {}

    ngOnInit(): void {
        this.route.params.pipe(first()).subscribe(({ id }) => {
            this.getTvShow(id);
            this.gettvShowVideo(id);
            this.gettvShowImages(id);
            this.gettvShowCredits(id);
            console.log(id);
        });
    }

    getTvShow(id: string) {
        this.tvShowService.getTvShow(id).subscribe((tvShowData) => {
            this.tvShow = tvShowData;
        });
    }

    gettvShowVideo(id: string) {
        this.tvShowService.getTvShowVideos(id).subscribe((videoData) => {
            this.tvShowVideos = videoData;
        });
    }
    gettvShowImages(id: string) {
        this.tvShowService.getTvShowImages(id).subscribe((tvShowData) => {
            this.tvShowImages = tvShowData;
        });
    }
    gettvShowCredits(id: string) {
        this.tvShowService.getTvShoweCredits(id).subscribe((creditData) => {
            this.tvShowCredits = creditData;
        });
    }
}
