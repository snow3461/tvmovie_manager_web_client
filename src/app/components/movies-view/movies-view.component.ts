import { Component, OnInit } from "@angular/core";
import { MoviesService } from "src/app/services/movies.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-movies-view",
  templateUrl: "./movies-view.component.html",
  styleUrls: ["./movies-view.component.css"]
})
export class MoviesViewComponent implements OnInit {
  movies: any[];
  movieSubscription: Subscription;
  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieSubscription = this.movieService.moviesSubject.subscribe(
      (movies: any[]) => {
        this.movies = movies;
      }
    );
    this.movieService.emitMovieSubject();
  }
}
