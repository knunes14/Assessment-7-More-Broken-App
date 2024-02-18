const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});

const timeToWords = require('./timeWord');

test('Converts time to words correctly', () => {
  expect(timeToWords('00:00')).toBe('midnight');
  expect(timeToWords('00:12')).toBe('twelve twelve am');
  expect(timeToWords('01:00')).toBe('one o’clock am');
  expect(timeToWords('06:01')).toBe('six oh one am');
  expect(timeToWords('06:10')).toBe('six ten am');
  expect(timeToWords('06:18')).toBe('six eighteen am');
  expect(timeToWords('06:30')).toBe('six thirty am');
  expect(timeToWords('10:34')).toBe('ten thirty four am');
  expect(timeToWords('12:00')).toBe('noon');
  expect(timeToWords('12:09')).toBe('twelve oh nine pm');
  expect(timeToWords('23:23')).toBe('eleven twenty three pm');
});
