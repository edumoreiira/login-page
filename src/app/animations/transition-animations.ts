import { animate, state, style, transition, trigger } from "@angular/animations";

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