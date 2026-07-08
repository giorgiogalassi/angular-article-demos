import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Each entry needs a stable identity independent of its array position. Tracking (and
// naming) ngModel inputs by `$index` causes NgModel's directive-local state (touched/
// dirty) to stay attached to the DOM position instead of following the value when an
// earlier entry is removed and later entries shift down (verified via a real click-driven
// interaction: touch entry 1, remove entry 0, and the "required" error incorrectly
// disappears instead of following the still-invalid value down to position 0). A
// monotonically increasing id keyed per entry, tracked by that id, gives each ngModel a
// stable identity that moves with its value, matching how a reactive FormArray keeps
// state on the control instance itself.
interface PhoneEntry {
  id: number;
  value: string;
}

@Component({
  selector: 'app-phone-list-template',
  imports: [FormsModule],
  templateUrl: './phone-list-template.html',
  styleUrl: './phone-list-template.css',
})
export class PhoneListTemplate {
  private nextId = 0;

  phones: PhoneEntry[] = [this.createEntry()];

  add(): void {
    this.phones.push(this.createEntry());
  }

  remove(index: number): void {
    this.phones.splice(index, 1);
  }

  private createEntry(): PhoneEntry {
    return { id: this.nextId++, value: '' };
  }
}
