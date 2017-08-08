import { Directive, Input, ElementRef, Renderer, Output, EventEmitter } from '@angular/core';
import { DomController } from 'ionic-angular';

/**
 * Generated class for the ScreenPanDirective directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
@Directive({
  selector: '[t4-to-right]' // Attribute selector
})

export class T4ToRightDirective {

  @Input('startLeft') startLeft: any;
  @Input('startTop') startTop: any;

  @Output() overDrag: any = new EventEmitter();
  @Output() aaa: number = 0;
  @Output() dighdigh: any = new EventEmitter();
  triggered: boolean = false;
  
  @Output()
  panpan: EventEmitter<any> = new EventEmitter();
  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController ) {
  
  }

  ngOnInit(){
     // this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');    
      let hammer = new window['Hammer'](this.element.nativeElement);
      hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL});
      hammer.on('pan', (ev) => {
        this.handlePan(ev);
        this.panpan.emit(ev);
      })
  }


  handlePan(ev){
  
   }
   
}
