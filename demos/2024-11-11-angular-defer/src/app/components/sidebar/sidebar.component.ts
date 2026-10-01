import { NgStyle } from '@angular/common';
import { Component, model, OnInit } from '@angular/core';

import UserComponent from '../user/user.component';

@Component({
  imports: [NgStyle, UserComponent],
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
    <section
      [class.close]="status()"
      [ngStyle]="{
        'box-shadow': status() ? 'none' : '1px 0px 30px 0px #eeeeeeff',
      }"
    >
      <ul>
        <li (click)="close()">
          <span class="material-symbols-outlined">home</span>
          <p>Home</p>
        </li>
        <li (click)="close()">
          <span class="material-symbols-outlined">more</span>
          <p>About</p>
        </li>
        <li (click)="close()">
          <span class="material-symbols-outlined">settings</span>
          <p>Settings</p>
        </li>
        <li (click)="close()">
          <span class="material-symbols-outlined">logout</span>
          <p>Log out</p>
        </li>
      </ul>

      @defer (on viewport) {
        <app-user
          [user]="{
            name: 'Giorgio',
            surname: 'Galassi',
            workTitle: 'Senior Frotnend Engenieer',
            companyName: 'Onpier',
          }"
        />
      } @placeholder (minimum 2s) {
        <p>Loading...</p>
      }
    </section>
  `,
})
export default class SidebarComponent implements OnInit {
  status = model<boolean>(true);

  ngOnInit(): void {
    if (this.status()) setTimeout(() => this.status.set(false), 200);
  }

  close() {
    this.status.set(true);
  }
}
