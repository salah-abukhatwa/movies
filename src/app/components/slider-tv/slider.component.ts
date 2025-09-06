import { Component, Input, OnInit } from "@angular/core";
import {
    trigger,
    state,
    style,
    transition,
    animate
} from "@angular/animations";
import { Movie } from "src/app/models/movie.model";
import { IMAGES_SIZES } from "../../constants/images-sizes";
import { TvShow } from "src/app/models/tvShow.model";

@Component({
    selector: "app-slider-tv",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.scss"],
    animations: [
        trigger("slidFade", [
            state("void", style({ opacity: 0 })),
            transition("void <=> *", [animate("1s")])
        ])
    ]
})
export class SlidertvComponent implements OnInit {
    @Input() tvitems: TvShow[] = [];

    @Input() isbanner: boolean = false;

    readonly imagesSizes = IMAGES_SIZES;

    currentSlideIndex: number = 0;
    constructor() {}

    ngOnInit(): void {
        if (!this.isbanner) {
            setInterval(() => {
                this.currentSlideIndex =
                    ++this.currentSlideIndex % this.tvitems.length;
            }, 5000);
        }

        if (this.tvitems?.length) {
            this.tvitems = this.tvitems.map((show) => ({
                ...show,
                networks: show.networks.slice(0, 2)
            }));
        }
    }
}
