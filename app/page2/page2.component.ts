import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CirclesService } from '../service/circles.service';
import { Tower } from '../model/tower';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  towers:Tower[];
  jaipurUrl:string;
  maduraiUrl:string;
  agraUrl:string;
  mysoreUrl:string;

  constructor( private activatedRoute: ActivatedRoute,
    private circleService: CirclesService
) {
  this.jaipurUrl="/assets/jaipur.png";
  this.maduraiUrl="/assets/meenakshi.jpg";
  this.agraUrl="/assets/taj01.png";
  this.mysoreUrl="/assets/mysore01.jpg";
}

  ngOnInit() {
  }


}