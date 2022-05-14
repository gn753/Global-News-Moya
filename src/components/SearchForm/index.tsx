import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { useGetMasterApiQuery } from "@src/components/SearchForm/hooks/useGetMasterApiQuery";;
import KeywordList from "@src/components/SearchForm/KeywordList";
import Searchbar from "@src/components/SearchForm/Searchbar";

export default function SearchForm() {
  const { data} = useGetMasterApiQuery();
  const [keywordOpen, setKeywordOpen] = useState<boolean>(false);
  const handleKeywordOpen = ():void => {
    setKeywordOpen(!keywordOpen);
  };

  const keywordList = useMemo(() => {
    return data;
  }, [data]);

  return (
    <Section>
      <div className="container">
        <Searchbar handleKeywordOpen={handleKeywordOpen} />
        {keywordOpen && keywordList && <KeywordList data={keywordList} />}
      </div>
    </Section>
  );
}

const Section = styled.section`
  position: relative;
`;
