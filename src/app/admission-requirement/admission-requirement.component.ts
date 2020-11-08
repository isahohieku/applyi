import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admission-requirement',
  templateUrl: './admission-requirement.component.html',
  styleUrls: ['./admission-requirement.component.scss']
})
export class AdmissionRequirementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  callPhone(phone) {
    window.open(`tel:+${phone}`);
  }

}
