import { FlowbiteFrameDisplayComponent } from '../display-frame.component';

import { ButtonComponent } from 'flowbite-angular';

import { Component } from '@angular/core';

@Component({
  selector: 'flowbite-frame-button-gradient-duotone',
  standalone: true,
  imports: [ButtonComponent, FlowbiteFrameDisplayComponent],
  template: `
    <flowbite-frame-display>
      <flowbite-button gradientDuoTone="purpleToBlue">Purple to Blue</flowbite-button>
      <flowbite-button gradientDuoTone="cyanToBlue">Cyan to Blue</flowbite-button>
      <flowbite-button gradientDuoTone="greenToBlue">Green to Blue</flowbite-button>
      <flowbite-button gradientDuoTone="purpleToPink">Purple to Pink</flowbite-button>
      <flowbite-button gradientDuoTone="pinkToOrange">Pink to Orange</flowbite-button>
      <flowbite-button gradientDuoTone="tealToLime">Teal to Lime</flowbite-button>
      <flowbite-button gradientDuoTone="redToYellow">Red to Yellow</flowbite-button>
    </flowbite-frame-display>
  `,
})
export class FlowbiteFrameButtonGradientDuotoneComponent {}
