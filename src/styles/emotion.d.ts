import "@emotion/react";

declare module "*.svg" {
  const content: any;
  export default content;
}

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

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}