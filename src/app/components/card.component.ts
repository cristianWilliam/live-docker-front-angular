import { DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [DatePipe],
  template: `
    <h3>
      {{ content() }}
    </h3>
    <span>
      {{ date() | date : 'yyyy-mm-dd HH:MM' }}
    </span>
  `,
  styleUrl: 'card.component.scss',
})
export class CardComponent {
  content = input.required<string>();
  date = input.required<Date>();
}
