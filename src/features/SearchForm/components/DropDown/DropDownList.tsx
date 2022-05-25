import {
  categoriesParameters,
  timeFiltereParameters,
  languageParameters,
  orderByParameters,
} from "@src/features/SearchForm/util/searchPrameterData";
import { css } from "@emotion/react";
import { useRecoilState } from "recoil";
import { SelectChangeEvent } from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import SelectList from "@src/features/common/DropDown/SelectList";
import { searchParameterAtom } from "@src/features/SearchForm/atoms/searchParameterAtom";


export default function DropDownList() {
  const [params, setParams] = useRecoilState(searchParameterAtom);

  const getMediaytype = (event: SelectChangeEvent) => {
    setParams({ ...params, mediaType: event.target.value });
  };

  const getTimeFilter = (event: SelectChangeEvent) => {
    setParams({ ...params, timeFilter: event.target.value });
  };
  const getlanguages = (event: SelectChangeEvent) => {
    setParams({ ...params, languages: event.target.value });
  };
  const getOrderBy = (event: SelectChangeEvent) => {
    setParams({ ...params, orderBy: event.target.value });
  };

  return (
    <Grid css={styles.wrap} container spacing={1}>
      <Grid item xs={3}>
        <SelectList
          naming={"언론사"}
          defaultValue={params.mediaType}
          getValueChange={getMediaytype}
          dropList={categoriesParameters}
        />
      </Grid>
      <Grid item xs={3}>
        <SelectList
          naming={"발행일"}
          defaultValue={params.timeFilter}
          getValueChange={getTimeFilter}
          dropList={timeFiltereParameters}
        />
      </Grid>
      <Grid item xs={3}>
        <SelectList
          naming={"언어"}
          defaultValue={params.languages}
          getValueChange={getlanguages}
          dropList={languageParameters}
        />
      </Grid>
      <Grid item xs={3}>
        <SelectList
          naming={"정렬"}
          defaultValue={params.orderBy}
          getValueChange={getOrderBy}
          dropList={orderByParameters}
        />
      </Grid>
    </Grid>
  );
}

const styles = {
  wrap: css`
    max-width: 720px;
    width: 100%;
    height: 120px;
    align-items: center;
    margin-left: 10px;
    margin-right: 10px;
    & > div > {
      width: 100%;
    }
  `,
  select: css`
    .MuiOutlinedInput-notchedOutline {
      border: none;
      border-radius: 0;
    }
    .MuiSvgIcon-root {
      right: 22px;
      top: 22px;
    }
  `,
};
