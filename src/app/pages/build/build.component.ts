import { Component, OnInit } from '@angular/core';
//import { partsObject } from '../../common/constants/parts';
import { FormatSaveDatePipe } from '../../common/pipes/format-save-date.pipe';
import { Config } from '../../common/models/Configurations';
import { Router } from '@angular/router';
import { ConfigsService } from '../../common/services/configs.service';
import { PartsService } from '../../common/services/parts.service';


@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrl: './build.component.scss'
})
export class BuildComponent implements OnInit {
  PCparts: any;

  ConfigObject: any = {};

  currentCPUList: Array<any> = [];

  constructor(private router: Router, private configService: ConfigsService, private partsService: PartsService) {}

  ngOnInit() {
    this.partsService.getAllParts().subscribe(data => {
      this.PCparts = data[0]; 
      //console.log(this.PCparts);
      for (let category in this.PCparts) {
        if (category !== 'intel_cpu' && category !== 'amd_cpu') {
          this.ConfigObject[category] = this.PCparts[category][0];
        }
      }
      this.updateCpuList();
    });
    /* this.partsService.getAllParts().subscribe(data => {
      console.log(data);
    }); */
    /* for (let category in this.PCparts) {
      if (category !== 'intel_cpu' && category !== 'amd_cpu') {
        this.ConfigObject[category] = this.PCparts[category][0];
      }
    }
    this.updateCpuList(); */
  }

  updateCpuList() {
    if (this.ConfigObject['cpu_brand'] === 'Intel') {
      this.currentCPUList = this.PCparts['intel_cpu'];
    } else if (this.ConfigObject['cpu_brand'] === 'AMD') {
      this.currentCPUList = this.PCparts['amd_cpu'];
    }
    this.ConfigObject['cpu'] = this.currentCPUList[0];
  }

  saveConfig() {
    if (this.ConfigObject['name']) {
      let pipe = new FormatSaveDatePipe();
      let createTime = pipe.transform(new Date().toString());
      this.ConfigObject['createTime'] = createTime;
      let config: Config = {
        id: '', 
        ...this.ConfigObject
      };
      //this.konfigok.push({...this.ConfigObject});
      //console.log(this.konfigok);

      // Insert config to database
      this.configService.create(config).then(() => {
        console.log('Configuration saved successfully!');
        this.router.navigateByUrl('/build/successful/' + this.ConfigObject['name']);
      }).catch(error => {
        console.error('Error saving configuration: ', error);
      });

    }
  } 
}
