import { Routes } from '@angular/router';
import { Home } from './home/home';
import { RegistrationTemplate as BaselineTemplate } from './baseline/registration-template/registration-template';
import { RegistrationReactive as BaselineReactive } from './baseline/registration-reactive/registration-reactive';
import { RegistrationSignal as BaselineSignal } from './baseline/registration-signal/registration-signal';
import { PhoneListTemplate } from './dynamic-forms/phone-list-template/phone-list-template';
import { PhoneListReactive } from './dynamic-forms/phone-list-reactive/phone-list-reactive';
import { PhoneListSignal } from './dynamic-forms/phone-list-signal/phone-list-signal';
import { RegistrationTemplate as AsyncTemplate } from './async-validation/registration-template/registration-template';
import { RegistrationReactive as AsyncReactive } from './async-validation/registration-reactive/registration-reactive';
import { RegistrationSignal as AsyncSignal } from './async-validation/registration-signal/registration-signal';
import { RegistrationCva } from './custom-controls/registration-cva/registration-cva';
import { RegistrationSignal as CustomControlSignal } from './custom-controls/registration-signal/registration-signal';

export const routes: Routes = [
  { path: '', component: Home, title: 'Angular Forms — Advanced Patterns' },

  { path: 'baseline/template-driven', component: BaselineTemplate, title: 'Baseline — Template-driven' },
  { path: 'baseline/reactive', component: BaselineReactive, title: 'Baseline — Reactive' },
  { path: 'baseline/signal-forms', component: BaselineSignal, title: 'Baseline — Signal Forms' },

  { path: 'dynamic-forms/template-driven', component: PhoneListTemplate, title: 'Dynamic Forms — Template-driven' },
  { path: 'dynamic-forms/reactive', component: PhoneListReactive, title: 'Dynamic Forms — Reactive' },
  { path: 'dynamic-forms/signal-forms', component: PhoneListSignal, title: 'Dynamic Forms — Signal Forms' },

  { path: 'async-validation/template-driven', component: AsyncTemplate, title: 'Async Validation — Template-driven' },
  { path: 'async-validation/reactive', component: AsyncReactive, title: 'Async Validation — Reactive' },
  { path: 'async-validation/signal-forms', component: AsyncSignal, title: 'Async Validation — Signal Forms' },

  { path: 'custom-controls/cva', component: RegistrationCva, title: 'Custom Controls — CVA + Validator' },
  { path: 'custom-controls/signal-forms', component: CustomControlSignal, title: 'Custom Controls — FormValueControl' },

  { path: '**', redirectTo: '' },
];
