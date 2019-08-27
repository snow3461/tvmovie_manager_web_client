import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable({
  providedIn: "root"
})
export class MoviesService {
  moviesSubject = new Subject<any[]>();

  private movies = [
    {
      id: "1",
      title: "Star Wars: The Force Awakens",
      release_date: "2015-12-15",
      status: "Released",
      poster_url:
        "https://image.tmdb.org/t/p/w500/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
      overview:
        "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers."
    },
    {
      id: "2",
      title: "The Last Samurai",
      release_date: "2003-12-05",
      status: "Released",
      poster_url:
        "https://image.tmdb.org/t/p/w500/sLv5pXysIz7QbtKFJy85d5yxv2W.jpg",
      overview:
        "Nathan Algren is an American hired to instruct the Japanese army in the ways of modern warfare, which finds him learning to respect the samurai and the honorable principles that rule them. Pressed to destroy the samurai's way of life in the name of modernization and open trade, Algren decides to become an ultimate warrior himself and to fight for their right to exist."
    },
    {
      id: "3",
      title: "Pacific Rim",
      release_date: "2013-07-11",
      status: "Released",
      poster_url:
        "https://image.tmdb.org/t/p/w500/sCJEwEShZvruTpQ2a4yiX3Q9EyZ.jpg",
      overview:
        "When legions of monstrous creatures, known as Kaiju, started rising from the sea, a war began that would take millions of lives and consume humanity's resources for years on end. To combat the giant Kaiju, a special type of weapon was devised: massive robots, called Jaegers, which are controlled simultaneously by two pilots whose minds are locked in a neural bridge. But even the Jaegers are proving nearly defenseless in the face of the relentless Kaiju. On the verge of defeat, the forces defending mankind have no choice but to turn to two unlikely heroes—a washed-up former pilot (Charlie Hunnam) and an untested trainee (Rinko Kikuchi)—who are teamed to drive a legendary but seemingly obsolete Jaeger from the past. Together, they stand as mankind's last hope against the mounting apocalypse."
    }
  ];

  constructor() {}

  emitMovieSubject() {
    this.moviesSubject.next(this.movies.slice());
  }
}
