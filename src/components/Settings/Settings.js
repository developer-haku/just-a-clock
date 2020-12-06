import React, { useState } from "react";
import moment from "moment-timezone";

import { configs } from "../../preset/configs";
import { encode } from "../../utils/base64";

import Swapper from "../Swapper/Swapper";
import styles from "./Settings.module.css";
import { useHistory } from "react-router-dom";

const Settings = () => {
  const [config, setConfig] = useState({
    local: {
      Year: "1",
      Month: "1",
      Day: "1",
      Week: "1",
      Hour: "1",
      Minute: "1",
      Second: "1",
      Millisecond: "1",
      "AM/PM": "1",
    },
    world: {
      Year: "1",
      Month: "1",
      Day: "1",
      Week: "1",
      Hour: "1",
      Minute: "1",
      Second: "1",
      Millisecond: "1",
      "AM/PM": "1",
    },
    tz: {
      "Main Timezone": "000",
      "Timezone 1": "000",
      "Timezone 2": "000",
      "Timezone 3": "000",
      "Timezone 4": "000",
    },
  });
  let history = useHistory();

  const apply = () => {
    const configStr =
      Object.values(config.local).join("") +
      config.tz["Main Timezone"] +
      Object.values(config.world).join("") +
      Object.values(config.tz).slice(1).join("");
    const encodedStr = encode(configStr);
    history.push(`/set/${encodedStr}`);
  };

  const update = (event, isTz, isLocal = false, key = "") => {
    let newConfig = { ...config };
    if (isTz) {
      newConfig.tz[key] = ("00" + event.target.value).slice(-3);
    } else {
      const tKey = isLocal ? "local" : "world";
      newConfig[tKey][key] = event.target.value;
    }
    setConfig(newConfig);
  };

  return (
    <div className={styles.settings}>
      <div>
        <h2 className={styles.header}>Main Date and Clock Format</h2>
        <Swapper
          tz={false}
          local={true}
          update={update}
          title="Year"
          meta={configs.year}
        />
        <Swapper
          tz={false}
          local={true}
          update={update}
          title="Month"
          meta={configs.month}
        />
        <Swapper
          tz={false}
          local={true}
          update={update}
          title="Day"
          meta={configs.day}
        />
        <Swapper
          tz={false}
          local={true}
          update={update}
          title="Week"
          meta={configs.week}
        />
        <Swapper
          tz={false}
          local={true}
          update={update}
          title="Hour"
          meta={configs.hour}
        />
        <Swapper
          tz={false}
          local={true}
          update={update}
          title="Minute"
          meta={configs.minute}
        />
        <Swapper
          tz={false}
          local={true}
          update={update}
          title="Second"
          meta={configs.second}
        />
        <Swapper
          tz={false}
          local={true}
          update={update}
          title="Millisecond"
          meta={configs.millisecond}
        />
        <Swapper
          tz={false}
          local={true}
          update={update}
          title="AP/PM"
          meta={configs.ampm}
        />
      </div>
      <div>
        <h2 className={styles.header}>World Date and Clock Format</h2>
        <Swapper
          tz={false}
          local={false}
          update={update}
          title="Year"
          meta={configs.year}
        />
        <Swapper
          tz={false}
          local={false}
          update={update}
          title="Month"
          meta={configs.month}
        />
        <Swapper
          tz={false}
          local={false}
          update={update}
          title="Day"
          meta={configs.day}
        />
        <Swapper
          tz={false}
          local={false}
          update={update}
          title="Week"
          meta={configs.week}
        />
        <Swapper
          tz={false}
          local={false}
          update={update}
          title="Hour"
          meta={configs.hour}
        />
        <Swapper
          tz={false}
          local={false}
          update={update}
          title="Minute"
          meta={configs.minute}
        />
        <Swapper
          tz={false}
          local={false}
          update={update}
          title="Second"
          meta={configs.second}
        />
        <Swapper
          tz={false}
          local={false}
          update={update}
          title="Millisecond"
          meta={configs.millisecond}
        />
        <Swapper
          tz={false}
          local={false}
          update={update}
          title="AP/PM"
          meta={configs.ampm}
        />
      </div>
      <div>
        <h2 className={styles.header}>Timezones</h2>
        <Swapper
          tz={true}
          update={update}
          title="Main Timezone"
          meta={moment.tz.names()}
        />
        <Swapper
          tz={true}
          update={update}
          title="Timezone 1"
          meta={moment.tz.names()}
        />
        <Swapper
          tz={true}
          update={update}
          title="Timezone 2"
          meta={moment.tz.names()}
        />
        <Swapper
          tz={true}
          update={update}
          title="Timezone 3"
          meta={moment.tz.names()}
        />
        <Swapper
          tz={true}
          update={update}
          title="Timezone 4"
          meta={moment.tz.names()}
        />
      </div>
      <div className={styles.button} onClick={apply}>
        Apply
      </div>
    </div>
  );
};

export default Settings;
