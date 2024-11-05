import {Component, Input} from '@angular/core';
import {Character} from "../../../_models/character.model";

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.less'
})
export class CharacterCardComponent {
  @Input() character!: Character;
}
