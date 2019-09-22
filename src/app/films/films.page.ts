import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

 
  public films : Array<Object> = []  ;
  public url : string;

  constructor(private http: HttpClient, private httpModule : HttpClientModule, public router: Router) { 
     this.url =  "https://swapi.co/api/films/?format=json";
  }


  consultaFilms(pUrl:string){
    let url : string = pUrl;
    console.log("Chamando "+url);
    this.http.get(url).subscribe(
      data => {
        const obj_json = (data as any);
        this.films = obj_json;
        console.log(obj_json);
        console.log(this.films);
      }, error => {
        console.log(error); 
      }
    );
  }


  detalhesFilms(url:string){
    console.log("Chamando "+url)
    this.http.get(url).subscribe(
      data => {
        const obj_json = (data as any)
        this.films = obj_json
        console.log(obj_json)
        console.log(this.films)
      }, error => {
        console.log(error)
      }
    );
  }

  getFilmsOBJ(obj:any){

    let dataString = JSON.stringify(obj);
    this.router.navigate(['card-details-films',dataString])
  }

  ngOnInit() {
    this.consultaFilms(this.url);
  }


}
