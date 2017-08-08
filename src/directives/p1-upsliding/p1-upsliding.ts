import { Directive, Input, Output, ElementRef, Renderer, EventEmitter } from '@angular/core';
import { DomController } from 'ionic-angular';
@Directive({
  selector: '[p1-upsliding]'

})
export class P1UpslidingDirective {

  @Input('startLeft') startLeft: any;
  @Input('startTop') startTop: any;
  @Output() overdrag: any = new EventEmitter();
  triggered: boolean = false;

  constructor(public element: ElementRef, public renderer: Renderer, public domCtrl: DomController) {

  }

  ngAfterViewInit() {

    let hammer = new window['Hammer'](this.element.nativeElement);
    hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
    hammer.on('pan', (ev) => {
      this.handlePan(ev);
    })
  }

  handlePan(ev) {
    let newTop = ev.deltaY;
   if (newTop <= -225 && !this.triggered) {
      this.triggered = true;
      this.overdrag.emit(true);
    } 

  }


}

