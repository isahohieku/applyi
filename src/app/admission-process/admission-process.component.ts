import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-process',
  templateUrl: './admission-process.component.html',
  styleUrls: ['./admission-process.component.scss']
})
export class AdmissionProcessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  callPhone(phone) {
    window.open(`tel:+${phone}`);
  }

}
