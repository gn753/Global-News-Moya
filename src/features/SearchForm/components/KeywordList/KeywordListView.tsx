import KeywordItem from "@src/features/SearchForm/components/KeywordList/KeywordItem";
import SectorsKeywordList from "@src/features/SearchForm/components/KeywordList/SectorKeywordList";
import Grid from "@mui/material/Grid";
import { css } from "@emotion/react";
import { useState } from "react";

interface Props {
  keywordListSorted: any;
  listView: "category" | "sectors" | "startup";
}

type NewsSearchParameter = {
  name: string;
  paramValue: string | null | undefined;
  exchange?: string | null | undefined;
};

interface TabState {
  currentTab: "category" | "sectors" | "startup";
}

export default function KeywordListView({
  keywordListSorted,
  listView,
}: Props) {
  return (
    <section css={wrap}>
      <Grid container spacing={1}>
        {listView === "category" &&
          keywordListSorted.category.map(
            (category: NewsSearchParameter, index: number) => (
              <Grid item xs={3} key={`categoryGrid-${index}`}>
                <KeywordItem
                  key={`{category}-${index}`}
                  keyType={listView}
                  params={category}
                >
                  {category.name}
                </KeywordItem>
              </Grid>
            )
          )}
      </Grid>
      <SectorsKeywordList
        listView={listView}
        keywordListSorted={keywordListSorted}
      />
      <Grid container spacing={1}>
        {listView === "startup" &&
          keywordListSorted.startup.map(
            (startup: NewsSearchParameter, index: number) => (
              <Grid item xs={3} key={`startupGrid-${index}`}>
                <KeywordItem
                  key={`{sectors}-${index}`}
                  keyType={listView}
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
