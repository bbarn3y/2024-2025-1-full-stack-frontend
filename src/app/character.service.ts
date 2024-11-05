import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {Character} from "./_models/character.model";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characterListChanged: Subject<Character[]> = new Subject<Character[]>();

  constructor() {}

  // @todo Implement!
}
