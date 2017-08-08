import { Directive, ElementRef, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';
declare var Hammer: any;

@Directive({
  selector: '[shortPress]'
})

export class ShortPressDirective implements OnInit, OnDestroy {
  el: HTMLElement;
  pressGesture: Gesture;

  @Output()
  shortPress: EventEmitter<any> = new EventEmitter();
    
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.pressGesture = new Gesture(this.el, {
      recognizers: [
        [Hammer.Press, {time: 150}],
      ]
    });
    this.pressGesture.listen();
    this.pressGesture.on('press', e => {
      this.shortPress.emit(e);
    });
  }

  ngOnDestroy() {
    this.pressGesture.destroy();
  }
}