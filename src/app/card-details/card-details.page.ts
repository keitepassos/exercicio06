import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  actor = null;

  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient, public router: Router) { 
    this.actor =  this.activatedRoute.snapshot.paramMap.get('actor');
    let dataObj = JSON.parse(this.actor);
    this.actor = dataObj;
    console.log(this.actor);
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
