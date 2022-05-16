import styled from "@emotion/styled";
import React, { useMemo, useState } from "react";
import { css } from "@emotion/react";
import SecotrKeywordItem from "@src/features/SearchForm/components/KeywordList/SectorKeywordList/SectorKeywordItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

interface Props {
  keywordListSorted: {
    category: object[];
    commodities: object[];
    events: object[];
    fx: object[];
    index: object[];
    macrotopic: object[];
    sectors: object[];
    startup: object[];
    tickers: object[];
    topics: object[];
  };
  currentTab: string;
}

export default function SectorsKeywordList({
  keywordListSorted,
  currentTab,
}: Props) {
  const [sectorCurrentTab, setSectorCurrentTab] = useState<string>("A"); // sector내 탭체인지
  const [activeIndex, setActiveIndex] = useState<number>(0); // sector Tab click UI change

  const handleSectorTabUiChange = (index: number) => {
    setActiveIndex(index);
  };
  const handleSectorTabChange = (event: React.SyntheticEvent) => {
    let target = event.target as HTMLDivElement;
    setSectorCurrentTab(target.innerHTML);
  };

  const tabListInSectors = useMemo(() => {
    let firstLetterOfKeyword = [];
    for (let i = 97; i <= 122; i++) {
      firstLetterOfKeyword.push(String.fromCharCode(i).toUpperCase());
    }
    return firstLetterOfKeyword;
  }, []);

  return (
    <>
      <div css={styles.wrap}>
        {currentTab === "sectors" && (
          <div>
            <ul css={styles.tabList}>
              {tabListInSectors.map((tabInSectors, index: number) => (
                <li
                  key={`${tabInSectors}-${index}`}
                  className={activeIndex === index ? "currentTab" : "none"}
                  onClick={() => handleSectorTabUiChange(index)}
                >
                  <div onClick={handleSectorTabChange}>{tabInSectors}</div>
                </li>
              ))}
            </ul>
            <Container maxWidth="lg" css={styles.keywordList}>
              <Grid container spacing={1}>
                {keywordListSorted.sectors
                  .filter(
                    (keywordFirstName: any) =>
                      keywordFirstName.name[0] === sectorCurrentTab
                  )
                  .map((filteredKeyword: any, index: number) => (
                    <Grid
                      item
                      xs={4}
                      css={styles.keywordList}
                      key={`SectorsGrid-${index}-${filteredKeyword}`}
                    >
                      <SecotrKeywordItem
                        key={`{sectors}-${index}-${filteredKeyword}`}
                        keyType={currentTab}
                        props={filteredKeyword}
                      >
                        {filteredKeyword.name}
                      </SecotrKeywordItem>
                    </Grid>
                  ))}
              </Grid>
            </Container>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  wrap: css``,
  tabList: css`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    li {
      width: 40px;
      height: 40px;
      font-family: "Noto Sans";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 40px;
      background-color: #fff;
      text-align: center;
    }
    li.currentTab {
      background-color: #8cece4;
    }
  `,
  keywordList: css`
    &:nth-of-type(3n-0) {
      border: none;
    }
  `,
};
