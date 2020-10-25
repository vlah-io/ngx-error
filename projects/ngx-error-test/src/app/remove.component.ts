import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-remove',
  template: `
    <span (click)="retry$()" class="btn btn-dark">Remove</span>
  `
})
export class RemoveComponent {
  @Output() remove: EventEmitter<true> = new EventEmitter<true>();

  retry$(): void {
    this.remove.emit(true);
  }
}
