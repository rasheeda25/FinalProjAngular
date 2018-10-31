import { Component, OnInit } from '@angular/core';
import { Tower } from '../model/tower';
import { ActivatedRoute } from '@angular/router';
import { CirclesService } from '../service/circles.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  towers:Tower[];
  logoUrl:string;
  mumbaiUrl:string;
  delhiUrl:string;
  hyderabadUrl:string;
  bangaloreUrl:string;
  jaipurUrl:string;

  constructor( private activatedRoute: ActivatedRoute,
               private circleService: CirclesService
    ) {
      this.logoUrl="/assets/chennai01.png";
      this.mumbaiUrl="/assets/gateway.jpg";
      this.delhiUrl="/assets/qutub.jpg";
      this.hyderabadUrl="/assets/hyderabad01.png";
      this.bangaloreUrl="/assets/bangalore01.jpg";
      this.jaipurUrl="/assets/jaipur.png";
     }

  ngOnInit() {
  }

}
