import type { DeepPartial } from '../../common';
import { BaseComponent } from '../base.component';
import * as properties from './modal-header.theme';
import { ModalHeaderThemeService } from './modal-header.theme.service';
import { ModalComponent } from './modal.component';

import { NgClass } from '@angular/common';
import { Component, inject, input, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-modal-header',
  templateUrl: './modal-header.component.html',
})
export class ModalHeaderComponent extends BaseComponent {
  protected override contentClasses = signal<properties.ModalHeaderClass>(properties.ModalHeaderClassInstance);

  protected readonly modalStateService = inject(ModalHeaderThemeService);
  protected readonly modalComponent = inject<ModalComponent>(ModalComponent);

  //#region properties
  public customStyle = input<DeepPartial<properties.ModalHeaderBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.modalStateService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
