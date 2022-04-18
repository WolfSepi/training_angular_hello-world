import { Component } from '@angular/core';
import { FavoriteChangedEventsArgs } from './favorite/favorite.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hello-world';

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChanged(eventArgs: FavoriteChangedEventsArgs) {
    console.log("favorite changed: ", eventArgs);
  }

}
