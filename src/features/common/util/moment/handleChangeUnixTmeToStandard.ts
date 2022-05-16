import moment from "moment";
export function handleChangeUnixTmeToStandard(publishTime: string) {
  const changeTime = moment(publishTime).fromNow(); // 15 minutes ago
  return changeTime;
}
