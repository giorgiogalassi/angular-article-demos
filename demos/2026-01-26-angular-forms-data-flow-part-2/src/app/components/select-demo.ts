import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-select-demo',
  imports: [FormField],
  template: `
    <label>
      Role
      <select [formField]="roleForm.role">
        @for (r of roles; track r) {
          <option [value]="r">{{ r }}</option>
        }
      </select>
    </label>
    <p>Selected: {{ roleForm.role().value() }}</p>
  `,
})
export class SelectDemoComponent {
  roles = ['Viewer', 'Editor', 'Admin'];
  model = signal({ role: 'Viewer' });
  roleForm = form(this.model);
}
