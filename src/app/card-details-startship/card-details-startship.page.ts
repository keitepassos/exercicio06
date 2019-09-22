import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-details-startship',
  templateUrl: './card-details-startship.page.html',
  styleUrls: ['./card-details-startship.page.scss'],
})
export class CardDetailsStartshipPage implements OnInit {
  
  starship = null;

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, public router: Router) { 
    this.starship =  this.activatedRoute.snapshot.paramMap.get('startship');
    let dataObj = JSON.parse(this.starship);
    this.starship = dataObj;
    console.log(this.starship);
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
  }v

  ngOnInit() {
  }

}
