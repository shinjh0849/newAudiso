import { Directive } from '@angular/core';

/**
 * Generated class for the ShortPressDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[short-press]' // Attribute selector
})
export class ShortPressDirective {

  constructor() {
    console.log('Hello ShortPressDirective Directive');
  }

}
