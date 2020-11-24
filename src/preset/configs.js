export const configs = {
  year: {
    1: {
      token: "YY",
      output: "70 71 ... 29 30",
    },
    2: {
      token: "YYYY",
      output: "1970 1971 ... 2029 2030",
    },
  },
  month: {
    1: {
      token: "M",
      output: "1 2 ... 11 12",
    },
    2: {
      token: "Mo",
      output: "1st 2nd ... 11th 12th",
    },
    3: {
      token: "MM",
      output: "01 02 ... 11 12",
    },
    4: {
      token: "MMM",
      output: "Jan Feb ... Nov Dec",
    },
    5: {
      token: "MMMM",
      output: "January February ... November December",
    },
  },
  day: {
    1: {
      token: "D",
      output: "1 2 ... 30 31",
    },
    2: {
      token: "Do",
      output: "1st 2nd ... 30th 31st",
    },
    3: {
      token: "DD",
      output: "01 02 ... 30 31",
    },
  },
  week: {
    1: {
      token: "d",
      output: "0 1 ... 5 6",
    },
    2: {
      token: "do",
      output: "0th 1st ... 5th 6th",
    },
    3: {
      token: "dd",
      output: "Su Mo ... Fr Sa",
    },
    4: {
      token: "ddd",
      output: "Sun Mon ... Fri Sat",
    },
    5: {
      token: "dddd",
      output: "Sunday Monday ... Friday Saturday",
    },
  },
  hour: {
    1: {
      token: "H",
      output: "0 1 ... 22 23",
    },
    2: {
      token: "HH",
      output: "00 01 ... 22 23",
    },
    3: {
      token: "h",
      output: "1 2 ... 11 12",
    },
    4: {
      token: "hh",
      output: "01 02 ... 11 12",
    },
    5: {
      token: "k",
      output: "1 2 ... 23 24",
    },
    6: {
      token: "kk",
      output: "01 02 ... 23 24",
    },
  },
  minute: {
    1: {
      token: "m",
      output: "0 1 ... 58 59",
    },
    2: {
      token: "mm",
      output: "00 01 ... 58 59",
    },
  },
  second: {
    1: {
      token: "s",
      output: "0 1 ... 58 59",
    },
    2: {
      token: "ss",
      output: "00 01 ... 58 59",
    },
  },
  millisecond: {
    1: {
      token: "S",
      output: "0 1 ... 8 9",
    },
    2: {
      token: "SS",
      output: "00 01 ... 98 99",
    },
    3: {
      token: "SSS",
      output: "000 001 ... 998 999",
    },
  },
  ampm: {
    1: {
      token: "a",
      output: "AM PM",
    },
    2: {
      token: "A",
      output: "am pm",
    },
  },
};
