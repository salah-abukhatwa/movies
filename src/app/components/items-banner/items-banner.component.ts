import { Component, Input } from "@angular/core";
import { Movie } from "../../models/movie.model";
import { TvShow } from "src/app/models/tvShow.model";

@Component({
    selector: "app-items-banner",
    templateUrl: "./items-banner.component.html",
    styleUrls: ["./items-banner.component.scss"]
})
export class ItemsBannerComponent {
    @Input() items: Movie[] = [];
    @Input() itemstv: TvShow[] = [];
    @Input() title: string = "";
}
