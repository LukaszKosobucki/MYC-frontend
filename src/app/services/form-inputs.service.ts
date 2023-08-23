import { Injectable } from '@angular/core';
import {
  FORMGROUPSLOGINPAGE,
  FORMINPUTOBJECT,
  FormInput,
  FormName,
} from '../utils/form-inputs';

@Injectable({
  providedIn: 'root',
})
export class FormInputsService {
  getFormInputs(name: FormName): FormInput[] {
    return FORMINPUTOBJECT[name];
  }
  getFormControl(name: FormName) {
    return FORMGROUPSLOGINPAGE[name];
  }
}
