import { Component, OnInit } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-details-films',
  templateUrl: './card-details-films.page.html',
  styleUrls: ['./card-details-films.page.scss'],
})
export class CardDetailsFilmsPage implements OnInit {

 
  film = null;

  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient, public router: Router) { 
    this.film =  this.activatedRoute.snapshot.paramMap.get('film');
    let dataObj = JSON.parse(this.film);
    this.film = dataObj;
    console.log(this.film);
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
