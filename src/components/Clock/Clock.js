import React, { useEffect, useState } from "react";
import moment from "moment";

import styles from "./Clock.module.css";

const Clock = ({
  yearFmt = "YY",
  monthFmt = "MMMM",
  dayFmt = "Do",
  weekFmt = "dddd",
  hourFmt = "hh",
  minuteFmt = "m",
  secondFmt = "s",
  msFmt = "SS",
  ampmFmt = "a",
}) => {
  const [time, setTime] = useState({
    year: 0,
    month: 0,
    day: 0,
    week: 0,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
    ampm: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime({
        year: moment().format(yearFmt),
        month: moment().format(monthFmt),
        day: moment().format(dayFmt),
        week: moment().format(weekFmt),
        hour: moment().format(hourFmt),
        minute: moment().format(minuteFmt),
        second: moment().format(secondFmt),
        millisecond: moment().format(msFmt),
        ampm: moment().format(ampmFmt),
      });
    }, 1);
    return () => clearInterval(interval);
  }, [
    ampmFmt,
    dayFmt,
    hourFmt,
    minuteFmt,
    monthFmt,
    msFmt,
    secondFmt,
    weekFmt,
    yearFmt,
  ]);

  const colon = <span>:</span>;
  const dot = <span>.</span>;

  return (
    <div className={styles.clock}>
      <p className={styles.mainTime}>
        <span>{time.hour}</span>
        {colon}
        <span>{time.minute}</span>
        {colon}
        <span>{time.second}</span>
        {dot}
        <span className={styles.mainTimeMore}>
          <span>{time.ampm}</span>
          <span>{time.millisecond}</span>
        </span>
      </p>
      <p className={styles.mainDate}>
        <span>{`${time.month} ${time.day}, ${time.year}`}</span>
        <span>{time.week}</span>
      </p>
    </div>
  );
};

export default Clock;
