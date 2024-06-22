import { MaterialUI } from '../../libs/materialUI';
import { Layout } from '../../libs/layout';

const date = Variable('', {
  poll: [1000, 'date "+%m/%d"']
});

const week = Variable('', {
  poll: [1000, 'date "+%A"']
});

const clock = Variable('', {
  poll: [1000, 'date "+%H:%M"']
});

export default () => MaterialUI.box([
  Layout.column([
    MaterialUI.icon('schedule'),
    MaterialUI.label(clock.bind()),
    MaterialUI.label(week.bind()),
    MaterialUI.label(date.bind())
  ], 8)
]);
