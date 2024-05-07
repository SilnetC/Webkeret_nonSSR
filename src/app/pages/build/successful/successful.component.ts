import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.component.html',
  styleUrl: './successful.component.scss'
})
export class SuccessfulComponent implements OnInit{
  configName: string = '';

  constructor(private actRoute: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.actRoute.params.subscribe((param: any) => {
      this.configName = param.configName as string;
      })
  }

  backPreviousPage() {
    this.location.back();
  }
}
