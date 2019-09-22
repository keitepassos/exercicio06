import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details-planets',
  templateUrl: './card-details-planets.page.html',
  styleUrls: ['./card-details-planets.page.scss'],
})
export class CardDetailsPlanetsPage implements OnInit {

 
  p = null;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.p =  this.activatedRoute.snapshot.paramMap.get('p');
    let dataObj = JSON.parse(this.p);
    this.p = dataObj;
    console.log(this.p);
    console.log(typeof(dataObj));
  }


  ngOnInit() {
  }

}
