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
