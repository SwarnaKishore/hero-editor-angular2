import { Component } from '@angular/core';
heroes: Hero[];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero : Hero;

  onSelect(hero : Hero)
  {
    this.selectedHero = hero;
  }
}
