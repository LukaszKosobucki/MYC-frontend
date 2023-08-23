import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from '../components/login-form/login-form.component';

export type FormInput = {
  text: string;
  id: string;
  type: 'text' | 'number' | 'date' | 'password';
};

export const formNames = ['login', 'forgotPassword', 'register'] as const;
export type FormName = (typeof formNames)[number];
export type FormNamesType = {
  [key in FormName]: FormInput[];
};

export const FORMINPUTOBJECT: FormNamesType = {
  login: [
    {
      text: 'E-mail',
      id: 'email',
      type: 'text',
    },
    {
      text: 'Password',
      id: 'password',
      type: 'password',
    },
  ],
  forgotPassword: [
    {
      text: 'E-mail',
      id: 'email',
      type: 'text',
    },
  ],
  register: [
    {
      text: 'E-mail',
      id: 'email',
      type: 'text',
    },
    {
      text: 'Password',
      id: 'password',
      type: 'password',
    },
    {
      text: 'Name',
      id: 'name',
      type: 'text',
    },
    {
      text: 'Surname',
      id: 'surname',
      type: 'text',
    },
  ],
};

export const FORMGROUPSLOGINPAGE = {
  login: new FormGroup<LoginForm>({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ],
    }),
  }),
  register: new FormGroup<LoginForm>({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ],
    }),
    name: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.min(4), Validators.max(30)],
    }),
    surname: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.min(4), Validators.max(30)],
    }),
  }),
  forgotPassword: new FormGroup<LoginForm>({
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
  }),
};
