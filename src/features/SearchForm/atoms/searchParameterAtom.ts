import { atom} from "recoil";
export const searchParameterAtom = atom({
  key: "searchParamsAtom",
  default: {
    mediaType: "mp.op",
    languages: "en",
    timeFilter: "mth1",
    orderBy: "top",
  },
});