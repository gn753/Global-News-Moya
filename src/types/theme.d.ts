import { Theme, ThemeOptions } from "@mui/material/styles";


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