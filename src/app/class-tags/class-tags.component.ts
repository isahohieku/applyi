import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-tags',
  templateUrl: './class-tags.component.html',
  styleUrls: ['./class-tags.component.scss']
})
export class ClassTagsComponent implements OnInit {

  @Input() studentClass: string;

  constructor() { }

  ngOnInit() {
  }

}
