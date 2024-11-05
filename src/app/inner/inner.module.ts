import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LobbyComponent} from "./lobby/lobby.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {RouterModule, Routes} from "@angular/router";
import {NzCardModule} from "ng-zorro-antd/card";
import {CharacterCardComponent} from "./character-listing/character-card/character-card.component";
import {CharacterListingComponent} from "./character-listing/character-listing.component";
import {CharacterCreatorComponent} from "./character-creator/character-creator.component";
import {NzIconModule} from "ng-zorro-antd/icon";
import {IconDefinition} from "@ant-design/icons-angular";
import { DeleteOutline, EditOutline, SelectOutline} from '@ant-design/icons-angular/icons'

const icons: IconDefinition[] = [ DeleteOutline, EditOutline, SelectOutline ];

const routes: Routes = [
  {
    path: '',
    component: LobbyComponent
  }
];

const zorroImports = [
  NzButtonModule,
  NzCardModule,
  NzIconModule.forChild(icons)
];

@NgModule({
  declarations: [
    CharacterCardComponent,
    CharacterCreatorComponent,
    CharacterListingComponent,
    LobbyComponent
  ],
  imports: [
    ...zorroImports,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InnerModule { }
