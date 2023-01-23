import moment from 'moment';

class TimeHelper {
  cronometerFormatter(time) {
    const hours = this.zeroFormatter(Math.floor(moment.duration(time, 'seconds').asHours()));
    const minutes = this.zeroFormatter(moment.duration(time, 'seconds').minutes());
    const seconds = this.zeroFormatter(moment.duration(time, 'seconds').seconds());
    return `${hours}:${minutes}:${seconds}`;
  }

  // eslint-disable-next-line class-methods-use-this
  zeroFormatter(time) {
    return time < 10 ? `0${time}` : time;
  }
}

export default new TimeHelper();
