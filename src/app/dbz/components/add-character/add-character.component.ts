import { Character } from './../../interfaces/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter() //<-- onNewCharacter es un evento creado aqui.

  public character:Character = {
    name: '',
    power: 0
  };

  emitCharacter():void {

    if (this.character.name.length === 0 ) return;

    this.onNewCharacter.emit(this.character) //<-- "emit" esta enviando informacion al component padre

    this.character = {name: '', power: 0};
  }
}
