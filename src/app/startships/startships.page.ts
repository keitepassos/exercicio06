import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-startships',
  templateUrl: './startships.page.html',
  styleUrls: ['./startships.page.scss'],
})
export class StartshipsPage implements OnInit  {
  public url : string;
  public startships : Array<Object> = []  ;

  constructor(private http: HttpClient,public router: Router) { 
    this.url =  "https://swapi.co/api/starships/?format=json";
  }

  ngOnInit() {
    this.consultarStartshps(this.url);
  }

  getActorOBJ(obj:any)
  {
    let dataString = JSON.stringify(obj);
    this.router.navigate(['card-details-startship',dataString])
  }

  consultarStartshps(pUrl:string){
    let url : string = pUrl;
    console.log("Chamando "+url);
    this.http.get(url).subscribe(
      data => {
        const obj_json = (data as any);
        this.startships = obj_json;
        console.log(obj_json);
        console.log(this.startships);
      }, error => {
        console.log(error); 
      }
    );
  }


}
