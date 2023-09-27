import { Character } from './../interfaces/character.interface';
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters:Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500,
    },
    {
      id: uuid(),
      name: 'majin boo',
      power: 15000
    }
  ];

  // recibe la data del componente hijo
  addCharacter( character:Character ):void {
    const newCharacter:Character = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  // recibe el id del componente hijo
  // deleteCharacter(index:number){
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById( id:string ){
    this.characters= this.characters.filter(character => character.id !== id)
  }
}