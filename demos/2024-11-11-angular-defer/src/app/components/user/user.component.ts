import { Component, computed, input } from '@angular/core';

export type User = {
  name: string;
  surname: string;
  workTitle: string;
  companyName: string;
};

@Component({
  standalone: true,
  selector: 'app-user',
  template: `
    <strong>{{ nameAndSurname() }}</strong>
    <p>{{ workTitleAndCompanyName() }}</p>
  `,
})
export default class UserComponent {
  user = input.required<User>();
  nameAndSurname = computed(() => `${this.user().name} ${this.user().surname}`);
  workTitleAndCompanyName = computed(() => `${this.user().workTitle} @ ${this.user().companyName}`);
}
