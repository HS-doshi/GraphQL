import { Component, OnInit } from '@angular/core';
import { Character, CharactersService } from '../characters.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent implements OnInit {
  offset :number =0;
  count:number=0;
  characters : Character[] =[];

  constructor(private characterService : CharactersService){}

  // Promise used for provide an easy way to
  // execute asynchronous fun. that use callbacks,
  //while emitting & completing one value at a time.

  async ngOnInit(): Promise<void>{
    await this.updateCharacters();
  }
  async updateCharacters(){
    const result = await this.characterService.getCharacters(this.offset);
    this.count = result.count
    this.characters = result.characters
  }
  showPrevious(){
    return this.offset>0
  }
  shoeNext(){
    return this.offset + 10 <this.count
  }
  async onPrevious(){
    this.offset-=10;
    await this.updateCharacters();
  }
  async onNext(){
    this.offset+=10;
    await this.updateCharacters();
  }
}
