import CalendarDemo from './demos/calendar';
import DialogsDemo from './demos/dialogs';
import MenuInteractionsDemo from './demos/menu-interactions';
import MorphingToolbarDemo from './demos/morphing-toolbar';
import NumberFieldDemo from './demos/number-field';
import PopoverDemo from './demos/popover';
import SelectModesDemo from './demos/select-modes';
import TooltipDemo from './demos/tooltip';

type RouteData = {
  path: string;
  component: React.ComponentType;
};

export default [
  { path: 'demos/calendar', component: CalendarDemo },
  { path: 'demos/dialogs', component: DialogsDemo },
  { path: 'demos/menu-interactions', component: MenuInteractionsDemo },
  { path: 'demos/morphing-toolbar', component: MorphingToolbarDemo },
  { path: 'demos/number-field', component: NumberFieldDemo },
  { path: 'demos/popover', component: PopoverDemo },
  { path: 'demos/select-modes', component: SelectModesDemo },
  { path: 'demos/tooltip', component: TooltipDemo },
] satisfies RouteData[];
