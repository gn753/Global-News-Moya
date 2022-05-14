import styled from "@emotion/styled";
import {
  categoriesParameters,
  timeFiltereParameters,
  languageParameters,
  orderByParameters,
} from "@src/components/SearchForm/util/searchPrameterData";
import { css } from "@emotion/react";
import { atom, useRecoilState } from "recoil";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Grid from '@mui/material/Grid';



export const searchParamsState = atom({
  key: "searchParamsState",
  default: {
    mediaType: "mp.op",
    languages: "en",
    timeFilter: "mth1",
    orderBy: "top",
  },
});

export default function DropDownList() {
  const [params, setParams] = useRecoilState(searchParamsState);

  const handleMediaytype = (event: SelectChangeEvent) => {
    setParams({ ...params, mediaType: event.target.value });
  };

  const handleTimeFilter = (event: SelectChangeEvent) => {
    setParams({ ...params, timeFilter: event.target.value });
  };
  const handlelanguages = (event: SelectChangeEvent) => {
    setParams({ ...params, languages: event.target.value });
  };
  const handleOrderBy = (event: SelectChangeEvent) => {
    setParams({ ...params, orderBy: event.target.value });
  };

  return (

      <Grid 
        css={styles.wrap}
       container spacing={1} >
         <Grid item xs={3}>
         <FormControl  >
          <InputLabel id="demo-simple-select-label">언론사</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={params.mediaType}
            label="언론사"
            onChange={handleMediaytype}
          >
            {categoriesParameters.map((category, index: number) => {
              return (
                <MenuItem
                  value={category.parameter}
                  key={`{index}-${category.name}`}
                >
                  {category.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
         </Grid>
        <Grid item xs={3}>        <FormControl >
          <InputLabel id="demo-simple-select-label">발행일</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={params.timeFilter}
            label="언어"
            onChange={handleTimeFilter}
          >
            {timeFiltereParameters.map((timeFilter) => {
              return (
                <MenuItem
                  value={timeFilter.parameter}
                  key={`{index}-${timeFilter.name}`}
                >
                  {timeFilter.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl></Grid>
        <Grid item xs={3}>        <FormControl >
          <InputLabel id="demo-simple-select-label">언어</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={params.languages}
            label="언어"
            onChange={handlelanguages}
          >
            {languageParameters.map((languages) => {
              return (
                <MenuItem
                  value={languages.parameter}
                  key={`{index}-${languages.name}`}
                >
                  {languages.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl></Grid>
        <Grid item xs={3}>       <FormControl >
          <InputLabel id="demo-simple-select-label">정렬</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={params.orderBy}
            label="정렬"
            onChange={handleOrderBy}
          >
            {orderByParameters.map((orderBy) => {
              return (
                <MenuItem
                  value={orderBy.parameter}
                  key={`{index}-${orderBy.name}`}
                >
                  {orderBy.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl></Grid>
 
      </Grid>
  
  );
}

const DropContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 0 10px;
  box-shadow: 0px 1px 7px rgba(196, 195, 195, 0.25);
`;

const styles = {
  wrap:css`
    width: 750px;
    height: 120px;
    align-items: center;
    margin-left: 10px;
    margin-right:10px;
    & > div > {
      width: 100%;
    }
    .MuiGrid-item{
      .MuiFormControl-root{
        width: 100%;
      }
    }
  `
}