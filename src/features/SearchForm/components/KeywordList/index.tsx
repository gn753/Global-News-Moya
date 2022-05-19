import styled from "@emotion/styled";
import React, { useState, useMemo, useEffect } from "react";
import KeywordListView from "@src/features/SearchForm/components/KeywordList/KeywordListView";
import { MasterApiNewsKeywodList } from "@src/features/SearchForm/types/typeSearchForm";
import { useKeywordList } from "@src/features/SearchForm/hooks/useKeywordList";

type TabState = "category" | "sectors" | "startup";

function KeywordList({ data }: MasterApiNewsKeywodList) {
  const [currentTab, setCurrentTab] = useState<TabState>("category");
  const [listView, setListView] = useState<TabState>(currentTab);

  const { keywordListSorted } = useKeywordList(data);

  const onChangeKeywordTab = (tab: TabState) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    setListView(() => currentTab);
  }, [currentTab]);

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
        listView={listView}
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
