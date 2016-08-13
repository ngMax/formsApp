import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { disableDeprecatedForms, provideForms } from "@angular/forms"; // Add this Import
if (environment.production) {
  enableProdMode();
}
bootstrap(AppComponent, [
        disableDeprecatedForms(),
        provideForms()
    ]);
