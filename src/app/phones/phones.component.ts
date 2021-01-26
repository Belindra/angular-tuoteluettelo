import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {
  filterTerm: string;
  arrPhones = [];
  sorts: string[] = ["Newest", "Alphabetical"]
  selectedSort: string = '';

  constructor(private httpService: HttpClient) { 
    this.httpService.get('/data/phones.json').toPromise().then(data => {

      for (let key in data) 
        if (data.hasOwnProperty(key))
          this.arrPhones.push(data[key]);
    });
  }

  ngOnInit(): void {
  }
  
  selectChangeHandler(event: any) {
    this.selectedSort = event.target.value;

     if (this.selectedSort == "Alphabetical") {
       this.arrPhones.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
     }
     if (this.selectedSort == "Newest") {
       this.arrPhones.sort((a, b) => a.age - b.age)
     }
  }
}

