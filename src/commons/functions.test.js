import { formattedDate } from './functions';

it('should return a correct date format', () => {
  const date = formattedDate('2017-12-16T15:00:00+0000')
  expect(date).toMatch(/^\d{1,2}\/\d{1,2}\/\d{4}$/);
})
it('should return a correct date', () => {
  const date = formattedDate('2017-12-16T15:00:00+0000')
  expect(date).toEqual('16/12/2017')
})