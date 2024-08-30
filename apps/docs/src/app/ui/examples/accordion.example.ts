import type { TableOfContent } from '../shared/models/table-of-content';
import type { Example } from './examples';

import {
  accordionContentTheme,
  accordionPanelTheme,
  accordionTheme,
  accordionTitleTheme,
  themeToString,
} from 'flowbite-angular';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AccordionExampleService {
  public readonly defaultAccordion: Example[] = [
    {
      language: 'angular-html',
      name: 'accordion/default',
    },
  ];

  public readonly alwaysOpenAccordion: Example[] = [
    {
      language: 'angular-html',
      name: 'accordion/always-open',
    },
  ];

  public readonly colorOptionAccordion: Example[] = [
    {
      language: 'angular-html',
      name: 'accordion/color-option',
    },
  ];

  public readonly flushAccordion: Example[] = [
    {
      language: 'angular-html',
      name: 'accordion/flush',
    },
  ];

  public readonly accordionTheme: Example[] = [
    {
      name: 'Accordion theme',
      language: 'angular-ts',
      rawCode: themeToString(accordionTheme),
    },
    {
      name: 'Accordion panel theme',
      language: 'angular-ts',
      rawCode: themeToString(accordionPanelTheme),
    },
    {
      name: 'Accordion title theme',
      language: 'angular-ts',
      rawCode: themeToString(accordionTitleTheme),
    },
    {
      name: 'Accordion content theme',
      language: 'angular-ts',
      rawCode: themeToString(accordionContentTheme),
    },
  ];

  public readonly tableOfContent: TableOfContent[] = [
    {
      fragmentName: 'Default accordion',
    },
    {
      fragmentName: 'Always open',
    },
    {
      fragmentName: 'Color option',
    },
    {
      fragmentName: 'Flush accordion',
    },
    {
      fragmentName: 'Theme',
      children: [
        {
          fragmentName: 'Accordion theme',
        },
        {
          fragmentName: 'Accordion panel theme',
        },
        {
          fragmentName: 'Accordion title theme',
        },
        {
          fragmentName: 'Accordion content theme',
        },
      ],
    },
  ];
}
