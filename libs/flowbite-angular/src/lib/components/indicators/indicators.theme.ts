import {
  FlowbiteBoolean,
  FlowbiteClass,
  FlowbiteColors,
  FlowbitePositions,
  FlowbiteSizes,
} from '../../common/flowbite.theme';

//#region Component theme option
export type IndicatorColors = Pick<
  FlowbiteColors,
  | 'gray'
  | 'dark'
  | 'blue'
  | 'green'
  | 'red'
  | 'purple'
  | 'indigo'
  | 'yellow'
  | 'teal'
  | 'gray'
> & {
  [key: string]: string;
};

export type IndicatorSizes = Pick<
  FlowbiteSizes,
  'xs' | 'sm' | 'md' | 'lg' | 'xl'
> & {
  [key: string]: string;
};

export type IndicatorPositions = Pick<
  FlowbitePositions,
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
> & {
  [key: string]: string;
};
//#endregion

export type IndicatorProperties = {
  isPill: keyof FlowbiteBoolean;
  isOutline: keyof FlowbiteBoolean;
  isDisabled: keyof FlowbiteBoolean;
  hasOffset: keyof FlowbiteBoolean;
  isRounded: keyof FlowbiteBoolean;
  hasBorder: keyof FlowbiteBoolean;
  color: keyof IndicatorColors;
  size: keyof IndicatorSizes;
  placement?: keyof IndicatorPositions;
  customStyle: Partial<IndicatorBaseTheme>;
};

export type IndicatorBaseTheme = {
  root: Partial<IndicatorRootTheme>;
};

export type IndicatorRootTheme = {
  base: string;
  isPill: Record<keyof FlowbiteBoolean, string>;
  isOutline: Record<keyof FlowbiteBoolean, string>;
  isDisabled: Record<keyof FlowbiteBoolean, string>;
  hasOffset: Record<keyof IndicatorPositions, string>;
  isRounded: Record<keyof FlowbiteBoolean, string>;
  hasBorder: Record<keyof FlowbiteBoolean, string>;
  color: Record<keyof IndicatorColors, string>;
  size: Record<keyof IndicatorSizes, string>;
  placement: Record<keyof IndicatorPositions, string>;
};

export const indicatorTheme: IndicatorBaseTheme = {
  root: {
    base: 'flex-shrink-0',
    hasBorder: {
      enabled: 'border-2 border-white dark:border-gray-800',
      disabled: '',
    },
    color: {
      gray: 'bg-gray-200',
      dark: 'bg-gray-900 dark:bg-gray-700',
      blue: 'bg-blue-600',
      green: 'bg-green-500',
      red: 'bg-red-500',
      purple: 'bg-purple-500',
      indigo: 'bg-indigo-500',
      yellow: 'bg-yellow-300',
      teal: 'bg-teal-500',
    },
    isDisabled: {
      enabled: '',
      disabled: '',
    },
    hasOffset: {
      'top-left': '-translate-x-1/3 -translate-y-1/3',
      'top-center': '-translate-y-1/3',
      'top-right': 'translate-x-1/3 -translate-y-1/3',
      'center-left': '-translate-x-1/3',
      center: '',
      'center-right': 'translate-x-1/3',
      'bottom-left': '-translate-x-1/3 translate-y-1/3',
      'bottom-center': 'translate-y-1/3',
      'bottom-right': 'translate-x-1/3 translate-y-1/3',
    },
    placement: {
      'top-left': 'top-0 left-0',
      'top-center': 'top-0 left-1/2 -translate-x-1/2',
      'top-right': 'top-0 right-0',
      'center-left': 'top-1/2 -translate-y-1/2 left-0',
      center: 'top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2',
      'center-right': 'top-1/2 -translate-y-1/2 right-0',
      'bottom-left': 'bottom-0 left-0',
      'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
      'bottom-right': 'bottom-0 right-0',
    },
    isOutline: {
      enabled: '',
      disabled: '',
    },
    isPill: {
      enabled: '',
      disabled: '',
    },
    isRounded: {
      enabled: 'rounded',
      disabled: 'rounded-full',
    },
    size: {
      xs: 'w-2 h-2',
      sm: 'w-2.5 h-2.5',
      md: 'w-3 h-3',
      lg: 'w-3.5 h-3.5',
      xl: 'w-6 h-6',
    },
  },
};

export type indicatorClass = FlowbiteClass;

export const IndicatorClassInstance: indicatorClass = {
  rootClass: '',
};
