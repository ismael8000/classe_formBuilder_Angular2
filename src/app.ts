//our root app component
import {
  Component,
  View,
  FORM_BINDINGS,
  FORM_DIRECTIVES,
  ControlGroup,
  FormBuilder,
  Validators
} from 'angular2/angular2'


@Component({
  selector: 'my-app',
  viewBindings: [FORM_BINDINGS]
})
@View({
  template: `
    <form [ng-form-model]="loginForm">
      <p>Login <input ng-control="login"></p>
      <div ng-control-group="passwordRetry">
        <p>Password <input type="password" ng-control="password"></p>
        <p>Confirm password <input type="password" ng-control="passwordConfirmation"></p>
      </div>
    </form>
    <h3>Valores do Formulário:</h3>
    <pre>{{value}}</pre>
  `,
  directives: [FORM_DIRECTIVES]
})
export class App {
  loginForm: ControlGroup;

  constructor(builder: FormBuilder) {
    this.loginForm = builder.group({
      login: ["", Validators.required],
      passwordRetry: builder.group({
        password: ["", Validators.required],
        passwordConfirmation: ["", Validators.required]
      })
    });
  }
  
  get value(): string {
    return JSON.stringify(this.loginForm.value, null, 2);
  }
}