import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CharactersService, Species } from '../characters.service';

@Component({
  selector: 'app-species',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './species.component.html',
  styleUrl: './species.component.css'
})
export class SpeciesComponent implements OnInit{
  species!:Species;

  constructor(private speciesSerivice : CharactersService,private route : ActivatedRoute){}

  ngOnInit(): void {
    this.route.queryParams.subscribe(async(params:any)=>{
      this.species = await this.speciesSerivice.findSpecies(params.name)
    })
  }
}
