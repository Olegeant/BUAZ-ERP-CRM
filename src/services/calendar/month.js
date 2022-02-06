import Calendar from './calendar';
import Day from './day';
import { DAYS_IN_MONTH, CALENDAR_NAMES } from './constants';

export default class Month {
  constructor(index, year, options = {}) {
    this.index = index;
    this.year = year;
    this.length =
      index === 1 && Calendar.isYearLeap(year) ? 29 : DAYS_IN_MONTH[index];
    this.days = Array.from(
      { length: this.length },
      (_, idx) => new Day(idx + 1, index, year, options),
    );

    this.shortName = CALENDAR_NAMES.ua.months.short[index - 1];
    this.fullName = CALENDAR_NAMES.ua.months.full[index - 1];

    this.CWOfFirstDay = this.days[0].CW;
    this.CWOfLastDay = this.days[this.length - 1].CW;
    this.dayOfWeekOfFirstDay = this.days[0].dayOfWeek;
    this.dayOfWeekOfLastDay = this.days[this.length - 1].dayOfWeek;
    this.dayOfFirstWeek = new Date(
      this.days[0].date - (this.dayOfWeekOfFirstDay - 1) * 1000 * 60 * 60 * 24,
    );
    this.dayOfLastWeek = new Date(
      this.days[this.length - 1].date +
        (7 - this.dayOfWeekOfLastDay) * 1000 * 60 * 60 * 24,
    );

    this.options = options.month;
  }
}
