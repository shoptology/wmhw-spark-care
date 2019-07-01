import {trigger, animate, style, group, query as q, transition, stagger,} from '@angular/animations';

import {query} from './app-router.animations--query.js';

export const routerTransition = trigger('routerTransition', [


  // catch all default animations - slide in from the right / exit to the left
  transition('* <=> *', [

      query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),

      group([
        query(':enter', [
          style({ opacity: 0.9, transform: 'translateX(100%)' }),
          animate('400ms ease-in-out', style({ opacity: 1, transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1, transform: 'translateX(0%)' }),
          animate('400ms ease-in-out', style({ opacity: 0.4, transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])

    ]),

]);
