import { animate, style, transition, trigger } from "@angular/animations";
export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('150ms ease-in')
    ]),
    transition(':leave', [
        animate('150ms ease-out', style({ opacity: 0 }))
    ])
])