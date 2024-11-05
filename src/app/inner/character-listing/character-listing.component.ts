import { Component } from '@angular/core';
import {Character, CharacterClass} from "../../_models/character.model";

@Component({
  selector: 'app-character-listing',
  templateUrl: './character-listing.component.html',
  styleUrl: './character-listing.component.less'
})
export class CharacterListingComponent {

  characters: Character[] = [
    new Character(
      'Test Warrior',
      '/assets/characters/warrior.webp',
      CharacterClass.WARRIOR,
      12
    ),
    new Character(
      'Mage Márton',
      '/assets/characters/mage.webp',
      CharacterClass.MAGE,
      6
    ),
    new Character(
      'Rogue Róbert',
      '/assets/characters/rogue.webp',
      CharacterClass.ROGUE,
      8
    )
  ];

}
