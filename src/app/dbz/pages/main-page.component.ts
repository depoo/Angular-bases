import { DbzService } from '../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
  title:string = 'DBZ Personajes'

  // hacemos injeccion de dependencias, en este caso injectamos el service dbzService.
  constructor( private dbzService: DbzService ) { }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  // delete character of list
  onDeleteCharacter(id:string): void {
    this.dbzService.deleteCharacterById(id);
  }

  // Adding a character to list
  newCharacter(character:Character): void {
    this.dbzService.addCharacter( character )
  }
}