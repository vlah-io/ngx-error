import {Component, Input} from '@angular/core';
import {ErrorInterface} from '../interface/ngx-error.interface';

@Component({
  selector: 'vlahio-error-page',
  template: `
    <div [vlahioErrorPage]="error" [height]="height" [content]="content"></div>`
})
export class ErrorPageComponent {
  @Input() error: ErrorInterface | undefined;
  @Input() height: string | undefined;
  @Input() content: HTMLElement | undefined;
}
