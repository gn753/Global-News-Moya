import { Theme, ThemeOptions } from "@mui/material/styles";
import "@emotion/react";
import { LibTheme } from "some-lib";

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
