import { NgModule } from '@angular/core';
import { T4ToRightDirective } from './t4-to-right/t4-to-right';
import { DoubleTapDirective } from './double-tap/double-tap';
import { LongPressDirective } from './long-press/long-press';
import { ShortPressDirective } from './short-press/short-press';
import { P1UpslidingDirective } from './p1-upsliding/p1-upsliding';
@NgModule({
	declarations: [T4ToRightDirective,
    DoubleTapDirective,
    LongPressDirective,
    ShortPressDirective,
    P1UpslidingDirective],
	imports: [],
	exports: [T4ToRightDirective,
    DoubleTapDirective,
    LongPressDirective,
    ShortPressDirective,
    P1UpslidingDirective]
})
export class DirectivesModule {}
