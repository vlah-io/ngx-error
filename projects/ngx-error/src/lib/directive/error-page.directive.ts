import {Directive, ElementRef, Input, Renderer2} from '@angular/core';
import {ErrorInterface} from '../interface/ngx-error.interface';
import {RendererWorker} from '@vlah.io/ngx-worker';

@Directive({
  selector: '[vlahioErrorPage]'
})
export class ErrorPageDirective {
  readonly divL1: HTMLElement;
  readonly divL2: HTMLElement;
  readonly divL3: HTMLElement;
  readonly divL4: HTMLElement;
  private content: any;

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private rendererWorker: RendererWorker) {
    this.divL1 = this.rendererWorker.createElement('div', 'vlahio-error-page-code');
    this.divL2 = this.rendererWorker.createElement('div', 'vlahio-error-page-container');
    this.renderer.appendChild(this.divL2, this.divL1);
    this.divL3 = this.rendererWorker.createElement('div', 'vlahio-error-page-col');
    this.renderer.appendChild(this.divL3, this.divL2);
    this.divL4 = this.rendererWorker.createElement('div', 'vlahio-error-page');
    this.renderer.appendChild(this.divL4, this.divL3);
  }

  @Input('height')
  set _height(str: string) {
    if (str) {
      this.renderer.setStyle(this.divL4, 'height', str);
    }
  }

  @Input('content')
  set _content(el: HTMLElement) {
    if (this.content) {
      this.removeChildNodes(this.divL3, {childNode: this.content});
    }
    if (el) {
      this.content = el;
      this.renderer.appendChild(
        this.divL3,
        el
      );
    }
  }

  @Input('vlahioErrorPage')
  set _error(error: ErrorInterface | undefined) {
    if (error) {
      this.render(error);
    } else {
      this.rendererWorker.removeChildNodes(this.elRef.nativeElement);
    }
  }

  render(error: ErrorInterface): void {
    this.rendererWorker.removeChildNodes(this.divL1, {index: 0, nodeName: 'h1'});
    const h1 = this.rendererWorker.createElement('h1');
    this.renderer.appendChild(
      h1,
      this.renderer.createText(error.statusCode.toString())
    );
    this.renderer.appendChild(this.divL1, h1);

    if (error.message) {
      this.rendererWorker.removeChildNodes(this.divL3, {index: 1, nodeName: 'h2'});
      const h2 = this.rendererWorker.createElement('h2');
      this.renderer.appendChild(
        h2,
        this.renderer.createText(error.message)
      );
      this.renderer.appendChild(this.divL3, h2);
    }

    this.renderer.appendChild(this.elRef.nativeElement, this.divL4);
  }

  removeChildNodes(parent: HTMLElement, options: any = {}): void {
    const {index, nodeName, childNode} = options;

    if (childNode) {
      this.renderer.removeChild(parent, childNode);
    } else if (Object.prototype.toString.call(index) === '[object Number]') {
      if (index >= parent.childNodes.length) {
        return;
      }

      const node = parent.childNodes[index];
      if (nodeName && node.nodeName.toLowerCase() !== nodeName.toLowerCase()) {
        return;
      }

      this.renderer.removeChild(parent, node);
    } else {
      [].slice
        .call(parent.childNodes)
        .filter(
          (node: ChildNode) => {
            return !(nodeName && node.nodeName.toLowerCase() !== nodeName.toLowerCase());
          }
        )
        .reverse()
        .forEach(
          (node: ChildNode) => {
            this.renderer.removeChild(parent, node);
          }
        );
    }
  }
}
