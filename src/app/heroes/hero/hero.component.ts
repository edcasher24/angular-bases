import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  public name = "Spiderman";
  public age  = 43;

  get capitalizedName() : string {
    return this.name.toLocaleUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero() : void {
    this.name='Hulk';

  }

  changeAge() : void {
    this.age=20;

  }

  reset() : void {
    this.name='Spiderman'
  }



}
