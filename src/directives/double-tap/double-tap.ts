import { Directive } from '@angular/core';

/**
 * Generated class for the DoubleTapDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[double-tap]' // Attribute selector
})
export class DoubleTapDirective {

  constructor() {
    console.log('Hello DoubleTapDirective Directive');
  }

}
