import { Component } from "@angular/core";
import {
  trigger,
  state,
  animate,
  query,
  transition,
  style,
  stagger
} from "@angular/animations";
export const fade = trigger("fade", [
  state("inactive", style({ opacity: 0 })),
  state("active", style({ opacity: 1 })),
  transition("* <=> *", [animate(2000)])
]);


export const imagechange=trigger("fade",[

  state("inactive", style({ opacity: 0 })),
  state("active", style({ opacity: 0 })),
  transition("* <=> *", [animate(2000)])


] );
