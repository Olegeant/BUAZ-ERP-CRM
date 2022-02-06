import Calendar from './calendar';
import { CALENDAR_NAMES } from './constants';

export default class Day {
  constructor(index, month, year, options = {}) {
    this.index = index;
    this.month = month;
    this.year = year;
    this.date = new Date(`${year}-${month}-${index}`);

    this.dayOfWeek = this.date.getDay() || 7;
    this.shortName = CALENDAR_NAMES.ua.days.short[this.dayOfWeek - 1];
    this.fullName = CALENDAR_NAMES.ua.days.full[this.dayOfWeek - 1];

    options = { day: [], ...options };
    this.options = {
      ...options.days,
      ...options.day[index],
    };

    this.isWeekend = this.dayOfWeek >= 6;
    this.isHoliday = false; //TODO

    this.CW = Calendar.getCalendarWeek(this.date);
  }
}
