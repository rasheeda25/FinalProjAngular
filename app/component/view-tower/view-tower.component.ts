import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TowerServiceService } from 'src/app/service/tower-service.service';
import { Tower } from 'src/app/model/tower';

@Component({
  selector: 'app-view-tower',
  templateUrl: './view-tower.component.html',
  styleUrls: ['./view-tower.component.css']
})
export class ViewTowerComponent implements OnInit {
  tower:Tower;
  constructor(private towerService: TowerServiceService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        let towerId = params['id'];
        if (towerId) {
          this.towerService.getTowerById(towerId).subscribe(
            (data) => this.tower = data
          );
        }
      }
    );

  }
}
