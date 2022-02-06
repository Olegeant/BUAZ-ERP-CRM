import Month from './month';
import Calendar from './calendar';

export default class Year {
  constructor(year, options = {}) {
    this.number = year;
    this.months = Array.from({ length: 12 }, (_, idx) => {
      return new Month(idx + 1, year, options);
    });
    this.isLeap = Calendar.isYearLeap(year);

    this.options = options.year;
  }
}
