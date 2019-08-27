import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { MovieComponent } from "./components/movie/movie.component";
import { MoviesViewComponent } from "./components/movies-view/movies-view.component";
import { MoviesService } from "./services/movies.service";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    MovieComponent,
    MoviesViewComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "", component: MoviesViewComponent, pathMatch: "full" }
    ])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
