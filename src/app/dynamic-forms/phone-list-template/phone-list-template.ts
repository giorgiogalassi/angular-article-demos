import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-phone-list-template',
  imports: [FormsModule],
  templateUrl: './phone-list-template.html',
  styleUrl: './phone-list-template.css',
})
export class PhoneListTemplate {
  phones: string[] = [''];

  add(): void {
    this.phones.push('');
  }

  remove(index: number): void {
    this.phones.splice(index, 1);
  }
}
