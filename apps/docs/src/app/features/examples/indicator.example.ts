import type { Example } from './examples';

export const defaultIndicator: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-indicator />
<flowbite-indicator color="gray" />
<flowbite-indicator color="blue" />
<flowbite-indicator color="green" />
<flowbite-indicator color="red" />
<flowbite-indicator color="purple" />
<flowbite-indicator color="indigo" />
<flowbite-indicator color="yellow" />
<flowbite-indicator color="teal" />
    `,
  },
];
export const legendIndicator: Example[] = [
  {
    language: 'html',
    code: `
<span class="flex items-center"><flowbite-indicator size="sm" class="mr-1.5" color="gray"></flowbite-indicator>Visitors</span>
<span class="flex items-center"><flowbite-indicator size="sm" class="mr-1.5" color="blue"></flowbite-indicator>Sessions</span>
<span class="flex items-center"><flowbite-indicator size="sm" class="mr-1.5" color="green"></flowbite-indicator>Customers</span>
<span class="flex items-center"><flowbite-indicator size="sm" class="mr-1.5" color="red"></flowbite-indicator>Revenue</span>
<span class="flex items-center"><flowbite-indicator size="sm" class="mr-1.5" color="purple" ></flowbite-indicator>Revenue</span>
    `,
  },
];
export const countIndicator: Example[] = [
  {
    language: 'html',
    code: `
<flowbite-button class="relative">
  <svg class="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
  Messages
  <flowbite-indicator hasBorder color="red" size="xl" placement="top-right">
    <span class="text-white text-xs font-bold">8</span>
  </flowbite-indicator>
</flowbite-button>
    `,
  },
];
export const positionedIndicator: Example[] = [
  {
    language: 'html',
    code: `
<div class="w-56 h-56 relative bg-gray-300 borer border-gray-500 rounded-lg dark:bg-gray-900 dark:border-gray-700">
  <flowbite-indicator placement="top-left" color="gray" />
  <flowbite-indicator placement="top-center" color="blue" />
  <flowbite-indicator placement="top-right" color="green" />
  <flowbite-indicator placement="center-left" color="red" />
  <flowbite-indicator placement="center" color="purple" />
  <flowbite-indicator placement="center-right" color="indigo" />
  <flowbite-indicator placement="bottom-left" color="yellow" />
  <flowbite-indicator placement="bottom-center" color="teal" />
  <flowbite-indicator placement="bottom-right" color="dark" />
</div>
    `,
  },
];
