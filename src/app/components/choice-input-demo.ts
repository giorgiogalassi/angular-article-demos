import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField } from '@angular/forms/signals';

type PrefsModel = {
  acceptTerms: boolean;
  contactMethod: 'email' | 'sms';
};
@Component({
  selector: 'app-choice-inputs-demo',
  imports: [FormsModule, FormField],
  template: `
    <h4>Template-driven</h4>
    <label>
      <input type="checkbox" [(ngModel)]="acceptTerms" name="terms" />
      Accept terms
    </label>

    <h4>Signals (experimental)</h4>
    <label>
      <input type="checkbox" [formField]="prefsForm.acceptTerms" />
      Accept terms
    </label>
    <div>
      <p>Preferred contact</p>
      <label>
        <input type="radio" value="email" [formField]="prefsForm.contactMethod" />
        Email
      </label>
      <label>
        <input type="radio" value="sms" [formField]="prefsForm.contactMethod" />
        SMS
      </label>
    </div>
    <pre>{{ debug() }}</pre>
  `,
})
export class ChoiceInputsDemoComponent {
  // Template-driven
  acceptTerms = false;

  // Signals
  prefs = signal<PrefsModel>({ acceptTerms: false, contactMethod: 'email' });
  prefsForm = form(this.prefs);

  debug(): string {
    return JSON.stringify(
      {
        templateDriven: { acceptTerms: this.acceptTerms },
        signals: this.prefs(),
      },
      null,
      2
    );
  }
}
