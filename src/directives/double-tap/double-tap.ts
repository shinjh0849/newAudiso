import { Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';
declare var Hammer: any;
var isDoubleTap = false

@Directive({
  selector: '[doubleTap]'
})

export class DoubleTapDirective implements OnInit, OnDestroy {
  el: HTMLElement;
  tapGesture: Gesture;

  
  @Output()
  doubleTap: EventEmitter<any> = new EventEmitter();

    
  
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() { 
    this.tapGesture = new Gesture(this.el, {
      recognizers: [
        [Hammer.Tap, {taps: 2}]
      ]
    });
    this.tapGesture.listen();
    this.tapGesture.on('tap', e => {
      this.doubleTap.emit(e);
    });
    
    
  }

  ngOnDestroy() {
    this.tapGesture.destroy();
  }

}
