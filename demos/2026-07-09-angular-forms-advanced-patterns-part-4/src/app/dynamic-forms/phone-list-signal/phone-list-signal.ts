import { Component, signal } from '@angular/core';
import { applyEach, form, FormField, required } from '@angular/forms/signals';

interface PhoneListModel {
  phones: string[];
}

// Known capability gap vs the reactive variant's FormArray (verified empirically, not just
// theorized): touched/dirty state here is keyed to the *position* in `path.phones`, not to
// the value. If you touch entry N and then remove an earlier entry, the remaining entries
// shift down but their touched/dirty flags stay attached to their old positions, so the
// touched state ends up on the wrong entry. FormArray does not have this problem because
// each control instance (and its state) is a distinct object that moves with the value on
// `removeAt`. This is inherent to signal-forms' current field-tree-over-plain-array model
// (there is no per-item stable identity mechanism analogous to FormArray's control
// instances), not a bug introduced in this file - preserved here as a documented, genuine
// divergence between the reactive and signal-based dynamic-list patterns.

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
