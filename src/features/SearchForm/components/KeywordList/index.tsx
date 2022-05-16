import styled from "@emotion/styled";
import React, { useState, useMemo } from "react";
import KeywordListView from "@src/features/SearchForm/components/KeywordList/KeywordListView";

type TabState = "category" | "sectors" | "startup";

function KeywordList({ data }: any) {
  const [currentTab, setCurrentTab] = useState<TabState>("category");

  const sortKeywordListAlphabets = (x: any, y: any) => {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  };

  const keywordListSorted: any = useMemo(() => {
    let copyKeywordList = data;
    copyKeywordList.category.sort(sortKeywordListAlphabets);
    copyKeywordList.sectors.sort(sortKeywordListAlphabets);
    copyKeywordList.startup.sort(sortKeywordListAlphabets);
    return copyKeywordList;
  }, [data]);

  const onChangeKeywordTab = (tab: TabState) => {
    setCurrentTab(tab);
  };

  return (
    <Wrap>
      <TabList>
        <Tab
          onClick={() => onChangeKeywordTab("category")}
          className={currentTab === "category" ? "currentTab" : "none"}
        >
          <span>Category</span>
        </Tab>
        <Tab
          onClick={() => onChangeKeywordTab("sectors")}
          className={currentTab === "sectors" ? "currentTab" : "none"}
        >
          <span>Sectors</span>
        </Tab>
        <Tab
          onClick={() => onChangeKeywordTab("startup")}
          className={currentTab === "startup" ? "currentTab" : "none"}
        >
          <span>Startups</span>
        </Tab>
      </TabList>
      <KeywordListView
        currentTab={currentTab}
        keywordListSorted={keywordListSorted}
      />
    </Wrap>
  );
}
export default React.memo(KeywordList);

const Wrap = styled.div`
  position: relative;
  z-index: 500;
  margin-top: 20px;
  background-color: #fff;
  overflow-y: hidden;
`;

const TabList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
  border: 1px solid #c4c4c4;
`;

const Tab = styled.li`
  width: 306px;
  height: 59px;
  background: #fff;
  text-align: center;
  transition: 0.3s;
  border-bottom: 4px solid transparent;
  span {
    display: inline-block;
    height: 100%;
    line-height: 59px;
    cursor: pointer;
  }
  &.currentTab {
    color: #48c0b7;
    border-bottom: 4px solid #48c0b7;
  }
`;
