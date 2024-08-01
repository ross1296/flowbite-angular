import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-pill',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-button
        isPill
        color="gray"
        >Gray</flowbite-button
      >
      <flowbite-button
        isPill
        color="dark"
        >Dark</flowbite-button
      >
      <flowbite-button
        isPill
        color="light"
        >Light</flowbite-button
      >
      <flowbite-button
        isPill
        color="success"
        >Success</flowbite-button
      >
      <flowbite-button
        isPill
        color="failure"
        >Failure</flowbite-button
      >
      <flowbite-button
        isPill
        color="warning"
        >Warning</flowbite-button
      >
      <flowbite-button
        isPill
        color="purple"
        >Purple</flowbite-button
      >
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameButtonPillComponent {}
