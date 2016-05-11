//main entry point
import {bootstrap, FORM_BINDINGS} from 'angular2/angular2'
import {App} from './app'

bootstrap(App, [FORM_BINDINGS])
  .catch(err => console.error(err));