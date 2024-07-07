import { animate, animateChild, group, query, state, style, transition, trigger } from "@angular/animations";

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms ease-in')
    ]),
    transition(':leave', [
        animate('150ms ease-out',
            style({ opacity: 0 }))
    ])
])

export const popUp = trigger('popUp', [
    state('void', style({
        opacity: 0,
        transform: 'scale(0)',
        height: 0,
        marginBottom: 0
    })),

    transition(':enter, :leave', [
        animate('200ms ease-in-out')
    ])
])

export const slideUpDown = trigger('slideUpDown', [
    state('void', style({
        height: 0,
        minHeight: 0,
        opacity: 0
    })),
    transition(':enter, :leave', [
        animate('250ms ease-in-out')
    ])
])

export const slide = trigger('slide', [
    state('void', style({
        width: 0,
        maxWidth: 0,
        minWidth: 0,
        padding: 0,
        opacity: 0,
        transform: 'scale(0)'
        
    })),
    transition(':enter, :leave', [
        animate('250ms ease-in-out')
    ])
])

export const parentAnimations = [
    trigger('parentAnimation', [
      transition(':leave', [
        group([
          query('@fadeInOut, @popUp, @slide', animateChild(), { optional: true }),
        ])
      ])
    ])
  ];