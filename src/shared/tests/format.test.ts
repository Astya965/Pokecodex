import formatName from '../utils/format';

const name1 = 'ann';
const name2 = 'ann-maxwell';
const name3 = '';

const result1 = 'Ann';
const result2 = 'Ann Maxwell';

test('ann => Ann', () => {
  expect(formatName(name1)).toEqual(result1);
});

test('ann-maxwell => Ann Maxwell', () => {
  expect(formatName(name2)).toEqual(result2);
});

test(' => ', () => {
  expect(formatName(name3)).toEqual(name3);
});
