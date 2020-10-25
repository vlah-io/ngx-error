@vlah.io/ngx-error

Set of reusable Angular components to help displaying errors.

### Usage (code example)

The directive.

```
    <div [vlahioErrorPage]="error" [content]="el" [height]="'100%'"></div>

    ...

    error: ErrorInterface;
    el: HTMLElement;
```

The component.
```
    <div [error]="error" [height]="height" [content]="content"></div>

    ...

    error: ErrorInterface;
    el: HTMLElement;
    height: string;
```

The service worker.
```
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
```

The CSS assets.
```
    @import "... ngx-error/src/assets/css/error-page.css";
```

For more details read [here](https://github.com/vlah-io/ngx-error/blob/master/INSTALLATION.md).
