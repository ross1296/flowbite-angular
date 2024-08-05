import { FlowbiteIFrameWrapperComponent } from '../../../../../frames/iframe-wrapper.component';
import { IndicatorExampleService } from '../../../../examples/indicator.example';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { ShikiComponent } from '../../../../shared/components/shiki/shiki.component';

import { ButtonComponent, IndicatorComponent } from 'flowbite-angular';

import { Component, HostBinding, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent, IndicatorComponent, ButtonComponent, ShikiComponent, FlowbiteIFrameWrapperComponent],
  selector: 'flowbite-indicator-page',
  templateUrl: './indicator-page.component.html',
})
export class IndicatorPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-col gap-8';

  protected readonly exampleService = inject(IndicatorExampleService);
}
