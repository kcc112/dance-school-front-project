import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  goFB(): void {
    window.location.href = 'https://www.facebook.com/';
  }
}
