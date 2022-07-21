import { Component } from '@angular/core';


import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})

export class CountryListComponent { 
  data:any = [];
  constructor(private http: HttpClient) {   
  }
 
  getData(){
    const url ='https://api.worldbank.org/v2/countries?per_page=304&format=json';
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }
}