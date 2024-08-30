import { ModalExampleService } from '../../../../examples/modal.example';
import { DemoExampleComponent } from '../../../../shared/components/demo-example/demo-example.component';
import { TableOfContentComponent } from '../../../../shared/components/table-of-content/table-of-content.component';
import { ThemeExampleComponent } from '../../../../shared/components/theme-example/theme-example.component';

import { Component, HostBinding, inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [DemoExampleComponent, ThemeExampleComponent, TableOfContentComponent],
  selector: 'flowbite-modal-page',
  templateUrl: './modal-page.component.html',
})
export class ModalPageComponent {
  @HostBinding('class')
  protected readonly hostClass = 'flex flex-row';

  protected readonly exampleService = inject(ModalExampleService);
}
