import dummyData from "@src/app/api/search/dummyData.json";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { createFilterOptions } from "@mui/material/Autocomplete";
import { useState } from "react";
import { css } from "@emotion/react";
import shortId from "shortid";

export default function TypeAhead() {
  const [state, setState] = useState<any>({}); //파라미터가 담긴 상태값
  const [open, setOpen] = useState(false);
  const macrotopic = dummyData.macrotopic;
  const topics = dummyData.topics;
  const tickers = dummyData.tickers;
  const commodities = dummyData.commodities;
  const events = dummyData.events;
  const fx = dummyData.fx;
  console.log(state, "확인");
  const filterOptions = createFilterOptions({
    matchFrom: "start",
    limit: 50,
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
  var UniqKey = 0;
  return (
    <>
      <Autocomplete
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            alert(
              "포트폴리오가 끝난 현재는 시스메틱측 보안으로 인해 맞춤뉴스 검색어만 제공하고 있습니다."
            );
            console.log(state);
          }
        }}
        css={styles.wrap}
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
        renderInput={(params) => (
          <TextField
            {...params}
            css={styles.outline}
            label="AAPL, MSFT, 005930, Gold, Oil, DJIA, Nikkei eg... "
          />
        )}
        renderOption={(props, option: any, { inputValue }) => {
          const matches = match(option.name, inputValue);
          const parts = parse(option.name, matches);
          console.log(option, "option");
          return (
            <li {...props} key={option.paramValue}>
              <div>
                {parts.map((part: any) => (
                  <span
                    key={shortId.generate()}
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
      <i
        className="search-icon"
        onClick={() =>
          alert(
            "포트폴리오가 끝난 현재는 시스메틱측 보안으로 인해 맞춤뉴스 검색어만 제공하고 있습니다."
          )
        }
      >
        검색 아이콘
      </i>
    </>
  );
}
const styles = {
  wrap: css`
    position: relative !important;
    width: 519px;
    border: none;
    .MuiOutlinedInput-root {
      border: none;
    }
  `,
  outline: css`
    .MuiOutlinedInput-notchedOutline {
      border: none;
    }
  `,
};
