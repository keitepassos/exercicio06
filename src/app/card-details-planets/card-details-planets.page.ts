import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details-planets',
  templateUrl: './card-details-planets.page.html',
  styleUrls: ['./card-details-planets.page.scss'],
})
export class CardDetailsPlanetsPage implements OnInit {

 
  p = null;

  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient, public router: Router) { 
    this.p =  this.activatedRoute.snapshot.paramMap.get('p');
    let dataObj = JSON.parse(this.p);
    this.p = dataObj;
    console.log(this.p);
    console.log(typeof(dataObj));
  }

  getSingleUrlData(url:string,card:string){ 
    this.http.get(url).subscribe(
      data => {
        this.router.navigate([card,this.getJsonStringify(data)])
      }, error => {
        console.log(error)
      }
    );

  }

  getJsonStringify(obj:any){
    return JSON.stringify(obj);
  }

  ngOnInit() {
  }

}
