import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character, CharacterDetail, CharactersService } from '../characters.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent implements OnInit{
  character!: CharacterDetail;

  constructor(private router:ActivatedRoute, private characterService : CharactersService){}

  ngOnInit(): void {
    this.router.queryParams.subscribe(async(params:any)=>{
      this.character = await this.characterService.findCharacter(params.name)
    })
  }
}
