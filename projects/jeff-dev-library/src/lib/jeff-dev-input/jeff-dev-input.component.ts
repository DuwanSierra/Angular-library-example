import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { JeffDevUtils } from '../utils/jeff-dev-utils';

@Component({
  selector: 'jeff-dev-input',
  templateUrl: './jeff-dev-input.component.html',
  styleUrls: ['./jeff-dev-input.component.scss']
})
export class JeffDevInputComponent implements OnInit {

  @Input()
  public disabled = false;
  @Input()
  public helpText: any;
  @Input()
  public label: any;
  @Input()
  public value: any = '';
  @Input()
  public placeholder: any = '';

  @Input()
  public rigthIcon: any;
  @Input()
  public leftIcon: any;
  @Output()
  public rigthIconClick = new EventEmitter<any>();
  @Output()
  public leftIconClick = new EventEmitter<any>();

  @Input()
  public type: any = 'text';

  public myId = JeffDevUtils.getUniqueId();
  constructor() { }

  ngOnInit(): void {
  }

  sendIconClick() {
    if (this.rigthIcon) {
      this.rigthIconClick.emit();
    }
    else {
      this.leftIconClick.emit();
    }
  }

}
