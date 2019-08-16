import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app";

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // tslint:disable-next-line: no-console
  .catch((err) => console.error(err));
