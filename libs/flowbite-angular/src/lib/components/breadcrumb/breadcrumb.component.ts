import type { DeepPartial } from '../../common';
import { BaseComponent } from '../base.component';
import * as properties from './breadcrumb.theme';
import { BreadcrumbThemeService } from './breadcrumb.theme.service';

import { NgClass } from '@angular/common';
import { Component, HostBinding, inject, input, signal } from '@angular/core';

/**
 * @see https://flowbite.com/docs/components/breadcrumb/
 */
@Component({
  standalone: true,
  imports: [NgClass],
  selector: 'flowbite-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent extends BaseComponent {
  @HostBinding('aria-label') protected hostAriaLabelValue = 'Breadcrumb';

  protected override contentClasses = signal<properties.BreadcrumbClass>(properties.BreadcrumbClassInstance);

  protected readonly themeService = inject(BreadcrumbThemeService);

  //#region properties
  public customStyle = input<DeepPartial<properties.BreadcrumbBaseTheme>>({});
  //#endregion

  //#region BaseComponent implementation
  protected override fetchClass(): void {
    const propertyClass = this.themeService.getClasses({
      customStyle: this.customStyle(),
    });

    this.contentClasses.set(propertyClass);
  }
  //#endregion
}
