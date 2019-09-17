import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  json : string;
  persons : string;
  constructor(private http : HTTP) { 
    this.consultarPeople();
  }

  consultarPeople(){
    let url : string = "https://swapi.co/api/people/?format=json"
    console.log("Chamando "+url)
    this.http.get(url,{},{})
      .then(data => {
        this.json = data.data;
      })
      .catch(error => {
        console.log(error.status);
        console.log(error.error);
        console.log(error.headers);
      });   
  }

  ngOnInit() {
  }

}
