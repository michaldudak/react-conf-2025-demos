import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  // Demo routes mapped from files in app/demos
  route('demos/calendar', 'demos/calendar.tsx'),
  route('demos/dialogs', 'demos/dialogs.tsx'),
  route('demos/menu-interactions', 'demos/menu-interactions.tsx'),
  route('demos/morphing-toolbar', 'demos/morphing-toolbar.tsx'),
  route('demos/number-field', 'demos/number-field.tsx'),
  route('demos/popover', 'demos/popover.tsx'),
  route('demos/select-modes', 'demos/select-modes.tsx'),
  route('demos/tooltip', 'demos/tooltip.tsx'),
] satisfies RouteConfig;
