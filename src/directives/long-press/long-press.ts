import { Directive } from '@angular/core';

/**
 * Generated class for the LongPressDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[long-press]' // Attribute selector
})
export class LongPressDirective {

  constructor() {
    console.log('Hello LongPressDirective Directive');
  }

}
