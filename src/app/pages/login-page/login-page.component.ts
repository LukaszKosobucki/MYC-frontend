import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

const pageStates = ['login', 'register', 'forgotPassword'] as const;
export type PageState = (typeof pageStates)[number];
export type PageStates = {
  state: PageState;
};

@Component({
  selector: 'myc-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  pageState$ = new BehaviorSubject<PageStates>({
    state: 'login',
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.pageState$.next({
        state: params['state'] ?? 'login',
      });
    });
  }
}
