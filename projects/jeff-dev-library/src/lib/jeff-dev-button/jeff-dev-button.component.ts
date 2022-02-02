import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'jeff-dev-button',
  templateUrl: './jeff-dev-button.component.html',
  styleUrls: ['./jeff-dev-button.component.scss']
})
export class JeffDevButtonComponent implements OnInit {

  @Input() type: any ='button';
  @Input() color: any ='primary';
  @Input() label: any ='';
  @Input() icon: any;
  @Input() disabled = false;


  @Output() clickEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
