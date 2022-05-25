import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { css } from "@emotion/react";

export default function SelectList({
  naming,
  defaultValue,
  getValueChange,
  dropList,
}: any) {
  return (
    <div css={styles.wrap}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">{naming}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={defaultValue}
          label={naming}
          onChange={getValueChange}
          css={styles.select}
        >
          {dropList.map((dropItem: any, index: number) => {
            return (
              <MenuItem
                value={dropItem.parameter}
                key={`{index}-${dropItem.name}`}
              >
                {dropItem.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
const styles = {
  wrap: css`
    .MuiFormControl-root {
      max-width: 180px;
      min-width: 140px;
      width: 100%;
      height: 70px;
      margin-top: 30px;
    }
  `,
  select: css`
    .MuiFormControl-root {
      max-width: 180px;
      width: 100%;
      height: 70px;
      margin-top: 30px;
    }
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
