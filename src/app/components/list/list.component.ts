import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewChild, ElementRef} from '@angular/core';
import template from './list.component.html';
import styles from './list.component.css';

@Component({
  selector: 'app-list',
  template,
  styles: [styles]
})
export class ListComponent {
  @Input() list: string[];
  @Output() outRemoveItem: EventEmitter<number> = new EventEmitter();
  @Output() outCreateItem: EventEmitter<string> = new EventEmitter();
  @Output() outRemoveAllItems: EventEmitter<never> = new EventEmitter();
  @ViewChild('createInput') createInput: ElementRef;
  
  removeItem(index: number) {
    this.outRemoveItem.emit(index);
  }
  
  removeAllItems() {
    this.outRemoveAllItems.emit();
  }
  
  createItem() {
    this.outCreateItem.emit(this.createInput.nativeElement.value);
    this.createInput.nativeElement.value = '';
  }
}