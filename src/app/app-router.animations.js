/*
  Router Animated Transitions
  see: https://angular.io/guide/route-animations

  transition('[data.state] <=> [data.state]', [...
  see: src/app/app-routing.module.ts
  ex: { path: 'login', component: LoginComponent, data: { state: 'login' } },
*/

import {trigger, animate, style, group, query as q, transition, stagger, animateChild} from '@angular/animations';

import {query} from './app-router.animations--query.js';

export const routerTransition = trigger('routerTransition', [

  // Unique animation for back and forth to Login screen,
  // symbolizes leaving the app as opposed to navigating within
  transition('* <=> login', [

    style({ position: 'relative' }),

    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      })
    ]),

    query(':enter', [
      style({ opacity: 0, transform: 'scale(0.9)' })
    ]),

    query(':leave', animateChild()),

    group([
      query(':leave', [
        animate('200ms 00ms ease-out', style({ opacity: 0, transform: 'scale(0.9)' }))
      ]),
      query(':enter', [
        animate('200ms 200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ]),

    query(':enter', animateChild()),

  ]),

  // CGotta catch em all:
  // This is the default transition animation - slide in from the right / exit to the left
  transition('* <=> *', [

    style({ position: 'relative' }),

    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      })
    ]),

    query(':enter', [
      style({ transform: 'translateX(100vw)' })
    ]),

    query(':leave', animateChild()),

    group([
      query(':leave', [
        animate('400ms 0ms ease-out', style({ transform: 'translateX(-100vw)' }))
      ]),
      query(':enter', [
        animate('400ms 0ms ease-out', style({ transform: 'translateX(0vw)' }))
      ])
    ]),

    query(':enter', animateChild()),

  ]),

]);
