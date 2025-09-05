import { Component, Input } from "@angular/core";
import {
    trigger,
    transition,
    style,
    animate,
    query,
    stagger
} from "@angular/animations";

import { Movie } from "src/app/models/movie.model";
import { TvShow } from "src/app/models/tvShow.model";

@Component({
    selector: "app-items-banner",
    templateUrl: "./items-banner.component.html",
    styleUrls: ["./items-banner.component.scss"],
    animations: [
        trigger("fadeInStagger", [
            transition(":enter", [
                query(
                    ":enter",
                    [
                        style({ opacity: 0, transform: "translateY(30px)" }),
                        stagger("200ms", [
                            animate(
                                "1000ms ease-in-out",
                                style({
                                    opacity: 1,
                                    transform: "translateY(0)"
                                })
                            )
                        ])
                    ],
                    { optional: true }
                )
            ])
        ])
    ]
})
export class ItemsBannerComponent {
    @Input() items: Movie[] = [];
    @Input() itemstv: TvShow[] = [];
    @Input() title = "";
}
