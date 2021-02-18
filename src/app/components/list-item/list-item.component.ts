import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import template from './list-item.component.html';
import styles from './list-item.component.css';

@Component({
  selector: 'app-list-item',
  template,
  styles: [styles]
})
export class ListItemComponent {
  @Input() item: any;
  @Output() outRemove: EventEmitter<any> = new EventEmitter<any>();
  
  remove() {
    this.outRemove.emit();
  }
}