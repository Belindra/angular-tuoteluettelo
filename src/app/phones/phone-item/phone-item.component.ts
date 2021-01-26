import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.css']
})
export class PhoneItemComponent implements OnInit {
  phoneItem: any = '';
  phoneDetails = [];
  phoneId: string;
  selectedPhone = [];

  constructor(private httpService: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getPhone();
  }

  getPhone() {
    this.phoneId = String(this.route.snapshot.params['id']);

    this.route.params.subscribe((params) => {
      this.phoneId = params['id'];
    });

    this.httpService.get('data/'+this.phoneId+'.json').subscribe(data => {
      this.phoneItem = data;
    })
  }

}
