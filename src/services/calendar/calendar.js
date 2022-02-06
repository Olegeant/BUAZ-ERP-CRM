class Calendar extends Date {
  getCurrentYear() {
    return new Date.getFullYear();
  }

  isYearLeap(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  }

  getJan01(year) {
    return new Date(`${year}-01-01`);
  }

  getDayOfWeekOfJan01(year) {
    const Jan01 = this.getJan01(year);

    return this.getUTCDay(Jan01);
  }

  getFirstDayOfCW01(year) {
    const Jan01 = this.getJan01(year);
    const dayOfWeekOfJan01 = this.getDayOfWeekOfJan01(year) || 7;

    const offset = dayOfWeekOfJan01 - 1 + (dayOfWeekOfJan01 > 4 ? 7 : 0);

    return new Date(Jan01 + offset);
  }

  getCalendarWeek(date) {
    const firstDayOfCW01 = this.getFirstDayOfCW01(this.getUTCFullYear(date));
    const differenceInWeeks = (date - firstDayOfCW01) / 1000 / 60 / 60 / 24 / 7;

    return Math.floor(differenceInWeeks) + 1;
  }
}

export default new Calendar();
