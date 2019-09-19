import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  
  public planetas : Array<Object> = []  ;

  constructor(private http: HttpClient, private httpModule : HttpClientModule) { 
    //this.consultarPeople();
  }


  consultaPlanets(planet:string){
    let url : string = "https://swapi.co/api/planets/?format=json";
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


  ngOnInit() {
    this.consultaPlanets('');
  }

}
