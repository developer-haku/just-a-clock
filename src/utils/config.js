import moment from "moment-timezone";
import { decode } from "./base64";
import { configs } from "../preset/configs";

export const decodeConfig = (str) => {
  const config = decode(str);

  const mainClock = config.slice(0, 9).split("");
  const mainTz = parseInt(config.slice(9, 12));
  const subClocks = config.slice(12, 21).split("");
  const subTzs = config.slice(21, config.length).match(/.{1,3}/g);

  return {
    clockConfigs: {
      main: {
        year: mainClock[0] === "9" ? false : configs.year[mainClock[0]].token,
        month: mainClock[1] === "9" ? false : configs.month[mainClock[1]].token,
        day: mainClock[2] === "9" ? false : configs.day[mainClock[2]].token,
        week: mainClock[3] === "9" ? false : configs.week[mainClock[3]].token,
        hour: mainClock[4] === "9" ? false : configs.hour[mainClock[4]].token,
        minute:
          mainClock[5] === "9" ? false : configs.minute[mainClock[5]].token,
        second:
          mainClock[6] === "9" ? false : configs.second[mainClock[6]].token,
        millisecond:
          mainClock[7] === "9"
            ? false
            : configs.millisecond[mainClock[7]].token,
        ampm: mainClock[8] === "9" ? false : configs.ampm[mainClock[8]].token,
      },
      sub: {
        year: mainClock[0] === "9" ? false : configs.year[subClocks[0]].token,
        month: mainClock[1] === "9" ? false : configs.month[subClocks[1]].token,
        day: mainClock[2] === "9" ? false : configs.day[subClocks[2]].token,
        week: mainClock[3] === "9" ? false : configs.week[subClocks[3]].token,
        hour: mainClock[4] === "9" ? false : configs.hour[subClocks[4]].token,
        minute:
          mainClock[5] === "9" ? false : configs.minute[subClocks[5]].token,
        second:
          mainClock[6] === "9" ? false : configs.second[subClocks[6]].token,
        millisecond:
          mainClock[7] === "9"
            ? false
            : configs.millisecond[subClocks[7]].token,
        ampm: mainClock[8] === "9" ? false : configs.ampm[subClocks[8]].token,
      },
    },
    tz: {
      main: moment.tz.names()[mainTz],
      sub: subTzs.map((t) => moment.tz.names()[parseInt(t)]),
    },
  };
};
