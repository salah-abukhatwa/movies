import { Component, Input } from "@angular/core";
import { Movie } from "../../models/movie.model";
import { IMAGES_SIZES } from "../../constants/images-sizes";
import { TvShow } from "src/app/models/tvShow.model";

@Component({
    selector: "item",
    templateUrl: "./item.component.html",
    styleUrls: ["./item.component.scss"]
})
export class ItemComponent {
    @Input() itemData: Movie | null = null;
    @Input() itemDatatv: TvShow | null = null;

    imagesSizes = IMAGES_SIZES;
}
