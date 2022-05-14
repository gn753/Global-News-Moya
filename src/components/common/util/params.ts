type Props = {
  keywordType: string;
  paramsValue: string;
  exchange?: string;
};

export function sortParameter({ keywordType, paramsValue, exchange }: Props) {
  if (keywordType && paramsValue) {
    const URL = `${keywordType}${paramsValue}`;
    return URL;
  } else if (keywordType && paramsValue && exchange) {
    const URL = `${keywordType}${paramsValue}${exchange}`;
    return URL;
  }
}
