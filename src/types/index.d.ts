import { Theme, ThemeOptions } from "@mui/material/styles";

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
declare module "*.module.css";
declare module "*.module.scss";
declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger:string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    primaryColor: string;
    blueGreenColor: string;
    textDefault: string;
    newsTitle: string;
    myKeyword: string;
    subTitle: string;
    overLine: string;
    newsDescription: string;
  }
}

declare module "*.svg" {
  const content: any;
  export default content;
}
