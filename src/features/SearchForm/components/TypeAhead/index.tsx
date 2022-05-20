import dummyData from "@src/app/api/search/dummyData.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { useState } from "react";
import { useGoToNewsPage } from "@src/features/SearchForm/hooks/useGoToNewsPage";
import { useFetchSearchKeywordList } from "@src/features/SearchForm/hooks/useFetchSearchKeywordList";
import { css } from "@emotion/react";

export default function TypeAhead() {
  const [state, setState] = useState<any>({});
  const [open, setOpen] = useState(false);
  const macrotopic = dummyData.macrotopic;
  const topics = dummyData.topics;
  const tickers = dummyData.tickers;
  const commodities = dummyData.commodities;
  const events = dummyData.events;
  const fx = dummyData.fx;

  const filterOptions = createFilterOptions({
    matchFrom: "start",
    limit: 30,
  });

  const newFx = fx.map((it: object) => {
    const keyType = "fx";
    const addValue = { ...it, keyType };
    return addValue;
  });

  const newMacrotopic = macrotopic.map((it: object) => {
    const keyType = "macrotopicstartup";
    const addValue = { ...it, keyType };
    return addValue;
  });

  const newTickers = tickers.map((it: object) => {
    const keyType = "tickers";
    const addValue = { ...it, keyType };
    return addValue;
  });

  const newCommodities = commodities.map((it: object) => {
    const keyType = "commodities";
    const addValue = { ...it, keyType };
    return addValue;
  });

  const newEvents = events.map((it: object) => {
    const keyType = "events";
    const addValue = { ...it, keyType };
    return addValue;
  });

  const newTopics = topics.map((it: object) => {
    const keyType = "topics";
    const addValue = { ...it, keyType };
    return addValue;
  });

  const sumAutoCompleteData = [
    ...newFx,
    ...newMacrotopic,
    ...newCommodities,
    ...newTickers,
    ...newEvents,
    ...newTopics,
  ];
  console.log(state, "체인지");

  return (
    <Autocomplete
      css={styles}
      noOptionsText={"Your Customized No Options Text"}
      onChange={(event, newValue) => {
        setState(newValue);
      }}
      filterSelectedOptions
      id="tags-outlined"
      autoComplete={false}
      groupBy={(option: any) => option.keyType}
      getOptionLabel={(option: any) => option.name}
      open={open}
      onInputChange={(_, value) => {
        if (value.length === 0) {
          if (open) setOpen(false);
        } else {
          if (!open) setOpen(true);
        }
      }}
      onClose={() => setOpen(false)}
      sx={{ width: 300 }}
      defaultValue={null}
      filterOptions={filterOptions}
      renderInput={(params) => <TextField {...params} label="keyword Search" />}
      renderOption={(props, option: any, { inputValue }) => {
        const matches = match(option.name, inputValue);
        const parts = parse(option.name, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((part: any, index: number) => (
                <span
                  key={index}
                  style={{
                    fontWeight: part.highlight ? 700 : 400,
                  }}
                >
                  {part.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
      options={sumAutoCompleteData}
    />
  );
}
const styles = css`
  position: relative !important;
`;
