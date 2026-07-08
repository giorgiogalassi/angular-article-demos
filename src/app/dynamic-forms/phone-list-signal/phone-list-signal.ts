import { Component, signal } from '@angular/core';
import { applyEach, form, FormField, required } from '@angular/forms/signals';

interface PhoneListModel {
  phones: string[];
}

@Component({
  selector: 'app-phone-list-signal',
  imports: [FormField],
  templateUrl: './phone-list-signal.html',
  styleUrl: './phone-list-signal.css',
})
export class PhoneListSignal {
  model = signal<PhoneListModel>({ phones: [''] });

  f = form(this.model, (path) => {
    applyEach(path.phones, (phone) => {
      required(phone);
    });
  });

  add(): void {
    this.model.update((m) => ({ ...m, phones: [...m.phones, ''] }));
  }

  remove(index: number): void {
    this.model.update((m) => ({
      ...m,
      phones: m.phones.filter((_, i) => i !== index),
    }));
  }
}
