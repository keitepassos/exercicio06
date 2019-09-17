import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {
  result:string;
  constructor(private http:HTTP) { }


  consultaPlanets(planet:string){
    let url:string ="https://swapi.co/api/people/?format=json";
    console.log(url)
    this.http.get(url,{},{})
    .then(data=>{this.result = data.data
    }).catch(error=>{
      console.log(error.status)
      console.log(error.error)
      console.log(error.headers)
    })
  }


  ngOnInit() {
  }

}
