import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';

const open_close_timer = 3;

export const FMopenClose = trigger('FMopenClose', [
  state(
    'open',
    style({
      opacity: 1.0,
    })
  ),
  state(
    'closed',
    style({
      opacity: 0.0,
    })
  ),
  transition('* => *', [animate('3s ease')]),
]);



export const EEopenClose = trigger('EEopenClose', [
  state(
    'open',
    style({
      opacity: 1.0,
    })
  ),
  state(
    'closed',
    style({
      opacity: 0.0,
    })
  ),
  transition('* => *', [animate('7s ease')]),
]);

