import { getDateTime, capitalize, isDate } from '.'

test('returns formatted date', () =>  {
  const date = getDateTime('2012-04-23T01:06:43.511Z');
  expect(date).toEqual('10:06PM');
});

test('returns capitalized string', () =>  {
  const string = capitalize('lowercase');
  expect(string).toEqual('Lowercase');
});

test('returns true if value passed is a date', () =>  {
  const date = isDate('2012-04-23T01:06:43.511Z');
  expect(date).toBeTruthy();
});
