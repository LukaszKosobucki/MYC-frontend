import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInput, formNames } from 'src/app/utils/form-inputs';
import { FormInputsService } from 'src/app/services/form-inputs.service';
import { Router } from '@angular/router';
import {
  PageState,
  PageStates,
} from 'src/app/pages/login-page/login-page.component';

export type LoginForm = {
  [key: string]: FormControl<string>;
};

@Component({
  selector: 'myc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit, OnChanges {
  @Input() pageState!: PageStates | null;
  formInputList: FormInput[] = [];
  loginForm: any;
  submitButton: string = 'login';

  submitStrings = {
    login: 'Login',
    register: 'Register',
    forgotPassword: 'Forgot Password',
  };

  constructor(
    private formInputsService: FormInputsService,
    private router: Router
  ) {}

  returnPageState() {
    return this.pageState !== null && formNames.includes(this.pageState.state)
      ? this.pageState.state
      : 'login';
  }

  ngOnInit() {
    this.formInputList = this.formInputsService.getFormInputs(
      this.returnPageState()
    );
    this.loginForm = this.formInputsService.getFormControl(
      this.returnPageState()
    );
  }
  ngOnChanges() {
    this.formInputList = this.formInputsService.getFormInputs(
      this.returnPageState()
    );
    this.loginForm = this.formInputsService.getFormControl(
      this.returnPageState()
    );
    this.submitButton = this.submitStrings[this.returnPageState()];
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    this.loginForm.valid && this.router.navigate(['/homepage']);
  }

  formSubmitFunctions = {
    login: () => {
      console.warn(this.loginForm.value);
      this.loginForm.valid && this.router.navigate(['/homepage']);
    },
    register: () => {
      console.warn(this.loginForm.value);
      this.loginForm.valid &&
        this.router.navigate(['/login'], {
          queryParams: { state: 'login' },
          queryParamsHandling: 'merge',
        });
    },
    forgotPassword: () => {
      console.warn(this.loginForm.value);
      this.loginForm.valid &&
        this.router.navigate(['/login'], {
          queryParams: { state: 'login' },
          queryParamsHandling: 'merge',
        });
    },
  };

  onButtonClick(state: PageState): void {
    this.router.navigate(['login'], {
      queryParams: { state: state },
      queryParamsHandling: 'merge',
    });
  }
}
