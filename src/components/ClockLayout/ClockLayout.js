import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { decodeConfig } from "../../utils/config";
import Clock from "../Clock/Clock";
import Subclock from "../Subclock/Subclock";

import styles from "./ClockLayout.module.css";

const ClockLayout = () => {
  const { config } = useParams();
  const [state, setState] = useState({
    clockConfigs: {
      main: {
        year: "",
        month: "",
        day: "",
        week: "",
        hour: "",
        minute: "",
        second: "",
        millisecond: "",
        ampm: "",
      },
      sub: {
        year: "",
        month: "",
        day: "",
        week: "",
        hour: "",
        minute: "",
        second: "",
        millisecond: "",
        ampm: "",
      },
    },
    tz: {
      main: "",
      sub: [],
    },
  });

  useEffect(() => {
    setState(decodeConfig(config));
  }, [config]);
  return (
    <div>
      <Clock
        yearFmt={state.clockConfigs.main.year}
        monthFmt={state.clockConfigs.main.month}
        dayFmt={state.clockConfigs.main.day}
        weekFmt={state.clockConfigs.main.week}
        hourFmt={state.clockConfigs.main.hour}
        minuteFmt={state.clockConfigs.main.minute}
        secondFmt={state.clockConfigs.main.second}
        msFmt={state.clockConfigs.main.millisecond}
        ampmFmt={state.clockConfigs.main.ampm}
      />
      <div className={styles.subclocks}>
        {state.tz.sub.map((tz) => (
          <Subclock
            key={tz}
            tz={tz}
            yearFmt={state.clockConfigs.sub.year}
            monthFmt={state.clockConfigs.sub.month}
            dayFmt={state.clockConfigs.sub.day}
            weekFmt={state.clockConfigs.sub.week}
            hourFmt={state.clockConfigs.sub.hour}
            minuteFmt={state.clockConfigs.sub.minute}
            secondFmt={state.clockConfigs.sub.second}
            msFmt={state.clockConfigs.sub.millisecond}
            ampmFmt={state.clockConfigs.sub.ampm}
          />
        ))}
      </div>
    </div>
  );
};

export default ClockLayout;
