import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-details-startship',
  templateUrl: './card-details-startship.page.html',
  styleUrls: ['./card-details-startship.page.scss'],
})
export class CardDetailsStartshipPage implements OnInit {
  
  startship = null;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.startship =  this.activatedRoute.snapshot.paramMap.get('startship');
    let dataObj = JSON.parse(this.startship);
    this.startship = dataObj;
    console.log(this.startship);
    console.log(typeof(dataObj));
  }

  ngOnInit() {
  }

}
