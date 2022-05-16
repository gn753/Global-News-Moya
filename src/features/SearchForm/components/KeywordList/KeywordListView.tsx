import KeywordItem from "@src/features/SearchForm/components/KeywordList/KeywordItem";
import SectorsKeywordList from "@src/features/SearchForm/components/KeywordList/SectorKeywordList";
import Grid from "@mui/material/Grid";
interface Props {
  keywordListSorted: any;
  currentTab: "category" | "sectors" | "startup";
}

export default function KeywordListView({
  keywordListSorted,
  currentTab,
}: Props) {
  return (
    <>
      <Grid container spacing={1}>
        {currentTab === "category" &&
          keywordListSorted.category.map((category: any, index: number) => (
            <Grid item xs={3}>
              <KeywordItem
                className="col-3"
                key={`{category}-${index}`}
                keyType={currentTab}
                props={category}
              >
                {category.name}
              </KeywordItem>
            </Grid>
          ))}
      </Grid>
      <SectorsKeywordList
        currentTab={currentTab}
        keywordListSorted={keywordListSorted}
      />
      <Grid container spacing={1}>
        {currentTab === "startup" &&
          keywordListSorted.startup.map((startup: any, index: number) => (
            <Grid item xs={3}>
              <KeywordItem
                key={`{sectors}-${index}`}
                keyType={currentTab}
                props={startup}
              >
                {startup.name}
              </KeywordItem>
            </Grid>
          ))}
      </Grid>
    </>
  );
}
