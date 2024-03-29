import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  public actors : Array<Object> = []  ;
  public actore : Array<Object> = []  ;
  public url : string;

  constructor(private http: HttpClient, private httpModule : HttpClientModule, public router: Router) { 
    //this.consultarPeople();
    this.url = "https://swapi.co/api/people/?format=json";
  }

  consultarPeople(pUrl:string){
    let url : string = pUrl;
    console.log("Chamando "+url);
    this.http.get(url).subscribe(
      data => {
        const obj_json = (data as any);
        this.actors = obj_json;
        console.log(obj_json);
        console.log(this.actors);
      }, error => {
        console.log(error); 
      }
    );
  }

  detalhesPeople(url:string){
    //let url : string = "https://swapi.co/api/people/?format=json";
    console.log("Chamando "+url)
    this.http.get(url).subscribe(
      data => {
        const obj_json = (data as any)
        this.actore = obj_json
        console.log(obj_json)
        console.log(this.actore)
      }, error => {
        console.log(error)
      }
    );
  }

  getActorOBJ(obj:any) {
    this.router.navigate(['card-details',this.getJsonStringify(obj)])
  }

  ngOnInit() {
    this.consultarPeople(this.url);
  }

  getJsonStringify(obj:any){
    return JSON.stringify(obj);
  }

}
