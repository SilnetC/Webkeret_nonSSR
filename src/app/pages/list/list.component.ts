import { Component, OnInit } from '@angular/core';
import { Config } from '../../common/models/Configurations';
import { ConfigsService } from '../../common/services/configs.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  amdConfigs: Array<Config> = [];
  intelConfigs: Array<Config> = [];

  ConfigObject: any = {};

  currentConfig: Config | null = null;

  currentConfigId: string = '';

  constructor(private configService: ConfigsService) {}

  ngOnInit(): void {

    this.configService.getConfigsByCpuBrand('AMD').subscribe((configs: Config[]) => {
      this.amdConfigs = configs;
      console.log(this.amdConfigs);
    });

    this.configService.getConfigsByCpuBrand('Intel').subscribe((configs: Config[]) => {
      this.intelConfigs = configs;
      console.log(this.intelConfigs);
    });
  }

  updateConfig() {
    this.configService.update(this.ConfigObject).then(() => {
      console.log('A konfiguráció frissítve lett...');
      this.currentConfigId = '';
    }).catch((error) => {
      console.error('Hiba történt a konfiguráció frissítése közben: ', error);
    });
    this.currentConfigId = '';
  }

  closeForm() {
    this.currentConfigId = '';
  }


  editConfig(id: string) {
    this.configService.getConfigById(id).subscribe((config: Config | undefined) => {
      if (config) {
        this.currentConfig = config;
        console.log(this.currentConfig);
        this.currentConfigId = id;
        this.ConfigObject['name'] = this.currentConfig.name;
        this.ConfigObject['case'] = this.currentConfig.case;
        this.ConfigObject['cpu_brand'] = this.currentConfig.cpu_brand;
        this.ConfigObject['cpu'] = this.currentConfig.cpu;
        this.ConfigObject['mobo'] = this.currentConfig.mobo;
        this.ConfigObject['ram'] = this.currentConfig.ram;
        this.ConfigObject['gpu'] = this.currentConfig.gpu;
        this.ConfigObject['cpu_cooler'] = this.currentConfig.cpu_cooler;
        this.ConfigObject['psu'] = this.currentConfig.psu;
        this.ConfigObject['ssd'] = this.currentConfig.ssd;
        this.ConfigObject['hdd'] = this.currentConfig.hdd;
        this.ConfigObject['id'] = this.currentConfig.id;
        this.ConfigObject['createTime'] = this.currentConfig.createTime;
      } else {
        console.log('Nincs konfiguráció ezzel az azonosítóval: ', id);
      }
    });
    /* this.currentConfigId = id;
    console.log(this.currentConfigId); */
  }

  removeConfig(id: string) {
    this.configService.delete(id);
    console.log('A konfiguráció törölve lett...');
  }
}
