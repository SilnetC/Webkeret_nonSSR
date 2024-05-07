import { Component, Input, OnInit } from '@angular/core';
import { newGPU } from '../../common/models/newGPU';
import { NewService } from '../../common/services/new.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit{
  @Input()
  headingText: string = "Üdvözlünk a PC Konfig Weboldalon!";

  newGPUs: Array<newGPU> = [];

  constructor(private newService: NewService) { }
  
  ngOnInit(): void {
    this.newService.getAllNewComponent().subscribe((data) => {
      this.newGPUs = data;
    });
  }

}
