import KeywordItem from "@src/features/SearchForm/components/KeywordList/KeywordItem";
import SectorsKeywordList from "@src/features/SearchForm/components/KeywordList/SectorKeywordList";
import Grid from "@mui/material/Grid";
import { css } from "@emotion/react";

interface Props {
  keywordListSorted: any;
  currentTab: "category" | "sectors" | "startup";
}

type NewsSearchParameter = {
  name: string;
  paramValue: string | null | undefined;
  exchange?: string | null | undefined;
};

export default function KeywordListView({
  keywordListSorted,
  currentTab,
}: Props) {
  return (
    <section css={wrap}>
      <Grid container spacing={1}>
        {currentTab === "category" &&
          keywordListSorted.category.map(
            (category: NewsSearchParameter, index: number) => (
              <Grid item xs={3} key={`categoryGrid-${index}`}>
                <KeywordItem
                  key={`{category}-${index}`}
                  keyType={currentTab}
                  params={category}
                >
                  {category.name}
                </KeywordItem>
              </Grid>
            )
          )}
      </Grid>
      <SectorsKeywordList
        currentTab={currentTab}
        keywordListSorted={keywordListSorted}
      />
      <Grid container spacing={1}>
        {currentTab === "startup" &&
          keywordListSorted.startup.map(
            (startup: NewsSearchParameter, index: number) => (
              <Grid item xs={3} key={`startupGrid-${index}`}>
                <KeywordItem
                  key={`{sectors}-${index}`}
                  keyType={currentTab}
                  params={startup}
                >
                  {startup.name}
                </KeywordItem>
              </Grid>
            )
          )}
      </Grid>
    </section>
  );
}

const wrap = css`
  max-height: 500px;
  overflow-y: scroll;
`;
