import { mergeTheme } from '../../utils/merge-theme';

import { twMerge } from 'tailwind-merge';

export interface NavbarContentProperties {
  customStyle: Partial<NavbarContentBaseTheme>;
}

export interface NavbarContentBaseTheme {
  root: Partial<NavbarContentRootTheme>;
  list: Partial<NavBarContentListTheme>;
}

export interface NavbarContentRootTheme {
  base: string;
}

export interface NavBarContentListTheme {
  base: string;
}

export const navbarContentTheme: NavbarContentBaseTheme = {
  root: {
    base: 'hidden w-full md:block md:w-auto',
  },
  list: {
    base: 'font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-800 dark:border-gray-700',
  },
};

export interface NavbarContentClass {
  navbarContentClass: string;
  navbarContentListClass: string;
}

export function getClasses(
  properties: NavbarContentProperties,
): NavbarContentClass {
  const theme: NavbarContentBaseTheme = mergeTheme(
    navbarContentTheme,
    properties.customStyle,
  );

  const output: NavbarContentClass = {
    navbarContentClass: twMerge(theme.root.base),
    navbarContentListClass: twMerge(theme.list.base),
  };

  return output;
}
