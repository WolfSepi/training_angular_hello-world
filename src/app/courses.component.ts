import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <!-- <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <i class="bi-github" role="img" aria-label="GitHub"></i>
    <img src="{{ imageUrl }}" />
    <table>
      <tr>
        <td [attr.colSpan]="colSpan"></td>
      </tr>
    </table>
    <button class="btn btn-primary" [class.avtive]="isActive">Save</button
    ><br />
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button
    ><br />
    <div (click)="onClickDiv()">
      <button (click)="onSave($event)">Save</button>
    </div> -->
    <!-- <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> -->
    {{ text | summary: 10 }}
  `,
})
export class CoursesComponent {
  title = 'List of courses';
  courses: string[];
  imageUrl = 'https://loremflickr.com/400/260';
  colSpan: number;
  isActive = true;
  email = 'me@example.com';
  text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';

  constructor(service: CoursesService) {
    this.courses = service.getCrouses();
    this.colSpan = 2;
  }

  onSave($event) {
    $event.stopPropagation();
    console.log('Button click', $event);
  }

  onClickDiv() {
    console.log('Div click');
  }

  onKeyUp() {
    console.log(this.email);
  }
}
