import {Component, ComponentRef} from '@angular/core';
import {ErrorPageComponent} from '../../../ngx-error/src/lib/component/error-page.component';
import {FactoryWorker} from '@vlah.io/ngx-worker';
import {ErrorPageWorker} from '../../../ngx-error/src/lib/service/error-page.worker';
import {RemoveComponent} from './remove.component';
import {ErrorInterface} from '../../../ngx-error/src/lib/interface/ngx-error.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pageErrorCompRef: ComponentRef<ErrorPageComponent> | undefined;
  public removeCompRef: ComponentRef<RemoveComponent> | undefined;
  error404: ErrorInterface = {
    statusCode: 404,
    message: 'Some 404 error message'
  };
  error400: ErrorInterface = {
    statusCode: 400,
    message: 'Some 400 error message'
  };

  constructor(private errorPageWorker: ErrorPageWorker,
              private factoryWorker: FactoryWorker
  ) {
  }

  showPageError(error: ErrorInterface): void {
    if (this.pageErrorCompRef) {
      this.errorPageWorker.destroy(this.pageErrorCompRef);
    }
    const removeCompRef = this.factoryWorker.make(RemoveComponent);
    removeCompRef.instance.remove.subscribe(
      () => {
        this.removePageError();
      }
    );
    this.pageErrorCompRef = this.errorPageWorker.render(
      error,
      {
        height: '100%',
        content: removeCompRef.location.nativeElement
      }
    );
  }

  removePageError(): void {
    if (this.pageErrorCompRef) {
      this.errorPageWorker.destroy(this.pageErrorCompRef);
      delete this.pageErrorCompRef;
    }

    if (this.removeCompRef) {
      this.factoryWorker.destroy(this.removeCompRef);
    }
  }
}
