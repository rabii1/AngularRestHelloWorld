import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'XXXXXX';
  results = '';
   list = {} ;

  constructor(private http: HttpClient) {
   console.log('constructeur intialisation home');
     }

  ngOnInit(): void {
    console.log('on init home');
    this.http.get('http://localhost:8080/e-SAAD_urgence_Services_Aide_Accompagnement_sanitaire_social'
    + '_urgence_intervention_domicile/rest/personnews/searchperson/1/1/1/1').subscribe(data => {
     console.log('data datada');
     console.log(data);
          this.list = data.personnes;

     console.log(Object.keys(this.list).length);


     });

     }

}
