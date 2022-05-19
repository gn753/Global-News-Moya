import moment from "moment";
export const changeUnixTmeToStandard = (publishTime: string) => {
  const changeTime = moment(publishTime).fromNow(); // 15 minutes ago
  return changeTime;
};
