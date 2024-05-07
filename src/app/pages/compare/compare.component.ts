import { Component, OnInit } from '@angular/core';
import { ConfigListObject } from '../../common/constants/builds';
import { MatTableDataSource } from '@angular/material/table';

import { Config } from '../../common/models/Configurations';
import { ConfigsService } from '../../common/services/configs.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrl: './compare.component.scss'
})
export class CompareComponent implements OnInit{
  //configs = ConfigListObject;
  configs: Array<Config> = [];

  SelectedConfigs: any = {};
  comparedConfigs: any = {};

  displayedColumns = ['Alkatrész', 'PC1', 'PC2'];

  dataSource = new MatTableDataSource();

  constructor(private configService: ConfigsService) { }
  
  ngOnInit(): void {
    this.configService.getAllConfig().subscribe((configs: Config[]) => {
      this.configs = configs;
      //console.log(this.configs);
      this.SelectedConfigs['configName1'] = this.configs[0]['name'];
      this.SelectedConfigs['configName2'] = this.configs[0]['name'];
    });
    
  }
  
  compareConfigs() {
    this.comparedConfigs['config1'] = this.configs.find(config => config.name === this.SelectedConfigs['configName1']);
    this.comparedConfigs['config2'] = this.configs.find(config => config.name === this.SelectedConfigs['configName2']);
    console.log(this.comparedConfigs['config1']);

    const data = [
      { name: 'Név', pc1: this.comparedConfigs['config1'].name, pc2: this.comparedConfigs['config2'].name },
      { name: 'CPU', pc1: this.comparedConfigs['config1'].cpu, pc2: this.comparedConfigs['config2'].cpu },
      { name: 'GPU', pc1: this.comparedConfigs['config1'].gpu, pc2: this.comparedConfigs['config2'].gpu },
      { name: 'RAM', pc1: this.comparedConfigs['config1'].ram, pc2: this.comparedConfigs['config2'].ram },
      { name: 'Alaplap', pc1: this.comparedConfigs['config1'].mobo, pc2: this.comparedConfigs['config2'].mobo },
      { name: 'Ház', pc1: this.comparedConfigs['config1'].case, pc2: this.comparedConfigs['config2'].case },
      { name: 'CPU hűtő', pc1: this.comparedConfigs['config1'].cpu_cooler, pc2: this.comparedConfigs['config2'].cpu_cooler },
      { name: 'Tápegység', pc1: this.comparedConfigs['config1'].psu, pc2: this.comparedConfigs['config2'].psu },
      { name: 'SSD', pc1: this.comparedConfigs['config1'].ssd, pc2: this.comparedConfigs['config2'].ssd },
      { name: 'HDD', pc1: this.comparedConfigs['config1'].hdd, pc2: this.comparedConfigs['config2'].hdd },
    ];
  
    this.dataSource.data = data;
  }
}
