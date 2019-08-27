import { Component, OnInit, Input } from "@angular/core";
import { Url } from "url";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  @Input() movieId: Number;
  @Input() movieTitle: String;
  @Input() movieReleaseDate: String;
  @Input() movieStatus: String;
  @Input() moviePosterUrl: String;
  @Input() movieOverview: String;

  constructor() {}

  ngOnInit() {}
}
