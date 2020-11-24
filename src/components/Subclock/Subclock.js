import React, { useEffect, useState } from "react";
import moment from "moment-timezone";

import styles from "./Subclock.module.css";

const Subclock = ({
  yearFmt = "YY",
  monthFmt = "MMMM",
  dayFmt = "Do",
  weekFmt = "dddd",
  hourFmt = "hh",
  minuteFmt = "m",
  secondFmt = "s",
  msFmt = "SS",
  ampmFmt = "a",
  tz = "",
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
        year: moment().tz(tz).format(yearFmt),
        month: moment().tz(tz).format(monthFmt),
        day: moment().tz(tz).format(dayFmt),
        week: moment().tz(tz).format(weekFmt),
        hour: moment().tz(tz).format(hourFmt),
        minute: moment().tz(tz).format(minuteFmt),
        second: moment().tz(tz).format(secondFmt),
        millisecond: moment().tz(tz).format(msFmt),
        ampm: moment().tz(tz).format(ampmFmt),
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
    tz,
    weekFmt,
    yearFmt,
  ]);

  const getTabs = (str) => {
    return "\t".repeat(Math.ceil((32 - str.length) / 4));
  };

  return (
    <div className={styles.clock}>
      <p
        className={styles.clockText}
      >{`${tz}${getTabs(tz)}${time.hour}:${time.minute} | ${time.month} ${time.day}, ${time.year} | ${time.week}`}</p>
    </div>
  );
};

export default Subclock;
