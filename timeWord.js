function timeWord(timeString) {
  const hoursMap = {
    '00': 'midnight',
    '01': 'one',
    '02': 'two',
    '03': 'three',
    '04': 'four',
    '05': 'five',
    '06': 'six',
    '07': 'seven',
    '08': 'eight',
    '09': 'nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve'
  };

  const minutesMap = {
    '00': 'o’clock',
    '01': 'oh one',
    '02': 'oh two',
    '03': 'oh three',
    '04': 'oh four',
    '05': 'oh five',
    '06': 'oh six',
    '07': 'oh seven',
    '08': 'oh eight',
    '09': 'oh nine',
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen',
    '20': 'twenty',
    '21': 'twenty one',
    '22': 'twenty two',
    '23': 'twenty three',
    '24': 'twenty four',
    '25': 'twenty five',
    '26': 'twenty six',
    '27': 'twenty seven',
    '28': 'twenty eight',
    '29': 'twenty nine'
  };

  const [hours, minutes] = timeString.split(':');
  const hour = hoursMap[hours];
  const minute = minutesMap[minutes];

  if (minutes === '00') {
    if (hours === '00') return 'midnight';
    if (hours === '12') return 'noon';
    return `${hour} o’clock ${hours < 12 ? 'am' : 'pm'}`;
  }

  if (minutes <= 29) {
    if (minutes === '01') return `${hour} ${minute} ${hours < 12 ? 'am' : 'pm'}`;
    return `${hour} ${minute} ${hours < 12 ? 'am' : 'pm'}`;
  }

  const nextHour = hoursMap[parseInt(hours) + 1 < 10 ? `0${parseInt(hours) + 1}` : `${parseInt(hours) + 1}`];
  return `${nextHour} ${minute} ${hours < 11 ? 'am' : 'pm'}`;
}

module.exports = timeWord;
