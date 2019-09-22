import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  
  public planetas : Array<Object> = []  ;
  public url : string;

  constructor(private http: HttpClient, private httpModule : HttpClientModule, public router: Router) { 
     this.url =  "https://swapi.co/api/planets/?format=json";
  }


  consultaPlanets(pUrl:string){
    let url : string = pUrl;
    console.log("Chamando "+url);
    this.http.get(url).subscribe(
      data => {
        const obj_json = (data as any);
        this.planetas = obj_json;
        console.log(obj_json);
        console.log(this.planetas);
      }, error => {
        console.log(error); 
      }
    );
  }


  detalhesPlanets(url:string){
    console.log("Chamando "+url)
    this.http.get(url).subscribe(
      data => {
        const obj_json = (data as any)
        this.planetas = obj_json
        console.log(obj_json)
        console.log(this.planetas)
      }, error => {
        console.log(error)
      }
    );
  }

  getPlanetOBJ(obj:any){

    let dataString = JSON.stringify(obj);
    this.router.navigate(['card-details-planets',dataString])
  }

  ngOnInit() {
    this.consultaPlanets(this.url);
  }

}
