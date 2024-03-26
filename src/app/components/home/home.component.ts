
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  countries: any[] = [];
  constructor(private http: HttpClient) {
    // getLanguage() {
    this.http
      .get('https://restcountries.com/v3.1/lang/spanish')
      .subscribe((countries: any) => {
        this.countries = countries;
        console.log(countries);
      });

  // }

  }
  ngOnInit() {

   }



}
