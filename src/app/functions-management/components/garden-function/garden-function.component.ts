import {Component, OnInit} from '@angular/core';
import {FunctionsService, Plant} from "../../service/functions.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-garden-function',
  standalone: true,
  imports: [],
  templateUrl: './garden-function.component.html',
  styleUrl: './garden-function.component.css'
})
export class GardenFunctionComponent implements  OnInit{
  plant: Plant | null = null;

  constructor(
    private route: ActivatedRoute,
    private functionsService: FunctionsService
  ) {}

  ngOnInit(): void {
    const plantId = this.route.snapshot.paramMap.get('id');
    this.getPlantDetails(plantId);
  }

  getPlantDetails(id: string | null): void {
    this.functionsService.getPlantDetails(id).subscribe(data => {
      this.plant = data;
    });
  }
}
