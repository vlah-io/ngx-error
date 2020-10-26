import {ComponentRef, EventEmitter, Injectable} from '@angular/core';
import {ErrorPageComponent} from '../component/error-page.component';
import {DisplayOptionsInterface, ErrorInterface} from '../interface/ngx-error.interface';
import {FactoryWorker} from '@vlah.io/ngx-worker';

@Injectable({
  providedIn: 'root'
})
export class ErrorPageWorker {
  constructor(private factoryWorker: FactoryWorker) {
  }

  get error$(): EventEmitter<DOMException> {
    return this.factoryWorker.error$;
  }

  render(error: ErrorInterface, options: DisplayOptionsInterface = {}): ComponentRef<ErrorPageComponent> {
    const {height, content, container} = options;

    const compRef = this.factoryWorker.make(ErrorPageComponent);
    const compRefInstance = compRef.instance as ErrorPageComponent;

    compRefInstance.content = content;
    compRefInstance.height = height;
    compRefInstance.error = error;

    this.factoryWorker.glue(compRef, {container});

    return compRef;
  }

  destroy(compRef: ComponentRef<ErrorPageComponent>): void {
    this.factoryWorker.destroy(compRef);
  }
}
