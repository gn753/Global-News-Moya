import dummyData from "@src/app/api/search/dummyData.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";
export default function TypeAhead() {
  const [state, setState] = useState<object[] | null>(null);
  useEffect(() => {
    let Arr = [];
    for (const [key, value] of Object.entries(dummyData)) {
      if (key !== "sectors") {
        if (key !== "category") {
          Arr.push(value);
        }
      }
    }
    setState(Arr);
  }, []);

  const startup = dummyData.startup;
  const topics = dummyData.topics;
  const startupArr = Object.values(startup);
  const topicsArr = Object.values(topics);
  const SumArrKeywordList = startupArr.concat(topicsArr);

  return <div></div>;
}
