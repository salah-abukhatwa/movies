import { Component, Input, OnInit } from "@angular/core";
import {
    trigger,
    state,
    style,
    transition,
    animate
} from "@angular/animations";
import { Movie } from "src/app/models/movie.model";

@Component({
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.scss"],
    animations: [
        trigger("slidFade", [
            state("void", style({ opacity: 0 })),
            transition("void <=> *", [animate("1s")])
        ])
    ]
})
export class SliderComponent implements OnInit {
    @Input() items: Movie[] = [];

    currentSlideIndex: number = 0;
    constructor() {}

    ngOnInit(): void {
        setInterval(() => {
            this.currentSlideIndex =
                ++this.currentSlideIndex % this.items.length;
            console.log(this.currentSlideIndex);
        }, 5000);
    }
}
