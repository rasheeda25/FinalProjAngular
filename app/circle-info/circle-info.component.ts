import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CirclesService } from '../service/circles.service';
import { Tower } from '../model/tower';
import { TowerServiceService } from '../service/tower-service.service';

@Component({
  selector: 'app-circle-info',
  templateUrl: './circle-info.component.html',
  styleUrls: ['./circle-info.component.css']
})
export class CircleInfoComponent implements OnInit {
  towers: Tower[];
  circle:string;
 
  constructor(private router: Router, private activatedRoute: ActivatedRoute, 
    private circleService: CirclesService,private towerService: TowerServiceService
    ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.circle = params['circle'];
        console.log(this.circle);
        if (this.circle) {
          this.circleService.getTowerByCircle(this.circle).subscribe(
            (data) => this.towers = data
          );
        }
      }
    );

    this.activatedRoute.params.subscribe(
      (params) => {
        let csaId = params['id'];
        console.log(csaId);
        if (csaId) {
          this.towerService.getTowerByCsaId(csaId).subscribe(
            (data) => this.towers = data
          );
        }
      }
    );

  }
}
