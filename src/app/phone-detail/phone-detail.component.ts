import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Phone } from '../phone/item-data';
import { PhoneService } from '../phone/phone.service';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css'],
  providers: [PhoneService]
})
export class PhoneDetailComponent implements OnInit {
@Input() phone:Phone;
  constructor(
        private route: ActivatedRoute,
        private phoneService: PhoneService,
        private location: Location
  ){}

  ngOnInit() {
          this.getPhone();
  }
  getPhone(): void{
          const id = +this.route.snapshot.paramMap.get('id');
          console.log(id);
          this.phoneService.getPhone(id)
              .subscribe(phone => this.phone =phone);
  }
  goBack(): void {
    this.location.back();
  }
}
