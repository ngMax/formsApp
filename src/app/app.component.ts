import { Component } from '@angular/core';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DataDrivenComponent } from './data-driven/data-driven.component';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'forms.component.html',
  directives:[TemplateDrivenComponent, DataDrivenComponent]
})
export class AppComponent {
  title = 'app works!';
}
