import { Component, Input } from '@angular/core';
import { PageState } from 'src/app/pages/login-page/login-page.component';

@Component({
  selector: 'myc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonType!: 'button' | 'submit';
}
