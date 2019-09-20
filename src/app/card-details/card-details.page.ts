import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  actor = null;

  constructor(private activatedRoute: ActivatedRoute) { 
    this.actor =  this.activatedRoute.snapshot.paramMap.get('actor');
    let dataObj = JSON.parse(this.actor);
    console.log(this.actor);
    console.log(typeof(dataObj));
  }

  ngOnInit() {
  }

}
