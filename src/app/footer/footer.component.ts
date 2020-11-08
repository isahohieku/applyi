import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  whatsappNumber(phone) {
    window.location.href =
        `https://wa.me/+${phone}?text=Hello%20World`;
  }

  callPhone(phone) {
    window.open(`tel:+${phone}`);
  }

}
